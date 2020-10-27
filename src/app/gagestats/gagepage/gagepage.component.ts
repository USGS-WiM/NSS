import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { IMultiSelectSettings, IMultiSelectTexts} from '../../../../node_modules/angular-2-dropdown-multiselect';
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
import { Agency } from 'app/shared/interfaces/agency';
import { Stationtype } from 'app/shared/interfaces/stationtype';
import { GageStatsSearchFilter } from 'app/shared/interfaces/gagestatsfilter';

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
  public myMSTexts: IMultiSelectTexts;
  public myRTSettings: IMultiSelectSettings;
  public loggedInRole;
  public code;
  public gage: Station;
  public editGage: boolean = false;
  public editGageInfo: boolean = false;
  public units;
  public tempItem;
  public itemBeingEdited;
  public editId;
  public newChar: GageCharacteristic;
  public newStat: GageStatistic;
  public variables;
  public regressionTypes;
  public statisticGroups;
  public addCitation: boolean;
  public selectedCitation;
  public statIds = [];
  public filteredStatGroups;
  public statGroupIds = [];
  public selectedStatGroup;
  public filteredGage: Station;
  public preferred: boolean = false;
  public predIntervals: boolean = false;
  public agencies: Agency[];
  public stationTypes: Stationtype[];
  public selectedParams: GageStatsSearchFilter;

  constructor(
    private _nssService: NSSService, 
    private _toasterService: ToasterService,
    private _configService: ConfigService, 
    private _modalService: NgbModal, 
    public _settingsservice: SettingsService) { 
    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    this.loggedInRole = localStorage.getItem('loggedInRole');
    this.modalSubscript = this._nssService.showGagePageModal.subscribe((result: GagePage) => {
      if (result.show) { 
          this.code = result.gageCode;
          this._nssService.getGagePageInfo(this.code).subscribe(res => {
            res.statistics.sort(function(a, b){
              return a.statisticGroupTypeID - b.statisticGroupTypeID;
            });
            this.gage = res;
            this._nssService.setSelectedRegion(this.gage.region);
            this.getCitations();
            this.getDisplayStatGroupID(this.gage);
            this.filterStatIds();
            this.showGagePageForm();
            this.selectedStatGroup = [];
            this.getPredictionIntervals();
          });
        }
    });
    this.modalElement = this.gagePageModal;

    this._nssService.selectedCitation.subscribe(c => {
      this.selectedCitation = c;
      if (this.newChar){  //If a new characteristic is created
        this.newChar.citationID = this.selectedCitation.id; //Set the citationID to the id of the selected citation from the citation modal
        console.log(this.newChar)
      } if (!this.itemBeingEdited.yearsofRecord) {  //If a characteristic is being edited
          this.itemBeingEdited.citationID = this.selectedCitation.id;
          console.log(this.itemBeingEdited)
      } if (this.newStat) { //If a new stat is created
          this.newStat.citationID = this.selectedCitation.id
      } if (this.itemBeingEdited.yearsofRecord) { //If itemBeingEdited is a stat
          this.itemBeingEdited.citationID = this.selectedCitation.id
      }
    }); 

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
    // get all agencys
    this._nssService.getAgencies();
    this._nssService.agencies.subscribe((ag: Array<Agency>) => {
      this.agencies = ag;
    });
    // get all station types
    this._nssService.getStationTypes();
    this._nssService.stationTypes.subscribe((st: Array<Stationtype>) => {
      this.stationTypes = st;
    });

    this.myRTSettings = {
      pullRight: false,
      enableSearch: false,
      checkedStyle: 'glyphicon', // 'checkboxes',
      buttonClasses: 'btn btn-default',
      selectionLimit: 0,
      closeOnSelect: false,
      showCheckAll: true,
      showUncheckAll: true,
      dynamicTitleMaxItems: 0,
      maxHeight: '300px'
    };

    this.myMSTexts = {
      checkAll: 'Check all',
      uncheckAll: 'Uncheck all',
      checked: 'checked',
      checkedPlural: 'checked',
      defaultTitle: 'Select'
    };

    //subscribe to selected Filters
    this._nssService.selectedFilterParams.subscribe((selectedParams: GageStatsSearchFilter) => { 
      this.selectedParams = selectedParams;
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
      s.statisticGroupName = this.getStatGroup(s.statisticGroupTypeID);
      if (s.citationID && !this.gage.citations.some(cit => cit.id === s.citationID)) {
        this.gage.citations.push(s.citation);
      }
    });
  }

  public showGagePageForm(){
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg', windowClass: 'modal-xl' });
  }

  public getDisplayStatGroupID(g) {
      var statGroup1;
      var statGroup2;
      const ids = [];
      const groupIds = [];
      g.statistics.forEach( function(item, index) {
        statGroup2 = item.statisticGroupTypeID;
        if ( statGroup1 != statGroup2 ) {
            statGroup1 = statGroup2
            ids.push((item.id))
            groupIds.push(statGroup2)
         }
        })
      this.statIds = ids;
      this.statGroupIds = groupIds;
  }

  public getPredictionIntervals() {  //Search gage for stats w/ a prediction interval, return true if present
    var pred = false;
    this.gage.statistics.forEach( function(item, idex) {
      if (item.predictionInterval) {
        return pred = true;
      }
    })
    this.predIntervals = pred;
  }

///////////////////Edit Gage Info Section//////////////////////////////
  
  public deleteGageStats(id){
    const check = confirm('Are you sure you want to delete this Gage?');
    if (check) {
      this._settingsservice.deleteEntityGageStats(id, this.configSettings.stationsURL).subscribe(result => {
          if (result.headers) { 
            this._nssService.outputWimMessages(result); 
            this.modalRef.close();    
            this._nssService.searchStations(this.selectedParams);
          }
      }, error => {
          if (error.headers) {this._nssService.outputWimMessages(error);
          } else { this._nssService.handleError(error); }
      });
    }
  }

  public saveGageInfo(gage){
    const newItem = JSON.parse(JSON.stringify(gage)); 
    ['agency', 'stationType'].forEach(e => delete newItem[e]);  
      this._settingsservice.putEntityGageStats(newItem.id, newItem, this.configSettings.stationsURL).subscribe(
        (res) => {
          this.editGageInfo = false;
          this.code = res.body['code']; // update code in case user changed it
          this._settingsservice.outputWimMessages(res);
          this.refreshgagepage();
          this._nssService.searchStations(this.selectedParams);
        }
      )
  }

  public editGageInformation(item) {
    this.editGageInfo = true;
    this.tempItem = JSON.parse(JSON.stringify(item));
  }

  public cancelEditGageInfo() {
    this.gage = this.tempItem;
    this.editGageInfo = false;
  }

  public endEditGageStats() {
    this.editGage = false;
    this.editGageInfo = false;
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
    if (this.itemBeingEdited) {  //If another item is being edited, cancel that first
        this.cancelEditRowClicked(this.itemBeingEdited);
        this.tempItem = JSON.parse(JSON.stringify(item));
        this.itemBeingEdited = item;
        this.editId = index
        item.isEditing = true;
    } else {
      this.tempItem = JSON.parse(JSON.stringify(item));
      this.itemBeingEdited = item;
      this.editId = index
      if (!item.predictionInterval) {
        item.predictionInterval = {variance: 0, lowerPredictionInterval: 0, upperPredictionInterval: 0};
      }
      item.isEditing = true;
    }
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
    const url = '';
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
  } 
    
  public deletePhysicalCharacteristic(deleteID: number) {
    const check = confirm('Are you sure you want to delete this Characteristic?');
      if (check) {
        const index = this.gage.characteristics.findIndex(item => item.id === deleteID);
        if (deleteID) {    // If characteristic has an ID number (if it comes from the service)
          this._settingsservice.deleteEntityGageStats(deleteID, this.configSettings.characteristicsURL).subscribe(
            (res) => {
              this.refreshgagepage();
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
      delete item.isEditing;
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
      citationID: null,
      predictionInterval: {}
    } 
    this.newStat.isEditing = true;
  } 

  public saveStat(item) {
    if (item.id) {  //If statistic has an id, it is already in the SS DB, make PUT request to edit
      const newItem = JSON.parse(JSON.stringify(item));  // Copy item
      ['regressionType', 'citation',
      'unitType', 'isEditing', 'statisticGroupType'].forEach(e => delete newItem[e]);  // Delete unneeded items
      this._settingsservice.putEntityGageStats(newItem.id, newItem, this.configSettings.statisticsURL).subscribe(
        (res) => {
          item.isEditing = false;
          this._settingsservice.outputWimMessages(res);
          this.refreshgagepage();
        }
      )
    } else {  //If statistic doesn't have an id, it needs to be added to the DB, make POST request
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
      res.statistics.sort(function(a, b){
        return a.statisticGroupTypeID - b.statisticGroupTypeID;
      });
      this.gage = res;
      this.getCitations();
      this.getDisplayStatGroupID(this.gage);
      this.filterStatIds();
      //this.selectedStatGroup = [];
      this.getPredictionIntervals();
    });
  }

  public getStatGroup(id) {
      return this.statisticGroups.find(sg => sg.id == id).name;
  }

///////////////////////Citation Modal Section/////////////////////

  public showManageCitationsModal() {
    const addManageCitationForm: ManageCitation = {
        show: true,
        addCitation: true,
        inGagePage: true
    } 
    this._nssService.setManageCitationsModal(addManageCitationForm);
  }


///////////////////////////////////////////////////////////////////////

  public filterStatIds() {
    this.filteredStatGroups = this.statisticGroups.filter((sg) => this.statGroupIds.includes(sg.id));
  }

  compareObjects(Obj1, Obj2) {
    // used to make sure the existing options are showing in selects
    return Obj1 && Obj2 ? Obj1.id === Obj2.id : Obj1 === Obj2;
  }

  ngOnDestroy() {
    this.modalSubscript.unsubscribe();
  }
}
