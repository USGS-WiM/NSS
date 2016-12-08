import {ILink} from './link';

export interface IRegressionRegion {
    Links: ILink[];
    ID: number;
    id: number; //for multiselect
    Name: string;
    name: string; //for multiselect
    Code: string;
    CitationID: number;
}