"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var ChartService = (function () {
    function ChartService() {
        this.hydroBind = new Subject_1.Subject();
        this.freqBind = new Subject_1.Subject();
    }
    ChartService.prototype.setHydrograph = function (h) {
        this.hydrograph = h;
        this.hydroBind.next(h);
    };
    ChartService.prototype.getHydrograph = function () {
        return this.hydroBind.asObservable();
    };
    ChartService.prototype.setFrequency = function () {
        this.frequency = "newOne";
        this.freqBind.next("newOne");
    };
    ChartService.prototype.getFrequency = function () {
        return this.freqBind.asObservable();
    };
    ChartService = __decorate([
        core_1.Injectable()
    ], ChartService);
    return ChartService;
}());
exports.ChartService = ChartService;
//# sourceMappingURL=chart.service.js.map