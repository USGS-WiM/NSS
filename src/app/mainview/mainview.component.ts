import { Component, OnInit, Inject, ViewChildren, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';
import { DOCUMENT } from "@angular/common";

import { Region } from '../shared/interfaces/region';
import { Regressionregion } from '../shared/interfaces/regressionregion';
import { Regressiontype } from '../shared/interfaces/regressiontype';
import { Statisticgroup } from '../shared/interfaces/statisticgroup';
import { Scenario } from '../shared/interfaces/scenario';
import { Parameter } from '../shared/interfaces/parameter';
import { Unittype } from '../shared/interfaces/unittype';
import { Equationresults } from '../shared/interfaces/equationresults';
import { Hydrochart } from '../shared/interfaces/hydrochart';
import { Freqchart } from '../shared/interfaces/freqchart';
import { Chart } from '../shared/interfaces/chart';
import { NSSService } from '../shared/services/app.service';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { Toast } from 'angular2-toaster/src/toast';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import * as Highcharts from 'highcharts';
import { AuthService } from 'app/shared/services/auth.service';
import { Router, NavigationStart } from '@angular/router';
import { SettingsService } from 'app/settings/settings.service';
import { ConfigService } from 'app/config.service';
import { Config } from 'app/shared/interfaces/config';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Citation } from 'app/shared/interfaces/citation';
import { AddRegressionRegion } from 'app/shared/interfaces/addregressionregion';
import { ManageCitation } from 'app/shared/interfaces/managecitations';
import { isBuffer } from 'util';


declare var MathJax: {
    Hub: { Queue };
};

@Component({
    selector: 'wim-mainview',
    templateUrl: './mainview.component.html',
    styleUrls: ['./mainview.component.scss']
})
export class MainviewComponent implements OnInit {
    @ViewChildren('inputsTable', { read: ViewContainerRef }) inputTable;
    @ViewChildren('resultsTable', { read: ViewContainerRef }) resultTable;
    @ViewChild('editScenarioForm', { static: true }) editScenarioForm;
    @ViewChild('values', { static: true }) public valuesRef: TemplateRef<any>;
    @ViewChild('add', { static: true }) public addRef: TemplateRef<any>;
    @ViewChild('CitationForm', { static: true }) citationForm;
    public newCitForm: FormGroup;
    public title: string;
    public resultsBack: boolean; // flag that swaps content on mainpage from scenarios w/o results to those with results
    public equationResults: Equationresults[]; // used in Appendix
    public showWeights: boolean; // if more than 1 regRegion, then show input for weighted
    public timestamp: Date; // display a time stamp when they first get here.
    public toast: Toast; // notification when values are required
    public selectedRegion;
    private navigationSubscription;
    public selectedRegressionRegion: Array<Regressionregion>;
    public originalRegRegion;
    public tempSelectedRegressionRegion: Array<Regressionregion>;

    public tempSelectedStatisticGrp: Array<Statisticgroup>;
    public scenarioCitations: any[];
    public get selectedStatisticGrp(): Array<Statisticgroup> {
        return this._nssService.selectedStatGroups;
    }

    public tempSelectedRegType: Array<Regressiontype>;
    public get selectedRegType(): Array<Regressiontype> {
        return this._nssService.selectedRegressionTypes;
    }
    public scenarios: Scenario[];
    // -+-+-+-+ Chart parts -+-+-+-+-+-+
    public hydrographs: Array<Hydrochart>; // holds all the IHydros so each chart has their own
    public hydroChartsArray: Chart[]; // holds all hydro charts that are desired.
    public hChartOptions: Chart; // hydro chart
    public hChartXAxisValues: string[]; // holds Recurrence Interval dropdown values for chart
    // public hChartYAxisText: string;               // chart y axis
    public fChartOptions: any; // frequency chart
    public fChartValues: Array<number>[]; // frequency data
    public showCharts_btn: boolean; // toggle button boolean
    public showChartBtn_txt: string; // string "show" / "hide"
    public selectedPlot: string; // which plot are they asking for ("Hydrograph" or "Frequency Plot")
    public charts: Array<any>; // chart instance for hydroChartsArray
    public freqChart: any; // chart instance for frequency plot
    public uniqueParameters: Array<Parameter>; // holds unique list of parameters
    public uniqueUnitTypes: Array<Unittype>; // holds unique list of unit types for parameters to show in appendix
    public multipleRegRegions: boolean; // if multiple regRegions, set this to true
    private DIMLESS_ARRAY = [
        [0.25, 0.12], [0.3, 0.16], [0.35, 0.21], [0.4, 0.26], [0.45, 0.33], [0.5, 0.4], [0.55, 0.49], [0.6, 0.58], [0.65, 0.67], [0.7, 0.76],
        [0.75, 0.84], [0.8, 0.9], [0.85, 0.95], [0.9, 0.98], [0.95, 1.00], [1.00, 0.99], [1.05, 0.96], [1.1, 0.92], [1.15, 0.86], [1.2, 0.8],
        [1.25, 0.74], [1.3, 0.68], [1.35, 0.62], [1.4, 0.56], [1.45, 0.51], [1.5, 0.47], [1.55, 0.43], [1.6, 0.39], [1.65, 0.36], [1.7, 0.33],
        [1.75, 0.3], [1.8, 0.28], [1.85, 0.26], [1.9, 0.24], [1.95, 0.22], [2.0, 0.2], [2.05, 0.19], [2.1, 0.17], [2.15, 0.16], [2.2, 0.15],
        [2.25, 0.14], [2.3, 0.13], [2.35, 0.12], [2.4, 0.11]];
    public frequencyPlotChart: Freqchart; // holder of the freq plot properties ()
    public showExtraFREQSettings: boolean; // showhide flag for additional settings on frequency plot
    public resultsErrorLength: number;
    public appendixEquationsforExport: Array<string>;
    private activeLayerID: number;
    public loggedInRole;
    public previousUrl;
    public showRegion: boolean;
    public editRegionScenario: boolean;
    public configSettings: Config;
    public units;
    public errors;
    public status;
    public methods;
    public regTypes;
    public tempData;
    public itemBeingEdited;
    public uniqueRegRegions;
    public editScen;
    public cloneScen;
    public paramsNeeded;
    public getBounds: boolean;
    private modalSubscript;
    public newRegRegForm: FormGroup;
    public showStateRegForm: boolean;
    public showNewRegRegForm: boolean;
    public CloseResult;
    public regions;
    public addCitation: boolean;
    public uploadPolygon: boolean;
    public editSGIndex; public editRRindex; public editIdx;
    public config: ToasterConfig = new ToasterConfig({ timeout: 5000 });
    public regressionRegions;
    public addRegReg: boolean;
    public selectedRegRegion;
    public modalRef;
    public regRegionsScenarios = [];
    public unusedRegRegions;
    // public changeStatGroup = false;
    public citations: Array<Citation>;

    constructor(
        private _nssService: NSSService,
        private _toasterService: ToasterService,
        @Inject(DOCUMENT) private _document: any,
        private _pageScrollService: PageScrollService,
        private _authService: AuthService,
        private _fb: FormBuilder,
        private router: Router,
        private _settingsService: SettingsService,
        private _configService: ConfigService,
        private _modalService: NgbModal
    ) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationStart) {
                this.router.navigated = false;
                if (this.previousUrl === '/settings' || this.previousUrl === '/profile'|| this.previousUrl === '/gagestats') {
                    this._nssService.setSelectedRegion(undefined);
                    this.showRegion = false;
                }
                this.previousUrl = e.url;
            }
        });
        this.configSettings = this._configService.getConfiguration();
        this.newRegRegForm = _fb.group({
            name: new FormControl(null, Validators.required),
            description: new FormControl(null),
            code: new FormControl(null, Validators.required),
            state: new FormControl(null, Validators.required)
        });
        this.newCitForm = _fb.group({
            'title': new FormControl(null, Validators.required),
            'author': new FormControl(null, Validators.required),
            'citationURL': new FormControl(null, Validators.required)
        });
    }
    ngOnInit() {
        this.title = 'NSS Report';
        this.timestamp = new Date();
        this.charts = []; // instantiate
        this.hydroChartsArray = []; // instantiate
        this.hydrographs = []; // instantiate
        this.resultsBack = false;
        this.multipleRegRegions = false;
        this.showRegion = false; this.editRegionScenario = false;
        this.resultsErrorLength = 0; // used for colspan on Errors <th>
        this._nssService.selectedRegion.subscribe(region => {
            if (this.selectedRegion && region && this.selectedRegion.name !== region.name && this.editRegionScenario) {
                this.cancelEditRegionScenario();
            } // if row being edited when new region selected, cancel that.
            this.selectedRegion = region;
            if (region) { this.showRegion = true; }
            window.scrollTo(0, 0);
        });
        this.loggedInRole = localStorage.getItem('loggedInRole');
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'mathJaxLoad']); // preload mathjax
        // this is based on a behaviorSubject, so it gets an initial notification of [].
        this._nssService.selectedRegRegions.subscribe((regRegions: Array<Regressionregion>) => {
            this.selectedRegressionRegion = regRegions;
            let queryObj: object = {}; // needed as the object needed in .setLayerDefs()
            let queryString: string = '';
            // if we have regRegions here, update map, else clear it
            if (regRegions.length > 0) {
                // build query string
                this.selectedRegressionRegion.forEach(rr => {
                    queryString += "GRIDCODE LIKE '%" + rr.code.toLowerCase() + "%' OR ";
                });
            }
            if (queryString !== '') {
                queryString = queryString.slice(0, -4); // remove the last ')R'

                queryObj = { [this.activeLayerID]: queryString };
            } else {
                // clear the layerDefs14.
                queryObj = { [this.activeLayerID]: '1=1' };
            }
        });
        this._authService.loggedInRole().subscribe(role => {
            this.loggedInRole = role;
        });
        // subscribe to temRegRegion
        this._nssService.currentTempRegRegion.subscribe(originalRegRegion => this.originalRegRegion = originalRegRegion);
        // subscribe to scenarios
        this._nssService.scenarios.subscribe((s: Array<Scenario>) => {
            if (this.itemBeingEdited) { this.CancelEditRowClicked(); }
            this.scenarios = s;
            this.getCitations(); // get full list of citations
            this.getRegRegions(); // get list of regression regions for the region
            this.resultsBack = false;
            this.equationResults = [];
            this.uniqueParameters = []; this.uniqueUnitTypes = []; this.uniqueRegRegions = [];
            let regID: string = '';
            this.showWeights = false; this.multipleRegRegions = false;
            this.scenarios.forEach(s => {
                this.appendixEquationsforExport = [];
                if (s.regressionRegions[0] != undefined) {
                    // show weight inputs if more than 1 regression region chosen
                    const firstRegname = s.regressionRegions[0].name;
                    if (s.regressionRegions.length > 1) {
                        this.showWeights = true;
                        this.multipleRegRegions = true;
                    } else if (this.uniqueRegRegions.indexOf(firstRegname) === -1) { this.uniqueRegRegions.push(firstRegname); }
                }
                if (this.uniqueRegRegions.length > 1) { this.multipleRegRegions = true; }

                s.regressionRegions.forEach((rr, index) => {
                    if (rr.regressions) {
                        rr.regressions.forEach((r) => {
                            r['equationMathJax'] = '`' + r.equation.replace(/_/g, ' \\_') + '`';
                        });
                    }
                    regID = '(RG_Code: ' + rr.code + ')'; // need to show the regID for each limit so they know which one they are out of range on
                    if (rr.results && rr.results.length > 0) {
                        this.getTableHeaders(rr);
                        if (rr.results[0] && rr.results[0].errors) {
                            this.resultsErrorLength = rr.results[0].errors.length;
                        }
                        let eqResult: Equationresults = { name: '', formulas: [] };
                        let equationString: string = '';
                        if (index < 1) {
                            // first time thru
                            equationString = rr.name !== 'Area-Averaged' ? rr.name + '\r\n' : '';
                        } else {
                            let name = rr.name !== 'Area-Averaged' ? rr.name + '\r\n' : '';
                            equationString = '\r\n' + name;
                        }
                        // only care if average result
                        if (rr.id > 0) eqResult.name = rr.name;
                        this.resultsBack = true;
                        rr.results.forEach(R => {
                            if (eqResult.name != '') {
                                eqResult.formulas.push({ Code: R.code, Equation: this.buildEquation(rr.parameters, R.equation) });
                                equationString += R.code + '= ,' + R.equation + '\r\n';
                            }
                        });
                        if (rr.id > 0) this.equationResults.push(eqResult);
                        this.appendixEquationsforExport.push(equationString); // push each equation string in for use when exporting appendix table later
                    } else if (rr.results && rr.results.length === 0) {
                        this._toasterService.pop('error', 'Error', 'No results returned.');
                    } // end there's results
                    // populate uniqueParameters and uniqueUnitTypes
                    if (rr.id > 0) {
                        rr.parameters.forEach(p => {
                            // is this param code already in array list?
                            let pIndex = this.uniqueParameters
                                .map(function (parame) {
                                    return parame.code;
                                })
                                .indexOf(p.code);
                            if (pIndex < 0) {
                                p.limitArray = [];
                                if (p.limits != undefined) {
                                    p.limits.rrID = regID;
                                    p.limitArray.push(p.limits);
                                } else { p.limits = { max: null, min: null } }
                                this.uniqueParameters.push(p);
                            } else {
                                // already in here. find the matching one and add it's limits to the LimitArray
                                const limArray = this.uniqueParameters[pIndex].limitArray;
                                if (p.limits !== undefined) {
                                    p.limits.rrID = regID;
                                } else { p.limits = { min: null, max: null } }
                                // check if limit array already in list (some duplicates due to statistic/regression groups)
                                if (!this.containsObject(p.limits, limArray)) {
                                    limArray.push(p.limits);
                                }
                            }
                            // is this unitType already in the array list?
                            let uIndex = this.uniqueUnitTypes
                                .map(function (unit) {
                                    return unit.abbr;
                                })
                                .indexOf(p.unitType.abbr);
                            if (uIndex < 0) {
                                // not in there yet
                                this.uniqueUnitTypes.push(p.unitType);
                            }
                            p.isEditing = false;
                        });
                    }
                }); // end s.regressionRegion.forEach
                if (this.resultsBack) {
                    MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'mathjax']); // for the appendix of equations
                }
            });
        });
        this._nssService.scenarioCitations.subscribe((c: Array<any>) => {
            this.scenarioCitations = c;
            this.scenarios.forEach((s => {
                s.citations = [];
                s.regressionRegions.forEach(rr => {
                    if (rr.citationID) {
                        s.citations.push(this.scenarioCitations.find(c => c.id === rr.citationID));
                    }
                });
                s.citations =  s.citations.filter((v,i) => s.citations.findIndex(item => item.id == v.id) === i);
            }));
        });
        // subscribe to getToast
        this._nssService.getToast().subscribe((t: Toast) => {
            this.toast = t;
            this._toasterService.pop(this.toast);
        });
        // subscribe to charts
        this._nssService.getChart().subscribe(c => {
            if (c !== '') {
                // scroll down to the chart section
                let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this._document, '#chart');
                this._pageScrollService.start(pageScrollInstance);
            }
            /* if (c == 'Hydrograph') {
                let H_areaAveraged: boolean = false;
                this.selectedPlot = 'Hydrograph';
                let hydroG: Hydrochart;
                hydroG = {
                    recurrence: null,
                    lagTime: null,
                    showExtraSettings: false,
                    axis: 'BottomX',
                    type_BX: 'linear',
                    type_LY: 'linear',
                    lineWidth: 1,
                    lineSymbol: 'circle',
                    majorTic_BX: true,
                    majorGrid_BX: true,
                    minorTic_BX: true,
                    minorGrid_BX: true,
                    majorTic_LY: true,
                    majorGrid_LY: true,
                    minorTic_LY: true,
                    minorGrid_LY: true,
                    colorPickerColor: '#7CB5EC',
                    curveLabel: 'Computed Points',
                    lineSymbolFillColor: '#7CB5EC',
                    reverse_LY: false,
                    reverse_BX: false,
                    dataLabels: false,
                    pointSymbols: true
                };

                this.showChartBtn_txt = 'Hide';
                this.showCharts_btn = true;
                // get array of recurrences from result
                let rec: number;
                this.scenarios.forEach(s => {
                    if (s.regressionRegions.length > 1) {
                        s.regressionRegions.forEach(rr => {
                            if (rr.name == 'Area-Averaged') {
                                H_areaAveraged = true; // area averaged, add title to chart stating
                                hydroG.curveLabel = 'Area-Averaged';
                                this.hChartXAxisValues = [];
                                rr.results.forEach(R => {
                                    this.hChartXAxisValues.push(R.code);
                                });
                                // use constant array to populate chart [][]
                                rec = rr.results.filter(r => r.code == this.hChartXAxisValues[0])[0].value;
                            }
                        });
                    } else {
                        s.regressionRegions.forEach(rr => {
                            this.hChartXAxisValues = [];
                            rr.results.forEach(R => {
                                this.hChartXAxisValues.push(R.code);
                            });
                            // use constant array to populate chart [][]
                            rec = rr.results.filter(r => r.code == this.hChartXAxisValues[0])[0].value;
                        });
                    }
                }); // end foreach scenario
                hydroG.recurrence = this.hChartXAxisValues[0]; //default to first one;
                hydroG.lagTime = 1; // default value to change later
                hydroG.title_BX =
                    'Time (hours)\nHydrograph for ' + hydroG.lagTime + '-yr interval\nNOTE: May not represent actual hydrograph';
                hydroG.title_LY = 'Discharge (cubic meters per second)';
                // http://api.highcharts.com/highcharts   , panning: true, panKey: 'shift'
                this.hChartOptions = {
                    exporting: {
                        chartOptions: {
                            // specific options for the exported image
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
                    series: [
                        {
                            data: this.DIMLESS_ARRAY.map(p => {
                                return [p[0] * 1, p[1] * rec];
                            }),
                            name: H_areaAveraged ? 'Computed Points (Area-weighted average)' : 'Computed Points',
                            states: {
                                hover: { enabled: false } // stops the line from getting thicker when mouse onto the chart
                            }
                        }
                    ],
                    tooltip: {
                        formatter: function() {
                            var s = '<b>(' + this.x + ', ' + this.y + ')</b>';
                            return s;
                        }
                    },
                    xAxis: {
                        title: {
                            text:
                                'Time (hours)<br/>Hydrograph for ' +
                                hydroG.lagTime +
                                '-yr interval<br/>NOTE: May not represent actual hydrograph'
                            //    style: { fontWeight: 'bold'}
                        },
                        startOnTick: true,
                        endOnTick: true,
                        gridLineWidth: 1, // major grid (0/1)
                        minorGridLineWidth: 1, // minor grid (0/1)
                        tickWidth: 1, // major tic (0/1)
                        minorTickWidth: 1, // minor tic (0/1)

                        minorTickInterval: 'auto', // line 191-196 needed for above to be changed
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
                        gridLineWidth: 1, // major grid (0/1)
                        minorGridLineWidth: 1, // minor grid (0/1)
                        tickWidth: 1, // major tic (0/1)
                        minorTickWidth: 1, // minor tic (0/1)

                        minorTickInterval: 'auto', // line 205-210 needed for above to be changed
                        minorTickLength: 5,
                        tickPosition: 'inside',
                        minorTickPosition: 'inside',
                        tickColor: '#000000',
                        minorTickColor: '#000000'
                    }
                };
                this.hydroChartsArray.push(this.hChartOptions);
                this.hydrographs.push(hydroG); */
            if (c == 'Frequency Plot') {
                if (this.fChartValues == undefined) {
                    let F_areaAveraged: boolean = false;
                    this.fChartOptions = {};
                    // only come in here if there isn't already a frequency plot
                    this.frequencyPlotChart = {
                        Faxis: 'BottomX',
                        type_BX: 'returnPeriod',
                        type_LY: 'returnPeriod',
                        title_LY: 'Peak Discharge, In cubic meters per second',
                        title_BX: 'Recurrence Interval, in years\nFlood Frequency Plot',
                        lineWidth: 1,
                        lineSymbol: 'circle',
                        majorTic_BX: true,
                        majorGrid_BX: true,
                        minorTic_BX: true,
                        minorGrid_BX: true,
                        majorTic_LY: true,
                        majorGrid_LY: true,
                        minorTic_LY: false,
                        minorGrid_LY: false,
                        colorPickerColor: '#7CB5EC',
                        curveLabel: 'Computed Points',
                        lineSymbolFillColor: '#7CB5EC',
                        reverse_LY: false,
                        reverse_BX: false,
                        dataLabels: false,
                        pointSymbols: true
                    };
                    // get array of recurrences from result
                    let freqDataArray: number[][];
                    freqDataArray = [];
                    this.scenarios.forEach(s => {
                        if (s.regressionRegions.length > 1) {
                            s.regressionRegions.forEach(rr => {
                                if (rr.name == 'Area-Averaged') {
                                    F_areaAveraged = true; // area averaged, add title to chart stating
                                    this.frequencyPlotChart.curveLabel = 'Computed Points (Area-weighted average)';
                                    rr.results.forEach(R => {
                                        let x: number = +R.name.substring(0, R.name.indexOf(' '));
                                        freqDataArray.push([x, R.value]);
                                    });
                                }
                            });
                        } else {
                            s.regressionRegions.forEach(rr => {
                                rr.results.forEach(R => {
                                    let x: number = +R.name.substring(0, R.name.indexOf(' '));
                                    freqDataArray.push([x, R.value]);
                                });
                            });
                        }
                    }); // end foreach scenario
                    console.log('freq (start): ' + freqDataArray);
                    this.fChartValues = freqDataArray;
                    this.showChartBtn_txt = 'Hide';
                    this.showCharts_btn = true;
                    this.fChartOptions = {
                        exporting: {
                            chartOptions: {
                                // specific options for the exported image
                                plotOptions: {
                                    series: {
                                        dataLabels: {
                                            enabled: true
                                        },
                                        name: F_areaAveraged ? 'Computed Points (Area-weighted average)' : 'Computed Points',
                                        states: {
                                            hover: { enabled: false } // stops the line from getting thicker when mouse onto the chart
                                        }
                                    }
                                }
                            },
                            fallbackToExportServer: false
                        },
                        chart: { type: 'line', zoomType: 'xy' },
                        title: { text: '' },
                        series: [
                            {
                                data: this.fChartValues,
                                marker: { enabled: true },
                                name: F_areaAveraged ? 'Computed Points (Area-weighted average)' : 'Computed Points',
                                states: {
                                    hover: { enabled: false } // stops the line from getting thicker when mouse onto the chart
                                }
                            }
                        ],
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
                            gridLineWidth: 1, // major grid (0/1)
                            tickWidth: 1, // major tic (0/1)
                            minorTickInterval: 'auto', // line 191-196 needed for above to be changed
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
                            gridLineWidth: 1, // major grid (0/1)
                            tickWidth: 1, // major tic (0/1)
                            minorTickLength: 5,
                            tickPosition: 'inside',
                            minorTickPosition: 'inside',
                            tickColor: '#000000',
                            minorTickColor: '#000000'
                        }
                    };
                } // if this.fchartvalues == undefined (only go in there to make a new one not overwrite one)
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
        // get all unit types (use for options in edit/add scenario selects)
        this._nssService.getUnitTypes().subscribe(res => {
            this.units = res;
            for (const unit of this.units) {
                unit.unit = unit.name;
                unit.abbr = unit.abbreviation;
            }
        });
        // get all errors (use for options in edit/add scenario selects)
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.errorsURL).subscribe(res => {
            this.errors = res;
        });
        // get all regression types (use for options in edit/add scenario selects)
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.regTypeURL).subscribe(res => {
            this.regTypes = res;
        });
        this._nssService.regions.subscribe((regions: Array<Region>) => {
            this.regions = regions;
        });
        // get all status types (use for options in edit/add scenario selects)
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.statusURL).subscribe(res => {
            this.status = res;
        });
        // get all method types
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.methodURL).subscribe(res => {
            this.methods = res;
        });
    } // end ngOnInit()

    public saveFilters() {
        this.tempSelectedStatisticGrp = this.selectedStatisticGrp;
        this.tempSelectedRegressionRegion = this.selectedRegressionRegion;
        this.tempSelectedRegType = this.selectedRegType;
    }

    public requeryFilters() {
        this._nssService.selectedStatGroups = this.tempSelectedStatisticGrp;
        this._nssService.setSelectedRegRegions(this.tempSelectedRegressionRegion);
        this._nssService.selectedRegressionTypes = this.tempSelectedRegType;
    }

    public getTableHeaders(rr) {    // Search for regression regions w/ errors, return true if present, fill in empty errors
        var error = false;
        const code = [];
        rr.results.forEach( function(item) {
          if (item.errors.length > 0) {
              item.errors.forEach( error => {
                code.push((error.code));
              })
            return error = true;
          }
        })
        rr.errorHeaders = error;
        rr.codes = code;
        rr.codes = rr.codes.filter((el, i, a) => i === a.indexOf(el));   // check for repeats
        rr.codes.sort(function(a, b) { return a.localeCompare(b); });   // sort alphabetically

        rr.results.forEach( function(item) {    // fill in empty errors
            if (item.errors.length > 0) {
                rr.codes.forEach( code => {
                    if (!item.errors.find( day2 => day2.code===code )) {
                        item.errors.push({code:code, value:""});
                    }
                })
                item.errors.sort(function(a, b) { return a.code.localeCompare(b.code); });  // sort alphabetically
            }
        })
      }

    public containsObject(obj, list) {
        for (const item of list) {
            if (JSON.stringify(item) === JSON.stringify(obj)) {
                return true;
            }
        }
        return false;
    }

    // round all parameters and statistic values to 3 significant figures
    /* public sigFigures(n) {
        if (n > 0) {
            var mult = Math.pow(10, 3 - Math.floor(Math.log(n) / Math.LN10) - 1);
            return Math.round(n * mult) / mult;
        } else return n;
    } */
    // add backticks around parameter code to escape in equation
    private buildEquation(p: Parameter[], equation: string): string {
        let fullEquation: string = '';
        fullEquation = '`' + equation.replace(/_/g, ' \\_') + '`';
        return fullEquation;
    }

    // use tableString and tName to export a table to the browser
    private triggerExportTable(tableString, tName) {
        let csvData = tableString;
        var a = document.createElement('a');
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = tName.replace(/ /g, '_') + '.csv';
        a.click();
    }

    // export inputs table
    public exportInputTable(tableIndex) {
        let inputTableRows = this.inputTable._results[tableIndex].element.nativeElement.rows;
        let vals: string = '';
        let str: string = '';
        for (var r = 0; r < inputTableRows.length; r++) {
            vals = '';
            for (var t = 0; t < inputTableRows[r].children.length; t++) {
                let child = inputTableRows[r].children[t];
                vals += child.innerText + ',';
                // if last one in this row
                if (t == inputTableRows[r].children.length - 1 && child.localName == 'td') {
                    vals = vals.slice(0, -1);
                    str += vals + '\r\n';
                }
            }
        }
        str += '\r\n';
        // go get results table and tack it on to this before exporting
        this.exportTable(tableIndex, str);
    }

    // export resultTable
    public exportTable(tableIndex, inputTableStr) {
        let tableRows = this.resultTable._results[tableIndex].element.nativeElement.rows;
        let keys: any = '';
        let vals: string = '';
        let str: string = '';
        let tableName = '';
        for (var r = 0; r < tableRows.length; r++) {
            keys = '';
            vals = '';
            for (var t = 0; t < tableRows[r].children.length; t++) {
                let child = tableRows[r].children[t];
                child.innerText = child.innerText.replace(",", ";");
                if (child.localName == 'th') {
                    if (keys == '' && tableName == '')
                        tableName = inputTableStr.indexOf('Area-Averaged') == 0 ? 'Area_Averaged' : child.innerText;
                    keys += child.innerText + ',';
                    if (child.colSpan > 1) {
                        for (var cs = 1; cs < child.colSpan; cs++) keys += ' ,';
                    }
                } else vals += child.innerText + ',';
                if (t == tableRows[r].children.length - 1 && child.localName == 'th') {
                    keys = keys.slice(0, -1);
                    inputTableStr += keys + '\r\n';
                } else if (t == tableRows[r].children.length - 1 && child.localName == 'td') {
                    vals = vals.slice(0, -1);
                    inputTableStr += vals + '\r\n';
                }
            }
        }
        this.triggerExportTable(inputTableStr, tableName);
    }

    public exportAppendix() {
        let tableName = 'Appendix';
        // parameter table
        let paramTable = this.uniqueParameters;
        let p_str: string = '';
        p_str += '\r\n' + 'Parameter Definitions' + '\r\n';
        p_str += 'Name,Abbrev,Description' + '\r\n';
        for (var p = 0; p < paramTable.length; p++) {
            p_str += paramTable[p].name + ',' + paramTable[p].code + ',' + paramTable[p].description + '\r\n';
        }
        p_str += '\r\n';

        // unit types table
        let unitTable = this.uniqueUnitTypes;
        let u_str: string = '';
        u_str += '\r\n' + 'Unit Types' + '\r\n';
        u_str += 'Abbrev,Unit' + '\r\n';
        for (var u = 0; u < unitTable.length; u++) {
            u_str += '(' + unitTable[u].abbr + '),' + unitTable[u].unit + '\r\n';
        }
        u_str += '\r\n';
        let equa_str = this.appendixEquationsforExport.join(',');
        let allTablesJoinedString = equa_str + p_str + u_str;
        this.triggerExportTable(allTablesJoinedString, tableName);
        // this.triggerExportTable(this.appendixEquationsforExport.join(','), tableName);
    }
    // onBlur of Value, compare to min/max and show warning
    public compareValue(value: Parameter) {
        // is there a value or just click in and then out (would be "")
        if (value.value) {
            // make sure all parameters of this CODE has this VALUE assigned to it in the real scenario Object
            this.scenarios.forEach(s => {
                s.regressionRegions.forEach(rr => {
                    rr.parameters.forEach(p => {
                        if (p.code == value.code) p.value = value.value;
                    });
                });
            }); // end foreach scenario
            // is value outside of range (if ther is limit range)
            if (value.limits !== undefined) {
                let limitFlag: boolean = false;
                value.limitArray.forEach(x => {
                    if (value.value > x.max || value.value < x.min) {
                        limitFlag = true;
                        x.outOfRange = true;
                        value.missingVal = false; // remove the missingVal flag (since there is something in here)
                    } else {
                        // value is within proper range (no warning, has a value)
                        x.outOfRange = false;
                        value.missingVal = false; // field is not empty
                    }
                });
                // need to flag the outter limit OutOfRange outside of the LimitArray loop
                if (limitFlag) value.outOfRange = true;
                // flag it so
                else value.outOfRange = false;
            } // end limits are not undefined
            else {
                value.outOfRange = false; // within range
                value.limitArray.forEach(l => {
                    l.outOfRange = false;
                });
                value.missingVal = false; // field is not empty
            }
        } // end value.Value (has value)
        else {
            value.limitArray.forEach(l => {
                l.outOfRange = false;
            });
            value.outOfRange = false; // no need to check range
            value.missingVal = false; // field is empty, but we don't care until they hit submit on sidebar
        }
    }
    // toggle parameter description
    public showDescription(p: Parameter, paramIndex: number) {
        //set this parameters seeDescription property to true/false
        this.uniqueParameters[paramIndex].seeDescription = !this.uniqueParameters[paramIndex].seeDescription;
    }
    // when chart loads, store an instance of the highchart to access functions
    private saveInstance(chartInst) {
        this.charts.push(chartInst);
    }

    /////////////////////////////////////// start HYDRO STUFF ///////////////////////////////////////////////////
    // clicked Bottom x & type == update chart HYDRO
    public setXaxisType(i, newType: string) {
        // converting to logarithmic gets ugly (line draws partially outside of plot area) due to the minorTickInterval being set to auto
        if (newType == 'logarithmic') {
            // this makes minor ticks and grid lines disappear..turn them off and uncheck boxes
            this.charts[i].xAxis[0].update({ tickInterval: 'auto', minorGridLineWidth: 0, minorTickWidth: 0 });
            this.hydrographs[i].minorGrid_BX = false;
            this.hydrographs[i].minorTic_BX = false;
        } else {
            this.charts[i].xAxis[0].update({ tickInterval: null });
        }
        this.charts[i].xAxis[0].update({ type: newType });
    }
    // clicked Left y & type == update chart HYDRO
    public setYaxisType(i, newType: string) {
        // converting to logarithmic gets ugly (line draws partially outside of plot area) due to the minorTickInterval being set to auto
        if (newType == 'logarithmic') {
            // this makes minor ticks and grid lines disappear..turn them off and uncheck boxes
            this.charts[i].yAxis[0].update({ minorGridLineWidth: 0, minorTickWidth: 0 }); //tickInterval:'auto'
            this.hydrographs[i].minorGrid_LY = false;
            this.hydrographs[i].minorTic_LY = false;
        } else {
            this.charts[i].yAxis[0].update({ tickInterval: null });
        }
        this.charts[i].yAxis[0].update({ type: newType });
    }
    // update title on x axis as they type HYDRO
    public updateBXtitle(i) {
        this.hydroChartsArray[i].xAxis.title.text = this.hydrographs[i].title_BX.replace(/\n/g, '<br/>'); //bottom title
        this.charts[i].xAxis[0].setTitle({ text: this.hydroChartsArray[i].xAxis.title.text }); //title of xAxis
    }
    // update title on y axis as they type HYDRO
    public updateLYtitle(i) {
        this.hydroChartsArray[i].yAxis.title.text = this.hydrographs[i].title_LY.replace(/\n/g, '<br/>');
        this.charts[i].yAxis[0].setTitle({ text: this.hydroChartsArray[i].yAxis.title.text }); //title of yAxis
    }
    // update ticks or grids on chart (0/1) HYDRO
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
    // update ticks or grids on chart (0/1) HYDRO
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
    // reverse the data HYDRO
    public setReverseData(i: number, which: string, value: boolean) {
        if (which == 'bx') {
            this.charts[i].xAxis[0].update({ reversed: value });
        } else {
            this.charts[i].yAxis[0].update({ reversed: value });
        }
    }
    // change line color HYDRO
    public changeLineColor(i: number, c: string) {
        this.charts[i].series[0].update({ color: c });
        this.hydrographs[i].colorPickerColor = c;
    }
    // change line width HYDRO
    public setLineWidth(i: number) {
        this.charts[i].series[0].update({ lineWidth: this.hydrographs[i].lineWidth });
    }
    // change point symbol fill color HYDRO
    public changeLineSymbolColor(i: number, c: string) {
        this.charts[i].series[0].update({ marker: { fillColor: c } });
        this.hydrographs[i].lineSymbolFillColor = c;
    }
    // change point symbol HYDRO
    public setLineSymbol(i: number, e: Event) {
        this.charts[i].series[0].update({ marker: { enabled: true } });
        this.charts[i].series[0].update({ marker: { symbol: this.hydrographs[i].lineSymbol } });
    }
    // show/hide point symbol HYDRO
    public showHideLineSymbol(i: number, value: boolean) {
        this.charts[i].series[0].update({ marker: { enabled: value } });
    }
    // change curve label HYDRO
    public updateCurveLabel(i: number) {
        this.charts[0].series[0].update({ name: this.hydrographs[i].curveLabel });
    }
    // show/hide data labels  HYDRO
    public updateDataLabels(i: number, value: boolean) {
        this.charts[i].series[0].update({
            dataLabels: {
                enabled: value,
                formatter: function () {
                    return '(' + this.x + ', ' + this.y + ')';
                }
            }
        });
    }
    // changed values, refresh the hydrograph with new data HYDRO
    /* public refreshHydrograph(i, formValues) {
        // top title (updated with which recurrence interval they choose)
        this.hydroChartsArray[i].title.text = 'Hydrograph (Recurrence Interval: ' + this.hydrographs[i].recurrence + ')';

        // update the xAxis title
        this.hydroChartsArray[i].xAxis.title.text =
            'Time (hours)<br/>Hydrograph for ' + this.hydrographs[i].lagTime + '-yr interval<br/>NOTE: May not represent actual hydrograph';
        this.hydrographs[i].title_BX =
            'Time (hours)\nHydrograph for ' + this.hydrographs[i].lagTime + '-yr interval\nNOTE: May not represent actual hydrograph';
        this.charts[i].xAxis[0].setTitle({ text: this.hydroChartsArray[i].xAxis.title.text }); //title of xAxis

        this.charts[i].setTitle({ text: this.hydroChartsArray[i].title.text }); //title of chart

        // get the corresponding results value for the recurrence chosen to update the chart data
        let recValue: number;
        this.scenarios.forEach(s => {
            s.regressionRegions.forEach(rr => {
                if (rr.results) recValue = rr.results.filter(r => r.code == this.hydrographs[i].recurrence)[0].value;
            });
        });
        this.charts[i].series[0].setData(
            this.DIMLESS_ARRAY.map(p => {
                return [p[0] * this.hydrographs[i].lagTime, p[1] * recValue];
            })
        ); // update data
        this.hydrographs[i].showExtraSettings = false; // just close the extra settings part
    } */
    // show/hide additional user settings options for the chart (axis, title, etc) HYDRO
    public showHideAdditionalChartSettings(i) {
        this.hydrographs[i].showExtraSettings = !this.hydrographs[i].showExtraSettings;
    }
    // want to remove a hydrochart HYDRO
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
    // clicked Bottom x & type == update chart FREQUENCY
    public setFreqXaxisType(newType: string) {
        let freqDataArray: number[][];
        freqDataArray = [];
        // converting 'percent', 'fraction', or 'returnPeriod' (default/onload is returnPeriod)
        if (newType == 'percent') {
            this.scenarios.forEach(s => {
                s.regressionRegions.forEach(rr => {
                    if (rr.results) {
                        rr.results.forEach(R => {
                            let x: number = +R.name.substring(0, R.name.indexOf(' '));
                            freqDataArray.push([(1 / x) * 100, R.value]);
                        });
                    }
                });
            }); // end foreach scenario
            this.frequencyPlotChart.reverse_BX = true;
            this.freqChart.xAxis[0].update({
                reversed: true,
                labels: {
                    formatter: function () {
                        return Highcharts.numberFormat(this.value, 0, ',') + '%';
                    }
                }
            });
        } else if (newType == 'fraction') {
            // divide 1 into probability (pk500)
            this.scenarios.forEach(s => {
                s.regressionRegions.forEach(rr => {
                    if (rr.results) {
                        rr.results.forEach(R => {
                            let x: number = +R.name.substring(0, R.name.indexOf(' '));
                            freqDataArray.push([1 / x, R.value]);
                        });
                    }
                });
            }); // end foreach scenario
            this.frequencyPlotChart.reverse_BX = true;
            this.freqChart.xAxis[0].update({
                reversed: true,
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            });
        } else {
            // returnPeriod
            this.scenarios.forEach(s => {
                s.regressionRegions.forEach(rr => {
                    if (rr.results) {
                        rr.results.forEach(R => {
                            let x: number = +R.name.substring(0, R.name.indexOf(' '));
                            freqDataArray.push([x, R.value]);
                        });
                    }
                });
            }); // end foreach scenario
            this.frequencyPlotChart.reverse_BX = false;
            this.freqChart.xAxis[0].update({
                reversed: false,
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            });
            console.log('return period: ' + freqDataArray);
        }
        this.freqChart.series[0].setData(freqDataArray);
    }
    // update title on x axis as they type FREQUENCY
    public updateFreqBXtitle() {
        this.fChartOptions.xAxis.title.text = this.frequencyPlotChart.title_BX.replace(/\n/g, '<br/>'); //bottom title
        this.freqChart.xAxis[0].setTitle({ text: this.fChartOptions.xAxis.title.text }); //title of xAxis
    }
    // update title on y axis as they type FREQUENCY
    public updateFreqLYtitle() {
        this.fChartOptions.yAxis.title.text = this.frequencyPlotChart.title_LY.replace(/\n/g, '<br/>');
        this.freqChart.yAxis[0].setTitle({ text: this.fChartOptions.yAxis.title.text }); //title of yAxis
    }
    // update ticks or grids on chart (0/1) FREQUENCY
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
    // update ticks or grids on chart (0/1) FREQUENCY
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
    // reverse the data FREQUENCY
    public setFreqReverseData(which: string, value: boolean) {
        if (which == 'bx') {
            this.freqChart.xAxis[0].update({ reversed: value });
        } else {
            this.freqChart.yAxis[0].update({ reversed: value });
        }
    }
    // change line color FREQUENCY
    public changeFreqLineColor(c: string) {
        this.freqChart.series[0].update({ color: c });
        this.frequencyPlotChart.colorPickerColor = c;
    }
    // change line width FREQUENCY
    public setFreqLineWidth() {
        this.freqChart.series[0].update({ lineWidth: this.frequencyPlotChart.lineWidth });
    }
    // change point symbol fill color FREQUENCY
    public changeFreqLineSymbolColor(c: string) {
        this.freqChart.series[0].update({ marker: { fillColor: c } });
        this.frequencyPlotChart.lineSymbolFillColor = c;
    }
    // change point symbol FREQUENCY
    public setFreqLineSymbol(e: Event) {
        this.freqChart.series[0].update({ marker: { symbol: this.frequencyPlotChart.lineSymbol } });
    }
    // show/hide point symbols FREQUENCY
    public showHideFreqSymbol(value: boolean) {
        this.freqChart.series[0].update({ marker: { enabled: value } });
    }
    // change curve label FREQUENCY
    public updateFreqCurveLabel() {
        this.freqChart.series[0].update({ name: this.frequencyPlotChart.curveLabel });
    }
    // show/hide data labels  FREQUENCY
    public updateFreqDataLabels(value: boolean) {
        this.freqChart.series[0].update({
            dataLabels: {
                enabled: value,
                formatter: function () {
                    return '(' + this.x + 'yr, ' + this.y + ')';
                }
            }
        });
    }
    // show/hid additional user settings options for the chart Frequency
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
    // toggle charts
    public showHideCharts() {
        // if showCharts_btn is true == show the charts and showChartBtn_txt says "Hide"
        // if showCharts_btn is false == hide the charts and showChartBtn_txt says "Show"
        this.showCharts_btn = !this.showCharts_btn;
        if (this.showCharts_btn) this.showChartBtn_txt = 'Hide';
        else this.showChartBtn_txt = 'Show';
    }
    // want to edit the selected/computed scenario. remove Result
    public editScenario() {
        //make sure that if there were any regression regions deleted, that they are added back in
        if (this.originalRegRegion[0] != null) {
            this.scenarios[0].regressionRegions = this.originalRegRegion;
        }
        this.scenarios.forEach(s => {
            let areaWeighed = s.regressionRegions.map(function (r) {
                return r.id;
            }).indexOf(0);
            if (areaWeighed > -1) s.regressionRegions.splice(areaWeighed, 1); //remove the area weighted regRegion
            s.regressionRegions.forEach(r => {
                this.resultsBack = false;
                delete r.results;
            });
        });
        this._nssService.setScenarios(this.scenarios);
    }
    // number only allowed in Value
    public _keyPress(event: any) {
        const pattern = /[0-9\+\-\.\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }
    // need superscript tag in unittype (using <span [innerHTML]="setSuperScript(p.UnitType.Abbr)"> converts tags to actual html)
    public setSuperScript(unit: string) {
        let newUnitWithSupTag = ''; let endSupIndex = -1;
        const indexOfSup = unit.indexOf('^');
        // find first non-numeric value (often "/") after superscript to prevent everything following the caret from being superscripted
        const strAfterCaret = unit.substring(indexOfSup + 1);
        const nonNumeric = strAfterCaret.match(/\D/);
        if (nonNumeric) { endSupIndex = strAfterCaret.indexOf(nonNumeric[0]); }
        if (indexOfSup > -1 && endSupIndex > -1) {
            newUnitWithSupTag = unit.substring(0, indexOfSup) + '<sup>' + strAfterCaret.substring(0, endSupIndex)
                + '</sup>' + strAfterCaret.substring(endSupIndex);
        } else if (indexOfSup > -1) {
            newUnitWithSupTag = unit.substring(0, indexOfSup) + '<sup>' + strAfterCaret + '</sup>';
        } else { newUnitWithSupTag = unit; }

        return newUnitWithSupTag;
    }
    // print pdf
    public printPage() {
        window.print();
    }

    /////////////////////// Add Scenarios Section ///////////////////////////
    public showAddScenarioModal() {
        this._nssService.setAddScenarioModal(true);
    }

    /////////////////////// Edit Scenarios Section ///////////////////////////
    public editScenarioRowClicked(statisticGroupID, r, rr, info) {
        this.cloneScen = { r, rr, statisticGroupID, info };
        this._nssService.changeItem(this.cloneScen);
        this._nssService.setAddScenarioModal(true);
    }

    public editRegScenario() {
        this._nssService.showCompute(false);
        this.editRegionScenario = true;
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'mathJax1']); // render equations into Mathjax
    }

    public cancelEditRegionScenario() {
        this._nssService.showCompute(true);
        this.editRegionScenario = false;
        if (this.itemBeingEdited) { this.CancelEditRowClicked(); }
    }

    public editRegRegion(id) {
        const addRegRegForm: AddRegressionRegion = {
            show: true,
            regRegionID: id
        }
        this._nssService.setAddRegressionRegionModal(addRegRegForm);
    }

    public editRowClicked(item, rrIndex, sgIndex, idx?) {
        if (this.itemBeingEdited && this.itemBeingEdited.isEditing && this.tempData && this.itemBeingEdited.name !== item.name) {
            this.CancelEditRowClicked();
        } // if another item was being edited, cancel that
        this.tempData = JSON.parse(JSON.stringify(item)); // make a copy in case they cancel
        idx >= 0 ? this.editIdx = idx : this.editIdx = null;
        this.editRRindex = rrIndex; this.editSGIndex = sgIndex; // setting indices because the cancel function wasn't overwriting things
        this.itemBeingEdited = item;
        item.isEditing = true;
        if (item.equation) { this.showMathjax(item); }
        if (idx === undefined) {
            // do we need the citation IDs?
            const rrIdx = this.regressionRegions.findIndex(rr => rr.id === item.id);
            this.scenarios[this.editSGIndex].regressionRegions[this.editRRindex].citationID = this.regressionRegions[rrIdx].citationID;
        }
    }

    public CancelEditRowClicked() {
        // reset item if cancelling editing
        if (this.editIdx === null) { // if regression region
            this.scenarios[this.editSGIndex].regressionRegions[this.editRRindex] = this.tempData;
        } else if (this.itemBeingEdited.citationURL) { // if citation
            this.citations[this.editIdx] = this.tempData;
        } else if (this.itemBeingEdited.limits) { // if parameter
            this.scenarios[this.editSGIndex].regressionRegions[this.editRRindex].parameters[this.editIdx] = this.tempData;
        } else if (this.itemBeingEdited.equation) { // if regression
            this.scenarios[this.editSGIndex].regressionRegions[this.editRRindex].regressions[this.editIdx] = this.tempData;
            const equ = document.getElementById('mathjaxEq' + this.itemBeingEdited.id);
            equ.style.visibility = 'hidden';
            MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'mathJax1']);
        }
        this.itemBeingEdited = "";
    }

    /////////////////////// Delete Scenarios Section ///////////////////////////
    deleteRegression(sgID, rrID, rID) {
        const check = confirm('Are you sure you want to delete this Regression?');
        if (check) {
            this.saveFilters();
            const sParams = '?statisticgroupID=' + sgID + '&regressionregionID=' + rrID + '&regressiontypeID=' + rID;
            this._settingsService.deleteEntity('', this.configSettings.nssBaseURL + this.configSettings.scenariosURL, sParams).subscribe(result => {
                this.requeryFilters();
                if (result.headers) { this._nssService.outputWimMessages(result); }
            }, error => {
                if (error.headers) {
                    this._nssService.outputWimMessages(error);
                } else { this._nssService.handleError(error); }
            });
        }
    }

    deleteRegRegion(rrID) {
        const check = confirm('Are you sure you want to delete this Regression Region?');
        if (check) {
            this.saveFilters();
            this._settingsService.deleteEntity(rrID, this.configSettings.nssBaseURL + this.configSettings.regRegionURL).subscribe(result => {
                this.requeryFilters();
                if (result.headers) { this._nssService.outputWimMessages(result); }
            }, error => {
                if (error.headers) {
                    this._nssService.outputWimMessages(error);
                } else { this._nssService.handleError(error); }
            });
        }
    }

    /////////////////////// Citations Section ///////////////////////////
    public showManageCitationsModal() {
        const addManageCitationForm: ManageCitation = {
            show: true,
            addCitation: true,
            inGagePage: false
        }
        this._nssService.setManageCitationsModal(addManageCitationForm);
    }

    // remove citation from regression region (set citationID to null)
    public removeCitation(rr) {
        const check = confirm('Are you sure you want to remove this citation from ' + rr.name + '?');
        this.saveFilters();
        if (check) {
            const idx = this.regressionRegions.findIndex(r => r.id === rr.id);
            const regReg = this.regressionRegions[idx];
            regReg.citationID = null;
            this._settingsService.putEntity(rr.id, regReg, this.configSettings.nssBaseURL + this.configSettings.regRegionURL)
                .subscribe((response) => {
                    this.requeryFilters();
                    this._nssService.outputWimMessages(response);
                }, error => {
                    if (this._settingsService.outputWimMessages(error)) { return; }
                    this._toasterService.pop('error', 'Error removing Citation', error._body.message || error.statusText);
                }
                );
        }
    }

    public saveParameter(p, rrIndex, sgIndex) {
        this.getBounds = false;
        // only sending back the regression that contains the parameter
        this.editScen = JSON.parse(JSON.stringify(this.scenarios[sgIndex]));
        this.editScen.regressionRegions = [this.editScen.regressionRegions[rrIndex]];
        for (const reg of this.editScen.regressionRegions[0].regressions) {
            if (reg.equation.indexOf(p.code) > -1) {
                // only send back first regression whose equation contains the edited parameter
                this.editScen.regressionRegions[0].regressions = [reg];
                reg.expected = { value: '', parameters: {}, intervalBounds: null };
                // if regression has prediction interval, need to ask for expected bounds
                if (!reg.predictionInterval.student_T_Statistic || !reg.predictionInterval.variance
                    || !reg.predictionInterval.xiRowVector || !reg.predictionInterval.covarianceMatrix) {
                    reg.predictionInterval = null;
                } else {
                    this.getBounds = true;
                    reg.expected.intervalBounds = { lower: null, upper: null };
                }
                this.paramsNeeded = [];
                // add necessary params to expected results
                for (const param of this.editScen.regressionRegions[0]['parameters']) {
                    if (reg.equation.indexOf(param.code) > -1) {
                        this.paramsNeeded.push(param); // only need values for params in equation
                    }
                }
                break;
            }
        }
        this.showInputModal();
    }

    public saveRegression(r, rIndex, rrIndex, sgIndex) {
        this.getBounds = false;
        // only sending back the edited regression/regression regions
        this.editScen = JSON.parse(JSON.stringify(this.scenarios[sgIndex]));
        this.editScen.regressionRegions = [this.editScen.regressionRegions[rrIndex]];
        const reg = this.editScen.regressionRegions[0].regressions[rIndex];
        reg.expected = { value: '', parameters: {}, intervalBounds: null };
        // check prediction interval inputs
        const count = this.checkPredInt(reg);
        if (count <= 1) {
            reg.predictionInterval = null; // if only id exists
        } else if (count === 6) {
            this.getBounds = true;
            reg.expected.intervalBounds = { lower: null, upper: null };
        } else {
            this._toasterService.pop('error', 'Error', 'Prediction Interval not complete.');
            return;
        }
        // get list of necessary params to check expected results
        this.paramsNeeded = [];
        for (const param of this.editScen.regressionRegions[0]['parameters']) {
            if (reg.equation.indexOf(param.code) > -1) {
                this.paramsNeeded.push(param); // only need values for params in equation
            }
        }
        // only need to send back the edited regression
        this.editScen.regressionRegions[0].regressions = [reg];
        this.showInputModal();
    }

    public checkPredInt(reg) {
        let count = 0;
        Object.keys(reg.predictionInterval).forEach((key) => {
            if (reg.predictionInterval[key] != null && reg.predictionInterval[key] !== '') { count++; }
        });
        return count;
    }

    public getUnusedRegRegions() {
        this.regRegionsScenarios = [];
        this.regressionRegions.forEach(x => {
            this.scenarios.forEach(s => {
                s.regressionRegions.forEach(rr => {
                    if (x.id == rr.id) {
                        this.regRegionsScenarios.push(x)
                    }
                });
            });
        });
        this.unusedRegRegions = this.regressionRegions.filter(entry1 => !this.regRegionsScenarios.some(entry2 => entry1.id === entry2.id));
    }

    public getStatusDescription(sID) {
        let statusName;
        this.status.forEach(z => {
            if (sID === z.id) {
                statusName = z.name;
            }
        });
        return statusName;
    }

    public getMethodName(mID) {
        let methodName;
        this.methods.forEach(z => {
            if (mID === z.id) {
                methodName = z.name;
            }
        });
        if (methodName) {
            return (", Method: "+ methodName);
        }
    }


    public getRegRegions() {
        // get list of region's regression regions, remove if we take out the citations IDs
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.regionURL + '/' + this.selectedRegion.id + '/' + this.configSettings.regRegionURL)
            .subscribe((res) => {
                if (res.length > 1) {
                    res.sort((a, b) => a.name.localeCompare(b.name));
                }
                this.regressionRegions = res;
                this.getUnusedRegRegions();
                if (this.scenarios) {
                    this.scenarios.forEach((s => {
                        s.regressionRegions.forEach(rr => {
                            const rrIdx = this.regressionRegions.findIndex(r => r.id === rr.id);
                            if (rrIdx > -1){
                                rr.citationID = this.regressionRegions[rrIdx].citationID;
                            }
                        });
                    }));
                }
            });
    }

    public getCitations() {
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.citationURL)
            .subscribe(res => {
                this.citations = res;
            });
    }

    public addError(errors) {
        // if user adds error, push empty object to array
        errors.push({});
    }

    compareObjects(Obj1, Obj2) {
        // used to make sure the existing options are showing in selects
        return Obj1 && Obj2 ? Obj1.id === Obj2.id : Obj1 === Obj2;
    }

    showInputModal() {
        // modal for expected results/parameter values
        let CloseResult;
        this.modalRef = this._modalService.open(this.valuesRef, { backdrop: 'static', keyboard: false, size: 'lg' });
        this.modalRef.result.then(
            result => {
                // this is the solution for the first modal losing scrollability
                if (document.querySelector('body > .modal')) {
                    document.body.classList.add('modal-open');
                }
                CloseResult = `Closed with: ${result}`;
            },
            reason => {
                CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'mathJaxEq']);
    }

    submitScenario() {
        // put edited scenario
        this.saveFilters();
        this._settingsService.putEntity('', this.editScen, this.configSettings.nssBaseURL +  this.configSettings.scenariosURL)
            .subscribe((response) => {
                this.requeryFilters();
                this._nssService.outputWimMessages(response);
                this.modalRef.close();
            }, error => {
                if (this._settingsService.outputWimMessages(error)) { return; }
                this._toasterService.pop('error', 'Error editing Scenario', error._body.message || error.statusText);
            }
            );
    }

    outputWimMessages(msg) {
        // takes messages from http requests and outputs into toast
        const existingMsgs = [];
        for (const key of Object.keys(msg)) {
            for (const item of msg[key]) {
                // skip duplicate messages
                if (existingMsgs.indexOf(item) == -1) {
                    existingMsgs.push(item);
                    this._toasterService.pop(key, key.charAt(0).toUpperCase() + key.slice(1), item);
                }
            }
        }
    }

    showMathjax(reg) {
        // updates Mathjax as the user edits the equation
        const equ = document.getElementById('mathjaxEq' + reg.id);
        equ.style.visibility = 'hidden';
        if (equ.firstChild) { equ.removeChild(equ.firstChild); }
        const equation = '`' + reg.equation.replace(/_/g, ' \\_') + '`';
        reg.equationMathJax = equation;
        equ.insertAdjacentHTML('afterbegin', '<span [MathJax]>' + equation + '</span');
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'mathjaxEq' + reg.id],
            function () {
                equ.style.visibility = '';
            });
        // use this in original equations too??
    }

    // trying to PUT peak flow regs to low flow on button click, holding off for now
    /*moveToLowFlow(r, rrID, rrIndex, sgIndex) {
        // console.log(JSON.stringify(r));
        // console.log(this.scenarios);
        r.expected = {value: '', parameters: {}, intervalBounds: null};
        if (r.isEditing) {
            const count = this.checkPredInt(r);
            if (count <= 1) { r.predictionInterval = null; // if only id exists
            } else if (count === 6) {
                this.getBounds = true;
                r.expected.intervalBounds = {lower: null, upper: null};
            } else {
                this._toasterService.pop('error', 'Error', 'Prediction Interval not complete.');
                return;
            }
        }
        const regReg = this.scenarios[sgIndex].regressionRegions[rrIndex];
        this.getBounds = false;
        const lowFlowIndex = this.scenarios.findIndex(scen => scen.statisticGroupID === 4);
        if (lowFlowIndex > -1) {
            // if low flow statistics exists in the region, send that back with the new regression
            this.editScen = JSON.parse(JSON.stringify(this.scenarios[lowFlowIndex]));
            const lowRRIndex = this.editScen.regressionRegions.findIndex(rr => rr.id ===  regReg.id);
            if (lowRRIndex > -1) {
                this.editScen.regressionRegions[lowRRIndex].regressions = [r];
            } else {
                regReg.regressions = [r];
                this.editScen.regressionRegions.push(regReg);
            }
        } else {
            // if no low flow statistics in the region, edit peak flow scenario object
            this.editScen = JSON.parse(JSON.stringify(this.scenarios[sgIndex]));
            this.editScen.statisticGroupID = 4;
            this.editScen.statisticGroupName = 'Low-Flow Statistics';
            this.editScen.regressionRegions = [this.editScen[rrIndex]];
            this.editScen.regressionRegions[0] = [r];
        }
        // get list of necessary params to check expected results
        this.paramsNeeded = [];
        for (const param of this.editScen.regressionRegions[0]['parameters']) {
            if (r.equation.indexOf(param.code) > -1) {
                this.paramsNeeded.push(param); // only need values for params in equation
            }
        }
        this.changeStatGroup = true;
        this.showInputModal();
    }
    putLowFlow() {
        console.log(this.editScen);
        console.log(JSON.stringify(this.editScen));
        this._settingsService.putEntity('', this.editScen, this.configSettings.nssBaseURL + this.configSettings.scenariosURL + '?existingstatisticgroup=2')
        .subscribe(scen => {
            console.log(scen);
            alert('success');
        }, error => {
            if (this._settingsService.outputWimMessages(error)) {return; }
            this._toasterService.pop('error', 'Error moving regression', error._body.message || error.statusText);
        });
    }*/

    public saveRegReg(rr) {
        // put edited regression region
        this.saveFilters();
        const rridx = this.regressionRegions.findIndex(item => item.id === rr.id);
        const currentRR = this.regressionRegions[rridx];
        Object.keys(currentRR).forEach(key => {
            if (!this.editScenarioForm.value[key]) { this.editScenarioForm.value[key] = currentRR[key]; }
        });
        this._settingsService.putEntity(rr.id, this.editScenarioForm.value, this.configSettings.nssBaseURL + this.configSettings.regRegionURL).subscribe(res => {
            this.CancelEditRowClicked();
            this.requeryFilters();
            if (!res.headers) {
                this._toasterService.pop('info', 'Info', 'Regression Region was updated');
            } else { this._settingsService.outputWimMessages(res); }
        }, error => {
            if (this._settingsService.outputWimMessages(error)) { return; }
            this._toasterService.pop('error', 'Error creating Regression Region', error._body.message || error.statusText);
        }
        );
    }

    public checkLimits(val, min, max) {
        // make sure value is between the min/max limits
        if (val <= max && val >= min) { return true; }
        return false;
    }
    /////////////////////// Finish Add/Edit/Delete Scenarios Section ///////////////////////////

    public createNewCitation(rr) {
        // add new citation
        this.saveFilters();
        this._settingsService.postEntity(this.newCitForm.value, this.configSettings.nssBaseURL + this.configSettings.regRegionURL + '/' + rr.id + '/' +
            this.configSettings.citationURL)
            .subscribe((res: any) => {
                this.newCitForm.reset();
                this.addCitation = false;
                rr.citationID = res.id;
                if (!res.headers) {
                    this._toasterService.pop('info', 'Info', 'Citation was added');
                } else {
                    this._settingsService.outputWimMessages(res);
                }
                this.requeryFilters();
            }, error => {
                if (this._settingsService.outputWimMessages(error)) { return; }
                this._toasterService.pop('error', 'Error creating Citation', error._body.message || error.statusText);
            }
            );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

} // end component