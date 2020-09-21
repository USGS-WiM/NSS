import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { GagePage } from 'app/shared/interfaces/gagepage';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { Station } from 'app/shared/interfaces/station';
import { SettingsService } from '../../settings/settings.service';
import { GageCharacteristic } from 'app/shared/interfaces/gagecharacteristic';
import { ThrowStmt } from '@angular/compiler';
import { CharacteristicResponse } from 'app/shared/interfaces/characteristicresponse';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { GageStatistic } from 'app/shared/interfaces/gagestatistic';
import { Unittype } from 'app/shared/interfaces/unittype';
import { Regressiontype } from 'app/shared/interfaces/regressiontype';
import { Citation } from 'app/shared/interfaces/citation';
import { Variabletype } from 'app/shared/interfaces/variabletype';
import { StatisticResponse } from 'app/shared/interfaces/statisticresponse';

@Component({
  selector: 'gagePageModal',
  templateUrl: './gagepage.component.html',
  styleUrls: ['./gagepage.component.scss']
})
export class GagepageComponent implements OnInit, OnDestroy {
  @ViewChild('gagePage', {static: true}) public gagePageModal; // : ModalDirective;  //modal for validator
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
        for (const unit of this.units) {
          unit.unit = unit.name;
          unit.abbr = unit.abbreviation;
        }
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
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
  }

///////////////////Edit Gage Info Section//////////////////////////////
  
  public editGageStats() {
    this.editGage = true;
  }

  public endEditGageStats() {
    this.editGage = false;

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
      id: null,
      stationID: this.gage.id,
      value: 1,
      comments: " ",
      variableTypeID: 1,
      unitTypeID: null,
      citationID: 1,
      units: "",
      citation: <Citation>{
        id: 1,
        title: "none",
        author: "none",
        citationURL: "null"},
      unitType: <Unittype>{id: 1,
        name: "dimensionless",
        abbreviation: "dim",
        unitSystemTypeID: 3},
      variableType: <Variabletype>{id: 1,
        name: "Drainage Area",
        code: "DRNAREA",
        description: "Area that drains to a point on a stream"},
    }
    // Change characteristic elements 
    this.newChar.unitTypeID = this.newChar.unitType.id;
    this.newChar.citationID = this.newChar.citation.id;
    this.newChar.variableTypeID = this.newChar.variableType.id;
  
  this.gage.characteristics.push(this.newChar);
  this.editRowClicked(this.newChar, this.newChar.id);
  } 
    
  public deletePhysicalCharacteristic(deleteID: number) {
    const check = confirm('Are you sure you want to delete this Characteristic?');
      if (check) {
        const index = this.gage.characteristics.findIndex(item => item.id === deleteID);
        if (deleteID) {    // If characteristic has an ID number (if it comes from the service)
          this._settingsservice.deleteEntityGageStats(deleteID, this.configSettings.characteristicsURL).subscribe(
            (res) => {
              this.gage.characteristics.splice(index, 1)
              this._settingsservice.outputWimMessages(res);
            }
          )
        } else { this.gage.characteristics.splice(index, 1) }  // If the char does not have an ID (if it has not been saved to the service)
  }}

  public saveChar(item) {
    if (item.id) {  // If item has an item, then it is already in NSS
      this._settingsservice.putEntityGageStats(item.id, item, this.configSettings.characteristicsURL).subscribe(
        (res) => { 
          item.isEditing = false;
          this._settingsservice.outputWimMessages(res); 
        }
      )
    }; if (!item.id) {  // If an item doesn't have an ID, then it needs to be added to NSS
      const newItem = JSON.parse(JSON.stringify(item)); // Copy item
      delete newItem.citation, delete newItem.unitType, delete newItem.variableType;  // Delete unneeded elements
      this._settingsservice.postEntityGageStats(newItem, this.configSettings.characteristicsURL).subscribe(
        (res: CharacteristicResponse) => { 
          item.isEditing = false; 
          const index = (this.gage.characteristics.length - 1);
          this.gage.characteristics.splice(index, 1);  // Delete newChar from table
          const url = this.configSettings.characteristicsURL + "/" + res.id;
          this._settingsservice.getEntitiesGageStats(url).subscribe((resp: GageCharacteristic) => {
              this.gage.characteristics.push(resp);  // Add new characteristic to table
              this._toasterService.pop('info', 'Info', 'Characteristic was created');
            }
          );
      }, error => {
        if (this._settingsservice.outputWimMessages(error)) {return; }
        this._toasterService.pop('error', 'Error creating Characteristic', error._body.message || error.statusText);
      });
    } 
  }

///////////////////////Statistic Section/////////////////////
  
  public addStreamflowStatistic() {
    this.newStat = {
      id: null,
      stationID: this.gage.id,
      value: "",
      citationID: 0,
      citation: <Citation>{},
      comments: "",
      isPreferred: true,
      regressionTypeID: 0,
      statisticErrors: <any>{},
      unitType: <Unittype>{},
      regressionType: <Regressiontype>{},
      statisticGroupTypeID: 0,
      unitTypeID: 0,
      yearsofRecord: 0,
    } 
    this.gage.statistics.push(this.newStat);
    this.editRowClicked(this.newStat, this.newStat.id);
  } 

  public saveStat(item, sIndex) {
    //item.unitTypeID = item.unitType.id;
    const newItem = item.omit(item, ['id', 'regressionType', 'statisticErrors', 
    'citation', 'citationID', 'unitType', 'isEditing']);  // Copy item, delete unnecessary elements
    
    if (newItem.id) {
      this._settingsservice.putEntityGageStats(newItem.id, newItem, this.configSettings.statisticsURL).subscribe(
        (res) => {
          item.isEditing = false;
        }
      )
    }; if (!newItem.id) {  
      this._settingsservice.postEntityGageStats(newItem, this.configSettings.statisticsURL).subscribe(
        (res: StatisticResponse) => {
          item.isEditing = false;
          const index = (this.gage.statistics.length - 1);
          this.gage.statistics.splice(index, 1);  // Delete newStat from table
          const url = this.configSettings.statisticsURL + "/" + res.id;
          this._settingsservice.getEntitiesGageStats(url).subscribe( (resp: GageStatistic) => {
            resp.unitType = this.units[resp.unitTypeID];
            this.gage.statistics.push(resp);
          }) 
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
              this.gage.statistics.splice(index, 1)
              this._settingsservice.outputWimMessages(res);
            }
          )
        } else { this.gage.statistics.splice(index, 1) }  // If the stat does not have an ID (if it has not been saved to the service)
      }
  } 
  compareObjects(Obj1, Obj2) {
    // used to make sure the existing options are showing in selects
    return Obj1 && Obj2 ? Obj1.id === Obj2.id : Obj1 === Obj2;
  }

  ngOnDestroy() {
    this.modalSubscript.unsubscribe();
  }
}
