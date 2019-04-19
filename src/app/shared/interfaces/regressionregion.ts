import {Link} from './link';
import { Parameter } from './parameter';
import { Result } from './result';

export interface Regressionregion {
    Links: Link[];
    id: number;
    name: string;
    code: string;
    citationID?: number;
    isEditing?: boolean;
    parameters?: Array<Parameter>; // for scenario rrs
    extensions?: [];
    results?: Result[];
    percentWeight?: number;
}
