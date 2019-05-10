import { Intervalbound } from './intervalBound';

export interface Expected {
    value: number;
    parameters: object;
    intervalBounds: Intervalbound[];
}
