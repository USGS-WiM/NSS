import { throwError as observableThrowError, Observable, Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// interfaces
import { Region } from 'app/shared/interfaces/region';
import { Regressionregion } from 'app/shared/interfaces/regressionregion';
import { Statisticgroup } from 'app/shared/interfaces/statisticgroup';
import { Regressiontype } from 'app/shared/interfaces/regressiontype';
import { Scenario } from 'app/shared/interfaces/scenario';
import { Citation } from 'app/shared/interfaces/citation';
import { Hydrochart } from 'app/shared/interfaces/hydrochart';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from '../../config.service';
import { Toast } from 'angular2-toaster/src/toast';
import { Unittype } from 'app/shared/interfaces/unitType';
import { Variabletype } from 'app/shared/interfaces/variabletype';
import { ToasterService } from 'angular2-toaster';
import { Predictioninterval } from '../interfaces/predictioninterval';
import { AddRegressionRegion } from '../interfaces/addregressionregion';
import { LoaderService } from './loader.service';
import { ManageCitation } from '../interfaces/managecitations';
import { Stationtype } from 'app/shared/interfaces/stationtype';
import { Agency } from 'app/shared/interfaces/agency';

@Injectable()
export class NSSService {
    // updated whenever selected values are updated - used for getting other parts
    private _regRegionIdParams: string;
    private _regTypeIdParams: string;
    private _statGrpIdParams: string;
    private configSettings: Config;
    private jsonHeader: HttpHeaders = new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('auth') || ''
    });
    constructor(private _http: HttpClient, private _configService: ConfigService, private _toasterService: ToasterService, private _loaderService: LoaderService) {
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
    // -+-+-+-+-+-+-+-+-+ add scenario modal -+-+-+-+-+-+-+-+
    private _showHideAddScenarioModal: Subject<boolean> = new Subject<boolean>();
    public setAddScenarioModal(val: any) { 
        this._showHideAddScenarioModal.next(val);
    }
    // -+-+-+-+-+-+-+-+-+ clone scenario modal -+-+-+-+-+-+-+-+
    private _showHideCloneScenarioModal: Subject<boolean> = new Subject<boolean>();
    public setCloneScenarioModal(val: any) { 
        this._showHideCloneScenarioModal.next(val);
    }

    private itemSource = new BehaviorSubject<any>(' ');
    currentItem = this.itemSource.asObservable();

    changeItem(item: any){
        this.itemSource.next(item);
    }

    //Toggle Compute Button
    private compute = new BehaviorSubject<boolean>(true);
    currentCompute = this.compute.asObservable();

    showCompute(bool: boolean){
        this.compute.next(bool);
    }

    // show the add scenario modal in the mainview
    public get showAddScenarioModal(): any {
        return this._showHideAddScenarioModal.asObservable();
    }
    // show the add scenario modal in the mainview
    public get showCloneScenarioModal(): any {
        return this._showHideCloneScenarioModal.asObservable();
    }
    // -+-+-+-+-+-+-+-+-+ manage citations modal -+-+-+-+-+-+-+-+
    private _showHideManageCitationsModal: Subject<ManageCitation> = new Subject<ManageCitation>();
    public setManageCitationsModal(val: ManageCitation) { 
        this._showHideManageCitationsModal.next(val);
    }
    // show the manage citations modal in the mainview
    public get showManageCitationsModal(): any {
        return this._showHideManageCitationsModal.asObservable();
    }
    // add existing citation
    private citationSource = new BehaviorSubject<any>(' ');
    currentCitation = this.citationSource.asObservable();
    addExistingCitation(item: any){
        this.citationSource.next(item);
    }
    // -+-+-+-+-+-+-+-+-+ add regression region modal -+-+-+-+-+-+-+-+
    private _showHideAddRegressioRegionModal: Subject<AddRegressionRegion> = new Subject<AddRegressionRegion>();
    public setAddRegressionRegionModal(val: AddRegressionRegion) {
        this._showHideAddRegressioRegionModal.next(val);
    }
    // show the add regression region modal in the mainview
    public get showAddRegRegionModal(): any {
        return this._showHideAddRegressioRegionModal.asObservable();
    }

    private _showHideLoginModal: Subject<boolean> = new Subject<boolean>();
    public setLoginModal(val: any) {
        this._showHideLoginModal.next(val);
    }
    // show the login modal in the mainview
    public get showLoginModal(): any {
        return this._showHideLoginModal.asObservable();
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
    private _regionSubject: Subject<Array<Region>> = new Subject<Array<Region>>(); // array of regions that sidebar and mainview use
    private _selectedRegion: BehaviorSubject<Region> = new BehaviorSubject<any>(''); // selectedregion

    public get regions(): Observable<Array<Region>> {
        // getter (regions)
        return this._regionSubject.asObservable();
    }

    // clear selected
    public clearSelected() {
        this._selectedRegRegions.next([]);
        this._selectedStatGroups = [];
        this._selectedRegressionTypes = [];
        this.chartBind.next('');
        this._selectedRegion.next(null);
    }

    // setter (selectedRegion)
    public setSelectedRegion(v: Region) {
        this._selectedRegion.next(v);
        this._selectedRegRegions.next([]);
        this._selectedStatGroups = [];
        this._selectedRegressionTypes = [];
        this.chartBind.next('');
        // go get all the other stuff (regressionregions, regressiontypes,statisticgroups and scenarios
        if (v) { this.initializeRegion(); }
    }
    // getter (selectedRegion)
    public get selectedRegion(): Observable<Region> {
        return this._selectedRegion.asObservable();
    }
    // get all regions
    public getRegions(): void {
        this._http
            .get(this.configSettings.nssBaseURL + this.configSettings.regionURL, { headers: this.jsonHeader })
            .map(res => <Array<Region>>res)
            .catch(this.handleError)
            .subscribe(r => {
                this._regionSubject.next(r);
            });
    }
    // -+-+-+-+-+-+ end region section -+-+-+-+-+-+-+

    // -+-+-+-+-+-+ station type section -+-+-+-+-+-+-+
    private _stationTypeSubject: Subject<Array<Stationtype>> = new Subject<Array<Stationtype>>(); // array of station types that sidebar and mainview use
    private _selectedStationType: BehaviorSubject<Stationtype> = new BehaviorSubject<any>(''); // selectedstationtype

    public get stationTypes(): Observable<Array<Stationtype>> {
        // getter (station type)
        return this._stationTypeSubject.asObservable();
    }

    // clear selected

    // setter (selectedStationType)
    public setSelectedStationType(v: Stationtype){
        this._selectedStationType.next(v);
    } 
    
    // getter (selectedStationType)
    public get selectedStationType(): Observable<Stationtype> {
        return this._selectedStationType.asObservable();
    }
    // get all station types
    public getStationTypes(): void {
        this._http
            .get(this.configSettings.gageURL + this.configSettings.stationTypeURL, { headers: this.jsonHeader })
            .map(res => <Array<Stationtype>>res)
            .catch(this.handleError)
            .subscribe(r => {
                this._stationTypeSubject.next(r);
            });
    }
    // -+-+-+-+-+-+ end station type section -+-+-+-+-+-+-+

    // -+-+-+-+-+-+ agency section -+-+-+-+-+-+-+
    private _agencySubject: Subject<Array<Agency>> = new Subject<Array<Agency>>(); // array of agencies that sidebar and mainview use
    private _selectedAgency: BehaviorSubject<Agency> = new BehaviorSubject<any>(''); // selectedAgency

    public get agencies(): Observable<Array<Agency>> {
        // getter (agencies)
        return this._agencySubject.asObservable();
    }

    // clear selected

    // setter (selectedAgency)
    public setSelectedAgency(v: Agency){
        this._selectedAgency.next(v);
    }
    
    // getter (selectedAgency)
    public get selectedAgency(): Observable<Agency> {
        return this._selectedAgency.asObservable();
    }
    // get all station types
    public getAgencies(): void {
        this._http
            .get(this.configSettings.gageURL + this.configSettings.agenciesURL, { headers: this.jsonHeader })
            .map(res => <Array<Agency>>res)
            .catch(this.handleError)
            .subscribe(r => {
                this._agencySubject.next(r);
            });
    }
    // -+-+-+-+-+-+ end agency section -+-+-+-+-+-+-+

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
            const regTypeParams = '?regressionregions=' + this._regRegionIdParams + '&statisticgroups=' + this._statGrpIdParams;
            this.getRegionRegressionTypes(this._selectedRegion.getValue().id, regTypeParams).subscribe(
                rt => {
                    // format all reg type stuff
                    this.formatRegTypeStuff(rt);

                    // params for statistic groups
                    const statGrpParams = '?regressionregions=' + this._regRegionIdParams + '&regressiontypes=' + this._regTypeIdParams;
                    this.getRegionStatisticGrps(this._selectedRegion.getValue().id, statGrpParams).subscribe(
                        sg => {
                            this.formatStatisticGrpStuff(sg);

                            // params for scenarios
                            const scenarioParams = '?regressionregions=' + this._regRegionIdParams + '&regressiontypes=' + this._regTypeIdParams + '&statisticgroups=' + this._statGrpIdParams + '&unitsystems=' + '2';
                            this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); // get scenarios
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
            const regTypeParams = '?statisticgroups=' + this._statGrpIdParams;
            this.getRegionRegressionTypes(this._selectedRegion.getValue().id, regTypeParams).subscribe(
                rt => {
                    this.formatRegTypeStuff(rt);

                    // params for statistic groups
                    const statGrpParams = '?regressiontypes=' + this._regTypeIdParams;
                    this.getRegionStatisticGrps(this._selectedRegion.getValue().id, statGrpParams).subscribe(
                        sg => {
                            this.formatStatisticGrpStuff(sg);

                            // params for scenarios
                            const scenarioParams = '?regressiontypes=' + this._regTypeIdParams + '&statisticgroups=' + this._statGrpIdParams+ '&unitsystems=' + '2';
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
                if (RRSind < 0) { this._selectedRegRegions.getValue().splice(srr, 1); }
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
                ssg.push(ss.id);
            });
            // now update regressionRegions, regressionTypes if there are selectedStatisticGroups
            this._statGrpIdParams = ssg.length >= 0 ? ssg.join(',') : '';

            // params for regressionTypes
            const regTypeParams = '?regressionregions=' + this._regRegionIdParams + '&statisticgroups=' + this._statGrpIdParams;
            this.getRegionRegressionTypes(this._selectedRegion.getValue().id, regTypeParams).subscribe(
                rt => {
                    // format all reg type stuff
                    this.formatRegTypeStuff(rt);

                    // params for regressionRegions
                    const regRegionParams = '?statisticgroups=' + this._statGrpIdParams + '&regressiontypes=' + this._regTypeIdParams;
                    this.getRegionRegressionRegions(this._selectedRegion.getValue().id, regRegionParams).subscribe(
                        rr => {
                            // format all reg regions stuff
                            this.formatRegRegionStuff(rr);

                            // params for scenarios
                            const scenarioParams = '?regressionregions=' + this._regRegionIdParams + '&regressiontypes=' + this._regTypeIdParams + '&statisticgroups=' + this._statGrpIdParams + '&unitsystems=' + '2';
                            this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); // get scenarios
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
            const regTypeParams = '?regressionregions=' + this._regRegionIdParams;
            this.getRegionRegressionTypes(this._selectedRegion.getValue().id, regTypeParams).subscribe(
                rt => {
                    // format all reg type stuff
                    this.formatRegTypeStuff(rt);

                    // params for regressionRegions
                    const regRegionsParams = '?regressiontypes=' + this._regTypeIdParams;
                    this.getRegionRegressionRegions(this._selectedRegion.getValue().id, regRegionsParams).subscribe(
                        rr => {
                            // format all reg regions stuff
                            this.formatRegRegionStuff(rr);

                            // params for scenarios
                            const scenarioParams = '?regressiontypes=' + this._regTypeIdParams + '&regressionregions=' + this._regRegionIdParams + '&unitsystems=' + '2';
                            this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); // get scenarios
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
        if (this._selectedStatGroups !== undefined) {
            for (let si = this._selectedStatGroups.length; si--; ) {
                const SSind = sg
                    .map(function(eachsg) {
                        return eachsg.id;
                    })
                    .indexOf(this._selectedStatGroups[si].id);
                if (SSind < 0) { this._selectedStatGroups.splice(si, 1); }
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
                srt.push(rt.id);
            });
            // now update regressionRegions, regressionTypes if there are selectedStatisticGroups
            this._regTypeIdParams = srt.length >= 0 ? srt.join(',') : '';
            const statGrpParams = '?regressionregions=' + this._regRegionIdParams + '&regressiontypes=' + this._regTypeIdParams;
            this.getRegionStatisticGrps(this._selectedRegion.getValue().id, statGrpParams).subscribe(
                sg => {
                    this.formatStatisticGrpStuff(sg);

                    // params for regRegions
                    const regRegionParams = '?statisticgroups=' + this._statGrpIdParams + '&regressiontypes=' + this._regTypeIdParams;
                    this.getRegionRegressionRegions(this._selectedRegion.getValue().id, regRegionParams).subscribe(
                        rr => {
                            this.formatRegRegionStuff(rr);

                            // params for scenarios
                            const scenarioParams = '?regressionregions=' + this._regRegionIdParams + '&regressiontypes=' + this._regTypeIdParams + '&statisticgroups=' + this._statGrpIdParams + '&unitsystems=' + '2';
                            this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); // get scenarios
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
            const regTypeParams = '?regressionregions=' + this._regRegionIdParams;
            this.getRegionStatisticGrps(this._selectedRegion.getValue().id, regTypeParams).subscribe(
                sg => {
                    this.formatStatisticGrpStuff(sg);

                    // params for reg regions
                    const regRegionsParams = '?statisticgroups=' + this._statGrpIdParams;
                    this.getRegionRegressionRegions(this._selectedRegion.getValue().id, regRegionsParams).subscribe(
                        rr => {
                            this.formatRegRegionStuff(rr);

                            // params for scenarios
                            const scenarioParams = '?statisticgroups=' + this._statGrpIdParams + '&regressionregions=' + this._regRegionIdParams + '&unitsystems=' + '2';
                            this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); // get scenarios
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
        if (this._selectedRegressionTypes !== undefined) {
            for (let srt = this._selectedRegressionTypes.length; srt--; ) {
                const RTSind = rt
                    .map(function(eachrt) {
                        return eachrt.id;
                    })
                    .indexOf(this._selectedRegressionTypes[srt].id);
                if (RTSind < 0) { this._selectedRegressionTypes.splice(srt, 1); }
            }
            // repopulate param string comma sep IDs
            const regTypeIDarray: Array<number> = new Array<number>();
            this._selectedRegressionTypes.forEach(srt => {
                regTypeIDarray.push(srt.id); // pushing each ID into arrayof numbers to then join as comma sep string for parameters
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
        const scenarioParams = '?unitsystems=' + '2';
        this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); // get scenarios
    }
    // -+-+-+-+-+-+-+-+-+-+-+-+ http GETs -+-+-+-+-+-+-+-+-+-+-+-+

    // get unit types
    public getUnitTypes(params?: string) {
        let url = this.configSettings.unitsURL
        if (params) {
            url += params; 
        }
        return this._http
        .get(this.configSettings.nssBaseURL + url, { headers: this.jsonHeader })
        .map(res => <Array<Unittype>>res);
    }

    // get variable types
    public getVariableTypes(params?: string) {
        let url = this.configSettings.variablesURL
        if (params) {
            url += params; 
        }
        return this._http
            .get(this.configSettings.nssBaseURL + url, { headers: this.jsonHeader })
            .map(res => <Array<Variabletype>>res);
    }

    // get stations by station type
    public getStationsByType(id: number, params?: string) {
       if (params) {
           params
       }
        return this._http
            .get(this.configSettings.gageURL + this.configSettings.stationsURL + "?stationTypes=" + id + params)
    }

     // get stations by station type
     public getStationsByAgency(id: number, id2: number){
        return this._http
            .get(this.configSettings.gageURL + this.configSettings.stationsURL + "?stationTypes=" + id + "?agencies=" + id2)
    }

    // get regressionRegions by region
    private getRegionRegressionRegions(id: number, params?: string) {
        let url = this.configSettings.regRegionURL;
        if (params) {
            url += params; 
        }
        return this._http
            .get(this.configSettings.nssBaseURL + this.configSettings.regionURL + id + '/' + url, { headers: this.jsonHeader })
            .map(res => <Array<Regressionregion>>res);
    }

    // get regressiontypes by region
    private getRegionRegressionTypes(id: number, params?: string) {
        let url = this.configSettings.regTypeURL;
        if (params) {
            url += params; 
        }
        return this._http
            .get(this.configSettings.nssBaseURL + this.configSettings.regionURL + id + '/' + url, { headers: this.jsonHeader })
            .map(res => <Regressiontype[]>res);
    }

    // get statisticgroups by region
    private getRegionStatisticGrps(id: number, params?: string) {
        let url = this.configSettings.statisticGrpURL
        if (params) {
            url += params; 
        }
        return this._http
            .get(this.configSettings.nssBaseURL + this.configSettings.regionURL + id + '/' + url, { headers: this.jsonHeader })
            .map(res => <Statisticgroup[]>res);
    }

    // get scenarios by region
    private getRegionScenario(id: number, params?: string) {
        let url = this.configSettings.scenariosURL 
        if (params) {
            url += params; 
        }
        return this._http
            .get(this.configSettings.nssBaseURL + this.configSettings.regionURL + id + '/' + url, { headers: this.jsonHeader })
            .map(res => <Scenario[]>res)
            .subscribe(
                s => {
                    s.forEach(scen => {
                        // get citations
                        const i = scen.links[0].href.indexOf('?');
                        const param =  '?' + scen.links[0].href.substring(i + 1);
                        this.getCitations(param).subscribe(c => {
                            if (!(c.length === 1 && c[0] === null)) { scen.citations = c; }
                        });
                        // clear Parameter.'Value'
                        scen.regressionRegions.forEach(rr => {
                            rr.parameters.forEach(p => {
                                p.value = null;
                            });
                            if (rr.regressions) {
                                rr.regressions.forEach((r) => {
                                    if (!r.predictionInterval) {
                                        r.predictionInterval = {biasCorrectionFactor: null, student_T_Statistic: null, variance: null,
                                            xiRowVector: null, covarianceMatrix: null} as Predictioninterval;
                                    }
                                    r['equationMathJax'] = '`' + r.equation.replace(/_/g, ' \\_') + '`';
                                });
                            }
                        });
                    });
                    this._scenarioSubject.next(s);
                },
                error => this.handleError
            );
    }

    // calculate Scenarios (POST)
    postScenarios(id: number, s: Scenario[], searchArgs?: string) {
        const options = { headers: this.jsonHeader, observe: 'response' as 'response' };       
        return this._http
            .post(this.configSettings.nssBaseURL + this.configSettings.regionURL + id + '/scenarios/estimate/' + searchArgs, s, options)
            // .map(sResult => sResult.json())
            .subscribe(
                res => {
                    if (res.headers) { this.outputWimMessages(res); }
                    const sResult: any = res.body;
                    sResult.forEach(scen => {
                        if (scen.regressionRegions.length > 0) {
                            // get citations
                            const i = scen.links[0].href.indexOf('?');
                            const param = '?' + scen.links[0].href.substring(i + 1);
                            this.getCitations(param).subscribe(
                                c => {
                                    if (!(c.length === 1 && c[0] === null)) { scen.citations = c; }
                                },
                                error => {
                                    this._loaderService.hideFullPageLoad();
                                    if (error.headers) {this.outputWimMessages(error);
                                    } else { this.handleError(error); }
                                }
                            );
                        }
                    });
                    this._scenarioSubject.next(sResult);
                },
                error => {
                    this._loaderService.hideFullPageLoad();
                    if (error.headers) {this.outputWimMessages(error);
                    } else { this.handleError(error); }
                }
            );
    }


    private getCitations(params?: string) {  
        let url = this.configSettings.citationURL;
        if (params) {
            url += params; 
        }
        return this._http
            .get(this.configSettings.nssBaseURL + url, { headers: this.jsonHeader })
            .map(cit => <Citation[]>cit)
            .catch(this.handleError);
    }

    public handleError(error: Response | any) {
        //if (error._body !== '') {error._body = JSON.parse(error._body); }
        return Observable.throw(error);
    }

    public outputWimMessages(res) {
        this._toasterService.clear();
        const wimMessages = JSON.parse(res.headers.get('x-usgswim-messages'));
        const existingMsgs = [];
        if (wimMessages) {
            for (const key of Object.keys(wimMessages)) {
                for (const item of wimMessages[key]) {
                    // skip duplicates and counts
                    if (item.indexOf('Count:') === -1 && existingMsgs.indexOf(item) == -1) {
                        existingMsgs.push(item);
                        this._toasterService.pop(key, key.charAt(0).toUpperCase() + key.slice(1), item);
                    }
                }
            }
            return true;
        }
        return false;
    }
    
    readFileContent(file: File) {
        let fileReader: FileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        return Observable.create(observer => {
          fileReader.onloadend = () => {
            observer.next(fileReader.result);
            observer.complete();
          };
        });
    }
}
