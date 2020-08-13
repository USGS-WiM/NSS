import { Component, OnInit } from '@angular/core';
import { NSSService } from '../shared/services/app.service';
import { Router, NavigationStart } from '@angular/router';
import { Station } from '../shared/interfaces/station';
import { GagestatsService } from './gagestats.service';
import { Agency } from 'app/shared/interfaces/agencies';
import { StationType } from 'app/shared/interfaces/stationtypes';
import { Toast } from 'angular2-toaster/src/toast';
import { Stationtype } from 'app/shared/interfaces/stationtype';

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
  public selectedStations: Array<Station>;
  public selectedAgency;
  public agencies: Array<Agency>;
  public stationTypes: Array<StationType>;
  public loggedInRole;
  public lastPageNumber;
  public currentPageNumber;
  public selectedStationType: Array<Stationtype> = [];
  public searchText: string = '';

  constructor(
    private router: Router,
    private _nssService: NSSService,
    private gagestatsService: GagestatsService
    ){
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationStart) {
          this.router.navigated = false;
          this.previousUrl = e.url;
      }
    });
    }

  ngOnInit() {
    this.loggedInRole = localStorage.getItem('loggedInRole');
    this.title = 'Gage Stats';
    this.timestamp = new Date();

    // subscribe to stations subject, which is set in the service's searchStations() function
    this._nssService.Stations.subscribe((s: Array<Station>) => {
        this.selectedStations = s;
    });
    this._nssService.pages.subscribe((pageText: string) => {
      let response = pageText;
      this.lastPageNumber = (response.slice(response.indexOf("of") + "of".length));
      this.lastPageNumber = (this.lastPageNumber.substr(0, this.lastPageNumber.indexOf('.'))); 
      this.currentPageNumber = (response.slice(response.indexOf("page") + "page".length));
      this.currentPageNumber = (this.currentPageNumber.substr(0, this.currentPageNumber.indexOf('of'))); 
    });
    this._nssService.selectedStationType.subscribe((selectedStations: Array<Stationtype>) => {
      this.selectedStationType = selectedStations;
    });
    this._nssService.searchText.subscribe((text: string) => {
      this.searchText = text;
    });
    this._nssService.agencies.subscribe((agencies: Array<Agency>) => {
      this.agencies = agencies;
    });
    this._nssService.stationTypes.subscribe((stationtypes: Array<Agency>) => {
      this.stationTypes = stationtypes;
    });
  }   

  showAddStationModal(): void{
    this.gagestatsService.addStation();
  }

  public newPage(event){
    let pageNumber = (event.target.value);
    if ((pageNumber - 1) * (pageNumber - this.lastPageNumber) <= 0) {
      this._nssService.searchStations(this.searchText, this.selectedStationType, "&page="+ pageNumber);
    } else {
      const toast: Toast = {
        type: 'warning',
        title: 'Error',
        body: 'Page Number Out of Bounds'
      };
      this._nssService.showToast(toast);
    }
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
    if (this.stationTypes) {
      this.stationTypes.forEach(z => {
          if (sID === z.id) {
            stationTypeName = z.name;
          }
      });
    }
    return stationTypeName;
  }

  //TODO: Bulk Upload Button
  bulkUpload(): void{
  }

  //TODO: Export Button
  export(): void{
  }

}
