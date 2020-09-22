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
  // regions
  public regions: Array<Region>;
  public selectedRegion: Array<Stationtype> = [];
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
      this._nssService.searchStations(this.searchText, this.selectedStationType, this.selectedAgency, this.pageNumber, this.perPage, this.selectedRegion, this.selectedRegressionType);
    });
    this._nssService.selectedPerPage.subscribe((perPage: number) => { 
      this.perPage = perPage;
      this._nssService.searchStations(this.searchText, this.selectedStationType, this.selectedAgency, this.pageNumber, this.perPage, this.selectedRegion, this.selectedRegressionType);
    });
    this._nssService.getStationTypes();
    this._nssService.stationTypes.subscribe((st: Array<Stationtype>) => {
      this.stationTypes = st;
    });
    this._nssService.getRegressionTypes();
    this._nssService.regressionTypes.subscribe((rt: Array<Regressiontype>) => {
      this.regressionTypes = rt;
    });
    this._nssService.getAgencies();
    this._nssService.agencies.subscribe((ag: Array<Agency>) => {
      this.agencies = ag;
    });
    this._settingsservice.getEntitiesGageStats(this.configSettings.regionURL).subscribe(regions => {
      this.regions = regions;
    });

    // trigger initial stations search
    this._nssService.searchStations(this.searchText, this.selectedStationType, this.selectedAgency, this.pageNumber, this.perPage, this.selectedRegion, this.selectedRegressionType);

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

  // search stations
  public onSearch() {
    this.pageNumber = '1';
    this._nssService.searchStations(this.searchText, this.selectedStationType, this.selectedAgency, this.pageNumber, this.perPage, this.selectedRegion, this.selectedRegressionType);
  }

}
