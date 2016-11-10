import { IRegressionRegion } from './regressionRegion';
import {ILink} from './link';
import {ICitation} from './citation';

export interface IScenario {
    StatisticGroupID: number;
    StatisticGroupName: string;
    RegressionRegions: IRegressionRegion[];
    Links: ILink[];
    Citations?: ICitation[];
}

