//------------------------------------------------------------------------------
//----- sidebarComponent --------------------------------------------------------------
//------------------------------------------------------------------------------

//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+

// copyright:   2016 WiM - USGS
// authors:  Tonia Roddick USGS WiM

//Comments
//10.31.2016 tr - Created

//Import requirements
import { Component, OnInit, Inject }    from '@angular/core';
import { Observable }                   from 'rxjs/Observable';
import {URLSearchParams}                from '@angular/http';
//import { CommonModule } from '@angular/common';
import {ToasterContainerComponent, ToasterService}  from 'angular2-toaster/angular2-toaster';
import {Toast}                          from 'angular2-toaster/lib/toast';
//interfaces 
import { IRegion }                      from '../shared/region';
import { IRegressionRegion }            from '../shared/regressionRegion';
import { ICitation }                    from '../shared/citation';
import { IStatisticGroup }              from '../shared/statisticGroup';
import {IScenario}                      from '../shared/scenario';
import { IRegressionType }              from '../shared/regressionType';
import { IHydro }                       from '../shared/hydroChart';
import { IErrorValue }                  from '../shared/errorValues';

//services
import { NSSService }                   from '../services/nss.service';
import { CitationService }              from '../services/citations.service';
import { ChartService }                 from '../services/chart.service';
import { ScenarioService}               from '../services/scenario.service';

import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Component({
    //moduleId is used to keep templateurl relative path  
    moduleId: module.id,
    styleUrls: ['./sidebar.css'],
    selector: 'wim-sidebar',
    templateUrl: './sidebar.html'

})
export class SidebarComponent implements OnInit {
    //Properties    
    public doShow: boolean;
    //public selectedRegion: IRegion;
    public get selectedRegion(): IRegion { return this._nssService.selectedRegion; }; 
    public errorMessage: string;
    public regions: Array<IRegion>;
    public regressionTypes: Array<IRegressionType>;
    public statisticGroups: Array<IStatisticGroup>;
    public regressionRegions: Array<IRegressionRegion>; 
    public citations: Array<ICitation>;
    public scenarios: Array<IScenario>;
    public showWeights: boolean;
    public plotTypes: Array<string> = ['Frequency Plot', 'Hydrograph']; //Hydrograph, Frequency Plot
    public recurrences: Array<number> = [2, 5, 10, 25, 50, 100, 200, 500]; // PKs
    public selectedPlot: string;
    //public Hydro: IHydro;
    public showChart: boolean; //show the Chart: Sidebar option

    //multiSelects
    //    regression regions
    private selectedRegRegionIDs: Array<number>; //multiselect populates this with those selected
    public get selectedRegRegion(): Array<IRegressionRegion> { return this._nssService.selectedRegRegions; };

    private myRRSettings: IMultiSelectSettings;
    private myRRTexts: IMultiSelectTexts;
    //   regression types
    private selectedRegTypeIDs: Array<number>;
    public get selectedRegType(): Array<IRegressionType> { return this._nssService.selectedRegressionTypes; }
    //private selectedRegType: Array<number>;
    private myRTSettings: IMultiSelectSettings;
    private myRTTexts: IMultiSelectTexts;
    //   statisticGrps
    private selectedStatGrpIDs: Array<number>;
    public get selectedStatGrp(): Array<IStatisticGroup> { return this._nssService.selectedStatGroups; };
    //private selectedStatGrp: Array<number>;
    private mySGSettings: IMultiSelectSettings;
    private mySGTexts: IMultiSelectTexts;

    constructor(
        @Inject(NSSService) private _nssService: NSSService,
       @Inject(ChartService) private _chartService: ChartService
    ) { }
    ngOnInit(): void {
        //populate this.regions with the regions from the service               
        this.doShow = true;
        this.selectedPlot = "";   
        this._nssService.regions.subscribe((regions: Array<IRegion>) => { this.regions = regions; });

        this._nssService.regressionRegions.subscribe((rr: Array<IRegressionRegion>) => {
            this.regressionRegions = rr;
            //remove from selectedRegRegion if not in response.
            if (this.selectedRegRegionIDs != undefined) {
                if (rr.length > 0) {
                    for (var rri = this.selectedRegRegionIDs.length; rri--;) {
                        let RRind = rr.map(function (eachrr) { return eachrr.ID; }).indexOf(this.selectedRegRegionIDs[rri]);
                        if (RRind < 0)
                            this.selectedRegRegionIDs.splice(rri, 1);
                    };
                } else this.selectedRegRegionIDs = [];
            }
        });
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

        this._nssService.scenarios.subscribe((s: Array<IScenario>) => {
            this.scenarios = s;  
            this.scenarios.forEach((s) => {
                //if there are results, show the chart buttons
                if (s.RegressionRegions[0].Results) this.showChart = true;
                else this.showChart = false;             
            });
        }); //bind to scenarios to get them on CalculateScenario submit button from sidebar
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
    }

    //Methods    
    //select of region. get regressionTypes, regressionRegions, and StatisticGrps
    public onRegSelect(r: IRegion): void {    
       // this.selectedRegion = r;        
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
        //make sure all values are populated
        this.scenarios.forEach((s) => {
            s.RegressionRegions.forEach((rr) => {
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
            //this._sharedService.setScenarios(this.scenarios);
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
            this.selectedPlot = p;
            this.selectedPlot = undefined;
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
}
