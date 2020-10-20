export interface GageStatsSearchFilter {
    keyword: any,
    region: any,
    stationType: any,
    agency: any,
    statisticGroup: any,
    regressionType: any,
    variableType: any,
    page: any,
    pageCount: any
}

export class GageStatsFilterClass implements GageStatsSearchFilter {
    keyword: any = "";
    region: any = [];
    stationType: any = [];
    agency: any = [];
    statisticGroup: any = [];
    regressionType: any = [];
    variableType: any = [];
    page: any = 1;
    pageCount: any = 50;
}