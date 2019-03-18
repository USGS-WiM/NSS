import {Link} from './link';

export interface Statisticgroup {
    Links: Link[];
    ID: number;
    id: number; //for multiselect
    Name: string;
    name: string; //for multiselect
    code: string;
}
