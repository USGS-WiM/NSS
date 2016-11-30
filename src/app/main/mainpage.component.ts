import { Component, OnInit, Inject }    from '@angular/core';
import { CommonModule }                 from '@angular/common';

import {ToasterContainerComponent,
    ToasterService }                    from 'angular2-toaster/angular2-toaster';
import {Toast }                         from 'angular2-toaster/lib/toast';

import { ChartService }                 from '../services/chart.service';
import { NSSService }                   from '../services/nss.service';
import { IRegressionRegion }            from '../shared/regressionRegion';
import { IRegressionType }              from '../shared/regressionType';
import { IRegion }                      from '../shared/region';
import { IScenarioRegressionRegion }    from '../shared/scenarioRegressionRegion';
import { IStatisticGroup }              from '../shared/statisticGroup';
import { IScenario }                    from '../shared/scenario';
import { IParameter }                   from '../shared/parameter';
import { IEquationResult }              from '../shared/equationResult';
import { IHydro }                       from '../shared/hydroChart';
import { IErrorValue }                  from '../shared/errorValues';

declare var MathJax: {
    Hub: { Queue: (param: Object[]) => void; }
}

@Component({ //moduleId is used to keep templateurl relative path
    moduleId: module.id,
    selector: 'wim-mainpage',
    styleUrls: ['./mainpage.css'],
    templateUrl: './mainpage.html'
})

export class MainPageComponent  {
    title: string = "NSS Report";
    public get selectedRegion(): IRegion { return this._nssService.selectedRegion; };
    public get selectedRegRegion(): Array<IRegressionRegion> { return this._nssService.selectedRegRegions; };
    public get selectedStatisticGrp(): Array<IStatisticGroup> { return this._nssService.selectedStatGroups; };
    public get selectedRegType(): Array<IRegressionType> { return this._nssService.selectedRegressionTypes; };
    
    scenarios: IScenario[];                 //after each region/regRegion/statGrp/regType is chosen, get scenario
   // ErrorValues: IErrorValue;               //are there missing values or out of range
    toast: Toast;                           //notification when values are required
    resultsBack: boolean;                   //flag that swaps content on mainpage from scenarios w/o results to those with results
    showWeights: boolean;                   //if more than 1 regRegion, then show input for weighted
    hydrograph: IHydro;                     //holder for a hydrograph
    hydroChartsArray: Object[];             //holds all hydro charts that are desired.
    hChartOptions: Object;                  //hydro chart
    hChartValues: Array<number>[];           //array of what to linechart
    hChartXAxisValues: string[];             //chart x axis
    hChartYAxisText: string;                 //chart y axis
    fChartOptions: Object;                  //frequency chart
    fChartValues: Array<number>[];          //frequency data
    equationResults: IEquationResult[];     //used in Appendix
    showCharts_btn: boolean;                //toggle button boolean
    showChartBtn_txt: string;               //string "show" / "hide"
    constructor( @Inject(ChartService) private _chartService: ChartService,
        @Inject(ToasterService) private _toasterService: ToasterService,
        @Inject(NSSService) private _nssService: NSSService) { }
    

    //add backticks around parameter code to escape in equation
    buildEquation(p: IParameter[], equation: string): string {
        let fullEquation: string = "";
        let arrayOfparameterValues = [];
        p.forEach((P) => {
            equation = equation != "0" ? equation.replace(P.Code, "`" + P.Code + "`") : "";
        });
        fullEquation = "`" + equation + "`";
        return fullEquation;
    }
    getHydroData(): Array<number>[] {
        return [[0.5, 0.941],[0.6, 1.25],[0.7, 1.65],[0.8, 2.04],[0.9, 2.59],[1, 3.14],[1.1, 3.84],[1.2, 4.55],[1.3, 5.25],[1.4, 5.96],[1.5, 6.58],
            [1.6, 7.05],[1.7, 7.45],[1.8, 7.68],[1.9, 7.84],[2, 7.76],[2.1, 7.52],[2.2, 7.21],[2.3, 6.74],[2.4, 6.27],[2.5, 5.8],[2.6, 5.33],[2.7, 4.86],
            [2.8, 4.39],[2.9, 4],[3, 3.68],[3.1, 3.37],[3.2, 3.06],[3.3, 2.82],[3.4, 2.59],[3.5, 2.35],[3.6, 2.19],[3.7, 2.04],[3.8, 1.88],[3.9, 1.72],
            [4, 1.57],[4.1, 1.49],[4.2, 1.33],[4.3, 1.25],[4.4, 1.18],[4.5, 1.1],[4.6, 1.02],[4.7, 0.941],[4.8, 0.862],[4.9, 0.784]];
    }
    getFreqData(): Array<number>[] {
        return [[2,7.9567],[2.5,10.181], [3.33,13.76], [4,15.997], [5,19.113], [10,31.292], [20,47.188], [50,72.142], [100,98.848], [200,126.48], [504,173.3]];
    }
    ngOnInit(): any {
        this.hydroChartsArray = []; //instantiate
        this.resultsBack = false;
       
        this._nssService.scenarios.subscribe((s: Array<IScenario>) => {
            this.scenarios = s; this.resultsBack = false; this.equationResults = [];
            this.scenarios.forEach((s) => {
                s.RegressionRegions.forEach((rr) => {
                    if (rr.Results) {
                        let eqResult: IEquationResult = { Name: "", Formulas:[] };
                        //only care if not weighted average result     
                        if (rr.ID > 0) eqResult.Name = rr.Name;
                        this.resultsBack = true;                         
                        rr.Results.forEach((R) => {
                            if (eqResult.Name != "") eqResult.Formulas.push({ "Code": R.code, "Equation": this.buildEquation(rr.Parameters, R.Equation) });                           
                        });
                        if (rr.ID > 0) this.equationResults.push(eqResult);
                        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "MathJax"]); //for the appendix of equations
                    } //end there's results
                });
            });            
        });
        this._nssService.getToast().subscribe((t: Toast) => {
            this.toast = t;
            this._toasterService.pop(this.toast);
        });
        this._chartService.getHydrograph().subscribe((h: IHydro) => {
            this.hydrograph = h;
            this.showChartBtn_txt = "Hide"; this.showCharts_btn = true;
            this.scenarios.forEach((s) => {
                s.RegressionRegions.forEach((rr) => {
                    if (rr.Results) {
                        this.hChartValues = this.getHydroData();
                        this.hChartXAxisValues = [];
                        rr.Results.forEach((R) => {                            
                            this.hChartXAxisValues.push(R.code);
                            //this.chartValues.push(R.Value);
                            
                        }); // http://api.highcharts.com/highcharts //
                        this.hChartOptions = {
                            title: { text: 'Hydrograph (Recurrence Interval: ' + this.hydrograph.recurrence + ')' },
                            series: [{
                                data: this.hChartValues
                            }],
                            xAxis: {
                                title: { text: 'Time (hours)<br/>Hydrograph for ' + this.hydrograph.lagTime + '-yr interval<br/>NOTE: May not represent actual hydrograph' },
                               // categories: this.chartXAxisValues
                            },
                            yAxis: {
                                title: { text: 'Discharge (cubic meters per second)' }
                            }
                        };
                    } //end there's results
                });
            });
            this.hydroChartsArray.push(this.hChartOptions);
        });
        this._chartService.getFrequency().subscribe((f: string) => {
            this.fChartValues = this.getFreqData();
            this.showChartBtn_txt = "Hide"; this.showCharts_btn = true;
            this.fChartOptions = {
                title: { text: 'Frequency Plot' },
                series: [{
                    data: this.fChartValues
                }],
                xAxis: {
                    title: { text: 'Recurrence Interval, in years<br/>Flood Frequency Plot' },                    
                },
                yAxis: {
                    title: { text: 'Peak Discharge, In cubic meters per second' }
                }
            };

        });
    }
   
    //onBlur of Value, compare to min/max and show warning
    compareValue(value: IParameter) {
        //is there a value or just click in and then out (would be "")
        let ev: IErrorValue = { missingVal: false, OutOfRange: false }; 
        if (value.Value) {                       
            //is value outside of range (if ther is limit range)
            if (value.Limits !== undefined) {
                if (value.Value > value.Limits.Max || value.Value < value.Limits.Min) {
                    value.OutOfRange = true; //flag it so
                    value.missingVal = false;//remove the missingVal flag (since there is something in here)
                } else {
                    //value is within proper range (no warning, has a value)
                    value.OutOfRange = false; //within range
                    value.missingVal = false;//field is not empty
                }
            } //end limits are not undefined
            else {
                value.OutOfRange = false; //within range
                value.missingVal = false;//field is not empty
            }
           // this._regionService.errorValues = ev;
        } else {
            value.OutOfRange = false; //no need to check range
            value.missingVal = false;//field is empty, but we don't care until they hit submit on sidebar
          //  this._regionService.errorValues = ev;
        }
    }

    //want to remove a hydrochart
    removeHydroChart(ind: number) {
        this.hydroChartsArray.splice(ind, 1);
    }
    removeFreqChart() {
        this.fChartOptions = null;
    }

     //number only allowed in Value
    _keyPress(event: any) {
        const pattern = /[0-9\+\-\.\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }

    //toggle charts
    showHideCharts() {
        //if showCharts_btn is true == show the charts and showChartBtn_txt says "Hide"
        //if showCharts_btn is false == hide the charts and showChartBtn_txt says "Show"
        this.showCharts_btn = !this.showCharts_btn;
        if (this.showCharts_btn) this.showChartBtn_txt = "Hide";
        else this.showChartBtn_txt = "Show";
    }
}
