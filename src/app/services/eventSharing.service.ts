import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { IRegressionRegion } from '../shared/regressionRegion';
import {IStatisticGroup} from '../shared/statisticgroup';
import {IRegressionType} from '../shared/regressionType';
import { IScenario } from '../shared/scenario';

@Injectable()
export class SharedService {
    // -+-+-+-+-+-+-+-+-+ properties -+-+-+-+-+-+-+-+-+
    //regionBinding/emitter
    private regionName: string = '';
    private regBind: Subject<string> = new Subject<string>();
    //regRegionBinding/emitter
    private regressionRegions: IRegressionRegion[];
    private regRegBind: Subject<IRegressionRegion[]> = new Subject<IRegressionRegion[]>();

    private statisticGroups: IStatisticGroup[];
    private statGrpBind: Subject<IStatisticGroup[]> = new Subject<IStatisticGroup[]>();

    private regressionTypes: IRegressionType[];
    private regTypeBind: Subject<IRegressionType[]> = new Subject<IRegressionType[]>();
    
    private scenarios: IScenario[];
    private scenarioBind: Subject<IScenario[]> = new Subject<IScenario[]>();

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
}