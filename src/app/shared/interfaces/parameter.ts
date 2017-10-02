import {Unittype} from './unitType';
import {Limit } from './limit';

export interface Parameter {
    ID: number;
    Name: string;
    Description: string;
    Code: string;
    UnitType: Unittype;
    Value: number;
    Limits: Limit;
    LimitArray?:Array<Limit>;
    OutOfRange?: boolean;
    missingVal?: boolean;
    seeDescription?: boolean;   
}
