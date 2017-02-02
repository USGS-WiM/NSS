export interface IChart {
    chart: IchartParts;
    title: ItitleParts;
    series: Array<IseriesParts>;
    tooltip: any;
    xAxis: subTitlePart;
    yAxis: subTitlePart;
}
class IchartParts {
    public type: string;
    public zoomType: string;
    //public panning: boolean;
    //public panKey: string;
}
class ItitleParts{
    public text: string;
}
class IseriesParts {
    public data: Array<number>[];
}
class subTitlePart {
    public title: ItitleParts;
    public gridLineWidth: number;
    public minorGridLineWidth: number;
    public minorTickWidth: number;
    public tickWidth: number;
    public minorTickInterval: string;
    public minorTickLength: number;
    public tickPosition: string;
    public minorTickPosition: string;
    public tickColor: string;
    public minorTickColor: string;
}
