import { Component, OnInit } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { Agency } from 'app/shared/interfaces/agency';
import { Stationtype } from 'app/shared/interfaces/stationtype';
import { IMultiSelectSettings, IMultiSelectTexts} from '../../../../node_modules/angular-2-dropdown-multiselect';
import { Region } from 'app/shared/interfaces/region';
import { SettingsService } from 'app/settings/settings.service';
import { ConfigService } from 'app/config.service';
import { Config } from 'protractor';
import { Regressiontype } from 'app/shared/interfaces/regressiontype';
import { Variabletype } from 'app/shared/interfaces/variabletype';
import { Statisticgroup } from 'app/shared/interfaces/statisticgroup';

@Component({
  selector: 'gs-sidebar',
  templateUrl: './gs-sidebar.component.html',
  styleUrls: ['./gs-sidebar.component.scss']
})
export class GsSidebarComponent implements OnInit {
  private configSettings: Config;
  // station type
  public stationTypes: Array<Stationtype>;
  public selectedStationType: Array<Stationtype> = [];
  // regression type
  public regressionTypes: Array<Regressiontype>;
  public selectedRegressionType: Array<Regressiontype> = [];
  // statistic groups
  public statisticGroups: Array<Statisticgroup>;
  public selectedStatisticGroup: Array<Statisticgroup> = [];
  // variable type
  public variableTypes: Array<Variabletype>;
  public selectedVariableType: Array<Variabletype> = [];
  // regions
  public regions: Array<Region>;
  public selectedRegion: Array<Region> = [];
  // agency
  public agencies: Array<Agency>;
  public selectedAgency: Array<Agency> = [];
  // search and page parameters
  public searchText: string = '';
  public pageNumber = '1';
  public perPage = 50;
  // Dropdown menu default text
  public myMSTexts: IMultiSelectTexts;
  public myRTSettings: IMultiSelectSettings;

  constructor(private _nssService: NSSService, public _settingsservice: SettingsService, private _configService: ConfigService) { 
    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    this._nssService.selectedPageNumber.subscribe((page: string) => { 
      this.pageNumber = page;
      this._nssService.searchStations(this.searchText, this.selectedStationType, this.selectedAgency, this.pageNumber, this.perPage, this.selectedRegion, this.selectedRegressionType, this.selectedVariableType, this.selectedStatisticGroup);
    });
    this._nssService.selectedPerPage.subscribe((perPage: number) => { 
      this.perPage = perPage;
      this._nssService.searchStations(this.searchText, this.selectedStationType, this.selectedAgency, this.pageNumber, this.perPage, this.selectedRegion, this.selectedRegressionType, this.selectedVariableType, this.selectedStatisticGroup);
    });
    this._nssService.getStationTypes();
    this._nssService.stationTypes.subscribe((st: Array<Stationtype>) => {
      this.stationTypes = st;
    });
    this._nssService.getAgencies();
    this._nssService.agencies.subscribe((ag: Array<Agency>) => {
      this.agencies = ag;
    });
    this._settingsservice.getEntitiesGageStats(this.configSettings.regionURL).subscribe((regions: Array<Region>) => {
      this.regions = regions;
    });
    this._settingsservice.getEntitiesGageStats(this.configSettings.statisticGrpURL).subscribe((sg: Array<Statisticgroup>) => {
      this.statisticGroups = sg;
    });
    this._settingsservice.getEntitiesGageStats(this.configSettings.variablesURL).subscribe((vt: Array<Variabletype>) => {
      this.variableTypes = vt;
    });
    this._settingsservice.getEntitiesGageStats(this.configSettings.regTypeURL).subscribe((rt: Array<Regressiontype>) => {
      this.regressionTypes = rt;
    });

    // trigger initial stations search
    this._nssService.searchStations(this.searchText, this.selectedStationType, this.selectedAgency, this.pageNumber, this.perPage, this.selectedRegion, this.selectedRegressionType, this.selectedVariableType, this.selectedStatisticGroup);

    this.myRTSettings = {
      pullRight: false,
      enableSearch: false,
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

  public onStationTypeSelect(s){
    this._nssService.setSelectedStationType(s);
  }

  public onAgencySelect(a) {
    this._nssService.setSelectedAgency(a);
  }

  public onRegionSelect(r) {
    this._nssService.setSelectedRegionGageSats(r);
  }

  public onKeywordSelect(kw) {
    this._nssService.setSelectedKeyword(kw);
  }

  public onStatGrpSelect(sg){
    this._nssService.setSelectedStatGrpGageSats(sg);
  }

  public onRegTypeSelect(rt){
    this._nssService.setSelectedRegTypesGageSats(rt)
  }

  public onVarTypeSelect(vt){
    this._nssService.setSelectedVariableType(vt)
  }


  // search stations
  public onSearch() {
    this.pageNumber = '1';
    this._nssService.searchStations(this.searchText, this.selectedStationType, this.selectedAgency, this.pageNumber, this.perPage, this.selectedRegion, this.selectedRegressionType, this.selectedVariableType, this.selectedStatisticGroup);
  }

}
