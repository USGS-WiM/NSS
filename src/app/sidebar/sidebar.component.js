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
var http_1 = require('@angular/http');
var nss_service_1 = require('../services/nss.service');
var chart_service_1 = require('../services/chart.service');
var SidebarComponent = (function () {
    function SidebarComponent(_nssService, _chartService) {
        this._nssService = _nssService;
        this._chartService = _chartService;
        this.plotTypes = ["Frequency Plot", "Hydrograph"];
        this.recurrences = [2, 5, 10, 25, 50, 100, 200, 500];
    }
    Object.defineProperty(SidebarComponent.prototype, "selectedRegion", {
        get: function () { return this._nssService.selectedRegion; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(SidebarComponent.prototype, "selectedRegRegion", {
        get: function () { return this._nssService.selectedRegRegions; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(SidebarComponent.prototype, "selectedRegType", {
        get: function () { return this._nssService.selectedRegressionTypes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "selectedStatGrp", {
        get: function () { return this._nssService.selectedStatGroups; },
        enumerable: true,
        configurable: true
    });
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doShow = true;
        this._nssService.regions.subscribe(function (regions) { _this.regions = regions; });
        this._nssService.regressionRegions.subscribe(function (rr) {
            _this.regressionRegions = rr;
            if (_this.selectedRegRegionIDs != undefined) {
                if (rr.length > 0) {
                    for (var rri = _this.selectedRegRegionIDs.length; rri--;) {
                        var RRind = rr.map(function (eachrr) { return eachrr.ID; }).indexOf(_this.selectedRegRegionIDs[rri]);
                        if (RRind < 0)
                            _this.selectedRegRegionIDs.splice(rri, 1);
                    }
                    ;
                }
                else
                    _this.selectedRegRegionIDs = [];
            }
        });
        this._nssService.statisticGroups.subscribe(function (sg) {
            _this.statisticGroups = sg;
            if (_this.selectedStatGrpIDs != undefined) {
                if (sg.length > 0) {
                    for (var si = _this.selectedStatGrpIDs.length; si--;) {
                        var SSind = sg.map(function (eachsg) { return eachsg.ID; }).indexOf(_this.selectedStatGrpIDs[si]);
                        if (SSind < 0)
                            _this.selectedStatGrpIDs.splice(si, 1);
                    }
                    ;
                }
                else
                    _this.selectedStatGrpIDs = [];
            }
        });
        this._nssService.regressionTypes.subscribe(function (rt) {
            _this.regressionTypes = rt;
            if (_this.selectedRegTypeIDs != undefined) {
                if (rt.length > 0) {
                    for (var rti = _this.selectedRegTypeIDs.length; rti--;) {
                        var RTind = rt.map(function (eachrt) { return eachrt.ID; }).indexOf(_this.selectedRegTypeIDs[rti]);
                        if (RTind < 0)
                            _this.selectedRegTypeIDs.splice(rti, 1);
                    }
                    ;
                }
                else
                    _this.selectedRegTypeIDs = [];
            }
        });
        this._nssService.scenarios.subscribe(function (s) {
            _this.scenarios = s;
            _this.scenarios.forEach(function (s) {
                if (s.RegressionRegions[0].Results)
                    _this.showChart = true;
                else
                    _this.showChart = false;
            });
        });
        this.myRRSettings = {
            pullRight: false,
            enableSearch: false,
            checkedStyle: 'glyphicon',
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
            checkedStyle: 'glyphicon',
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
            checkedStyle: 'glyphicon',
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
    };
    SidebarComponent.prototype.onRegSelect = function (r) {
        this.selectedRegRegionIDs = [];
        this.selectedStatGrpIDs = [];
        this.selectedRegTypeIDs = [];
        this._nssService.selectedRegion = r;
    };
    SidebarComponent.prototype.onRegressionRegSelect = function () {
        var _this = this;
        var selectedRegRegions = new Array();
        this.selectedRegRegionIDs.forEach(function (srr) {
            selectedRegRegions.push(_this.regressionRegions.filter(function (rr) { return rr.ID == srr; })[0]);
        });
        this._nssService.selectedRegRegions = selectedRegRegions;
    };
    SidebarComponent.prototype.onStatGrpSelect = function () {
        var _this = this;
        var selectedStatGroups = new Array();
        this.selectedStatGrpIDs.forEach(function (ssg) {
            selectedStatGroups.push(_this.statisticGroups.filter(function (rr) { return rr.ID == ssg; })[0]);
        });
        this._nssService.selectedStatGroups = selectedStatGroups;
    };
    SidebarComponent.prototype.onRegTypeSelect = function () {
        var _this = this;
        var selectedRegTypes = new Array();
        this.selectedRegTypeIDs.forEach(function (srt) {
            selectedRegTypes.push(_this.regressionTypes.filter(function (rr) { return rr.ID == srt; })[0]);
        });
        this._nssService.selectedRegressionTypes = selectedRegTypes;
    };
    SidebarComponent.prototype.CalculateScenario = function () {
        var ValueRequired = false;
        this.scenarios.forEach(function (s) {
            s.RegressionRegions.forEach(function (rr) {
                rr.Parameters.forEach(function (p) {
                    if (!p.Value) {
                        ValueRequired = true;
                        p.missingVal = true;
                    }
                    else
                        p.missingVal = false;
                });
            });
        });
        if (ValueRequired) {
            var toast = {
                type: 'warning',
                title: 'Error',
                body: 'All values are required'
            };
            this._nssService.showToast(toast);
        }
        else {
            this.scenarios.forEach(function (s) {
                delete s.Citations;
                s.RegressionRegions.forEach(function (rr) {
                    rr.Parameters.forEach(function (p) {
                        delete p.OutOfRange;
                        delete p.missingVal;
                    });
                });
            });
            var regTypesIDstring = this.selectedRegTypeIDs !== undefined ? this.selectedRegTypeIDs.join(",") : '';
            var statGrpIDstring = this.selectedStatGrpIDs !== undefined ? this.selectedStatGrpIDs.join(",") : '';
            var regRegionsIDstring = this.selectedRegRegionIDs !== undefined ? this.selectedRegRegionIDs.join(",") : '';
            var sParams = new http_1.URLSearchParams();
            sParams.set('regressionregions', regRegionsIDstring);
            sParams.set('regressiontypes', regTypesIDstring);
            sParams.set('statisticgroups', statGrpIDstring);
            this._nssService.postScenarios(this.selectedRegion.ID, this.scenarios, sParams);
        }
    };
    SidebarComponent.prototype.selectChart = function (p) {
        this._nssService.addChart(p);
        this.selectedPlot = "";
    };
    SidebarComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9\+\-\.\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ['./sidebar.css'],
            selector: 'wim-sidebar',
            templateUrl: './sidebar.html'
        }),
        __param(0, core_1.Inject(nss_service_1.NSSService)),
        __param(1, core_1.Inject(chart_service_1.ChartService))
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map