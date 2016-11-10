import {ILink} from './link';

export interface IStatisticGroup {
    Links: ILink[];
    ID: number;
    id: number; //for multiselect
    Name: string;
    name: string; //for multiselect
    Code: string;
}