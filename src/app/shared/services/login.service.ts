// ------------------------------------------------------------------------------
// ----- login.service.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: login service that logs user in (http) and stores creds, passes user info on to authservice

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthService } from 'app/shared/services/auth.service';
import { ConfigService } from 'app/config.service';
import { Config } from 'app/shared/interfaces/config';

@Injectable()
export class LoginService {
    public isLoggedIn = false;
    private configSettings: Config;

    constructor(private http: Http, private _authService: AuthService, private _configService: ConfigService) {
        this.configSettings = this._configService.getConfiguration();
    }

    // log in
    public login(username: string, password: string) {
        const headers: Headers = new Headers();
        const creds: string = 'Basic ' + btoa(username + ':' + password);

        headers.append('Authorization', creds);
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.configSettings.baseURL + this.configSettings.loginURL, { headers: headers })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const user = response.json();
                if (user) {
                    this.isLoggedIn = true;
                    // store user creds in localStorage and details in service for retrieval
                    localStorage.setItem('credentials', creds);
                    this._authService.storeUserInfo(user);
                }
            })
            .catch(this.handleError);
    }
    // log out and clear everything
    public logout() {
        this.isLoggedIn = false;
        localStorage.clear();
        this._authService.removeUserInfo();
    }

    private handleError(error: Response | any) {
        return Observable.throw(error);
    }
}
