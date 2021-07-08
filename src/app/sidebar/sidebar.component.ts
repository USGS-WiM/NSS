import { Component, OnInit } from '@angular/core';
import { NSSService } from '../shared/services/app.service';
import { Region } from '../shared/interfaces/region';
import { Scenario } from '../shared/interfaces/scenario';
import { Statisticgroup } from '../shared/interfaces/statisticgroup';
import { Regressiontype } from '../shared/interfaces/regressiontype';
import { Regressionregion } from '../shared/interfaces/regressionregion';
import { IMultiSelectSettings, IMultiSelectTexts } from '../../../node_modules/angular-2-dropdown-multiselect';
import { Toast } from 'angular2-toaster/src/toast';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { AuthService } from 'app/shared/services/auth.service';
import { AddRegressionRegion } from '../shared/interfaces/addregressionregion';
import { LoaderService } from 'app/shared/services/loader.service';
declare let gtag: Function;

@Component({
    selector: 'wim-sidebar',
    host: { 'class': 'app-sidebar' },
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public doShow: boolean;
    public showChart: boolean; // show the Chart: Sidebar option
    //public plotTypes: Array<string> = ['Frequency Plot', 'Hydrograph']; // Hydrograph, Frequency Plot
    public plotTypes: Array<string> = ['Frequency Plot'];
    public selectedPlot: string; // which chart type they selected
    // regions
    // public get selectedRegion():Region {return this._nssService.selectedRegion;};
    public selectedRegion;
    public regions: Array<Region>;
    public loggedInRole;
    public region;
    public showCompute;
    public originalRegRegion;

    // regression regions
    public selectedRegRegionIDs: Array<number>; // multiselect populates this with those selected
    // public get selectedRegRegion(): Array<Regressionregion> { return this._nssService.selectedRegRegions; };
    public selectedRegressionRegions: Array<Regressionregion>;
    public regressionRegions: Array<Regressionregion>;
    private myRRSettings: IMultiSelectSettings;
    private myMSTexts: IMultiSelectTexts;

    // regression types
    public selectedRegTypeIDs: Array<number>;
    public regressionTypes: Array<Regressiontype>;
    private myRTSettings: IMultiSelectSettings;

    // statisticGrps
    public selectedStatGrpIDs: Array<number>;
    public statisticGroups: Array<Statisticgroup>;
    private mySGSettings: IMultiSelectSettings;

    // scenario
    public scenarios: Array<Scenario>;

    constructor(private _nssService: NSSService, private _authService: AuthService, private _toasterService: ToasterService, private _loaderService: LoaderService) { }

    ngOnInit() {
        this._nssService.currentCompute.subscribe(bool => this.showCompute = bool);
        this.loggedInRole = localStorage.getItem('loggedInRole');
        this._authService.loggedInRole().subscribe(role => {
            if (role === 'Administrator' || role === 'Manager') {
                this.loggedInRole = role;
            }
        });
        this.doShow = true;
        this.selectedPlot = '';
        this.selectedRegressionRegions = [];
        // subscribe to regions
        this._nssService.getRegions();
        this._nssService.regions.subscribe((regions: Array<Region>) => {
            this.regions = regions;
            if (regions.length === 0) {
                this._toasterService.clear();
                this._toasterService.pop('error', 'You have no assigned regions. Contact your administrator to add new regions.');
            }
            this._loaderService.hideFullPageLoad();
        });
        this._nssService.selectedRegion.subscribe((r: Region) => {
            if (r && r.id && this.regions) { this.selectedRegion = this.regions.find(reg => reg.id == r.id); }
            // this.clearSelections();
        });
        // subscribe to selected regression regions
        this._nssService.selectedRegRegions.subscribe((rr: Array<Regressionregion>) => {
            this.selectedRegressionRegions = rr;
        });
        // subscribe to regressionRegions
        this._nssService.regressionRegions.subscribe((rr: Array<Regressionregion>) => {
            this.regressionRegions = rr;
            // remove from selectedRegRegion if not in response.
            if (this.selectedRegRegionIDs !== undefined) {
                if (rr.length > 0) {
                    for (let rri = this.selectedRegRegionIDs.length; rri--;) {
                        const RRind = rr
                            .map(function (eachrr) {
                                return eachrr.id;
                            })
                            .indexOf(this.selectedRegRegionIDs[rri]);
                        if (RRind < 0) { this.selectedRegRegionIDs.splice(rri, 1); }
                    }
                } else { this.selectedRegRegionIDs = []; }
            }
        });
        // subscribe to StatisticGroups
        this._nssService.statisticGroups.subscribe((sg: Array<Statisticgroup>) => {
            this.statisticGroups = sg;
            // remove from selectedStatGrp if not in response.
            if (this.selectedStatGrpIDs !== undefined) {
                if (sg.length > 0) {
                    for (let si = this.selectedStatGrpIDs.length; si--;) {
                        const SSind = sg
                            .map(function (eachsg) {
                                return eachsg.id;
                            })
                            .indexOf(this.selectedStatGrpIDs[si]);
                        if (SSind < 0) { this.selectedStatGrpIDs.splice(si, 1); }
                    }
                } else { this.selectedStatGrpIDs = []; }
            }
        });
        // subscribe to regressionTypes
        this._nssService.regressionTypes.subscribe((rt: Array<Regressiontype>) => {
            this.regressionTypes = rt;
            // remove from selectedRegType if not in response
            if (this.selectedRegTypeIDs !== undefined) {
                if (rt.length > 0) {
                    for (let rti = this.selectedRegTypeIDs.length; rti--;) {
                        const RTind = rt
                            .map(function (eachrt) {
                                return eachrt.id;
                            })
                            .indexOf(this.selectedRegTypeIDs[rti]);
                        if (RTind < 0) { this.selectedRegTypeIDs.splice(rti, 1); }
                    }
                } else { this.selectedRegTypeIDs = []; }
            }
        });
        // subscribe to temRegRegion
        this._nssService.currentTempRegRegion.subscribe(originalRegRegion => this.originalRegRegion = originalRegRegion);
        // subscribe to scenario
        this._nssService.scenarios.subscribe((s: Array<Scenario>) => {
            this.scenarios = s;
            this.scenarios.forEach(sc => {
                // if there are results, show the chart buttons
                if (sc.regressionRegions.length > 0 && sc.regressionRegions[0].results && sc.statisticGroupName.indexOf('Peak-Flow') > -1) {
                    this.showChart = true;
                } else { this.showChart = false; }
            });
            this._loaderService.hideFullPageLoad();
        });
        // settings for multiselect.. added max-width and font-size to the library's ts file directly
        this.myRRSettings = {
            pullRight: false,
            enableSearch: false,
            checkedStyle: 'glyphicon', // 'checkboxes',
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
            checkedStyle: 'glyphicon', // 'checkboxes',
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
            checkedStyle: 'glyphicon', // 'checkboxes',
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
        this.originalRegRegion = [];
        this._nssService.showTempRegRegion(this.originalRegRegion);
        this._loaderService.showFullPageLoad();
        this.selectedRegRegionIDs = [];
        this.selectedStatGrpIDs = [];
        this.selectedRegTypeIDs = [];
        this.region = r;
        this._nssService.setSelectedRegion(r);
    }

    // select of regression region. set the selectedRegRegions
    public onRegressionRegSelect(): void {
        const selectedRegRegions: Array<Regressionregion> = new Array<Regressionregion>();
        this.selectedRegRegionIDs.forEach(srr => {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedRegRegions.push(
                this.regressionRegions.filter(function (rr) {
                    return rr.id === srr;
                })[0]
            );
        });
        this._nssService.setSelectedRegRegions(selectedRegRegions);
    }

    // select of statisticgrp. update regressionregions and regressiontypes and scenario for mainView
    public onStatGrpSelect(): void {
        const selectedStatGroups: Array<Statisticgroup> = new Array<Statisticgroup>();
        this.selectedStatGrpIDs.forEach(ssg => {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedStatGroups.push(
                this.statisticGroups.filter(function (rr) {
                    return rr.id === ssg;
                })[0]
            );
        });
        this._nssService.selectedStatGroups = selectedStatGroups;
    }

    // select of regression type. update statisticgrps and regressionregions
    public onRegTypeSelect(): void {
        const selectedRegTypes: Array<Regressiontype> = new Array<Regressiontype>();
        this.selectedRegTypeIDs.forEach(srt => {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedRegTypes.push(
                this.regressionTypes.filter(function (rr) {
                    return rr.id === srt;
                })[0]
            );
        });
        this._nssService.selectedRegressionTypes = selectedRegTypes;
    }

    // submit / Compute button click
    public CalculateScenario(): void {
        //store original regression regions
        this.originalRegRegion = this.scenarios[0].regressionRegions;
        this._nssService.showTempRegRegion(this.originalRegRegion);
        this._loaderService.showFullPageLoad();
        let ValueRequired = false;
        let totalWeight: number = Number(0);
        let numOfRegRegions: number = Number(0); // don't care about weights if only 1 regRegion
        // make sure all values are populated
        this.scenarios.forEach(s => {
            numOfRegRegions = s.regressionRegions.length;
            s.regressionRegions.forEach(rr => {
                if (numOfRegRegions > 1) { totalWeight += Number(rr.percentWeight); }
                rr.parameters.forEach(p => {
                    if (p.value == null) {
                        ValueRequired = true;
                        p.missingVal = true;
                    } else { p.missingVal = false; }
                });
            });
        });

        if (ValueRequired) {
            const toast: Toast = {
                type: 'warning',
                title: 'Error',
                body: 'All values are required'
            };
            this._nssService.showToast(toast);
            this._loaderService.hideFullPageLoad();
        } /*else if (numOfRegRegions > 1 && (totalWeight < 100 || isNaN(totalWeight))) {
            const weightToast: Toast = {
                type: 'warning',
                title: 'Error',
                body: '% Weights must equal 100%'
            };
            this._nssService.showToast(weightToast);
        }*/ // end invalid
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
            const regTypesIDstring = this.selectedRegTypeIDs !== undefined ? this.selectedRegTypeIDs.join(',') : '';
            const sParams = '?regressiontypes=' + regTypesIDstring;
            this._nssService.postScenarios(this.selectedRegion.id, this.scenarios, sParams);
            gtag('event', 'click', { 'event_category': 'Compute', 'event_label': 'Region: ' + this.selectedRegion.name + ' Statistic Group: ' + this.getCode(this.selectedStatGrpIDs, this.statisticGroups) + " Stat Label: " + this.getCode(this.selectedRegTypeIDs, this.regressionTypes)});
        }
    }

    public getCode(IDs, fullArray) {
        if (IDs.length == 0) {
            return("all");
        } else {
            var codes = [];
            IDs.forEach(y => {
                fullArray.forEach(z => {
                    if (y === z.id) {
                        codes.push(z.code);
                    }
                });
            });
            return(codes.join(', '));
        }
    }

    // clear all selected stat groups, reg regions and reg types
    public clearSelections() {
        this.originalRegRegion = [];
        this._nssService.showTempRegRegion(this.originalRegRegion);
        this._loaderService.showFullPageLoad();
        this.selectedStatGrpIDs = [];
        this.selectedRegRegionIDs = [];
        this.selectedRegTypeIDs = [];
        this._nssService.setSelectedRegion(this.region);
    }

    // want to see a chart (which one?) ---- may delete, trying it on (ngModelChange)=" of select
    public selectChart(p: string): void {
        if (p !== '') {
            // this.selectedPlot = p;
            // this.selectedPlot = undefined;
            this._nssService.addChart(p);
        }
    }

    public showAddRegRegion() {
        const addRegRegForm: AddRegressionRegion = {
            show: true,
            regRegionID: null
        }
        this._nssService.setAddRegressionRegionModal(addRegRegForm);
    }

    // number only allowed in Value
    _keyPress(event: any) {
        const pattern = /[0-9\+\-\.\ ]/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }
}
