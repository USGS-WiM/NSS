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
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar/navbar.component');
var mainpage_component_1 = require('./main/mainpage.component');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var regions_service_1 = require('./services/regions.service');
var citations_service_1 = require('./services/citations.service');
var scenario_service_1 = require('./services/scenario.service');
var eventSharing_service_1 = require('./services/eventSharing.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule, multiselect_dropdown_1.MultiselectDropdownModule, angular2_toaster_1.ToasterModule],
            declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, mainpage_component_1.MainPageComponent, sidebar_component_1.SidebarComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [regions_service_1.RegionService, citations_service_1.CitationService, scenario_service_1.ScenarioService, eventSharing_service_1.SharedService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map