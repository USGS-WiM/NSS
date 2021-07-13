import { Intervalbound } from './intervalbound';

export interface Expected {
    value: number;
    parameters: object;
    intervalBounds: Intervalbound[];
}
