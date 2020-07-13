import { Component, OnInit } from '@angular/core';
import { NSSService } from '../shared/services/app.service';
import { Region } from '../shared/interfaces/region';
import { Toast } from 'angular2-toaster/src/toast';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { LoaderService } from 'app/shared/services/loader.service';
import { Agency } from '../shared/interfaces/agency';
import { Stationtype } from '../shared/interfaces/stationtype';

@Component({
  selector: 'gs-sidebar',
  templateUrl: './gs-sidebar.component.html',
  styleUrls: ['./gs-sidebar.component.css']
})
export class GsSidebarComponent implements OnInit {
  // regions
  public selectedRegion;
  public regions: Array<Region>;
  public region;

  // station type
  public stationTypes: Array<Stationtype>;
  public stationType;
  public selectedStationType: Array<number>;


  // agency
  public agency;
  public agencies: Array<Agency>;
  public selectedAgency: Array<number>;

  constructor(private _nssService: NSSService, private _toasterService: ToasterService, private _loaderService: LoaderService) { }

  ngOnInit() {
    this._nssService.getRegions();
    this._nssService.regions.subscribe((regions: Array<Region>) => {
        this.regions = regions;
        if (regions.length === 0) {
            this._toasterService.clear();
            this._toasterService.pop('error', 'You have no assigned regions. Contact your administrator to add new regions.');
        }
        this._loaderService.hideFullPageLoad();
    });
    this._nssService.selectedRegion.subscribe((r: Region) => {
        if (r && r.id && this.regions) {this.selectedRegion = this.regions.find(reg => reg.id == r.id);}
        // this.clearSelections();
    });

    this._nssService.getStationTypes();
    this._nssService.stationType.subscribe((st: Array<Stationtype>) => {
      this.stationType = st;
      /* remove from selectedStationType if not in response.
      if (this.selectedStationType !== undefined) {
          if (st.length > 0) {
              for (let sti = this.selectedStationType.length; sti--; ) {
                  const STind = st
                      .map(function(eachst) {
                          return eachst.id;
                      })
                      .indexOf(this.selectedStationType[sti]);
                  if (STind < 0) {this.selectedStationType.splice(sti, 1); }
              }
          } else { this.selectedStationType = []; }
      }*/
    });

    this._nssService.getAgencies();
    this._nssService.agency.subscribe((ag: Array<Agency>) => {
      this.agency = ag;
    });

  }

}
