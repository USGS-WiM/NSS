"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var chart_service_1 = require('../services/chart.service');
var nss_service_1 = require('../services/nss.service');
var MainPageComponent = (function () {
    function MainPageComponent(_chartService, _toasterService, _nssService) {
        this._chartService = _chartService;
        this._toasterService = _toasterService;
        this._nssService = _nssService;
        this.title = "NSS Report";
    }
    Object.defineProperty(MainPageComponent.prototype, "selectedRegion", {
        get: function () { return this._nssService.selectedRegion; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MainPageComponent.prototype, "selectedRegRegion", {
        get: function () { return this._nssService.selectedRegRegions; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MainPageComponent.prototype, "selectedStatisticGrp", {
        get: function () { return this._nssService.selectedStatGroups; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MainPageComponent.prototype, "selectedRegType", {
        get: function () { return this._nssService.selectedRegressionTypes; },
        enumerable: true,
        configurable: true
    });
    ;
    MainPageComponent.prototype.buildEquation = function (p, equation) {
        var fullEquation = "";
        var arrayOfparameterValues = [];
        p.forEach(function (P) {
            equation = equation != "0" ? equation.replace(P.Code, "`" + P.Code + "`") : "";
        });
        fullEquation = "`" + equation + "`";
        return fullEquation;
    };
    MainPageComponent.prototype.getHydroData = function () {
        return [[0.5, 0.941], [0.6, 1.25], [0.7, 1.65], [0.8, 2.04], [0.9, 2.59], [1, 3.14], [1.1, 3.84], [1.2, 4.55], [1.3, 5.25], [1.4, 5.96], [1.5, 6.58],
            [1.6, 7.05], [1.7, 7.45], [1.8, 7.68], [1.9, 7.84], [2, 7.76], [2.1, 7.52], [2.2, 7.21], [2.3, 6.74], [2.4, 6.27], [2.5, 5.8], [2.6, 5.33], [2.7, 4.86],
            [2.8, 4.39], [2.9, 4], [3, 3.68], [3.1, 3.37], [3.2, 3.06], [3.3, 2.82], [3.4, 2.59], [3.5, 2.35], [3.6, 2.19], [3.7, 2.04], [3.8, 1.88], [3.9, 1.72],
            [4, 1.57], [4.1, 1.49], [4.2, 1.33], [4.3, 1.25], [4.4, 1.18], [4.5, 1.1], [4.6, 1.02], [4.7, 0.941], [4.8, 0.862], [4.9, 0.784]];
    };
    MainPageComponent.prototype.getFreqData = function () {
        return [[2, 7.9567], [2.5, 10.181], [3.33, 13.76], [4, 15.997], [5, 19.113], [10, 31.292], [20, 47.188], [50, 72.142], [100, 98.848], [200, 126.48], [504, 173.3]];
    };
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hydroChartsArray = [];
        this.resultsBack = false;
        this._nssService.scenarios.subscribe(function (s) {
            _this.scenarios = s;
            _this.resultsBack = false;
            _this.equationResults = [];
            _this.scenarios.forEach(function (s) {
                s.RegressionRegions.forEach(function (rr) {
                    if (rr.Results) {
                        var eqResult_1 = { Name: "", Formulas: [] };
                        if (rr.ID > 0)
                            eqResult_1.Name = rr.Name;
                        _this.resultsBack = true;
                        rr.Results.forEach(function (R) {
                            if (eqResult_1.Name != "")
                                eqResult_1.Formulas.push({ "Code": R.code, "Equation": _this.buildEquation(rr.Parameters, R.Equation) });
                        });
                        if (rr.ID > 0)
                            _this.equationResults.push(eqResult_1);
                        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "MathJax"]);
                    }
                });
            });
        });
        this._nssService.getToast().subscribe(function (t) {
            _this.toast = t;
            _this._toasterService.pop(_this.toast);
        });
        this._chartService.getHydrograph().subscribe(function (h) {
            _this.hydrograph = h;
            _this.showChartBtn_txt = "Hide";
            _this.showCharts_btn = true;
            _this.scenarios.forEach(function (s) {
                s.RegressionRegions.forEach(function (rr) {
                    if (rr.Results) {
                        _this.hChartValues = _this.getHydroData();
                        _this.hChartXAxisValues = [];
                        rr.Results.forEach(function (R) {
                            _this.hChartXAxisValues.push(R.code);
                        });
                        _this.hChartOptions = {
                            title: { text: 'Hydrograph (Recurrence Interval: ' + _this.hydrograph.recurrence + ')' },
                            series: [{
                                    data: _this.hChartValues
                                }],
                            xAxis: {
                                title: { text: 'Time (hours)<br/>Hydrograph for ' + _this.hydrograph.lagTime + '-yr interval<br/>NOTE: May not represent actual hydrograph' },
                            },
                            yAxis: {
                                title: { text: 'Discharge (cubic meters per second)' }
                            }
                        };
                    }
                });
            });
            _this.hydroChartsArray.push(_this.hChartOptions);
        });
        this._chartService.getFrequency().subscribe(function (f) {
            _this.fChartValues = _this.getFreqData();
            _this.showChartBtn_txt = "Hide";
            _this.showCharts_btn = true;
            _this.fChartOptions = {
                title: { text: 'Frequency Plot' },
                series: [{
                        data: _this.fChartValues
                    }],
                xAxis: {
                    title: { text: 'Recurrence Interval, in years<br/>Flood Frequency Plot' },
                },
                yAxis: {
                    title: { text: 'Peak Discharge, In cubic meters per second' }
                }
            };
        });
    };
    MainPageComponent.prototype.compareValue = function (value) {
        var ev = { missingVal: false, OutOfRange: false };
        if (value.Value) {
            if (value.Limits !== undefined) {
                if (value.Value > value.Limits.Max || value.Value < value.Limits.Min) {
                    value.OutOfRange = true;
                    value.missingVal = false;
                }
                else {
                    value.OutOfRange = false;
                    value.missingVal = false;
                }
            }
            else {
                value.OutOfRange = false;
                value.missingVal = false;
            }
        }
        else {
            value.OutOfRange = false;
            value.missingVal = false;
        }
    };
    MainPageComponent.prototype.removeHydroChart = function (ind) {
        this.hydroChartsArray.splice(ind, 1);
    };
    MainPageComponent.prototype.removeFreqChart = function () {
        this.fChartOptions = null;
    };
    MainPageComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9\+\-\.\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    MainPageComponent.prototype.showHideCharts = function () {
        this.showCharts_btn = !this.showCharts_btn;
        if (this.showCharts_btn)
            this.showChartBtn_txt = "Hide";
        else
            this.showChartBtn_txt = "Show";
    };
    MainPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wim-mainpage',
            styleUrls: ['./mainpage.css'],
            templateUrl: './mainpage.html'
        }),
        __param(0, core_1.Inject(chart_service_1.ChartService)),
        __param(1, core_1.Inject(angular2_toaster_1.ToasterService)),
        __param(2, core_1.Inject(nss_service_1.NSSService))
    ], MainPageComponent);
    return MainPageComponent;
}());
exports.MainPageComponent = MainPageComponent;
//# sourceMappingURL=mainpage.component.js.map