import { Component, OnInit } from '@angular/core';
import { NSSService } from '../shared/services/app.service';
import { GSRegion } from '../shared/interfaces/gsregion';
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

  // gagestat regions
  public selectedGSRegion;
  public gsregions: Array<GSRegion>;
  public gsregion;

  // station type
  public stationTypes: Array<Stationtype>;
  public stationType;
  public selectedStationType: Array<Stationtype>;


  // agency
  public agency;
  public agencies: Array<Agency>;
  public selectedAgency: Array<number>;

  constructor(private _nssService: NSSService, private _toasterService: ToasterService, private _loaderService: LoaderService) { }

  ngOnInit() {
    /*this._nssService.getGSRegions();
    this._nssService.gsregions.subscribe((gsregions: Array<GSRegion>) => {
        this.gsregions = gsregions;
        if (gsregions.length === 0) {
            this._toasterService.clear();
            this._toasterService.pop('error', 'You have no assigned regions. Contact your administrator to add new regions.');
        }
        this._loaderService.hideFullPageLoad();
    });
    this._nssService.selectedGSRegion.subscribe((g: GSRegion) => {
        if (g && g.id && this.gsregions) {this.selectedGSRegion = this.gsregions.find(gsreg => gsreg.id == g.id);}
        // this.clearSelections();
    }); */

    this._nssService.getStationTypes();
    this._nssService.stationTypes.subscribe((st: Array<Stationtype>) => {
      this.stationTypes = st;
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
    this._nssService.selectedStationType.subscribe((s: Stationtype) => {
      if (s && s.id && this.stationTypes) {this.selectedStationType = this.stationTypes.find(sta => sta.id == s.id);}
    });

    this._nssService.getAgencies();
    this._nssService.agency.subscribe((ag: Array<Agency>) => {
      this.agency = ag;
    });

  }  // end OnInit()

    // select Station Type. 
    public onStationTypeSelect(s: Stationtype) {
      //this._loaderService.showFullPageLoad();
      this.stationType = s;
      this._nssService.setSelectedStationType(s);
      console.log(typeof this.selectedStationType)
    }
  
}
