import { Component, OnInit } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { Agency } from 'app/shared/interfaces/agency';
import { Stationtype } from 'app/shared/interfaces/stationtype';
import { IMultiSelectSettings, IMultiSelectTexts } from '../../../../node_modules/angular-2-dropdown-multiselect';
import { Region } from 'app/shared/interfaces/region';
import { SettingsService } from 'app/settings/settings.service';
import { ConfigService } from 'app/config.service';
import { Config } from 'protractor';
import { Regressiontype } from 'app/shared/interfaces/regressiontype';
import { Variabletype } from 'app/shared/interfaces/variabletype';
import { Statisticgroup } from 'app/shared/interfaces/statisticgroup';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'gs-sidebar',
  templateUrl: './gs-sidebar.component.html',
  styleUrls: ['./gs-sidebar.component.scss']
})
export class GsSidebarComponent implements OnInit {
  private configSettings: Config;
  public stationTypes: Array<Stationtype>;
  public regressionTypes: Array<Regressiontype>;
  public statisticGroups: Array<Statisticgroup>;
  public variableTypes: Array<Variabletype>;
  public regions: Array<Region>;
  public agencies: Array<Agency>;
  // Dropdown menu default text
  public myMSTexts: IMultiSelectTexts;
  public myRTSettings: IMultiSelectSettings;
  public params = new HttpParams();
  public region = [];
  public stationType = [];
  public agency = [];
  public statisticGroup = [];
  public regressionType = [];
  public variableType = [];
  public keyword = "";
  public timeout: any = null;

  constructor(private _nssService: NSSService, public _settingsservice: SettingsService, private _configService: ConfigService) {
    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    this._nssService.selectedPageNumber.subscribe((page: string) => {
      if (page == " ") {
        page = '1';
      }
      this.params = this.params.set('page', page);
      this._nssService.searchStations(this.params);
    });
    this._nssService.selectedPerPage.subscribe((perPage: string) => {
      if (perPage == " ") {
        perPage = '50';
      }
      this.params = this.params.set('pageCount', perPage);
      this._nssService.searchStations(this.params);
    });
    this._nssService.getStationTypes();
    this._nssService.stationTypes.subscribe((st: Array<Stationtype>) => {
      this.stationTypes = st;
    });
    this._nssService.getAgencies();
    this._nssService.agencies.subscribe((ag: Array<Agency>) => {
      this.agencies = ag;
    });
    this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.regionURL).subscribe((regions: Array<Region>) => {
      this.regions = regions;
    });
    this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.statisticGrpURL).subscribe((sg: Array<Statisticgroup>) => {
      this.statisticGroups = sg;
    });
    this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.variablesURL).subscribe((vt: Array<Variabletype>) => {
      this.variableTypes = vt;
    });
    this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.regTypeURL).subscribe((rt: Array<Regressiontype>) => {
      this.regressionTypes = rt;
    });

    // trigger initial stations search
    this._nssService.searchStations(this.params);

    this.myRTSettings = {
      pullRight: false,
      enableSearch: true,
      checkedStyle: 'glyphicon', // 'checkboxes',
      buttonClasses: 'btn btn-default',
      selectionLimit: 0,
      closeOnSelect: false,
      showCheckAll: true,
      showUncheckAll: true,
      dynamicTitleMaxItems: 2,
      maxHeight: '300px'
    };

    this.myMSTexts = {
      checkAll: 'Check all',
      uncheckAll: 'Uncheck all',
      checked: 'checked',
      checkedPlural: 'checked',
      defaultTitle: 'Select'
    };

  }  // end OnInit()

  // search stations
  public onSearch() {
    //set up params
    this.params = this.params.set('page', '1');
    this.params = this.params.set('regions', this.region.toString()); 
    this.params = this.params.set('agencies', this.agency.toString()); 
    this.params = this.params.set('stationtypes', this.stationType.toString()); 
    this.params = this.params.set('statisticgroups', this.statisticGroup.toString()); 
    this.params = this.params.set('regressiontypes', this.regressionType.toString()); 
    this.params = this.params.set('variableTypes', this.variableType.toString()); 
    this.params = this.params.set('filterText', this.keyword.toString()); 

    //regions
    this._settingsservice.getEntities(`${this.configSettings.gageStatsBaseURL + this.configSettings.regionURL}?${this.params.toString()}`).subscribe((reg: Array<Region>) => {
      this.regions = reg;
    });
    //station type
    this._settingsservice.getEntities(`${this.configSettings.gageStatsBaseURL + this.configSettings.stationTypeURL}?${this.params.toString()}`).subscribe((st: Array<Stationtype>) => {
      this.stationTypes = st;
    });
    //agency type
    this._settingsservice.getEntities(`${this.configSettings.gageStatsBaseURL + this.configSettings.agenciesURL}?${this.params.toString()}`).subscribe((at: Array<Agency>) => {
      this.agencies = at;
    });
    //statistic group
    this._settingsservice.getEntities(`${this.configSettings.gageStatsBaseURL + this.configSettings.statisticGrpURL}?${this.params.toString()}`).subscribe((sg: Array<Statisticgroup>) => {
      this.statisticGroups = sg;
    });
    //regression type
    this._settingsservice.getEntities(`${this.configSettings.gageStatsBaseURL + this.configSettings.regTypeURL}?${this.params.toString()}`).subscribe((rt: Array<Regressiontype>) => {
      this.regressionTypes = rt;
    });
    //variable type
    this._settingsservice.getEntities(`${this.configSettings.gageStatsBaseURL + this.configSettings.variablesURL}?${this.params.toString()}`).subscribe((vt: Array<Variabletype>) => {
      this.variableTypes = vt;
    });

    this._nssService.setSelectedFilterParams(this.params);
    this._nssService.searchStations(this.params);
  }

  //Waits for user to quit typing
  private onKeySearch(event: any) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.onSearch();
      }
    }, 750);
  }

  //Clear filters
  public clearGagestatsFilters() {
    //Reset search parameters to bring gage table back to default view
    this.params = new HttpParams();
    this.region = [];
    this.agency = [];
    this.stationType = []; 
    this.variableType = [];
    this.regressionType = [];
    this.statisticGroup = [];
    this.keyword = "";
    //Refresh the search without any filters selected
    this._nssService.setSelectedFilterParams(this.params);
    this._nssService.searchStations(this.params);
  }

}

