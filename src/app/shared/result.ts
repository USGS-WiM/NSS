import { Unittype} from '../shared/unitType';
import { Error } from '../shared/error';
import { Intervalbound} from '../shared/intervalBound';

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
