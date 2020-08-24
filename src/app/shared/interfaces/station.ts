import { Citation } from './citation';
import { GageCharacteristic } from './gagecharacteristic';
import { GageStatistic } from './gagestatistic';

export interface Station {
    agencyID: string;
    code: string;
    id: number;
    location: Location;
    name: string;
    stationTypeID: string;
    isRegulated: boolean;
    characteristics: Array<GageCharacteristic>;
    statistics: Array<GageStatistic>;
    citations: Array<Citation>;
}
