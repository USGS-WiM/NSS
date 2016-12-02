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
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var config_1 = require('../shared/config');
var NSSService = (function () {
    function NSSService(_http) {
        this._http = _http;
        this.toastBind = new Subject_1.Subject();
        this.chartBind = new Subject_1.Subject();
        this._regionSubject = new Subject_1.Subject();
        this._regressionRegionSubject = new Subject_1.Subject();
        this._statisticGroupSubject = new Subject_1.Subject();
        this._regressionTypeSubject = new Subject_1.Subject();
        this._scenarioSubject = new Subject_1.Subject();
        this.getRegions();
    }
    NSSService.prototype.showToast = function (t) {
        this.toast = t;
        this.toastBind.next(t);
    };
    NSSService.prototype.getToast = function () {
        return this.toastBind.asObservable();
    };
    NSSService.prototype.addChart = function (c) {
        this.chartBind.next(c);
    };
    NSSService.prototype.getChart = function () {
        return this.chartBind.asObservable();
    };
    Object.defineProperty(NSSService.prototype, "regions", {
        get: function () {
            return this._regionSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NSSService.prototype, "selectedRegion", {
        get: function () {
            return this._selectedRegion;
        },
        set: function (v) {
            if (v == this._selectedRegion)
                return;
            this._selectedRegion = v;
            this._selectedRegRegions = [];
            this._selectedStatGroups = [];
            this._selectedRegressionTypes = [];
            this.chartBind.next("");
            this.initializeRegion();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(NSSService.prototype, "regressionRegions", {
        get: function () {
            return this._regressionRegionSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NSSService.prototype, "selectedRegRegions", {
        get: function () {
            return this._selectedRegRegions;
        },
        set: function (v) {
            this.chartBind.next("");
            if (v.length > 0) {
                this._selectedRegRegions = v;
                var srr_1 = [];
                this._selectedRegRegions.forEach(function (rr) {
                    srr_1.push(rr.ID);
                });
                this._regRegionIdParams = srr_1.length >= 0 ? srr_1.join(",") : '';
                var regTypeParams = new http_1.URLSearchParams();
                regTypeParams.set('regressionregions', this._regRegionIdParams);
                regTypeParams.set('statisticgroups', this._statGrpIdParams);
                this.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams);
                var statGrpParams = new http_1.URLSearchParams();
                statGrpParams.set('regressionregions', this._regRegionIdParams);
                statGrpParams.set('regressiontypes', this._regTypeIdParams);
                this.getRegionStatisticGrps(this.selectedRegion.ID, statGrpParams);
                var scenarioParams = new http_1.URLSearchParams();
                scenarioParams.set('regressionregions', this._regRegionIdParams);
                scenarioParams.set('regressiontypes', this._regTypeIdParams);
                scenarioParams.set('statisticgroups', this._statGrpIdParams);
                this.getRegionScenario(this.selectedRegion.ID, scenarioParams);
            }
            else {
                this._selectedRegRegions = [];
                var regTypeParams = new http_1.URLSearchParams();
                regTypeParams.set('statisticgroups', this._statGrpIdParams);
                this.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams);
                var statGrpParams = new http_1.URLSearchParams();
                statGrpParams.set('regressiontypes', this._regTypeIdParams);
                this.getRegionStatisticGrps(this.selectedRegion.ID, statGrpParams);
                var scenarioParams = new http_1.URLSearchParams();
                scenarioParams.set('regressiontypes', this._regTypeIdParams);
                scenarioParams.set('statisticgroups', this._statGrpIdParams);
                this.getRegionScenario(this.selectedRegion.ID, scenarioParams);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(NSSService.prototype, "statisticGroups", {
        get: function () {
            return this._statisticGroupSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NSSService.prototype, "selectedStatGroups", {
        get: function () {
            return this._selectedStatGroups;
        },
        set: function (v) {
            this.chartBind.next("");
            if (v.length > 0) {
                this._selectedStatGroups = v;
                var ssg_1 = [];
                this._selectedStatGroups.forEach(function (ss) {
                    ssg_1.push(ss.ID);
                });
                this._statGrpIdParams = ssg_1.length >= 0 ? ssg_1.join(",") : '';
                var regTypeParams = new http_1.URLSearchParams();
                regTypeParams.set('regressionregions', this._regRegionIdParams);
                regTypeParams.set('statisticgroups', this._statGrpIdParams);
                this.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams);
                var regRegionParams = new http_1.URLSearchParams();
                regRegionParams.set('statisticgroups', this._statGrpIdParams);
                regRegionParams.set('regressiontypes', this._regTypeIdParams);
                this.getRegionRegressionRegions(this.selectedRegion.ID, regRegionParams);
                var scenarioParams = new http_1.URLSearchParams();
                scenarioParams.set('regressionregions', this._regRegionIdParams);
                scenarioParams.set('regressiontypes', this._regTypeIdParams);
                scenarioParams.set('statisticgroups', this._statGrpIdParams);
                this.getRegionScenario(this.selectedRegion.ID, scenarioParams);
            }
            else {
                this._selectedStatGroups = [];
                var regTypeParams = new http_1.URLSearchParams();
                regTypeParams.set('regressionregions', this._regRegionIdParams);
                this.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams);
                var regRegionsParams = new http_1.URLSearchParams();
                regRegionsParams.set('regressiontypes', this._regTypeIdParams);
                this.getRegionRegressionRegions(this.selectedRegion.ID, regRegionsParams);
                var scenarioParams = new http_1.URLSearchParams();
                scenarioParams.set('regressiontypes', this._regTypeIdParams);
                scenarioParams.set('regressionregions', this._regRegionIdParams);
                this.getRegionScenario(this.selectedRegion.ID, scenarioParams);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(NSSService.prototype, "regressionTypes", {
        get: function () {
            return this._regressionTypeSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NSSService.prototype, "selectedRegressionTypes", {
        get: function () {
            return this._selectedRegressionTypes;
        },
        set: function (v) {
            this.chartBind.next("");
            if (v.length > 0) {
                this._selectedRegressionTypes = v;
                var srt_1 = [];
                this._selectedRegressionTypes.forEach(function (rt) {
                    srt_1.push(rt.ID);
                });
                this._regTypeIdParams = srt_1.length >= 0 ? srt_1.join(",") : '';
                var statGrpParams = new http_1.URLSearchParams();
                statGrpParams.set('regressionregions', this._regRegionIdParams);
                statGrpParams.set('regressiontypes', this._regTypeIdParams);
                this.getRegionStatisticGrps(this.selectedRegion.ID, statGrpParams);
                var regRegionParams = new http_1.URLSearchParams();
                regRegionParams.set('statisticgroups', this._statGrpIdParams);
                regRegionParams.set('regressiontypes', this._regTypeIdParams);
                this.getRegionRegressionRegions(this.selectedRegion.ID, regRegionParams);
                var scenarioParams = new http_1.URLSearchParams();
                scenarioParams.set('regressionregions', this._regRegionIdParams);
                scenarioParams.set('regressiontypes', this._regTypeIdParams);
                scenarioParams.set('statisticgroups', this._statGrpIdParams);
                this.getRegionScenario(this.selectedRegion.ID, scenarioParams);
            }
            else {
                this._selectedRegressionTypes = [];
                var regTypeParams = new http_1.URLSearchParams();
                regTypeParams.set('regressionregions', this._regRegionIdParams);
                this.getRegionStatisticGrps(this.selectedRegion.ID, regTypeParams);
                var regRegionsParams = new http_1.URLSearchParams();
                regRegionsParams.set('statisticgroups', this._statGrpIdParams);
                this.getRegionRegressionRegions(this.selectedRegion.ID, regRegionsParams);
                var scenarioParams = new http_1.URLSearchParams();
                scenarioParams.set('statisticgroups', this._statGrpIdParams);
                scenarioParams.set('regressionregions', this._regRegionIdParams);
                this.getRegionScenario(this.selectedRegion.ID, scenarioParams);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(NSSService.prototype, "scenarios", {
        get: function () {
            return this._scenarioSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NSSService.prototype.initializeRegion = function () {
        this.getRegionRegressionRegions(this.selectedRegion.ID);
        this.getRegionStatisticGrps(this.selectedRegion.ID);
        this.getRegionRegressionTypes(this.selectedRegion.ID);
        this.getRegionScenario(this.selectedRegion.ID);
    };
    NSSService.prototype.getRegions = function () {
        var _this = this;
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS });
        this._http.get(config_1.CONFIG.REGION_URL, options)
            .map(function (res) { return res.json(); }).subscribe(function (r) {
            _this._regionSubject.next(r);
        }, function (error) { return _this.handleError; });
    };
    NSSService.prototype.getRegion = function (id) {
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS });
        return this._http.get(config_1.CONFIG.REGION_URL + '/' + id, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NSSService.prototype.getRegionRegressionRegions = function (id, searchArgs) {
        var _this = this;
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.get(config_1.CONFIG.REGION_URL + '/' + id + '/regressionregions', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (rr) {
            rr.forEach(function (r) {
                r.id = r.ID;
                r.name = r.Name;
            });
            if (_this._selectedRegRegions != undefined) {
                for (var srr = _this._selectedRegRegions.length; srr--;) {
                    var RRSind = rr.map(function (eachrr) { return eachrr.ID; }).indexOf(_this._selectedRegRegions[srr].ID);
                    if (RRSind < 0)
                        _this._selectedRegRegions.splice(srr, 1);
                }
                ;
                var regRegIDarray_1 = new Array();
                _this._selectedRegRegions.forEach(function (rt) {
                    regRegIDarray_1.push(rt.ID);
                });
                _this._regRegionIdParams = regRegIDarray_1.length >= 0 ? regRegIDarray_1.join(",") : '';
            }
            ;
            _this._regressionRegionSubject.next(rr);
        }, function (error) { return _this.handleError; });
    };
    NSSService.prototype.getRegionRegressionTypes = function (id, searchArgs) {
        var _this = this;
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.get(config_1.CONFIG.REGION_URL + '/' + id + '/regressiontypes', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (rt) {
            rt.forEach(function (r) {
                r.id = r.ID;
                r.name = r.Name;
            });
            if (_this._selectedRegressionTypes != undefined) {
                for (var srt = _this._selectedRegressionTypes.length; srt--;) {
                    var RTSind = rt.map(function (eachrt) { return eachrt.ID; }).indexOf(_this._selectedRegressionTypes[srt].ID);
                    if (RTSind < 0)
                        _this._selectedRegressionTypes.splice(srt, 1);
                }
                ;
                var regTypeIDarray_1 = new Array();
                _this._selectedRegressionTypes.forEach(function (rt) {
                    regTypeIDarray_1.push(rt.ID);
                });
                _this._regTypeIdParams = regTypeIDarray_1.length >= 0 ? regTypeIDarray_1.join(",") : '';
            }
            ;
            _this._regressionTypeSubject.next(rt);
        }, function (error) { return _this.handleError; });
    };
    NSSService.prototype.getRegionStatisticGrps = function (id, searchArgs) {
        var _this = this;
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.get(config_1.CONFIG.REGION_URL + '/' + id + '/statisticgroups', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (sg) {
            sg.forEach(function (s) {
                s.id = s.ID;
                s.name = s.Name;
            });
            if (_this._selectedStatGroups != undefined) {
                for (var si = _this._selectedStatGroups.length; si--;) {
                    var SSind = sg.map(function (eachsg) { return eachsg.ID; }).indexOf(_this._selectedStatGroups[si].ID);
                    if (SSind < 0)
                        _this._selectedStatGroups.splice(si, 1);
                }
                ;
                var statGrpIDarray_1 = new Array();
                _this._selectedStatGroups.forEach(function (rt) {
                    statGrpIDarray_1.push(rt.ID);
                });
                _this._statGrpIdParams = statGrpIDarray_1.length >= 0 ? statGrpIDarray_1.join(",") : '';
            }
            ;
            _this._statisticGroupSubject.next(sg);
        }, function (error) { return _this.handleError; });
    };
    NSSService.prototype.getRegionScenario = function (id, searchArgs) {
        var _this = this;
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.get(config_1.CONFIG.REGION_URL + '/' + id + '/scenarios', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (s) {
            s.forEach(function (scen) {
                var i = scen.Links[0].Href.indexOf('?');
                var param = scen.Links[0].Href.substring(i + 1);
                _this.getCitations(new http_1.URLSearchParams(param)).subscribe(function (c) {
                    scen.Citations = c;
                });
                scen.RegressionRegions.forEach(function (rr) {
                    rr.Parameters.forEach(function (p) {
                        p.Value = null;
                    });
                });
            });
            _this._scenarioSubject.next(s);
        }, function (error) { return _this.handleError; });
    };
    NSSService.prototype.postScenarios = function (id, s, searchArgs) {
        var _this = this;
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.post(config_1.CONFIG.REGION_URL + '/' + id + '/scenarios/estimate', s, options)
            .map(function (sResult) { return sResult.json(); })
            .subscribe(function (sResult) {
            sResult.forEach(function (scen) {
                var i = scen.Links[0].Href.indexOf('?');
                var param = scen.Links[0].Href.substring(i + 1);
                _this.getCitations(new http_1.URLSearchParams(param)).subscribe(function (c) {
                    scen.Citations = c;
                });
            });
            _this._scenarioSubject.next(sResult);
        }, function (error) { return _this.handleError; });
    };
    NSSService.prototype.getCitations = function (searchArgs) {
        var options = new http_1.RequestOptions({ headers: config_1.CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.get(config_1.CONFIG.CITATION_URL, options)
            .map(function (cit) { return cit.json(); })
            .catch(this.handleError);
    };
    NSSService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    NSSService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http))
    ], NSSService);
    return NSSService;
}());
exports.NSSService = NSSService;
//# sourceMappingURL=nss.service.js.map