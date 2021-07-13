import { Error } from './error';
import { Unittype } from './unittype';
import { Predictioninterval } from './predictioninterval';

export interface Regressiontype {
    id: number;
    name: string;
    code: string;
    description: string;
    isEditing?: boolean;
    errors?: Array<Error>;
    unit?: Unittype[];
    equation?: string;
    equivalentYears?: number;
    predictionInterval?: Predictioninterval;
}
