"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var SharedService = (function () {
    function SharedService() {
        this.regionName = '';
        this.regBind = new Subject_1.Subject();
        this.regRegBind = new Subject_1.Subject();
        this.statGrpBind = new Subject_1.Subject();
        this.regTypeBind = new Subject_1.Subject();
        this.scenarioBind = new Subject_1.Subject();
        this.toastBind = new Subject_1.Subject();
        this.hydroBind = new Subject_1.Subject();
        this.freqBind = new Subject_1.Subject();
    }
    SharedService.prototype.setRegion = function (reg) {
        this.regionName = reg;
        this.regBind.next(reg);
    };
    SharedService.prototype.getRegionName = function () {
        return this.regBind.asObservable();
    };
    SharedService.prototype.setRegRegions = function (regRegions) {
        this.regressionRegions = regRegions;
        this.regRegBind.next(regRegions);
    };
    SharedService.prototype.getRegRegions = function () {
        return this.regRegBind.asObservable();
    };
    SharedService.prototype.clearRegressionRegions = function () {
        this.regRegBind.next([]);
    };
    SharedService.prototype.setStatisticGroups = function (statGrps) {
        this.statisticGroups = statGrps;
        this.statGrpBind.next(statGrps);
    };
    SharedService.prototype.getStatisticGroups = function () {
        return this.statGrpBind.asObservable();
    };
    SharedService.prototype.clearStatisticGroups = function () {
        this.statGrpBind.next([]);
    };
    SharedService.prototype.setRegTypes = function (regTypes) {
        this.regressionTypes = regTypes;
        this.regTypeBind.next(regTypes);
    };
    SharedService.prototype.getRegTypes = function () {
        return this.regTypeBind.asObservable();
    };
    SharedService.prototype.clearRegressionTypes = function () {
        this.regTypeBind.next([]);
    };
    SharedService.prototype.setScenarios = function (s) {
        this.scenarios = s;
        this.scenarioBind.next(s);
    };
    SharedService.prototype.getScenarios = function () {
        return this.scenarioBind.asObservable();
    };
    SharedService.prototype.showToast = function (t) {
        this.toast = t;
        this.toastBind.next(t);
    };
    SharedService.prototype.getToast = function () {
        return this.toastBind.asObservable();
    };
    SharedService.prototype.setHydrograph = function (h) {
        this.hydrograph = h;
        this.hydroBind.next(h);
    };
    SharedService.prototype.getHydrograph = function () {
        return this.hydroBind.asObservable();
    };
    SharedService.prototype.setFrequency = function () {
        this.frequency = "newOne";
        this.freqBind.next("newOne");
    };
    SharedService.prototype.getFrequency = function () {
        return this.freqBind.asObservable();
    };
    SharedService = __decorate([
        core_1.Injectable()
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=eventSharing.service.js.map