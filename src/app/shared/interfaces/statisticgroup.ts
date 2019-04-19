import {Link} from './link';

export interface Statisticgroup {
    Links: Link[];
    id: number;
    name: string;
    code: string;
    isEditing?: boolean;
}
