import { Injectable, Inject } from '@angular/core';

import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {CONFIG}     from '../shared/config';
import { IStatisticGroup } from '../shared/statisticGroup';

const OPTIONS = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS });
@Injectable()
export class StatisticGrpService {
    constructor( @Inject(Http) private _http: Http) { }

    getStatisticGrps() {
        return this._http.get(CONFIG.STATISTICGRP_URL, OPTIONS)
            .map(stat => <IStatisticGroup[]>stat.json()).catch(this.handleError);
    }

    getStatisticGrp(id: number) {
        return this._http.get(CONFIG.STATISTICGRP_URL + '/' + id, OPTIONS)
            .map(stat => <IStatisticGroup>stat.json()).catch(this.handleError);
    }

    getFilteredStatisticGrps(regionId: number, regRegionIds:string,regTypeIds:string) {
        return this._http.get(CONFIG.STATISTICGRP_URL + '?region=' + regionId + '&regressionregions=' + regRegionIds + '&regressiontypes=' + regTypeIds, OPTIONS)
            .map(stat => <IStatisticGroup[]>stat.json()).catch(this.handleError);
    }

    private handleError(error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}