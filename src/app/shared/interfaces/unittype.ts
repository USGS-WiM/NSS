export interface Unittype {
    id: number;
    name: string;
    abbreviation: string;
    unitSystemTypeID: number;
    isEditing?: boolean;
    unit?: string; // for parameter units
    abbr?: string; // for paramter units
}
