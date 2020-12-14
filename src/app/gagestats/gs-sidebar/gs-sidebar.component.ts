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

  constructor(private _nssService: NSSService, public _settingsservice: SettingsService, private _configService: ConfigService) {
    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    this._nssService.selectedPageNumber.subscribe((page: string) => {
      this.params.page = page;
      this._nssService.searchStations(this.params);
    });
    this._nssService.selectedPerPage.subscribe((perPage: number) => {
      this.params.pageCount = perPage;
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

  public changeRegions(){
    this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.regionURL +'?'+ 
                                      this.configSettings.stationTypeURL + '=' + this.params.stationType +'&'+
                                      this.configSettings.agenciesURL + '=' + this.params.agency +'&'+
                                      this.configSettings.statisticGrpURL + '=' + this.params.statisticGroup +'&'+
                                      this.configSettings.regTypeURL + '=' + this.params.regressionType +'&'+
                                      this.configSettings.variablesURL + '=' + this.params.variableType
                                      ).subscribe((reg: Array<Region>) => {
      this.regions = reg;
    });
  }

  public changeStationType(){
    this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.stationTypeURL +'?'+ 
                                      this.configSettings.regionURL + '=' + this.params.region +'&'+
                                      this.configSettings.agenciesURL + '=' + this.params.agency +'&'+
                                      this.configSettings.statisticGrpURL + '=' + this.params.statisticGroup +'&'+
                                      this.configSettings.regTypeURL + '=' + this.params.regressionType +'&'+
                                      this.configSettings.variablesURL + '=' + this.params.variableType
                                      ).subscribe((st: Array<Stationtype>) => {
      this.stationTypes = st;
    });
  }

  public changeAgencyType(){
    this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.agenciesURL +'?'+ 
                                      this.configSettings.regionURL + '=' + this.params.region +'&'+
                                      this.configSettings.stationTypeURL + '=' + this.params.stationType +'&'+
                                      this.configSettings.statisticGrpURL + '=' + this.params.statisticGroup +'&'+
                                      this.configSettings.regTypeURL + '=' + this.params.regressionType +'&'+
                                      this.configSettings.variablesURL + '=' + this.params.variableType
                                      ).subscribe((at: Array<Agency>) => {
      this.agencies = at;
    });
  }

  public changeStatisticGroupType(){
    this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.statisticGrpURL +'?'+ 
                                      this.configSettings.regionURL + '=' + this.params.region +'&'+
                                      this.configSettings.stationTypeURL + '=' + this.params.stationType +'&'+
                                      this.configSettings.agenciesURL + '=' + this.params.agency +'&'+
                                      this.configSettings.regTypeURL + '=' + this.params.regressionType +'&'+
                                      this.configSettings.variablesURL + '=' + this.params.variableType
                                      ).subscribe((sg: Array<Statisticgroup>) => {
      this.statisticGroups = sg;
    });
  }

  public changeRegressionType(){
    this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.regTypeURL +'?'+ 
                                      this.configSettings.regionURL + '=' + this.params.region +'&'+
                                      this.configSettings.stationTypeURL + '=' + this.params.stationType +'&'+
                                      this.configSettings.agenciesURL + '=' + this.params.agency +'&'+
                                      this.configSettings.statisticGrpURL + '=' + this.params.statisticGroup +'&'+
                                      this.configSettings.variablesURL + '=' + this.params.variableType
                                      ).subscribe((rt: Array<Regressiontype>) => {
      this.regressionTypes = rt;
    });
  }

  public changeVariableTypes(){
    this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.variablesURL +'?'+ 
                                      this.configSettings.stationTypeURL + '=' + this.params.stationType +'&'+
                                      this.configSettings.agenciesURL + '=' + this.params.agency +'&'+
                                      this.configSettings.statisticGrpURL + '=' + this.params.statisticGroup +'&'+
                                      this.configSettings.regTypeURL + '=' + this.params.regressionType +'&'+
                                      this.configSettings.regionURL + '=' + this.params.region
                                      ).subscribe((vt: Array<Variabletype>) => {
      this.variableTypes = vt;
    });
  }

  public onRegionSelect(){
    this.changeStationType();
    this.changeAgencyType();
    this.changeStatisticGroupType();
    this.changeRegressionType();
    this.changeVariableTypes();
    this.onSearch();
  }

  public onStationSelect(){
    this.changeRegions();
    this.changeAgencyType();
    this.changeStatisticGroupType();
    this.changeRegressionType();
    this.changeVariableTypes();
    this.onSearch();
  }

  public onAgencySelect(){
    this.changeRegions();
    this.changeStationType();
    this.changeStatisticGroupType();
    this.changeRegressionType();
    this.changeVariableTypes();
    this.onSearch();
  }

  public onStatGrpSelect(){
    this.changeRegions();
    this.changeStationType();
    this.changeAgencyType();
    this.changeRegressionType();
    this.changeVariableTypes();
    this.onSearch();
  }

  public onRegTypeSelect(){
    this.changeRegions();
    this.changeStationType();
    this.changeAgencyType();
    this.changeStatisticGroupType();
    this.changeVariableTypes();
    this.onSearch();
  }

  public onVarTypeSelect(){
    this.changeRegions();
    this.changeStationType();
    this.changeAgencyType();
    this.changeStatisticGroupType();
    this.changeRegressionType();
    this.onSearch();
  }

  // search stations
  public onSearch() {
    this.params.page = 1;
    this._nssService.setSelectedFilterParams(this.params);
    this._nssService.searchStations(this.params);
  }

  //Clear filters
  public clearGagestatsFilters() {
    //Reset search parameters to bring gage table back to default view
    this.params = new GageStatsFilterClass();

    //Refresh the search without any filters selected
    this.onSearch();
  }

}

