"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var multiselect_dropdown_1 = require('angular-2-dropdown-multiselect/src/multiselect-dropdown');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var angular2_highcharts_1 = require('angular2-highcharts');
var mathjax_directive_1 = require('./shared/mathjax.directive');
var ng2_page_scroll_1 = require('ng2-page-scroll');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar/navbar.component');
var mainpage_component_1 = require('./main/mainpage.component');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var nss_service_1 = require('./services/nss.service');
var chart_service_1 = require('./services/chart.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule, multiselect_dropdown_1.MultiselectDropdownModule, angular2_toaster_1.ToasterModule, angular2_highcharts_1.ChartModule, ng2_page_scroll_1.Ng2PageScrollModule.forRoot()],
            declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, mainpage_component_1.MainPageComponent, sidebar_component_1.SidebarComponent, mathjax_directive_1.MathJaxDirective],
            bootstrap: [app_component_1.AppComponent],
            providers: [nss_service_1.NSSService, chart_service_1.ChartService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map