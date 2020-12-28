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
import { GageStatsFilterClass, GageStatsSearchFilter } from 'app/shared/interfaces/gagestatsfilter';
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
  public params: GageStatsSearchFilter = new GageStatsFilterClass();
  public test = new HttpParams();
  public region = '';
  public stationType = '';
  public agency = '';
  public statisticGroup = '';
  public regressionType = '';
  public variableType = '';
  public fullURL: string;
  constructor(private _nssService: NSSService, public _settingsservice: SettingsService, private _configService: ConfigService) {
    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    this._nssService.selectedPageNumber.subscribe((page: string) => {
      if (page == " ") {
        page = '1';
      }
      this.test = this.test.set('page', page)
      this._nssService.searchStations(this.test);
    });
    this._nssService.selectedPerPage.subscribe((perPage: string) => {
      if (perPage == " ") {
        perPage = '50';
      }
      this.test = this.test.set('pageCount', perPage)
      this._nssService.searchStations(this.test);
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
    this._nssService.searchStations(this.test);

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
    this.test = this.test.set('page', '1');

    this.test = this.test.set('regions', this.region); 
    this.test = this.test.set('agencies', this.agency); 
    this.test = this.test.set('stationtypes', this.stationType); 
    this.test = this.test.set('statisticgroups', this.statisticGroup); 
    this.test = this.test.set('regressiontypes', this.regressionType); 
    this.test = this.test.set('variableTypes', this.variableType); 

    //regions
    this.fullURL = `${this.configSettings.gageStatsBaseURL + this.configSettings.regionURL}?${this.test.toString()}`;
    this._settingsservice.getEntities(this.fullURL).subscribe((reg: Array<Region>) => {
      this.regions = reg;
    });

    //station type
    this.fullURL = `${this.configSettings.gageStatsBaseURL + this.configSettings.stationTypeURL}?${this.test.toString()}`;
    this._settingsservice.getEntities(this.fullURL).subscribe((st: Array<Stationtype>) => {
      this.stationTypes = st;
    });

    //agency type
    this.fullURL = `${this.configSettings.gageStatsBaseURL + this.configSettings.agenciesURL}?${this.test.toString()}`;
    this._settingsservice.getEntities(this.fullURL).subscribe((at: Array<Agency>) => {
      this.agencies = at;
    });

    //statistic group
    this.fullURL = `${this.configSettings.gageStatsBaseURL + this.configSettings.statisticGrpURL}?${this.test.toString()}`;
    this._settingsservice.getEntities(this.fullURL).subscribe((sg: Array<Statisticgroup>) => {
      this.statisticGroups = sg;
    });

    //regression type
    this.fullURL = `${this.configSettings.gageStatsBaseURL + this.configSettings.regTypeURL}?${this.test.toString()}`;
    this._settingsservice.getEntities(this.fullURL).subscribe((rt: Array<Regressiontype>) => {
      this.regressionTypes = rt;
    });

    //variable type
    this.fullURL = `${this.configSettings.gageStatsBaseURL + this.configSettings.variablesURL}?${this.test.toString()}`;
    this._settingsservice.getEntities(this.fullURL).subscribe((vt: Array<Variabletype>) => {
      this.variableTypes = vt;
    });
    console.log(this.test)
    
    this._nssService.setSelectedFilterParams(this.test);
    this._nssService.searchStations(this.test);
  }

  //Clear filters
  public clearGagestatsFilters() {
    //Reset search parameters to bring gage table back to default view
    this.test = new HttpParams();
    this.region = "";
    this.agency = "";
    this.stationType = 
    this.variableType = "";
    this.regressionType = "";
    this.statisticGroup = "";

    //Refresh the search without any filters selected
    this._nssService.setSelectedFilterParams(this.test);
    this._nssService.searchStations(this.test);
  }

}

