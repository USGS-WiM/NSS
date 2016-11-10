import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

//import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


//import { IRegion } from '../shared/region';
//import { IRegressionRegion } from '../shared/regressionRegion';
//import {IStatisticGroup} from '../shared/statisticGroup';

import { CONFIG } from '../shared/config';

@Injectable()
export class RegionService {
    getRegions(): void { } //stub

    //hold base url
    //private _regionUrl = CONFIG.baseUrls.config + 'regions.json';
    ////resolve HTTP using constructor
    //constructor(private _http: Http) { }

    //getRegions(): Observable<IRegion[]> {
    //    return this._http.get(this._regionUrl)
    //        .map((response: Response) => <IRegion[]>response.json())
    //        .do(data => console.log('All: ' + JSON.stringify(data)))
    //        .catch(this.handleError);
    //}

    //getRegion(id: number): Observable<IRegion> {
    //    return this.getRegions()
    //        .map((region: IRegion[]) => region.find(r => r.ID === id));
    //}

    //private handleError(error: Response) {
    //    // in a real world app, we may send the server to some remote logging infrastructure
    //    // instead of just logging it to the console
    //    console.error(error);
    //    return Observable.throw(error.json().error || 'Server error');
    //}
}