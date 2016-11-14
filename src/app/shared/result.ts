import { IUnitType} from '../shared/unitType';
import { IError } from '../shared/error';
import { IIntervalBound} from '../shared/intervalBound';

export interface IResult {
    Description: string;
    Equation: string;
    EquivalentYears: number;
    Name: string;
    Value: number;
    code: string;
    Errors: IError[];
    IntervalBounds: IIntervalBound;
    Unit: IUnitType;
}