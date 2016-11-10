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
import { Component, OnInit, Inject } from '@angular/core';
import {URLSearchParams}    from '@angular/http';
//import { CommonModule } from '@angular/common';

//interfaces 
import { IRegion } from '../shared/region';
import { IRegressionRegion } from '../shared/regressionRegion';
import { ICitation } from '../shared/citation';
import { IStatisticGroup } from '../shared/statisticGroup';
import {IScenario} from '../shared/scenario';
import { IRegressionType } from '../shared/regressionType';

//services
import { RegionService } from '../services/regions.service';
import {CitationService } from '../services/citations.service';
import { SharedService } from '../services/eventSharing.service';
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
    public selectedRegion: IRegion;
    public errorMessage: string;
    public regions: IRegion[];
    public regressionTypes: IRegressionType[];
    public statisticGroups: IStatisticGroup[];
    public regressionRegions: IRegressionRegion[];    
    public citations: ICitation[];

    //multiSelects
    //    regression regions
    private selectedRegRegion: number[];   
    private myRRSettings: IMultiSelectSettings;
    private myRRTexts: IMultiSelectTexts;
    //   regression types
    private selectedRegType: number[];
    private myRTSettings: IMultiSelectSettings;
    private myRTTexts: IMultiSelectTexts;
    //   statisticGrps
    private selectedStatGrp: number[];
    private mySGSettings: IMultiSelectSettings;
    private mySGTexts: IMultiSelectTexts;

    constructor(
       @Inject(RegionService) private _regionService: RegionService,
       @Inject(SharedService) private _sharedService: SharedService,
       @Inject(CitationService) private _citationService: CitationService
    ) { }
    ngOnInit(): void {
        //populate this.regions with the regions from the service               
        this.doShow = true; 
        this._regionService.getRegions().subscribe(reg => this.regions = reg, error => this.errorMessage = <any>error);       
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
        this.selectedRegion = r;
        this._sharedService.setRegion(r.Name); //update MainView
        this._sharedService.clearRegressionRegions();
        this._sharedService.clearStatisticGroups(); 
        this._sharedService.clearRegressionTypes();
        //clear out dropdowns and selecteds
        this.regressionRegions = []; this.regressionTypes = []; this.statisticGroups = [];
        this.selectedRegRegion = []; this.selectedRegType = []; this.selectedStatGrp = [];
        //get RegressionRegions
        this._regionService.getRegionRegressionRegions(r.ID).subscribe(rr => {
            this.regressionRegions = rr;
            this.regressionRegions.forEach((r) => {
                r.id = r.ID; r.name = r.Name; //need id and name for multiselect
            });
        }, error => this.errorMessage = <any>error);
        //get RegressionTypes
        this._regionService.getRegionRegressionTypes(r.ID).subscribe(rt => {
            this.regressionTypes = rt;
            this.regressionTypes.forEach((rt) => {
                rt.id = rt.ID; rt.name = rt.Name; //need id and name for multiselect
            });
        }, error => this.errorMessage = <any>error);
        //get StatisticGroups
        this._regionService.getRegionStatisticGrps(r.ID).subscribe(sg => {
            this.statisticGroups = sg;
            this.statisticGroups.forEach((st) => {
                st.id = st.ID; st.name = st.Name; //need id and name for multiselect
            });
        }, error => this.errorMessage = <any>error);
        //get scenarios and tell mainView
        this._regionService.getRegionScenario(r.ID).subscribe(sc => {            
            sc.forEach((s) => {
                let i = s.Links[0].Href.indexOf('?');
                let param = s.Links[0].Href.substring(i+1);
                this._citationService.getCitations(new URLSearchParams(param)).subscribe(c => {
                    s.Citations = c;
                });
            });
            this._sharedService.setScenarios(sc);
        });
    }

    //select of regression region. update statisticgrps and regressiontypes and scenario for mainView
    public onRegressionRegSelect(): void {
        let regRegionsIDstring = this.selectedRegRegion !== undefined? this.selectedRegRegion.join(","): ''; 
        let regTypesIDstring = this.selectedRegType !== undefined ? this.selectedRegType.join(","): '';
        let statGrpIDstring = this.selectedStatGrp !== undefined ? this.selectedStatGrp.join(",") : '';
        //get selected regression region objects array to send to service to then update the mainView
        let selectedRegressionRegionObjects = []; 
        this.regressionRegions.forEach((rr) => {
            if (this.selectedRegRegion.map(function (selRR) { return selRR }).indexOf(rr.ID) > -1) {
                selectedRegressionRegionObjects.push(rr);
            }
        });
        this._sharedService.setRegRegions(selectedRegressionRegionObjects); //update mainView

        //params
        let regTypeParams: URLSearchParams = new URLSearchParams();
        regTypeParams.set('regressionregions', regRegionsIDstring);
        regTypeParams.set('statisticgroups', statGrpIDstring);
        //get RegressionTypes
        this._regionService.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams).subscribe(rt => {
            this.regressionTypes = rt;
            //remove from selectedRegRegion if not in response
            for (var rti = this.selectedRegType.length; rti--;) {
                let RTind = rt.map(function (eachrt) { return eachrt.ID; }).indexOf(this.selectedRegType[rti]);
                if (RTind < 0) 
                    this.selectedRegType.splice(rti, 1);                
            };
            //if some removed, need to send to service to update main view again
            let selectedRegressionTypeObjects = [];
            this.regressionTypes.forEach((rt) => {
                if (this.selectedRegType.map(function (selRT) { return selRT }).indexOf(rt.ID) > -1) {
                    selectedRegressionTypeObjects.push(rt);
                }
            });
            this._sharedService.setRegTypes(selectedRegressionTypeObjects); //update mainView
            this.regressionTypes.forEach((rt) => {               
                rt.id = rt.ID; rt.name = rt.Name; //need id and name for multiselect
            });
        }, error => this.errorMessage = <any>error);

        //params
        let statGrpParams: URLSearchParams = new URLSearchParams();
        statGrpParams.set('regressionregions', regRegionsIDstring);
        statGrpParams.set('regressiontypes', regTypesIDstring);        
        //get StatisticGroups
        this._regionService.getRegionStatisticGrps(this.selectedRegion.ID, statGrpParams).subscribe(sg => {
            this.statisticGroups = sg;
            //remove from selectedStatGrp if not in response.
            for (var si = this.selectedStatGrp.length; si--;) {
                let SSind = sg.map(function (eachsg) { return eachsg.ID; }).indexOf(this.selectedStatGrp[si]);
                if (SSind < 0)
                    this.selectedStatGrp.splice(si, 1);
            };            
            //if some removed, need to send to service to update main view again
            let selectedStatGrpObjects = [];
            this.statisticGroups.forEach((st) => {
                if (this.selectedStatGrp.map(function (selSG) { return selSG }).indexOf(st.ID) > -1) {
                    selectedStatGrpObjects.push(st);
                }
            });
            this._sharedService.setStatisticGroups(selectedStatGrpObjects); //update mainView
            this.statisticGroups.forEach((st) => {
                st.id = st.ID; st.name = st.Name; //need id and name for multiselect
            });
        }, error => this.errorMessage = <any>error);       

        //params
        let scenarioParams: URLSearchParams = new URLSearchParams();
        scenarioParams.set('regressionregions', regRegionsIDstring);
        scenarioParams.set('regressiontypes', regTypesIDstring);   
        scenarioParams.set('statisticgroups', statGrpIDstring);
        //get scenarios and tell mainView
        this._regionService.getRegionScenario(this.selectedRegion.ID, scenarioParams).subscribe(sc => {
            sc.forEach((s) => {
                let i = s.Links[0].Href.indexOf('?');
                let param = s.Links[0].Href.substring(i + 1);
                this._citationService.getCitations(new URLSearchParams(param)).subscribe(c => {
                    s.Citations = c;
                });
            });
            this._sharedService.setScenarios(sc);
        });         
    }

    //select of statisticgrp. update regressionregions and regressiontypes and scenario for mainView
    public onStatGrpSelect(): void {        
        let statGrpIDstring = this.selectedStatGrp !== undefined ? this.selectedStatGrp.join(",") : '';
        let regRegionsIDstring = this.selectedRegRegion !== undefined ? this.selectedRegRegion.join(",") : '';
        let regTypesIDstring = this.selectedRegType !== undefined ? this.selectedRegType.join(",") : '';

        //get selected statistic groups objects array to send to service to then update the mainView
        let selectedStatisticGrpObjects = [];
        this.statisticGroups.forEach((sg) => {
            if (this.selectedStatGrp.map(function (selSG) { return selSG }).indexOf(sg.ID) > -1) {
                selectedStatisticGrpObjects.push(sg);
            }
        });
        this._sharedService.setStatisticGroups(selectedStatisticGrpObjects); //update mainView

        //params
        let regTypeParams: URLSearchParams = new URLSearchParams();
        regTypeParams.set('regressionregions', regRegionsIDstring);
        regTypeParams.set('statisticgroups', statGrpIDstring);
        //get RegressionTypes
        this._regionService.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams).subscribe(rt => {
            this.regressionTypes = rt;
            //remove from selectedRegType if not in response.
            for (var rti = this.selectedRegType.length; rti--;) {
                let RTind = rt.map(function (eachrt) { return eachrt.ID; }).indexOf(this.selectedRegType[rti]);
                if (RTind < 0)
                    this.selectedRegType.splice(rti, 1);
            };            
            //if some removed, need to send to service to update main view again
            let selectedRegressionTypeObjects = [];
            this.regressionTypes.forEach((rt) => {
                if (this.selectedRegType.map(function (selRT) { return selRT }).indexOf(rt.ID) > -1) {
                    selectedRegressionTypeObjects.push(rt);
                }
            });
            this._sharedService.setRegTypes(selectedRegressionTypeObjects); //update mainView
            this.regressionTypes.forEach((rt) => {
                rt.id = rt.ID; rt.name = rt.Name; //need id and name for multiselect
            });
        }, error => this.errorMessage = <any>error);

        //params
        let regRegionParams: URLSearchParams = new URLSearchParams();
        regRegionParams.set('statisticgroups', statGrpIDstring);
        regRegionParams.set('regressiontypes', regTypesIDstring);
        //get RegressionRegions
        this._regionService.getRegionRegressionRegions(this.selectedRegion.ID, regRegionParams).subscribe(rr => {
            this.regressionRegions = rr;
            //remove from selectedRegRegion if not in response.
            for (var rri = this.selectedRegRegion.length; rri--;) {
                let RRind = rr.map(function (eachrr) { return eachrr.ID; }).indexOf(this.selectedRegRegion[rri]);
                if (RRind < 0)
                    this.selectedRegRegion.splice(rri, 1);
            };     
            //if some removed, need to send to service to update main view again
            let selectedRegressionRegObjects = [];
            this.regressionRegions.forEach((rr) => {
                if (this.selectedRegRegion.map(function (selRR) { return selRR }).indexOf(rr.ID) > -1) {
                    selectedRegressionRegObjects.push(rr);
                }
            });
            this._sharedService.setRegRegions(selectedRegressionRegObjects); //update mainView
            this.regressionRegions.forEach((r) => {
                r.id = r.ID; r.name = r.Name; //need id and name for multiselect
            });
        }, error => this.errorMessage = <any>error);

        //params
        let scenarioParams: URLSearchParams = new URLSearchParams();
        scenarioParams.set('regressionregions', regRegionsIDstring);
        scenarioParams.set('regressiontypes', regTypesIDstring);
        scenarioParams.set('statisticgroups', statGrpIDstring);
        //get scenarios and tell mainView
        this._regionService.getRegionScenario(this.selectedRegion.ID, scenarioParams).subscribe(sc => {
            sc.forEach((s) => {
                let i = s.Links[0].Href.indexOf('?');
                let param = s.Links[0].Href.substring(i + 1);
                this._citationService.getCitations(new URLSearchParams(param)).subscribe(c => {
                    s.Citations = c;
                });
            });
            this._sharedService.setScenarios(sc);
        });       
    }

    //select of regression type. update statisticgrps and regressionregions
    public onRegTypeSelect(): void {
        let regTypesIDstring = this.selectedRegType !== undefined ? this.selectedRegType.join(",") : '';
        let statGrpIDstring = this.selectedStatGrp !== undefined ? this.selectedStatGrp.join(",") : '';
        let regRegionsIDstring = this.selectedRegRegion !== undefined ? this.selectedRegRegion.join(",") : '';        
        //get selected regression type objects array to send to service to then update the mainView
        let selectedRegressionTypeObjects = [];
        this.regressionRegions.forEach((rt) => {
            if (this.selectedRegType.map(function (selRT) { return selRT }).indexOf(rt.ID) > -1) {
                selectedRegressionTypeObjects.push(rt);
            }
        });
        this._sharedService.setRegTypes(selectedRegressionTypeObjects); //update mainView

        //params
        let statGrpParams: URLSearchParams = new URLSearchParams();
        statGrpParams.set('regressionregions', regRegionsIDstring);
        statGrpParams.set('regressiontypes', regTypesIDstring);
        //get StatisticGroups
        this._regionService.getRegionStatisticGrps(this.selectedRegion.ID, statGrpParams).subscribe(sg => {
            this.statisticGroups = sg;
            //remove from selectedStatGrp if not in response.
            for (var si = this.selectedStatGrp.length; si--;) {
                let SSind = sg.map(function (eachsg) { return eachsg.ID; }).indexOf(this.selectedStatGrp[si]);
                if (SSind < 0)
                    this.selectedStatGrp.splice(si, 1);
            };  
            //if some removed, need to send to service to update main view again
            let selectedStatGrpObjects = [];
            this.statisticGroups.forEach((sg) => {
                if (this.selectedStatGrp.map(function (selSG) { return selSG }).indexOf(sg.ID) > -1) {
                    selectedStatGrpObjects.push(sg);
                }
            });
            this._sharedService.setStatisticGroups(selectedStatGrpObjects); //update mainView     
            this.statisticGroups.forEach((st) => {
                st.id = st.ID; st.name = st.Name; //need id and name for multiselect
            });
        }, error => this.errorMessage = <any>error);

        //params
        let regRegionParams: URLSearchParams = new URLSearchParams();
        regRegionParams.set('statisticgroups', statGrpIDstring);
        regRegionParams.set('regressiontypes', regTypesIDstring);                
        //get RegressionRegions
        this._regionService.getRegionRegressionRegions(this.selectedRegion.ID, regRegionParams).subscribe(rr => {
            this.regressionRegions = rr;
            //remove from selectedRegRegion if not in response.
            for (var rri = this.selectedRegRegion.length; rri--;) {
                let RRind = rr.map(function (eachrr) { return eachrr.ID; }).indexOf(this.selectedRegRegion[rri]);
                if (RRind < 0)
                    this.selectedRegRegion.splice(rri, 1);
            };        
            //if some removed, need to send to service to update main view again
            let selectedRegRegObjects = [];
            this.regressionRegions.forEach((rr) => {
                if (this.selectedRegRegion.map(function (selRR) { return selRR }).indexOf(rr.ID) > -1) {
                    selectedRegRegObjects.push(rr);
                }
            });
            this._sharedService.setRegRegions(selectedRegRegObjects); //update mainView      
            this.regressionRegions.forEach((r) => {
                r.id = r.ID; r.name = r.Name; //need id and name for multiselect
            });
        }, error => this.errorMessage = <any>error);

        //params
        let scenarioParams: URLSearchParams = new URLSearchParams();
        scenarioParams.set('regressionregions', regRegionsIDstring);
        scenarioParams.set('regressiontypes', regTypesIDstring);
        scenarioParams.set('statisticgroups', statGrpIDstring);
        //get scenarios and tell mainView
        this._regionService.getRegionScenario(this.selectedRegion.ID, scenarioParams).subscribe(sc => {
            sc.forEach((s) => {
                let i = s.Links[0].Href.indexOf('?');
                let param = s.Links[0].Href.substring(i + 1);
                this._citationService.getCitations(new URLSearchParams(param)).subscribe(c => {
                    s.Citations = c;
                });
            });
            this._sharedService.setScenarios(sc);
        });    
    }
}