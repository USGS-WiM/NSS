import {Link} from './link';
import {Parameter} from './parameter';
import {Result} from './result';

export interface Scenarioregressionregion {
    links: Link[];
    id: number;
    code: string;
    name: string;
    parameters: Parameter[];
    results?: Result[];
    percentWeight?: number;
}
