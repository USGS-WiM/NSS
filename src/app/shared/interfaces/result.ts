import { Unittype} from './unitType';
import { Error } from './error';
import { Intervalbound} from './intervalBound';

export interface Result {
    description: string;
    equation: string;
    equivalentYears: number;
    name: string;
    value: number;
    code: string;
    errors: Error[];
    intervalBounds: Intervalbound;
    unit: Unittype;
}
