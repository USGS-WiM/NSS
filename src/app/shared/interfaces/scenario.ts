import {Link} from './link';
import {Citation} from './citation';
import { Scenarioregressionregion} from './scenarioRegressionRegion';

export interface Scenario {
    StatisticGroupID: number;
    StatisticGroupName: string;
    RegressionRegions: Scenarioregressionregion[];
    Links: Link[];
    Citations?: Citation[];    
}
