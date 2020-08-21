import { Citation } from './citation';

export interface GageCharacteristic {
    name: string;
    value: string;
    units: string;
    comments: string;
    citationID: number;
    citation: Citation;
}
