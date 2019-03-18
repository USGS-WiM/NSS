import {Link} from './link';
import {Citation} from './citation';
import { Scenarioregressionregion} from './scenarioRegressionRegion';

export interface Scenario {
    statisticGroupID: number;
    statisticGroupName: string;
    regressionRegions: Scenarioregressionregion[];
    links: Link[];
    citations?: Citation[];
    regNames: string;
}
