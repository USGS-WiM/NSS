// ------------------------------------------------------------------------------
// ----- auth.service -----------------------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: store and retrieve loggedIn properties service (global)

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Manager } from '../interfaces/manager';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    public redirectUrl: string; // store the URL so we can redirect after logging in
    public role: string;

    constructor(private _http: Http, public _router: Router) {}

    // store loggedIn parts (loggedInRole, loggedInName, loggedInUserName, loggedInID)
    private _loggedInRole: Subject<string> = new Subject<string>();
    public setloggedInRole(val: string) {
        this.role = val;
        this._loggedInRole.next(val);
    }
    public loggedInRole(): Observable<string> {
        // getter (loggedInRole)
        return this._loggedInRole.asObservable();
    }
    private _loggedInName: Subject<string> = new Subject<string>();
    public setloggedInName(val: string) {
        this._loggedInName.next(val);
    }
    public loggedInName(): Observable<string> {
        // getter (loggedInName)
        return this._loggedInName.asObservable();
    }
    private _loggedInUserName: Subject<string> = new Subject<string>();
    public setloggedInUserName(val: string) {
        this._loggedInUserName.next(val);
    }
    public loggedInUserName(): Observable<string> {
        // getter (loggedInName)
        return this._loggedInUserName.asObservable();
    }
    private _loggedInID: Subject<number> = new Subject<number>();
    public setloggedInID(val: number) {
        this._loggedInID.next(val);
    }
    public loggedInID(): Observable<number> {
        // getter (loggedInName)
        return this._loggedInID.asObservable();
    }

    //store the info to be retrieved in other components
    public storeUserInfo(manager: Manager): void {
        //store in localStorage and in .next for subscriptions on change
        localStorage.setItem('loggedInRole', manager.role);
        localStorage.setItem('loggedInName', manager.firstName + ' ' + manager.lastName);
        localStorage.setItem('loggedInUserName', manager.username);
        localStorage.setItem('loggedInID', manager.id.toString());

        this._loggedInRole.next(manager.role);
        this._loggedInName.next(manager.firstName + ' ' + manager.lastName);
        this._loggedInUserName.next(manager.username);
        this._loggedInID.next(manager.id);
        this.setStorageExpiration();
    }
    //logged out, clear the data
    public removeUserInfo(): void {
        localStorage.clear();
        this._loggedInRole.next();
        this._loggedInName.next();
        this._loggedInUserName.next();
        this._loggedInID.next();
    }
    // make sure to clear localStorage after 12 hrs (use this when setting creds)
    private setStorageExpiration(): void {
        let hours: number = 12; // Reset when storage is more than 12 hours
        let now: number = new Date().getTime();
        let setupTime: number = Number(localStorage.getItem('setupTime'));
        localStorage.setItem('setupTime', now.toString());
    }
} // end AuthService
