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
        this.regRegionName = '';
        this.regRegBind = new Subject_1.Subject();
        this.citationBind = new Subject_1.Subject();
    }
    SharedService.prototype.setRegion = function (reg) {
        this.regionName = reg;
        this.regBind.next(reg);
    };
    SharedService.prototype.getRegionName = function () {
        return this.regBind.asObservable();
    };
    SharedService.prototype.setRegRegion = function (regReg) {
        this.regRegionName = regReg;
        this.regRegBind.next(regReg);
    };
    SharedService.prototype.getRegRegionName = function () {
        return this.regRegBind.asObservable();
    };
    SharedService.prototype.setCitation = function (c) {
        this.citation = c;
        this.citationBind.next(c);
    };
    SharedService.prototype.getCitation = function () {
        return this.citationBind.asObservable();
    };
    SharedService = __decorate([
        core_1.Injectable()
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=sidebarMainpage.service.js.map