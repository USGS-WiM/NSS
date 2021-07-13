import {Link} from './link';
import {Citation} from './citation';
import { Regressionregion } from './regressionregion';

export interface Scenario {
    statisticGroupID: number;
    statisticGroupName: string;
    regressionRegions: Regressionregion[];
    links: Link[];
    citations?: Citation[];
    regNames: string;
    isEditing?: boolean;
}
