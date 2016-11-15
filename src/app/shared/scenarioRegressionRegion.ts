import {ILink} from './link';
import {IParameter} from './parameter';
import {IResult} from './result';

export interface IScenarioRegressionRegion {
    Links: ILink[];
    ID: number;   
    Name: string;
    Parameters: IParameter[];
    Results?: IResult[];
    PercentWeight?: number;
}