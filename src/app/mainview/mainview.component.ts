//   copyright:   2016 WiM - USGS
//   authors:  Tonia Roddick USGS-WiM
// 
//   purpose:  Main view of the application
//          
//   Comments
//12.06.2016 tr - Created
//

import { Component, Inject, ViewChild }          from '@angular/core';
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
  private DIMLESS_ARRAY = [[0.45, 0.27], [0.50, 0.37], [0.55, 0.46], [0.60, 0.56], [0.65, 0.67], [0.70, 0.76], [0.75, 0.86], [0.80, 0.92], [0.85, 0.97],
                [0.90, 1.00], [0.95, 1.00], [1.00, 0.98], [1.05, 0.95], [1.10, 0.90], [1.15, 0.84], [1.20, 0.78], [1.25, 0.71], [1.30, 0.65], [1.35, 0.59],
                [1.40, 0.54], [1.45, 0.48], [1.50, 0.44], [1.55, 0.39], [1.60, 0.36], [1.65, 0.32], [1.70, 0.30]];


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
              this.hydrograph = { recurrence: null, lagTime: null, showExtraSettings: false, axis: 'BottomX', type_BX: 'linear', type_LY: 'linear', 
                                    majorTic_BX: true, majorGrid_BX: true, minorTic_BX: true, minorGrid_BX:true, 
                                    majorTic_LY: true,majorGrid_LY:true, minorTic_LY:true, minorGrid_LY:true };
                                    
              this.showChartBtn_txt = "Hide"; this.showCharts_btn = true;
              //get array of recurrences from result                
              this.scenarios.forEach((s) => {
                  s.RegressionRegions.forEach((rr) => {
                      if (rr.Results) {                          
                          this.hChartXAxisValues = [];
                          rr.Results.forEach((R) => {
                             this.hChartXAxisValues.push(R.code);
                          });
                          //use constant array to populate chart [][]
                          let rec:number = rr.Results.filter(r => r.code == this.hChartXAxisValues[0])[0].Value;                          
                          this.hChartValues = this.DIMLESS_ARRAY.map(p => { return [p[0]*1, p[1]*rec] });
                      }//
                  });
              });//end foreach scenario
              this.hydrograph.recurrence = this.hChartXAxisValues[0]; //default to first one;
              this.hydrograph.lagTime = 1; //default value to change later
              this.hydrograph.title_BX = 'Time (hours)\nHydrograph for ' + this.hydrograph.lagTime + '-yr interval\nNOTE: May not represent actual hydrograph';
              this.hydrograph.title_LY = 'Discharge (cubic meters per second)';
              // http://api.highcharts.com/highcharts   , panning: true, panKey: 'shift'
              this.hChartOptions = {
                  chart: {type:'line', zoomType:'xy'},
                  title: { text: 'Hydrograph (Recurrence Interval: ' + this.hydrograph.recurrence + ')' },
                  series: [{
                      data: this.hChartValues
                  }],
                  tooltip: {
                      formatter: function () {
                          var s = '<b>(' + this.x + ', ' + this.y + ')</b>';                          
                          return s;
                      }
                  },
                  xAxis: {                      
                      title: { text: 'Time (hours)<br/>Hydrograph for ' + this.hydrograph.lagTime + '-yr interval<br/>NOTE: May not represent actual hydrograph' },
                      gridLineWidth: 1, //major grid (0/1)
                      minorGridLineWidth: 1,   //minor grid (0/1)
                      tickWidth: 1, //major tic (0/1)
                      minorTickWidth: 1, //minor tic (0/1)
                                
                      minorTickInterval: 'auto', //line 191-196 needed for above to be changed                       
                      minorTickLength:5,
                      tickPosition: 'inside',
                      minorTickPosition: 'inside',
                      tickColor: '#000000',
                      minorTickColor: '#000000' 
                  },
                  yAxis: {
                      title: { text: 'Discharge (cubic meters per second)' },                 
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
  
  //fake frequency plot array
  private getFreqData(): Array<number>[] {
      return [[2, 7.9567], [2.5, 10.181], [3.33, 13.76], [4, 15.997], [5, 19.113], [10, 31.292], [20, 47.188], [50, 72.142], [100, 98.848], [200, 126.48], [504, 173.3]];
  }  
  //when chart loads, store an instance of the highchart to access functions
  private saveInstance(chartInst) {
        this.charts.push(chartInst);
  };
  //changed values, refresh the hydrograph with new data
  public refreshHydrograph(i, values) {
      let hchartOpt: IChart = this.hydroChartsArray[i];
      let h: IHydro = this.hydrographs[i];

      //top title (updated with which recurrence interval they choose)
      hchartOpt.title.text = 'Hydrograph (Recurrence Interval: ' + h.recurrence + ')';

      //see if titles were changed (if they didn't manually change it, apply update to lagtime)
      if (values.title_BX._pristine) {
          hchartOpt.xAxis.title.text = 'Time (hours)<br/>Hydrograph for ' + h.lagTime + '-yr interval<br/>NOTE: May not represent actual hydrograph';
          h.title_BX = 'Time (hours)\nHydrograph for ' + h.lagTime + '-yr interval\nNOTE: May not represent actual hydrograph';
          this.charts[i].xAxis[0].setTitle({ text: hchartOpt.xAxis.title.text }); //title of xAxis
      }
      
      this.hydroChartsArray[i] = hchartOpt;
      this.charts[i].setTitle({ text: hchartOpt.title.text }); //title of chart  

      //get the corresponding results value for the recurrence chosen to update the chart data
      let recValue:number;
      this.scenarios.forEach((s) => {
          s.RegressionRegions.forEach((rr) => {
            if (rr.Results) 
                recValue = rr.Results.filter(r => r.code == h.recurrence)[0].Value;            
        });
      });                
      this.charts[i].series[0].setData(this.DIMLESS_ARRAY.map(p => { return [p[0]*h.lagTime, p[1]*recValue]})); //update data
      this.hydrographs[i].showExtraSettings = false; //just close the extra settings part
  }
  //clicked Bottom x & type == update chart
  public setXaxisType(i, newType:string){      
      //converting to logarithmic gets ugly (line draws partially outside of plot area) due to the minorTickInterval being set to auto
      if (newType == 'logarithmic') {     
          //this makes minor ticks and grid lines disappear..turn them off and uncheck boxes
          this.charts[i].xAxis[0].update({tickInterval: 'auto',minorGridLineWidth: 0, minorTickWidth: 0});           
          this.hydrographs[i].minorGrid_BX = false; this.hydrographs[i].minorTic_BX = false;     
      } else {
          this.charts[i].xAxis[0].update({tickInterval: null});       
      }
      this.charts[i].xAxis[0].update({ type: newType});
  }
  //clicked Left y & type == update chart
  public setYaxisType(i, newType:string){      
      //converting to logarithmic gets ugly (line draws partially outside of plot area) due to the minorTickInterval being set to auto
      if (newType == 'logarithmic') {
          //this makes minor ticks and grid lines disappear..turn them off and uncheck boxes
          this.charts[i].yAxis[0].update({tickInterval: 'auto', minorGridLineWidth: 0, minorTickWidth: 0});
          this.hydrographs[i].minorGrid_LY = false; this.hydrographs[i].minorTic_LY = false;   

      } else {
          this.charts[i].yAxis[0].update({tickInterval: null});          
      }
      this.charts[i].yAxis[0].update({ type: newType});        
  }
  //update title on x axis as they type
  public updateBXtitle(i){
      let hchartOpt: IChart = this.hydroChartsArray[i];
      hchartOpt.xAxis.title.text = this.hydrographs[i].title_BX.replace(/\n/g, '<br/>'); //bottom title      
      this.charts[i].xAxis[0].setTitle({ text: hchartOpt.xAxis.title.text }); //title of xAxis
  }
  //update title on y axis as they type
  public updateLYtitle(i){
      let hchartOpt: IChart = this.hydroChartsArray[i];
      hchartOpt.yAxis.title.text = (this.hydrographs[i].title_LY.replace(/\n/g, '<br/>'));      
      this.charts[i].yAxis[0].setTitle({ text: hchartOpt.yAxis.title.text }); //title of yAxis
  }
  //update ticks or grids on chart (0/1)
  public setXChartLines(i:number, whichOne:string, value:boolean){
      /* gridLineWidth: 1 //major grid (0/1)    minorGridLineWidth: 1 //minor grid (0/1)   tickWidth: 1 //major tic (0/1)  minorTickWidth: 1 //minor tic (0/1)  */
      switch (whichOne){
          case 'gridLineWidth':
            if (value) this.charts[i].xAxis[0].update({gridLineWidth: 1});
            else this.charts[i].xAxis[0].update({gridLineWidth: 0});
            break;
          case 'minorGridLineWidth':
            if (value) this.charts[i].xAxis[0].update({minorGridLineWidth: 1});
            else  this.charts[i].xAxis[0].update({minorGridLineWidth: 0});
            break;
          case 'tickWidth':
            if (value) this.charts[i].xAxis[0].update({tickWidth: 1});
            else this.charts[i].xAxis[0].update({tickWidth: 0});
            break;
          case 'minorTickWidth':
            if (value) this.charts[i].xAxis[0].update({minorTickWidth: 1});
            else this.charts[i].xAxis[0].update({minorTickWidth: 0});
            break;
      }      
  }
  //update ticks or grids on chart (0/1)
  public setYChartLines(i:number, whichOne:string, value:boolean){
      /* gridLineWidth: 1 //major grid (0/1)    minorGridLineWidth: 1 //minor grid (0/1)   tickWidth: 1 //major tic (0/1)  minorTickWidth: 1 //minor tic (0/1)  */
      switch (whichOne){
          case 'gridLineWidth':
            if (value) this.charts[i].yAxis[0].update({gridLineWidth: 1});
            else this.charts[i].yAxis[0].update({gridLineWidth: 0});
            break;
          case 'minorGridLineWidth':
            if (value) this.charts[i].yAxis[0].update({minorGridLineWidth: 1});
            else  this.charts[i].yAxis[0].update({minorGridLineWidth: 0});
            break;
          case 'tickWidth':
            if (value) this.charts[i].yAxis[0].update({tickWidth: 1});
            else this.charts[i].yAxis[0].update({tickWidth: 0});
            break;
          case 'minorTickWidth':
            if (value) this.charts[i].yAxis[0].update({minorTickWidth: 1});
            else this.charts[i].yAxis[0].update({minorTickWidth: 0});
            break;
      }          
  }
  //show/hide additional user settings options for the chart (axis, title, etc)
  public showHideAdditionalChartSettings(i){
      this.hydrographs[i].showExtraSettings = !this.hydrographs[i].showExtraSettings;
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
