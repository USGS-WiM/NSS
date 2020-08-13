import { Component, OnInit } from '@angular/core';
import { NSSService } from '../shared/services/app.service';
import { Agency } from '../shared/interfaces/agency';
import { Stationtype } from '../shared/interfaces/stationtype';
import { IMultiSelectSettings, IMultiSelectTexts} from '../../../node_modules/angular-2-dropdown-multiselect';
import { SettingsService } from 'app/settings/settings.service';
import { ConfigService } from 'app/config.service';


@Component({
  selector: 'gs-sidebar',
  templateUrl: './gs-sidebar.component.html',
  styleUrls: ['./gs-sidebar.component.scss']
})
export class GsSidebarComponent implements OnInit {

  // station type
  public stationTypes: Array<Stationtype>;
  public selectedStationType: Array<Stationtype> = [];
  // agency
  public agencies: Array<Agency>;
  public selectedAgency: Array<Agency>;
 
  // Dropdown menu default text
  private myMSTexts: IMultiSelectTexts;
  private myRTSettings: IMultiSelectSettings;

  public searchText: string = '';

  constructor(private _nssService: NSSService) { }

  ngOnInit() {
    this._nssService.getStationTypes();
    this._nssService.stationTypes.subscribe((st: Array<Stationtype>) => {
      this.stationTypes = st;
    });
    this._nssService.getAgencies();
    this._nssService.agencies.subscribe((ag: Array<Agency>) => {
      this.agencies = ag;
    });

    // trigger initial stations search
    this._nssService.searchStations(this.searchText, this.selectedStationType);

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
    this._nssService.searchStations(this.searchText, this.selectedStationType);
  }

}
