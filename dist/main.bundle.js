webpackJsonp([1,4],{

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 119;


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(78);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainview_mainview_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent() {
        __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["d" /* PageScrollConfig */].defaultScrollOffset = 85;
    }
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__["a" /* NavbarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "navbarComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */]) === "function" && _b || Object)
], AppComponent.prototype, "sidebarComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__mainview_mainview_component__["a" /* MainviewComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__mainview_mainview_component__["a" /* MainviewComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mainview_mainview_component__["a" /* MainviewComponent */]) === "function" && _c || Object)
], AppComponent.prototype, "mainviewCommponent", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(205),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_2_dropdown_multiselect__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mainview_mainview_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mainview_unique_pipe__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mainview_mathjax_mathjax_directive__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_page_scroll__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_highcharts__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_highcharts_dist_HighchartsService__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_highcharts_dist_HighchartsService__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_color_picker__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ngx_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_config_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__environments_environment__ = __webpack_require__(78);
/* unused harmony export ConfigLoader */
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function ConfigLoader(configService) {
    //Note: this factory needs to return a function (that returns a promise)
    return function () { return configService.load(__WEBPACK_IMPORTED_MODULE_18__environments_environment__["a" /* environment */].configFile); };
}
function highchartsFactory() {
    // need this to be able to do exporting of charts
    var hc = __webpack_require__(99);
    var exp = __webpack_require__(199);
    exp(hc);
    return hc;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__mainview_mainview_component__["a" /* MainviewComponent */], __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_10__mainview_unique_pipe__["a" /* UniquePipe */], __WEBPACK_IMPORTED_MODULE_12__mainview_mathjax_mathjax_directive__["a" /* MathjaxDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__["a" /* ToasterModule */],
            __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */], __WEBPACK_IMPORTED_MODULE_13_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_14_angular2_highcharts__["ChartModule"], __WEBPACK_IMPORTED_MODULE_16_ngx_color_picker__["ColorPickerModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__app_service__["a" /* NSSService */],
            { provide: __WEBPACK_IMPORTED_MODULE_15_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"], useFactory: highchartsFactory }, __WEBPACK_IMPORTED_MODULE_17_app_config_service__["a" /* ConfigService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_INITIALIZER"], useFactory: ConfigLoader, deps: [__WEBPACK_IMPORTED_MODULE_17_app_config_service__["a" /* ConfigService */]], multi: true }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathjaxDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var MathjaxDirective = (function () {
    function MathjaxDirective(el) {
        this.el = el;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.el.nativeElement]);
    }
    return MathjaxDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('MathJax'),
    __metadata("design:type", String)
], MathjaxDirective.prototype, "fractionString", void 0);
MathjaxDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[MathJax]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], MathjaxDirective);

var _a;
//# sourceMappingURL=mathjax.directive.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniquePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UniquePipe = (function () {
    function UniquePipe() {
    }
    UniquePipe.prototype.transform = function (value) {
        if (value !== undefined && value !== null) {
            return __WEBPACK_IMPORTED_MODULE_1_lodash__["uniqBy"](value, 'name');
        }
        return value;
    };
    return UniquePipe;
}());
UniquePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'unique',
        pure: false
    })
], UniquePipe);

//# sourceMappingURL=unique.pipe.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".mainPage {\r\n    width:auto;\r\n    margin-top: 102px;\r\n    margin-left: 345px;\r\n    position:relative;\r\n    box-sizing: border-box;\r\n    padding-right: 15px;\r\n    \r\n}\r\n\r\n.scrollable{\r\n    max-height:calc(100% - 70px);\r\n\r\n}\r\n.warning-text{\r\n    color:red;\r\n    font-style: italic;\r\n    font-size: small;\r\n}\r\n.reqError {\r\n    background-color: #efe1e1!important;\r\n    border: 1px solid #a94442!important;\r\n}\r\n.redFont {\r\n    color:red;\r\n}\r\n[hidden] { display: none !important;}\r\n[type=\"radio\"] {\r\n    position: initial !important;\r\n}\r\n[type=\"checkbox\"] {\r\n    position: initial !important;\r\n}\r\n@media print{\r\n    body * {\r\n        visibility: hidden;\r\n        -webkit-print-color-adjust: exact !important;\r\n    }\r\n    .hidden-print {\r\n        display: none !important;\r\n    }\r\n    #print-content * {\r\n        visibility: visible;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "nav.wim-nav{\r\n    box-shadow: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".wim-sidebar {\r\n    background-color: #eceef4;\r\n    width: 300px;\r\n    pointer-events: auto;\r\n    position: fixed;\r\n    top: 70;\r\n    -webkit-transform: translate3d(0px, 0px, 0px);\r\n            transform: translate3d(0px, 0px, 0px);\r\n    z-index: 100;\r\n    margin-top: 70px;\r\n    height: 100%;\r\n    height: calc(100% - 70px);\r\n    overflow: auto;\r\n    box-sizing: border-box;\r\n    padding: 25px 15px;\r\n}\r\n\r\n.sidebar-item{\r\n    display: block;\r\n    box-sizing: border-box;\r\n    padding: 0 0 15px 0;\r\n}\r\n\r\n.wim-sidebar select{\r\n    background-color: white;\r\n}\r\n.wim-sidebar button{\r\n    width: 100%;\r\n}\r\n.wim-sidebar label{\r\n    display: block;\r\n}\r\n\r\nselect:focus{\r\n\tbackground-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"14\" viewBox=\"0 0 29 14\" width=\"29\"><path fill=\"#0F8AFF\" d=\"M9.37727 3.625l5.08154 6.93523L19.54036 3.625\"/></svg>');\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<wim-navbar></wim-navbar>\r\n<wim-sidebar></wim-sidebar>\r\n<wim-mainview></wim-mainview>    \r\n"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<div id=\"printArea\" class=\"mainPage scrollable\">\r\n\r\n    <!-- toaster directive -->\r\n    <toaster-container></toaster-container>\r\n    <!-- / toaster directive -->\r\n\r\n    <div><h3>{{title}}</h3></div>\r\n    <div>{{timestamp | date:\"MMMM d, y hh:mma\"}}</div>\r\n\r\n    <div *ngIf=\"selectedRegion\">\r\n       <label>Region:</label>\r\n       <div>{{selectedRegion.Name}}</div>\r\n    </div>\r\n\r\n    <br/>\r\n    <div *ngIf=\"selectedStatisticGrp\">\r\n        <label>Statistic Group(s):</label>\r\n        <div>\r\n            <span *ngFor=\"let st of selectedStatisticGrp;let isLast=last\">{{st.Name}}{{isLast ? \"\" : \", \"}}</span>\r\n        </div>\r\n    </div>\r\n\r\n    <br />\r\n    <div *ngIf=\"selectedRegRegion\">\r\n        <label>Regression Group(s):</label>\r\n        <div>\r\n            <span *ngFor=\"let rr of selectedRegRegion;let isLast=last\">{{rr.Name}}{{isLast ? \"\" : \", \"}}</span>\r\n        </div>\r\n    </div>\r\n\r\n    <br />\r\n\r\n     <!-- scenarios && !resultsBack-->\r\n    <div class=\"hidden-print\" *ngIf=\"scenarios && !resultsBack\">\r\n        <label>Equation Variables</label>\r\n        <br/>\r\n        <div *ngIf=\"scenarios.length == 0\">There are no scenarios available for the options chosen.</div>\r\n        <form #scenarioForm=\"ngForm\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-11\" *ngFor=\"let sc of scenarios;let sInd = index\">\r\n                    <h3>{{sc.StatisticGroupName}}</h3>\r\n                    <div class=\"col-xs-10\" *ngIf=\"sc.RegressionRegions?.length > 0\">\r\n                        <table class=\"table\">\r\n                            <tr *ngFor=\"let rr of sc.RegressionRegions;let rInd = index\">\r\n                                <td style=\"vertical-align:middle;\">{{rr.Name}} <span *ngIf=\"multipleRegRegions\" style=\"font-size: x-small\">(RG_ID: {{rr.ID}})</span></td>\r\n                                <td *ngIf=\"showWeights\" class=\"col-xs-3\" style=\"vertical-align:middle;text-align:end;\">% Area Weight:</td>\r\n                                <td *ngIf=\"showWeights\" class=\"col-xs-2\">\r\n                                    <input style=\"display:inline;\" type=\"text\" id=\"PercentWeight\"class=\"form-control\" (keypress)=\"_keyPress($event)\" name=\"PercentWeight-{{rInd}}\" [(ngModel)]=\"rr.PercentWeight\">\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </div><!-- end length > 0-->\r\n                    <div *ngIf=\"sc.RegressionRegions.length == 0\"><h3>There are no Results for your selection. Please try another .... </h3></div>\r\n                </div>  <!-- end ngFor scenarios -->\r\n            </div>\r\n            <table *ngIf=\"scenarios[0].RegressionRegions.length > 0\" style=\"border:solid 1px gray\" class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"col-xs-5\">Parameter</th>\r\n                        <th>Code</th>\r\n                        <th class=\"col-xs-2\">Value</th>\r\n                        <th class=\"col-xs-1\" *ngIf=\"multipleRegRegions\"></th>\r\n                        <th class=\"col-xs-2\">Min Limit</th>\r\n                        <th class=\"col-xs-3\">Max Limit</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let p of uniqueParameters;let pInd=index \">\r\n                        <td>{{p.Name}} <a (click)=\"showDescription(p, pInd)\"><span class=\"glyphicon glyphicon-question-sign nss-tooltip\"></span></a>\r\n                            <!-- description span -->\r\n                            <br *ngIf=\"p.seeDescription\"/>\r\n                            <span style=\"font-size:small;\" *ngIf=\"p.seeDescription\">{{p.Description}}</span>\r\n                            <!-- outOfRange span -->\r\n                            <br *ngIf=\"p.OutOfRange\"/>\r\n                            <span *ngIf=\"p.OutOfRange\" class=\"warning-text\">Warning: Parameter is outside of suggested range. Estimates will be extrapolations with unknown errors</span>\r\n                        </td>\r\n                        <td>{{p.Code}}</td>\r\n                        <td>\r\n                            <div class=\"col-xs-10\" style=\"margin-left:0;padding-left:0;\">\r\n                                <input class=\"form-control\" style=\"display:inline;width: 70%\" [ngClass]=\"{'reqError':p.missingVal}\" type=\"text\"\r\n                                        (keypress)=\"_keyPress($event)\" (blur)=\"compareValue(p)\" [(ngModel)]=\"p.Value\" name=\"Value-{{pInd}}\" required>\r\n                                (<span [innerHTML]=\"setSuperScript(p.UnitType.Abbr)\" style=\"display:inline;\"></span>)\r\n                            </div>\r\n                        </td>\r\n                        <td *ngIf=\"multipleRegRegions\">\r\n                            <span *ngFor=\"let l of p.LimitArray\">\r\n                                <span  class=\"pull-right\" style=\"white-space:nowrap;\" *ngIf=\"l != undefined\" [ngClass]=\"{'redFont':l.OutOfRange}\">\r\n                                    <span style=\"font-size: x-small\">{{l != undefined ? l.rrID : ''}}</span><br />\r\n                                </span>\r\n                            </span>\r\n                        </td>\r\n                        <td>\r\n                            <span *ngFor=\"let l of p.LimitArray\">\r\n                            <span *ngIf=\"l!=undefined\" style=\"white-space:nowrap;\" [ngClass]=\"{'redFont':l.OutOfRange}\">{{l != undefined ? sigFigures(l.Min): \"--\"}}\r\n                                (<span [innerHTML]=\"setSuperScript(p.UnitType.Abbr)\"></span>)\r\n                                <br/>\r\n                            </span>\r\n                        </span></td>\r\n                        <td>\r\n                            <span *ngFor=\"let l of p.LimitArray\">\r\n                                <span *ngIf=\"l!=undefined\" style=\"white-space:nowrap;\" [ngClass]=\"{'redFont':l.OutOfRange}\">{{l != undefined ? sigFigures(l.Max) : \"--\"}} (\r\n                                    <span [innerHTML]=\"setSuperScript(p.UnitType.Abbr)\"></span>)\r\n                                    <br/>\r\n                                </span>\r\n                            </span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <h2 style=\"margin:0;padding:0\">Citations</h2>\r\n            <div *ngFor=\"let sc of scenarios\">\r\n                <label *ngIf=\"sc.Citations\">{{sc.StatisticGroupName}} Citations</label>\r\n                <div *ngFor=\"let l of sc.Citations\">\r\n                    <a [href]=\"l.CitationURL\" [target]=\"_blank\">\r\n                        <div>{{l.Author}}</div>\r\n                        <div>{{l.Title}}</div>\r\n                    </a>\r\n                    <br />\r\n                </div>\r\n            </div><!--end foreach scenario (for citations) {{l != undefined ? l.rrID : ''}}-->\r\n        </form>\r\n    </div> <!--end if scenarios-->\r\n\r\n     <!-- resultsBack-->\r\n    <div *ngIf=\"resultsBack\">\r\n        <button type=\"button\" class=\"btn-wim-primary hidden-print\" (click)=\"editScenario()\">Edit Scenario Parameters</button>\r\n        <div *ngFor=\"let s of scenarios\">\r\n            <h3>{{s.StatisticGroupName}}</h3>\r\n            <div *ngFor=\"let rr of s.RegressionRegions;let r = index\">\r\n                <div><!-- *ngIf=\"rr.ID > 0\">  -->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <a class=\"hidden-print\" (click)=\"exportInputTable(r)\" style=\"cursor: pointer\"><span class=\"glyphicon glyphicon-download-alt\"></span></a>\r\n                            <table #inputsTable>\r\n                                <tr><td>{{rr.Name}} Region</td></tr>\r\n                                <tr *ngIf=\"rr.PercentWeight\"><td>{{rr.PercentWeight}}% Weighted</td></tr>\r\n                                <tr *ngFor=\"let p of rr.Parameters\"><td>{{p.Name}} = {{p.Value}} (<span [innerHTML]=\"setSuperScript(p.UnitType.Abbr)\"></span>)</td></tr>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <!--<a class=\"hidden-print\" (click)=\"exportTable(r)\" style=\"cursor: pointer\"><span class=\"glyphicon glyphicon-download-alt\"></span></a>-->\r\n                            <span>[SEe, Standard Error of Estimate; SEp, Standard Error of Prediction; SE, Standard Error (other -- see report)]</span>\r\n                            <table #resultsTable style=\"border:solid 1px gray\" class=\"table\">\r\n                                <thead>\r\n                                    <tr style=\"border-bottom: white solid;\">\r\n                                        <th class=\"col-xs-6\">{{rr.Name}} Region</th>\r\n                                        <th>Value</th>\r\n                                        <th *ngIf=\"rr.Results[0].IntervalBounds\" colspan=\"2\">Prediction Interval</th>\r\n                                        <th *ngIf=\"rr.Results[0].Errors && rr.Results[0].Errors.length > 0\" [attr.colspan]=\"rr.Results[0].Errors.length\">Errors (%)</th>\r\n                                        <th *ngIf=\"rr.Results[0].EquivalentYears>0\">Equivalent Yrs.</th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"col-xs-6\">Description</th>\r\n                                        <th>(<span [innerHTML]=\"setSuperScript(rr.Results[0].Unit.Abbr)\"></span>)</th>\r\n                                        <th *ngIf=\"rr.Results[0].IntervalBounds\">Low</th>\r\n                                        <th *ngIf=\"rr.Results[0].IntervalBounds\">High</th>\r\n                                        <th *ngFor=\"let e of rr.Results[0]?.Errors\">{{e.Code}}</th>\r\n                                        <th *ngIf=\"rr.Results[0].EquivalentYears>0\"></th><!--space for if Equivalent Yrs-->\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let result of rr.Results\">\r\n                                        <td>{{result.Description}} ({{result.code}})</td>\r\n                                        <td>{{sigFigures(result.Value)}}</td>\r\n                                        <td *ngIf=\"rr.Results[0].IntervalBounds\">{{result.IntervalBounds != undefined && result.IntervalBounds.Lower != \"NaN\" ? sigFigures(result.IntervalBounds.Lower) : '---'}}</td>\r\n                                        <td *ngIf=\"rr.Results[0].IntervalBounds\">{{result.IntervalBounds != undefined && result.IntervalBounds.Upper != \"NaN\" ? sigFigures(result.IntervalBounds.Upper) : '---'}}</td>\r\n                                        <td *ngFor=\"let e of result?.Errors\">{{e.Value}}</td>\r\n                                        <td *ngIf=\"rr.Results[0].EquivalentYears>0\">{{result.EquivalentYears > 0 && result.EquivalentYears !== 999 ? result.EquivalentYears : 'N/A'}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div><!-- END rr.ID > 0\r\n                <div *ngIf=\"rr.ID == 0\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <a class=\"hidden-print\" (click)=\"exportInputTable(r)\" style=\"cursor: pointer\"><span class=\"glyphicon glyphicon-download-alt\"></span></a>\r\n                            <table #inputsTable>\r\n                                <tr><td>{{rr.Name}}</td></tr>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                    <br />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <table #resultsTable style=\"border:solid 1px gray\" class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"col-xs-6\">Description</th>\r\n                                        <th>Value</th>\r\n                                        <th *ngIf=\"rr.Results[0].EquivalentYears>0\">Equivalent<br/>Years</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let result of rr.Results\">\r\n                                        <td>{{result.Description}} ({{result.code}})</td>\r\n                                        <td>{{sigFigures(result.Value)}}</td>\r\n                                        <td *ngIf=\"rr.Results[0].EquivalentYears>0\">{{result.EquivalentYears}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div> --><!-- end 'Area-averaged'-->\r\n            </div>\r\n        </div> <!-- end for each Scenario-->\r\n\r\n        <!-- Citations -->\r\n        <h2 id=\"citations\" style=\"margin:0;padding:0\">Citations</h2>\r\n        <div *ngFor=\"let sc of scenarios\">\r\n            <div *ngFor=\"let c of sc.Citations\"><!--\" | unique\">-->\r\n            <a [href]=\"c.CitationURL\" [target]=\"_blank\">\r\n                <div>{{c.Author}}</div>\r\n                <div>{{c.Title}}</div>\r\n            </a>\r\n            <br />\r\n        </div>\r\n        <!-- ngfor each chart being added show here\r\n            //if showCharts_btn is true == show the charts and showChartBtn_txt says \"Hide\"\r\n            //if showCharts_btn is false == hide the charts and showChartBtn_txt says \"Show\" -->\r\n        <!-- charts-->\r\n        <div id=\"chart\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\" *ngIf=\"hydroChartsArray.length >0\">\r\n                    <h2 style=\"display:inline-block;margin-right:42px;\">Charts</h2>\r\n                    <button class=\"hidden-print\" style=\"display:inline-block;\" type=\"button\" (click)=\"showHideCharts()\">{{showChartBtn_txt}}</button>\r\n                </div>\r\n            </div>\r\n            <div [hidden]=\"!showCharts_btn\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-11\" *ngFor=\"let c of hydroChartsArray;let i = index\"> <!-- For Each hydroChartsArray start -->\r\n                        <div style=\"border:solid gray 1px;display:inline-block;margin-bottom:5px;\">\r\n                            <button type=\"button\" class=\"pull-right hidden-print\" (click)=\"removeHydroChart(i)\">x</button><br clear=\"all\" />\r\n                            <chart (load)=\"saveInstance($event.context)\" [options]=\"c\"></chart>\r\n                        </div>\r\n                        <div class=\"col-xs-5 pull-right hidden-print\" *ngIf=\"selectedPlot=='Hydrograph'\">\r\n                            <!-- Start of FORM for hydrochart -->\r\n                            <form id=\"myChartForm\" name=\"myChartForm\" #myChartForm=\"ngForm\" (ngSubmit)=\"refreshHydrograph()\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-xs-7\">Recurrence Interval:</label>\r\n                                    <div class=\"col-xs-5\">\r\n                                        <span class=\"select-wim\">\r\n                                            <select [(ngModel)]=\"hydrographs[i].recurrence\" (ngModelChange)=\"refreshHydrograph(i, myChartForm.form.controls)\" name=\"recurrence\">\r\n                                                <option [value]=\"r\" *ngFor=\"let r of hChartXAxisValues\">{{r}}</option>\r\n                                            </select>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\" style=\"padding-top:5px;\">\r\n                                    <label class=\"col-xs-7\">Lag Time (hrs):</label>\r\n                                    <div class=\"col-xs-5\">\r\n                                        <input type=\"text\" class=\"form-control\" name=\"lagTime\" (keypress)=\"_keyPress($event)\" [(ngModel)]=\"hydrographs[i].lagTime\" (keyup)=\"refreshHydrograph(i, myChartForm.form.controls)\">\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <br clear=\"all\" />\r\n                                <div class=\"pull-right hidden-print\"><a class=\"hidden-print\" (click)=\"showHideAdditionalChartSettings(i)\" style=\"cursor: pointer\">More options</a></div>\r\n                                <br clear=\"all\" />\r\n                                <div *ngIf=\"hydrographs[i]?.showExtraSettings\" [hidden]=\"!hydrographs[i].showExtraSettings\" class=\"panel panel-default hidden-print\">\r\n                                    <div class=\"panel-body\">\r\n                                        <div style=\"font-size: small\">\r\n                                            <span>* To zoom in, click and drag a box in the chart</span>\r\n\r\n                                        </div>\r\n                                        <!-- AXIS -->\r\n                                        <div>\r\n                                            <div style=\"font-size: large\">Axes</div>\r\n                                            <div class=\"form-group col-xs-6\">\r\n                                                <label class=\"control-label\">Choose Axis to update:</label>\r\n                                                <div>\r\n                                                    <span style=\"padding-right: 10px\">\r\n                                                        <input type=\"radio\"  name=\"axis\" [(ngModel)]=\"hydrographs[i].axis\" value=\"BottomX\" (click)=\"axis='BottomX'\" />Bottom X\r\n                                                    </span>\r\n                                                    <span>\r\n                                                        <input type=\"radio\" name=\"axis\" [(ngModel)]=\"hydrographs[i].axis\" value=\"LeftY\" (click)=\"axis='LeftY'\" />Left Y\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div> <!-- end (AXIS) form group  -->\r\n                                            <!-- TYPE -->\r\n                                            <div class=\"form-group col-xs-6\">\r\n                                                <label class=\"control-label\">Type:</label>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'BottomX'\">\r\n                                                    <span style=\"padding-right:10px\">\r\n                                                        <input type=\"radio\" name=\"type_BX\" [(ngModel)]=\"hydrographs[i].type_BX\" (click)=\"setXaxisType(i, 'linear')\" value=\"linear\" />Linear\r\n                                                    </span>\r\n                                                    <span>\r\n                                                        <input type=\"radio\" name=\"type_BX\" [(ngModel)]=\"hydrographs[i].type_BX\" (click)=\"setXaxisType(i, 'logarithmic')\" value=\"logarithmic\" />Logarithmic\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'LeftY'\">\r\n                                                    <span style=\"padding-right: 10px\">\r\n                                                        <input type=\"radio\" name=\"type_LY\" [(ngModel)]=\"hydrographs[i].type_LY\" (click)=\"setYaxisType(i, 'linear')\" value=\"linear\" />Linear\r\n                                                    </span>\r\n                                                    <span>\r\n                                                        <input type=\"radio\" name=\"type_LY\" [(ngModel)]=\"hydrographs[i].type_LY\" (click)=\"setYaxisType(i, 'logarithmic')\" value=\"logarithmic\" />Logarithmic\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div> <!-- end (TYPE) form group -->\r\n                                            <!-- TITLE -->\r\n                                            <div class=\"form-group  col-xs-12\">\r\n                                                <label class=\"control-label\">Axis Title:</label>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'BottomX'\">\r\n                                                    <textarea cols=\"60\" rows=\"4\" class=\"form-control\" [innerHTML]=\"hydrographs[i].title_BX\" name=\"title_BX\" (keyup)=\"updateBXtitle(i)\" [(ngModel)]=\"hydrographs[i].title_BX\"></textarea>\r\n                                                </div>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'LeftY'\">\r\n                                                    <textarea cols=\"60\" rows=\"4\" class=\"form-control\" [innerHTML]=\"hydrographs[i].title_LY\" name=\"title_LY\" (keyup)=\"updateLYtitle(i)\"  [(ngModel)]=\"hydrographs[i].title_LY\"></textarea>\r\n                                                </div>\r\n                                            </div> <!-- end (TITLE) form group -->\r\n                                            <!-- MAJOR UNITS -->\r\n                                            <div class=\"form-group col-xs-4\">\r\n                                                <label class=\"control-label\">Major Units:</label>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'BottomX'\">\r\n                                                    <span style=\"padding-right: 10px\"><input type=\"checkbox\" name=\"majorGrid_BX\" (change)=\"setXChartLines(i, 'gridLineWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].majorGrid_BX\" /> grid</span>\r\n                                                    <span><input type=\"checkbox\" name=\"majorTic_BX\" (change)=\"setXChartLines(i, 'tickWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].majorTic_BX\"  /> tics</span>\r\n                                                </div>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'LeftY'\">\r\n                                                    <span style=\"padding-right: 10px\"><input type=\"checkbox\" name=\"majorGrid_LY\" (change)=\"setYChartLines(i, 'gridLineWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].majorGrid_LY\" /> grid</span>\r\n                                                    <span><input type=\"checkbox\" name=\"majorTic_LY\" (change)=\"setYChartLines(i, 'tickWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].majorTic_LY\" /> tics</span>\r\n                                                </div>\r\n                                            </div> <!-- end (MAJOR UNITS) form group -->\r\n\r\n                                            <!-- MINOR UNITS -->\r\n                                            <div class=\"form-group col-xs-4\">\r\n                                                <label class=\"control-label\">Minor Units:</label>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'BottomX'\">\r\n                                                    <span style=\"padding-right: 10px\"><input [disabled]=\"hydrographs[i].type_BX == 'logarithmic'\" type=\"checkbox\" name=\"minorGrid_BX\" (change)=\"setXChartLines(i, 'minorGridLineWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].minorGrid_BX\"/> grid</span>\r\n                                                    <span style=\"padding-right:5px\"><input [disabled]=\"hydrographs[i].type_BX == 'logarithmic'\" type=\"checkbox\" name=\"minorTic_BX\" (change)=\"setXChartLines(i, 'minorTickWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].minorTic_BX\" /> tics</span>\r\n                                                    <span [hidden]=\"hydrographs[i].type_LY != 'logarithmic' && hydrographs[i].type_BX != 'logarithmic'\" style=\"font-size: small\">(Disabled with Log)</span>\r\n                                                </div>\r\n\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'LeftY'\">\r\n                                                    <span style=\"padding-right: 10px\"><input [disabled]=\"hydrographs[i].type_LY == 'logarithmic'\" type=\"checkbox\" name=\"minorGrid_LY\" (change)=\"setYChartLines(i, 'minorGridLineWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].minorGrid_LY\" /> grid</span>\r\n                                                    <span style=\"padding-right:5px\"><input [disabled]=\"hydrographs[i].type_LY == 'logarithmic'\" type=\"checkbox\" name=\"minorTic_LY\" (change)=\"setYChartLines(i, 'minorTickWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].minorTic_LY\" /> tics</span>\r\n                                                    <span [hidden]=\"hydrographs[i].type_LY != 'logarithmic' && hydrographs[i].type_BX != 'logarithmic'\" style=\"font-size: x-small;font-weight: bold\">(Disabled with Log)</span>\r\n                                                </div>\r\n                                            </div> <!-- end (MINOR UNITS) form group -->\r\n                                            <div class=\"form-group col-xs-4\">\r\n                                                <label class=\"control-label\">\r\n                                                    <div [hidden]=\"hydrographs[i].axis != 'BottomX'\">\r\n                                                        <span><input type=\"checkbox\" name=\"reverse_BX\" (change)=\"setReverseData(i, 'bx', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].reverse_BX\"/> reverse</span>\r\n                                                    </div>\r\n                                                    <div [hidden]=\"hydrographs[i].axis != 'LeftY'\">\r\n                                                        <span><input type=\"checkbox\" name=\"reverse_LY\" (change)=\"setReverseData(i, 'ly', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].reverse_LY\"/> reverse</span>\r\n                                                    </div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div><!-- end Axes -->\r\n                                        <br clear=\"all\"/>\r\n                                        <!--Curves and Legend-->\r\n                                        <div>\r\n                                            <div style=\"font-size: large\">Curves and Legend</div>\r\n                                            <div><!--Curves color/width -->\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Curve Color:</label>\r\n                                                  <div><input [colorPicker]=\"hydrographs[i].colorPickerColor\" (colorPickerChange)=\"changeLineColor(i,$event)\" [style.background]=\"hydrographs[i].colorPickerColor\" [value]=\"hydrographs[i].colorPickerColor\"/></div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Curve Width:</label>\r\n                                                    <div><input type=\"text\" name=\"lineWidth\" (keyup)=\"setLineWidth(i)\" [(ngModel)]=\"hydrographs[i].lineWidth\"/></div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div><!-- Line symbol color/point symbol -->\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Line Symbol Color:</label>\r\n                                                    <div><input [colorPicker]=\"hydrographs[i].lineSymbolFillColor\" (colorPickerChange)=\"changeLineSymbolColor(i,$event)\" [style.background]=\"hydrographs[i].lineSymbolFillColor\" [value]=\"hydrographs[i].lineSymbolFillColor\"/></div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Point Symbol:</label>\r\n                                                    <div>\r\n                                                        <span class=\"select-wim\">\r\n                                                            <select [(ngModel)]=\"hydrographs[i].lineSymbol\" (ngModelChange)=\"setLineSymbol(i,$event)\" name=\"lineSymbol\">\r\n                                                                <option value=\"circle\">Circle</option>\r\n                                                                <option value=\"square\">Square</option>\r\n                                                                <option value=\"diamond\">Diamond</option>\r\n                                                                <option value=\"triangle\">Triangle</option>\r\n                                                                <option value=\"triangle-down\">Triangle-down</option>\r\n                                                            </select>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <br clear=\"all\"/>\r\n                                            <div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Legend Label:</label>\r\n                                                    <div><input type=\"text\" class=\"form-control\" name=\"curveLabel\" [(ngModel)]=\"hydrographs[i].curveLabel\" (keyup)=\"updateCurveLabel(i)\" /></div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">\r\n                                                        <input type=\"checkbox\" name=\"dataLabels\" (change)=\"updateDataLabels(i, $event.target.checked)\" [(ngModel)]=\"hydrographs[i].dataLabels\"/> Show Data Values\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div> <!-- end curves-->\r\n                                    </div> <!-- end panel-body -->\r\n                                </div>\r\n                                <br clear=\"all\" />\r\n                            </form>\r\n                        </div><!-- end form for inputs-->\r\n                    </div> <!-- end for each hydroChartsArray loop -->\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"fChartOptions\">\r\n                <div *ngIf=\"hydroChartsArray.length == 0\">\r\n                    <!-- show show/hide button only if there are no hydrographs above it (because that has the button also)-->\r\n                    <h2 style=\"display:inline-block;margin-right:42px;\">Charts</h2>\r\n                    <button class=\"hidden-print\" style=\"display:inline-block;\" type=\"button\" (click)=\"showHideCharts()\">{{showChartBtn_txt}}</button>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-11\" *ngIf=\"showCharts_btn\">\r\n                        <div style=\"border:solid gray 1px;display:inline-block;margin-bottom:5px;\">\r\n                            <button type=\"button\" class=\"pull-right hidden-print\" (click)=\"removeFreqChart()\">x</button><br clear=\"all\" />\r\n                            <chart (load)=\"saveFreqInstance($event.context)\" [options]=\"fChartOptions\"></chart>\r\n                        </div>\r\n                        <div class=\"col-xs-5 pull-right\">\r\n                            <br clear=\"all\" />\r\n                            <div class=\"pull-right hidden-print\"><a (click)=\"showHideAddFChartSettings()\" style=\"cursor: pointer\">More options</a></div>\r\n                            <br clear=\"all\" />\r\n                            <div *ngIf=\"showExtraFREQSettings\" [hidden]=\"!showExtraFREQSettings\" class=\"panel panel-default hidden-print\">\r\n                                <div class=\"panel-body\">\r\n                                    <form id=\"myFChartForm\" name=\"myFChartForm\" #myFChartForm=\"ngForm\">\r\n                                        <div style=\"font-size: small\">\r\n                                            <span>* To zoom in, click and drag a box in the chart</span>\r\n                                        </div>\r\n                                        <!-- AXIS -->\r\n                                        <div>\r\n                                            <div style=\"font-size: large\">Axes</div>\r\n                                            <div class=\"form-group col-xs-6\">\r\n                                                <label class=\"control-label\">Choose Axis to update:</label>\r\n                                                <div>\r\n                                                    <span style=\"padding-right: 10px\">\r\n                                                        <input type=\"radio\"  name=\"Faxis\" [(ngModel)]=\"frequencyPlotChart.Faxis\" value=\"BottomX\" (click)=\"Faxis='BottomX'\" />Bottom X\r\n                                                    </span>\r\n                                                    <span>\r\n                                                        <input type=\"radio\" name=\"Faxis\" [(ngModel)]=\"frequencyPlotChart.Faxis\" value=\"LeftY\" (click)=\"Faxis='LeftY'\" />Left Y\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div> <!-- end (AXIS) form group  -->\r\n                                            <!-- TYPE -->\r\n                                            <div class=\"form-group col-xs-6\">\r\n                                                <label class=\"control-label\" [hidden]=\"frequencyPlotChart.Faxis != 'BottomX'\">Type:</label>\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'BottomX'\">\r\n                                                    <span>\r\n                                                        <input type=\"radio\" name=\"type_BX\" [(ngModel)]=\"frequencyPlotChart.type_BX\" (click)=\"setFreqXaxisType('returnPeriod')\" value=\"returnPeriod\" />Return Period\r\n                                                    </span><br/>\r\n                                                    <span style=\"padding-right: 10px\">\r\n                                                        <input type=\"radio\" name=\"type_BX\" [(ngModel)]=\"frequencyPlotChart.type_BX\" (click)=\"setFreqXaxisType('percent')\" value=\"percent\" />Percent\r\n                                                    </span>\r\n                                                    <span>\r\n                                                        <input type=\"radio\" name=\"type_BX\" [(ngModel)]=\"frequencyPlotChart.type_BX\" (click)=\"setFreqXaxisType('fraction')\" value=\"fraction\" />Fraction\r\n                                                    </span>\r\n\r\n                                                </div>\r\n                                            </div> <!-- end (TYPE) form group -->\r\n                                            <!-- TITLE -->\r\n                                            <div class=\"form-group  col-xs-12\">\r\n                                                <label class=\"control-label\">Axis Title:</label>\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'BottomX'\">\r\n                                                    <textarea cols=\"60\" rows=\"4\" class=\"form-control\" [innerHTML]=\"frequencyPlotChart.title_BX\" name=\"title_BX\" (keyup)=\"updateFreqBXtitle()\" [(ngModel)]=\"frequencyPlotChart.title_BX\"></textarea>\r\n                                                </div>\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'LeftY'\">\r\n                                                    <textarea cols=\"60\" rows=\"4\" class=\"form-control\" [innerHTML]=\"frequencyPlotChart.title_LY\" name=\"title_LY\" (keyup)=\"updateFreqLYtitle()\"  [(ngModel)]=\"frequencyPlotChart.title_LY\"></textarea>\r\n                                                </div>\r\n                                            </div> <!-- end (TITLE) form group -->\r\n                                            <!-- MAJOR UNITS -->\r\n                                            <div class=\"form-group col-xs-4\">\r\n                                                <label class=\"control-label\">Major Units:</label>\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'BottomX'\">\r\n                                                    <span style=\"padding-right: 10px\"><input type=\"checkbox\" name=\"majorGrid_BX\" (change)=\"setFreqXChartLines('gridLineWidth', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.majorGrid_BX\" /> grid</span>\r\n                                                    <span><input type=\"checkbox\" name=\"majorTic_BX\" (change)=\"setFreqXChartLines('tickWidth', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.majorTic_BX\"  /> tics</span>\r\n                                                </div>\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'LeftY'\">\r\n                                                    <span style=\"padding-right: 10px\"><input type=\"checkbox\" name=\"majorGrid_LY\" (change)=\"setFreqYChartLines('gridLineWidth', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.majorGrid_LY\" /> grid</span>\r\n                                                    <span><input type=\"checkbox\" name=\"majorTic_LY\" (change)=\"setFreqYChartLines('tickWidth', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.majorTic_LY\" /> tics</span>\r\n                                                </div>\r\n                                            </div> <!-- end (MAJOR UNITS) form group -->\r\n\r\n                                            <!-- MINOR UNITS -->\r\n                                            <div class=\"form-group col-xs-4\">\r\n                                                <label class=\"control-label\">Minor Units:</label>\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'BottomX'\">\r\n                                                    <span style=\"padding-right: 10px\">\r\n                                                        <input type=\"checkbox\" name=\"minorGrid_BX\" (change)=\"setFreqXChartLines('minorGridLineWidth', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.minorGrid_BX\"/> grid\r\n                                                    </span>\r\n                                                    <span style=\"padding-right:5px\">\r\n                                                        <input type=\"checkbox\" name=\"minorTic_BX\" (change)=\"setFreqXChartLines('minorTickWidth', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.minorTic_BX\" /> tics\r\n                                                    </span>\r\n                                                </div>\r\n\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'LeftY'\">\r\n                                                    <span style=\"padding-right: 10px\">\r\n                                                        <input [disabled]=\"'true'\" type=\"checkbox\" name=\"minorGrid_LY\" [(ngModel)]=\"frequencyPlotChart.minorGrid_LY\" /> grid\r\n                                                    </span>\r\n                                                    <span style=\"padding-right:5px\">\r\n                                                        <input [disabled]=\"'true'\" type=\"checkbox\" name=\"minorTic_LY\" [(ngModel)]=\"frequencyPlotChart.minorTic_LY\" /> tics\r\n                                                    </span>\r\n                                                    <span style=\"font-size: x-small;font-weight: bold\">(Disabled with Log)</span>\r\n                                                </div>\r\n                                            </div> <!-- end (MINOR UNITS) form group -->\r\n                                            <div class=\"form-group col-xs-4\">\r\n                                                <label class=\"control-label\">\r\n                                                    <div [hidden]=\"frequencyPlotChart.Faxis != 'BottomX'\">\r\n                                                        <span><input type=\"checkbox\" name=\"reverse_BX\" (change)=\"setFreqReverseData('bx', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.reverse_BX\"/> reverse</span>\r\n                                                    </div>\r\n                                                    <div [hidden]=\"frequencyPlotChart.Faxis != 'LeftY'\">\r\n                                                        <span><input type=\"checkbox\" name=\"reverse_LY\" (change)=\"setFreqReverseData('ly', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.reverse_LY\"/> reverse</span>\r\n                                                    </div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div><!-- end Axes -->\r\n                                        <br clear=\"all\"/>\r\n                                        <div>\r\n                                            <div style=\"font-size: large\">Curves and Legend</div>\r\n                                            <div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Curve Color:</label>\r\n                                                    <div><input [colorPicker]=\"frequencyPlotChart.colorPickerColor\" (colorPickerChange)=\"changeFreqLineColor($event)\" [style.background]=\"frequencyPlotChart.colorPickerColor\" [value]=\"frequencyPlotChart.colorPickerColor\"/></div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Curve Width:</label>\r\n                                                    <div><input type=\"text\" name=\"lineWidth\" (keyup)=\"setFreqLineWidth()\" [(ngModel)]=\"frequencyPlotChart.lineWidth\"/></div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Line Symbol Color:</label>\r\n                                                    <div><input [colorPicker]=\"frequencyPlotChart.lineSymbolFillColor\" (colorPickerChange)=\"changeFreqLineSymbolColor($event)\" [style.background]=\"frequencyPlotChart.lineSymbolFillColor\" [value]=\"frequencyPlotChart.lineSymbolFillColor\"/></div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Point Symbol:</label>\r\n                                                    <div>\r\n                                                        <span class=\"select-wim\">\r\n                                                            <select [(ngModel)]=\"frequencyPlotChart.lineSymbol\" (ngModelChange)=\"setFreqLineSymbol($event)\" name=\"lineSymbol\">\r\n                                                                <option value=\"circle\">Circle</option>\r\n                                                                <option value=\"square\">Square</option>\r\n                                                                <option value=\"diamond\">Diamond</option>\r\n                                                                <option value=\"triangle\">Triangle</option>\r\n                                                                <option value=\"triangle-down\">Triangle-down</option>\r\n                                                            </select>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <br clear=\"all\"/>\r\n                                            <div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Legend Label:</label>\r\n                                                    <div><input type=\"text\" class=\"form-control\" name=\"curveLabel\" [(ngModel)]=\"frequencyPlotChart.curveLabel\" (keyup)=\"updateFreqCurveLabel()\" /></div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">\r\n                                                        <input type=\"checkbox\" name=\"dataLabels\" (change)=\"updateFreqDataLabels($event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.dataLabels\"/> Show Data Values\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div> <!-- end curves-->\r\n                                    </form>\r\n                                </div> <!-- end panel-body -->\r\n                            </div>\r\n                            <br clear=\"all\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br clear=\"all\"/>\r\n\r\n        <!-- appendix section for equation -->\r\n        <a class=\"hidden-print\" (click)=\"exportAppendix()\" style=\"cursor: pointer\"><span class=\"glyphicon glyphicon-download-alt\"></span></a>\r\n        <h2 style=\"margin:0;padding:0\" id=\"appendix\">Appendix</h2>\r\n\r\n        <h4>Equations</h4>\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let e of equationResults\" class=\"col-xs-10\">\r\n            <table style=\"border:solid 1px gray\" class=\"table\">\r\n                    <tr><td colspan=\"2\">{{e.Name}}</td><tr>\r\n                    <tr *ngFor=\"let c of e.Formulas\">\r\n                        <td>{{c.Code}} = </td>\r\n                        <td><span [MathJax]=\"c.Equation\">{{c.Equation}}</span></td>\r\n                    </tr>\r\n            </table>\r\n            </div><!--End equations-->\r\n        </div>\r\n        <br clear=\"all\"/>\r\n\r\n        <h4>Parameter Definitions</h4>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-8\">\r\n                <table style=\"border:solid 1px gray\" class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"col-xs-3\">Name</th>\r\n                            <th class=\"col-xs-1\">Abbrev</th>\r\n                            <th class=\"col-xs-8\">Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let p of uniqueParameters\">\r\n                            <td>{{p.Name}}</td>\r\n                            <td>{{p.Code}}</td>\r\n                            <td>{{p.Description}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n            </table>\r\n            </div>\r\n        </div>\r\n        <br clear=\"all\"/>\r\n        <h4>Unit Types</h4>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-8\">\r\n                <table style=\"border:solid 1px gray\" class=\"table\">\r\n                    <thead><tr>\r\n                            <th class=\"col-xs-1\">Abbrev</th>\r\n                            <th class=\"col-xs-8\">Unit</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let u of uniqueUnitTypes\">\r\n                            <td>(<span [innerHTML]=\"setSuperScript(u.Abbr)\"></span>)</td>\r\n                            <td>{{u.Unit}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <br clear=\"all\"/>\r\n        <button type=\"button\" class=\"btn btn-wim-primary hidden-print\" (click)=\"printPage()\">Print Report</button>\r\n        <br/><br/><br/>\r\n    </div><!-- end results back -->\r\n</div>\r\n"

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"main hidden-print\">\r\n    <div class=\"btn sidebar-toggle visible-sm visible-xs\">\r\n        <i class=\"fa fa-bars fa-2x\" (click)=\"toggleSidebar()\"></i>\r\n    </div>\r\n    <a class=\"navbar-brand\" href=\"http://www.usgs.gov\"><img src=\"assets/img/usgs-logo.png\"></a>\r\n    <span class=\"app-name\">{{title}}</span>\r\n</nav>-->\r\n<nav class=\"wim-nav\">\r\n    <div class=\"container\" style=\"width: 100%;\">\r\n        <button class=\"mobile-nav-toggle\" (click)=\"toggleSidebar()\"></button>\r\n        <a href=\"https://usgs.gov\" class=\"nav-branding\">\r\n            <img src=\"https://wim.usgs.gov/website-assets/usgs-logo.png\" />\r\n        </a>\r\n        <span class=\"nav-title\">\r\n            {{title}}\r\n        </span>\r\n        <div class=\"nav-links\">\r\n            <!--<a href=\"/#/\"><span><i class=\"ion-plus-round\"></i> New Site</span></a>\r\n            <a href=\"/#/\"><span><i class=\"ion-ios-book\"></i> Guide</span></a>\r\n            <a href=\"/#/\"><span><i class=\"ion-help\"></i> FAQ</span></a>-->\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<form class=\"wim-sidebar fixed\">\r\n\r\n    <div class=\"sidebar-item\">\r\n        <label>Choose Region:</label>\r\n        <select [ngModel]=\"selectedRegion\" (ngModelChange)=\"onRegSelect($event)\" name=\"region\">\r\n            <option [ngValue]=\"i\" *ngFor=\"let i of regions\">{{i.Name}}</option>\r\n        </select>\r\n    </div>  <!-- end sidebar-item-->\r\n    \r\n\r\n    <div class=\"sidebar-item\" *ngIf=\"statisticGroups\">\r\n        <label>Limit by Statistic Group(s):</label>\r\n        <ss-multiselect-dropdown [options]=\"statisticGroups\" [texts]=\"myMSTexts\" [settings]=\"myRTSettings\" name=\"selectedStatGrpIDs\"\r\n                [(ngModel)]=\"selectedStatGrpIDs\" (ngModelChange)=\"onStatGrpSelect($event)\">\r\n        </ss-multiselect-dropdown>\r\n    </div>  <!-- end sidebar-item-->\r\n\r\n\r\n    <div class=\"sidebar-item\" *ngIf=\"regressionRegions\">\r\n        <label>Limit by Regression Group(s):</label>\r\n        <ss-multiselect-dropdown [options]=\"regressionRegions\" [texts]=\"myMSTexts\" [settings]=\"myRRSettings\" name=\"selectedRegRegionIDs\"\r\n                    [(ngModel)]=\"selectedRegRegionIDs\" (ngModelChange)=\"onRegressionRegSelect($event)\">\r\n        </ss-multiselect-dropdown>\r\n    </div>   <!-- end sidebar-item-->        \r\n\r\n\r\n    <div class=\"sidebar-item\" *ngIf=\"regressionTypes\">\r\n        <label>Limit by Statistic:</label>\r\n        <ss-multiselect-dropdown [options]=\"regressionTypes\" [texts]=\"myMSTexts\" [settings]=\"mySGSettings\" name=\"selectedRegTypeIDs\"\r\n                    [(ngModel)]=\"selectedRegTypeIDs\" (ngModelChange)=\"onRegTypeSelect($event)\">\r\n        </ss-multiselect-dropdown>\r\n    </div>  <!-- end sidebar-item-->\r\n\r\n\r\n    <div class=\"sidebar-item\" *ngIf=\"scenarios && scenarios.length > 0 && scenarios[0].RegressionRegions.length > 0\">\r\n        <label>Calculate Statistic:</label>\r\n        <button style=\"margin-top: 6px\" [disabled]=\"scenarios[0].RegressionRegions[0].Results != undefined\" type=\"button\" class=\"btn-black\" (click)=\"CalculateScenario()\">Compute</button>\r\n    </div>  <!-- end sidebar-item-->\r\n\r\n    <div class=\"sidebar-item\" *ngIf=\"showChart\">\r\n        <label>Chart:</label>\r\n        <ul>\r\n            <li *ngFor=\"let pt of plotTypes\" (click)=\"selectChart(pt)\" style=\"list-style:none;cursor:pointer;\">{{pt}}</li>\r\n        </ul>                \r\n    </div>   <!-- end sidebar-item-->\r\n\r\n    <div class=\"sidebar-item\" *ngIf=\"scenarios && scenarios.length > 0 && scenarios[0].RegressionRegions.length > 0 && scenarios[0].RegressionRegions[0].Results != undefined\">\r\n        <label>Go To:</label>\r\n        <ul>                \r\n            <li style=\"list-style:none\"><a pageScroll href=\"#citations\">Citations</a></li>\r\n            <li *ngIf=\"showChart\" style=\"list-style:none\"><a pageScroll href=\"#chart\">charts</a></li>\r\n            <li style=\"list-style:none\"><a pageScroll href=\"#appendix\">appendix</a></li>\r\n        </ul>            \r\n    </div>    <!-- end sidebar-item-->\r\n   <div class=\"identification pull-right\">powered by <a href=\"https://wim.usgs.gov/\" target=\"_blank\">WiM</a></div>\r\n\r\n\r\n</form>"

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(120);


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NSSService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NSSService = (function () {
    function NSSService(_http, _configService) {
        this._http = _http;
        this._configService = _configService;
        this.jsonHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ "Accept": "application/json", "Content-Type": "application/json" });
        this.hydroBind = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.chartBind = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.freqBind = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.toastBind = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        // -+-+-+-+-+-+ region section -+-+-+-+-+-+-+
        this._regionSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"](); //array of regions that sidebar and mainview use
        // -+-+-+-+-+-+ end region section -+-+-+-+-+-+-+
        // -+-+-+-+-+-+ regressionregion -+-+-+-+-+-+-+
        this._regressionRegionSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        // -+-+-+-+-+-+ end regressionRegion section -+-+-+-+-+-+-+
        // -+-+-+-+-+-+ statisticgroups section -+-+-+-+-+-+-+-+-+-+
        this._statisticGroupSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        // -+-+-+-+-+-+ end statisticgroups section -+-+-+-+-+-+-+-+-+-+
        // -+-+-+-+-+-+ regressionTypes -+-+-+-+-+-+-+-+-+-+-+-+ 
        this._regressionTypeSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        // -+-+-+-+-+-+ end regressionTypes section -+-+-+-+-+-+-+-+-+-+
        // -+-+-+-+-+-+ Scenarios section -+-+-+-+-+-+-+-+-+-+
        this._scenarioSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.configSettings = this._configService.getConfiguration();
        this.getRegions();
    }
    NSSService.prototype.setHydrograph = function (h) {
        this.hydrograph = h;
        this.hydroBind.next(h);
    };
    NSSService.prototype.getHydrograph = function () {
        return this.hydroBind.asObservable();
    };
    NSSService.prototype.addChart = function (c) {
        this.chartBind.next(c);
    };
    NSSService.prototype.getChart = function () {
        return this.chartBind.asObservable();
    };
    NSSService.prototype.setFrequency = function () {
        this.frequency = "newOne";
        this.freqBind.next("newOne");
    };
    NSSService.prototype.getFrequency = function () {
        return this.freqBind.asObservable();
    };
    NSSService.prototype.showToast = function (t) {
        this.toast = t;
        this.toastBind.next(t);
    };
    NSSService.prototype.getToast = function () {
        return this.toastBind.asObservable();
    };
    Object.defineProperty(NSSService.prototype, "regions", {
        get: function () {
            //getter (regions)
            return this._regionSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NSSService.prototype, "selectedRegion", {
        //getter (selectedRegion)
        get: function () {
            return this._selectedRegion;
        },
        //setter (selectedRegion)
        set: function (v) {
            if (v == this._selectedRegion)
                return;
            this._selectedRegion = v;
            this._selectedRegRegions = [];
            this._selectedStatGroups = [];
            this._selectedRegressionTypes = [];
            this.chartBind.next("");
            //go get all the other stuff (regressionregions, regressiontypes,statisticgroups and scenarios
            this.initializeRegion();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    //get all regions
    NSSService.prototype.getRegions = function () {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.jsonHeader });
        this._http.get(this.configSettings.baseURL + this.configSettings.regionURL, options)
            .map(function (res) { return res.json(); }).subscribe(function (r) {
            _this._regionSubject.next(r);
        }, function (error) { return _this.handleError; });
    };
    Object.defineProperty(NSSService.prototype, "regressionRegions", {
        get: function () {
            return this._regressionRegionSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NSSService.prototype, "selectedRegRegions", {
        //getter (selectedRegRegion)
        get: function () {
            return this._selectedRegRegions;
        },
        //setter (selectedRegion)
        set: function (v) {
            var _this = this;
            this.chartBind.next("");
            if (v.length > 0) {
                this._selectedRegRegions = v;
                var srr_1 = [];
                this._selectedRegRegions.forEach(function (rr) {
                    srr_1.push(rr.ID);
                });
                //now update statisticGroups, regressionTypes if there are selectedRegRegions
                this._regRegionIdParams = srr_1.length >= 0 ? srr_1.join(",") : '';
                //params for regressionTypes and statisticGroups
                var regTypeParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                regTypeParams.set('regressionregions', this._regRegionIdParams);
                regTypeParams.set('statisticgroups', this._statGrpIdParams);
                this.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams).subscribe(function (rt) {
                    //format all reg type stuff
                    _this.formatRegTypeStuff(rt);
                    //params for statistic groups
                    var statGrpParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                    statGrpParams.set('regressionregions', _this._regRegionIdParams);
                    statGrpParams.set('regressiontypes', _this._regTypeIdParams);
                    _this.getRegionStatisticGrps(_this.selectedRegion.ID, statGrpParams).subscribe(function (sg) {
                        _this.formatStatisticGrpStuff(sg);
                        //params for scenarios
                        var scenarioParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                        scenarioParams.set('regressionregions', _this._regRegionIdParams);
                        scenarioParams.set('regressiontypes', _this._regTypeIdParams);
                        scenarioParams.set('statisticgroups', _this._statGrpIdParams);
                        scenarioParams.set('unitsystems', '2');
                        _this.getRegionScenario(_this.selectedRegion.ID, scenarioParams); //get scenarios 
                    }, function (error) { return _this.handleError; }); //get StatisticGroups
                }, function (error) { return _this.handleError; }); //get regressionRegions                       
            } //v.lenght > 0
            else {
                //they cleared it
                this._selectedRegRegions = [];
                //now update statisticGroups, regressionTypes if there are selectedRegRegions
                var regTypeParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                regTypeParams.set('statisticgroups', this._statGrpIdParams);
                this.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams).subscribe(function (rt) {
                    _this.formatRegTypeStuff(rt);
                    //params for statistic groups
                    var statGrpParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                    statGrpParams.set('regressiontypes', _this._regTypeIdParams);
                    _this.getRegionStatisticGrps(_this.selectedRegion.ID, statGrpParams).subscribe(function (sg) {
                        _this.formatStatisticGrpStuff(sg);
                        //params for scenarios
                        var scenarioParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                        scenarioParams.set('regressiontypes', _this._regTypeIdParams);
                        scenarioParams.set('statisticgroups', _this._statGrpIdParams);
                        scenarioParams.set('unitsystems', '2');
                        _this.getRegionScenario(_this.selectedRegion.ID, scenarioParams); //get scenarios
                    }, function (error) { return _this.handleError; }); //get StatisticGroups            
                }, function (error) { return _this.handleError; }); //get RegressionTypes
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    //once http.get.map is done.. the .subcribe calls this function to get everything formatted
    NSSService.prototype.formatRegRegionStuff = function (rr) {
        rr.forEach(function (r) {
            r.id = r.ID;
            r.name = r.Name;
        });
        //remove from _selectedRegRegions if not in response.
        if (this._selectedRegRegions != undefined) {
            for (var srr = this._selectedRegRegions.length; srr--;) {
                var RRSind = rr.map(function (eachrr) { return eachrr.ID; }).indexOf(this._selectedRegRegions[srr].ID);
                if (RRSind < 0)
                    this._selectedRegRegions.splice(srr, 1);
            }
            ;
            //repopulate param string comma sep IDs
            var regRegIDarray_1 = new Array();
            this._selectedRegRegions.forEach(function (rt) {
                regRegIDarray_1.push(rt.ID); //pushing each ID into arrayof numbers to then join as comma sep string for parameters
            });
            this._regRegionIdParams = regRegIDarray_1.length >= 0 ? regRegIDarray_1.join(",") : '';
        }
        ;
        this._regressionRegionSubject.next(rr);
    };
    Object.defineProperty(NSSService.prototype, "statisticGroups", {
        get: function () {
            return this._statisticGroupSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NSSService.prototype, "selectedStatGroups", {
        //getter (selectedStatisticgroup)
        get: function () {
            return this._selectedStatGroups;
        },
        //setter (selectedStatisticgroup)
        set: function (v) {
            var _this = this;
            this.chartBind.next("");
            if (v.length > 0) {
                this._selectedStatGroups = v;
                var ssg_1 = [];
                this._selectedStatGroups.forEach(function (ss) {
                    ssg_1.push(ss.ID);
                });
                //now update regressionRegions, regressionTypes if there are selectedStatisticGroups
                this._statGrpIdParams = ssg_1.length >= 0 ? ssg_1.join(",") : '';
                //params for regressionTypes
                var regTypeParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                regTypeParams.set('regressionregions', this._regRegionIdParams);
                regTypeParams.set('statisticgroups', this._statGrpIdParams);
                this.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams).subscribe(function (rt) {
                    //format all reg type stuff
                    _this.formatRegTypeStuff(rt);
                    //params for regressionRegions
                    var regRegionParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                    regRegionParams.set('statisticgroups', _this._statGrpIdParams);
                    regRegionParams.set('regressiontypes', _this._regTypeIdParams);
                    _this.getRegionRegressionRegions(_this.selectedRegion.ID, regRegionParams).subscribe(function (rr) {
                        //format all reg regions stuff
                        _this.formatRegRegionStuff(rr);
                        //params for scenarios
                        var scenarioParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                        scenarioParams.set('regressionregions', _this._regRegionIdParams);
                        scenarioParams.set('regressiontypes', _this._regTypeIdParams);
                        scenarioParams.set('statisticgroups', _this._statGrpIdParams);
                        scenarioParams.set('unitsystems', '2');
                        _this.getRegionScenario(_this.selectedRegion.ID, scenarioParams); //get scenarios
                    }, function (error) { return _this.handleError; }); //getRegionRegressionRegions                      
                }, function (error) { return _this.handleError; }); //getRegionRegressionTypes
            } //v.lenght > 0
            else {
                //they cleared it
                this._selectedStatGroups = [];
                //now update statisticGroups, regressionTypes if there are selectedRegRegions
                var regTypeParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                regTypeParams.set('regressionregions', this._regRegionIdParams);
                this.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams).subscribe(function (rt) {
                    //format all reg type stuff
                    _this.formatRegTypeStuff(rt);
                    //params for regressionRegions
                    var regRegionsParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                    regRegionsParams.set('regressiontypes', _this._regTypeIdParams);
                    _this.getRegionRegressionRegions(_this.selectedRegion.ID, regRegionsParams).subscribe(function (rr) {
                        //format all reg regions stuff
                        _this.formatRegRegionStuff(rr);
                        //params for scenarios
                        var scenarioParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                        scenarioParams.set('regressiontypes', _this._regTypeIdParams);
                        scenarioParams.set('regressionregions', _this._regRegionIdParams);
                        scenarioParams.set('unitsystems', '2');
                        _this.getRegionScenario(_this.selectedRegion.ID, scenarioParams); //get scenarios
                    }, function (error) { return _this.handleError; }); //get getRegionRegressionRegions            
                }, function (error) { return _this.handleError; }); //get RegressionTypes           
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    //once http.get.map is done.. the .subcribe calls this function to get everything formatted
    NSSService.prototype.formatStatisticGrpStuff = function (sg) {
        sg.forEach(function (s) {
            s.id = s.ID;
            s.name = s.Name;
        });
        //remove from _selectedStatGroups if not in response.
        if (this._selectedStatGroups != undefined) {
            for (var si = this._selectedStatGroups.length; si--;) {
                var SSind = sg.map(function (eachsg) { return eachsg.ID; }).indexOf(this._selectedStatGroups[si].ID);
                if (SSind < 0)
                    this._selectedStatGroups.splice(si, 1);
            }
            ;
            //repopulate param string comma sep IDs
            var statGrpIDarray_1 = new Array();
            this._selectedStatGroups.forEach(function (rt) {
                statGrpIDarray_1.push(rt.ID); //pushing each ID into arrayof numbers to then join as comma sep string for parameters
            });
            this._statGrpIdParams = statGrpIDarray_1.length >= 0 ? statGrpIDarray_1.join(",") : '';
        }
        ;
        this._statisticGroupSubject.next(sg);
    };
    Object.defineProperty(NSSService.prototype, "regressionTypes", {
        get: function () {
            return this._regressionTypeSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NSSService.prototype, "selectedRegressionTypes", {
        //getter (selectedRegressionType)
        get: function () {
            return this._selectedRegressionTypes;
        },
        //setter (selectedRegressionType)
        set: function (v) {
            var _this = this;
            this.chartBind.next("");
            if (v.length > 0) {
                this._selectedRegressionTypes = v;
                var srt_1 = [];
                this._selectedRegressionTypes.forEach(function (rt) {
                    srt_1.push(rt.ID);
                });
                //now update regressionRegions, regressionTypes if there are selectedStatisticGroups
                this._regTypeIdParams = srt_1.length >= 0 ? srt_1.join(",") : '';
                var statGrpParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                statGrpParams.set('regressionregions', this._regRegionIdParams);
                statGrpParams.set('regressiontypes', this._regTypeIdParams);
                this.getRegionStatisticGrps(this.selectedRegion.ID, statGrpParams).subscribe(function (sg) {
                    _this.formatStatisticGrpStuff(sg);
                    //params for regRegions
                    var regRegionParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                    regRegionParams.set('statisticgroups', _this._statGrpIdParams);
                    regRegionParams.set('regressiontypes', _this._regTypeIdParams);
                    _this.getRegionRegressionRegions(_this.selectedRegion.ID, regRegionParams).subscribe(function (rr) {
                        _this.formatRegRegionStuff(rr);
                        //params for scenarios
                        var scenarioParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                        scenarioParams.set('regressionregions', _this._regRegionIdParams);
                        scenarioParams.set('regressiontypes', _this._regTypeIdParams);
                        scenarioParams.set('statisticgroups', _this._statGrpIdParams);
                        scenarioParams.set('unitsystems', '2');
                        _this.getRegionScenario(_this.selectedRegion.ID, scenarioParams); //get scenarios
                    }, function (error) { return _this.handleError; }); //get regressionRegions
                }, function (error) { return _this.handleError; }); //get RegressionTypes
            } //v.lenght > 0
            else {
                //they cleared it
                this._selectedRegressionTypes = [];
                //now update statisticGroups, regressionTypes if there are selectedRegRegions
                var regTypeParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                regTypeParams.set('regressionregions', this._regRegionIdParams);
                this.getRegionStatisticGrps(this.selectedRegion.ID, regTypeParams).subscribe(function (sg) {
                    _this.formatStatisticGrpStuff(sg);
                    //params for reg regions
                    var regRegionsParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                    regRegionsParams.set('statisticgroups', _this._statGrpIdParams);
                    _this.getRegionRegressionRegions(_this.selectedRegion.ID, regRegionsParams).subscribe(function (rr) {
                        _this.formatRegRegionStuff(rr);
                        //params for scenarios
                        var scenarioParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                        scenarioParams.set('statisticgroups', _this._statGrpIdParams);
                        scenarioParams.set('regressionregions', _this._regRegionIdParams);
                        scenarioParams.set('unitsystems', '2');
                        _this.getRegionScenario(_this.selectedRegion.ID, scenarioParams); //get scenarios
                    }, function (error) { return _this.handleError; }); //get regressionregions
                }, function (error) { return _this.handleError; }); //get RegressionTypes
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    //once http.get.map is done.. the .subcribe calls this function to get everything formatted
    NSSService.prototype.formatRegTypeStuff = function (rt) {
        rt.forEach(function (r) {
            r.id = r.ID;
            r.name = r.Name;
        });
        //remove from _selectedStatGroups if not in response.
        if (this._selectedRegressionTypes != undefined) {
            for (var srt = this._selectedRegressionTypes.length; srt--;) {
                var RTSind = rt.map(function (eachrt) { return eachrt.ID; }).indexOf(this._selectedRegressionTypes[srt].ID);
                if (RTSind < 0)
                    this._selectedRegressionTypes.splice(srt, 1);
            }
            ;
            //repopulate param string comma sep IDs
            var regTypeIDarray_1 = new Array();
            this._selectedRegressionTypes.forEach(function (rt) {
                regTypeIDarray_1.push(rt.ID); //pushing each ID into arrayof numbers to then join as comma sep string for parameters
            });
            this._regTypeIdParams = regTypeIDarray_1.length >= 0 ? regTypeIDarray_1.join(",") : '';
        }
        ;
        this._regressionTypeSubject.next(rt);
    };
    Object.defineProperty(NSSService.prototype, "scenarios", {
        get: function () {
            return this._scenarioSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NSSService.prototype.setScenarios = function (s) {
        this._scenarioSubject.next(s);
        this.chartBind.next("");
    };
    // -+-+-+-+-+-+ end Scenarios section -+-+-+-+-+-+-+-+-+-+
    //region has been selected, populate all other multiselects and get scenarios
    NSSService.prototype.initializeRegion = function () {
        var _this = this;
        this.getRegionRegressionRegions(this.selectedRegion.ID).subscribe(function (rr) { _this.formatRegRegionStuff(rr); }); //get RegressionRegions
        this.getRegionStatisticGrps(this.selectedRegion.ID).subscribe(function (sg) { _this.formatStatisticGrpStuff(sg); }); //get StatisticGroups
        this.getRegionRegressionTypes(this.selectedRegion.ID).subscribe(function (rt) { _this.formatRegTypeStuff(rt); }); //get RegressionTypes
        var scenarioParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        scenarioParams.set('unitsystems', '2');
        this.getRegionScenario(this.selectedRegion.ID, scenarioParams); //get scenarios
    };
    // -+-+-+-+-+-+-+-+-+-+-+-+ http GETs -+-+-+-+-+-+-+-+-+-+-+-+
    //get regressionRegions by region
    NSSService.prototype.getRegionRegressionRegions = function (id, searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.jsonHeader, search: searchArgs });
        return this._http.get(this.configSettings.baseURL + this.configSettings.regionURL + '/' + id + '/regressionregions', options)
            .map(function (res) { return res.json(); });
    };
    //get regressiontypes by region
    NSSService.prototype.getRegionRegressionTypes = function (id, searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.jsonHeader, search: searchArgs });
        return this._http.get(this.configSettings.baseURL + this.configSettings.regionURL + '/' + id + '/regressiontypes', options)
            .map(function (res) { return res.json(); });
    };
    //get statisticgroups by region
    NSSService.prototype.getRegionStatisticGrps = function (id, searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.jsonHeader, search: searchArgs });
        return this._http.get(this.configSettings.baseURL + this.configSettings.regionURL + '/' + id + '/statisticgroups', options)
            .map(function (res) { return res.json(); });
    };
    //get scenarios by region
    NSSService.prototype.getRegionScenario = function (id, searchArgs) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.jsonHeader, search: searchArgs });
        return this._http.get(this.configSettings.baseURL + this.configSettings.regionURL + '/' + id + '/scenarios', options)
            .map(function (res) { return res.json(); })
            .subscribe(function (s) {
            s.forEach(function (scen) {
                //get citations
                var i = scen.Links[0].Href.indexOf('?');
                var param = scen.Links[0].Href.substring(i + 1);
                _this.getCitations(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */](param)).subscribe(function (c) {
                    scen.Citations = c;
                });
                //clear Parameter.'Value'
                scen.RegressionRegions.forEach(function (rr) {
                    rr.Parameters.forEach(function (p) {
                        p.Value = null;
                    });
                });
            });
            _this._scenarioSubject.next(s);
        }, function (error) { return _this.handleError; });
    };
    //calculate Scenarios (POST)
    NSSService.prototype.postScenarios = function (id, s, searchArgs) {
        var _this = this;
        //let body = JSON.stringify(s);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.jsonHeader, search: searchArgs });
        return this._http.post(this.configSettings.baseURL + this.configSettings.regionURL + '/' + id + '/scenarios/estimate', s, options)
            .map(function (sResult) { return sResult.json(); })
            .subscribe(function (sResult) {
            sResult.forEach(function (scen) {
                if (scen.RegressionRegions.length > 0) {
                    //get citations
                    var i = scen.Links[0].Href.indexOf('?');
                    var param = scen.Links[0].Href.substring(i + 1);
                    _this.getCitations(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */](param)).subscribe(function (c) {
                        scen.Citations = c;
                    }, function (error) { return _this.handleError; });
                }
            });
            _this._scenarioSubject.next(sResult);
        }, function (error) { return _this.handleError; });
    };
    NSSService.prototype.getCitations = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.jsonHeader, search: searchArgs });
        return this._http.get(this.configSettings.baseURL + this.configSettings.citationURL, options)
            .map(function (cit) { return cit.json(); })
            .catch(this.handleError);
    };
    NSSService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return NSSService;
}());
NSSService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], NSSService);

var _a, _b;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
// ------------------------------------------------------------------------------
// ----- config.service..ts -----------------------------------------------
// ------------------------------------------------------------------------------
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: service to get configuration file


var ConfigService = (function () {
    function ConfigService(_http) {
        this._http = _http;
    }
    ConfigService.prototype.load = function (url) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._http.get(url).map(function (res) { return res.json(); }).subscribe(function (config) {
                _this.config = config;
                resolve();
            });
        });
    };
    ConfigService.prototype.getConfiguration = function () {
        return this.config;
    };
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ConfigService);

var _a;
//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster_angular2_toaster__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var MainviewComponent = (function () {
    function MainviewComponent(_nssService, _toasterService, _document, _pageScrollService) {
        this._nssService = _nssService;
        this._toasterService = _toasterService;
        this._document = _document;
        this._pageScrollService = _pageScrollService;
        this.DIMLESS_ARRAY = [
            [0.25, 0.12], [0.3, 0.16], [0.35, 0.21], [0.4, 0.26], [0.45, 0.33], [0.5, 0.4], [0.55, 0.49], [0.6, 0.58], [0.65, 0.67], [0.7, 0.76],
            [0.75, 0.84], [0.8, 0.9], [0.85, 0.95], [0.9, 0.98], [0.95, 1.00], [1.00, 0.99], [1.05, 0.96], [1.1, 0.92], [1.15, 0.86], [1.2, 0.8],
            [1.25, 0.74], [1.3, 0.68], [1.35, 0.62], [1.4, 0.56], [1.45, 0.51], [1.5, 0.47], [1.55, 0.43], [1.6, 0.39], [1.65, 0.36], [1.7, 0.33],
            [1.75, 0.3], [1.8, 0.28], [1.85, 0.26], [1.9, 0.24], [1.95, 0.22], [2.0, 0.2], [2.05, 0.19], [2.1, 0.17], [2.15, 0.16], [2.2, 0.15],
            [2.25, 0.14], [2.3, 0.13], [2.35, 0.12], [2.4, 0.11]
        ];
    }
    Object.defineProperty(MainviewComponent.prototype, "selectedRegion", {
        get: function () { return this._nssService.selectedRegion; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MainviewComponent.prototype, "selectedRegRegion", {
        get: function () { return this._nssService.selectedRegRegions; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MainviewComponent.prototype, "selectedStatisticGrp", {
        get: function () { return this._nssService.selectedStatGroups; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MainviewComponent.prototype, "selectedRegType", {
        get: function () { return this._nssService.selectedRegressionTypes; },
        enumerable: true,
        configurable: true
    });
    ;
    MainviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = "NSS Report";
        this.timestamp = new Date();
        this.charts = []; //instantiate
        this.hydroChartsArray = []; //instantiate 
        this.hydrographs = []; //instantiate
        this.resultsBack = false;
        this.multipleRegRegions = false;
        this.resultsErrorLength = 0; //used for colspan on Errors <th>
        //subscribe to scenarios
        this._nssService.scenarios.subscribe(function (s) {
            _this.scenarios = s;
            _this.resultsBack = false;
            _this.equationResults = [];
            _this.uniqueParameters = [];
            _this.uniqueUnitTypes = [];
            var regID = '';
            _this.multipleRegRegions = false;
            _this.scenarios.forEach(function (s) {
                _this.appendixEquationsforExport = [];
                //show weight inputs if more than 1 regression region chosen
                _this.showWeights = s.RegressionRegions.length > 1 ? true : false;
                if (s.RegressionRegions.length > 1)
                    _this.multipleRegRegions = true;
                else
                    _this.multipleRegRegions = false;
                s.RegressionRegions.forEach(function (rr, index) {
                    regID = "(RG_ID: " + rr.ID + ")"; //need to show the regID for each limit so they know which one they are out of range on
                    if (rr.Results) {
                        if (rr.Results[0].Errors) {
                            _this.resultsErrorLength = rr.Results[0].Errors.length;
                        }
                        ;
                        var eqResult_1 = { Name: "", Formulas: [] };
                        var equationString_1 = '';
                        if (index < 1) {
                            equationString_1 = rr.Name !== 'Area-Averaged' ? rr.Name + '\r\n' : '';
                        }
                        else {
                            var name = rr.Name !== 'Area-Averaged' ? rr.Name + '\r\n' : '';
                            equationString_1 = '\r\n' + name;
                        }
                        ;
                        //only care if average result
                        if (rr.ID > 0)
                            eqResult_1.Name = rr.Name;
                        _this.resultsBack = true;
                        rr.Results.forEach(function (R) {
                            if (eqResult_1.Name != "") {
                                eqResult_1.Formulas.push({ "Code": R.code, "Equation": _this.buildEquation(rr.Parameters, R.Equation) });
                                equationString_1 += R.code + '= ,' + R.Equation + '\r\n';
                            }
                        });
                        if (rr.ID > 0)
                            _this.equationResults.push(eqResult_1);
                        _this.appendixEquationsforExport.push(equationString_1); //push each equation string in for use when exporting appendix table later
                        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "MathJax"]); //for the appendix of equations
                    } //end there's results
                    //populate uniqueParameters and uniqueUnitTypes
                    if (rr.ID > 0) {
                        rr.Parameters.forEach(function (p) {
                            //is this param code already in array list?                        
                            var pIndex = _this.uniqueParameters.map(function (parame) { return parame.Code; }).indexOf(p.Code);
                            if (pIndex < 0) {
                                p.LimitArray = [];
                                if (p.Limits != undefined) {
                                    p.Limits.rrID = regID;
                                    p.LimitArray.push(p.Limits);
                                }
                                _this.uniqueParameters.push(p);
                            }
                            else {
                                //already in here. find the matching one and add it's limits to the LimitArray
                                if (p.Limits != undefined)
                                    p.Limits.rrID = regID;
                                _this.uniqueParameters[pIndex].LimitArray.push(p.Limits);
                            }
                            //is this unitType already in the array list?                        
                            var uIndex = _this.uniqueUnitTypes.map(function (unit) { return unit.Abbr; }).indexOf(p.UnitType.Abbr);
                            if (uIndex < 0) {
                                //not in there yet
                                _this.uniqueUnitTypes.push(p.UnitType);
                            }
                        });
                    }
                }); // end s.regressionRegion.forEach
            });
        });
        //subscribe to getToast
        this._nssService.getToast().subscribe(function (t) {
            _this.toast = t;
            _this._toasterService.pop(_this.toast);
        });
        //subscribe to charts
        this._nssService.getChart().subscribe(function (c) {
            if (c !== "") {
                //scroll down to the chart section
                var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["b" /* PageScrollInstance */].simpleInstance(_this._document, '#chart');
                _this._pageScrollService.start(pageScrollInstance);
            }
            if (c == "Hydrograph") {
                var H_areaAveraged_1 = false;
                _this.selectedPlot = "Hydrograph";
                var hydroG_1;
                hydroG_1 = { recurrence: null, lagTime: null, showExtraSettings: false, axis: 'BottomX', type_BX: 'linear', type_LY: 'linear', lineWidth: 1, lineSymbol: 'circle',
                    majorTic_BX: true, majorGrid_BX: true, minorTic_BX: true, minorGrid_BX: true,
                    majorTic_LY: true, majorGrid_LY: true, minorTic_LY: true, minorGrid_LY: true,
                    colorPickerColor: '#7CB5EC', curveLabel: 'PK25', lineSymbolFillColor: '#7CB5EC', reverse_LY: false, reverse_BX: false, dataLabels: false };
                _this.showChartBtn_txt = "Hide";
                _this.showCharts_btn = true;
                //get array of recurrences from result      
                var rec_1;
                _this.scenarios.forEach(function (s) {
                    if (s.RegressionRegions.length > 1) {
                        s.RegressionRegions.forEach(function (rr) {
                            if (rr.Name == "Area-Averaged") {
                                H_areaAveraged_1 = true; //area averaged, add title to chart stating
                                hydroG_1.curveLabel = "Area-Averaged";
                                _this.hChartXAxisValues = [];
                                rr.Results.forEach(function (R) {
                                    _this.hChartXAxisValues.push(R.code);
                                });
                                //use constant array to populate chart [][]
                                rec_1 = rr.Results.filter(function (r) { return r.code == _this.hChartXAxisValues[0]; })[0].Value;
                            }
                        });
                    }
                    else {
                        s.RegressionRegions.forEach(function (rr) {
                            _this.hChartXAxisValues = [];
                            rr.Results.forEach(function (R) {
                                _this.hChartXAxisValues.push(R.code);
                            });
                            //use constant array to populate chart [][]
                            rec_1 = rr.Results.filter(function (r) { return r.code == _this.hChartXAxisValues[0]; })[0].Value;
                        });
                    }
                }); //end foreach scenario
                hydroG_1.recurrence = _this.hChartXAxisValues[0]; //default to first one;
                hydroG_1.lagTime = 1; //default value to change later
                hydroG_1.title_BX = 'Time (hours)\nHydrograph for ' + hydroG_1.lagTime + '-yr interval\nNOTE: May not represent actual hydrograph';
                hydroG_1.title_LY = 'Discharge (cubic meters per second)';
                // http://api.highcharts.com/highcharts   , panning: true, panKey: 'shift'
                _this.hChartOptions = {
                    exporting: {
                        chartOptions: {
                            plotOptions: {
                                series: {
                                    dataLabels: {
                                        enabled: true
                                    }
                                }
                            }
                        },
                        fallbackToExportServer: false
                    },
                    chart: { type: 'line', zoomType: 'xy' },
                    title: { text: '' },
                    series: [{
                            data: _this.DIMLESS_ARRAY.map(function (p) { return [p[0] * 1, _this.sigFigures(p[1] * rec_1)]; }),
                            name: H_areaAveraged_1 ? 'PK25 (Area-weighted average)' : 'PK25',
                            states: {
                                hover: { enabled: false } //stops the line from getting thicker when mouse onto the chart
                            }
                        }],
                    tooltip: {
                        formatter: function () {
                            var s = '<b>(' + this.x + ', ' + this.y + ')</b>';
                            return s;
                        }
                    },
                    xAxis: {
                        title: {
                            text: 'Time (hours)<br/>Hydrograph for ' + hydroG_1.lagTime + '-yr interval<br/>NOTE: May not represent actual hydrograph',
                        },
                        startOnTick: true,
                        endOnTick: true,
                        gridLineWidth: 1,
                        minorGridLineWidth: 1,
                        tickWidth: 1,
                        minorTickWidth: 1,
                        minorTickInterval: 'auto',
                        minorTickLength: 5,
                        tickPosition: 'inside',
                        minorTickPosition: 'inside',
                        tickColor: '#000000',
                        minorTickColor: '#000000'
                    },
                    yAxis: {
                        title: { text: 'Discharge (cubic meters per second)' },
                        startOnTick: true,
                        endOnTick: true,
                        gridLineWidth: 1,
                        minorGridLineWidth: 1,
                        tickWidth: 1,
                        minorTickWidth: 1,
                        minorTickInterval: 'auto',
                        minorTickLength: 5,
                        tickPosition: 'inside',
                        minorTickPosition: 'inside',
                        tickColor: '#000000',
                        minorTickColor: '#000000'
                    }
                };
                _this.hydroChartsArray.push(_this.hChartOptions);
                _this.hydrographs.push(hydroG_1);
            }
            else if (c == "Frequency Plot") {
                if (_this.fChartValues == undefined) {
                    var F_areaAveraged_1 = false;
                    _this.fChartOptions = {};
                    //only come in here if there isn't already a frequency plot
                    _this.frequencyPlotChart = { Faxis: 'BottomX', type_BX: 'returnPeriod', type_LY: 'returnPeriod', title_LY: 'Peak Discharge, In cubic meters per second',
                        title_BX: 'Recurrence Interval, in years\nFlood Frequency Plot', lineWidth: 1, lineSymbol: 'circle',
                        majorTic_BX: true, majorGrid_BX: true, minorTic_BX: true, minorGrid_BX: true,
                        majorTic_LY: true, majorGrid_LY: true, minorTic_LY: false, minorGrid_LY: false,
                        colorPickerColor: '#7CB5EC', curveLabel: 'PK25', lineSymbolFillColor: '#7CB5EC', reverse_LY: false, reverse_BX: false, dataLabels: false };
                    //get array of recurrences from result      
                    var freqDataArray_1;
                    freqDataArray_1 = [];
                    _this.scenarios.forEach(function (s) {
                        if (s.RegressionRegions.length > 1) {
                            s.RegressionRegions.forEach(function (rr) {
                                if (rr.Name == "Area-Averaged") {
                                    F_areaAveraged_1 = true; //area averaged, add title to chart stating
                                    _this.frequencyPlotChart.curveLabel = "PK25 (Area-weighted average)";
                                    rr.Results.forEach(function (R) {
                                        var x = +R.Name.substring(0, R.Name.indexOf(" "));
                                        freqDataArray_1.push([x, _this.sigFigures(R.Value)]);
                                    });
                                }
                            });
                        }
                        else {
                            s.RegressionRegions.forEach(function (rr) {
                                rr.Results.forEach(function (R) {
                                    var x = +R.Name.substring(0, R.Name.indexOf(" "));
                                    freqDataArray_1.push([x, _this.sigFigures(R.Value)]);
                                });
                            });
                        }
                    }); //end foreach scenario
                    console.log("freq (start): " + freqDataArray_1);
                    _this.fChartValues = freqDataArray_1;
                    _this.showChartBtn_txt = "Hide";
                    _this.showCharts_btn = true;
                    _this.fChartOptions = {
                        exporting: {
                            chartOptions: {
                                plotOptions: {
                                    series: {
                                        dataLabels: {
                                            enabled: true
                                        },
                                        name: F_areaAveraged_1 ? 'PK25 (Area-weighted average)' : 'PK25',
                                        states: {
                                            hover: { enabled: false } //stops the line from getting thicker when mouse onto the chart
                                        }
                                    }
                                }
                            },
                            fallbackToExportServer: false
                        },
                        chart: { type: 'line', zoomType: 'xy' },
                        title: { text: '' },
                        series: [{
                                data: _this.fChartValues,
                                marker: { enabled: true },
                                name: F_areaAveraged_1 ? 'PK25 (Area-weighted average)' : 'PK25',
                                states: {
                                    hover: { enabled: false } //stops the line from getting thicker when mouse onto the chart
                                }
                            }],
                        tooltip: {
                            formatter: function () {
                                var s = '<b>(' + this.x + ', ' + this.y + ')</b>';
                                return s;
                            }
                        },
                        xAxis: {
                            title: { text: 'Recurrence Interval, in years<br/>Flood Frequency Plot' },
                            type: 'logarithmic',
                            startOnTick: true,
                            endOnTick: true,
                            gridLineWidth: 1,
                            tickWidth: 1,
                            minorTickInterval: 'auto',
                            minorTickLength: 5,
                            tickPosition: 'inside',
                            minorTickPosition: 'inside',
                            tickColor: '#000000',
                            minorTickColor: '#000000'
                        },
                        yAxis: {
                            title: { text: 'Peak Discharge, In cubic meters per second' },
                            type: 'logarithmic',
                            startOnTick: true,
                            endOnTick: true,
                            gridLineWidth: 1,
                            tickWidth: 1,
                            minorTickLength: 5,
                            tickPosition: 'inside',
                            minorTickPosition: 'inside',
                            tickColor: '#000000',
                            minorTickColor: '#000000'
                        }
                    };
                } //if this.fchartvalues == undefined (only go in there to make a new one not overwrite one)
            }
            else {
                // it's "" something was changed in the filters, clear out the charts
                _this.selectedPlot = undefined;
                _this.showCharts_btn = false;
                _this.hChartOptions = undefined;
                _this.hChartXAxisValues = [];
                _this.hydroChartsArray = [];
                _this.fChartOptions = undefined;
                _this.fChartValues = undefined;
                _this.hydrographs = [];
            }
        });
    }; // end ngOnInit()
    //round all parameters and statistic values to 3 significant figures
    MainviewComponent.prototype.sigFigures = function (n) {
        if (n > 0) {
            var mult = Math.pow(10, 3 - Math.floor(Math.log(n) / Math.LN10) - 1);
            return Math.round(n * mult) / mult;
        }
        else
            return n;
    };
    //add backticks around parameter code to escape in equation
    MainviewComponent.prototype.buildEquation = function (p, equation) {
        var fullEquation = "";
        var arrayOfparameterValues = [];
        fullEquation = "`" + equation + "`";
        return fullEquation;
    };
    //use tableString and tName to export a table to the browser
    MainviewComponent.prototype.triggerExportTable = function (tableString, tName) {
        var csvData = tableString;
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = tName.replace(/ /g, "_") + '.csv';
        a.click();
    };
    //export inputs table
    MainviewComponent.prototype.exportInputTable = function (tableIndex) {
        var inputTableRows = this.inputTable._results[tableIndex].element.nativeElement.rows;
        var vals = '';
        var str = '';
        for (var r = 0; r < inputTableRows.length; r++) {
            vals = '';
            for (var t = 0; t < inputTableRows[r].children.length; t++) {
                var child = inputTableRows[r].children[t];
                vals += child.innerText + ',';
                //if last one in this row 
                if (t == inputTableRows[r].children.length - 1 && child.localName == 'td') {
                    vals = vals.slice(0, -1);
                    str += vals + '\r\n';
                }
            }
        }
        ;
        str += '\r\n';
        //go get results table and tack it on to this before exporting 
        this.exportTable(tableIndex, str);
    };
    //export resultTable
    MainviewComponent.prototype.exportTable = function (tableIndex, inputTableStr) {
        var tableRows = this.resultTable._results[tableIndex].element.nativeElement.rows;
        var keys = '';
        var vals = '';
        var str = '';
        var tableName = '';
        for (var r = 0; r < tableRows.length; r++) {
            keys = '';
            vals = '';
            for (var t = 0; t < tableRows[r].children.length; t++) {
                var child = tableRows[r].children[t];
                if (child.localName == 'th') {
                    if (keys == '' && tableName == '')
                        tableName = inputTableStr.indexOf("Area-Averaged") == 0 ? "Area_Averaged" : child.innerText;
                    keys += child.innerText + ',';
                    if (child.colSpan > 1) {
                        for (var cs = 1; cs < child.colSpan; cs++)
                            keys += ' ,';
                    }
                }
                else
                    vals += child.innerText + ',';
                if (t == tableRows[r].children.length - 1 && child.localName == 'th') {
                    keys = keys.slice(0, -1);
                    inputTableStr += keys + '\r\n';
                }
                else if (t == tableRows[r].children.length - 1 && child.localName == 'td') {
                    vals = vals.slice(0, -1);
                    inputTableStr += vals + '\r\n';
                }
            }
        }
        ;
        this.triggerExportTable(inputTableStr, tableName);
    };
    MainviewComponent.prototype.exportAppendix = function () {
        var tableName = 'Appendix';
        //parameter table
        var paramTable = this.uniqueParameters;
        var p_str = '';
        p_str += '\r\n' + 'Parameter Definitions' + '\r\n';
        p_str += 'Name,Abbrev,Description' + '\r\n';
        for (var p = 0; p < paramTable.length; p++) {
            p_str += paramTable[p].Name + ',' + paramTable[p].Code + ',' + paramTable[p].Description + '\r\n';
        }
        ;
        p_str += '\r\n';
        //unit types table
        var unitTable = this.uniqueUnitTypes;
        var u_str = '';
        u_str += '\r\n' + 'Unit Types' + '\r\n';
        u_str += 'Abbrev,Unit' + '\r\n';
        for (var u = 0; u < unitTable.length; u++) {
            u_str += '(' + unitTable[u].Abbr + '),' + unitTable[u].Unit + '\r\n';
        }
        ;
        u_str += '\r\n';
        var equa_str = this.appendixEquationsforExport.join(',');
        var allTablesJoinedString = equa_str + p_str + u_str;
        this.triggerExportTable(allTablesJoinedString, tableName);
        //this.triggerExportTable(this.appendixEquationsforExport.join(','), tableName);
    };
    //onBlur of Value, compare to min/max and show warning
    MainviewComponent.prototype.compareValue = function (value) {
        //is there a value or just click in and then out (would be "")
        if (value.Value) {
            //make sure all parameters of this CODE has this VALUE assigned to it in the real scenario Object
            this.scenarios.forEach(function (s) {
                s.RegressionRegions.forEach(function (rr) {
                    rr.Parameters.forEach(function (p) {
                        if (p.Code == value.Code)
                            p.Value = value.Value;
                    });
                });
            }); //end foreach scenario
            //is value outside of range (if ther is limit range)
            if (value.Limits !== undefined) {
                var limitFlag_1 = false;
                value.LimitArray.forEach(function (x) {
                    if (value.Value > x.Max || value.Value < x.Min) {
                        limitFlag_1 = true;
                        x.OutOfRange = true;
                        value.missingVal = false; //remove the missingVal flag (since there is something in here)
                    }
                    else {
                        //value is within proper range (no warning, has a value)                    
                        x.OutOfRange = false;
                        value.missingVal = false; //field is not empty
                    }
                });
                //need to flag the outter limit OutOfRange outside of the LimitArray loop
                if (limitFlag_1)
                    value.OutOfRange = true; //flag it so
                else
                    value.OutOfRange = false;
            } //end limits are not undefined
            else {
                value.OutOfRange = false; //within range
                value.LimitArray.forEach(function (l) { l.OutOfRange = false; });
                value.missingVal = false; //field is not empty
            }
        } //end value.Value (has value)
        else {
            value.LimitArray.forEach(function (l) { l.OutOfRange = false; });
            value.OutOfRange = false; //no need to check range
            value.missingVal = false; //field is empty, but we don't care until they hit submit on sidebar        
        }
    };
    //toggle parameter description
    MainviewComponent.prototype.showDescription = function (p, paramIndex) {
        //set this parameters seeDescription property to true/false
        this.uniqueParameters[paramIndex].seeDescription = !this.uniqueParameters[paramIndex].seeDescription;
    };
    //when chart loads, store an instance of the highchart to access functions
    MainviewComponent.prototype.saveInstance = function (chartInst) {
        this.charts.push(chartInst);
    };
    ;
    /////////////////////////////////////// start HYDRO STUFF ///////////////////////////////////////////////////
    //clicked Bottom x & type == update chart HYDRO
    MainviewComponent.prototype.setXaxisType = function (i, newType) {
        //converting to logarithmic gets ugly (line draws partially outside of plot area) due to the minorTickInterval being set to auto
        if (newType == 'logarithmic') {
            //this makes minor ticks and grid lines disappear..turn them off and uncheck boxes
            this.charts[i].xAxis[0].update({ tickInterval: 'auto', minorGridLineWidth: 0, minorTickWidth: 0 });
            this.hydrographs[i].minorGrid_BX = false;
            this.hydrographs[i].minorTic_BX = false;
        }
        else {
            this.charts[i].xAxis[0].update({ tickInterval: null });
        }
        this.charts[i].xAxis[0].update({ type: newType });
    };
    //clicked Left y & type == update chart HYDRO
    MainviewComponent.prototype.setYaxisType = function (i, newType) {
        //converting to logarithmic gets ugly (line draws partially outside of plot area) due to the minorTickInterval being set to auto
        if (newType == 'logarithmic') {
            //this makes minor ticks and grid lines disappear..turn them off and uncheck boxes
            this.charts[i].yAxis[0].update({ minorGridLineWidth: 0, minorTickWidth: 0 }); //tickInterval:'auto'
            this.hydrographs[i].minorGrid_LY = false;
            this.hydrographs[i].minorTic_LY = false;
        }
        else {
            this.charts[i].yAxis[0].update({ tickInterval: null });
        }
        this.charts[i].yAxis[0].update({ type: newType });
    };
    //update title on x axis as they type HYDRO
    MainviewComponent.prototype.updateBXtitle = function (i) {
        this.hydroChartsArray[i].xAxis.title.text = this.hydrographs[i].title_BX.replace(/\n/g, '<br/>'); //bottom title      
        this.charts[i].xAxis[0].setTitle({ text: this.hydroChartsArray[i].xAxis.title.text }); //title of xAxis
    };
    //update title on y axis as they type HYDRO
    MainviewComponent.prototype.updateLYtitle = function (i) {
        this.hydroChartsArray[i].yAxis.title.text = (this.hydrographs[i].title_LY.replace(/\n/g, '<br/>'));
        this.charts[i].yAxis[0].setTitle({ text: this.hydroChartsArray[i].yAxis.title.text }); //title of yAxis
    };
    //update ticks or grids on chart (0/1) HYDRO
    MainviewComponent.prototype.setXChartLines = function (i, whichOne, value) {
        /* gridLineWidth: 1 //major grid (0/1)    minorGridLineWidth: 1 //minor grid (0/1)   tickWidth: 1 //major tic (0/1)  minorTickWidth: 1 //minor tic (0/1)  */
        switch (whichOne) {
            case 'gridLineWidth':
                if (value)
                    this.charts[i].xAxis[0].update({ gridLineWidth: 1 });
                else
                    this.charts[i].xAxis[0].update({ gridLineWidth: 0 });
                break;
            case 'minorGridLineWidth':
                if (value)
                    this.charts[i].xAxis[0].update({ minorGridLineWidth: 1 });
                else
                    this.charts[i].xAxis[0].update({ minorGridLineWidth: 0 });
                break;
            case 'tickWidth':
                if (value)
                    this.charts[i].xAxis[0].update({ tickWidth: 1 });
                else
                    this.charts[i].xAxis[0].update({ tickWidth: 0 });
                break;
            case 'minorTickWidth':
                if (value)
                    this.charts[i].xAxis[0].update({ minorTickWidth: 1 });
                else
                    this.charts[i].xAxis[0].update({ minorTickWidth: 0 });
                break;
        }
    };
    //update ticks or grids on chart (0/1) HYDRO
    MainviewComponent.prototype.setYChartLines = function (i, whichOne, value) {
        /* gridLineWidth: 1 //major grid (0/1)    minorGridLineWidth: 1 //minor grid (0/1)   tickWidth: 1 //major tic (0/1)  minorTickWidth: 1 //minor tic (0/1)  */
        switch (whichOne) {
            case 'gridLineWidth':
                if (value)
                    this.charts[i].yAxis[0].update({ gridLineWidth: 1 });
                else
                    this.charts[i].yAxis[0].update({ gridLineWidth: 0 });
                break;
            case 'minorGridLineWidth':
                if (value)
                    this.charts[i].yAxis[0].update({ minorGridLineWidth: 1 });
                else
                    this.charts[i].yAxis[0].update({ minorGridLineWidth: 0 });
                break;
            case 'tickWidth':
                if (value)
                    this.charts[i].yAxis[0].update({ tickWidth: 1 });
                else
                    this.charts[i].yAxis[0].update({ tickWidth: 0 });
                break;
            case 'minorTickWidth':
                if (value)
                    this.charts[i].yAxis[0].update({ minorTickWidth: 1 });
                else
                    this.charts[i].yAxis[0].update({ minorTickWidth: 0 });
                break;
        }
    };
    //reverse the data HYDRO
    MainviewComponent.prototype.setReverseData = function (i, which, value) {
        if (which == 'bx') {
            this.charts[i].xAxis[0].update({ reversed: value });
        }
        else {
            this.charts[i].yAxis[0].update({ reversed: value });
        }
    };
    //change line color HYDRO
    MainviewComponent.prototype.changeLineColor = function (i, c) {
        this.charts[i].series[0].update({ color: c });
        this.hydrographs[i].colorPickerColor = c;
    };
    //change line width HYDRO
    MainviewComponent.prototype.setLineWidth = function (i) {
        this.charts[i].series[0].update({ lineWidth: this.hydrographs[i].lineWidth });
    };
    //change line symbol fill color HYDRO
    MainviewComponent.prototype.changeLineSymbolColor = function (i, c) {
        this.charts[i].series[0].update({ marker: { fillColor: c } });
        this.hydrographs[i].lineSymbolFillColor = c;
    };
    //change point symbol HYDRO
    MainviewComponent.prototype.setLineSymbol = function (i, e) {
        this.charts[i].series[0].update({ marker: { symbol: this.hydrographs[i].lineSymbol } });
    };
    //change curve label HYDRO
    MainviewComponent.prototype.updateCurveLabel = function (i) {
        this.charts[0].series[0].update({ name: this.hydrographs[i].curveLabel });
    };
    //show/hide data labels  HYDRO
    MainviewComponent.prototype.updateDataLabels = function (i, value) {
        this.charts[i].series[0].update({ dataLabels: { enabled: value, formatter: function () { return '(' + this.x + ', ' + this.y + ')'; } } });
    };
    //changed values, refresh the hydrograph with new data HYDRO
    MainviewComponent.prototype.refreshHydrograph = function (i, values) {
        var _this = this;
        //top title (updated with which recurrence interval they choose)
        this.hydroChartsArray[i].title.text = 'Hydrograph (Recurrence Interval: ' + this.hydrographs[i].recurrence + ')';
        //see if titles were changed (if they didn't manually change it, apply update to lagtime)
        if (values.title_BX._pristine) {
            this.hydroChartsArray[i].xAxis.title.text = 'Time (hours)<br/>Hydrograph for ' + this.hydrographs[i].lagTime + '-yr interval<br/>NOTE: May not represent actual hydrograph';
            this.hydrographs[i].title_BX = 'Time (hours)\nHydrograph for ' + this.hydrographs[i].lagTime + '-yr interval\nNOTE: May not represent actual hydrograph';
            this.charts[i].xAxis[0].setTitle({ text: this.hydroChartsArray[i].xAxis.title.text }); //title of xAxis
        }
        this.charts[i].setTitle({ text: this.hydroChartsArray[i].title.text }); //title of chart  
        //get the corresponding results value for the recurrence chosen to update the chart data
        var recValue;
        this.scenarios.forEach(function (s) {
            s.RegressionRegions.forEach(function (rr) {
                if (rr.Results)
                    recValue = rr.Results.filter(function (r) { return r.code == _this.hydrographs[i].recurrence; })[0].Value;
            });
        });
        this.charts[i].series[0].setData(this.DIMLESS_ARRAY.map(function (p) { return [p[0] * _this.hydrographs[i].lagTime, p[1] * recValue]; })); //update data
        this.hydrographs[i].showExtraSettings = false; //just close the extra settings part
    };
    //show/hide additional user settings options for the chart (axis, title, etc) HYDRO
    MainviewComponent.prototype.showHideAdditionalChartSettings = function (i) {
        this.hydrographs[i].showExtraSettings = !this.hydrographs[i].showExtraSettings;
    };
    //want to remove a hydrochart HYDRO
    MainviewComponent.prototype.removeHydroChart = function (ind) {
        this.hydroChartsArray.splice(ind, 1);
        this.charts.splice(ind, 1);
        this.hydrographs.splice(ind, 1);
    };
    /////////////////////////////////////////// end HYDRO STUFF ///////////////////////////////////////////////////
    ///////////////////////////////////////start FREQUENCY STUFF ///////////////////////////////////////////////////
    MainviewComponent.prototype.saveFreqInstance = function (freqChartInst) {
        this.freqChart = freqChartInst;
    };
    //clicked Bottom x & type == update chart FREQUENCY
    MainviewComponent.prototype.setFreqXaxisType = function (newType) {
        var freqDataArray;
        freqDataArray = [];
        //converting 'percent', 'fraction', or 'returnPeriod' (default/onload is returnPeriod)
        if (newType == 'percent') {
            this.scenarios.forEach(function (s) {
                s.RegressionRegions.forEach(function (rr) {
                    if (rr.Results) {
                        rr.Results.forEach(function (R) {
                            var x = +R.Name.substring(0, R.Name.indexOf(" "));
                            freqDataArray.push([(1 / x) * 100, R.Value]);
                        });
                    }
                });
            }); //end foreach scenario       
            this.frequencyPlotChart.reverse_BX = true;
            this.freqChart.xAxis[0].update({ reversed: true, labels: { formatter: function () {
                        return __WEBPACK_IMPORTED_MODULE_5_highcharts__["numberFormat"](this.value, 0, ',') + '%';
                    } } });
        }
        else if (newType == 'fraction') {
            //divide 1 into probability (pk500)
            this.scenarios.forEach(function (s) {
                s.RegressionRegions.forEach(function (rr) {
                    if (rr.Results) {
                        rr.Results.forEach(function (R) {
                            var x = +R.Name.substring(0, R.Name.indexOf(" "));
                            freqDataArray.push([1 / x, R.Value]);
                        });
                    }
                });
            }); //end foreach scenario
            this.frequencyPlotChart.reverse_BX = true;
            this.freqChart.xAxis[0].update({ reversed: true, labels: { formatter: function () { return this.value; } } });
        }
        else {
            //returnPeriod
            this.scenarios.forEach(function (s) {
                s.RegressionRegions.forEach(function (rr) {
                    if (rr.Results) {
                        rr.Results.forEach(function (R) {
                            var x = +R.Name.substring(0, R.Name.indexOf(" "));
                            freqDataArray.push([x, R.Value]);
                        });
                    }
                });
            }); //end foreach scenario
            this.frequencyPlotChart.reverse_BX = false;
            this.freqChart.xAxis[0].update({ reversed: false, labels: { formatter: function () { return this.value; } } });
            console.log("return period: " + freqDataArray);
        }
        this.freqChart.series[0].setData(freqDataArray);
    };
    //update title on x axis as they type FREQUENCY
    MainviewComponent.prototype.updateFreqBXtitle = function () {
        this.fChartOptions.xAxis.title.text = this.frequencyPlotChart.title_BX.replace(/\n/g, '<br/>'); //bottom title      
        this.freqChart.xAxis[0].setTitle({ text: this.fChartOptions.xAxis.title.text }); //title of xAxis
    };
    //update title on y axis as they type FREQUENCY
    MainviewComponent.prototype.updateFreqLYtitle = function () {
        this.fChartOptions.yAxis.title.text = (this.frequencyPlotChart.title_LY.replace(/\n/g, '<br/>'));
        this.freqChart.yAxis[0].setTitle({ text: this.fChartOptions.yAxis.title.text }); //title of yAxis
    };
    //update ticks or grids on chart (0/1) FREQUENCY
    MainviewComponent.prototype.setFreqXChartLines = function (whichOne, value) {
        /* gridLineWidth: 1 //major grid (0/1)    minorGridLineWidth: 1 //minor grid (0/1)   tickWidth: 1 //major tic (0/1)  minorTickWidth: 1 //minor tic (0/1)  */
        switch (whichOne) {
            case 'gridLineWidth':
                if (value)
                    this.freqChart.xAxis[0].update({ gridLineWidth: 1 });
                else
                    this.freqChart.xAxis[0].update({ gridLineWidth: 0 });
                break;
            case 'minorGridLineWidth':
                if (value)
                    this.freqChart.xAxis[0].update({ minorGridLineWidth: 1 });
                else
                    this.freqChart.xAxis[0].update({ minorGridLineWidth: 0 });
                break;
            case 'tickWidth':
                if (value)
                    this.freqChart.xAxis[0].update({ tickWidth: 1 });
                else
                    this.freqChart.xAxis[0].update({ tickWidth: 0 });
                break;
            case 'minorTickWidth':
                if (value)
                    this.freqChart.xAxis[0].update({ minorTickWidth: 1 });
                else
                    this.freqChart.xAxis[0].update({ minorTickWidth: 0 });
                break;
        }
    };
    //update ticks or grids on chart (0/1) FREQUENCY
    MainviewComponent.prototype.setFreqYChartLines = function (whichOne, value) {
        /* gridLineWidth: 1 //major grid (0/1)    minorGridLineWidth: 1 //minor grid (NOT USED WITH LOG)  tickWidth: 1 //major tic (0/1)  minorTickWidth: 1 //minor tic (NOT USED WITH LOG)  */
        switch (whichOne) {
            case 'gridLineWidth':
                if (value)
                    this.freqChart.yAxis[0].update({ gridLineWidth: 1 });
                else
                    this.freqChart.yAxis[0].update({ gridLineWidth: 0 });
                break;
            case 'tickWidth':
                if (value)
                    this.freqChart.yAxis[0].update({ tickWidth: 1 });
                else
                    this.freqChart.yAxis[0].update({ tickWidth: 0 });
                break;
        }
    };
    //reverse the data FREQUENCY
    MainviewComponent.prototype.setFreqReverseData = function (which, value) {
        if (which == 'bx') {
            this.freqChart.xAxis[0].update({ reversed: value });
        }
        else {
            this.freqChart.yAxis[0].update({ reversed: value });
        }
    };
    //change line color FREQUENCY
    MainviewComponent.prototype.changeFreqLineColor = function (c) {
        this.freqChart.series[0].update({ color: c });
        this.frequencyPlotChart.colorPickerColor = c;
    };
    //change line width FREQUENCY
    MainviewComponent.prototype.setFreqLineWidth = function () {
        this.freqChart.series[0].update({ lineWidth: this.frequencyPlotChart.lineWidth });
    };
    //change line symbol fill color FREQUENCY
    MainviewComponent.prototype.changeFreqLineSymbolColor = function (c) {
        this.freqChart.series[0].update({ marker: { fillColor: c } });
        this.frequencyPlotChart.lineSymbolFillColor = c;
    };
    //change point symbol FREQUENCY
    MainviewComponent.prototype.setFreqLineSymbol = function (e) {
        this.freqChart.series[0].update({ marker: { symbol: this.frequencyPlotChart.lineSymbol } });
    };
    //change curve label FREQUENCY
    MainviewComponent.prototype.updateFreqCurveLabel = function () {
        this.freqChart.series[0].update({ name: this.frequencyPlotChart.curveLabel });
    };
    //show/hide data labels  FREQUENCY
    MainviewComponent.prototype.updateFreqDataLabels = function (value) {
        this.freqChart.series[0].update({ dataLabels: { enabled: value, formatter: function () { return '(' + this.x + 'yr, ' + this.y + ')'; } } });
    };
    //show/hid additional user settings options for the chart Frequency
    MainviewComponent.prototype.showHideAddFChartSettings = function () {
        this.showExtraFREQSettings = !this.showExtraFREQSettings;
    };
    MainviewComponent.prototype.removeFreqChart = function () {
        this.frequencyPlotChart = undefined;
        this.freqChart = undefined;
        this.fChartOptions = undefined;
        this.fChartValues = undefined;
    };
    //////////////////////////////////////end FREQUENCY STUFF  /////////////////////////////////////////////////////
    //toggle charts
    MainviewComponent.prototype.showHideCharts = function () {
        //if showCharts_btn is true == show the charts and showChartBtn_txt says "Hide"
        //if showCharts_btn is false == hide the charts and showChartBtn_txt says "Show"
        this.showCharts_btn = !this.showCharts_btn;
        if (this.showCharts_btn)
            this.showChartBtn_txt = "Hide";
        else
            this.showChartBtn_txt = "Show";
    };
    //want to edit the scenario. remove Result
    MainviewComponent.prototype.editScenario = function () {
        var _this = this;
        this.scenarios.forEach(function (s) {
            var areaWeighed = s.RegressionRegions.map(function (r) { return r.ID; }).indexOf(0);
            if (areaWeighed > -1)
                s.RegressionRegions.splice(areaWeighed, 1); //remove the area weighted regRegion
            s.RegressionRegions.forEach(function (r) {
                _this.resultsBack = false;
                delete r.Results;
            });
        });
        this._nssService.setScenarios(this.scenarios);
    };
    //number only allowed in Value
    MainviewComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9\+\-\.\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    //need superscript tag in unittype (using <span [innerHTML]="setSuperScript(p.UnitType.Abbr)"> converts tags to actual html)
    MainviewComponent.prototype.setSuperScript = function (unit) {
        var newUnitWithSupTag = '';
        var indexOfSup = unit.indexOf('^');
        if (indexOfSup > -1)
            newUnitWithSupTag = unit.substring(0, indexOfSup) + '<sup>' + unit.substring(indexOfSup + 1) + '</sup>';
        else
            newUnitWithSupTag = unit;
        return newUnitWithSupTag;
    };
    //print pdf 
    MainviewComponent.prototype.printPage = function () {
        var printContents, popupWin;
        printContents = document.getElementById('printArea').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title></title>\n          <style>                   \n            .hidden-print {\n                display: none !important;\n            }\n            #print-content * {\n                visibility: visible;\n            }\n            h3 {\n                text-align: center;\n            }\n            th, td {\n                margin-top:-8px;\n                padding-top:8px;\n                page-break-inside:avoid;\n            }\n          </style>\n          <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" \n            integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    return MainviewComponent;
}()); // end component
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('inputsTable', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
    __metadata("design:type", Object)
], MainviewComponent.prototype, "inputTable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('resultsTable', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
    __metadata("design:type", Object)
], MainviewComponent.prototype, "resultTable", void 0);
MainviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wim-mainview',
        template: __webpack_require__(206),
        styles: [__webpack_require__(196)]
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* NSSService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* NSSService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_toaster_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_toaster_angular2_toaster__["b" /* ToasterService */]) === "function" && _b || Object, Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["c" /* PageScrollService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["c" /* PageScrollService */]) === "function" && _c || Object])
], MainviewComponent);

var _a, _b, _c;
//# sourceMappingURL=mainview.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.title = "National Stream Flow Statistics";
    };
    NavbarComponent.prototype.toggleSidebar = function () {
        //should allow sidebar to go in and come back out
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wim-navbar',
        template: __webpack_require__(207),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = (function () {
    function SidebarComponent(_nssService) {
        this._nssService = _nssService;
        this.plotTypes = ['Frequency Plot', 'Hydrograph']; //Hydrograph, Frequency Plot
    }
    Object.defineProperty(SidebarComponent.prototype, "selectedRegion", {
        //regions
        get: function () { return this._nssService.selectedRegion; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(SidebarComponent.prototype, "selectedRegRegion", {
        get: function () { return this._nssService.selectedRegRegions; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(SidebarComponent.prototype, "selectedRegType", {
        get: function () { return this._nssService.selectedRegressionTypes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "selectedStatGrp", {
        get: function () { return this._nssService.selectedStatGroups; },
        enumerable: true,
        configurable: true
    });
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doShow = true;
        this.selectedPlot = "";
        //subscribe to regions
        this._nssService.regions.subscribe(function (regions) { _this.regions = regions; });
        //subscribe to regressionRegions
        this._nssService.regressionRegions.subscribe(function (rr) {
            _this.regressionRegions = rr;
            //remove from selectedRegRegion if not in response.
            if (_this.selectedRegRegionIDs != undefined) {
                if (rr.length > 0) {
                    for (var rri = _this.selectedRegRegionIDs.length; rri--;) {
                        var RRind = rr.map(function (eachrr) { return eachrr.ID; }).indexOf(_this.selectedRegRegionIDs[rri]);
                        if (RRind < 0)
                            _this.selectedRegRegionIDs.splice(rri, 1);
                    }
                    ;
                }
                else
                    _this.selectedRegRegionIDs = [];
            }
        });
        //subscribe to StatisticGroups
        this._nssService.statisticGroups.subscribe(function (sg) {
            _this.statisticGroups = sg;
            //remove from selectedStatGrp if not in response.
            if (_this.selectedStatGrpIDs != undefined) {
                if (sg.length > 0) {
                    for (var si = _this.selectedStatGrpIDs.length; si--;) {
                        var SSind = sg.map(function (eachsg) { return eachsg.ID; }).indexOf(_this.selectedStatGrpIDs[si]);
                        if (SSind < 0)
                            _this.selectedStatGrpIDs.splice(si, 1);
                    }
                    ;
                }
                else
                    _this.selectedStatGrpIDs = [];
            }
        });
        //subscribe to regressionTypes
        this._nssService.regressionTypes.subscribe(function (rt) {
            _this.regressionTypes = rt;
            //remove from selectedRegType if not in response
            if (_this.selectedRegTypeIDs != undefined) {
                if (rt.length > 0) {
                    for (var rti = _this.selectedRegTypeIDs.length; rti--;) {
                        var RTind = rt.map(function (eachrt) { return eachrt.ID; }).indexOf(_this.selectedRegTypeIDs[rti]);
                        if (RTind < 0)
                            _this.selectedRegTypeIDs.splice(rti, 1);
                    }
                    ;
                }
                else
                    _this.selectedRegTypeIDs = [];
            }
        });
        //subscribe to scenario
        this._nssService.scenarios.subscribe(function (s) {
            _this.scenarios = s;
            _this.scenarios.forEach(function (s) {
                //if there are results, show the chart buttons
                if (s.RegressionRegions.length > 0 && s.RegressionRegions[0].Results && s.StatisticGroupName.indexOf("Peak-Flow") > -1)
                    _this.showChart = true;
                else
                    _this.showChart = false;
            });
        });
        //settings for multiselect.. added max-width and font-size to the library's ts file directly
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
        this.myMSTexts = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            checked: 'checked',
            checkedPlural: 'checked',
            defaultTitle: 'Select'
        };
    }; // end ngOnInit()
    //select Region. get regressionRegions, regressionTypes, StatisticGroups
    SidebarComponent.prototype.onRegSelect = function (r) {
        this.selectedRegRegionIDs = [];
        this.selectedStatGrpIDs = [];
        this.selectedRegTypeIDs = [];
        this._nssService.selectedRegion = r;
    };
    //select of regression region. set the selectedRegRegions
    SidebarComponent.prototype.onRegressionRegSelect = function () {
        var _this = this;
        var selectedRegRegions = new Array();
        this.selectedRegRegionIDs.forEach(function (srr) {
            //for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedRegRegions.push(_this.regressionRegions.filter(function (rr) { return rr.ID == srr; })[0]);
        });
        this._nssService.selectedRegRegions = selectedRegRegions;
    };
    //select of statisticgrp. update regressionregions and regressiontypes and scenario for mainView
    SidebarComponent.prototype.onStatGrpSelect = function () {
        var _this = this;
        var selectedStatGroups = new Array();
        this.selectedStatGrpIDs.forEach(function (ssg) {
            //for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedStatGroups.push(_this.statisticGroups.filter(function (rr) { return rr.ID == ssg; })[0]);
        });
        this._nssService.selectedStatGroups = selectedStatGroups;
    };
    //select of regression type. update statisticgrps and regressionregions
    SidebarComponent.prototype.onRegTypeSelect = function () {
        var _this = this;
        var selectedRegTypes = new Array();
        this.selectedRegTypeIDs.forEach(function (srt) {
            //for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedRegTypes.push(_this.regressionTypes.filter(function (rr) { return rr.ID == srt; })[0]);
        });
        this._nssService.selectedRegressionTypes = selectedRegTypes;
    };
    //submit / Compute button click
    SidebarComponent.prototype.CalculateScenario = function () {
        var ValueRequired = false;
        var totalWeight = Number(0);
        var numOfRegRegions = Number(0); //don't care about weights if only 1 regRegion
        //make sure all values are populated
        this.scenarios.forEach(function (s) {
            numOfRegRegions = s.RegressionRegions.length;
            s.RegressionRegions.forEach(function (rr) {
                if (numOfRegRegions > 1)
                    totalWeight += Number(rr.PercentWeight);
                rr.Parameters.forEach(function (p) {
                    if (!p.Value) {
                        ValueRequired = true;
                        p.missingVal = true;
                    }
                    else
                        p.missingVal = false;
                });
            });
        });
        if (ValueRequired) {
            var toast = {
                type: 'warning',
                title: 'Error',
                body: 'All values are required'
            };
            this._nssService.showToast(toast);
        }
        else if (numOfRegRegions > 1 && (totalWeight < 100 || isNaN(totalWeight))) {
            var weightToast = {
                type: 'warning',
                title: 'Error',
                body: '% Weights must equal 100%'
            };
            this._nssService.showToast(weightToast);
        } //end invalid
        else {
            //remove Citations, RegressionRegions.Parameters.OutOfRange and .missingVal props
            this.scenarios.forEach(function (s) {
                delete s.Citations;
                s.RegressionRegions.forEach(function (rr) {
                    rr.Parameters.forEach(function (p) {
                        delete p.OutOfRange;
                        delete p.missingVal;
                        delete p.seeDescription;
                    });
                });
            });
            //now post the scenario to get the results to pass to mainview
            var regTypesIDstring = this.selectedRegTypeIDs !== undefined ? this.selectedRegTypeIDs.join(",") : '';
            var statGrpIDstring = this.selectedStatGrpIDs !== undefined ? this.selectedStatGrpIDs.join(",") : '';
            var regRegionsIDstring = this.selectedRegRegionIDs !== undefined ? this.selectedRegRegionIDs.join(",") : '';
            var sParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            sParams.set('regressionregions', regRegionsIDstring);
            sParams.set('regressiontypes', regTypesIDstring);
            sParams.set('statisticgroups', statGrpIDstring);
            this._nssService.postScenarios(this.selectedRegion.ID, this.scenarios, sParams);
        }
    };
    //want to see a chart (which one?) ---- may delete, trying it on (ngModelChange)=" of select
    SidebarComponent.prototype.selectChart = function (p) {
        if (p !== "") {
            //this.selectedPlot = p;
            //this.selectedPlot = undefined;
            this._nssService.addChart(p);
        }
    };
    //number only allowed in Value
    SidebarComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9\+\-\.\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'wim-sidebar',
        template: __webpack_require__(208),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* NSSService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* NSSService */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    configFile: 'assets/config.json'
};
//# sourceMappingURL=environment.js.map

/***/ })

},[241]);
//# sourceMappingURL=main.bundle.js.map