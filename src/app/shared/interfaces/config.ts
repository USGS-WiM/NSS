// ------------------------------------------------------------------------------
// ----- config.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: interface for the externally referenced config file holding baseUrl

export interface Config {
    baseURL: string;
    regionURL: string;
    regRegionURL: string;
    citationURL: string;
    statisticGrpURL: string;
}