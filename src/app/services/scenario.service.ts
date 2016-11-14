import { Injectable, Inject } from '@angular/core';

import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {CONFIG}     from '../shared/config';
import { IScenario } from '../shared/scenario';

const OPTIONS = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS });
@Injectable()
export class ScenarioService {
    constructor( @Inject(Http) private _http: Http) { }

    //"/scenarios?region={region}&regressionregions={regressionRegionIDs}&statisticgroups={statisticgroups}&regressiontypes={regressiontypeIDs}&unitsystems={systemtypeID}&extensions={extensionmethods}"
    getScenario(id: number) {
        return this._http.get(CONFIG.REGION_URL + '/' + id + '/scenarios', OPTIONS)
            .map(s => <IScenario[]>s.json())
            .catch(this.handleError);
    }

    postScenarios(id: number, s:IScenario[], searchArgs ?: URLSearchParams):Observable<IScenario[]> {
        //let body = JSON.stringify(s);
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS, search: searchArgs });
                
        return this._http.post(CONFIG.REGION_URL + '/' + id + '/scenarios/estimate',s, options)
            .map(sResult => <IScenario[]>sResult.json())
            .catch(this.handleError);     
    }

    //getRegressionRegionCitations(id: number) {
    //    return this._http.get(CONFIG.CITATION_URL + '?regressionregions=' + id, OPTIONS)
    //        .map(cit => <ICitation[]>cit.json())
    //        .catch(this.handleError);
    //}

    private handleError(error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}