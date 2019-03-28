import { Component, OnInit } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { NSSService } from '../shared/services/app.service';
import { Region } from '../shared/interfaces/region';
import { Scenario } from '../shared/interfaces/scenario';
import { Statisticgroup } from '../shared/interfaces/statisticgroup';
import { Regressiontype } from '../shared/interfaces/regressiontype';
import { Regressionregion } from '../shared/interfaces/regressionregion';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from '../../../node_modules/angular-2-dropdown-multiselect';
import { ToasterContainerComponent, ToasterService } from 'angular2-toaster/angular2-toaster';
import { Toast } from 'angular2-toaster/src/toast';

@Component({
    selector: 'wim-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    public doShow: boolean;
    public showChart: boolean; //show the Chart: Sidebar option
    public plotTypes: Array<string> = ['Frequency Plot', 'Hydrograph']; //Hydrograph, Frequency Plot
    public selectedPlot: string; //which chart type they selected
    //regions
    //public get selectedRegion():Region {return this._nssService.selectedRegion;};
    public selectedRegion: Region;
    public regions: Array<Region>;

    //regression regions
    private selectedRegRegionIDs: Array<number>; //multiselect populates this with those selected
    //public get selectedRegRegion(): Array<Regressionregion> { return this._nssService.selectedRegRegions; };
    public selectedRegressionRegions: Array<Regressionregion>;
    public regressionRegions: Array<Regressionregion>;
    private myRRSettings: IMultiSelectSettings;
    private myMSTexts: IMultiSelectTexts;

    //regression types
    private selectedRegTypeIDs: Array<number>;
    public get selectedRegType(): Array<Regressiontype> {
        return this._nssService.selectedRegressionTypes;
    }
    public regressionTypes: Array<Regressiontype>;
    private myRTSettings: IMultiSelectSettings;

    //statisticGrps
    private selectedStatGrpIDs: Array<number>;
    public get selectedStatGrp(): Array<Statisticgroup> {
        return this._nssService.selectedStatGroups;
    }
    public statisticGroups: Array<Statisticgroup>;
    private mySGSettings: IMultiSelectSettings;

    //scenario
    public scenarios: Array<Scenario>;

    constructor(private _nssService: NSSService) {}

    ngOnInit() {
        this.doShow = true;
        this.selectedPlot = '';
        this.selectedRegressionRegions = [];
        //subscribe to regions
        this._nssService.getRegions();
        this._nssService.regions.subscribe((regions: Array<Region>) => {
            this.regions = regions;
        });
        this._nssService.selectedRegion.subscribe((r: Region) => {
            this.selectedRegion = r;
        });
        //subscribe to selected regression regions
        this._nssService.selectedRegRegions.subscribe((rr: Array<Regressionregion>) => {
            this.selectedRegressionRegions = rr;
        });
        //subscribe to regressionRegions
        this._nssService.regressionRegions.subscribe((rr: Array<Regressionregion>) => {
            this.regressionRegions = rr;
            //remove from selectedRegRegion if not in response.
            if (this.selectedRegRegionIDs != undefined) {
                if (rr.length > 0) {
                    for (var rri = this.selectedRegRegionIDs.length; rri--; ) {
                        let RRind = rr
                            .map(function(eachrr) {
                                return eachrr.ID;
                            })
                            .indexOf(this.selectedRegRegionIDs[rri]);
                        if (RRind < 0) this.selectedRegRegionIDs.splice(rri, 1);
                    }
                } else this.selectedRegRegionIDs = [];
            }
        });
        //subscribe to StatisticGroups
        this._nssService.statisticGroups.subscribe((sg: Array<Statisticgroup>) => {
            this.statisticGroups = sg;
            //remove from selectedStatGrp if not in response.
            if (this.selectedStatGrpIDs != undefined) {
                if (sg.length > 0) {
                    for (var si = this.selectedStatGrpIDs.length; si--; ) {
                        let SSind = sg
                            .map(function(eachsg) {
                                return eachsg.ID;
                            })
                            .indexOf(this.selectedStatGrpIDs[si]);
                        if (SSind < 0) this.selectedStatGrpIDs.splice(si, 1);
                    }
                } else this.selectedStatGrpIDs = [];
            }
        });
        //subscribe to regressionTypes
        this._nssService.regressionTypes.subscribe((rt: Array<Regressiontype>) => {
            this.regressionTypes = rt;
            //remove from selectedRegType if not in response
            if (this.selectedRegTypeIDs != undefined) {
                if (rt.length > 0) {
                    for (var rti = this.selectedRegTypeIDs.length; rti--; ) {
                        let RTind = rt
                            .map(function(eachrt) {
                                return eachrt.ID;
                            })
                            .indexOf(this.selectedRegTypeIDs[rti]);
                        if (RTind < 0) this.selectedRegTypeIDs.splice(rti, 1);
                    }
                } else this.selectedRegTypeIDs = [];
            }
        });
        //subscribe to scenario
        this._nssService.scenarios.subscribe((s: Array<Scenario>) => {
            this.scenarios = s;
            this.scenarios.forEach(s => {
                //if there are results, show the chart buttons
                if (s.regressionRegions.length > 0 && s.regressionRegions[0].results && s.statisticGroupName.indexOf('Peak-Flow') > -1)
                    this.showChart = true;
                else this.showChart = false;
            });
        });
        //settings for multiselect.. added max-width and font-size to the library's ts file directly
        this.myRRSettings = {
            pullRight: false,
            enableSearch: false,
            checkedStyle: 'glyphicon', //'checkboxes',
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
            checkedStyle: 'glyphicon', //'checkboxes',
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
            checkedStyle: 'glyphicon', //'checkboxes',
            buttonClasses: 'btn btn-default',
            selectionLimit: 0,
            closeOnSelect: false,
            showCheckAll: true,
            showUncheckAll: true,
            dynamicTitleMaxItems: 2,
            maxHeight: '300px'
        };
        this.myMSTexts = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            checked: 'checked',
            checkedPlural: 'checked',
            defaultTitle: 'Select'
        };
    } // end ngOnInit()

    // select Region. get regressionRegions, regressionTypes, StatisticGroups
    public onRegSelect(r: Region) {
        this.selectedRegRegionIDs = [];
        this.selectedStatGrpIDs = [];
        this.selectedRegTypeIDs = [];
        this._nssService.setSelectedRegion(r);
    }

    // select of regression region. set the selectedRegRegions
    public onRegressionRegSelect(): void {
        let selectedRegRegions: Array<Regressionregion> = new Array<Regressionregion>();
        this.selectedRegRegionIDs.forEach(srr => {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedRegRegions.push(
                this.regressionRegions.filter(function(rr) {
                    return rr.id === srr;
                })[0]
            );
        });
        this._nssService.setSelectedRegRegions(selectedRegRegions);
    }

    // select of statisticgrp. update regressionregions and regressiontypes and scenario for mainView
    public onStatGrpSelect(): void {
        let selectedStatGroups: Array<Statisticgroup> = new Array<Statisticgroup>();
        this.selectedStatGrpIDs.forEach(ssg => {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedStatGroups.push(
                this.statisticGroups.filter(function(rr) {
                    return rr.id === ssg;
                })[0]
            );
        });
        this._nssService.selectedStatGroups = selectedStatGroups;
    }

    // select of regression type. update statisticgrps and regressionregions
    public onRegTypeSelect(): void {
        let selectedRegTypes: Array<Regressiontype> = new Array<Regressiontype>();
        this.selectedRegTypeIDs.forEach(srt => {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedRegTypes.push(
                this.regressionTypes.filter(function(rr) {
                    return rr.id == srt;
                })[0]
            );
        });
        this._nssService.selectedRegressionTypes = selectedRegTypes;
    }

    // submit / Compute button click
    public CalculateScenario(): void {
        let ValueRequired: boolean = false;
        let totalWeight: number = Number(0);
        let numOfRegRegions: number = Number(0); // don't care about weights if only 1 regRegion
        // make sure all values are populated
        this.scenarios.forEach(s => {
            numOfRegRegions = s.regressionRegions.length;
            s.regressionRegions.forEach(rr => {
                if (numOfRegRegions > 1) totalWeight += Number(rr.percentWeight);
                rr.parameters.forEach(p => {
                    if (!p.value) {
                        ValueRequired = true;
                        p.missingVal = true;
                    } else p.missingVal = false;
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
            let weightToast: Toast = {
                type: 'warning',
                title: 'Error',
                body: '% Weights must equal 100%'
            };
            this._nssService.showToast(weightToast);
        } // end invalid
        else {
            // remove Citations, RegressionRegions.Parameters.OutOfRange and .missingVal props
            this.scenarios.forEach(s => {
                delete s.citations;
                s.regressionRegions.forEach(rr => {
                    rr.parameters.forEach(p => {
                        delete p.outOfRange;
                        delete p.missingVal;
                        delete p.seeDescription;
                    });
                });
            });
            // now post the scenario to get the results to pass to mainview
            let regTypesIDstring = this.selectedRegTypeIDs !== undefined ? this.selectedRegTypeIDs.join(',') : '';
            let statGrpIDstring = this.selectedStatGrpIDs !== undefined ? this.selectedStatGrpIDs.join(',') : '';
            let regRegionsIDstring = this.selectedRegRegionIDs !== undefined ? this.selectedRegRegionIDs.join(',') : '';
            let sParams: URLSearchParams = new URLSearchParams();
            sParams.set('regressionregions', regRegionsIDstring);
            sParams.set('regressiontypes', regTypesIDstring);
            sParams.set('statisticgroups', statGrpIDstring);
            this._nssService.postScenarios(this.selectedRegion.id, this.scenarios, sParams);
        }
    }

    // want to see a chart (which one?) ---- may delete, trying it on (ngModelChange)=" of select
    public selectChart(p: string): void {
        if (p !== '') {
            // this.selectedPlot = p;
            // this.selectedPlot = undefined;
            this._nssService.addChart(p);
        }
    }

    // number only allowed in Value
    _keyPress(event: any) {
        const pattern = /[0-9\+\-\.\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }
}
