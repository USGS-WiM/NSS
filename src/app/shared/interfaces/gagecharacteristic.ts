import { Citation } from './citation';
import { Unittype } from './unitType';
import { Variabletype } from './variabletype';

export interface GageCharacteristic {
    name: string;
    id: number;
    value: string;
    units: string;
    comments: string;
    citationID: number;
    citation: Citation;
    unitType: Unittype;
    variableType: Variabletype;
}
