import { throwError as observableThrowError, Observable, Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// interfaces
import { Region } from '../../shared/interfaces/region';
import { Regressionregion } from '../../shared/interfaces/regressionregion';
import { Statisticgroup } from '../../shared/interfaces/statisticgroup';
import { Regressiontype } from '../../shared/interfaces/regressiontype';
import { Scenario } from '../../shared/interfaces/scenario';
import { Citation } from '../../shared/interfaces/citation';
import { Hydrochart } from '../../shared/interfaces/hydrochart';
import { Config } from '../../shared/interfaces/config';
import { ConfigService } from '../../config.service';
import { Toast } from 'angular2-toaster/src/toast';
import { Unittype } from '../../shared/interfaces/unitType';
import { Variabletype } from '../../shared/interfaces/variabletype';
import { Manager } from '../interfaces/manager';
import { Role } from '../interfaces/role';

@Injectable()
export class NSSService {
    // updated whenever selected values are updated - used for getting other parts
    private _regRegionIdParams: string;
    private _regTypeIdParams: string;
    private _statGrpIdParams: string;
    private configSettings: Config;
    private jsonHeader: Headers = new Headers({ Accept: 'application/json', 'Content-Type': 'application/json' });

    constructor(private _http: Http, private _configService: ConfigService) {
        this.configSettings = this._configService.getConfiguration();
        this.getRegions();
    }

    // -+-+-+-+-+-+-+-+-+ app version (gotten from environment.ts) -+-+-+-+-+-+-+-+
    private appversion: BehaviorSubject<string> = <BehaviorSubject<string>>new BehaviorSubject('');
    public setVersion(val: string) {
        this.appversion.next(val);
    }
    public get getVersion(): any {
        return this.appversion.asObservable();
    }
    // -+-+-+-+-+-+-+-+-+ about modal -+-+-+-+-+-+-+-+
    private _showHideAboutModal: Subject<boolean> = new Subject<boolean>();
    public setAboutModal(val: any) {
        this._showHideAboutModal.next(val);
    }
    // show the filter modal in the mainview
    public get showAboutModal(): any {
        return this._showHideAboutModal.asObservable();
    }

    private _showHideCreateModal: Subject<boolean> = new Subject<boolean>();
    public setCreateModal(val: any) {
        this._showHideCreateModal.next(val);
    }
    // show the filter modal in the mainview
    public get showCreateModal(): any {
        return this._showHideCreateModal.asObservable();
    }

    private _showHideLoginModal: Subject<boolean> = new Subject<boolean>();
    public setLoginModal(val: any) {
        this._showHideLoginModal.next(val);
    }
    // show the filter modal in the mainview
    public get showLoginModal(): any {
        return this._showHideLoginModal.asObservable();
    }

    public get loginType(): any {
        // this will return the login type (manager v. admin)
        return '';
    }

    // -+-+-+-+-+-+-+-+-+ hydrograph  getter/setter  -+-+-+-+-+-+-+-+-+
    private hydrograph: Hydrochart;
    private hydroBind: Subject<Hydrochart> = new Subject<Hydrochart>();
    setHydrograph(h: Hydrochart) {
        this.hydrograph = h;
        this.hydroBind.next(h);
    }
    getHydrograph(): Observable<Hydrochart> {
        return this.hydroBind.asObservable();
    }
    private chartBind: Subject<string> = new Subject<string>();
    addChart(c: string) {
        this.chartBind.next(c);
    }
    getChart(): Observable<string> {
        return this.chartBind.asObservable();
    }

    // -+-+-+-+-+-+-+-+-+ frequency  getter/setter  -+-+-+-+-+-+-+-+-+
    private frequency: string;
    private freqBind: Subject<string> = new Subject<string>();
    setFrequency() {
        this.frequency = 'newOne';
        this.freqBind.next('newOne');
    }
    getFrequency(): Observable<string> {
        return this.freqBind.asObservable();
    }

    // -+-+-+-+-+-+-+-+-+ toaster  getter/setter  -+-+-+-+-+-+-+-+-+
    private toast: Toast;
    private toastBind: Subject<Toast> = new Subject<Toast>();
    public showToast(t: Toast) {
        this.toast = t;
        this.toastBind.next(t);
    }
    public getToast(): Observable<Toast> {
        return this.toastBind.asObservable();
    }

    // -+-+-+-+-+-+ region section -+-+-+-+-+-+-+
    private _regionSubject: Subject<Array<Region>> = new Subject<Array<Region>>(); //array of regions that sidebar and mainview use
    private _selectedRegion: BehaviorSubject<Region> = new BehaviorSubject<any>(''); //selectedregion

    public get regions(): Observable<Array<Region>> {
        // getter (regions)
        return this._regionSubject.asObservable();
    }

    // setter (selectedRegion)
    public setSelectedRegion(v: Region) {
        if (v == this._selectedRegion.getValue()) return;
        this._selectedRegion.next(v);
        this._selectedRegRegions.next([]);
        this._selectedStatGroups = [];
        this._selectedRegressionTypes = [];
        this.chartBind.next('');
        // go get all the other stuff (regressionregions, regressiontypes,statisticgroups and scenarios
        this.initializeRegion();
    }
    // getter (selectedRegion)
    public get selectedRegion(): Observable<Region> {
        return this._selectedRegion.asObservable();
    }
    // get all regions
    public getRegions(): void {
        const options = new RequestOptions({ headers: this.jsonHeader });
        this._http
            .get(this.configSettings.baseURL + this.configSettings.regionURL, options)
            .map(res => <Array<Region>>res.json())
            .catch(this.handleError)
            .subscribe(r => {
                this._regionSubject.next(r);
            });
    }
    // -+-+-+-+-+-+ end region section -+-+-+-+-+-+-+

    // -+-+-+-+-+-+ regressionregion -+-+-+-+-+-+-+
    private _regressionRegionSubject: Subject<Array<Regressionregion>> = new Subject<Array<Regressionregion>>();
    public get regressionRegions(): Observable<Array<Regressionregion>> {
        return this._regressionRegionSubject.asObservable();
    }

    private _selectedRegRegions: BehaviorSubject<Array<Regressionregion>> = new BehaviorSubject<Array<Regressionregion>>([]);
    // setter (selectedRegion)
    public setSelectedRegRegions(v: Array<Regressionregion>) {
        this.chartBind.next('');
        if (v.length > 0) {
            const srr: Array<number> = [];
            v.forEach(rr => {
                srr.push(rr.id);
            });

            this._selectedRegRegions.next(v);

            // now update statisticGroups, regressionTypes if there are selectedRegRegions
            this._regRegionIdParams = srr.length >= 0 ? srr.join(',') : '';

            // params for regressionTypes and statisticGroups
            const regTypeParams: URLSearchParams = new URLSearchParams();
            regTypeParams.set('regressionregions', this._regRegionIdParams);
            regTypeParams.set('statisticgroups', this._statGrpIdParams);
            this.getRegionRegressionTypes(this._selectedRegion.getValue().id, regTypeParams).subscribe(
                rt => {
                    // format all reg type stuff
                    this.formatRegTypeStuff(rt);

                    // params for statistic groups
                    const statGrpParams: URLSearchParams = new URLSearchParams();
                    statGrpParams.set('regressionregions', this._regRegionIdParams);
                    statGrpParams.set('regressiontypes', this._regTypeIdParams);
                    this.getRegionStatisticGrps(this._selectedRegion.getValue().id, statGrpParams).subscribe(
                        sg => {
                            this.formatStatisticGrpStuff(sg);

                            // params for scenarios
                            const scenarioParams: URLSearchParams = new URLSearchParams();
                            scenarioParams.set('regressionregions', this._regRegionIdParams);
                            scenarioParams.set('regressiontypes', this._regTypeIdParams);
                            scenarioParams.set('statisticgroups', this._statGrpIdParams);
                            scenarioParams.set('unitsystems', '2');
                            this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); //get scenarios
                        },
                        error => this.handleError
                    ); // get StatisticGroups
                },
                error => this.handleError
            ); // get regressionRegions
        } else {
            // they cleared it
            this._selectedRegRegions.next([]);
            // now update statisticGroups, regressionTypes if there are selectedRegRegions
            const regTypeParams: URLSearchParams = new URLSearchParams();
            regTypeParams.set('statisticgroups', this._statGrpIdParams);
            this.getRegionRegressionTypes(this._selectedRegion.getValue().id, regTypeParams).subscribe(
                rt => {
                    this.formatRegTypeStuff(rt);

                    // params for statistic groups
                    const statGrpParams: URLSearchParams = new URLSearchParams();
                    statGrpParams.set('regressiontypes', this._regTypeIdParams);
                    this.getRegionStatisticGrps(this._selectedRegion.getValue().id, statGrpParams).subscribe(
                        sg => {
                            this.formatStatisticGrpStuff(sg);

                            // params for scenarios
                            const scenarioParams: URLSearchParams = new URLSearchParams();
                            scenarioParams.set('regressiontypes', this._regTypeIdParams);
                            scenarioParams.set('statisticgroups', this._statGrpIdParams);
                            scenarioParams.set('unitsystems', '2');
                            this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); // get scenarios
                        },
                        error => this.handleError
                    ); // get StatisticGroups
                },
                error => this.handleError
            ); // get RegressionTypes
        }
    }
    // getter (selectedRegRegion)
    public get selectedRegRegions(): Observable<Array<Regressionregion>> {
        return this._selectedRegRegions.asObservable();
    }
    // once http.get.map is done.. the .subcribe calls this function to get everything formatted
    private formatRegRegionStuff(rr: Array<Regressionregion>) {
        // remove from _selectedRegRegions if not in response.
        if (this._selectedRegRegions.getValue() !== undefined) {
            for (let srr = this._selectedRegRegions.getValue().length; srr--; ) {
                const RRSind = rr
                    .map(function(eachrr) {
                        return eachrr.id;
                    })
                    .indexOf(this._selectedRegRegions.getValue()[srr].id);
                if (RRSind < 0) this._selectedRegRegions.getValue().splice(srr, 1);
            }
            // repopulate param string comma sep IDs
            const regRegIDarray: Array<number> = new Array<number>();
            this._selectedRegRegions.getValue().forEach(rt => {
                regRegIDarray.push(rt.id); // pushing each ID into arrayof numbers to then join as comma sep string for parameters
            });
            this._regRegionIdParams = regRegIDarray.length >= 0 ? regRegIDarray.join(',') : '';
        }
        this._regressionRegionSubject.next(rr);
    }
    // -+-+-+-+-+-+ end regressionRegion section -+-+-+-+-+-+-+

    // -+-+-+-+-+-+ statisticgroups section -+-+-+-+-+-+-+-+-+-+
    private _statisticGroupSubject: Subject<Array<Statisticgroup>> = new Subject<Array<Statisticgroup>>();
    public get statisticGroups(): Observable<Array<Statisticgroup>> {
        return this._statisticGroupSubject.asObservable();
    }

    private _selectedStatGroups: Array<Statisticgroup>;
    // setter (selectedStatisticgroup)
    public set selectedStatGroups(v: Array<Statisticgroup>) {
        this.chartBind.next('');
        if (v.length > 0) {
            this._selectedStatGroups = v;
            const ssg: Array<number> = [];
            this._selectedStatGroups.forEach(ss => {
                ssg.push(ss.ID);
            });
            // now update regressionRegions, regressionTypes if there are selectedStatisticGroups
            this._statGrpIdParams = ssg.length >= 0 ? ssg.join(',') : '';

            // params for regressionTypes
            const regTypeParams: URLSearchParams = new URLSearchParams();
            regTypeParams.set('regressionregions', this._regRegionIdParams);
            regTypeParams.set('statisticgroups', this._statGrpIdParams);
            this.getRegionRegressionTypes(this._selectedRegion.getValue().id, regTypeParams).subscribe(
                rt => {
                    // format all reg type stuff
                    this.formatRegTypeStuff(rt);

                    // params for regressionRegions
                    const regRegionParams: URLSearchParams = new URLSearchParams();
                    regRegionParams.set('statisticgroups', this._statGrpIdParams);
                    regRegionParams.set('regressiontypes', this._regTypeIdParams);
                    this.getRegionRegressionRegions(this._selectedRegion.getValue().id, regRegionParams).subscribe(
                        rr => {
                            // format all reg regions stuff
                            this.formatRegRegionStuff(rr);

                            // params for scenarios
                            const scenarioParams: URLSearchParams = new URLSearchParams();
                            scenarioParams.set('regressionregions', this._regRegionIdParams);
                            scenarioParams.set('regressiontypes', this._regTypeIdParams);
                            scenarioParams.set('statisticgroups', this._statGrpIdParams);
                            scenarioParams.set('unitsystems', '2');
                            this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); //get scenarios
                        },
                        error => this.handleError
                    ); // getRegionRegressionRegions
                },
                error => this.handleError
            ); // getRegionRegressionTypes
        } // v.lenght > 0
        else {
            // they cleared it
            this._selectedStatGroups = [];
            // now update statisticGroups, regressionTypes if there are selectedRegRegions
            const regTypeParams: URLSearchParams = new URLSearchParams();
            regTypeParams.set('regressionregions', this._regRegionIdParams);
            this.getRegionRegressionTypes(this._selectedRegion.getValue().id, regTypeParams).subscribe(
                rt => {
                    // format all reg type stuff
                    this.formatRegTypeStuff(rt);

                    // params for regressionRegions
                    const regRegionsParams: URLSearchParams = new URLSearchParams();
                    regRegionsParams.set('regressiontypes', this._regTypeIdParams);
                    this.getRegionRegressionRegions(this._selectedRegion.getValue().id, regRegionsParams).subscribe(
                        rr => {
                            // format all reg regions stuff
                            this.formatRegRegionStuff(rr);

                            // params for scenarios
                            const scenarioParams: URLSearchParams = new URLSearchParams();
                            scenarioParams.set('regressiontypes', this._regTypeIdParams);
                            scenarioParams.set('regressionregions', this._regRegionIdParams);
                            scenarioParams.set('unitsystems', '2');
                            this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); //get scenarios
                        },
                        error => this.handleError
                    ); // get getRegionRegressionRegions
                },
                error => this.handleError
            ); // get RegressionTypes
        }
    }
    // getter (selectedStatisticgroup)
    public get selectedStatGroups(): Array<Statisticgroup> {
        return this._selectedStatGroups;
    }
    // once http.get.map is done.. the .subcribe calls this function to get everything formatted
    private formatStatisticGrpStuff(sg: Array<Statisticgroup>) {
        // remove from _selectedStatGroups if not in response.
        if (this._selectedStatGroups != undefined) {
            for (var si = this._selectedStatGroups.length; si--; ) {
                let SSind = sg
                    .map(function(eachsg) {
                        return eachsg.id;
                    })
                    .indexOf(this._selectedStatGroups[si].id);
                if (SSind < 0) this._selectedStatGroups.splice(si, 1);
            }
            // repopulate param string comma sep IDs
            const statGrpIDarray: Array<number> = new Array<number>();
            this._selectedStatGroups.forEach(rt => {
                statGrpIDarray.push(rt.id); // pushing each ID into arrayof numbers to then join as comma sep string for parameters
            });
            this._statGrpIdParams = statGrpIDarray.length >= 0 ? statGrpIDarray.join(',') : '';
        }
        this._statisticGroupSubject.next(sg);
    }
    // -+-+-+-+-+-+ end statisticgroups section -+-+-+-+-+-+-+-+-+-+

    // -+-+-+-+-+-+ regressionTypes -+-+-+-+-+-+-+-+-+-+-+-+
    private _regressionTypeSubject: Subject<Array<Regressiontype>> = new Subject<Array<Regressiontype>>();
    private _selectedRegressionTypes: Array<Regressiontype>;

    public get regressionTypes(): Observable<Array<Regressiontype>> {
        return this._regressionTypeSubject.asObservable();
    }
    // setter (selectedRegressionType)
    public set selectedRegressionTypes(v: Array<Regressiontype>) {
        this.chartBind.next('');
        if (v.length > 0) {
            this._selectedRegressionTypes = v;
            const srt: Array<number> = [];
            this._selectedRegressionTypes.forEach(rt => {
                srt.push(rt.ID);
            });
            // now update regressionRegions, regressionTypes if there are selectedStatisticGroups
            this._regTypeIdParams = srt.length >= 0 ? srt.join(',') : '';

            const statGrpParams: URLSearchParams = new URLSearchParams();
            statGrpParams.set('regressionregions', this._regRegionIdParams);
            statGrpParams.set('regressiontypes', this._regTypeIdParams);
            this.getRegionStatisticGrps(this._selectedRegion.getValue().id, statGrpParams).subscribe(
                sg => {
                    this.formatStatisticGrpStuff(sg);

                    // params for regRegions
                    const regRegionParams: URLSearchParams = new URLSearchParams();
                    regRegionParams.set('statisticgroups', this._statGrpIdParams);
                    regRegionParams.set('regressiontypes', this._regTypeIdParams);
                    this.getRegionRegressionRegions(this._selectedRegion.getValue().id, regRegionParams).subscribe(
                        rr => {
                            this.formatRegRegionStuff(rr);

                            // params for scenarios
                            const scenarioParams: URLSearchParams = new URLSearchParams();
                            scenarioParams.set('regressionregions', this._regRegionIdParams);
                            scenarioParams.set('regressiontypes', this._regTypeIdParams);
                            scenarioParams.set('statisticgroups', this._statGrpIdParams);
                            scenarioParams.set('unitsystems', '2');
                            this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); //get scenarios
                        },
                        error => this.handleError
                    ); // get regressionRegions
                },
                error => this.handleError
            ); // get RegressionTypes
        } // v.lenght > 0
        else {
            // they cleared it
            this._selectedRegressionTypes = [];
            // now update statisticGroups, regressionTypes if there are selectedRegRegions
            const regTypeParams: URLSearchParams = new URLSearchParams();
            regTypeParams.set('regressionregions', this._regRegionIdParams);
            this.getRegionStatisticGrps(this._selectedRegion.getValue().id, regTypeParams).subscribe(
                sg => {
                    this.formatStatisticGrpStuff(sg);

                    // params for reg regions
                    const regRegionsParams: URLSearchParams = new URLSearchParams();
                    regRegionsParams.set('statisticgroups', this._statGrpIdParams);
                    this.getRegionRegressionRegions(this._selectedRegion.getValue().id, regRegionsParams).subscribe(
                        rr => {
                            this.formatRegRegionStuff(rr);

                            // params for scenarios
                            const scenarioParams: URLSearchParams = new URLSearchParams();
                            scenarioParams.set('statisticgroups', this._statGrpIdParams);
                            scenarioParams.set('regressionregions', this._regRegionIdParams);
                            scenarioParams.set('unitsystems', '2');
                            this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); //get scenarios
                        },
                        error => this.handleError
                    ); // get regressionregions
                },
                error => this.handleError
            ); // get RegressionTypes
        }
    }
    // getter (selectedRegressionType)
    public get selectedRegressionTypes(): Array<Regressiontype> {
        return this._selectedRegressionTypes;
    }
    // once http.get.map is done.. the .subcribe calls this function to get everything formatted
    formatRegTypeStuff(rt: Array<Regressiontype>) {
        rt.forEach(r => {
            r.id = r.id;
            r.name = r.name;
        });
        // remove from _selectedStatGroups if not in response.
        if (this._selectedRegressionTypes != undefined) {
            for (let srt = this._selectedRegressionTypes.length; srt--; ) {
                const RTSind = rt
                    .map(function(eachrt) {
                        return eachrt.id;
                    })
                    .indexOf(this._selectedRegressionTypes[srt].id);
                if (RTSind < 0) this._selectedRegressionTypes.splice(srt, 1);
            }
            // repopulate param string comma sep IDs
            const regTypeIDarray: Array<number> = new Array<number>();
            this._selectedRegressionTypes.forEach(rt => {
                regTypeIDarray.push(rt.id); // pushing each ID into arrayof numbers to then join as comma sep string for parameters
            });
            this._regTypeIdParams = regTypeIDarray.length >= 0 ? regTypeIDarray.join(',') : '';
        }
        this._regressionTypeSubject.next(rt);
    }
    // -+-+-+-+-+-+ end regressionTypes section -+-+-+-+-+-+-+-+-+-+

    // -+-+-+-+-+-+ Scenarios section -+-+-+-+-+-+-+-+-+-+
    private _scenarioSubject: Subject<Array<Scenario>> = new Subject<Array<Scenario>>();
    public get scenarios(): Observable<Array<Scenario>> {
        return this._scenarioSubject.asObservable();
    }
    public setScenarios(s: Array<Scenario>) {
        this._scenarioSubject.next(s);
        this.chartBind.next('');
    }
    // -+-+-+-+-+-+ end Scenarios section -+-+-+-+-+-+-+-+-+-+

    // region has been selected, populate all other multiselects and get scenarios
    private initializeRegion(): void {
        this.getRegionRegressionRegions(this._selectedRegion.getValue().id).subscribe(rr => {
            this.formatRegRegionStuff(rr);
        }); // get RegressionRegions
        this.getRegionStatisticGrps(this._selectedRegion.getValue().id).subscribe(sg => {
            this.formatStatisticGrpStuff(sg);
        }); // get StatisticGroups
        this.getRegionRegressionTypes(this._selectedRegion.getValue().id).subscribe(rt => {
            this.formatRegTypeStuff(rt);
        }); // get RegressionTypes
        const scenarioParams: URLSearchParams = new URLSearchParams();
        scenarioParams.set('unitsystems', '2');
        this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); // get scenarios
    }
    // -+-+-+-+-+-+-+-+-+-+-+-+ http GETs -+-+-+-+-+-+-+-+-+-+-+-+

    // get unit types
    public getUnitTypes(searchArgs?: URLSearchParams) {
        const options = new RequestOptions({ headers: this.jsonHeader, search: searchArgs });
        return this._http.get(this.configSettings.baseURL + this.configSettings.unitsURL, options).map(res => <Array<Unittype>>res.json());
    }

    // get variable types
    public getVariableTypes(searchArgs?: URLSearchParams) {
        const options = new RequestOptions({ headers: this.jsonHeader, search: searchArgs });
        return this._http
            .get(this.configSettings.baseURL + this.configSettings.variablesURL, options)
            .map(res => <Array<Variabletype>>res.json());
    }
    // get regressionRegions by region
    private getRegionRegressionRegions(id: number, searchArgs?: URLSearchParams) {
        const options = new RequestOptions({ headers: this.jsonHeader, search: searchArgs });
        return this._http
            .get(this.configSettings.baseURL + this.configSettings.regionURL + id + '/' + this.configSettings.regRegionURL, options)
            .map(res => <Array<Regressionregion>>res.json());
    }

    // get regressiontypes by region
    private getRegionRegressionTypes(id: number, searchArgs?: URLSearchParams) {
        const options = new RequestOptions({ headers: this.jsonHeader, search: searchArgs });
        return this._http
            .get(this.configSettings.baseURL + this.configSettings.regionURL + id + '/' + this.configSettings.regTypeURL, options)
            .map(res => <Regressiontype[]>res.json());
    }

    // get statisticgroups by region
    private getRegionStatisticGrps(id: number, searchArgs?: URLSearchParams) {
        const options = new RequestOptions({ headers: this.jsonHeader, search: searchArgs });
        return this._http
            .get(this.configSettings.baseURL + this.configSettings.regionURL + id + '/' + this.configSettings.statisticGrpURL, options)
            .map(res => <Statisticgroup[]>res.json());
    }

    // get scenarios by region
    private getRegionScenario(id: number, searchArgs?: URLSearchParams) {
        const options = new RequestOptions({ headers: this.jsonHeader, search: searchArgs });
        return this._http
            .get(this.configSettings.baseURL + this.configSettings.regionURL + id + '/' + this.configSettings.statisticGrpURL, options)
            .map(res => <Scenario[]>res.json())
            .subscribe(
                s => {
                    s.forEach(scen => {
                        // get citations
                        let i = scen.links[0].Href.indexOf('?');
                        let param = scen.links[0].Href.substring(i + 1);
                        this.getCitations(new URLSearchParams(param)).subscribe(c => {
                            scen.citations = c;
                        });
                        // clear Parameter.'Value'
                        scen.regressionRegions.forEach(rr => {
                            rr.parameters.forEach(p => {
                                p.value = null;
                            });
                        });
                    });
                    this._scenarioSubject.next(s);
                },
                error => this.handleError
            );
    }

    // calculate Scenarios (POST)
    postScenarios(id: number, s: Scenario[], searchArgs?: URLSearchParams) {
        // let body = JSON.stringify(s);
        let options = new RequestOptions({ headers: this.jsonHeader, search: searchArgs });

        return this._http
            .post(this.configSettings.baseURL + this.configSettings.regionURL + id + '/scenarios/estimate', s, options)
            .map(sResult => <Scenario[]>sResult.json())
            .subscribe(
                sResult => {
                    sResult.forEach(scen => {
                        if (scen.regressionRegions.length > 0) {
                            // get citations
                            let i = scen.links[0].Href.indexOf('?');
                            let param = scen.links[0].Href.substring(i + 1);
                            this.getCitations(new URLSearchParams(param)).subscribe(
                                c => {
                                    scen.citations = c;
                                },
                                error => this.handleError
                            );
                        }
                    });
                    this._scenarioSubject.next(sResult);
                },
                error => this.handleError
            );
    }

    private getCitations(searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: this.jsonHeader, search: searchArgs });

        return this._http
            .get(this.configSettings.baseURL + this.configSettings.citationURL, options)
            .map(cit => <Citation[]>cit.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return observableThrowError(errMsg);
    }
}
