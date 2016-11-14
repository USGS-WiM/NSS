import { IRegressionRegion } from './regressionRegion';
import {ILink} from './link';
import {ICitation} from './citation';
import { IScenarioRegressionRegion} from './scenarioRegressionRegion';

export interface IScenario {
    StatisticGroupID: number;
    StatisticGroupName: string;
    RegressionRegions: IScenarioRegressionRegion[];
    Links: ILink[];
    Citations?: ICitation[];     
}

