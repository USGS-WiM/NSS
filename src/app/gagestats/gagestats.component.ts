import { Component, OnInit } from '@angular/core';
import { NSSService } from '../shared/services/app.service';
import { Stationtype } from '../shared/interfaces/stationtype';
import { Router, NavigationStart } from '@angular/router';
import { Station } from '../shared/interfaces/station';
import { GagestatsService } from './gagestats.service';
import { Agency } from 'app/shared/interfaces/agencies';
import { StationType } from 'app/shared/interfaces/stationtypes';

@Component({
  selector: 'app-gagestats',
  templateUrl: './gagestats.component.html',
  styleUrls: ['./gagestats.component.scss']
})
export class GagestatsComponent implements OnInit {
  public title: string;
  public timestamp: Date; // display a time stamp when they first get here.
  private navigationSubscription;
  public previousUrl;
  public editRegionScenario: boolean;
  public selectedStationType;
  public showStationType: boolean;
  public stations: Array<Station>;
  public selectedStations: Array<Station>;
  public selectStations: Array<Station>;
  public selectedAgency;
  public agencies: Array<Agency>;
  public stationTypes: Array<StationType>
  public loggedInRole;

  constructor(
    private router: Router,
    private _nssService: NSSService,
    private gagestatsService: GagestatsService,
    
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationStart) {
          this.router.navigated = false;
          if (this.previousUrl === '/settings' || this.previousUrl === '/profile') {
              this._nssService.setSelectedStationType(undefined);
              this.showStationType = false;
          }
          this.previousUrl = e.url;
      }
    });
    }

  ngOnInit() {
    this.loggedInRole = localStorage.getItem('loggedInRole');
    this.title = 'Gage Stats';
    this.timestamp = new Date();
    this.showStationType = false;
    this._nssService.selectedStationType.subscribe((s: Stationtype) => {
      this.selectedStationType = s;
      this.selectedAgency = [];
      if (s) { this.showStationType = true; }
      window.scrollTo(0, 0);
      var x = '';
      this._nssService.getStationsByType(this.selectedStationType, x).subscribe((s: Array<Station>) => {
        this.selectedStations = s;
      });  
    });
    this._nssService.agencies.subscribe((ag: Array<Agency>) => {
      this.agencies = ag;
    });
    this._nssService.stationTypes.subscribe((sationtypes: Array<Agency>) => {
      this.stationTypes = sationtypes;
    });
  }   

  showAddStationModal(): void{
    this.gagestatsService.addStation();
  }

  public getAgencyName(aID) {
    let acencyName;
    if (this.agencies) {
      this.agencies.forEach(z => {
          if (aID === z.id) {
            acencyName = z.name;
          }
      });
    }
    return acencyName;
  }

  public getStationType(sID) {
    let stationTypeName;
    this.stationTypes.forEach(z => {
        if (sID === z.id) {
          stationTypeName = z.name;
        }
    });
    return stationTypeName;
  }

  //TODO: Bulk Upload Button
  bulkUpload(): void{
  }

  //TODO: Export Button
  export(): void{
  }

}
