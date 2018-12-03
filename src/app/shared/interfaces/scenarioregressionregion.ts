import {Link} from './link';
import {Parameter} from './parameter';
import {Result} from './result';

export interface Scenarioregressionregion {
    Links: Link[];
    ID: number;   
    Code: string;
    Name: string;
    Parameters: Parameter[];
    Results?: Result[];
    PercentWeight?: number;
}
