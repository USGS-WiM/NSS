import { Citation } from './citation';
import { GageCharacteristic } from './gagecharacteristic';
import { GageStatistic } from './gagestatistic';

export interface Station {
    agencyID: string;
    code: string;
    id: number;
    location: Location;
    name: string;
    isRegulated: boolean;
    stationTypeID: string;
    characteristics: Array<GageCharacteristic>;
    statistics: Array<GageStatistic>;
    citations: Array<Citation>;
    regionID: string;
}
