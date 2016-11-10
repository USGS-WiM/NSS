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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var config_1 = require('../shared/config');
var RegionService = (function () {
    function RegionService(_http) {
        this._http = _http;
    }
    RegionService.prototype.getRegions = function () {
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS });
        return this._http.get(config_1.CONFIG.REGION_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RegionService.prototype.getRegion = function (id) {
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS });
        return this._http.get(config_1.CONFIG.REGION_URL + '/' + id, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RegionService.prototype.getRegionRegressionRegions = function (id, searchArgs) {
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.get(config_1.CONFIG.REGION_URL + '/' + id + '/regressionregions', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RegionService.prototype.getRegionRegressionTypes = function (id, searchArgs) {
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.get(config_1.CONFIG.REGION_URL + '/' + id + '/regressiontypes', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RegionService.prototype.getRegionStatisticGrps = function (id, searchArgs) {
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.get(config_1.CONFIG.REGION_URL + '/' + id + '/statisticgroups', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RegionService.prototype.getRegionScenario = function (id, searchArgs) {
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.get(config_1.CONFIG.REGION_URL + '/' + id + '/scenarios', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RegionService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    RegionService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http))
    ], RegionService);
    return RegionService;
}());
exports.RegionService = RegionService;
//# sourceMappingURL=regions.service.js.map