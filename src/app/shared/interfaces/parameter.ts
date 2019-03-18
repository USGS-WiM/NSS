import {Unittype} from './unitType';
import {Limit } from './limit';

export interface Parameter {
    id: number;
    name: string;
    description: string;
    code: string;
    unitType: Unittype;
    value: number;
    limits: Limit;
    limitArray?:Array<Limit>;
    outOfRange?: boolean;
    missingVal?: boolean;
    seeDescription?: boolean;   
}
