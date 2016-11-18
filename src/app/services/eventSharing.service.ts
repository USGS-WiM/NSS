import { Injectable }           from '@angular/core';
import { Subject }              from 'rxjs/Subject';
import { Observable }           from 'rxjs/Observable';

import {Toast}                  from 'angular2-toaster/lib/toast';
import { IRegressionRegion }    from '../shared/regressionRegion';
import {IStatisticGroup}        from '../shared/statisticgroup';
import {IRegressionType}        from '../shared/regressionType';
import { IScenario }            from '../shared/scenario';
import {IHydro}                 from '../shared/hydroChart';


@Injectable()
export class SharedService {
    // -+-+-+-+-+-+-+-+-+ properties -+-+-+-+-+-+-+-+-+
    //regionBinding/emitter
    private regionName: string = '';
    private regBind: Subject<string> = new Subject<string>();
    //regRegionBinding/emitter
    private regressionRegions: IRegressionRegion[];
    private regRegBind: Subject<IRegressionRegion[]> = new Subject<IRegressionRegion[]>();
    //StatGrpBinding/emitter
    private statisticGroups: IStatisticGroup[];
    private statGrpBind: Subject<IStatisticGroup[]> = new Subject<IStatisticGroup[]>();
    //regTypeBinding/emitter
    private regressionTypes: IRegressionType[];
    private regTypeBind: Subject<IRegressionType[]> = new Subject<IRegressionType[]>();
    //scenarioBinding/emitter
    private scenarios: IScenario[];
    private scenarioBind: Subject<IScenario[]> = new Subject<IScenario[]>();

    private toast: Toast;
    private toastBind: Subject<Toast> = new Subject<Toast>();

    private hydrograph: IHydro;
    private hydroBind: Subject<IHydro> = new Subject<IHydro>();

    private frequency: string;
    private freqBind: Subject<string> = new Subject<string>();

    //private freqPlot: IHydro;
    //private hydroBind: Subject<IHydro> = new Subject<IHydro>();

    // -+-+-+-+-+-+-+-+-+ region getter/setter -+-+-+-+-+-+-+-+-+
    setRegion(reg: string) {
        this.regionName = reg;
        this.regBind.next(reg);
    }
    getRegionName(): Observable<string> {
        return this.regBind.asObservable();
    }

    // -+-+-+-+-+-+-+-+-+ regressionRegion  getter/setter  -+-+-+-+-+-+-+-+-+
    setRegRegions(regRegions: IRegressionRegion[]) {
        this.regressionRegions = regRegions;
        this.regRegBind.next(regRegions);
    }
    getRegRegions(): Observable<IRegressionRegion[]> {
        return this.regRegBind.asObservable();
    }
    clearRegressionRegions() {
        this.regRegBind.next([]);
    }

    // -+-+-+-+-+-+-+-+-+ statisticGroups  getter/setter  -+-+-+-+-+-+-+-+-+
    setStatisticGroups(statGrps: IStatisticGroup[]) {
        this.statisticGroups = statGrps;
        this.statGrpBind.next(statGrps);
    }
    getStatisticGroups(): Observable<IStatisticGroup[]> {
        return this.statGrpBind.asObservable();
    }
    clearStatisticGroups() {
        this.statGrpBind.next([]);
    }

    // -+-+-+-+-+-+-+-+-+ regressionType  getter/setter  -+-+-+-+-+-+-+-+-+
    setRegTypes(regTypes: IRegressionType[]) {
        this.regressionTypes = regTypes;
        this.regTypeBind.next(regTypes);
    }
    getRegTypes(): Observable<IRegressionType[]> {
        return this.regTypeBind.asObservable();
    }
    clearRegressionTypes() {
        this.regTypeBind.next([]);
    }

    // -+-+-+-+-+-+-+-+-+ citation  getter/setter  -+-+-+-+-+-+-+-+-+
    setScenarios(s: IScenario[]) {
        this.scenarios = s;
        this.scenarioBind.next(s);
    }
    getScenarios(): Observable<IScenario[]> {
        return this.scenarioBind.asObservable();
    }

    // -+-+-+-+-+-+-+-+-+ toaster  getter/setter  -+-+-+-+-+-+-+-+-+
    showToast(t: Toast) {
        this.toast = t;
        this.toastBind.next(t);
    }
    getToast(): Observable<Toast> {
        return this.toastBind.asObservable();
    }

    // -+-+-+-+-+-+-+-+-+ hydrograph  getter/setter  -+-+-+-+-+-+-+-+-+
    setHydrograph(h: IHydro) {
        this.hydrograph = h;
        this.hydroBind.next(h);
    }
    getHydrograph(): Observable<IHydro> {
        return this.hydroBind.asObservable();
    }

    // -+-+-+-+-+-+-+-+-+ hydrograph  getter/setter  -+-+-+-+-+-+-+-+-+
    setFrequency() {
        this.frequency = "newOne";
        this.freqBind.next("newOne");
    }
    getFrequency(): Observable<string> {
        return this.freqBind.asObservable();
    }
}