// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { throwError as observableThrowError, } from 'rxjs';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { Toast } from 'angular2-toaster/src/toast';

import { NSSService } from 'app/shared/services/app.service';
import { Config } from '../../interfaces/config';
import { ConfigService } from 'app/config.service';
import { SettingsService } from 'app/settings/settings.service';
import { LoginService } from 'app/shared/services/login.service';

@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
    @ViewChild('UserInfo', {static: true}) userForm;
    public services;
    public configSettings: Config;
    public isAdmin: boolean;
    public loggedInRole: string;
    private navigationSubscription;
    public loggedInID: string;
    public userInfo;
    public userInfoGageStats; // TODO: Delete once users/managers tables are connected between databases.
    public roles;
    public users;
    public userId;
    public tempData;
    public tempDataGageStats; // TODO: Delete once users/managers tables are connected between databases.
    public toast: Toast;
    public config: ToasterConfig = new ToasterConfig({timeout: 0});
    public passwordTest = '';
    constructor(
        public _nssService: NSSService,
        private _configService: ConfigService,
        private _toasterService: ToasterService,
        private _settingsService: SettingsService,
        private router: Router,
        public _loginService: LoginService
    ) {
        this.configSettings = this._configService.getConfiguration();
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.getLoggedInID();
            }
        });
    }

    ngOnInit() {
        if (localStorage.getItem('auth') === undefined) {
            this.router.navigate(['/']);
        } 
        // subscribe to getToast
        this._nssService.getToast().subscribe((t: Toast) => {
            this.toast = t;
            this._toasterService.pop(this.toast);
        });
        this.getLoggedInID();
        this._settingsService.getEntitiesGageStats(this.configSettings.usersURL).subscribe(users => {
            this.users = users;
        });
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
            // TODO: Delete once users/managers tables are connected between databases.
            for (const user of this.users) {
                if (user.username === this.userInfo.username) {
                    this.userId = user.id
                    this._settingsService.getEntitiesGageStats(this.configSettings.usersURL + '/' + this.userId).subscribe(res => {
                        this.userInfoGageStats = res;
                    });
                }  
            }
            // end delete section 
        });
    }

    private getLoggedInID() {
        this.loggedInID = localStorage.getItem('loggedInID');
    }

    public editUser() {
        this.userInfo.isEditing = true;
        this.tempData = Object.assign({}, this.userInfo);
        // TODO: Delete once users/managers tables are connected between databases.
        if (this.userInfoGageStats.length > 0) {
            this.userInfoGageStats.isEditing = true; 
            this.tempDataGageStats = Object.assign({}, this.userInfoGageStats); 
        }
        // end delete section
        this.passwordTest = '';
    }

    public saveUser() {
        if (this.userInfo.username === undefined || this.userInfo.email === undefined || this.userInfo.firstName === undefined ||
            this.userInfo.lastName === undefined || this.userInfo.role === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating User', 'First name, last name, username, email and role are required.');
        } else if (this.userInfo.password && this.userInfo.password !== this.passwordTest) {
            this._toasterService.pop('error', 'Error', 'Passwords do not match. Please try again.');
        } else {
            delete this.userInfo.isEditing;
            delete this.userInfo.role;
            this._settingsService.putEntity(this.userInfo.id, this.userInfo, this.configSettings.managersURL).subscribe(
                (resp) => {
                    this.userInfo.isEditing = false;
                    this.getUserInfo();
                    if (this.userForm.nativeElement.dirty) { this.userForm.reset(); }
                    this._settingsService.outputWimMessages(resp);
                    if (this.userInfo.password) {
                        this._loginService.logout();
                        this.router.navigate(['']);
                        this._nssService.setLoginModal(true);
                    }
                    if (this.userInfoGageStats.length > 0) {
                        this.saveUserGageStats(); // TODO: Delete once users/managers tables are connected between databases.
                    }
                    
                }, error => {
                    if (this._settingsService.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error updating User', error._body.message || error.statusText);
            }
            );
        }
    }

    // TODO: Delete once users/managers tables are connected between databases.
    public saveUserGageStats() {
            delete this.userInfoGageStats.isEditing;
            delete this.userInfoGageStats.role;
            this._settingsService.putEntityGageStats(this.userInfoGageStats.id, this.userInfoGageStats, this.configSettings.usersURL).subscribe(
                (resp) => {
                    this.userInfoGageStats.isEditing = false;
                    this.getUserInfo();
                    if (this.userForm.nativeElement.dirty) { this.userForm.reset(); }
                    this._settingsService.outputWimMessages(resp);
                    if (this.userInfoGageStats.password) {
                        this._loginService.logout();
                        this.router.navigate(['']);
                        this._nssService.setLoginModal(true);
                    }
                }, error => {
                    if (this._settingsService.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error updating GageStats User', error._body.message || error.statusText);
            }
            );
    }

    public cancelEdit() {
        this.userInfo = Object.assign({}, this.tempData);
        this.userInfoGageStats = Object.assign({}, this.tempDataGageStats); // TODO: Delete once users/managers tables are connected between databases.
        this.userInfo.isEditing = false;
        this.userInfoGageStats.isEditing = false; // TODO: Delete once users/managers tables are connected between databases.
        if (this.userForm.nativeElement.dirty) {
            this.userForm.reset();
        }
    }

    ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }
}
