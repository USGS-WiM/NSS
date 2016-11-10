import { Injectable, Inject } from '@angular/core';

import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {CONFIG}     from '../shared/config';
import { IRegion } from '../shared/region';
import { IRegressionRegion } from '../shared/regressionRegion';
import { IRegressionType } from '../shared/regressionType';
import { IStatisticGroup } from '../shared/statisticGroup';
import { IScenario } from '../shared/scenario';

@Injectable()
export class RegionService {
    constructor( @Inject(Http) private _http: Http) { }

    //get all regions
    getRegions() {
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS });

        return this._http.get(CONFIG.REGION_URL, options)
            .map(res => <IRegion[]>res.json())
            .catch(this.handleError);
    }

    //get a region by id
    getRegion(id: number) {
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS });
        return this._http.get(CONFIG.REGION_URL + '/' + id, options)
            .map(res => <IRegion>res.json())
            .catch(this.handleError);     
    }

    //get regressionRegions by region
    getRegionRegressionRegions(id: number, searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS, search:searchArgs });

        return this._http.get(CONFIG.REGION_URL + '/' + id + '/regressionregions', options)
            .map(res => <IRegressionRegion[]>res.json())
            .catch(this.handleError);
    }    

    //get regressiontypes by region
    getRegionRegressionTypes(id: number, searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS, search: searchArgs });

        return this._http.get(CONFIG.REGION_URL + '/' + id + '/regressiontypes', options)
            .map(res => <IRegressionType[]>res.json())
            .catch(this.handleError);
    }

    //get statisticgroups by region
    getRegionStatisticGrps(id: number, searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS, search: searchArgs });

        return this._http.get(CONFIG.REGION_URL + '/' + id + '/statisticgroups', options)
            .map(res => <IStatisticGroup[]>res.json())
            .catch(this.handleError);
    }

    //get scenarios by region
    getRegionScenario(id: number, searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS, search: searchArgs });

        return this._http.get(CONFIG.REGION_URL + '/' + id + '/scenarios', options)
            .map(res => <IScenario[]>res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}