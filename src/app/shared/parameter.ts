import {IUnitType} from './unitType';
import {ILimit } from './limit';

export interface IParameter {
    ID: number;
    Name: string;
    Description: string;
    Code: string;
    UnitType: IUnitType;
    Value: number;
    Limits: ILimit;
    OutOfRange?: boolean;
    missingVal?: boolean;
    seeDescription?: boolean;
}
