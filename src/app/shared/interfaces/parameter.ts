import {Limit } from './limit';
import { Unittype } from './unitType';

export interface Parameter {
    id: number;
    name: string;
    description: string;
    code: string;
    unitType: Unittype;
    value: number;
    limits: Limit;
    comments: string;
    rrid?: number;
    limitArray?: Array<Limit>;
    outOfRange?: boolean;
    missingVal?: boolean;
    seeDescription?: boolean;
    isEditing?: boolean;
}
