// ------------------------------------------------------------------------------
// ----- config.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: interface for the externally referenced config file holding nssBaseURL

export interface Config {
    agenciesURL: string;
    nssBaseURL: string;
    gageStatsBaseURL: string;
    citationURL: string;
    errorsURL: string;
    loginURL: string;
    managersURL: string;
    regionURL: string;
    regRegionURL: string;
    regTypeURL: string;
    rolesURL: string;
    scenariosURL: string;
    stationsURL: string;
    stationTypeURL: string;
    statisticGrpURL: string;
    unitsURL: string;
    unitSystemsURL: string;
    usersURL: string;
    variablesURL: string;
    statusURL: string;
    loginShow: boolean;
    showGageStats: boolean;
}
