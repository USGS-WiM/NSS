"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var CONFIG = (function () {
    function CONFIG() {
    }
    Object.defineProperty(CONFIG, "REGION_URL", {
        get: function () { return this.baseURL + 'regions'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CONFIG, "REG_REGION_URL", {
        get: function () { return this.baseURL + 'regressionregions'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CONFIG, "CITATION_URL", {
        get: function () { return this.baseURL + 'citations'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CONFIG, "STATISTICGRP_URL", {
        get: function () { return this.baseURL + 'statisticgroups'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CONFIG, "MIN_JSON_HEADERS", {
        get: function () { return new http_1.Headers({ 'Accept': 'application/json' }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CONFIG, "JSON_HEADERS", {
        get: function () { return new http_1.Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }); },
        enumerable: true,
        configurable: true
    });
    ;
    CONFIG.baseURL = 'https://services.wim.usgs.gov/nssservicestest/';
    CONFIG = __decorate([
        core_1.Injectable()
    ], CONFIG);
    return CONFIG;
}());
exports.CONFIG = CONFIG;
//# sourceMappingURL=config.js.map