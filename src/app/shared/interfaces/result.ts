import { Unittype} from './unittype';
import { Error } from './error';
import { Intervalbound} from './intervalbound';

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
