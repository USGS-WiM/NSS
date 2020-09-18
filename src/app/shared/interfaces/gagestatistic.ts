import { Citation } from './citation';
import { Unittype } from './unitType';
import { Regressiontype } from './regressiontype';

export interface GageStatistic {
    //name: string;
    //units: string;
    id: number;
    statisticGroupTypeID: number;
    regressionTypeID: number;
    stationID: number;
    value: string;
    unitTypeID: number;
    comments: string;
    isPreferred: boolean;
    yearsofRecord: number;
    citationID: number;
    statisticErrors: Array<any>;
    citation: Citation;
    unitType: Unittype;
    regressionType: Regressiontype;
}
