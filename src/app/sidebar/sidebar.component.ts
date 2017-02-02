//   copyright:   2016 WiM - USGS
//   authors:  Tonia Roddick USGS-WiM
// 
//   purpose:  Sidebar of the application
//          
//   Comments
//12.06.2016 tr - Created
//

import { Component,Inject }         from '@angular/core';
import { URLSearchParams }          from '@angular/http';
import { NSSService}                from '../app.service';
import { IRegion }                  from '../shared/region';
import { IScenario }                from '../shared/scenario';
import { IStatisticGroup }          from '../shared/statisticgroup';
import { IRegressionType }          from '../shared/regressiontype';
import { IRegressionRegion }        from '../shared/regressionregion';
import { IMultiSelectOption, 
        IMultiSelectSettings, 
        IMultiSelectTexts }         from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { ToasterContainerComponent, 
        ToasterService }            from 'angular2-toaster/angular2-toaster';
import { Toast }                    from 'angular2-toaster/lib/toast';

@Component({
  selector: 'wim-sidebar',
  styleUrls: ['./sidebar.component.css' ],
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent {
  public doShow:boolean;
  public showChart: boolean; //show the Chart: Sidebar option
  public plotTypes: Array<string> = ['Frequency Plot', 'Hydrograph']; //Hydrograph, Frequency Plot
  public selectedPlot: string; //which chart type they selected
  //regions
  public get selectedRegion():IRegion {return this._nssService.selectedRegion;};
  public regions: Array<IRegion>;

  //regression regions
  private selectedRegRegionIDs: Array<number>; //multiselect populates this with those selected
  public get selectedRegRegion(): Array<IRegressionRegion> { return this._nssService.selectedRegRegions; };
  public regressionRegions: Array<IRegressionRegion>; 
  private myRRSettings: IMultiSelectSettings;
  private myRRTexts: IMultiSelectTexts;

  //regression types
  private selectedRegTypeIDs: Array<number>;
  public get selectedRegType(): Array<IRegressionType> { return this._nssService.selectedRegressionTypes; }
  public regressionTypes: Array<IRegressionType>;  
  private myRTSettings: IMultiSelectSettings;
  private myRTTexts: IMultiSelectTexts;

  //statisticGrps
  private selectedStatGrpIDs: Array<number>;
  public get selectedStatGrp(): Array<IStatisticGroup> { return this._nssService.selectedStatGroups; };
  public statisticGroups: Array<IStatisticGroup>;
  private mySGSettings: IMultiSelectSettings;
  private mySGTexts: IMultiSelectTexts;

  //scenario
  public scenarios: Array<IScenario>;

  constructor(private _nssService:NSSService) {}

  ngOnInit() {
    this.doShow=true;
    this.selectedPlot = "";
    //subscribe to regions
    this._nssService.regions.subscribe((regions:Array<IRegion>)=> {this.regions = regions;});
    //subscribe to regressionRegions
    this._nssService.regressionRegions.subscribe((rr:Array<IRegressionRegion>)=>{
        this.regressionRegions = rr;
        //remove from selectedRegRegion if not in response.
        if (this.selectedRegRegionIDs != undefined) {
            if (rr.length > 0) {
                for (var rri = this.selectedRegRegionIDs.length; rri--;) {
                    let RRind = rr.map(function (eachrr) { return eachrr.ID; }).indexOf(this.selectedRegRegionIDs[rri]);
                    if (RRind < 0) this.selectedRegRegionIDs.splice(rri, 1);
                };
            } else this.selectedRegRegionIDs = [];
        }
    });
    //subscribe to StatisticGroups
    this._nssService.statisticGroups.subscribe((sg: Array<IStatisticGroup>) => {
        this.statisticGroups = sg;
        //remove from selectedStatGrp if not in response.
        if (this.selectedStatGrpIDs != undefined) {
            if (sg.length > 0) {
                for (var si = this.selectedStatGrpIDs.length; si--;) {
                    let SSind = sg.map(function (eachsg) { return eachsg.ID; }).indexOf(this.selectedStatGrpIDs[si]);
                    if (SSind < 0)
                        this.selectedStatGrpIDs.splice(si, 1);
                };
            } else this.selectedStatGrpIDs = [];
        } 
    });
    //subscribe to regressionTypes
    this._nssService.regressionTypes.subscribe((rt: Array<IRegressionType>) => {
        this.regressionTypes = rt;
        //remove from selectedRegType if not in response
        if (this.selectedRegTypeIDs != undefined) {
            if (rt.length > 0) {
                for (var rti = this.selectedRegTypeIDs.length; rti--;) {
                    let RTind = rt.map(function (eachrt) { return eachrt.ID; }).indexOf(this.selectedRegTypeIDs[rti]);
                    if (RTind < 0)
                        this.selectedRegTypeIDs.splice(rti, 1);
                };
            } else this.selectedRegTypeIDs = [];
        }
    });
    //subscribe to scenario
    this._nssService.scenarios.subscribe((s: Array<IScenario>) => {
        this.scenarios = s;  
        this.scenarios.forEach((s) => {
            //if there are results, show the chart buttons
            if (s.RegressionRegions.length > 0 && s.RegressionRegions[0].Results && s.StatisticGroupName.indexOf("Peak-Flow") > -1) this.showChart = true;
            else this.showChart = false;             
        });
    });
    //settings for multiselect.. added max-width and font-size to the library's ts file directly
    this.myRRSettings = {
        pullRight: false,
        enableSearch: false,
        checkedStyle: 'glyphicon',//'checkboxes',
        buttonClasses: 'btn btn-default',
        selectionLimit: 0,
        closeOnSelect: false,
        showCheckAll: true,
        showUncheckAll: true,
        dynamicTitleMaxItems: 2,
        maxHeight: '300px'           
    }; 
    this.myRTSettings = {
        pullRight: false,
        enableSearch: false,
        checkedStyle: 'glyphicon',//'checkboxes',
        buttonClasses: 'btn btn-default',
        selectionLimit: 0,
        closeOnSelect: false,
        showCheckAll: true,
        showUncheckAll: true,
        dynamicTitleMaxItems: 2,
        maxHeight: '300px'
    }; 
    this.mySGSettings = {
        pullRight: false,
        enableSearch: false,
        checkedStyle: 'glyphicon',//'checkboxes',
        buttonClasses: 'btn btn-default',
        selectionLimit: 0,
        closeOnSelect: false,
        showCheckAll: true,
        showUncheckAll: true,
        dynamicTitleMaxItems: 2,
        maxHeight: '300px'
    }; 
    this.myRRTexts, this.myRTTexts, this.mySGTexts = {
        checkAll: 'Check all',
        uncheckAll: 'Uncheck all',
        checked: 'checked',
        checkedPlural: 'checked',            
        defaultTitle: 'Select'
    };
  }//end ngOnInit

  //select Region. get regressionRegions, regressionTypes, StatisticGroups
  public onRegSelect(r:IRegion){
    this.selectedRegRegionIDs = []; this.selectedStatGrpIDs = []; this.selectedRegTypeIDs = [];
    this._nssService.selectedRegion = r;      
  }

  //select of regression region. set the selectedRegRegions
  public onRegressionRegSelect(): void {   
      let selectedRegRegions: Array<IRegressionRegion> = new Array<IRegressionRegion>();
      this.selectedRegRegionIDs.forEach((srr) => {
          //for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
          selectedRegRegions.push(this.regressionRegions.filter(function (rr) { return rr.ID == srr; })[0]);
      }); 
      this._nssService.selectedRegRegions = selectedRegRegions;                  
  }

  //select of statisticgrp. update regressionregions and regressiontypes and scenario for mainView
  public onStatGrpSelect(): void {
      let selectedStatGroups: Array<IStatisticGroup> = new Array<IStatisticGroup>();
      this.selectedStatGrpIDs.forEach((ssg) => {
          //for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
          selectedStatGroups.push(this.statisticGroups.filter(function (rr) { return rr.ID == ssg; })[0]);
      });
      this._nssService.selectedStatGroups = selectedStatGroups;
      
  }

  //select of regression type. update statisticgrps and regressionregions
  public onRegTypeSelect(): void {
      let selectedRegTypes: Array<IRegressionType> = new Array<IRegressionType>();
      this.selectedRegTypeIDs.forEach((srt) => {
          //for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
          selectedRegTypes.push(this.regressionTypes.filter(function (rr) { return rr.ID == srt; })[0]);
      });
      this._nssService.selectedRegressionTypes = selectedRegTypes;        
  }

  //submit / Compute button click
  public CalculateScenario(): void {       
      let ValueRequired: boolean = false;
      let totalWeight: number = Number(0);
      let numOfRegRegions:number = Number(0); //don't care about weights if only 1 regRegion
      //make sure all values are populated
      this.scenarios.forEach((s) => {
          numOfRegRegions = s.RegressionRegions.length;
          s.RegressionRegions.forEach((rr) => {
              if (numOfRegRegions > 1) totalWeight += Number(rr.PercentWeight);
              rr.Parameters.forEach((p) => {
                  if (!p.Value) {
                      ValueRequired = true;
                      p.missingVal = true;                        
                  }
                  else p.missingVal = false;
              });
          });
      });
      
      if (ValueRequired) {
          let toast: Toast = {
              type: 'warning',
              title: 'Error',
              body: 'All values are required'
          };
          this._nssService.showToast(toast);          
      } else if (numOfRegRegions > 1 && (totalWeight < 100 || isNaN(totalWeight))) {
          let weightToast:Toast = { 
              type: 'warning',
              title: 'Error',
              body: '% Weights must equal 100%'
          };
          this._nssService.showToast(weightToast);
      }//end invalid
      else {
          //remove Citations, RegressionRegions.Parameters.OutOfRange and .missingVal props
          this.scenarios.forEach((s) => {
              delete s.Citations;
              s.RegressionRegions.forEach((rr) => {
                  rr.Parameters.forEach((p) => {
                      delete p.OutOfRange;
                      delete p.missingVal;
                      delete p.seeDescription;
                  });
              });
          });
          //now post the scenario to get the results to pass to mainview
          let regTypesIDstring = this.selectedRegTypeIDs !== undefined ? this.selectedRegTypeIDs.join(",") : '';
          let statGrpIDstring = this.selectedStatGrpIDs !== undefined ? this.selectedStatGrpIDs.join(",") : '';
          let regRegionsIDstring = this.selectedRegRegionIDs !== undefined ? this.selectedRegRegionIDs.join(",") : '';       
          let sParams: URLSearchParams = new URLSearchParams();
          sParams.set('regressionregions', regRegionsIDstring);
          sParams.set('regressiontypes', regTypesIDstring);
          sParams.set('statisticgroups', statGrpIDstring);
          this._nssService.postScenarios(this.selectedRegion.ID, this.scenarios, sParams);           
      }
  }

  //want to see a chart (which one?) ---- may delete, trying it on (ngModelChange)=" of select
  public selectChart(p: string): void {
      if (p !== "") {
          //this.selectedPlot = p;
          //this.selectedPlot = undefined;
          this._nssService.addChart(p);
      }
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
} //end class
