import { Component, OnInit } from '@angular/core';
import { NSSService } from '../shared/services/app.service';
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

  // station type
  public stationTypes: Array<Stationtype>;
  public stationType;
  public selectedStationType: Stationtype;

  // agency
  public agency;
  public agencies: Array<Agency>;
  public selectedAgency: Array<Agency>;
 
  //public selectedAgencyIDs: Array<number>;

  constructor(private _nssService: NSSService, private _toasterService: ToasterService, private _loaderService: LoaderService) { }

  ngOnInit() {

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
    this._nssService.agencies.subscribe((ag: Array<Agency>) => {
      this.agencies = ag;
    });

  }  // end OnInit()

    // select Station Type. 
    public onStationTypeSelect(s: Stationtype) {
      //this._loaderService.showFullPageLoad();
      this.selectedAgency = [];
      this.stationType = s;
      this._nssService.setSelectedStationType(s);
      console.log(typeof this.selectedStationType)
    }

    // select Agency Type
    public onAgencySelect(a: Agency) {
      this.agency = a;
      this._nssService.setSelectedAgency(a);
      console.log(typeof this.selectedAgency)
    }

    /*public onAgencySelect(): void {
      const selectedAgencies: Array<Agency> = new Array<Agency>();
      this.selectedAgencyIDs.forEach(sa => {
          // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
          selectedAgencies.push(
              this.agency.filter(function(a) {
                  return a.id === sa;
              })[0]
          );
      });
      this._nssService.setSelectedAgency(selectedAgencies);
    }*/
  
}
