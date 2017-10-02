import { Unittype} from './unitType';
import { Error } from './error';
import { Intervalbound} from './intervalBound';

export interface Result {
    Description: string;
    Equation: string;
    EquivalentYears: number;
    Name: string;
    Value: number;
    code: string;
    Errors: Error[];
    IntervalBounds: Intervalbound;
    Unit: Unittype;
}
