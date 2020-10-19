import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { GagePage } from 'app/shared/interfaces/gagepage';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { Station } from 'app/shared/interfaces/station';
import { SettingsService } from '../../settings/settings.service';
import { GageCharacteristic } from 'app/shared/interfaces/gagecharacteristic';
import { CharacteristicResponse } from 'app/shared/interfaces/characteristicresponse';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { GageStatistic } from 'app/shared/interfaces/gagestatistic';
import { StatisticResponse } from 'app/shared/interfaces/statisticresponse';
import { ManageCitation } from 'app/shared/interfaces/managecitations';

@Component({
  selector: 'gagePageModal',
  templateUrl: './gagepage.component.html',
  styleUrls: ['./gagepage.component.scss']
})
export class GagepageComponent implements OnInit, OnDestroy {
  @ViewChild('gagePage', {static: true}) public gagePageModal; // : ModalDirective;  //modal for validator
  @ViewChild('CitationForm', { static: true }) citationForm;
  private modalSubscript;
  private configSettings: Config;
  private modalElement: any;
  public modalRef;
  public loggedInRole;
  public code;
  public gage: Station;
  public editGage: boolean;
  public units;
  public tempItem;
  public itemBeingEdited;
  public editItem;
  public editId;
  public newChar: GageCharacteristic;
  public newStat: GageStatistic;
  public variables;
  public regressionTypes;
  public statisticGroups;
  public addCitation: boolean;

  constructor(
    private _nssService: NSSService, 
    private _toasterService: ToasterService,
    private _configService: ConfigService, 
    private _modalService: NgbModal, 
    public _settingsservice: SettingsService) { 
    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    this.editGage = false;
    this.loggedInRole = localStorage.getItem('loggedInRole');
    this.modalSubscript = this._nssService.showGagePageModal.subscribe((result: GagePage) => {
      if (result.show) { 
          this.code = result.gageCode;
          this._nssService.getGagePageInfo(this.code).subscribe(res => {
            this.gage = res;
            this.getCitations();
            this.showGagePageForm();
          });
        }
    });
    this.modalElement = this.gagePageModal;

    // get all unit types 
    this._nssService.getUnitTypes().subscribe(res => {
      this.units = res;
    });

    // get all variable types
    this._nssService.getVariableTypes().subscribe( res =>{
      this.variables = res;
    });

    // get all regression types
    this._settingsservice.getEntities(this.configSettings.regTypeURL).subscribe(res => {
      this.regressionTypes = res;
  });

    // get all stat groups 
    this._settingsservice.getEntities(this.configSettings.statisticGrpURL).subscribe(res => {
      this.statisticGroups = res;
    });

  }  // end OnInit
  
  public getCitations(){
    this.gage.citations = [];
    this.gage.characteristics.forEach(c => {
      if (c.citationID && !this.gage.citations.some(cit => cit.id === c.citationID)) {
        this.gage.citations.push(c.citation);
      }
    });

    this.gage.statistics.forEach(s => {
      if (s.citationID && !this.gage.citations.some(cit => cit.id === s.citationID)) {
        this.gage.citations.push(s.citation);
      }
    });
  }

  public showGagePageForm(){
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg', windowClass: 'modal-xl' });
  }

///////////////////Edit Gage Info Section//////////////////////////////
  
  public editGageStats() {
    this.editGage = true;
  }

  public endEditGageStats() {
    this.editGage = false;
    if (this.itemBeingEdited) {
      this.itemBeingEdited.isEditing = false;
    }
    if (this.newChar) {
      this.deletePhysicalCharacteristic(this.newChar.id);
    }
    if (this.newStat) {
      this.deleteStatistic(this.newStat.id);
    }
    this.refreshgagepage();
  } 

  public editRowClicked(item, index) {
    this.tempItem = JSON.parse(JSON.stringify(item));
    this.itemBeingEdited = item;
    this.editId = index
    item.isEditing = true;
  }

  public cancelEditRowClicked(item) {
    if (!this.itemBeingEdited.statisticGroupTypeID) {  // is a characteristic
      this.gage.characteristics[this.editId] = this.tempItem;
    }
    else if (this.itemBeingEdited.statisticGroupTypeID) {  // is a statistic
      this.gage.statistics[this.editId] = this.tempItem;
    }
    
    item.isEditing = false;
  }

  public submitGage() {
    const url = ''
    this._settingsservice.putEntityGageStats('', this.configSettings.stationsURL, url).subscribe()
  }

///////////////////////Characteristic Section////////////////
  
  public addPhysicalCharacteristic() {
    // Create new characteristic
    this.newChar = {
      stationID: this.gage.id,
      value: null,
      comments: "",
      variableTypeID: null,
      unitTypeID: null,
      citationID: null,
    }
    
  this.newChar.isEditing = true;
  //this.itemBeingEdited = this.newChar;
  } 
    
  public deletePhysicalCharacteristic(deleteID: number) {
    const check = confirm('Are you sure you want to delete this Characteristic?');
      if (check) {
        const index = this.gage.characteristics.findIndex(item => item.id === deleteID);
        if (deleteID) {    // If characteristic has an ID number (if it comes from the service)
          this._settingsservice.deleteEntityGageStats(deleteID, this.configSettings.characteristicsURL).subscribe(
            (res) => {
              this.refreshgagepage();
              //this.gage.characteristics.splice(index, 1)
              this._settingsservice.outputWimMessages(res);
            }
          )
        } else { delete(this.newChar) }  // If the char does not have an ID (if it has not been saved to the service)
  }}

  public saveChar(item) {
    if (item.id) {  // If item has an id, then it is already in NSS DB
      const newItem = JSON.parse(JSON.stringify(item));  // Copy the edited char
      delete newItem.unitType, delete newItem.variableType, delete newItem.citation;  // Delete uneeded objects from the copy
      this._settingsservice.putEntityGageStats(newItem.id, newItem, this.configSettings.characteristicsURL).subscribe(
        (res) => { 
          item.isEditing = false;
          this.refreshgagepage();
          this._settingsservice.outputWimMessages(res);
        }
      )
    }; if (!item.id) {  // If an item doesn't have an ID, then it needs to be added to NSS
      this._settingsservice.postEntityGageStats(item, this.configSettings.characteristicsURL).subscribe(
        (res: CharacteristicResponse) => { 
          item.isEditing = false; 
          delete(this.newChar);
          this.refreshgagepage();
          this._toasterService.pop('info', 'Info', 'Characteristic was created');
      }, error => {
        if (this._settingsservice.outputWimMessages(error)) {return; }
        this._toasterService.pop('error', 'Error creating Characteristic', error._body.message || error.statusText);
      });
    } 
  }

///////////////////////Statistic Section/////////////////////
  
  public addStreamflowStatistic() {
    this.newStat = {
      stationID: this.gage.id,
      value: null,
      comments: "",
      isPreferred: true,
      regressionTypeID: null,
      statisticGroupTypeID: null,
      unitTypeID: null,
      yearsofRecord: null,
      citationID: null
    } 
    this.editRowClicked(this.newStat, this.newStat.id);
  } 

  public saveStat(item) {
    if (item.id) {
      const newItem = JSON.parse(JSON.stringify(item));  // Copy item, delete unnecessary elements
      ['regressionType', 'citation', 
      'unitType', 'isEditing'].forEach(e => delete newItem[e]);  // Delete unneeded items
      this._settingsservice.putEntityGageStats(newItem.id, newItem, this.configSettings.statisticsURL).subscribe(
        (res) => {
          item.isEditing = false;
          this._settingsservice.outputWimMessages(res);
          this.refreshgagepage();
        }
      )
    } else {  
      this._settingsservice.postEntityGageStats(item, this.configSettings.statisticsURL).subscribe(
        (res: StatisticResponse) => {
          item.isEditing = false;
          delete(this.newStat);  // Delete newStat from table
          this.refreshgagepage();
          this._toasterService.pop('info', 'Info', 'Statistic was created');
        } 
      ) 
    }
  }

  public deleteStatistic(deleteID: number) {
    const check = confirm('Are you sure you want to delete this Statistic?');
      if (check) {
        const index = this.gage.statistics.findIndex(item => item.id === deleteID);
        if (deleteID) {    // If statistic has an ID number (if it comes from the service)
          this._settingsservice.deleteEntityGageStats(deleteID, this.configSettings.statisticsURL).subscribe(
            (res) => {
              this.refreshgagepage();
              this._settingsservice.outputWimMessages(res);
            }
          )
        } else { delete(this.newStat) }  // If the stat does not have an ID (if it has not been saved to the service)
      }
  } 

  private refreshgagepage() {
    this._nssService.getGagePageInfo(this.code).subscribe(res => {
      this.gage = res;
      this.getCitations();
    });
  }

  getStatGroup(id) {
      return this.statisticGroups.find(sg => sg.id == id).name;
  }

///////////////////////Citation Modal Section/////////////////////

  public showManageCitationsModal() {
    const addManageCitationForm: ManageCitation = {
        show: true,
        addCitation: true
    }
    this._nssService.setManageCitationsModal(addManageCitationForm);
}


///////////////////////////////////////////////////////////////////////

  compareObjects(Obj1, Obj2) {
    // used to make sure the existing options are showing in selects
    return Obj1 && Obj2 ? Obj1.id === Obj2.id : Obj1 === Obj2;
  }

  ngOnDestroy() {
    this.modalSubscript.unsubscribe();
  }
}
