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
var eventSharing_service_1 = require('../services/eventSharing.service');
var MainPageComponent = (function () {
    function MainPageComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.title = "NSS Report";
        this.selectedRegion = '';
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sharedService.getRegionName().subscribe(function (reg) {
            _this.selectedRegion = reg;
        });
        this._sharedService.getRegRegions().subscribe(function (regReg) {
            _this.regressionRegions = regReg;
        });
        this._sharedService.getStatisticGroups().subscribe(function (statGrp) {
            _this.statisticGroups = statGrp;
        });
        this._sharedService.getScenarios().subscribe(function (s) {
            _this.scenarios = s;
        });
    };
    MainPageComponent.prototype.onSubmit = function (value) {
        var what = value;
    };
    MainPageComponent.prototype.showDescription = function (desc) {
        alert(desc);
    };
    MainPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wim-mainpage',
            styleUrls: ['./mainpage.css'],
            templateUrl: './mainpage.html'
        }),
        __param(0, core_1.Inject(eventSharing_service_1.SharedService))
    ], MainPageComponent);
    return MainPageComponent;
}());
exports.MainPageComponent = MainPageComponent;
//# sourceMappingURL=mainpage.component.js.map