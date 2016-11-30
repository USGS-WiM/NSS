import { Injectable }           from '@angular/core';
import { Subject }              from 'rxjs/Subject';
import { Observable }           from 'rxjs/Observable';

import { IRegressionRegion }    from '../shared/regressionRegion';
import {IStatisticGroup}        from '../shared/statisticgroup';
import {IRegressionType}        from '../shared/regressionType';
import { IScenario }            from '../shared/scenario';
import {IHydro}                 from '../shared/hydroChart';

@Injectable()
export class ChartService {
    // -+-+-+-+-+-+-+-+-+ hydrograph  getter/setter  -+-+-+-+-+-+-+-+-+
    private hydrograph: IHydro;
    private hydroBind: Subject<IHydro> = new Subject<IHydro>();
    setHydrograph(h: IHydro) {
        this.hydrograph = h;
        this.hydroBind.next(h);
    }
    getHydrograph(): Observable<IHydro> {
        return this.hydroBind.asObservable();
    }

    // -+-+-+-+-+-+-+-+-+ hydrograph  getter/setter  -+-+-+-+-+-+-+-+-+
    private frequency: string;
    private freqBind: Subject<string> = new Subject<string>();
    setFrequency() {
        this.frequency = "newOne";
        this.freqBind.next("newOne");
    }
    getFrequency(): Observable<string> {
        return this.freqBind.asObservable();
    }
}