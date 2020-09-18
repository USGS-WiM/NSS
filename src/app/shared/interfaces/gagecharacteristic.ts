import { Citation } from './citation';
import { Unittype } from './unitType';
import { Variabletype } from './variabletype';

export interface GageCharacteristic {
    name?: string;
    id: number;
    stationID: number;
    variableTypeID: number;
    unitTypeID: number;
    value: number;
    units: string;
    comments: string;
    citationID: number;
    citation: Citation;
    unitType: Unittype;
    variableType: Variabletype;
}
