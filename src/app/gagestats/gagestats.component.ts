import { Component, OnInit } from '@angular/core';
import { NSSService } from '../shared/services/app.service';
import { Toast } from 'angular2-toaster/src/toast';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { LoaderService } from 'app/shared/services/loader.service';
import { Agency } from '../shared/interfaces/agency';
import { Stationtype } from '../shared/interfaces/stationtype';
import { Router, NavigationStart } from '@angular/router';
import { SettingsService } from 'app/settings/settings.service';
import { Station } from '../shared/interfaces/station';
import { GagestatsService } from './gagestats.service';

@Component({
  selector: 'app-gagestats',
  templateUrl: './gagestats.component.html',
  styleUrls: ['./gagestats.component.css']
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

  loggedInRole;

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
    this._nssService.selectedStationType.subscribe(stationtype => {
      this.selectedStationType = stationtype;
      //this.selectedStations = [];
      this.selectedAgency = [];
      
      if (stationtype) { this.showStationType = true; }
      window.scrollTo(0, 0);
      var x = '';
      if (this.selectedAgency.length > 0) {
        x = '?agencies=' + this.selectedAgency.id;
      };
      this._nssService.getStationsByType(this.selectedStationType.id, x).subscribe((s: Array<Station>) => {
        this.selectedStations = s;
        //else if (this.selectedAgency.length === 0) {
        //  this.selectedStations = this.selectedStations;
        //} 
      });  
      
         
      
    });
    /*
    console.log(this.selectedStationType)
    this._nssService.selectedAgency.subscribe(Agency => {
      this.selectedAgency = Agency;
      console.log(this.selectedAgency)
      if (this.selectedAgency > 0) {
        this.selectStations = [];
        this._nssService.getStationsByAgency(this.selectedStationType.id, this.selectedAgency.id).subscribe((s: Array<Station>) => {
          this.selectedStations = s;
           });
      }
    });
    */

  }   

  showAddStationModal(): void{
    this.gagestatsService.addStation();
  }

  bulkUpload(): void{
    console.log("bulk upload clicked, does nothing else @ this time.")
  }

  export(): void{
    console.log("export clicked, does nothing else")
  }

}
