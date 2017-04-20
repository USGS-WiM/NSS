import {Link} from './link';
import {Parameter} from './parameter';
import {Result} from './result';

export interface Scenarioregressionregion {
    Links: Link[];
    ID: number;   
    Name: string;
    Parameters: Parameter[];
    Results?: Result[];
    PercentWeight?: number;
}
