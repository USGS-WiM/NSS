"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var mainpage_component_1 = require('./main/mainpage.component');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var navbar_component_1 = require('./navbar/navbar.component');
var eventSharing_service_1 = require('./services/eventSharing.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'NSS';
    }
    __decorate([
        core_1.ViewChild(navbar_component_1.NavbarComponent)
    ], AppComponent.prototype, "navbarComponent", void 0);
    __decorate([
        core_1.ViewChild(mainpage_component_1.MainPageComponent)
    ], AppComponent.prototype, "mainpageCommponent", void 0);
    __decorate([
        core_1.ViewChild(sidebar_component_1.SidebarComponent)
    ], AppComponent.prototype, "sidebarComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './app.html',
            providers: [eventSharing_service_1.SharedService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map