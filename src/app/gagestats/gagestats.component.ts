import { Component, OnInit } from '@angular/core';
import { NSSService } from '../shared/services/app.service';
import { GSRegion } from '../shared/interfaces/gsregion';
import { Toast } from 'angular2-toaster/src/toast';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { LoaderService } from 'app/shared/services/loader.service';
import { Agency } from '../shared/interfaces/agency';
import { Stationtype } from '../shared/interfaces/stationtype';
import { Router, NavigationStart } from '@angular/router';
import { SettingsService } from 'app/settings/settings.service';

@Component({
  selector: 'app-gagestats',
  templateUrl: './gagestats.component.html',
  styleUrls: ['./gagestats.component.css']
})
export class GagestatsComponent implements OnInit {
  public title: string;
  public timestamp: Date; // display a time stamp when they first get here.
  public selectedGSRegion;
  public showGSRegion: boolean;
  private navigationSubscription;
  public previousUrl;
  public editRegionScenario: boolean;
  public gsregions;


  constructor(
    private router: Router,
    private _nssService: NSSService,
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationStart) {
          this.router.navigated = false;
          if (this.previousUrl === '/settings' || this.previousUrl === '/profile') {
              this._nssService.setSelectedGSRegion(undefined);
              this.showGSRegion = false;
          }
          this.previousUrl = e.url;
      }
    });
   }

  ngOnInit() {
    this.title = 'Gage Stats';
    this.timestamp = new Date();
    this.showGSRegion = false;
    this._nssService.selectedGSRegion.subscribe(gsregion => {
      this.selectedGSRegion = gsregion;
      if (gsregion) { this.showGSRegion = true; }
      window.scrollTo(0, 0);
  });
  }

}
