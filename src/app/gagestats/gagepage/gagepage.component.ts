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
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { LoaderService } from 'app/shared/services/loader.service';
import { Region } from 'app/shared/interfaces/region';
declare let gtag: Function;

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
  public tempGage;
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
  public statIdsChar = [];
  public filteredStatGroups;
  public filteredStatGroupsChar;
  public statGroupIds = [];
  public statGroupIdsChar = [];
  public selectedStatGroup;
  public selectedStatGroupChar;
  public filteredGage: Station;
  public preferred: boolean = false;
  public predIntervalsHeader: boolean = false;
  public errorsHeader: boolean = false;
  public agencies: Agency[];
  public stationTypes: Stationtype[];
  public selectedParams: HttpParams;
  public regions: Region[];
  public NWISLatLong = "N/A";

  constructor(
    private _nssService: NSSService, 
    private _toasterService: ToasterService,
    private _configService: ConfigService, 
    private _modalService: NgbModal, 
    public _settingsservice: SettingsService,
    private _http: HttpClient,
    private _loaderService: LoaderService) { 
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
            this.gage.characteristics.sort((a,b) => b.variableType.statisticGroupTypeID - a.variableType.statisticGroupTypeID);
            //this._nssService.setSelectedRegion(this.gage.region);
            this.getNWISInfo();
            this.getCitations();
            this.getDisplayStatGroupID(this.gage);
            this.filterStatIds();
            this.showGagePageForm();
            this.selectedStatGroup = [];
            this.selectedStatGroupChar = [];
            this.getTableHeaders();
          });
        }
    });
    this.modalElement = this.gagePageModal;

    this._nssService.selectedCitation.subscribe(c => {
      this.selectedCitation = c;
      if (this.newChar){  //If a new characteristic is created
        this.newChar.citationID = this.selectedCitation.id; //Set the citationID to the id of the selected citation from the citation modal
      } if (this.newStat) { //If a new stat is created
          this.newStat.citationID = this.selectedCitation.id
      } if(this.itemBeingEdited) { // If a row is being edited
          if (!this.itemBeingEdited.yearsofRecord) {  //If it is a characteristic is being edited
            this.itemBeingEdited.citationID = this.selectedCitation.id;
          }
          if (this.itemBeingEdited.yearsofRecord) { //If itemBeingEdited is a stat
            this.itemBeingEdited.citationID = this.selectedCitation.id
          }
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
    this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.regTypeURL).subscribe(res => {
      this.regressionTypes = res;
    });
    // get all stat groups 
    this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.statisticGrpURL).subscribe(res => {
      this.statisticGroups = res;
    });
    // get all agencys
    this._nssService.getAgencies();
    this._nssService.agencies.subscribe((ag: Array<Agency>) => {
      this.agencies = ag;
    });
    // get all regions
    this._nssService.regions.subscribe((regionList: Array<Region>) => {
      this.regions = regionList;
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
    this._nssService.selectedFilterParams.subscribe((selectedParams: HttpParams) => { 
      this.selectedParams = selectedParams;
    });
  }  // end OnInit
  
  public scrollToCitations(id){
    var itemToScrollTo = document.getElementById("citation-"+ id);
    itemToScrollTo.scrollIntoView({behavior: "smooth"});
  }
  
  public getNWISInfo(){
    this._http.get('https://waterservices.usgs.gov/nwis/site?site=' + this.gage.code, { responseType: 'text'})
    .subscribe(res => {
      var regex = /[+-]?((\d+(\.\d*)?)|(\.\d+))/g;
      var latLong = res.split(this.gage.name)[1].match(regex);
      this.NWISLatLong = latLong[0] + ', ' + latLong[1];
    }, error => { //for gages that do not have a waterservices page
      this.NWISLatLong = "N/A";
    });
  }

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
    g.statistics.forEach( function(item) {
      statGroup2 = item.statisticGroupTypeID;
      if ( statGroup1 != statGroup2 ) {
          statGroup1 = statGroup2
          ids.push((item.id))
          groupIds.push(statGroup2)
        }
      })
    this.statIds = ids;
    this.statGroupIds = groupIds;

    const idsChar = [];
    const groupIdsChar = [];
    g.characteristics.forEach( function(item) {
      statGroup2 = item.variableType.statisticGroupTypeID;
      if ( statGroup1 != statGroup2 ) {
          statGroup1 = statGroup2
          idsChar.push((item.id))
          groupIdsChar.push(statGroup2)
        }
      })
    this.statIdsChar = idsChar;
    this.statGroupIdsChar = groupIdsChar;
  }

  public getTableHeaders() {  //Search gage for stats w/ a prediction interval and errors, return true if present
    var pred = false;
    this.gage.statistics.forEach( function(item) {
      if (item.predictionInterval) {
        return pred = true;
      }
    })
    this.predIntervalsHeader = pred;

    var error = false;
    this.gage.statistics.forEach( function(item) {
      if (item.statisticErrors.length > 0) {
        return error = true;
      }
    })
    this.errorsHeader = error;
  }

///////////////////Edit Gage Info Section//////////////////////////////
  
  public deleteGageStats(id){
    const check = confirm('Are you sure you want to delete this Gage?');
    if (check) {
      this._settingsservice.deleteEntity(id, this.configSettings.gageStatsBaseURL + this.configSettings.stationsURL).subscribe(result => {
          if (result.headers) { 
            this._nssService.outputWimMessages(result); 
            this.modalRef.close();    
            this._nssService.searchStations(this.selectedParams);
            this._nssService.setRequeryGSFilter(true);
            gtag('event', 'click', { 'event_category': 'Delete Station', 'event_label': 'Station was deleted' });
          }
      }, error => {
          if (error.headers) {this._nssService.outputWimMessages(error);
          } else { this._nssService.handleError(error); }
      });
    }
  }

  public saveGageInfo(gage){
    const newItem = JSON.parse(JSON.stringify(gage)); 
    ['agency', 'stationType', 'region', 'statistics', 'characteristics'].forEach(e => delete newItem[e]);  
      this._settingsservice.putEntity(newItem.id, newItem, this.configSettings.gageStatsBaseURL + this.configSettings.stationsURL).subscribe(
        (res) => {
          this.editGageInfo = false;
          this.code = res.body['code']; // update code in case user changed it
          this._settingsservice.outputWimMessages(res);
          this.refreshgagepage();
          this._nssService.searchStations(this.selectedParams);
          gtag('event', 'click', { 'event_category': 'Put Station', 'event_label': 'Station was edited' });
        }
      )
  }

  public editGageInformation(item) {
    this.limitRowEdits();
    this.editGageInfo = true;
    this.tempGage = JSON.parse(JSON.stringify(item));
  }

  public cancelEditGageInfo() {
    if (this.editGageInfo) {
      this.gage = this.tempGage;
      this.editGageInfo = false;
    }
  }

  public endEditGageStats() {
    this.editGage = false;
    this.editGageInfo = false;
    this.limitRowEdits();
    this.refreshgagepage();
    delete(this.tempGage);
    delete(this.tempItem);
    delete(this.itemBeingEdited);
  } 

  public editRowClicked(item, index) {
    this.cancelEditGageInfo();
    this.limitRowEdits();
    if (!item.predictionInterval) { //If the stat doesn't have prediction intervals, create empty ones for display
      item.predictionInterval = {variance: null, lowerConfidenceInterval: null, upperConfidenceInterval: null};
    }
    this.tempItem = JSON.parse(JSON.stringify(item));
    this.itemBeingEdited = item;
    this.editId = index;
    item.isEditing = true;
    delete(this.selectedCitation);
  }

  public cancelEditRowClicked(item) {
    if (!this.itemBeingEdited.statisticGroupTypeID) {  // is a characteristic
      this.gage.characteristics[this.editId] = this.tempItem;
    }
    else if (this.itemBeingEdited.statisticGroupTypeID) {  // is a statistic
      this.gage.statistics[this.editId] = this.tempItem;
    }
    item.isEditing = false;
    delete(this.itemBeingEdited);
  }

///////////////////////Characteristic Section////////////////
  
  public addPhysicalCharacteristic() {
    this.cancelEditGageInfo();
    this.limitRowEdits();
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
    delete(this.selectedCitation);
  } 
    
  public deletePhysicalCharacteristic(deleteID: number) {
    const check = confirm('Are you sure you want to delete this Characteristic?');
      if (check) {
        const index = this.gage.characteristics.findIndex(item => item.id === deleteID);
        if (deleteID) {    // If characteristic has an ID number (if it comes from the service)
          this._settingsservice.deleteEntity(deleteID, this.configSettings.gageStatsBaseURL + this.configSettings.characteristicsURL).subscribe(
            (res) => {
              delete(this.itemBeingEdited);
              this.refreshgagepage();
              this._settingsservice.outputWimMessages(res);
              gtag('event', 'click', { 'event_category': 'Delete Characteristic', 'event_label': 'Characteristic was deleted' });
            }
          )
        } else { delete(this.newChar) }  // If the char does not have an ID (if it has not been saved to the service)
  }}

  public saveChar(item) {
    this._loaderService.showFullPageLoad();
    if (item.id) {  // If item has an id, then it is already in NSS DB
      const newItem = JSON.parse(JSON.stringify(item));  // Copy the edited char
      delete newItem.unitType, delete newItem.variableType, delete newItem.citation;  // Delete uneeded objects from the copy
      this._settingsservice.putEntity(newItem.id, newItem, this.configSettings.gageStatsBaseURL + this.configSettings.characteristicsURL).subscribe(
        (res) => { 
          item.isEditing = false;
          delete(this.itemBeingEdited);
          gtag('event', 'click', { 'event_category': 'Put Characteristic', 'event_label': 'Characteristic was edited'});
          this.refreshgagepage();
          this._settingsservice.outputWimMessages(res);
          this._loaderService.hideFullPageLoad();
        }
      )
    }; if (!item.id) {  // If an item doesn't have an ID, then it needs to be added to NSS
      delete item.isEditing;
      this._settingsservice.postEntity(item,this.configSettings.gageStatsBaseURL + this.configSettings.characteristicsURL).subscribe(
        (res: CharacteristicResponse) => { 
          item.isEditing = false; 
          delete(this.newChar);
          this.refreshgagepage();
          this._toasterService.pop('info', 'Info', 'Characteristic was created');
          gtag('event', 'click', { 'event_category': 'Post Characteristic', 'event_label': 'Characteristic was added'});
          this._loaderService.hideFullPageLoad();
      }, error => {
        if (this._settingsservice.outputWimMessages(error)) {return; }
        this._toasterService.pop('error', 'Error creating Characteristic', error._body.message || error.statusText);
        this._loaderService.hideFullPageLoad();
      });
    } 
  }

  public clearUnits(item) {
    item.unitTypeID = null; 
  }

  public defaultUnits(item) {
    var defaultUnitTypes = [];
    const variable = this.variables.find(r => r.id === (item.variableTypeID));

    if (variable && variable.englishUnitTypeID) defaultUnitTypes.push(variable.englishUnitType);
    if (variable && variable.metricUnitTypeID && (!variable.englishUnitTypeID || variable.metricUnitTypeID != variable.englishUnitTypeID)) 
      defaultUnitTypes.push(variable.metricUnitType);

    if (defaultUnitTypes.length == 0) return this.units;
    return defaultUnitTypes;
  }

///////////////////////Statistic Section/////////////////////
  
  public addStreamflowStatistic() {
    this.cancelEditGageInfo();
    this.limitRowEdits();
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
    delete(this.selectedCitation);
  } 

  public saveStat(item) {
    this._loaderService.showFullPageLoad();
    if (item.id) {  //If statistic has an id, it is already in the SS DB, make PUT request to edit
      const newItem = JSON.parse(JSON.stringify(item));  // Copy stat
      if ( !newItem.predictionInterval.variance && !newItem.predictionInterval.lowerConfidenceInterval && !newItem.predictionInterval.upperConfidenceInterval ) {
        delete(newItem.predictionInterval), delete(newItem.predictionIntervalID)  //Delete if empty
      }
      ['regressionType', 'citation',
      'unitType', 'isEditing', 'statisticGroupType'].forEach(e => delete newItem[e]);  // Delete unneeded items
      this._settingsservice.putEntity(newItem.id, newItem, this.configSettings.gageStatsBaseURL + this.configSettings.statisticsURL).subscribe(
        (res) => {
          item.isEditing = false;
          delete(this.itemBeingEdited);
          this._settingsservice.outputWimMessages(res);
          gtag('event', 'click', { 'event_category': 'Put Statistic', 'event_label': 'Statistic was edited'});
          this.refreshgagepage();
          this._loaderService.hideFullPageLoad();
        }
      )
    } else {  //If statistic doesn't have an id, it needs to be added to the DB, make POST request
      if ( !item.predictionInterval.variance && !item.predictionInterval.lowerConfidenceInterval && !item.predictionInterval.upperConfidenceInterval ) {
        delete(item.predictionInterval)
      }
      this._settingsservice.postEntity(item,this.configSettings.gageStatsBaseURL + this.configSettings.statisticsURL).subscribe(
        (res: StatisticResponse) => {
          item.isEditing = false;
          delete(this.newStat);  // Delete newStat from table
          delete(this.itemBeingEdited);
          this.refreshgagepage();
          this._toasterService.pop('info', 'Info', 'Statistic was created');
          gtag('event', 'click', { 'event_category': 'Post Statistic', 'event_label': 'Statistic was added'});
          this._loaderService.hideFullPageLoad();
        } 
      ) 
    }
  }

  public deleteStatistic(deleteID: number) {
    const check = confirm('Are you sure you want to delete this Statistic?');
      if (check) {
        const index = this.gage.statistics.findIndex(item => item.id === deleteID);
        if (deleteID) {    // If statistic has an ID number (if it comes from the service)
          this._settingsservice.deleteEntity(deleteID, this.configSettings.gageStatsBaseURL + this.configSettings.statisticsURL).subscribe(
            (res) => {
              delete(this.itemBeingEdited);
              this.refreshgagepage();
              this._settingsservice.outputWimMessages(res);
              gtag('event', 'click', { 'event_category': 'Delete Statistic', 'event_label': 'Statistic was deleted' });

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
      this._nssService.setRequeryGSFilter(true);
      this.getCitations();
      this.getDisplayStatGroupID(this.gage);
      this.filterStatIds();
      this.getTableHeaders();
    });
  }

  public getStatGroup(id) {
      return this.statisticGroups.find(sg => sg.id == id).name;
  }

  public onCloseModal() {
    delete(this.selectedCitation);
    this.editGage = false;
  }

///////////////////////Citation Modal Section/////////////////////

  public showManageCitationsModal(c) {
    const addManageCitationForm: ManageCitation = {
        show: true,
        addCitation: true,
        inGagePage: true,
        selectCitation: c.citationID
    } 
    this._nssService.setManageCitationsModal(addManageCitationForm);
  }

///////////////////////////////////////////////////////////////////////

  public filterStatIds() {
    this.filteredStatGroups = this.statisticGroups.filter((sg) => this.statGroupIds.includes(sg.id));
    this.filteredStatGroupsChar = this.statisticGroups.filter((sg) => this.statGroupIdsChar.includes(sg.id));
  }

  public limitRowEdits() {
    if (this.itemBeingEdited) {  //If another item is being edited, cancel that first
      this.cancelEditRowClicked(this.itemBeingEdited);
    }
    if (this.newChar) {
      delete(this.newChar);
    }
    if (this.newStat) {
      delete(this.newStat);
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
