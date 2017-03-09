export interface IChart {
    exporting: any;
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
    public style?: any;
}
class IseriesParts {
    public data: Array<number>[];
    public name: string;
    public states: any;
}
class subTitlePart {
    public title: ItitleParts;
    public startOnTick: boolean;
    public endOnTick: boolean;
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
