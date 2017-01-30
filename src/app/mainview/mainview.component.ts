//   copyright:   2016 WiM - USGS
//   authors:  Tonia Roddick USGS-WiM
// 
//   purpose:  Main view of the application
//          
//   Comments
//12.06.2016 tr - Created
//

import { Component, Inject }          from '@angular/core';
import { ActivatedRoute }             from '@angular/router';
import { DOCUMENT }                   from '@angular/platform-browser';

import { IRegion}                     from '../shared/region';
import { IRegressionRegion }          from '../shared/regressionregion';
import { IRegressionType }            from '../shared/regressiontype';
import { IScenarioRegressionRegion }  from '../shared/scenarioregressionregion';
import { IStatisticGroup }            from '../shared/statisticgroup';
import { IScenario }                  from '../shared/scenario';
import { IParameter }                 from '../shared/parameter';
import { IUnitType }                  from '../shared/unittype';
import { ILimit }                     from '../shared/limit';
import { IEquationResult }            from '../shared/equationresult';
import { IHydro }                     from '../shared/hydrochart';
import { IChart }                     from '../shared/chart';
import { NSSService}                  from '../app.service';

import { ToasterContainerComponent,
    ToasterService }                  from 'angular2-toaster/angular2-toaster';
import { Toast }                      from 'angular2-toaster/lib/toast';
import { PageScrollService, 
    PageScrollInstance }              from 'ng2-page-scroll';

declare var MathJax: {
    Hub: { Queue: (param: Object[]) => void; }
}

@Component({
  selector: 'wim-mainview',
  styleUrls: ['./mainview.component.css'],
  templateUrl: './mainview.component.html'
})

export class MainviewComponent {
  public title:string;
  public resultsBack: boolean;                //flag that swaps content on mainpage from scenarios w/o results to those with results
  public equationResults: IEquationResult[];  //used in Appendix
  public showWeights: boolean;                //if more than 1 regRegion, then show input for weighted
  public timestamp: Date;                     //display a time stamp when they first get here.
  public toast: Toast;                        //notification when values are required
  public get selectedRegion(): IRegion { return this._nssService.selectedRegion; };
  public get selectedRegRegion(): Array<IRegressionRegion> { return this._nssService.selectedRegRegions; };
  public get selectedStatisticGrp(): Array<IStatisticGroup> { return this._nssService.selectedStatGroups; };
  public get selectedRegType(): Array<IRegressionType> { return this._nssService.selectedRegressionTypes; };
  public scenarios: IScenario[];              
  // -+-+-+-+ Chart parts -+-+-+-+-+-+
  public hydrograph: IHydro;                      //holder for a hydrograph
  public hydrographs: Array<IHydro>;              //holds all the IHydros so each chart has their own
  public hydroChartsArray: IChart[];              //holds all hydro charts that are desired.
  public hChartOptions: IChart;                   //hydro chart
  public hChartValues: Array<number>[];           //array of what to linechart
  public hChartXAxisValues: string[];             //chart x axis
  public hChartYAxisText: string;                 //chart y axis
  public fChartOptions: Object;                   //frequency chart
  public fChartValues: Array<number>[];           //frequency data
  public showCharts_btn: boolean;                 //toggle button boolean
  public showChartBtn_txt: string;                //string "show" / "hide"
  public selectedPlot: string;                    //which plot are they asking for ("Hydrograph" or "Frequency Plot")
  public charts: Array<any>;                      //chart instance 
  public uniqueParameters:Array<IParameter>       //holds unique list of parameters
  public uniqueUnitTypes:Array<IUnitType>         //holds unique list of unit types for parameters to show in appendix
  public multipleRegRegions: boolean              //if multiple regRegions, set this to true
  constructor(private _nssService:NSSService, 
              private _toasterService: ToasterService,
              @Inject(DOCUMENT) private _document:Document,
              private _pageScrollService: PageScrollService) { }

  ngOnInit() {
      this.title = "NSS Report";
      this.timestamp = new Date();
      this.charts = []; //instantiate
      this.hydroChartsArray = []; //instantiate
      this.hydrographs = []; //instantiate
      this.resultsBack = false;
      this.multipleRegRegions = false;

      //subscribe to scenarios
      this._nssService.scenarios.subscribe((s: Array<IScenario>) => {
          this.scenarios = s; this.resultsBack = false; this.equationResults = []; this.uniqueParameters = []; this.uniqueUnitTypes = [];
          let regID:string = ''; this.multipleRegRegions = false;
          this.scenarios.forEach((s) => {
              //show weight inputs if more than 1 regression region chosen
              this.showWeights = s.RegressionRegions.length > 1 ? true : false;
              if (s.RegressionRegions.length > 1) this.multipleRegRegions = true;
              else this.multipleRegRegions = false;

              s.RegressionRegions.forEach((rr) => {
                  regID = "(RG_ID: " + rr.ID + ")"; //need to show the regID for each limit so they know which one they are out of range on
                  if (rr.Results) {                      
                      let eqResult: IEquationResult = { Name: "", Formulas: [] };
                      //only care if average result
                      if (rr.ID > 0) eqResult.Name = rr.Name;
                      this.resultsBack = true;
                      rr.Results.forEach((R) => {
                          if (eqResult.Name != "") eqResult.Formulas.push({ "Code": R.code, "Equation": this.buildEquation(rr.Parameters, R.Equation) });
                      });
                      if (rr.ID > 0) this.equationResults.push(eqResult);
                      MathJax.Hub.Queue(["Typeset", MathJax.Hub, "MathJax"]); //for the appendix of equations
                  } //end there's results
                  //populate uniqueParameters and uniqueUnitTypes
                  if(rr.ID > 0) {
                    rr.Parameters.forEach((p) =>{
                        //is this param code already in array list?                        
                        let pIndex = this.uniqueParameters.map(function (parame) { return parame.Code; }).indexOf(p.Code);
                        if (pIndex < 0) {
                            p.LimitArray = [];                             
                            if (p.Limits != undefined){
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
                        let uIndex = this.uniqueUnitTypes.map(function (unit){ return unit.Abbr;}).indexOf(p.UnitType.Abbr);
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
      this._nssService.getToast().subscribe((t:Toast) =>{
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
              this.selectedPlot = "Hydrograph";
              this.hydrograph = { recurrence: null, lagTime: null };
              this.showChartBtn_txt = "Hide"; this.showCharts_btn = true;
              //get array of recurrences from result                
              this.scenarios.forEach((s) => {
                  s.RegressionRegions.forEach((rr) => {
                      if (rr.Results) {
                          this.hChartValues = this.getHydroData();
                          this.hChartXAxisValues = [];
                          rr.Results.forEach((R) => {
                             this.hChartXAxisValues.push(R.code);
                          });
                      }
                  });
              });//end foreach scenario
              this.hydrograph.recurrence = this.hChartXAxisValues[0]; //default to first one;
              this.hydrograph.lagTime = 1; //default value to change later
              // http://api.highcharts.com/highcharts 
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
              this.hydroChartsArray.push(this.hChartOptions);
              this.hydrographs.push(this.hydrograph);
          } else if (c == "Frequency Plot") {
              let freq = "yep";
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
          } else {
              // it's "" something was changed in the filters, clear out the charts
              this.selectedPlot = undefined;
              this.hChartValues = undefined;
              this.showCharts_btn = false;
              this.hydrograph = undefined;
              this.hChartOptions = undefined;
              this.hydroChartsArray = []; 
              this.fChartOptions = undefined;
              this.hydrographs = [];
          }
      });
  } //end ngOnInit

  //add backticks around parameter code to escape in equation
  private buildEquation(p: IParameter[], equation: string): string {
      let fullEquation: string = "";
      let arrayOfparameterValues = [];
      p.forEach((P) => {
          equation = equation != "0" ? equation.replace(P.Code, "`" + P.Code + "`") : "";
      });
      fullEquation = "`" + equation + "`";
      return fullEquation;
  }
  //onBlur of Value, compare to min/max and show warning
  public compareValue(value: IParameter) {
      //is there a value or just click in and then out (would be "")
      if (value.Value) {       
          //make sure all parameters of this CODE has this VALUE assigned to it in the real scenario Object
           this.scenarios.forEach((s) => {
              s.RegressionRegions.forEach((rr) => {
                  rr.Parameters.forEach((p) =>{
                      if (p.Code == value.Code) 
                        p.Value = value.Value;
                  })
              })
           }) //end foreach scenario
          //is value outside of range (if ther is limit range)
          if (value.Limits !== undefined) {
              let limitFlag:boolean = false;
              value.LimitArray.forEach((x)=>{
                  if (value.Value > x.Max || value.Value < x.Min){ 
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
              value.LimitArray.forEach((l)=>{l.OutOfRange=false;})
              value.missingVal = false;//field is not empty
          }          
      } //end value.Value (has value)
       else {
          value.LimitArray.forEach((l)=>{l.OutOfRange=false;})
          value.OutOfRange = false; //no need to check range
          value.missingVal = false;//field is empty, but we don't care until they hit submit on sidebar        
      }
  }  
  //toggle parameter description
  public showDescription(p:IParameter, paramIndex:number) {
      //set this parameters seeDescription property to true/false
      this.uniqueParameters[paramIndex].seeDescription = !this.uniqueParameters[paramIndex].seeDescription;
  }
  //fake hydrograph chart array
  private getHydroData(): Array<number>[] {
       return [[0.5, 0.941], [0.6, 1.25], [0.7, 1.65], [0.8, 2.04], [0.9, 2.59], [1, 3.14], [1.1, 3.84], [1.2, 4.55], [1.3, 5.25], [1.4, 5.96], [1.5, 6.58],
           [1.6, 7.05], [1.7, 7.45], [1.8, 7.68], [1.9, 7.84], [2, 7.76], [2.1, 7.52], [2.2, 7.21], [2.3, 6.74], [2.4, 6.27], [2.5, 5.8], [2.6, 5.33], [2.7, 4.86],
           [2.8, 4.39], [2.9, 4], [3, 3.68], [3.1, 3.37], [3.2, 3.06], [3.3, 2.82], [3.4, 2.59], [3.5, 2.35], [3.6, 2.19], [3.7, 2.04], [3.8, 1.88], [3.9, 1.72],
           [4, 1.57], [4.1, 1.49], [4.2, 1.33], [4.3, 1.25], [4.4, 1.18], [4.5, 1.1], [4.6, 1.02], [4.7, 0.941], [4.8, 0.862], [4.9, 0.784]];
  }
  //fake frequency plot array
  private getFreqData(): Array<number>[] {
      return [[2, 7.9567], [2.5, 10.181], [3.33, 13.76], [4, 15.997], [5, 19.113], [10, 31.292], [20, 47.188], [50, 72.142], [100, 98.848], [200, 126.48], [504, 173.3]];
  }  
  //when chart loads, store an instance of the highchart to access functions
  private saveInstance(chartInst) {
        this.charts.push(chartInst);
  };
  //changed values, refresh the hydrograph with new data
  public refreshHydrograph(i) {
      let hchartOpt: IChart = this.hydroChartsArray[i];
      let h: IHydro = this.hydrographs[i];
      hchartOpt.title.text = 'Hydrograph (Recurrence Interval: ' + h.recurrence + ')';
      hchartOpt.xAxis.title.text = 'Time (hours)<br/>Hydrograph for ' + h.lagTime + '-yr interval<br/>NOTE: May not represent actual hydrograph'
      this.hydroChartsArray[i] = hchartOpt;
      this.charts[i].setTitle({ text: hchartOpt.title.text }); //title of chart
      this.charts[i].xAxis[0].setTitle({ text: hchartOpt.xAxis.title.text }); //title of xAxis
      this.charts[i].series[0].setData(this.getFreqData()); //update data
      this.hydrographs[i] = {recurrence:null, lagTime:null}; 
  }
  //want to remove a hydrochart
  public removeHydroChart(ind: number) {
    this.hydroChartsArray.splice(ind, 1);
    this.charts.splice(ind, 1);
    this.hydrographs.splice(ind, 1);
  }
  public removeFreqChart() {
      this.fChartOptions = null;
  }
  //toggle charts
  public showHideCharts() {
      //if showCharts_btn is true == show the charts and showChartBtn_txt says "Hide"
      //if showCharts_btn is false == hide the charts and showChartBtn_txt says "Show"
      this.showCharts_btn = !this.showCharts_btn;
      if (this.showCharts_btn) this.showChartBtn_txt = "Hide";
      else this.showChartBtn_txt = "Show";
  }
  //want to edit the scenario. remove Result
  public editScenario(){
      this.scenarios.forEach((s) => {
          let areaWeighed = s.RegressionRegions.map(function (r) { return r.ID; }).indexOf(0);
          if (areaWeighed > -1) s.RegressionRegions.splice(areaWeighed,1); //remove the area weighted regRegion
          s.RegressionRegions.forEach((r)=>{
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
          newUnitWithSupTag = '(' + unit.substring(0,indexOfSup) + '<sup>' + unit.substring(indexOfSup+1) + '</sup>)';      
      else newUnitWithSupTag = unit;

      return newUnitWithSupTag;
  }
}
