import { Citation } from './citation';
import { Unittype } from './unitType';
import { Regressiontype } from './regressiontype';
import { Statisticgroup } from './statisticgroup';

export interface GageStatistic {
    id?: number;
    statisticGroupTypeID: number;
    regressionTypeID: number;
    stationID: number;
    value: string;
    unitTypeID: number;
    comments: string;
    isPreferred: boolean;
    yearsofRecord: number;
    statisticGroupType?: Statisticgroup;
    citationID?: number;
    statisticErrors?: Array<any>;
    citation?: Citation;
    unitType?: Unittype;
    regressionType?: Regressiontype;
    statisticGroupName?: string;
    predictionInterval?: Object;
    isEditing?
}
