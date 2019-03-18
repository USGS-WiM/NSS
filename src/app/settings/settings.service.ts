// ------------------------------------------------------------------------------
// ----- settings.service..ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: services to get/store/post/put/delete via http and subjects used throughout the application

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/throw';

import { Region } from 'app/shared/interfaces/region';
import { Statisticgroup } from 'app/shared/interfaces/statisticgroup';
import { Regressionregion } from 'app/shared/interfaces/regressionregion';
import { Regressiontype } from 'app/shared/interfaces/regressiontype';
import { Scenario } from 'app/shared/interfaces/scenario';
import { Variabletype } from 'app/shared/interfaces/variabletype';
import { Unittype } from 'app/shared/interfaces/unittype';
import { Scenarioregressionregion } from 'app/shared/interfaces/scenarioregressionregion';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

@Injectable()
export class SettingsService {
    public authHeader: Headers = new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('credentials')
    });
    private configSettings: Config;
    // SUBJECTS //////////////////////////////////////
    private _regionSubject: BehaviorSubject<Array<Region>> = <BehaviorSubject<Region[]>>new BehaviorSubject([]);
    private _statisticGroupSubject: BehaviorSubject<Array<Statisticgroup>> = <BehaviorSubject<Statisticgroup[]>>new BehaviorSubject([]);
    private _regRegionSubject: BehaviorSubject<Array<Regressionregion>> = <BehaviorSubject<Regressionregion[]>>new BehaviorSubject([]);
    private _regTypeSubject: BehaviorSubject<Array<Regressiontype>> = <BehaviorSubject<Regressiontype[]>>new BehaviorSubject([]);
    private _scenarioSubject: BehaviorSubject<Array<Scenario>> = <BehaviorSubject<Scenario[]>>new BehaviorSubject([]);
    private _variableTypeSubject: BehaviorSubject<Array<Variabletype>> = <BehaviorSubject<Variabletype[]>>new BehaviorSubject([]);
    private _unitTypeSubject: BehaviorSubject<Array<Unittype>> = <BehaviorSubject<Unittype[]>>new BehaviorSubject([]);


    constructor(private _http: Http, private _configService: ConfigService) {
        this.configSettings = this._configService.getConfiguration();
    }

    // GETTERS /////////////////////////////////////////////
    public regions(): Observable<Array<Region>> {
        return this._regionSubject.asObservable();
    }
    public statisticGroups(): Observable<Array<Statisticgroup>> {
        return this._statisticGroupSubject.asObservable();
    }
    public regRegions(): Observable<Array<Regressionregion>> {
        return this._regRegionSubject.asObservable();
    }
    public regTypes(): Observable<Array<Regressiontype>> {
        return this._regTypeSubject.asObservable();
    }
    public scenarios(): Observable<Array<Scenario>> {
        return this._scenarioSubject.asObservable();
    }
    public variables(): Observable<Array<Variabletype>> {
        return this._variableTypeSubject.asObservable();
    }
    public units(): Observable<Array<Unittype>> {
        return this._unitTypeSubject.asObservable();
    }

    // HTTP REQUESTS ////////////////////////////////////

    // ------------ GETS ---------------------------
    public getEntities(url: string) {
        const options = new RequestOptions({ headers: this.authHeader });
        return this._http
            .get(this.configSettings.baseURL + url, options)
            .map(response => <Array<any>>response.json())
            .catch(this.errorHandler);
    }

    // ------------ POSTS ------------------------------
    public postEntity(entity: object, url: string) {
        const options = new RequestOptions({ headers: this.authHeader });
        return this._http
            .post(this.configSettings.baseURL + this.configSettings[url], entity, options)
            .map(res => <any>res.json())
            .catch(this.errorHandler);
    }

    // ------------ PUTS --------------------------------
    public putEntity(id: number, entity: any, url: string) {
        const options = new RequestOptions({ headers: this.authHeader });
        return this._http
            .put(this.configSettings.baseURL + this.configSettings[url] + '/' + id, entity, options)
            .map(res => <any>res.json())
            .catch(this.errorHandler);
    }

    // ------------ DELETES ------------------------------
    public deleteEntity(id: number, url: string) {
        const options = new RequestOptions({ headers: this.authHeader });
        return this._http.delete(this.configSettings.baseURL + this.configSettings[url] + '/' + id, options).catch(this.errorHandler);
    }

    private errorHandler(error: Response | any) {
        if (error._body !== '') error._body = JSON.parse(error._body);

        return Observable.throw(error);
    }
    // SETTERS ///////////////////////////////////////////
    public setRegions(r: Array<Region>) {
        this._regionSubject.next(r);
    }
    public setStatGroups(c: Array<Statisticgroup>) {
        this._statisticGroupSubject.next(c);
    }
    public setRegRegions(u: Array<Regressionregion>) {
        this._regRegionSubject.next(u);
    }
    public setRegTypes(s: Array<Regressiontype>) {
        this._regTypeSubject.next(s);
    }
    public setScenarios(r: Array<Scenario>) {
        this._scenarioSubject.next(r);
    }
    public setVariables(u: Array<Variabletype>) {
        this._variableTypeSubject.next(u);
    }
    public setUnits(s: Array<Unittype>) {
        this._unitTypeSubject.next(s);
    }

}
