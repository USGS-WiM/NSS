// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { throwError as observableThrowError, } from 'rxjs';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { Toast } from 'angular2-toaster/src/toast';

import { NSSService } from 'app/shared/services/app.service';
import { Region } from '../../interfaces/region';
import { Config } from '../../interfaces/config';
import { ConfigService } from 'app/config.service';
import { AuthService } from '../../services/auth.service';
import { Manager } from '../../interfaces/manager';
import { SettingsService } from 'app/settings/settings.service';

@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
    @ViewChild('UserInfo') userForm;
    public services;
    public configSettings: Config;
    public isAdmin: boolean;
    public loggedInRole: string;
    private navigationSubscription;
    public loggedInID: string;
    public userInfo;
    public roles;
    public tempData;
    private jsonHeader: Headers = new Headers({ Accept: 'application/json', 'Content-Type': 'application/json' });
    public toast: Toast;
    constructor(
        public _nssService: NSSService,
        private _http: Http,
        private _configService: ConfigService,
        private _toasterService: ToasterService,
        private _settingsService: SettingsService,
        private router: Router
    ) {
        this.configSettings = this._configService.getConfiguration();
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.getLoggedInID();
            }
        });
    }

    ngOnInit() {
        if (localStorage.getItem('credentials') === undefined) {
            this.router.navigate(['/']);
        }
        // subscribe to getToast
        this._nssService.getToast().subscribe((t: Toast) => {
            this.toast = t;
            this._toasterService.pop(this.toast);
        });
        this.getLoggedInID();
        this._settingsService.getEntities(this.configSettings.rolesURL).subscribe(roles => {
            this.roles = roles;
            this.getUserInfo();
        });
    }

    private handleError(error: any) {
        const errMsg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return observableThrowError(errMsg);
    }

    private getUserInfo() {
        this._settingsService.getEntities(this.configSettings.managersURL + '/' + this.loggedInID).subscribe(res => {
            this.userInfo = res;
            for (const role of this.roles) {
                if (res['roleID'] === role.id) {
                    this.userInfo['role'] = role.name;
                }
            }
        });
    }

    private getLoggedInID() {
        this.loggedInID = localStorage.getItem('loggedInID');
    }

    public editUser() {
        this.userInfo.isEditing = true;
        this.tempData = Object.assign({}, this.userInfo);
    }

    public saveUser() {
        if (this.userInfo.username === undefined || this.userInfo.email === undefined || this.userInfo.firstName === undefined ||
            this.userInfo.lastName === undefined || this.userInfo.roleID === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating User', 'First name, last name, username, email and role ID are required.');
        } else {
            delete this.userInfo.isEditing;
            delete this.userInfo.role;
            this._settingsService.putEntity(this.userInfo.id, this.userInfo, this.configSettings.managersURL).subscribe(
                (resp: Manager) => {
                    this._toasterService.pop('success', 'Success', 'User was updated');
                    this.userInfo.isEditing = false;
                    this.getUserInfo();
                    if (this.userForm.nativeElement.dirty) { this.userForm.reset(); }
                }, error => { this._toasterService.pop('error', 'Error updating User', error._body.message || error.statusText); }
            );
        }
    }

    public cancelEdit() {
        this.userInfo = Object.assign({}, this.tempData);
        this.userInfo.isEditing = false;
        if (this.userForm.nativeElement.dirty) {
            this.userForm.reset();
        }
    }

    ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }
}