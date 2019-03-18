// ------------------------------------------------------------------------------
// ----- config.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: interface for the externally referenced config file holding baseUrl

export interface Config {
    baseURL: string;
    citationURL: string;
    errorsURL: string;
    loginURL: string;
    managersURL: string;
    regionURL: string;
    regRegionURL: string;
    regTypeURL: string;
    rolesURL: string;
    scenariosURL: string;
    statisticGrpURL: string;
    unitsURL: string;
    unitSystemsURL: string;
    variablesURL: string;
}
