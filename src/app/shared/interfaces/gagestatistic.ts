import { Citation } from './citation';
import { Unittype } from './unitType';
import { Regressiontype } from './regressiontype';

export interface GageStatistic {
    name: string;
    value: string;
    units: string;
    citationID: number;
    citation: Citation;
    comments: string;
    isPreferred: boolean;
    regressionTypeID: number;
    statisticErrors: Array<any>;
    unitType: Unittype;
    regressionType: Regressiontype;
    statisticGroupTypeID: number;
    unitTypeID: number;
    yearsofRecord: number;
}
