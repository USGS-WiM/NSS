import { Component, OnInit, Inject, ViewChildren, ViewContainerRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Region } from '../shared/interfaces/region';
import { Regressionregion } from '../shared/interfaces/regressionregion';
import { Regressiontype } from '../shared/interfaces/regressiontype';
import { Scenarioregressionregion } from '../shared/interfaces/scenarioregressionregion';
import { Statisticgroup } from '../shared/interfaces/statisticgroup';
import { Scenario } from '../shared/interfaces/scenario';
import { Parameter } from '../shared/interfaces/parameter';
import { Unittype } from '../shared/interfaces/unittype';
import { Limit } from '../shared/interfaces/limit';
import { Equationresults } from '../shared/interfaces/equationresults';
import { Hydrochart } from '../shared/interfaces/hydrochart';
import { Freqchart } from '../shared/interfaces/freqchart';
import { Chart } from '../shared/interfaces/chart';
import { NSSService } from '../app.service';
import { ToasterContainerComponent, ToasterService } from 'angular2-toaster/angular2-toaster';
import { Toast } from 'angular2-toaster/src/toast';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import * as Highcharts from 'highcharts';
import { LoaderService } from '../shared/components/loader.service';
declare var L: any;
import * as esri from 'esri-leaflet';

declare var MathJax: {
    Hub: { Queue: (param: Object[]) => void; }
}

@Component({
    selector: 'wim-mainview',
    templateUrl: './mainview.component.html',
    styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
    @ViewChildren('inputsTable', { read: ViewContainerRef }) inputTable;
    @ViewChildren('resultsTable', { read: ViewContainerRef }) resultTable;

    public title: string;
    public resultsBack: boolean;                //flag that swaps content on mainpage from scenarios w/o results to those with results
    public equationResults: Equationresults[];  //used in Appendix
    public showWeights: boolean;                //if more than 1 regRegion, then show input for weighted
    public timestamp: Date;                     //display a time stamp when they first get here.
    public toast: Toast;                        //notification when values are required
    public selectedRegion: Region;
    public selectedRegressionRegion: Array<Regressionregion>;    
    public get selectedStatisticGrp(): Array<Statisticgroup> { return this._nssService.selectedStatGroups; };
    public get selectedRegType(): Array<Regressiontype> { return this._nssService.selectedRegressionTypes; };
    public scenarios: Scenario[];
    // -+-+-+-+ Chart parts -+-+-+-+-+-+
    public hydrographs: Array<Hydrochart>;              //holds all the IHydros so each chart has their own
    public hydroChartsArray: Chart[];              //holds all hydro charts that are desired.
    public hChartOptions: Chart;                   //hydro chart
    public hChartXAxisValues: string[];             //holds Recurrence Interval dropdown values for chart
    //public hChartYAxisText: string;               //chart y axis
    public fChartOptions: any;                     //frequency chart
    public fChartValues: Array<number>[];           //frequency data
    public showCharts_btn: boolean;                 //toggle button boolean
    public showChartBtn_txt: string;                //string "show" / "hide"
    public selectedPlot: string;                    //which plot are they asking for ("Hydrograph" or "Frequency Plot")
    public charts: Array<any>;                      //chart instance for hydroChartsArray
    public freqChart: any;                           //chart instance for frequency plot
    public uniqueParameters: Array<Parameter>;       //holds unique list of parameters
    public uniqueUnitTypes: Array<Unittype>;         //holds unique list of unit types for parameters to show in appendix
    public multipleRegRegions: boolean;              //if multiple regRegions, set this to true
    private DIMLESS_ARRAY = [
        [0.25, 0.12], [0.3, 0.16], [0.35, 0.21], [0.4, 0.26], [0.45, 0.33], [0.5, 0.4], [0.55, 0.49], [0.6, 0.58], [0.65, 0.67], [0.7, 0.76],
        [0.75, 0.84], [0.8, 0.9], [0.85, 0.95], [0.9, 0.98], [0.95, 1.00], [1.00, 0.99], [1.05, 0.96], [1.1, 0.92], [1.15, 0.86], [1.2, 0.8],
        [1.25, 0.74], [1.3, 0.68], [1.35, 0.62], [1.4, 0.56], [1.45, 0.51], [1.5, 0.47], [1.55, 0.43], [1.6, 0.39], [1.65, 0.36], [1.7, 0.33],
        [1.75, 0.3], [1.8, 0.28], [1.85, 0.26], [1.9, 0.24], [1.95, 0.22], [2.0, 0.2], [2.05, 0.19], [2.1, 0.17], [2.15, 0.16], [2.2, 0.15],
        [2.25, 0.14], [2.3, 0.13], [2.35, 0.12], [2.4, 0.11]];
    public frequencyPlotChart: Freqchart;            //holder of the freq plot properties ()
    public showExtraFREQSettings: boolean;            //showhide flag for additional settings on frequency plot
    public resultsErrorLength: number;
    public appendixEquationsforExport: Array<string>;
    private activeLayerID: number;

    constructor(private _nssService: NSSService, 
        private _loaderService:LoaderService, private _toasterService: ToasterService,
        @Inject(DOCUMENT) private _document: any, private _pageScrollService: PageScrollService) { }

    ngOnInit() {
        this.title = "NSS Report";
        this.timestamp = new Date();
        this.charts = []; //instantiate
        this.hydroChartsArray = []; //instantiate 
        this.hydrographs = []; //instantiate
        this.resultsBack = false;
        this.multipleRegRegions = false;
        this.resultsErrorLength = 0; //used for colspan on Errors <th>
        this.selectedRegressionRegion = [];
        // this is based on a behaviorSubject, so it gets an initial notification of [].
        this._nssService.selectedRegRegions.subscribe((regRegions: Array<Regressionregion>) =>{
            this.selectedRegressionRegion = regRegions;
            let queryObj: object = {}; // needed as the object needed in .setLayerDefs()
            let queryString: string = "";
            // if we have regRegions here, update map, else clear it
            if (regRegions.length > 0) {                
                // build query string
                this.selectedRegressionRegion.forEach(rr => {
                    queryString += "GRIDCODE LIKE '%" + rr.Code.toLowerCase() + "%' OR ";
                });
                
            }
            if (queryString != "")  {                
                queryString = queryString.slice(0, -4); // remove the last ')R'
                
                queryObj = { [this.activeLayerID]: queryString }; 
            } else {
                // clear the layerDefs14.
                queryObj = { [this.activeLayerID]: '1=1' };  
            } 
        });
        //subscribe to scenarios
        this._nssService.scenarios.subscribe((s: Array<Scenario>) => {
            this.scenarios = s; this.resultsBack = false; this.equationResults = []; this.uniqueParameters = []; this.uniqueUnitTypes = [];
            let regID: string = ''; this.multipleRegRegions = false;
            this.scenarios.forEach((s) => {
                this.appendixEquationsforExport = [];
                //show weight inputs if more than 1 regression region chosen
                this.showWeights = s.RegressionRegions.length > 1 ? true : false;
                if (s.RegressionRegions.length > 1) this.multipleRegRegions = true;
                else this.multipleRegRegions = false;

                s.RegressionRegions.forEach((rr, index) => {
                    regID = "(RG_ID: " + rr.ID + ")"; //need to show the regID for each limit so they know which one they are out of range on
                    if (rr.Results) {
                        if (rr.Results[0].Errors) { this.resultsErrorLength = rr.Results[0].Errors.length; };
                        let eqResult: Equationresults = { Name: "", Formulas: [] };
                        let equationString: string = '';
                        if (index < 1) {//first time thru
                            equationString = rr.Name !== 'Area-Averaged' ? rr.Name + '\r\n' : '';
                        } else {
                            let name = rr.Name !== 'Area-Averaged' ? rr.Name + '\r\n' : '';
                            equationString = '\r\n' + name;
                        };
                        //only care if average result
                        if (rr.ID > 0) eqResult.Name = rr.Name;
                        this.resultsBack = true;
                        rr.Results.forEach((R) => {
                            if (eqResult.Name != "") {
                                eqResult.Formulas.push({ "Code": R.code, "Equation": this.buildEquation(rr.Parameters, R.Equation) });
                                equationString += R.code + '= ,' + R.Equation + '\r\n';
                            }
                        });
                        if (rr.ID > 0) this.equationResults.push(eqResult);
                        this.appendixEquationsforExport.push(equationString);//push each equation string in for use when exporting appendix table later
                        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "MathJax"]); //for the appendix of equations
                    } //end there's results
                    //populate uniqueParameters and uniqueUnitTypes
                    if (rr.ID > 0) {
                        rr.Parameters.forEach((p) => {
                            //is this param code already in array list?                        
                            let pIndex = this.uniqueParameters.map(function (parame) { return parame.Code; }).indexOf(p.Code);
                            if (pIndex < 0) {
                                p.LimitArray = [];
                                if (p.Limits != undefined) {
                                    p.Limits.rrID = regID;
                                    p.LimitArray.push(p.Limits);
                                }
                                this.uniqueParameters.push(p);
                            } else {
                                //already in here. find the matching one and add it's limits to the LimitArray
                                if (p.Limits != undefined) p.Limits.rrID = regID;
                                this.uniqueParameters[pIndex].LimitArray.push(p.Limits);
                            }
                            //is this unitType already in the array list?                        
                            let uIndex = this.uniqueUnitTypes.map(function (unit) { return unit.Abbr; }).indexOf(p.UnitType.Abbr);
                            if (uIndex < 0) {
                                //not in there yet
                                this.uniqueUnitTypes.push(p.UnitType);
                            }
                        });
                    }
                }); // end s.regressionRegion.forEach
            });
        });
        //subscribe to getToast
        this._nssService.getToast().subscribe((t: Toast) => {
            this.toast = t;
            this._toasterService.pop(this.toast);
        });
        //subscribe to charts
        this._nssService.getChart().subscribe((c) => {
            if (c !== "") {
                //scroll down to the chart section
                let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this._document, '#chart');
                this._pageScrollService.start(pageScrollInstance);
            }
            if (c == "Hydrograph") {
                let H_areaAveraged: boolean = false;
                this.selectedPlot = "Hydrograph";
                let hydroG: Hydrochart;
                hydroG = {
                    recurrence: null, lagTime: null, showExtraSettings: false, axis: 'BottomX', type_BX: 'linear', type_LY: 'linear', lineWidth: 1, lineSymbol: 'circle',
                    majorTic_BX: true, majorGrid_BX: true, minorTic_BX: true, minorGrid_BX: true,
                    majorTic_LY: true, majorGrid_LY: true, minorTic_LY: true, minorGrid_LY: true,
                    colorPickerColor: '#7CB5EC', curveLabel: 'PK25', lineSymbolFillColor: '#7CB5EC', reverse_LY: false, reverse_BX: false, dataLabels: false
                };

                this.showChartBtn_txt = "Hide"; this.showCharts_btn = true;
                //get array of recurrences from result      
                let rec: number;
                this.scenarios.forEach((s) => {
                    if (s.RegressionRegions.length > 1) {
                        s.RegressionRegions.forEach((rr) => {
                            if (rr.Name == "Area-Averaged") {
                                H_areaAveraged = true; //area averaged, add title to chart stating
                                hydroG.curveLabel = "Area-Averaged";
                                this.hChartXAxisValues = [];
                                rr.Results.forEach((R) => {
                                    this.hChartXAxisValues.push(R.code);
                                });
                                //use constant array to populate chart [][]
                                rec = rr.Results.filter(r => r.code == this.hChartXAxisValues[0])[0].Value;
                            }
                        });
                    } else {
                        s.RegressionRegions.forEach((rr) => {
                            this.hChartXAxisValues = [];
                            rr.Results.forEach((R) => {
                                this.hChartXAxisValues.push(R.code);
                            });
                            //use constant array to populate chart [][]
                            rec = rr.Results.filter(r => r.code == this.hChartXAxisValues[0])[0].Value;
                        });
                    }
                });//end foreach scenario
                hydroG.recurrence = this.hChartXAxisValues[0]; //default to first one;
                hydroG.lagTime = 1; //default value to change later
                hydroG.title_BX = 'Time (hours)\nHydrograph for ' + hydroG.lagTime + '-yr interval\nNOTE: May not represent actual hydrograph';
                hydroG.title_LY = 'Discharge (cubic meters per second)';
                // http://api.highcharts.com/highcharts   , panning: true, panKey: 'shift'
                this.hChartOptions = {
                    exporting: {
                        chartOptions: { // specific options for the exported image
                            plotOptions: {
                                series: {
                                    dataLabels: {
                                        enabled: true
                                    }
                                }
                            }
                        },
                        fallbackToExportServer: false
                    },
                    chart: { type: 'line', zoomType: 'xy' },
                    title: { text: '' },
                    series: [{
                        data: this.DIMLESS_ARRAY.map(p => { return [p[0] * 1, this.sigFigures(p[1] * rec)] }),
                        name: H_areaAveraged ? 'PK25 (Area-weighted average)' : 'PK25',
                        states: {
                            hover: { enabled: false } //stops the line from getting thicker when mouse onto the chart
                        }
                    }],
                    tooltip: {
                        formatter: function () {
                            var s = '<b>(' + this.x + ', ' + this.y + ')</b>';
                            return s;
                        }
                    },
                    xAxis: {
                        title: {
                            text: 'Time (hours)<br/>Hydrograph for ' + hydroG.lagTime + '-yr interval<br/>NOTE: May not represent actual hydrograph',
                            //    style: { fontWeight: 'bold'}
                        },
                        startOnTick: true,
                        endOnTick: true,
                        gridLineWidth: 1, //major grid (0/1)
                        minorGridLineWidth: 1,   //minor grid (0/1)
                        tickWidth: 1, //major tic (0/1)
                        minorTickWidth: 1, //minor tic (0/1)

                        minorTickInterval: 'auto', //line 191-196 needed for above to be changed                       
                        minorTickLength: 5,
                        tickPosition: 'inside',
                        minorTickPosition: 'inside',
                        tickColor: '#000000',
                        minorTickColor: '#000000'
                    },
                    yAxis: {
                        title: { text: 'Discharge (cubic meters per second)' },
                        startOnTick: true,
                        endOnTick: true,
                        gridLineWidth: 1, //major grid (0/1)
                        minorGridLineWidth: 1,   //minor grid (0/1)                         
                        tickWidth: 1, //major tic (0/1)
                        minorTickWidth: 1, //minor tic (0/1)

                        minorTickInterval: 'auto', //line 205-210 needed for above to be changed                      
                        minorTickLength: 5,
                        tickPosition: 'inside',
                        minorTickPosition: 'inside',
                        tickColor: '#000000',
                        minorTickColor: '#000000'
                    }
                };
                this.hydroChartsArray.push(this.hChartOptions);
                this.hydrographs.push(hydroG);
            } else if (c == "Frequency Plot") {
                if (this.fChartValues == undefined) {
                    let F_areaAveraged: boolean = false;
                    this.fChartOptions = {};
                    //only come in here if there isn't already a frequency plot
                    this.frequencyPlotChart = {
                        Faxis: 'BottomX', type_BX: 'returnPeriod', type_LY: 'returnPeriod', title_LY: 'Peak Discharge, In cubic meters per second',
                        title_BX: 'Recurrence Interval, in years\nFlood Frequency Plot', lineWidth: 1, lineSymbol: 'circle',
                        majorTic_BX: true, majorGrid_BX: true, minorTic_BX: true, minorGrid_BX: true,
                        majorTic_LY: true, majorGrid_LY: true, minorTic_LY: false, minorGrid_LY: false,
                        colorPickerColor: '#7CB5EC', curveLabel: 'PK25', lineSymbolFillColor: '#7CB5EC', reverse_LY: false, reverse_BX: false, dataLabels: false
                    };
                    //get array of recurrences from result      
                    let freqDataArray: number[][];
                    freqDataArray = [];
                    this.scenarios.forEach((s) => {
                        if (s.RegressionRegions.length > 1) {
                            s.RegressionRegions.forEach((rr) => {
                                if (rr.Name == "Area-Averaged") {
                                    F_areaAveraged = true; //area averaged, add title to chart stating
                                    this.frequencyPlotChart.curveLabel = "PK25 (Area-weighted average)";
                                    rr.Results.forEach((R) => {
                                        let x: number = +R.Name.substring(0, R.Name.indexOf(" "));
                                        freqDataArray.push([x, this.sigFigures(R.Value)]);
                                    })
                                }
                            });
                        } else {
                            s.RegressionRegions.forEach((rr) => {
                                rr.Results.forEach((R) => {
                                    let x: number = +R.Name.substring(0, R.Name.indexOf(" "));
                                    freqDataArray.push([x, this.sigFigures(R.Value)]);
                                })
                            })
                        }

                    });//end foreach scenario
                    console.log("freq (start): " + freqDataArray);
                    this.fChartValues = freqDataArray;
                    this.showChartBtn_txt = "Hide"; this.showCharts_btn = true;
                    this.fChartOptions = {
                        exporting: {
                            chartOptions: { // specific options for the exported image
                                plotOptions: {
                                    series: {
                                        dataLabels: {
                                            enabled: true
                                        },
                                        name: F_areaAveraged ? 'PK25 (Area-weighted average)' : 'PK25',
                                        states: {
                                            hover: { enabled: false } //stops the line from getting thicker when mouse onto the chart
                                        }
                                    }
                                }
                            },
                            fallbackToExportServer: false
                        },
                        chart: { type: 'line', zoomType: 'xy' },
                        title: { text: '' },
                        series: [{
                            data: this.fChartValues,
                            marker: { enabled: true },
                            name: F_areaAveraged ? 'PK25 (Area-weighted average)' : 'PK25',
                            states: {
                                hover: { enabled: false } //stops the line from getting thicker when mouse onto the chart
                            }
                        }],
                        tooltip: {
                            formatter: function () {
                                var s = '<b>(' + this.x + ', ' + this.y + ')</b>';
                                return s;
                            }
                        },
                        xAxis: {
                            title: { text: 'Recurrence Interval, in years<br/>Flood Frequency Plot' },
                            type: 'logarithmic',
                            startOnTick: true,
                            endOnTick: true,
                            gridLineWidth: 1, //major grid (0/1)
                            tickWidth: 1, //major tic (0/1)              
                            minorTickInterval: 'auto', //line 191-196 needed for above to be changed                       
                            minorTickLength: 5,
                            tickPosition: 'inside',
                            minorTickPosition: 'inside',
                            tickColor: '#000000',
                            minorTickColor: '#000000'
                        },
                        yAxis: {
                            title: { text: 'Peak Discharge, In cubic meters per second' },
                            type: 'logarithmic',
                            startOnTick: true,
                            endOnTick: true,
                            gridLineWidth: 1, //major grid (0/1)
                            tickWidth: 1, //major tic (0/1)
                            minorTickLength: 5,
                            tickPosition: 'inside',
                            minorTickPosition: 'inside',
                            tickColor: '#000000',
                            minorTickColor: '#000000'
                        }
                    }
                } //if this.fchartvalues == undefined (only go in there to make a new one not overwrite one)
            } else {
                // it's "" something was changed in the filters, clear out the charts
                this.selectedPlot = undefined;
                this.showCharts_btn = false;
                this.hChartOptions = undefined;
                this.hChartXAxisValues = [];
                this.hydroChartsArray = [];
                this.fChartOptions = undefined;
                this.fChartValues = undefined;
                this.hydrographs = [];
            }
        });
        
    }// end ngOnInit()

    //round all parameters and statistic values to 3 significant figures
    public sigFigures(n) {
        if (n > 0) {
            var mult = Math.pow(10, 3 - Math.floor(Math.log(n) / Math.LN10) - 1);
            return Math.round(n * mult) / mult;
        } else return n;
    }
    //add backticks around parameter code to escape in equation
    private buildEquation(p: Parameter[], equation: string): string {
        let fullEquation: string = "";
        let arrayOfparameterValues = [];
        fullEquation = "`" + equation + "`";
        return fullEquation;
    }

    //use tableString and tName to export a table to the browser
    private triggerExportTable(tableString, tName) {
        let csvData = tableString;
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = tName.replace(/ /g, "_") + '.csv';
        a.click();
    }

    //export inputs table
    public exportInputTable(tableIndex) {
        let inputTableRows = this.inputTable._results[tableIndex].element.nativeElement.rows;
        let vals: string = ''; let str: string = '';
        for (var r = 0; r < inputTableRows.length; r++) {
            vals = '';
            for (var t = 0; t < inputTableRows[r].children.length; t++) {
                let child = inputTableRows[r].children[t];
                vals += child.innerText + ',';
                //if last one in this row 
                if (t == inputTableRows[r].children.length - 1 && child.localName == 'td') {
                    vals = vals.slice(0, -1);
                    str += vals + '\r\n';
                }
            }
        };
        str += '\r\n';
        //go get results table and tack it on to this before exporting 
        this.exportTable(tableIndex, str);
    }

    //export resultTable
    public exportTable(tableIndex, inputTableStr) {
        let tableRows = this.resultTable._results[tableIndex].element.nativeElement.rows;
        let keys: any = ''; let vals: string = ''; let str: string = ''; let tableName = '';
        for (var r = 0; r < tableRows.length; r++) {
            keys = ''; vals = '';
            for (var t = 0; t < tableRows[r].children.length; t++) {
                let child = tableRows[r].children[t];
                if (child.localName == 'th') {
                    if (keys == '' && tableName == '') tableName = inputTableStr.indexOf("Area-Averaged") == 0 ? "Area_Averaged" : child.innerText;
                    keys += child.innerText + ',';
                    if (child.colSpan > 1) {
                        for (var cs = 1; cs < child.colSpan; cs++) keys += ' ,';
                    }
                }
                else vals += child.innerText + ',';
                if (t == tableRows[r].children.length - 1 && child.localName == 'th') {
                    keys = keys.slice(0, -1);
                    inputTableStr += keys + '\r\n';
                } else if (t == tableRows[r].children.length - 1 && child.localName == 'td') {
                    vals = vals.slice(0, -1);
                    inputTableStr += vals + '\r\n';
                }
            }
        };
        this.triggerExportTable(inputTableStr, tableName);
    }

    public exportAppendix() {
        let tableName = 'Appendix';
        //parameter table
        let paramTable = this.uniqueParameters;
        let p_str: string = '';
        p_str += '\r\n' + 'Parameter Definitions' + '\r\n';
        p_str += 'Name,Abbrev,Description' + '\r\n';
        for (var p = 0; p < paramTable.length; p++) {
            p_str += paramTable[p].Name + ',' + paramTable[p].Code + ',' + paramTable[p].Description + '\r\n';
        };
        p_str += '\r\n';

        //unit types table
        let unitTable = this.uniqueUnitTypes;
        let u_str: string = '';
        u_str += '\r\n' + 'Unit Types' + '\r\n';
        u_str += 'Abbrev,Unit' + '\r\n';
        for (var u = 0; u < unitTable.length; u++) {
            u_str += '(' + unitTable[u].Abbr + '),' + unitTable[u].Unit + '\r\n';
        };
        u_str += '\r\n';
        let equa_str = this.appendixEquationsforExport.join(',');
        let allTablesJoinedString = equa_str + p_str + u_str;
        this.triggerExportTable(allTablesJoinedString, tableName);
        //this.triggerExportTable(this.appendixEquationsforExport.join(','), tableName);
    }
    //onBlur of Value, compare to min/max and show warning
    public compareValue(value: Parameter) {
        //is there a value or just click in and then out (would be "")
        if (value.Value) {
            //make sure all parameters of this CODE has this VALUE assigned to it in the real scenario Object
            this.scenarios.forEach((s) => {
                s.RegressionRegions.forEach((rr) => {
                    rr.Parameters.forEach((p) => {
                        if (p.Code == value.Code)
                            p.Value = value.Value;
                    })
                })
            }) //end foreach scenario
            //is value outside of range (if ther is limit range)
            if (value.Limits !== undefined) {
                let limitFlag: boolean = false;
                value.LimitArray.forEach((x) => {
                    if (value.Value > x.Max || value.Value < x.Min) {
                        limitFlag = true;
                        x.OutOfRange = true;
                        value.missingVal = false;//remove the missingVal flag (since there is something in here)
                    }
                    else {
                        //value is within proper range (no warning, has a value)                    
                        x.OutOfRange = false;
                        value.missingVal = false;//field is not empty
                    }
                });
                //need to flag the outter limit OutOfRange outside of the LimitArray loop
                if (limitFlag) value.OutOfRange = true; //flag it so
                else value.OutOfRange = false;
            } //end limits are not undefined
            else {
                value.OutOfRange = false; //within range
                value.LimitArray.forEach((l) => { l.OutOfRange = false; })
                value.missingVal = false;//field is not empty
            }
        } //end value.Value (has value)
        else {
            value.LimitArray.forEach((l) => { l.OutOfRange = false; })
            value.OutOfRange = false; //no need to check range
            value.missingVal = false;//field is empty, but we don't care until they hit submit on sidebar        
        }
    }
    //toggle parameter description
    public showDescription(p: Parameter, paramIndex: number) {
        //set this parameters seeDescription property to true/false
        this.uniqueParameters[paramIndex].seeDescription = !this.uniqueParameters[paramIndex].seeDescription;
    }
    //when chart loads, store an instance of the highchart to access functions
    private saveInstance(chartInst) {
        this.charts.push(chartInst);
    };

    /////////////////////////////////////// start HYDRO STUFF ///////////////////////////////////////////////////
    //clicked Bottom x & type == update chart HYDRO
    public setXaxisType(i, newType: string) {
        //converting to logarithmic gets ugly (line draws partially outside of plot area) due to the minorTickInterval being set to auto
        if (newType == 'logarithmic') {
            //this makes minor ticks and grid lines disappear..turn them off and uncheck boxes
            this.charts[i].xAxis[0].update({ tickInterval: 'auto', minorGridLineWidth: 0, minorTickWidth: 0 });
            this.hydrographs[i].minorGrid_BX = false; this.hydrographs[i].minorTic_BX = false;
        } else {
            this.charts[i].xAxis[0].update({ tickInterval: null });
        }
        this.charts[i].xAxis[0].update({ type: newType });
    }
    //clicked Left y & type == update chart HYDRO
    public setYaxisType(i, newType: string) {
        //converting to logarithmic gets ugly (line draws partially outside of plot area) due to the minorTickInterval being set to auto
        if (newType == 'logarithmic') {
            //this makes minor ticks and grid lines disappear..turn them off and uncheck boxes
            this.charts[i].yAxis[0].update({ minorGridLineWidth: 0, minorTickWidth: 0 }); //tickInterval:'auto'
            this.hydrographs[i].minorGrid_LY = false; this.hydrographs[i].minorTic_LY = false;

        } else {
            this.charts[i].yAxis[0].update({ tickInterval: null });
        }
        this.charts[i].yAxis[0].update({ type: newType });
    }
    //update title on x axis as they type HYDRO
    public updateBXtitle(i) {
        this.hydroChartsArray[i].xAxis.title.text = this.hydrographs[i].title_BX.replace(/\n/g, '<br/>'); //bottom title      
        this.charts[i].xAxis[0].setTitle({ text: this.hydroChartsArray[i].xAxis.title.text }); //title of xAxis
    }
    //update title on y axis as they type HYDRO
    public updateLYtitle(i) {
        this.hydroChartsArray[i].yAxis.title.text = (this.hydrographs[i].title_LY.replace(/\n/g, '<br/>'));
        this.charts[i].yAxis[0].setTitle({ text: this.hydroChartsArray[i].yAxis.title.text }); //title of yAxis
    }
    //update ticks or grids on chart (0/1) HYDRO
    public setXChartLines(i: number, whichOne: string, value: boolean) {
        /* gridLineWidth: 1 //major grid (0/1)    minorGridLineWidth: 1 //minor grid (0/1)   tickWidth: 1 //major tic (0/1)  minorTickWidth: 1 //minor tic (0/1)  */
        switch (whichOne) {
            case 'gridLineWidth':
                if (value) this.charts[i].xAxis[0].update({ gridLineWidth: 1 });
                else this.charts[i].xAxis[0].update({ gridLineWidth: 0 });
                break;
            case 'minorGridLineWidth':
                if (value) this.charts[i].xAxis[0].update({ minorGridLineWidth: 1 });
                else this.charts[i].xAxis[0].update({ minorGridLineWidth: 0 });
                break;
            case 'tickWidth':
                if (value) this.charts[i].xAxis[0].update({ tickWidth: 1 });
                else this.charts[i].xAxis[0].update({ tickWidth: 0 });
                break;
            case 'minorTickWidth':
                if (value) this.charts[i].xAxis[0].update({ minorTickWidth: 1 });
                else this.charts[i].xAxis[0].update({ minorTickWidth: 0 });
                break;
        }
    }
    //update ticks or grids on chart (0/1) HYDRO
    public setYChartLines(i: number, whichOne: string, value: boolean) {
        /* gridLineWidth: 1 //major grid (0/1)    minorGridLineWidth: 1 //minor grid (0/1)   tickWidth: 1 //major tic (0/1)  minorTickWidth: 1 //minor tic (0/1)  */
        switch (whichOne) {
            case 'gridLineWidth':
                if (value) this.charts[i].yAxis[0].update({ gridLineWidth: 1 });
                else this.charts[i].yAxis[0].update({ gridLineWidth: 0 });
                break;
            case 'minorGridLineWidth':
                if (value) this.charts[i].yAxis[0].update({ minorGridLineWidth: 1 });
                else this.charts[i].yAxis[0].update({ minorGridLineWidth: 0 });
                break;
            case 'tickWidth':
                if (value) this.charts[i].yAxis[0].update({ tickWidth: 1 });
                else this.charts[i].yAxis[0].update({ tickWidth: 0 });
                break;
            case 'minorTickWidth':
                if (value) this.charts[i].yAxis[0].update({ minorTickWidth: 1 });
                else this.charts[i].yAxis[0].update({ minorTickWidth: 0 });
                break;
        }
    }
    //reverse the data HYDRO
    public setReverseData(i: number, which: string, value: boolean) {
        if (which == 'bx') {

            this.charts[i].xAxis[0].update({ reversed: value });
        } else {
            this.charts[i].yAxis[0].update({ reversed: value });
        }
    }
    //change line color HYDRO
    public changeLineColor(i: number, c: string) {
        this.charts[i].series[0].update({ color: c });
        this.hydrographs[i].colorPickerColor = c;
    }
    //change line width HYDRO
    public setLineWidth(i: number) {
        this.charts[i].series[0].update({ lineWidth: this.hydrographs[i].lineWidth });
    }
    //change line symbol fill color HYDRO
    public changeLineSymbolColor(i: number, c: string) {
        this.charts[i].series[0].update({ marker: { fillColor: c } });
        this.hydrographs[i].lineSymbolFillColor = c;
    }
    //change point symbol HYDRO
    public setLineSymbol(i: number, e: Event) {
        this.charts[i].series[0].update({ marker: { symbol: this.hydrographs[i].lineSymbol } });
    }
    //change curve label HYDRO
    public updateCurveLabel(i: number) {
        this.charts[0].series[0].update({ name: this.hydrographs[i].curveLabel });
    }
    //show/hide data labels  HYDRO
    public updateDataLabels(i: number, value: boolean) {
        this.charts[i].series[0].update({ dataLabels: { enabled: value, formatter: function () { return '(' + this.x + ', ' + this.y + ')'; } } });
    }
    //changed values, refresh the hydrograph with new data HYDRO
    public refreshHydrograph(i, formValues) {
        //top title (updated with which recurrence interval they choose)
        this.hydroChartsArray[i].title.text = 'Hydrograph (Recurrence Interval: ' + this.hydrographs[i].recurrence + ')';
        
        // update the xAxis title
        this.hydroChartsArray[i].xAxis.title.text = 'Time (hours)<br/>Hydrograph for ' + this.hydrographs[i].lagTime + '-yr interval<br/>NOTE: May not represent actual hydrograph';
        this.hydrographs[i].title_BX = 'Time (hours)\nHydrograph for ' + this.hydrographs[i].lagTime + '-yr interval\nNOTE: May not represent actual hydrograph';
        this.charts[i].xAxis[0].setTitle({ text: this.hydroChartsArray[i].xAxis.title.text }); //title of xAxis
    
    
        this.charts[i].setTitle({ text: this.hydroChartsArray[i].title.text }); //title of chart  

        //get the corresponding results value for the recurrence chosen to update the chart data
        let recValue: number;
        this.scenarios.forEach((s) => {
            s.RegressionRegions.forEach((rr) => {
                if (rr.Results)
                    recValue = rr.Results.filter(r => r.code == this.hydrographs[i].recurrence)[0].Value;
            });
        });
        this.charts[i].series[0].setData(this.DIMLESS_ARRAY.map(p => { return [p[0] * this.hydrographs[i].lagTime, p[1] * recValue] })); //update data
        this.hydrographs[i].showExtraSettings = false; //just close the extra settings part
    }
    //show/hide additional user settings options for the chart (axis, title, etc) HYDRO
    public showHideAdditionalChartSettings(i) {
        this.hydrographs[i].showExtraSettings = !this.hydrographs[i].showExtraSettings;
    }
    //want to remove a hydrochart HYDRO
    public removeHydroChart(ind: number) {
        this.hydroChartsArray.splice(ind, 1);
        this.charts.splice(ind, 1);
        this.hydrographs.splice(ind, 1);
    }
    /////////////////////////////////////////// end HYDRO STUFF ///////////////////////////////////////////////////

    ///////////////////////////////////////start FREQUENCY STUFF ///////////////////////////////////////////////////
    public saveFreqInstance(freqChartInst) {
        this.freqChart = freqChartInst;
    }
    //clicked Bottom x & type == update chart FREQUENCY
    public setFreqXaxisType(newType: string) {
        let freqDataArray: number[][]; freqDataArray = [];
        //converting 'percent', 'fraction', or 'returnPeriod' (default/onload is returnPeriod)
        if (newType == 'percent') {
            this.scenarios.forEach((s) => {
                s.RegressionRegions.forEach((rr) => {
                    if (rr.Results) {
                        rr.Results.forEach((R) => {
                            let x: number = +R.Name.substring(0, R.Name.indexOf(" "));
                            freqDataArray.push([(1 / x) * 100, R.Value]);
                        })
                    }
                });
            });//end foreach scenario       
            this.frequencyPlotChart.reverse_BX = true;
            this.freqChart.xAxis[0].update({
                reversed: true, labels: {
                    formatter: function () {
                        return Highcharts.numberFormat(this.value, 0, ',') + '%';
                    }
                }
            });
        } else if (newType == 'fraction') {
            //divide 1 into probability (pk500)
            this.scenarios.forEach((s) => {
                s.RegressionRegions.forEach((rr) => {
                    if (rr.Results) {
                        rr.Results.forEach((R) => {
                            let x: number = +R.Name.substring(0, R.Name.indexOf(" "));
                            freqDataArray.push([1 / x, R.Value]);
                        })
                    }
                });
            });//end foreach scenario
            this.frequencyPlotChart.reverse_BX = true;
            this.freqChart.xAxis[0].update({ reversed: true, labels: { formatter: function () { return this.value; } } });
        } else {
            //returnPeriod
            this.scenarios.forEach((s) => {
                s.RegressionRegions.forEach((rr) => {
                    if (rr.Results) {
                        rr.Results.forEach((R) => {
                            let x: number = +R.Name.substring(0, R.Name.indexOf(" "));
                            freqDataArray.push([x, R.Value]);
                        })
                    }
                });
            });//end foreach scenario
            this.frequencyPlotChart.reverse_BX = false;
            this.freqChart.xAxis[0].update({ reversed: false, labels: { formatter: function () { return this.value; } } });
            console.log("return period: " + freqDataArray);
        }
        this.freqChart.series[0].setData(freqDataArray);
    }
    //update title on x axis as they type FREQUENCY
    public updateFreqBXtitle() {
        this.fChartOptions.xAxis.title.text = this.frequencyPlotChart.title_BX.replace(/\n/g, '<br/>'); //bottom title      
        this.freqChart.xAxis[0].setTitle({ text: this.fChartOptions.xAxis.title.text }); //title of xAxis
    }
    //update title on y axis as they type FREQUENCY
    public updateFreqLYtitle() {
        this.fChartOptions.yAxis.title.text = (this.frequencyPlotChart.title_LY.replace(/\n/g, '<br/>'));
        this.freqChart.yAxis[0].setTitle({ text: this.fChartOptions.yAxis.title.text }); //title of yAxis
    }
    //update ticks or grids on chart (0/1) FREQUENCY
    public setFreqXChartLines(whichOne: string, value: boolean) {
        /* gridLineWidth: 1 //major grid (0/1)    minorGridLineWidth: 1 //minor grid (0/1)   tickWidth: 1 //major tic (0/1)  minorTickWidth: 1 //minor tic (0/1)  */
        switch (whichOne) {
            case 'gridLineWidth':
                if (value) this.freqChart.xAxis[0].update({ gridLineWidth: 1 });
                else this.freqChart.xAxis[0].update({ gridLineWidth: 0 });
                break;
            case 'minorGridLineWidth':
                if (value) this.freqChart.xAxis[0].update({ minorGridLineWidth: 1 });
                else this.freqChart.xAxis[0].update({ minorGridLineWidth: 0 });
                break;
            case 'tickWidth':
                if (value) this.freqChart.xAxis[0].update({ tickWidth: 1 });
                else this.freqChart.xAxis[0].update({ tickWidth: 0 });
                break;
            case 'minorTickWidth':
                if (value) this.freqChart.xAxis[0].update({ minorTickWidth: 1 });
                else this.freqChart.xAxis[0].update({ minorTickWidth: 0 });
                break;
        }
    }
    //update ticks or grids on chart (0/1) FREQUENCY
    public setFreqYChartLines(whichOne: string, value: boolean) {
        /* gridLineWidth: 1 //major grid (0/1)    minorGridLineWidth: 1 //minor grid (NOT USED WITH LOG)  tickWidth: 1 //major tic (0/1)  minorTickWidth: 1 //minor tic (NOT USED WITH LOG)  */
        switch (whichOne) {
            case 'gridLineWidth':
                if (value) this.freqChart.yAxis[0].update({ gridLineWidth: 1 });
                else this.freqChart.yAxis[0].update({ gridLineWidth: 0 });
                break;
            case 'tickWidth':
                if (value) this.freqChart.yAxis[0].update({ tickWidth: 1 });
                else this.freqChart.yAxis[0].update({ tickWidth: 0 });
                break;
        }
    }
    //reverse the data FREQUENCY
    public setFreqReverseData(which: string, value: boolean) {
        if (which == 'bx') {
            this.freqChart.xAxis[0].update({ reversed: value });
        } else {
            this.freqChart.yAxis[0].update({ reversed: value });
        }
    }
    //change line color FREQUENCY
    public changeFreqLineColor(c: string) {
        this.freqChart.series[0].update({ color: c });
        this.frequencyPlotChart.colorPickerColor = c;
    }
    //change line width FREQUENCY
    public setFreqLineWidth() {
        this.freqChart.series[0].update({ lineWidth: this.frequencyPlotChart.lineWidth });
    }
    //change line symbol fill color FREQUENCY
    public changeFreqLineSymbolColor(c: string) {
        this.freqChart.series[0].update({ marker: { fillColor: c } });
        this.frequencyPlotChart.lineSymbolFillColor = c;
    }
    //change point symbol FREQUENCY
    public setFreqLineSymbol(e: Event) {
        this.freqChart.series[0].update({ marker: { symbol: this.frequencyPlotChart.lineSymbol } });
    }
    //change curve label FREQUENCY
    public updateFreqCurveLabel() {
        this.freqChart.series[0].update({ name: this.frequencyPlotChart.curveLabel });
    }
    //show/hide data labels  FREQUENCY
    public updateFreqDataLabels(value: boolean) {
        this.freqChart.series[0].update({ dataLabels: { enabled: value, formatter: function () { return '(' + this.x + 'yr, ' + this.y + ')'; } } });
    }
    //show/hid additional user settings options for the chart Frequency
    public showHideAddFChartSettings() {
        this.showExtraFREQSettings = !this.showExtraFREQSettings;
    }
    public removeFreqChart() {
        this.frequencyPlotChart = undefined;
        this.freqChart = undefined;
        this.fChartOptions = undefined;
        this.fChartValues = undefined;
    }
    //////////////////////////////////////end FREQUENCY STUFF  /////////////////////////////////////////////////////
    //toggle charts
    public showHideCharts() {
        //if showCharts_btn is true == show the charts and showChartBtn_txt says "Hide"
        //if showCharts_btn is false == hide the charts and showChartBtn_txt says "Show"
        this.showCharts_btn = !this.showCharts_btn;
        if (this.showCharts_btn) this.showChartBtn_txt = "Hide";
        else this.showChartBtn_txt = "Show";
    }
    //want to edit the scenario. remove Result
    public editScenario() {
        this.scenarios.forEach((s) => {
            let areaWeighed = s.RegressionRegions.map(function (r) { return r.ID; }).indexOf(0);
            if (areaWeighed > -1) s.RegressionRegions.splice(areaWeighed, 1); //remove the area weighted regRegion
            s.RegressionRegions.forEach((r) => {
                this.resultsBack = false;
                delete r.Results;
            });
        });
        this._nssService.setScenarios(this.scenarios);

    }
    //number only allowed in Value
    public _keyPress(event: any) {
        const pattern = /[0-9\+\-\.\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }
    //need superscript tag in unittype (using <span [innerHTML]="setSuperScript(p.UnitType.Abbr)"> converts tags to actual html)
    public setSuperScript(unit: string) {
        let newUnitWithSupTag: string = '';
        let indexOfSup = unit.indexOf('^');
        if (indexOfSup > -1)
            newUnitWithSupTag = unit.substring(0, indexOfSup) + '<sup>' + unit.substring(indexOfSup + 1) + '</sup>';
        else newUnitWithSupTag = unit;

        return newUnitWithSupTag;
    }
    //print pdf 
    public printPage() {
        let printContents, popupWin;
        printContents = document.getElementById('printArea').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title></title>
          <style>                   
            .hidden-print {
                display: none !important;
            }
            #print-content * {
                visibility: visible;
            }            
            h3 {
                text-align: center;
            }
            th, td {
                margin-top:-8px;
                padding-top:8px;
                page-break-inside:avoid;
            }
          </style>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
        );
        popupWin.document.close();
    }
} // end component
