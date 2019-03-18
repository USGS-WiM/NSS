// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { throwError as observableThrowError, Observable, Subject, BehaviorSubject } from 'rxjs';

import { NSSService } from '../shared/services/app.service';
import { Region } from '../shared/interfaces/region';
import { Config } from '../shared/interfaces/config';
import { ConfigService } from '../config.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: 'settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {
    public services;
    public regions: Array<Region>;
    public configSettings: Config;
    public isAdmin: boolean;
    public loggedInRole: string;
    private navigationSubscription;
    private jsonHeader: Headers = new Headers({ Accept: 'application/json', 'Content-Type': 'application/json' });
    constructor(
        public _nssService: NSSService,
        private _http: Http,
        private _configService: ConfigService,
        private _authService: AuthService,
        private router: Router
    ) {
        this.configSettings = this._configService.getConfiguration();
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.getLoggedInRole();
            }
        });
    }

    ngOnInit() {}

    public getServices(): void {
        const options = new RequestOptions({ headers: this.jsonHeader });
        this._http
            .get(this.configSettings.baseURL, options)
            .map(res => <Array<Region>>res.json())
            .catch(this.handleError)
            .subscribe(r => {
                console.log(r);
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
