import {Link} from './link';
import { Parameter } from './parameter';
import { Result } from './result';
import { Regressiontype } from './regressiontype';

export interface Regressionregion {
    Links: Link[];
    id: number;
    name: string;
    code: string;
    description: string;
    citationID?: number;
    locationID?: number;
    location?: [];
    isEditing?: boolean;
    parameters?: Array<Parameter>; // for scenario rrs
    extensions?: [];
    results?: Result[];
    percentWeight?: number;
    regressions?: Array<Regressiontype>;
}
