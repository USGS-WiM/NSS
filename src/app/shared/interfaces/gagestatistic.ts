import { Citation } from './citation';

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
    statisticGroupTypeID: number;
    unitTypeID: number;
    yearsofRecord: number;
}
