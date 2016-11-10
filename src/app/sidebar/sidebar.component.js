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
var regions_service_1 = require('../services/regions.service');
var citations_service_1 = require('../services/citations.service');
var eventSharing_service_1 = require('../services/eventSharing.service');
var SidebarComponent = (function () {
    function SidebarComponent(_regionService, _sharedService, _citationService) {
        this._regionService = _regionService;
        this._sharedService = _sharedService;
        this._citationService = _citationService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doShow = true;
        this._regionService.getRegions().subscribe(function (reg) { return _this.regions = reg; }, function (error) { return _this.errorMessage = error; });
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
        var _this = this;
        this.selectedRegion = r;
        this._sharedService.setRegion(r.Name);
        this._sharedService.clearRegressionRegions();
        this._sharedService.clearStatisticGroups();
        this._sharedService.clearRegressionTypes();
        this.regressionRegions = [];
        this.regressionTypes = [];
        this.statisticGroups = [];
        this.selectedRegRegion = [];
        this.selectedRegType = [];
        this.selectedStatGrp = [];
        this._regionService.getRegionRegressionRegions(r.ID).subscribe(function (rr) {
            _this.regressionRegions = rr;
            _this.regressionRegions.forEach(function (r) {
                r.id = r.ID;
                r.name = r.Name;
            });
        }, function (error) { return _this.errorMessage = error; });
        this._regionService.getRegionRegressionTypes(r.ID).subscribe(function (rt) {
            _this.regressionTypes = rt;
            _this.regressionTypes.forEach(function (rt) {
                rt.id = rt.ID;
                rt.name = rt.Name;
            });
        }, function (error) { return _this.errorMessage = error; });
        this._regionService.getRegionStatisticGrps(r.ID).subscribe(function (sg) {
            _this.statisticGroups = sg;
            _this.statisticGroups.forEach(function (st) {
                st.id = st.ID;
                st.name = st.Name;
            });
        }, function (error) { return _this.errorMessage = error; });
        this._regionService.getRegionScenario(r.ID).subscribe(function (sc) {
            sc.forEach(function (s) {
                var i = s.Links[0].Href.indexOf('?');
                var param = s.Links[0].Href.substring(i + 1);
                _this._citationService.getCitations(new http_1.URLSearchParams(param)).subscribe(function (c) {
                    s.Citations = c;
                });
            });
            _this._sharedService.setScenarios(sc);
        });
    };
    SidebarComponent.prototype.onRegressionRegSelect = function () {
        var _this = this;
        var regRegionsIDstring = this.selectedRegRegion !== undefined ? this.selectedRegRegion.join(",") : '';
        var regTypesIDstring = this.selectedRegType !== undefined ? this.selectedRegType.join(",") : '';
        var statGrpIDstring = this.selectedStatGrp !== undefined ? this.selectedStatGrp.join(",") : '';
        var selectedRegressionRegionObjects = [];
        this.regressionRegions.forEach(function (rr) {
            if (_this.selectedRegRegion.map(function (selRR) { return selRR; }).indexOf(rr.ID) > -1) {
                selectedRegressionRegionObjects.push(rr);
            }
        });
        this._sharedService.setRegRegions(selectedRegressionRegionObjects);
        var regTypeParams = new http_1.URLSearchParams();
        regTypeParams.set('regressionregions', regRegionsIDstring);
        regTypeParams.set('statisticgroups', statGrpIDstring);
        this._regionService.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams).subscribe(function (rt) {
            _this.regressionTypes = rt;
            for (var rti = _this.selectedRegType.length; rti--;) {
                var RTind = rt.map(function (eachrt) { return eachrt.ID; }).indexOf(_this.selectedRegType[rti]);
                if (RTind < 0)
                    _this.selectedRegType.splice(rti, 1);
            }
            ;
            var selectedRegressionTypeObjects = [];
            _this.regressionTypes.forEach(function (rt) {
                if (_this.selectedRegType.map(function (selRT) { return selRT; }).indexOf(rt.ID) > -1) {
                    selectedRegressionTypeObjects.push(rt);
                }
            });
            _this._sharedService.setRegTypes(selectedRegressionTypeObjects);
            _this.regressionTypes.forEach(function (rt) {
                rt.id = rt.ID;
                rt.name = rt.Name;
            });
        }, function (error) { return _this.errorMessage = error; });
        var statGrpParams = new http_1.URLSearchParams();
        statGrpParams.set('regressionregions', regRegionsIDstring);
        statGrpParams.set('regressiontypes', regTypesIDstring);
        this._regionService.getRegionStatisticGrps(this.selectedRegion.ID, statGrpParams).subscribe(function (sg) {
            _this.statisticGroups = sg;
            for (var si = _this.selectedStatGrp.length; si--;) {
                var SSind = sg.map(function (eachsg) { return eachsg.ID; }).indexOf(_this.selectedStatGrp[si]);
                if (SSind < 0)
                    _this.selectedStatGrp.splice(si, 1);
            }
            ;
            var selectedStatGrpObjects = [];
            _this.statisticGroups.forEach(function (st) {
                if (_this.selectedStatGrp.map(function (selSG) { return selSG; }).indexOf(st.ID) > -1) {
                    selectedStatGrpObjects.push(st);
                }
            });
            _this._sharedService.setStatisticGroups(selectedStatGrpObjects);
            _this.statisticGroups.forEach(function (st) {
                st.id = st.ID;
                st.name = st.Name;
            });
        }, function (error) { return _this.errorMessage = error; });
        var scenarioParams = new http_1.URLSearchParams();
        scenarioParams.set('regressionregions', regRegionsIDstring);
        scenarioParams.set('regressiontypes', regTypesIDstring);
        scenarioParams.set('statisticgroups', statGrpIDstring);
        this._regionService.getRegionScenario(this.selectedRegion.ID, scenarioParams).subscribe(function (sc) {
            sc.forEach(function (s) {
                var i = s.Links[0].Href.indexOf('?');
                var param = s.Links[0].Href.substring(i + 1);
                _this._citationService.getCitations(new http_1.URLSearchParams(param)).subscribe(function (c) {
                    s.Citations = c;
                });
            });
            _this._sharedService.setScenarios(sc);
        });
    };
    SidebarComponent.prototype.onStatGrpSelect = function () {
        var _this = this;
        var statGrpIDstring = this.selectedStatGrp !== undefined ? this.selectedStatGrp.join(",") : '';
        var regRegionsIDstring = this.selectedRegRegion !== undefined ? this.selectedRegRegion.join(",") : '';
        var regTypesIDstring = this.selectedRegType !== undefined ? this.selectedRegType.join(",") : '';
        var selectedStatisticGrpObjects = [];
        this.statisticGroups.forEach(function (sg) {
            if (_this.selectedStatGrp.map(function (selSG) { return selSG; }).indexOf(sg.ID) > -1) {
                selectedStatisticGrpObjects.push(sg);
            }
        });
        this._sharedService.setStatisticGroups(selectedStatisticGrpObjects);
        var regTypeParams = new http_1.URLSearchParams();
        regTypeParams.set('regressionregions', regRegionsIDstring);
        regTypeParams.set('statisticgroups', statGrpIDstring);
        this._regionService.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams).subscribe(function (rt) {
            _this.regressionTypes = rt;
            for (var rti = _this.selectedRegType.length; rti--;) {
                var RTind = rt.map(function (eachrt) { return eachrt.ID; }).indexOf(_this.selectedRegType[rti]);
                if (RTind < 0)
                    _this.selectedRegType.splice(rti, 1);
            }
            ;
            var selectedRegressionTypeObjects = [];
            _this.regressionTypes.forEach(function (rt) {
                if (_this.selectedRegType.map(function (selRT) { return selRT; }).indexOf(rt.ID) > -1) {
                    selectedRegressionTypeObjects.push(rt);
                }
            });
            _this._sharedService.setRegTypes(selectedRegressionTypeObjects);
            _this.regressionTypes.forEach(function (rt) {
                rt.id = rt.ID;
                rt.name = rt.Name;
            });
        }, function (error) { return _this.errorMessage = error; });
        var regRegionParams = new http_1.URLSearchParams();
        regRegionParams.set('statisticgroups', statGrpIDstring);
        regRegionParams.set('regressiontypes', regTypesIDstring);
        this._regionService.getRegionRegressionRegions(this.selectedRegion.ID, regRegionParams).subscribe(function (rr) {
            _this.regressionRegions = rr;
            for (var rri = _this.selectedRegRegion.length; rri--;) {
                var RRind = rr.map(function (eachrr) { return eachrr.ID; }).indexOf(_this.selectedRegRegion[rri]);
                if (RRind < 0)
                    _this.selectedRegRegion.splice(rri, 1);
            }
            ;
            var selectedRegressionRegObjects = [];
            _this.regressionRegions.forEach(function (rr) {
                if (_this.selectedRegRegion.map(function (selRR) { return selRR; }).indexOf(rr.ID) > -1) {
                    selectedRegressionRegObjects.push(rr);
                }
            });
            _this._sharedService.setRegRegions(selectedRegressionRegObjects);
            _this.regressionRegions.forEach(function (r) {
                r.id = r.ID;
                r.name = r.Name;
            });
        }, function (error) { return _this.errorMessage = error; });
        var scenarioParams = new http_1.URLSearchParams();
        scenarioParams.set('regressionregions', regRegionsIDstring);
        scenarioParams.set('regressiontypes', regTypesIDstring);
        scenarioParams.set('statisticgroups', statGrpIDstring);
        this._regionService.getRegionScenario(this.selectedRegion.ID, scenarioParams).subscribe(function (sc) {
            sc.forEach(function (s) {
                var i = s.Links[0].Href.indexOf('?');
                var param = s.Links[0].Href.substring(i + 1);
                _this._citationService.getCitations(new http_1.URLSearchParams(param)).subscribe(function (c) {
                    s.Citations = c;
                });
            });
            _this._sharedService.setScenarios(sc);
        });
    };
    SidebarComponent.prototype.onRegTypeSelect = function () {
        var _this = this;
        var regTypesIDstring = this.selectedRegType !== undefined ? this.selectedRegType.join(",") : '';
        var statGrpIDstring = this.selectedStatGrp !== undefined ? this.selectedStatGrp.join(",") : '';
        var regRegionsIDstring = this.selectedRegRegion !== undefined ? this.selectedRegRegion.join(",") : '';
        var selectedRegressionTypeObjects = [];
        this.regressionRegions.forEach(function (rt) {
            if (_this.selectedRegType.map(function (selRT) { return selRT; }).indexOf(rt.ID) > -1) {
                selectedRegressionTypeObjects.push(rt);
            }
        });
        this._sharedService.setRegTypes(selectedRegressionTypeObjects);
        var statGrpParams = new http_1.URLSearchParams();
        statGrpParams.set('regressionregions', regRegionsIDstring);
        statGrpParams.set('regressiontypes', regTypesIDstring);
        this._regionService.getRegionStatisticGrps(this.selectedRegion.ID, statGrpParams).subscribe(function (sg) {
            _this.statisticGroups = sg;
            for (var si = _this.selectedStatGrp.length; si--;) {
                var SSind = sg.map(function (eachsg) { return eachsg.ID; }).indexOf(_this.selectedStatGrp[si]);
                if (SSind < 0)
                    _this.selectedStatGrp.splice(si, 1);
            }
            ;
            var selectedStatGrpObjects = [];
            _this.statisticGroups.forEach(function (sg) {
                if (_this.selectedStatGrp.map(function (selSG) { return selSG; }).indexOf(sg.ID) > -1) {
                    selectedStatGrpObjects.push(sg);
                }
            });
            _this._sharedService.setStatisticGroups(selectedStatGrpObjects);
            _this.statisticGroups.forEach(function (st) {
                st.id = st.ID;
                st.name = st.Name;
            });
        }, function (error) { return _this.errorMessage = error; });
        var regRegionParams = new http_1.URLSearchParams();
        regRegionParams.set('statisticgroups', statGrpIDstring);
        regRegionParams.set('regressiontypes', regTypesIDstring);
        this._regionService.getRegionRegressionRegions(this.selectedRegion.ID, regRegionParams).subscribe(function (rr) {
            _this.regressionRegions = rr;
            for (var rri = _this.selectedRegRegion.length; rri--;) {
                var RRind = rr.map(function (eachrr) { return eachrr.ID; }).indexOf(_this.selectedRegRegion[rri]);
                if (RRind < 0)
                    _this.selectedRegRegion.splice(rri, 1);
            }
            ;
            var selectedRegRegObjects = [];
            _this.regressionRegions.forEach(function (rr) {
                if (_this.selectedRegRegion.map(function (selRR) { return selRR; }).indexOf(rr.ID) > -1) {
                    selectedRegRegObjects.push(rr);
                }
            });
            _this._sharedService.setRegRegions(selectedRegRegObjects);
            _this.regressionRegions.forEach(function (r) {
                r.id = r.ID;
                r.name = r.Name;
            });
        }, function (error) { return _this.errorMessage = error; });
        var scenarioParams = new http_1.URLSearchParams();
        scenarioParams.set('regressionregions', regRegionsIDstring);
        scenarioParams.set('regressiontypes', regTypesIDstring);
        scenarioParams.set('statisticgroups', statGrpIDstring);
        this._regionService.getRegionScenario(this.selectedRegion.ID, scenarioParams).subscribe(function (sc) {
            sc.forEach(function (s) {
                var i = s.Links[0].Href.indexOf('?');
                var param = s.Links[0].Href.substring(i + 1);
                _this._citationService.getCitations(new http_1.URLSearchParams(param)).subscribe(function (c) {
                    s.Citations = c;
                });
            });
            _this._sharedService.setScenarios(sc);
        });
    };
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ['./sidebar.css'],
            selector: 'wim-sidebar',
            templateUrl: './sidebar.html'
        }),
        __param(0, core_1.Inject(regions_service_1.RegionService)),
        __param(1, core_1.Inject(eventSharing_service_1.SharedService)),
        __param(2, core_1.Inject(citations_service_1.CitationService))
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map