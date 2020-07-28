// ------------------------------------------------------------------------------
// ----- settings.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: settings crud in admin settings page

import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { throwError as observableThrowError, } from 'rxjs';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { Toast } from 'angular2-toaster/src/toast';

import { NSSService } from '../shared/services/app.service';
import { Region } from '../shared/interfaces/region';
import { Config } from '../shared/interfaces/config';
import { ConfigService } from '../config.service';

@Component({
    moduleId: module.id,
    templateUrl: 'settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
    public services;
    public regions: Array<Region>;
    public configSettings: Config;
    public isAdmin: boolean;
    public loggedInRole: string;
    private navigationSubscription;
    public toast: Toast;
    public config: ToasterConfig = new ToasterConfig({timeout: 0});
    constructor(
        public _nssService: NSSService,
        private _configService: ConfigService,
        private _toasterService: ToasterService,
        private router: Router
    ) {
        this.configSettings = this._configService.getConfiguration();
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.getLoggedInRole();
            }
        });
    }

    ngOnInit() {
		
        if (localStorage.getItem('auth') === undefined) {
            this.router.navigate(['/']);
        }
        this.getLoggedInRole();
        // subscribe to getToast
        this._nssService.getToast().subscribe((t: Toast) => {
            this.toast = t;
            this._toasterService.pop(this.toast);
        });
    }

    private handleError(error: any) {
        const errMsg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return observableThrowError(errMsg);
    }

    private getLoggedInRole() {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    }

    ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }
}
