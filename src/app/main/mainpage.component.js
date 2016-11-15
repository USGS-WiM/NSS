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
var eventSharing_service_1 = require('../services/eventSharing.service');
var MainPageComponent = (function () {
    function MainPageComponent(_sharedService, _toasterService) {
        this._sharedService = _sharedService;
        this._toasterService = _toasterService;
        this.title = "NSS Report";
        this.selectedRegion = '';
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resultsBack = false;
        this._sharedService.getRegionName().subscribe(function (reg) {
            _this.selectedRegion = reg;
            _this.resultsBack = false;
        });
        this._sharedService.getRegRegions().subscribe(function (regReg) {
            _this.regressionRegions = regReg;
            if (_this.regressionRegions.length > 1)
                _this.showWeights = true;
            else
                _this.showWeights = false;
            _this.resultsBack = false;
        });
        this._sharedService.getStatisticGroups().subscribe(function (statGrp) {
            _this.statisticGroups = statGrp;
            _this.resultsBack = false;
        });
        this._sharedService.getScenarios().subscribe(function (s) {
            _this.scenarios = s;
            _this.resultsBack = false;
            _this.scenarios.forEach(function (s) {
                s.RegressionRegions.forEach(function (rr) {
                    if (rr.Results) {
                        _this.resultsBack = true;
                    }
                });
            });
        });
        this._sharedService.getToast().subscribe(function (t) {
            _this.toast = t;
            _this._toasterService.pop(_this.toast);
        });
    };
    MainPageComponent.prototype.compareValue = function (value) {
        if (value.Value) {
            if (value.Limits !== undefined) {
                if (value.Value > value.Limits.Max || value.Value < value.Limits.Min) {
                    value.OutOfRange = true;
                    value.missingVal = false;
                    this._sharedService.setScenarios(this.scenarios);
                }
                else {
                    value.OutOfRange = false;
                    value.missingVal = false;
                    this._sharedService.setScenarios(this.scenarios);
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
            this._sharedService.setScenarios(this.scenarios);
        }
    };
    MainPageComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9\+\-\.\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    MainPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wim-mainpage',
            styleUrls: ['./mainpage.css'],
            templateUrl: './mainpage.html'
        }),
        __param(0, core_1.Inject(eventSharing_service_1.SharedService)),
        __param(1, core_1.Inject(angular2_toaster_1.ToasterService))
    ], MainPageComponent);
    return MainPageComponent;
}());
exports.MainPageComponent = MainPageComponent;
//# sourceMappingURL=mainpage.component.js.map