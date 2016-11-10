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
var OPTIONS = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS });
var CitationService = (function () {
    function CitationService(_http) {
        this._http = _http;
    }
    CitationService.prototype.getCitations = function (searchArgs) {
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.get(config_1.CONFIG.CITATION_URL, options)
            .map(function (cit) { return cit.json(); })
            .catch(this.handleError);
    };
    CitationService.prototype.getCitation = function (id) {
        return this._http.get(config_1.CONFIG.CITATION_URL + '/' + id, OPTIONS)
            .map(function (cit) { return cit.json(); })
            .catch(this.handleError);
    };
    CitationService.prototype.getRegressionRegionCitations = function (id) {
        return this._http.get(config_1.CONFIG.CITATION_URL + '?regressionregions=' + id, OPTIONS)
            .map(function (cit) { return cit.json(); })
            .catch(this.handleError);
    };
    CitationService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    CitationService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http))
    ], CitationService);
    return CitationService;
}());
exports.CitationService = CitationService;
//# sourceMappingURL=citations.service.js.map