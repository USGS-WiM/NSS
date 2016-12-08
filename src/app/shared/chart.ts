export interface IChart {
    title: ItitleParts;
    series: Array<IseriesParts>;
    xAxis: subTitlePart;
    yAxis: subTitlePart;
}
class ItitleParts{
    public text: string;
}
class IseriesParts {
    public data: Array<number>[];
}
class subTitlePart {
    public title: ItitleParts;
}
