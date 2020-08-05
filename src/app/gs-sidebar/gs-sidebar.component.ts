import { Component, OnInit } from '@angular/core';
import { NSSService } from '../shared/services/app.service';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { LoaderService } from 'app/shared/services/loader.service';
import { Agency } from '../shared/interfaces/agency';
import { Stationtype } from '../shared/interfaces/stationtype';
import { IMultiSelectSettings, IMultiSelectTexts} from '../../../node_modules/angular-2-dropdown-multiselect';


@Component({
  selector: 'gs-sidebar',
  templateUrl: './gs-sidebar.component.html',
  styleUrls: ['./gs-sidebar.component.scss']
})
export class GsSidebarComponent implements OnInit {

  // station type
  public stationTypes: Array<Stationtype>;
  public stationType;
  public selectedStationType;
  public showStationType: boolean;

  // agency
  public agency;
  public agencies: Array<Agency>;
  public selectedAgency: Array<Agency>;
 
  // Dropdown menu default text
  private myMSTexts: IMultiSelectTexts;
  private myRTSettings: IMultiSelectSettings;

  public term: string;
  public searchText: string;

  constructor(private _nssService: NSSService, private _toasterService: ToasterService, private _loaderService: LoaderService) { }

  ngOnInit() {

    this._nssService.getStationTypes();
    this._nssService.stationTypes.subscribe((st: Array<Stationtype>) => {
      this.stationTypes = st;
    });
    this._nssService.selectedStationType.subscribe((s: Stationtype) => {
      if (s && s.id && this.stationTypes) {this.selectedStationType = this.stationTypes.find(sta => sta.id == s.id);}
    });
    this._nssService.term.subscribe((t: string) => {
      this.term = t;
    });
    this._nssService.getAgencies();
    this._nssService.agencies.subscribe((ag: Array<Agency>) => {
      this.agencies = ag;
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

    // search with searchText
    public onSearchText(searchText: string) {
      this.term = searchText;
      this._nssService.setTerm(searchText);
    }

    // select Station Type. 
    public onStationTypeSelect(s) {
      //this._loaderService.showFullPageLoad();
      //this.selectedAgency = [];
      this.stationType = s;
      this._nssService.setSelectedStationType(s);
    }

    // select Agency Type
    public onAgencySelect(a: Agency) {
      this.agency = a;
      this._nssService.setSelectedAgency(a);
    }

}
