import { Component, OnInit } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { Agency } from 'app/shared/interfaces/agency';
import { Stationtype } from 'app/shared/interfaces/stationtype';
import { IMultiSelectSettings, IMultiSelectTexts} from '../../../../node_modules/angular-2-dropdown-multiselect';


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
  public selectedAgency: Array<Agency> = [];
  // search and page parameters
  public searchText: string = '';
  public pageNumber = '1';
  public perPage = 50;
  // Dropdown menu default text
  public myMSTexts: IMultiSelectTexts;
  public myRTSettings: IMultiSelectSettings;

  constructor(private _nssService: NSSService) { }

  ngOnInit() {
    this._nssService.selectedPageNumber.subscribe((page: string) => { 
      this.pageNumber = page;
      this._nssService.searchStations(this.searchText, this.selectedStationType, this.selectedAgency, this.pageNumber, this.perPage);
    });
    this._nssService.selectedPerPage.subscribe((perPage: number) => { 
      this.perPage = perPage;
      this._nssService.searchStations(this.searchText, this.selectedStationType, this.selectedAgency, this.pageNumber, this.perPage);
    });
    this._nssService.getStationTypes();
    this._nssService.stationTypes.subscribe((st: Array<Stationtype>) => {
      this.stationTypes = st;
    });
    this._nssService.getAgencies();
    this._nssService.agencies.subscribe((ag: Array<Agency>) => {
      this.agencies = ag;
    });

    // trigger initial stations search
    this._nssService.searchStations(this.searchText, this.selectedStationType, this.selectedAgency, this.pageNumber, this.perPage);

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
    this._nssService.searchStations(this.searchText, this.selectedStationType, this.selectedAgency, this.pageNumber, this.perPage);
  }

}
