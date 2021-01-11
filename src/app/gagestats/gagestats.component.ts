import { Component, OnInit } from '@angular/core';
import { NSSService } from '../shared/services/app.service';
import { Router, NavigationStart } from '@angular/router';
import { Station } from '../shared/interfaces/station';
import { GagestatsService } from './gagestats.service';
import { Agency } from 'app/shared/interfaces/agencies';
import { StationType } from 'app/shared/interfaces/stationtypes';
import { Toast } from 'angular2-toaster/src/toast';
import { GagePage } from 'app/shared/interfaces/gagepage';
import { Region } from 'app/shared/interfaces/region';
import { SettingsService } from 'app/settings/settings.service';
import { ConfigService } from 'app/config.service';
import { Config } from 'protractor';
import { ToasterConfig } from 'angular2-toaster';
import { ManageCitation } from 'app/shared/interfaces/managecitations';


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
  public agencies: Array<Agency>;
  public regions: Array<Region>;
  public stationTypes: Array<StationType>;
  public loggedInRole;
  public lastPageNumber;
  public currentPageNumber;
  public totalGages;
  public itemPerPage = [15,25,50,100]; 
  public perPage = 50;
  private configSettings: Config;
  public config: ToasterConfig = new ToasterConfig({ timeout: 5000 });


  constructor(
    private router: Router,
    private _nssService: NSSService,
    private gagestatsService: GagestatsService,
    public _settingsservice: SettingsService, 
    private _configService: ConfigService
    ){
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationStart) {
          this.router.navigated = false;
          this.previousUrl = e.url;
      }
    });
    this.configSettings = this._configService.getConfiguration();
    }

  ngOnInit() {
    this.loggedInRole = localStorage.getItem('loggedInRole');
    this.title = 'Gage Stats';
    this.timestamp = new Date();
    // subscribe to stations subject, which is set in the service's searchStations() function
    this._nssService.Stations.subscribe((s: Array<Station>) => {
      this.selectedStations = s;
    });
    // subscribe to all agencies
    this._nssService.agencies.subscribe((agencies: Array<Agency>) => {
      this.agencies = agencies;
    });
    // subscribe to all station types
    this._nssService.stationTypes.subscribe((stationtypes: Array<StationType>) => {
      this.stationTypes = stationtypes;
    });
    // get all regions
    this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.regionURL).subscribe((regions: Array<Region>) => {
      this.regions = regions;
    });
    //subscribe to page number related information
    this._nssService.pageResponse.subscribe((pageText: string) => {
      var numbers = pageText.match(/[0-9]+/g); // [0-9] means to match any digit, the + means to match where there are multiple digits
      if (numbers != null) {
          this.currentPageNumber = Number(numbers[0]); // first occurrence of a number
          this.lastPageNumber = Number(numbers[1]); // second occurrence of a number
          this.totalGages = Number(numbers[2])
      }
    });

  }   

  showAddStationModal(): void{
    //TODO Accepted both changes to check to make sure this is correct
    this._nssService.setAddStationModal(true);
    this.gagestatsService.addStation();
  }

  public newPage(event){
    if (event >=1 && event <= this.lastPageNumber) {
      this._nssService.changePageNumber(event);
    } else {
      const toast: Toast = {
        type: 'warning',
        title: 'Error',
        body: 'Page Number Out of Bounds'
      };
      this._nssService.showToast(toast);
    }
  }

  public changePerPage(p){
    this._nssService.changePerPage(p);
  }

  public getAgencyName(aID) {
    if (this.agencies) {
      return (this.agencies.find(a => a.id === aID).name);
    }
  }

  public getRegionName(rID) {
    if (this.regions) {
      return (this.regions.find(r => r.id === rID).name);
    }
  }

  public getStationType(sID) {
    if (this.stationTypes) {
      return (this.stationTypes.find(s => s.id === sID).name);
    }
  }

  public showGagePageModal(s) {
    const gagePageForm: GagePage = {
      show: true,
      gageCode: s
  }
    this._nssService.setGagePageModal(gagePageForm);
  }

  public showManageCitationsModal() {
    const addManageCitationForm: ManageCitation = {
        show: true,
        addCitation: true,
        inGagePage: true,
        inGageStats: true,
    } 
    this._nssService.setManageCitationsModal(addManageCitationForm);
  }

  //TODO: Bulk Upload Button
  openBatchUpload(): void{
    this._nssService.setBatchUploadModal(true);
  }

  //TODO: Export Button
  export(): void{
  }

}
