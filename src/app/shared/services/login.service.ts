// ------------------------------------------------------------------------------
// ----- login.service.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: login service that logs user in (http) and stores creds, passes user info on to authservice

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from 'app/shared/services/auth.service';
import { ConfigService } from 'app/config.service';
import { Config } from 'app/shared/interfaces/config';

@Injectable()
export class LoginService {
    private configSettings: Config;

    public _loggedInSubject: BehaviorSubject<boolean> = <BehaviorSubject<boolean>>new BehaviorSubject(false);
    public _loginShowSubject: BehaviorSubject<boolean>;

    constructor(private http: HttpClient, private _authService: AuthService, private _configService: ConfigService) {
        this.configSettings = this._configService.getConfiguration();
    }

    public isLoggedIn(): Observable<boolean> {
        return this._loggedInSubject.asObservable();
    }

    public isloginShow(): Observable<boolean> {
        this._loginShowSubject = <BehaviorSubject<boolean>>new BehaviorSubject(this.configSettings.loginShow);
        return this._loginShowSubject.asObservable();
    }

    // log in for NSSservices
    public login(user: any){
        const headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.configSettings.nssBaseURL + this.configSettings.loginURL, user, { headers: headers, observe: "response"})
            .map((response:HttpResponse<null>) => {
                // login successful if there's a jwt token in the response
                user = response.body;
                if (user) {
                    this._loggedInSubject.next(true);
                    // store user creds in localStorage and details in service for retrieval
                    localStorage.setItem('auth', 'Bearer ' + user.token);
                    this._authService.storeUserInfo(user);
                }
            })
            .catch(this.handleError);
    }
    
    // log out and clear everything
    public logout() {
        this._loggedInSubject.next(false);
        localStorage.clear();
        this._authService.removeUserInfo();
    }

    private handleError(error: Response | any) {
        return Observable.throw(error);
    }
}
