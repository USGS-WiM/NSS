(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"nss","version":"1.0.0","license":"MIT","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"7.1.1","@angular/cdk":"^7.1.1","@angular/cli":"7.1.0","@angular/common":"7.1.1","@angular/compiler":"7.1.1","@angular/core":"7.1.1","@angular/forms":"7.1.1","@angular/http":"7.1.1","@angular/material":"^7.1.1","@angular/platform-browser":"7.1.1","@angular/platform-browser-dynamic":"7.1.1","@angular/platform-server":"7.1.1","@angular/router":"7.1.1","@ng-bootstrap/ng-bootstrap":"^3.3.1","angular-2-dropdown-multiselect":"^1.0.8","angular2-highcharts":"^0.5.5","angular2-toaster":"^3.0.1","bootstrap":"4.0.0-alpha.6","core-js":"^2.4.1","esri-leaflet":"^2.1.2","font-awesome":"^4.7.0","leaflet":"^1.3.1","mathjax":"^2.7.0","ng2-page-scroll":"^4.0.0-beta.6","ngx-color-picker":"^4.0.0","rxjs":"^6.2.2","rxjs-compat":"^6.2.2","tslib":"^1.9.0","v8":"^0.1.0","zone.js":"~0.8.26"},"devDependencies":{"@angular-devkit/build-angular":"~0.11.0","@angular/cli":"7.1.0","@angular/compiler-cli":"7.1.1","@types/jasmine":"2.5.38","@types/mathjax":"0.0.31","@types/node":"~6.0.60","angular-2-dropdown-multiselect":"^1.3.2","codelyzer":"~2.0.0","jasmine-core":"~2.5.2","jasmine-spec-reporter":"~3.2.0","karma":"~1.4.1","karma-chrome-launcher":"~2.0.0","karma-cli":"~1.0.1","karma-coverage-istanbul-reporter":"^0.2.0","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.1.0","ts-node":"~2.0.0","tslint":"~4.5.0","typescript":"3.1.6"}};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-invalid input {\r\n    margin-bottom: 12px !important;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.modal-content{\r\n    height: 400px;\r\n    top: calc(50% - 200px) !important;\r\n    max-width: 40% !important;\r\n}\r\n\r\n#loginError {\r\n    color: red;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7Q0FDbEM7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGtDQUFrQztJQUNsQywwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1pbnZhbGlkIGlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMjAwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbG9naW5FcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aboutModal></aboutModal>\r\n<nav class=\"wim-nav\">\r\n    <div class=\"container\" style=\"width: 100%;\">\r\n        <button class=\"mobile-nav-toggle\" (click)=\"toggleSidebar()\"></button>\r\n        <a href=\"https://usgs.gov\" class=\"nav-branding\">\r\n            <img src=\"https://wim.usgs.gov/website-assets/usgs-logo.png\" />\r\n        </a>\r\n        <span class=\"nav-title\">\r\n            {{title}}\r\n        </span>\r\n        <div class=\"nav-links\">\r\n            <a routerLink=\"\" routerLinkActive=\"active\">\r\n                <span class=\"nav-link-text\">Home</span>\r\n            </a>\r\n            <a [class.hidden]=\"!isLoggedIn\" routerLink=\"settings\" routerLinkActive=\"active\">\r\n                <span class=\"nav-link-text\">Settings</span>\r\n            </a>\r\n            <a (click)=\"showAbout()\">\r\n                <span>\r\n                    <i class=\"ion-information-circled\"></i>\r\n                    <span class=\"nav-link-text\">About</span>\r\n                </span>\r\n            </a>\r\n            <a (click)=\"showLoginModal()\" [class.hidden]=\"isLoggedIn\">\r\n                <span>\r\n                    <span class=\"nav-link-text\">Login</span>\r\n                </span>\r\n            </a>\r\n            <a (click)=\"logout()\" [class.hidden]=\"!isLoggedIn\">\r\n                <span>\r\n                    <span class=\"nav-link-text\">Logout</span>\r\n                </span>\r\n            </a>\r\n            <!--<a href=\"/#/\"><span><i class=\"ion-plus-round\"></i> New Site</span></a>\r\n                <a href=\"/#/\"><span><i class=\"ion-ios-book\"></i> Guide</span></a>\r\n                <a href=\"/#/\"><span><i class=\"ion-help\"></i> FAQ</span></a>-->\r\n        </div>\r\n    </div>\r\n</nav>\r\n<wim-sidebar *ngIf=\"router.url.indexOf('/settings') === -1\"></wim-sidebar>\r\n<ng-template #login let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">Login</h4>\r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form [formGroup]=\"LoginForm\">\r\n            <!-- Username* -->\r\n            <div class=\"form-group\" [ngClass]=\"{'form-invalid': !LoginForm.get('username').valid && LoginForm.get('username').dirty}\">\r\n                <label class=\"req\" for=\"username\">Username:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"username\" required>\r\n            </div>\r\n    \r\n            <!-- Password* -->\r\n            <div class=\"form-group\" [ngClass]=\"{'form-invalid': !LoginForm.get('password').valid && LoginForm.get('password').dirty}\">\r\n                <label class=\"req\" for=\"password\">Password:</label>\r\n                <input class=\"form-control\" type=\"password\" formControlName=\"password\">\r\n            </div>\r\n\r\n            <div [class.hidden]=\"!loginError\" id=\"loginError\">\r\n                Username or Password incorrect.\r\n            </div>\r\n\r\n            <div>\r\n                <button [disabled]=\"loading || !LoginForm.valid\" class=\"btn btn-primary\" (click)=\"loginRun()\">Login</button>\r\n                <!--<img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />-->\r\n                <!--<a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>-->\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ng-template>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mainview_mainview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainview/mainview.component */ "./src/app/mainview/mainview.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var ng2_page_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-page-scroll */ "./node_modules/ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");


// import { NavbarComponent } from './navbar/navbar.component';











var AppComponent = /** @class */ (function () {
    function AppComponent(_nssService, router, _authService, _loginService, _fb, _toasterService, _modalService) {
        this._nssService = _nssService;
        this.router = router;
        this._authService = _authService;
        this._loginService = _loginService;
        this._fb = _fb;
        this._toasterService = _toasterService;
        this._modalService = _modalService;
        this.loggedInRole = '';
        this.loading = false;
        this.loginError = false;
        ng2_page_scroll__WEBPACK_IMPORTED_MODULE_4__["PageScrollConfig"].defaultScrollOffset = 85;
        this._nssService.setVersion(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].version);
        this.LoginForm = _fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required)
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.loggedInRole().subscribe(function (role) {
            if (role === 'Administrator' || role === 'Manager') {
                _this.loggedInRole = role;
            }
        });
        this._loginService.isLoggedIn().subscribe(function (loggedIn) {
            _this.isLoggedIn = loggedIn;
        });
        this.loggedInRole = localStorage.getItem('loggedInRole');
        if (this.loggedInRole !== null && !this.checkSetupTime()) {
            this._loginService._loggedInSubject.next(true);
        }
        else {
            this.logout();
        }
        this.manager = { username: '', password: '' };
        // get return url from route parameters or default to '/'
        this.returnUrl = '';
        this.modalElement = this.loginModal;
        this.loginError = false;
    };
    AppComponent.prototype.showAbout = function () {
        this._nssService.setAboutModal(true);
    };
    AppComponent.prototype.showCreate = function () {
        this._nssService.setCreateModal(true);
    };
    AppComponent.prototype.showLoginModal = function () {
        var _this = this;
        this.LoginForm.controls['username'].setValue(null);
        this.LoginForm.controls['password'].setValue(null);
        this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
        this.modalRef.result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.closeResult = "Closed with: " + result;
            if (_this.closeResult) {
                _this.router.navigate(['']);
            }
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            if (_this.closeResult) {
                _this.router.navigate(['']);
            }
        });
    };
    AppComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // log user in, navigate to home
    AppComponent.prototype.loginRun = function () {
        var _this = this;
        this.manager.username = this.LoginForm.get('username').value;
        this.manager.password = this.LoginForm.get('password').value;
        this.loading = true; // not using this yet
        this._loginService.login(this.manager.username, this.manager.password).subscribe(function () {
            if (_this._loginService.isLoggedIn) {
                _this.router.navigate([_this.returnUrl]);
                _this._nssService.setLoginModal(false);
            }
            _this.loading = false; // not using this yet
            _this._nssService.setLoginModal(false);
            _this.loginError = false;
            _this.modalRef.close();
        }, function (error) {
            _this._toasterService.pop('error', 'Error logging in', error._body.message || error.statusText);
            _this.loading = false;
        });
    };
    AppComponent.prototype.logout = function () {
        this._loginService.logout();
        this.router.navigate(['']);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.modalSubscript.unsubscribe();
    };
    AppComponent.prototype.checkSetupTime = function () {
        var tooOld = false;
        var twentyFourHours = 12 * 60 * 60 * 1000;
        var now = new Date().getTime();
        var setupTime = Number(localStorage.getItem('setupTime'));
        if (now - setupTime > twentyFourHours) {
            // is it greater than 12 hours
            tooOld = true;
            localStorage.clear();
        }
        return tooOld;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('login'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "loginModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"])
    ], AppComponent.prototype, "sidebarComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_mainview_mainview_component__WEBPACK_IMPORTED_MODULE_2__["MainviewComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _mainview_mainview_component__WEBPACK_IMPORTED_MODULE_2__["MainviewComponent"])
    ], AppComponent.prototype, "mainviewCommponent", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_app_service__WEBPACK_IMPORTED_MODULE_6__["NSSService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _shared_services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_12__["ToasterService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: ConfigLoader, highchartsFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigLoader", function() { return ConfigLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highchartsFactory", function() { return highchartsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/angular-2-dropdown-multiselect */ "./node_modules/angular-2-dropdown-multiselect/esm5/angular-2-dropdown-multiselect.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _mainview_mathjax_mathjax_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainview/mathjax/mathjax.directive */ "./src/app/mainview/mathjax/mathjax.directive.ts");
/* harmony import */ var ng2_page_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-page-scroll */ "./node_modules/ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var angular2_highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-highcharts */ "./node_modules/angular2-highcharts/index.js");
/* harmony import */ var angular2_highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var angular2_highcharts_dist_HighchartsService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-highcharts/dist/HighchartsService */ "./node_modules/angular2-highcharts/dist/HighchartsService.js");
/* harmony import */ var angular2_highcharts_dist_HighchartsService__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_highcharts_dist_HighchartsService__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/index.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mainview_mainview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mainview/mainview.component */ "./src/app/mainview/mainview.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _shared_about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/about/about.component */ "./src/app/shared/about/about.component.ts");
/* harmony import */ var _settings_categories_statisticgroups_statisticgroups_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./settings/categories/statisticgroups/statisticgroups.component */ "./src/app/settings/categories/statisticgroups/statisticgroups.component.ts");
/* harmony import */ var _settings_categories_regressiontypes_regressiontypes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./settings/categories/regressiontypes/regressiontypes.component */ "./src/app/settings/categories/regressiontypes/regressiontypes.component.ts");
/* harmony import */ var _settings_categories_unittypes_unittypes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./settings/categories/unittypes/unittypes.component */ "./src/app/settings/categories/unittypes/unittypes.component.ts");
/* harmony import */ var _settings_categories_unitsystems_unitsystems_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./settings/categories/unitsystems/unitsystems.component */ "./src/app/settings/categories/unitsystems/unitsystems.component.ts");
/* harmony import */ var _settings_categories_variabletypes_variabletypes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./settings/categories/variabletypes/variabletypes.component */ "./src/app/settings/categories/variabletypes/variabletypes.component.ts");
/* harmony import */ var _settings_categories_regressionregions_regressionregions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./settings/categories/regressionregions/regressionregions.component */ "./src/app/settings/categories/regressionregions/regressionregions.component.ts");
/* harmony import */ var _settings_categories_scenarios_scenarios_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./settings/categories/scenarios/scenarios.component */ "./src/app/settings/categories/scenarios/scenarios.component.ts");
/* harmony import */ var _settings_categories_managers_managers_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./settings/categories/managers/managers.component */ "./src/app/settings/categories/managers/managers.component.ts");
/* harmony import */ var _settings_categories_citations_citations_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./settings/categories/citations/citations.component */ "./src/app/settings/categories/citations/citations.component.ts");
/* harmony import */ var _settings_categories_errors_errors_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./settings/categories/errors/errors.component */ "./src/app/settings/categories/errors/errors.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _mainview_unique_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mainview/unique.pipe */ "./src/app/mainview/unique.pipe.ts");
/* harmony import */ var _shared_services_app_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _shared_components_loader_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/components/loader.service */ "./src/app/shared/components/loader.service.ts");
/* harmony import */ var _shared_components_loader_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/components/loader.component */ "./src/app/shared/components/loader.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _settings_settings_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./settings/settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _settings_categories_regions_regions_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./settings/categories/regions/regions.component */ "./src/app/settings/categories/regions/regions.component.ts");
/* harmony import */ var _settings_categories_roles_roles_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./settings/categories/roles/roles.component */ "./src/app/settings/categories/roles/roles.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shared/guards/admin.guard */ "./src/app/shared/guards/admin.guard.ts");











































var appRoutes = [
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"]],
        canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"]],
        children: [
            { path: 'statisticgroups', component: _settings_categories_statisticgroups_statisticgroups_component__WEBPACK_IMPORTED_MODULE_19__["StatisticGroupsComponent"] },
            { path: 'regions', component: _settings_categories_regions_regions_component__WEBPACK_IMPORTED_MODULE_39__["RegionsComponent"], canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_42__["AdminGuard"]] },
            { path: 'regressionregions', component: _settings_categories_regressionregions_regressionregions_component__WEBPACK_IMPORTED_MODULE_24__["RegressionRegionsComponent"] },
            { path: 'regressiontypes', component: _settings_categories_regressiontypes_regressiontypes_component__WEBPACK_IMPORTED_MODULE_20__["RegressionTypesComponent"] },
            { path: 'unittypes', component: _settings_categories_unittypes_unittypes_component__WEBPACK_IMPORTED_MODULE_21__["UnitTypesComponent"] },
            { path: 'unitsystems', component: _settings_categories_unitsystems_unitsystems_component__WEBPACK_IMPORTED_MODULE_22__["UnitSystemsComponent"] },
            { path: 'variabletypes', component: _settings_categories_variabletypes_variabletypes_component__WEBPACK_IMPORTED_MODULE_23__["VariableTypesComponent"] },
            { path: 'scenarios', component: _settings_categories_scenarios_scenarios_component__WEBPACK_IMPORTED_MODULE_25__["ScenariosComponent"] },
            { path: 'managers', component: _settings_categories_managers_managers_component__WEBPACK_IMPORTED_MODULE_26__["ManagersComponent"], canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_42__["AdminGuard"]] },
            { path: 'citations', component: _settings_categories_citations_citations_component__WEBPACK_IMPORTED_MODULE_27__["CitationsComponent"] },
            { path: 'errors', component: _settings_categories_errors_errors_component__WEBPACK_IMPORTED_MODULE_28__["ErrorsComponent"], canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_42__["AdminGuard"]] },
            { path: 'roles', component: _settings_categories_roles_roles_component__WEBPACK_IMPORTED_MODULE_40__["RolesComponent"], canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_42__["AdminGuard"]] }
        ],
        runGuardsAndResolvers: 'always'
    },
    { path: '', component: _mainview_mainview_component__WEBPACK_IMPORTED_MODULE_15__["MainviewComponent"], pathMatch: 'full' }
];
function ConfigLoader(configService) {
    // Note: this factory needs to return a function (that returns a promise)
    return function () { return configService.load(_environments_environment__WEBPACK_IMPORTED_MODULE_29__["environment"].configFile); };
}
function highchartsFactory() {
    // need this to be able to do exporting of charts
    var hc = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
    var exp = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
    exp(hc);
    return hc;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _mainview_mainview_component__WEBPACK_IMPORTED_MODULE_15__["MainviewComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"], _shared_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutModal"], _shared_components_loader_component__WEBPACK_IMPORTED_MODULE_35__["LoaderComponent"], _mainview_unique_pipe__WEBPACK_IMPORTED_MODULE_30__["UniquePipe"], _mainview_mathjax_mathjax_directive__WEBPACK_IMPORTED_MODULE_8__["MathjaxDirective"],
                _settings_categories_statisticgroups_statisticgroups_component__WEBPACK_IMPORTED_MODULE_19__["StatisticGroupsComponent"], _settings_categories_regressiontypes_regressiontypes_component__WEBPACK_IMPORTED_MODULE_20__["RegressionTypesComponent"], _settings_categories_unittypes_unittypes_component__WEBPACK_IMPORTED_MODULE_21__["UnitTypesComponent"], _settings_categories_unitsystems_unitsystems_component__WEBPACK_IMPORTED_MODULE_22__["UnitSystemsComponent"], _settings_categories_variabletypes_variabletypes_component__WEBPACK_IMPORTED_MODULE_23__["VariableTypesComponent"],
                _settings_categories_regressionregions_regressionregions_component__WEBPACK_IMPORTED_MODULE_24__["RegressionRegionsComponent"], _settings_categories_scenarios_scenarios_component__WEBPACK_IMPORTED_MODULE_25__["ScenariosComponent"], _settings_categories_managers_managers_component__WEBPACK_IMPORTED_MODULE_26__["ManagersComponent"], _settings_categories_citations_citations_component__WEBPACK_IMPORTED_MODULE_27__["CitationsComponent"], _settings_categories_errors_errors_component__WEBPACK_IMPORTED_MODULE_28__["ErrorsComponent"], _settings_categories_regions_regions_component__WEBPACK_IMPORTED_MODULE_39__["RegionsComponent"], _settings_categories_roles_roles_component__WEBPACK_IMPORTED_MODULE_40__["RolesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_7__["ToasterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _node_modules_angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_6__["MultiselectDropdownModule"],
                ng2_page_scroll__WEBPACK_IMPORTED_MODULE_9__["Ng2PageScrollModule"].forRoot(), angular2_highcharts__WEBPACK_IMPORTED_MODULE_10__["ChartModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { onSameUrlNavigation: 'reload' })
            ],
            providers: [
                _shared_services_app_service__WEBPACK_IMPORTED_MODULE_31__["NSSService"], { provide: angular2_highcharts_dist_HighchartsService__WEBPACK_IMPORTED_MODULE_11__["HighchartsStatic"], useFactory: highchartsFactory }, _config_service__WEBPACK_IMPORTED_MODULE_32__["ConfigService"], _shared_components_loader_service__WEBPACK_IMPORTED_MODULE_34__["LoaderService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__["APP_INITIALIZER"], useFactory: ConfigLoader, deps: [_config_service__WEBPACK_IMPORTED_MODULE_32__["ConfigService"]], multi: true },
                _shared_services_login_service__WEBPACK_IMPORTED_MODULE_33__["LoginService"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_37__["AuthService"], _settings_settings_service__WEBPACK_IMPORTED_MODULE_38__["SettingsService"], _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_41__["AuthGuard"], _shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_42__["AdminGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
// ------------------------------------------------------------------------------
// ----- config.service..ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: service to get configuration file


var ConfigService = /** @class */ (function () {
    function ConfigService(_http) {
        this._http = _http;
    }
    ConfigService.prototype.load = function (url) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._http
                .get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (config) {
                _this.config = config;
                resolve();
            });
        });
    };
    ConfigService.prototype.getConfiguration = function () {
        return this.config;
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/mainview/mainview.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainview/mainview.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainPage {\r\n    width:auto;\r\n    margin-top: 102px;\r\n    margin-left: 345px;\r\n    position:relative;\r\n    box-sizing: border-box;\r\n    padding-right: 15px;\r\n    \r\n}\r\n\r\n.scrollable{\r\n    max-height:calc(100% - 70px);\r\n\r\n}\r\n\r\n.warning-text{\r\n    color:red;\r\n    font-style: italic;\r\n    font-size: small;\r\n}\r\n\r\n.reqError {\r\n    background-color: #efe1e1!important;\r\n    border: 1px solid #a94442!important;\r\n}\r\n\r\n.redFont {\r\n    color:red;\r\n}\r\n\r\n[hidden] { display: none !important;}\r\n\r\n[type=\"radio\"] {\r\n    position: initial !important;\r\n}\r\n\r\n[type=\"checkbox\"] {\r\n    position: initial !important;\r\n}\r\n\r\n@media print{\r\n    body * {\r\n        visibility: hidden;\r\n        -webkit-print-color-adjust: exact !important;\r\n    }\r\n    .hidden-print {\r\n        display: none !important;\r\n    }\r\n    #print-content * {\r\n        visibility: visible;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnZpZXcvbWFpbnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0JBQW9COztDQUV2Qjs7QUFFRDtJQUNJLDZCQUE2Qjs7Q0FFaEM7O0FBQ0Q7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBb0M7Q0FDdkM7O0FBQ0Q7SUFDSSxVQUFVO0NBQ2I7O0FBQ0QsV0FBVyx5QkFBeUIsQ0FBQzs7QUFDckM7SUFDSSw2QkFBNkI7Q0FDaEM7O0FBQ0Q7SUFDSSw2QkFBNkI7Q0FDaEM7O0FBQ0Q7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQiw2Q0FBNkM7S0FDaEQ7SUFDRDtRQUNJLHlCQUF5QjtLQUM1QjtJQUNEO1FBQ0ksb0JBQW9CO0tBQ3ZCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWludmlldy9tYWludmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5QYWdlIHtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNDVweDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBcclxufVxyXG5cclxuLnNjcm9sbGFibGV7XHJcbiAgICBtYXgtaGVpZ2h0OmNhbGMoMTAwJSAtIDcwcHgpO1xyXG5cclxufVxyXG4ud2FybmluZy10ZXh0e1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4ucmVxRXJyb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZTFlMSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTk0NDQyIWltcG9ydGFudDtcclxufVxyXG4ucmVkRm9udCB7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuW2hpZGRlbl0geyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7fVxyXG5bdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIHBvc2l0aW9uOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuW3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBwcmludHtcclxuICAgIGJvZHkgKiB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhpZGRlbi1wcmludCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3ByaW50LWNvbnRlbnQgKiB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/mainview/mainview.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainview/mainview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"printArea\" class=\"mainPage scrollable\">\r\n\r\n    <!-- toaster directive -->\r\n    <toaster-container></toaster-container>\r\n    <!-- / toaster directive -->\r\n\r\n    <div><h3 style=\"font-size: 32px !important; font-weight: bolder !important;\">{{title}}</h3></div>\r\n    <div style=\"margin-bottom: 5px; opacity: 0.5; letter-spacing: 0.6px;\">{{timestamp | date:\"MMMM d, y hh:mma\"}}</div>\r\n    <div class=\"col-md-6\">\r\n        <div *ngIf=\"selectedRegion\">\r\n            <label style=\"margin-bottom: 0 !important; margin-top: 15px !important;\">Region:</label>\r\n            <div style=\"font-weight: bolder !important; font-size: 18px !important;\">{{selectedRegion.name}}</div>\r\n        </div>\r\n\r\n        <br/>\r\n        <div *ngIf=\"selectedStatisticGrp?.length>0\">\r\n            <label style=\"margin-bottom: 0 !important; margin-top: 15px !important;\">Statistic Group(s):</label>\r\n            <div>\r\n                <span *ngFor=\"let st of selectedStatisticGrp;let isLast=last\" style=\"font-weight: bolder !important; font-size: 18px !important;\">{{st.name}}{{isLast ? \"\" : \", \"}}</span>\r\n            </div>\r\n        </div>\r\n\r\n        <br />\r\n        <div *ngIf=\"selectedRegressionRegion?.length>0\">\r\n            <label style=\"margin-bottom: 0 !important; margin-top: 15px !important;\">Regression Group(s):</label>\r\n            <div>\r\n                <span *ngFor=\"let rr of selectedRegressionRegion;let isLast=last\" style=\"font-weight: bolder !important; font-size: 18px !important;\">{{rr.name}}{{isLast ? \"\" : \", \"}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br clear=\"all\"/>\r\n\r\n     <!-- scenarios && !resultsBack-->\r\n    <div class=\"hidden-print\" *ngIf=\"scenarios && !resultsBack\">\r\n        <label>Equation Variables</label> \r\n        <br/>\r\n        <div *ngIf=\"scenarios.length == 0\">There are no scenarios available for the options chosen.</div>\r\n        <form #scenarioForm=\"ngForm\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\" *ngFor=\"let sc of scenarios;let sInd = index\">\r\n                    <h3>{{sc.statisticGroupName}}</h3>\r\n                    <div class=\"col-xs-12\" *ngIf=\"sc.regressionRegions?.length > 0\">\r\n                        <table class=\"table\">\r\n                            <tr *ngFor=\"let rr of sc.regressionRegions;let rInd = index\">\r\n                                <td style=\"vertical-align:middle;\">{{rr.name}} <span *ngIf=\"multipleRegRegions\" style=\"font-size: x-small\">(RG_Code: {{rr.code}})</span></td>\r\n                                <td *ngIf=\"showWeights\" class=\"col-xs-3\" style=\"vertical-align:middle;text-align:end;\">% Area Weight:</td>\r\n                                <td *ngIf=\"showWeights\" class=\"col-xs-2\">\r\n                                    <input style=\"display:inline;\" type=\"text\" id=\"PercentWeight\"class=\"form-control\" (keypress)=\"_keyPress($event)\" name=\"PercentWeight-{{rInd}}\" [(ngModel)]=\"rr.percentWeight\">\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </div><!-- end length > 0-->\r\n                    <div *ngIf=\"sc.regressionRegions.length == 0\"><h3>There are no Results for your selection. Please try another .... </h3></div>\r\n                </div>  <!-- end ngFor scenarios -->\r\n            </div>\r\n            <table *ngIf=\"scenarios[0].regressionRegions.length > 0\" style=\"border:solid 1px gray\" class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"col-xs-5\">Parameter</th>\r\n                        <th>Code</th>\r\n                        <th class=\"col-xs-2\">Value</th>\r\n                        <th class=\"col-xs-1\" *ngIf=\"multipleRegRegions\"></th>\r\n                        <th class=\"col-xs-2\">Min Limit</th>\r\n                        <th class=\"col-xs-3\">Max Limit</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let p of uniqueParameters;let pInd=index \">\r\n                        <td>{{p.name}} <a (click)=\"showDescription(p, pInd)\"><span class=\"glyphicon glyphicon-question-sign nss-tooltip\"></span></a>\r\n                            <!-- description span -->\r\n                            <br *ngIf=\"p.seeDescription\"/>\r\n                            <span style=\"font-size:small;\" *ngIf=\"p.seeDescription\">{{p.description}}</span>\r\n                            <!-- outOfRange span -->\r\n                            <br *ngIf=\"p.outOfRange\"/>\r\n                            <span *ngIf=\"p.outOfRange\" class=\"warning-text\">Warning: Parameter is outside of suggested range. Estimates will be extrapolations with unknown errors</span>\r\n                        </td>\r\n                        <td>{{p.code}}</td>\r\n                        <td>\r\n                            <div class=\"col-xs-10\" style=\"margin-left:0;padding-left:0;\">\r\n                                <input class=\"form-control\" style=\"display:inline\" [ngClass]=\"{'reqError':p.missingVal}\" type=\"text\"\r\n                                        (keypress)=\"_keyPress($event)\" (blur)=\"compareValue(p)\" [(ngModel)]=\"p.value\" name=\"Value-{{pInd}}\" required>\r\n                                (<span [innerHTML]=\"setSuperScript(p.unitType.abbr)\" style=\"display:inline;\"></span>)\r\n                            </div>\r\n                        </td>\r\n                        <td *ngIf=\"multipleRegRegions\">\r\n                            <span *ngFor=\"let l of p.limitArray\">\r\n                                <span  class=\"pull-right\" style=\"white-space:nowrap;\" *ngIf=\"l != undefined\" [ngClass]=\"{'redFont':l.outOfRange}\">\r\n                                    <span style=\"font-size: x-small\">{{l != undefined ? l.rrID : ''}}</span><br />\r\n                                </span>\r\n                            </span>\r\n                        </td>\r\n                        <td>\r\n                            <span *ngFor=\"let l of p.limitArray\">\r\n                            <span *ngIf=\"l!=undefined\" style=\"white-space:nowrap;\" [ngClass]=\"{'redFont':l.outOfRange}\">{{l != undefined ? sigFigures(l.min): \"--\"}}\r\n                                (<span [innerHTML]=\"setSuperScript(p.unitType.abbr)\"></span>)\r\n                                <br/>\r\n                            </span>\r\n                        </span></td>\r\n                        <td>\r\n                            <span *ngFor=\"let l of p.limitArray\">\r\n                                <span *ngIf=\"l!=undefined\" style=\"white-space:nowrap;\" [ngClass]=\"{'redFont':l.outOfRange}\">{{l != undefined ? sigFigures(l.max) : \"--\"}} (\r\n                                    <span [innerHTML]=\"setSuperScript(p.unitType.abbr)\"></span>)\r\n                                    <br/>\r\n                                </span>\r\n                            </span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <h2 style=\"margin:0;padding:0\">Citations</h2>\r\n            <div *ngFor=\"let sc of scenarios\">\r\n                <label *ngIf=\"sc.citations\">{{sc.statisticGroupName}} Citations</label>\r\n                <div *ngFor=\"let l of sc.citations\">\r\n                    <a [href]=\"l.citationURL\" [target]=\"_blank\">\r\n                        <div>{{l.author}}</div>\r\n                        <div>{{l.title}}</div>\r\n                    </a>\r\n                    <br />\r\n                </div>\r\n            </div><!--end foreach scenario (for citations) {{l != undefined ? l.rrID : ''}}-->\r\n        </form>\r\n    </div> <!--end if scenarios-->\r\n\r\n     <!-- resultsBack-->\r\n    <div *ngIf=\"resultsBack\">\r\n        <button type=\"button\" class=\"btn-wim-primary hidden-print\" style=\"margin-bottom: 15px;\" (click)=\"editScenario()\">Edit Scenario Parameters</button>\r\n        <div *ngFor=\"let s of scenarios\">\r\n            <h3>{{s.statisticGroupName}}</h3>\r\n            <div *ngFor=\"let rr of s.regressionRegions;let r = index\">\r\n                <div><!-- *ngIf=\"rr.ID > 0\">  -->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <a class=\"hidden-print\" (click)=\"exportInputTable(r)\" style=\"cursor: pointer\"><span class=\"glyphicon glyphicon-download-alt\"></span></a>\r\n                            <table #inputsTable>\r\n                                <tr><td>{{rr.name}} Region</td></tr>\r\n                                <tr *ngIf=\"rr.percentWeight\"><td>{{rr.percentWeight}}% Weighted</td></tr>\r\n                                <tr *ngFor=\"let p of rr.parameters\"><td>{{p.name}} = {{p.value}} (<span [innerHTML]=\"setSuperScript(p.unitType.abbr)\"></span>)</td></tr>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <!--<a class=\"hidden-print\" (click)=\"exportTable(r)\" style=\"cursor: pointer\"><span class=\"glyphicon glyphicon-download-alt\"></span></a>-->\r\n                            <span>[SEe, Standard Error of Estimate; SEp, Standard Error of Prediction; SE, Standard Error (other -- see report)]</span>\r\n                            <table #resultsTable style=\"border:solid 1px gray\" class=\"table\">\r\n                                <thead>\r\n                                    <tr style=\"border-bottom: white solid;\">\r\n                                        <th class=\"col-xs-6\">{{rr.name}} Region</th>\r\n                                        <th>Value</th>\r\n                                        <th *ngIf=\"rr.results[0].intervalBounds\" colspan=\"2\">Prediction Interval</th>\r\n                                        <th *ngIf=\"rr.results[0].errors && rr.results[0].errors.length > 0\" [attr.colspan]=\"rr.results[0].errors.length\">Errors (%)</th>\r\n                                        <th *ngIf=\"rr.results[0].equivalentYears>0\">Equivalent Yrs.</th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"col-xs-6\">Description</th>\r\n                                        <th>(<span [innerHTML]=\"setSuperScript(rr.results[0].unit.abbr)\"></span>)</th>\r\n                                        <th *ngIf=\"rr.results[0].intervalBounds\">Low</th>\r\n                                        <th *ngIf=\"rr.results[0].intervalBounds\">High</th>\r\n                                        <th *ngFor=\"let e of rr.results[0]?.errors\">{{e.code}}</th>\r\n                                        <th *ngIf=\"rr.results[0].equivalentYears>0\"></th><!--space for if Equivalent Yrs-->\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let result of rr.results\">\r\n                                        <td>{{result.description}} ({{result.code}})</td>\r\n                                        <td>{{sigFigures(result.value)}}</td>\r\n                                        <td *ngIf=\"rr.results[0].intervalBounds\">{{result.intervalBounds != undefined && result.intervalBounds.lower != \"NaN\" ? sigFigures(result.intervalBounds.lower) : '---'}}</td>\r\n                                        <td *ngIf=\"rr.results[0].intervalBounds\">{{result.intervalBounds != undefined && result.intervalBounds.upper != \"NaN\" ? sigFigures(result.intervalBounds.upper) : '---'}}</td>\r\n                                        <td *ngFor=\"let e of result?.errors\">{{e.value}}</td>\r\n                                        <td *ngIf=\"rr.results[0].equivalentYears>0\">{{result.equivalentYears > 0 && result.equivalentYears !== 999 ? result.equivalentYears : 'N/A'}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div><!-- END rr.id > 0\r\n                <div *ngIf=\"rr.id == 0\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <a class=\"hidden-print\" (click)=\"exportInputTable(r)\" style=\"cursor: pointer\"><span class=\"glyphicon glyphicon-download-alt\"></span></a>\r\n                            <table #inputsTable>\r\n                                <tr><td>{{rr.name}}</td></tr>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                    <br />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <table #resultsTable style=\"border:solid 1px gray\" class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"col-xs-6\">Description</th>\r\n                                        <th>Value</th>\r\n                                        <th *ngIf=\"rr.results[0].equivalentYears>0\">Equivalent<br/>Years</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let result of rr.results\">\r\n                                        <td>{{result.description}} ({{result.code}})</td>\r\n                                        <td>{{sigFigures(result.value)}}</td>\r\n                                        <td *ngIf=\"rr.results[0].equivalentYears>0\">{{result.equivalentYears}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div> --><!-- end 'Area-averaged'-->\r\n            </div>\r\n        </div> <!-- end for each Scenario-->\r\n\r\n        <!-- Citations -->\r\n        <h2 id=\"citations\" style=\"margin:0;padding:0\">Citations</h2>\r\n        <div *ngFor=\"let sc of scenarios\">\r\n            <div *ngFor=\"let c of sc.citations\"><!--\" | unique\">-->\r\n            <a [href]=\"c.citationURL\" [target]=\"_blank\">\r\n                <div>{{c.author}}</div>\r\n                <div>{{c.title}}</div>\r\n            </a>\r\n            <br />\r\n        </div>\r\n        <!-- ngfor each chart being added show here\r\n            //if showCharts_btn is true == show the charts and showChartBtn_txt says \"Hide\"\r\n            //if showCharts_btn is false == hide the charts and showChartBtn_txt says \"Show\" -->\r\n        <!-- charts-->\r\n        <div id=\"chart\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\" *ngIf=\"hydroChartsArray.length >0\" style=\"padding-bottom: 25px !important;\">\r\n                    <h2 class=\"charts-header\">Charts</h2>\r\n                    <button class=\"hidden-print\" style=\"display:inline-block;\" type=\"button\" (click)=\"showHideCharts()\">{{showChartBtn_txt}}</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div [hidden]=\"!showCharts_btn\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\" *ngFor=\"let c of hydroChartsArray;let i = index\" style=\"display:flex;\"> <!-- For Each hydroChartsArray start -->\r\n                        <div class=\"chart-wrapper\">\r\n                            <button type=\"button\" class=\"pull-right hidden-print\" (click)=\"removeHydroChart(i)\">x</button><br clear=\"all\" />\r\n                            <chart (load)=\"saveInstance($event.context)\" [options]=\"c\"></chart>\r\n                        </div>\r\n                        <div class=\"hidden-print\" *ngIf=\"selectedPlot=='Hydrograph'\" style=\"flex-grow:4;\">\r\n                            <!-- Start of FORM for hydrochart -->\r\n                            <form id=\"myChartForm\" name=\"myChartForm\" #myChartForm=\"ngForm\" (ngSubmit)=\"refreshHydrograph()\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-xs-5\">Recurrence Interval:</label>\r\n                                    <div class=\"col-xs-5\">\r\n                                        <span class=\"select-wim\">\r\n                                            <select [(ngModel)]=\"hydrographs[i].recurrence\" (ngModelChange)=\"refreshHydrograph(i, myChartForm.form.controls)\" name=\"recurrence\">\r\n                                                <option [value]=\"r\" *ngFor=\"let r of hChartXAxisValues\">{{r}}</option>\r\n                                            </select>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\" style=\"padding-top:5px;\">\r\n                                    <label class=\"col-xs-5\">Lag Time (hrs):</label>\r\n                                    <div class=\"col-xs-5\">\r\n                                        <input type=\"text\" class=\"form-control\" name=\"lagTime\" (keypress)=\"_keyPress($event)\" [(ngModel)]=\"hydrographs[i].lagTime\" (keyup)=\"refreshHydrograph(i, myChartForm.form.controls)\">\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <br clear=\"all\" />\r\n                                <div class=\"hidden-print\"><a class=\"hidden-print simple-btn\" (click)=\"showHideAdditionalChartSettings(i)\" style=\"cursor: pointer; margin-left: 15px;\">More options</a></div>\r\n                                <br clear=\"all\" />\r\n                                <div *ngIf=\"hydrographs[i]?.showExtraSettings\" [hidden]=\"!hydrographs[i].showExtraSettings\" class=\"panel panel-default hidden-print\" style=\"border: none !important;\">\r\n                                    <div class=\"panel-body\">\r\n                                        <div style=\"font-size: small\">\r\n                                            <span>* To zoom in, click and drag a box in the chart</span>\r\n\r\n                                        </div>\r\n                                        <!-- AXIS -->\r\n                                        <div>\r\n                                            <div style=\"font-size: 16px !important; font-weight: bold !important;\">Axes</div>\r\n                                            <div class=\"form-group col-xs-6\">\r\n                                                <label class=\"control-label\">Choose Axis to update:</label>\r\n                                                <div>\r\n                                                    <div style=\"padding-right: 10px\">\r\n                                                        <input type=\"radio\"  name=\"axis\" [(ngModel)]=\"hydrographs[i].axis\" value=\"BottomX\" (click)=\"axis='BottomX'\" />Bottom X\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <input type=\"radio\" name=\"axis\" [(ngModel)]=\"hydrographs[i].axis\" value=\"LeftY\" (click)=\"axis='LeftY'\" />Left Y\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> <!-- end (AXIS) form group  -->\r\n                                            <!-- TYPE -->\r\n                                            <div class=\"form-group col-xs-6\">\r\n                                                <label class=\"control-label\">Type:</label>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'BottomX'\">\r\n                                                    <span style=\"padding-right:10px\">\r\n                                                        <input type=\"radio\" name=\"type_BX\" [(ngModel)]=\"hydrographs[i].type_BX\" (click)=\"setXaxisType(i, 'linear')\" value=\"linear\" />Linear\r\n                                                    </span>\r\n                                                    <span>\r\n                                                        <input type=\"radio\" name=\"type_BX\" [(ngModel)]=\"hydrographs[i].type_BX\" (click)=\"setXaxisType(i, 'logarithmic')\" value=\"logarithmic\" />Logarithmic\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'LeftY'\">\r\n                                                    <span style=\"padding-right: 10px\">\r\n                                                        <input type=\"radio\" name=\"type_LY\" [(ngModel)]=\"hydrographs[i].type_LY\" (click)=\"setYaxisType(i, 'linear')\" value=\"linear\" />Linear\r\n                                                    </span>\r\n                                                    <span>\r\n                                                        <input type=\"radio\" name=\"type_LY\" [(ngModel)]=\"hydrographs[i].type_LY\" (click)=\"setYaxisType(i, 'logarithmic')\" value=\"logarithmic\" />Logarithmic\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div> <!-- end (TYPE) form group -->\r\n                                            <!-- TITLE -->\r\n                                            <div class=\"form-group  col-xs-12\">\r\n                                                <label class=\"control-label\" style=\"font-size: 16px !important; font-weight: bold !important;\">Axis Title:</label>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'BottomX'\">\r\n                                                    <textarea cols=\"60\" rows=\"4\" class=\"form-control\" [innerHTML]=\"hydrographs[i].title_BX\" name=\"title_BX\" (keyup)=\"updateBXtitle(i)\" [(ngModel)]=\"hydrographs[i].title_BX\"></textarea>\r\n                                                </div>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'LeftY'\">\r\n                                                    <textarea cols=\"60\" rows=\"4\" class=\"form-control\" [innerHTML]=\"hydrographs[i].title_LY\" name=\"title_LY\" (keyup)=\"updateLYtitle(i)\"  [(ngModel)]=\"hydrographs[i].title_LY\"></textarea>\r\n                                                </div>\r\n                                            </div> <!-- end (TITLE) form group -->\r\n                                            <!-- MAJOR UNITS -->\r\n                                            <div class=\"form-group col-xs-4\">\r\n                                                <label class=\"control-label\">Major Units:</label>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'BottomX'\">\r\n                                                    <span style=\"padding-right: 10px\"><input type=\"checkbox\" name=\"majorGrid_BX\" (change)=\"setXChartLines(i, 'gridLineWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].majorGrid_BX\" /> grid</span>\r\n                                                    <span><input type=\"checkbox\" name=\"majorTic_BX\" (change)=\"setXChartLines(i, 'tickWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].majorTic_BX\"  /> tics</span>\r\n                                                </div>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'LeftY'\">\r\n                                                    <span style=\"padding-right: 10px\"><input type=\"checkbox\" name=\"majorGrid_LY\" (change)=\"setYChartLines(i, 'gridLineWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].majorGrid_LY\" /> grid</span>\r\n                                                    <span><input type=\"checkbox\" name=\"majorTic_LY\" (change)=\"setYChartLines(i, 'tickWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].majorTic_LY\" /> tics</span>\r\n                                                </div>\r\n                                            </div> <!-- end (MAJOR UNITS) form group -->\r\n\r\n                                            <!-- MINOR UNITS -->\r\n                                            <div class=\"form-group col-xs-4\">\r\n                                                <label class=\"control-label\">Minor Units:</label>\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'BottomX'\">\r\n                                                    <span style=\"padding-right: 10px\"><input [disabled]=\"hydrographs[i].type_BX == 'logarithmic'\" type=\"checkbox\" name=\"minorGrid_BX\" (change)=\"setXChartLines(i, 'minorGridLineWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].minorGrid_BX\"/> grid</span>\r\n                                                    <span style=\"padding-right:5px\"><input [disabled]=\"hydrographs[i].type_BX == 'logarithmic'\" type=\"checkbox\" name=\"minorTic_BX\" (change)=\"setXChartLines(i, 'minorTickWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].minorTic_BX\" /> tics</span>\r\n                                                    <span [hidden]=\"hydrographs[i].type_LY != 'logarithmic' && hydrographs[i].type_BX != 'logarithmic'\" style=\"font-size: small\">(Disabled with Log)</span>\r\n                                                </div>\r\n\r\n                                                <div [hidden]=\"hydrographs[i].axis != 'LeftY'\">\r\n                                                    <span style=\"padding-right: 10px\"><input [disabled]=\"hydrographs[i].type_LY == 'logarithmic'\" type=\"checkbox\" name=\"minorGrid_LY\" (change)=\"setYChartLines(i, 'minorGridLineWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].minorGrid_LY\" /> grid</span>\r\n                                                    <span style=\"padding-right:5px\"><input [disabled]=\"hydrographs[i].type_LY == 'logarithmic'\" type=\"checkbox\" name=\"minorTic_LY\" (change)=\"setYChartLines(i, 'minorTickWidth', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].minorTic_LY\" /> tics</span>\r\n                                                    <span [hidden]=\"hydrographs[i].type_LY != 'logarithmic' && hydrographs[i].type_BX != 'logarithmic'\" style=\"font-size: x-small;font-weight: bold\">(Disabled with Log)</span>\r\n                                                </div>\r\n                                            </div> <!-- end (MINOR UNITS) form group -->\r\n                                            <div class=\"form-group col-xs-4\">\r\n                                                <label class=\"control-label\">\r\n                                                    <div [hidden]=\"hydrographs[i].axis != 'BottomX'\">\r\n                                                        <span><input type=\"checkbox\" name=\"reverse_BX\" (change)=\"setReverseData(i, 'bx', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].reverse_BX\"/> reverse</span>\r\n                                                    </div>\r\n                                                    <div [hidden]=\"hydrographs[i].axis != 'LeftY'\">\r\n                                                        <span><input type=\"checkbox\" name=\"reverse_LY\" (change)=\"setReverseData(i, 'ly', $event.target.checked)\" [(ngModel)]=\"hydrographs[i].reverse_LY\"/> reverse</span>\r\n                                                    </div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div><!-- end Axes -->\r\n                                        <br clear=\"all\"/>\r\n                                        <!--Curves and Legend-->\r\n                                        <div>\r\n                                            <div style=\"font-size: 16px !important; font-weight: bold !important;\">Curves and Legend</div>\r\n                                            <div><!--Curves color/width -->\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Curve Color:</label>\r\n                                                  <div><input [colorPicker]=\"hydrographs[i].colorPickerColor\" (colorPickerChange)=\"changeLineColor(i,$event)\" [style.background]=\"hydrographs[i].colorPickerColor\" [value]=\"hydrographs[i].colorPickerColor\"/></div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Curve Width:</label>\r\n                                                    <div><input type=\"text\" name=\"lineWidth\" (keyup)=\"setLineWidth(i)\" [(ngModel)]=\"hydrographs[i].lineWidth\"/></div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div><!-- Line symbol color/point symbol -->\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Line Symbol Color:</label>\r\n                                                    <div><input [colorPicker]=\"hydrographs[i].lineSymbolFillColor\" (colorPickerChange)=\"changeLineSymbolColor(i,$event)\" [style.background]=\"hydrographs[i].lineSymbolFillColor\" [value]=\"hydrographs[i].lineSymbolFillColor\"/></div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Point Symbol:</label>\r\n                                                    <div>\r\n                                                        <span class=\"select-wim\">\r\n                                                            <select [(ngModel)]=\"hydrographs[i].lineSymbol\" (ngModelChange)=\"setLineSymbol(i,$event)\" name=\"lineSymbol\">\r\n                                                                <option value=\"circle\">Circle</option>\r\n                                                                <option value=\"square\">Square</option>\r\n                                                                <option value=\"diamond\">Diamond</option>\r\n                                                                <option value=\"triangle\">Triangle</option>\r\n                                                                <option value=\"triangle-down\">Triangle-down</option>\r\n                                                            </select>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <br clear=\"all\"/>\r\n                                            <div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Legend Label:</label>\r\n                                                    <div><input type=\"text\" class=\"form-control\" name=\"curveLabel\" [(ngModel)]=\"hydrographs[i].curveLabel\" (keyup)=\"updateCurveLabel(i)\" /></div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">\r\n                                                        <input type=\"checkbox\" name=\"dataLabels\" (change)=\"updateDataLabels(i, $event.target.checked)\" [(ngModel)]=\"hydrographs[i].dataLabels\"/> Show Data Values\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div> <!-- end curves-->\r\n                                    </div> <!-- end panel-body -->\r\n                                </div>\r\n                                <br clear=\"all\" />\r\n                            </form>\r\n                        </div><!-- end form for inputs-->\r\n                    </div> <!-- end for each hydroChartsArray loop -->\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"fChartOptions\">\r\n                <div *ngIf=\"hydroChartsArray.length == 0\" style=\"padding-left: 0 !important; padding-bottom: 25px !important;\">\r\n                    <!-- show show/hide button only if there are no hydrographs above it (because that has the button also)-->\r\n                    <h2 class=\"charts-header\">Charts</h2>\r\n\r\n                    <button class=\"hidden-print\" style=\"display:inline-block;\" type=\"button\" (click)=\"showHideCharts()\">{{showChartBtn_txt}}</button>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\" *ngIf=\"showCharts_btn\" style=\"display: flex;\">\r\n                        <div class=\"chart-wrapper\">\r\n                            <button type=\"button\" class=\"pull-right hidden-print\" (click)=\"removeFreqChart()\">x</button><br clear=\"all\" />\r\n                            <chart (load)=\"saveFreqInstance($event.context)\" [options]=\"fChartOptions\"></chart>\r\n                        </div>\r\n                        <div style=\"flex-grow: 4;\">\r\n                            <br clear=\"all\" />\r\n                            <div class=\"hidden-print\"><a (click)=\"showHideAddFChartSettings()\" class=\"simple-btn\" style=\"cursor: pointer; margin-left: 15px;\">More options</a></div>\r\n                            <br clear=\"all\" />\r\n                            <div *ngIf=\"showExtraFREQSettings\" [hidden]=\"!showExtraFREQSettings\" class=\"panel panel-default hidden-print\" style=\"border: none !important;\">\r\n                                <div class=\"panel-body\">\r\n                                    <form id=\"myFChartForm\" name=\"myFChartForm\" #myFChartForm=\"ngForm\">\r\n                                        <div style=\"font-size: small\">\r\n                                            <span>* To zoom in, click and drag a box in the chart</span>\r\n                                        </div>\r\n                                        <!-- AXIS -->\r\n                                        <div>\r\n                                            <div style=\"font-size: 16px !important; font-weight: bold !important;\">Axes</div>\r\n                                            <div class=\"form-group col-xs-6\">\r\n                                                <label class=\"control-label\">Choose Axis to update:</label>\r\n                                                <div>\r\n                                                    <div style=\"padding-right: 10px\">\r\n                                                        <input type=\"radio\"  name=\"Faxis\" [(ngModel)]=\"frequencyPlotChart.Faxis\" value=\"BottomX\" (click)=\"Faxis='BottomX'\" />Bottom X\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <input type=\"radio\" name=\"Faxis\" [(ngModel)]=\"frequencyPlotChart.Faxis\" value=\"LeftY\" (click)=\"Faxis='LeftY'\" />Left Y\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> <!-- end (AXIS) form group  -->\r\n                                            <!-- TYPE -->\r\n                                            <div class=\"form-group col-xs-6\">\r\n                                                <label class=\"control-label\" [hidden]=\"frequencyPlotChart.Faxis != 'BottomX'\">Type:</label>\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'BottomX'\">\r\n                                                    <span>\r\n                                                        <input type=\"radio\" name=\"type_BX\" [(ngModel)]=\"frequencyPlotChart.type_BX\" (click)=\"setFreqXaxisType('returnPeriod')\" value=\"returnPeriod\" />Return Period\r\n                                                    </span><br/>\r\n                                                    <span style=\"padding-right: 10px\">\r\n                                                        <input type=\"radio\" name=\"type_BX\" [(ngModel)]=\"frequencyPlotChart.type_BX\" (click)=\"setFreqXaxisType('percent')\" value=\"percent\" />Percent\r\n                                                    </span>\r\n                                                    <span>\r\n                                                        <input type=\"radio\" name=\"type_BX\" [(ngModel)]=\"frequencyPlotChart.type_BX\" (click)=\"setFreqXaxisType('fraction')\" value=\"fraction\" />Fraction\r\n                                                    </span>\r\n\r\n                                                </div>\r\n                                            </div> <!-- end (TYPE) form group -->\r\n                                            <!-- TITLE -->\r\n                                            <div class=\"form-group  col-xs-12\">\r\n                                                <label class=\"control-label\" style=\"font-size: 16px !important; font-weight: bold !important;\">Axis Title:</label>\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'BottomX'\">\r\n                                                    <textarea cols=\"60\" rows=\"4\" class=\"form-control\" [innerHTML]=\"frequencyPlotChart.title_BX\" name=\"title_BX\" (keyup)=\"updateFreqBXtitle()\" [(ngModel)]=\"frequencyPlotChart.title_BX\"></textarea>\r\n                                                </div>\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'LeftY'\">\r\n                                                    <textarea cols=\"60\" rows=\"4\" class=\"form-control\" [innerHTML]=\"frequencyPlotChart.title_LY\" name=\"title_LY\" (keyup)=\"updateFreqLYtitle()\"  [(ngModel)]=\"frequencyPlotChart.title_LY\"></textarea>\r\n                                                </div>\r\n                                            </div> <!-- end (TITLE) form group -->\r\n                                            <!-- MAJOR UNITS -->\r\n                                            <div class=\"form-group col-xs-4\">\r\n                                                <label class=\"control-label\">Major Units:</label>\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'BottomX'\">\r\n                                                    <span style=\"padding-right: 10px\"><input type=\"checkbox\" name=\"majorGrid_BX\" (change)=\"setFreqXChartLines('gridLineWidth', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.majorGrid_BX\" /> grid</span>\r\n                                                    <span><input type=\"checkbox\" name=\"majorTic_BX\" (change)=\"setFreqXChartLines('tickWidth', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.majorTic_BX\"  /> tics</span>\r\n                                                </div>\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'LeftY'\">\r\n                                                    <span style=\"padding-right: 10px\"><input type=\"checkbox\" name=\"majorGrid_LY\" (change)=\"setFreqYChartLines('gridLineWidth', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.majorGrid_LY\" /> grid</span>\r\n                                                    <span><input type=\"checkbox\" name=\"majorTic_LY\" (change)=\"setFreqYChartLines('tickWidth', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.majorTic_LY\" /> tics</span>\r\n                                                </div>\r\n                                            </div> <!-- end (MAJOR UNITS) form group -->\r\n\r\n                                            <!-- MINOR UNITS -->\r\n                                            <div class=\"form-group col-xs-4\">\r\n                                                <label class=\"control-label\">Minor Units:</label>\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'BottomX'\">\r\n                                                    <span style=\"padding-right: 10px\">\r\n                                                        <input type=\"checkbox\" name=\"minorGrid_BX\" (change)=\"setFreqXChartLines('minorGridLineWidth', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.minorGrid_BX\"/> grid\r\n                                                    </span>\r\n                                                    <span style=\"padding-right:5px\">\r\n                                                        <input type=\"checkbox\" name=\"minorTic_BX\" (change)=\"setFreqXChartLines('minorTickWidth', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.minorTic_BX\" /> tics\r\n                                                    </span>\r\n                                                </div>\r\n\r\n                                                <div [hidden]=\"frequencyPlotChart.Faxis != 'LeftY'\">\r\n                                                    <span style=\"padding-right: 10px\">\r\n                                                        <input [disabled]=\"'true'\" type=\"checkbox\" name=\"minorGrid_LY\" [(ngModel)]=\"frequencyPlotChart.minorGrid_LY\" /> grid\r\n                                                    </span>\r\n                                                    <span style=\"padding-right:5px\">\r\n                                                        <input [disabled]=\"'true'\" type=\"checkbox\" name=\"minorTic_LY\" [(ngModel)]=\"frequencyPlotChart.minorTic_LY\" /> tics\r\n                                                    </span>\r\n                                                    <span style=\"font-size: x-small;font-weight: bold\">(Disabled with Log)</span>\r\n                                                </div>\r\n                                            </div> <!-- end (MINOR UNITS) form group -->\r\n                                            <div class=\"form-group col-xs-4\">\r\n                                                <label class=\"control-label\">\r\n                                                    <div [hidden]=\"frequencyPlotChart.Faxis != 'BottomX'\">\r\n                                                        <span><input type=\"checkbox\" name=\"reverse_BX\" (change)=\"setFreqReverseData('bx', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.reverse_BX\"/> reverse</span>\r\n                                                    </div>\r\n                                                    <div [hidden]=\"frequencyPlotChart.Faxis != 'LeftY'\">\r\n                                                        <span><input type=\"checkbox\" name=\"reverse_LY\" (change)=\"setFreqReverseData('ly', $event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.reverse_LY\"/> reverse</span>\r\n                                                    </div>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div><!-- end Axes -->\r\n                                        <br clear=\"all\"/>\r\n                                        <div>\r\n                                            <div style=\"font-size: 16px !important; font-weight: bold !important;\">Curves and Legend</div>\r\n                                            <div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Curve Color:</label>\r\n                                                    <div><input [colorPicker]=\"frequencyPlotChart.colorPickerColor\" (colorPickerChange)=\"changeFreqLineColor($event)\" [style.background]=\"frequencyPlotChart.colorPickerColor\" [value]=\"frequencyPlotChart.colorPickerColor\"/></div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Curve Width:</label>\r\n                                                    <div><input type=\"text\" name=\"lineWidth\" (keyup)=\"setFreqLineWidth()\" [(ngModel)]=\"frequencyPlotChart.lineWidth\"/></div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Line Symbol Color:</label>\r\n                                                    <div><input [colorPicker]=\"frequencyPlotChart.lineSymbolFillColor\" (colorPickerChange)=\"changeFreqLineSymbolColor($event)\" [style.background]=\"frequencyPlotChart.lineSymbolFillColor\" [value]=\"frequencyPlotChart.lineSymbolFillColor\"/></div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Point Symbol:</label>\r\n                                                    <div>\r\n                                                        <span class=\"select-wim\">\r\n                                                            <select [(ngModel)]=\"frequencyPlotChart.lineSymbol\" (ngModelChange)=\"setFreqLineSymbol($event)\" name=\"lineSymbol\">\r\n                                                                <option value=\"circle\">Circle</option>\r\n                                                                <option value=\"square\">Square</option>\r\n                                                                <option value=\"diamond\">Diamond</option>\r\n                                                                <option value=\"triangle\">Triangle</option>\r\n                                                                <option value=\"triangle-down\">Triangle-down</option>\r\n                                                            </select>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <br clear=\"all\"/>\r\n                                            <div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">Legend Label:</label>\r\n                                                    <div><input type=\"text\" class=\"form-control\" name=\"curveLabel\" [(ngModel)]=\"frequencyPlotChart.curveLabel\" (keyup)=\"updateFreqCurveLabel()\" /></div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-xs-6\">\r\n                                                    <label class=\"control-label\">\r\n                                                        <input type=\"checkbox\" name=\"dataLabels\" (change)=\"updateFreqDataLabels($event.target.checked)\" [(ngModel)]=\"frequencyPlotChart.dataLabels\"/> Show Data Values\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div> <!-- end curves-->\r\n                                    </form>\r\n                                </div> <!-- end panel-body -->\r\n                            </div>\r\n                            <br clear=\"all\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br clear=\"all\"/>\r\n\r\n        <!-- appendix section for equation -->\r\n        <a class=\"hidden-print\" (click)=\"exportAppendix()\" style=\"cursor: pointer\"><span class=\"glyphicon glyphicon-download-alt\"></span></a>\r\n        <h2 style=\"margin:0;padding:0\" id=\"appendix\">Appendix</h2>\r\n\r\n        <h4>Equations</h4>\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let e of equationResults\" class=\"col-xs-10\">\r\n            <table style=\"border:solid 1px gray\" class=\"table\">\r\n                    <tr><td colspan=\"2\">{{e.name}}</td><tr>\r\n                    <tr *ngFor=\"let c of e.formulas\">\r\n                        <td>{{c.Code}} = </td>\r\n                        <td><span [MathJax]=\"c.Equation\">{{c.Equation}}</span></td>\r\n                    </tr>\r\n            </table>\r\n            </div><!--End equations-->\r\n        </div>\r\n        <br clear=\"all\"/>\r\n\r\n        <h4>Parameter Definitions</h4>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-8\">\r\n                <table style=\"border:solid 1px gray\" class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"col-xs-3\">Name</th>\r\n                            <th class=\"col-xs-1\">Abbrev</th>\r\n                            <th class=\"col-xs-8\">Description</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let p of uniqueParameters\">\r\n                            <td>{{p.name}}</td>\r\n                            <td>{{p.code}}</td>\r\n                            <td>{{p.description}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n            </table>\r\n            </div>\r\n        </div>\r\n        <br clear=\"all\"/>\r\n        <h4>Unit Types</h4>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-8\">\r\n                <table style=\"border:solid 1px gray\" class=\"table\">\r\n                    <thead><tr>\r\n                            <th class=\"col-xs-1\">Abbrev</th>\r\n                            <th class=\"col-xs-8\">Unit</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let u of uniqueUnitTypes\">\r\n                            <td>(<span [innerHTML]=\"setSuperScript(u.abbr)\"></span>)</td>\r\n                            <td>{{u.unit}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <br clear=\"all\"/>\r\n        <button type=\"button\" class=\"btn btn-wim-primary hidden-print\" (click)=\"printPage()\">Print Report</button>\r\n        <br/><br/><br/>\r\n    </div><!-- end results back -->\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/mainview/mainview.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainview/mainview.component.ts ***!
  \************************************************/
/*! exports provided: MainviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainviewComponent", function() { return MainviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var ng2_page_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-page-scroll */ "./node_modules/ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_components_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/loader.service */ "./src/app/shared/components/loader.service.ts");








var MainviewComponent = /** @class */ (function () {
    function MainviewComponent(_nssService, _loaderService, _toasterService, _document, _pageScrollService) {
        this._nssService = _nssService;
        this._loaderService = _loaderService;
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
    Object.defineProperty(MainviewComponent.prototype, "selectedStatisticGrp", {
        get: function () {
            return this._nssService.selectedStatGroups;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainviewComponent.prototype, "selectedRegType", {
        get: function () {
            return this._nssService.selectedRegressionTypes;
        },
        enumerable: true,
        configurable: true
    });
    MainviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = 'NSS Report';
        this.timestamp = new Date();
        this.charts = []; // instantiate
        this.hydroChartsArray = []; // instantiate
        this.hydrographs = []; // instantiate
        this.resultsBack = false;
        this.multipleRegRegions = false;
        this.resultsErrorLength = 0; // used for colspan on Errors <th>
        this.selectedRegressionRegion = [];
        // this is based on a behaviorSubject, so it gets an initial notification of [].
        this._nssService.selectedRegRegions.subscribe(function (regRegions) {
            var _a, _b;
            _this.selectedRegressionRegion = regRegions;
            var queryObj = {}; // needed as the object needed in .setLayerDefs()
            var queryString = '';
            // if we have regRegions here, update map, else clear it
            if (regRegions.length > 0) {
                // build query string
                _this.selectedRegressionRegion.forEach(function (rr) {
                    queryString += "GRIDCODE LIKE '%" + rr.code.toLowerCase() + "%' OR ";
                });
            }
            if (queryString != '') {
                queryString = queryString.slice(0, -4); // remove the last ')R'
                queryObj = (_a = {}, _a[_this.activeLayerID] = queryString, _a);
            }
            else {
                // clear the layerDefs14.
                queryObj = (_b = {}, _b[_this.activeLayerID] = '1=1', _b);
            }
        });
        // subscribe to scenarios
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
                // show weight inputs if more than 1 regression region chosen
                _this.showWeights = s.regressionRegions.length > 1 ? true : false;
                if (s.regressionRegions.length > 1)
                    _this.multipleRegRegions = true;
                else
                    _this.multipleRegRegions = false;
                s.regressionRegions.forEach(function (rr, index) {
                    regID = '(RG_Code: ' + rr.code + ')'; // need to show the regID for each limit so they know which one they are out of range on
                    if (rr.results) {
                        if (rr.results[0].errors) {
                            _this.resultsErrorLength = rr.results[0].errors.length;
                        }
                        var eqResult_1 = { name: '', formulas: [] };
                        var equationString_1 = '';
                        if (index < 1) {
                            // first time thru
                            equationString_1 = rr.name !== 'Area-Averaged' ? rr.name + '\r\n' : '';
                        }
                        else {
                            var name_1 = rr.name !== 'Area-Averaged' ? rr.name + '\r\n' : '';
                            equationString_1 = '\r\n' + name_1;
                        }
                        // only care if average result
                        if (rr.id > 0)
                            eqResult_1.name = rr.name;
                        _this.resultsBack = true;
                        rr.results.forEach(function (R) {
                            if (eqResult_1.name != '') {
                                eqResult_1.formulas.push({ Code: R.code, Equation: _this.buildEquation(rr.parameters, R.equation) });
                                equationString_1 += R.code + '= ,' + R.equation + '\r\n';
                            }
                        });
                        if (rr.id > 0)
                            _this.equationResults.push(eqResult_1);
                        _this.appendixEquationsforExport.push(equationString_1); // push each equation string in for use when exporting appendix table later
                        MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'MathJax']); // for the appendix of equations
                    } // end there's results
                    // populate uniqueParameters and uniqueUnitTypes
                    if (rr.id > 0) {
                        rr.parameters.forEach(function (p) {
                            // is this param code already in array list?
                            var pIndex = _this.uniqueParameters
                                .map(function (parame) {
                                return parame.code;
                            })
                                .indexOf(p.code);
                            if (pIndex < 0) {
                                p.limitArray = [];
                                if (p.limits != undefined) {
                                    p.limits.rrID = regID;
                                    p.limitArray.push(p.limits);
                                }
                                _this.uniqueParameters.push(p);
                            }
                            else {
                                // already in here. find the matching one and add it's limits to the LimitArray
                                if (p.limits != undefined)
                                    p.limits.rrID = regID;
                                _this.uniqueParameters[pIndex].limitArray.push(p.limits);
                            }
                            // is this unitType already in the array list?
                            var uIndex = _this.uniqueUnitTypes
                                .map(function (unit) {
                                return unit.abbr;
                            })
                                .indexOf(p.unitType.abbr);
                            if (uIndex < 0) {
                                // not in there yet
                                _this.uniqueUnitTypes.push(p.unitType);
                            }
                        });
                    }
                }); // end s.regressionRegion.forEach
            });
        });
        // subscribe to getToast
        this._nssService.getToast().subscribe(function (t) {
            _this.toast = t;
            _this._toasterService.pop(_this.toast);
        });
        // subscribe to charts
        this._nssService.getChart().subscribe(function (c) {
            if (c !== '') {
                // scroll down to the chart section
                var pageScrollInstance = ng2_page_scroll__WEBPACK_IMPORTED_MODULE_5__["PageScrollInstance"].simpleInstance(_this._document, '#chart');
                _this._pageScrollService.start(pageScrollInstance);
            }
            if (c == 'Hydrograph') {
                var H_areaAveraged_1 = false;
                _this.selectedPlot = 'Hydrograph';
                var hydroG_1;
                hydroG_1 = {
                    recurrence: null,
                    lagTime: null,
                    showExtraSettings: false,
                    axis: 'BottomX',
                    type_BX: 'linear',
                    type_LY: 'linear',
                    lineWidth: 1,
                    lineSymbol: 'circle',
                    majorTic_BX: true,
                    majorGrid_BX: true,
                    minorTic_BX: true,
                    minorGrid_BX: true,
                    majorTic_LY: true,
                    majorGrid_LY: true,
                    minorTic_LY: true,
                    minorGrid_LY: true,
                    colorPickerColor: '#7CB5EC',
                    curveLabel: 'PK25',
                    lineSymbolFillColor: '#7CB5EC',
                    reverse_LY: false,
                    reverse_BX: false,
                    dataLabels: false
                };
                _this.showChartBtn_txt = 'Hide';
                _this.showCharts_btn = true;
                // get array of recurrences from result
                var rec_1;
                _this.scenarios.forEach(function (s) {
                    if (s.regressionRegions.length > 1) {
                        s.regressionRegions.forEach(function (rr) {
                            if (rr.name == 'Area-Averaged') {
                                H_areaAveraged_1 = true; // area averaged, add title to chart stating
                                hydroG_1.curveLabel = 'Area-Averaged';
                                _this.hChartXAxisValues = [];
                                rr.results.forEach(function (R) {
                                    _this.hChartXAxisValues.push(R.code);
                                });
                                // use constant array to populate chart [][]
                                rec_1 = rr.results.filter(function (r) { return r.code == _this.hChartXAxisValues[0]; })[0].value;
                            }
                        });
                    }
                    else {
                        s.regressionRegions.forEach(function (rr) {
                            _this.hChartXAxisValues = [];
                            rr.results.forEach(function (R) {
                                _this.hChartXAxisValues.push(R.code);
                            });
                            // use constant array to populate chart [][]
                            rec_1 = rr.results.filter(function (r) { return r.code == _this.hChartXAxisValues[0]; })[0].value;
                        });
                    }
                }); // end foreach scenario
                hydroG_1.recurrence = _this.hChartXAxisValues[0]; //default to first one;
                hydroG_1.lagTime = 1; // default value to change later
                hydroG_1.title_BX =
                    'Time (hours)\nHydrograph for ' + hydroG_1.lagTime + '-yr interval\nNOTE: May not represent actual hydrograph';
                hydroG_1.title_LY = 'Discharge (cubic meters per second)';
                // http://api.highcharts.com/highcharts   , panning: true, panKey: 'shift'
                _this.hChartOptions = {
                    exporting: {
                        chartOptions: {
                            // specific options for the exported image
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
                    series: [
                        {
                            data: _this.DIMLESS_ARRAY.map(function (p) {
                                return [p[0] * 1, _this.sigFigures(p[1] * rec_1)];
                            }),
                            name: H_areaAveraged_1 ? 'PK25 (Area-weighted average)' : 'PK25',
                            states: {
                                hover: { enabled: false } // stops the line from getting thicker when mouse onto the chart
                            }
                        }
                    ],
                    tooltip: {
                        formatter: function () {
                            var s = '<b>(' + this.x + ', ' + this.y + ')</b>';
                            return s;
                        }
                    },
                    xAxis: {
                        title: {
                            text: 'Time (hours)<br/>Hydrograph for ' +
                                hydroG_1.lagTime +
                                '-yr interval<br/>NOTE: May not represent actual hydrograph'
                            //    style: { fontWeight: 'bold'}
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
            else if (c == 'Frequency Plot') {
                if (_this.fChartValues == undefined) {
                    var F_areaAveraged_1 = false;
                    _this.fChartOptions = {};
                    // only come in here if there isn't already a frequency plot
                    _this.frequencyPlotChart = {
                        Faxis: 'BottomX',
                        type_BX: 'returnPeriod',
                        type_LY: 'returnPeriod',
                        title_LY: 'Peak Discharge, In cubic meters per second',
                        title_BX: 'Recurrence Interval, in years\nFlood Frequency Plot',
                        lineWidth: 1,
                        lineSymbol: 'circle',
                        majorTic_BX: true,
                        majorGrid_BX: true,
                        minorTic_BX: true,
                        minorGrid_BX: true,
                        majorTic_LY: true,
                        majorGrid_LY: true,
                        minorTic_LY: false,
                        minorGrid_LY: false,
                        colorPickerColor: '#7CB5EC',
                        curveLabel: 'PK25',
                        lineSymbolFillColor: '#7CB5EC',
                        reverse_LY: false,
                        reverse_BX: false,
                        dataLabels: false
                    };
                    // get array of recurrences from result
                    var freqDataArray_1;
                    freqDataArray_1 = [];
                    _this.scenarios.forEach(function (s) {
                        if (s.regressionRegions.length > 1) {
                            s.regressionRegions.forEach(function (rr) {
                                if (rr.name == 'Area-Averaged') {
                                    F_areaAveraged_1 = true; // area averaged, add title to chart stating
                                    _this.frequencyPlotChart.curveLabel = 'PK25 (Area-weighted average)';
                                    rr.results.forEach(function (R) {
                                        var x = +R.name.substring(0, R.name.indexOf(' '));
                                        freqDataArray_1.push([x, _this.sigFigures(R.value)]);
                                    });
                                }
                            });
                        }
                        else {
                            s.regressionRegions.forEach(function (rr) {
                                rr.results.forEach(function (R) {
                                    var x = +R.name.substring(0, R.name.indexOf(' '));
                                    freqDataArray_1.push([x, _this.sigFigures(R.value)]);
                                });
                            });
                        }
                    }); // end foreach scenario
                    console.log('freq (start): ' + freqDataArray_1);
                    _this.fChartValues = freqDataArray_1;
                    _this.showChartBtn_txt = 'Hide';
                    _this.showCharts_btn = true;
                    _this.fChartOptions = {
                        exporting: {
                            chartOptions: {
                                // specific options for the exported image
                                plotOptions: {
                                    series: {
                                        dataLabels: {
                                            enabled: true
                                        },
                                        name: F_areaAveraged_1 ? 'PK25 (Area-weighted average)' : 'PK25',
                                        states: {
                                            hover: { enabled: false } // stops the line from getting thicker when mouse onto the chart
                                        }
                                    }
                                }
                            },
                            fallbackToExportServer: false
                        },
                        chart: { type: 'line', zoomType: 'xy' },
                        title: { text: '' },
                        series: [
                            {
                                data: _this.fChartValues,
                                marker: { enabled: true },
                                name: F_areaAveraged_1 ? 'PK25 (Area-weighted average)' : 'PK25',
                                states: {
                                    hover: { enabled: false } // stops the line from getting thicker when mouse onto the chart
                                }
                            }
                        ],
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
                } // if this.fchartvalues == undefined (only go in there to make a new one not overwrite one)
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
    // round all parameters and statistic values to 3 significant figures
    MainviewComponent.prototype.sigFigures = function (n) {
        if (n > 0) {
            var mult = Math.pow(10, 3 - Math.floor(Math.log(n) / Math.LN10) - 1);
            return Math.round(n * mult) / mult;
        }
        else
            return n;
    };
    // add backticks around parameter code to escape in equation
    MainviewComponent.prototype.buildEquation = function (p, equation) {
        var fullEquation = '';
        var arrayOfparameterValues = [];
        fullEquation = '`' + equation + '`';
        return fullEquation;
    };
    // use tableString and tName to export a table to the browser
    MainviewComponent.prototype.triggerExportTable = function (tableString, tName) {
        var csvData = tableString;
        var a = document.createElement('a');
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = tName.replace(/ /g, '_') + '.csv';
        a.click();
    };
    // export inputs table
    MainviewComponent.prototype.exportInputTable = function (tableIndex) {
        var inputTableRows = this.inputTable._results[tableIndex].element.nativeElement.rows;
        var vals = '';
        var str = '';
        for (var r = 0; r < inputTableRows.length; r++) {
            vals = '';
            for (var t = 0; t < inputTableRows[r].children.length; t++) {
                var child = inputTableRows[r].children[t];
                vals += child.innerText + ',';
                // if last one in this row
                if (t == inputTableRows[r].children.length - 1 && child.localName == 'td') {
                    vals = vals.slice(0, -1);
                    str += vals + '\r\n';
                }
            }
        }
        str += '\r\n';
        // go get results table and tack it on to this before exporting
        this.exportTable(tableIndex, str);
    };
    // export resultTable
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
                        tableName = inputTableStr.indexOf('Area-Averaged') == 0 ? 'Area_Averaged' : child.innerText;
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
        this.triggerExportTable(inputTableStr, tableName);
    };
    MainviewComponent.prototype.exportAppendix = function () {
        var tableName = 'Appendix';
        // parameter table
        var paramTable = this.uniqueParameters;
        var p_str = '';
        p_str += '\r\n' + 'Parameter Definitions' + '\r\n';
        p_str += 'Name,Abbrev,Description' + '\r\n';
        for (var p = 0; p < paramTable.length; p++) {
            p_str += paramTable[p].name + ',' + paramTable[p].code + ',' + paramTable[p].description + '\r\n';
        }
        p_str += '\r\n';
        // unit types table
        var unitTable = this.uniqueUnitTypes;
        var u_str = '';
        u_str += '\r\n' + 'Unit Types' + '\r\n';
        u_str += 'Abbrev,Unit' + '\r\n';
        for (var u = 0; u < unitTable.length; u++) {
            u_str += '(' + unitTable[u].abbr + '),' + unitTable[u].unit + '\r\n';
        }
        u_str += '\r\n';
        var equa_str = this.appendixEquationsforExport.join(',');
        var allTablesJoinedString = equa_str + p_str + u_str;
        this.triggerExportTable(allTablesJoinedString, tableName);
        // this.triggerExportTable(this.appendixEquationsforExport.join(','), tableName);
    };
    // onBlur of Value, compare to min/max and show warning
    MainviewComponent.prototype.compareValue = function (value) {
        // is there a value or just click in and then out (would be "")
        if (value.value) {
            // make sure all parameters of this CODE has this VALUE assigned to it in the real scenario Object
            this.scenarios.forEach(function (s) {
                s.regressionRegions.forEach(function (rr) {
                    rr.parameters.forEach(function (p) {
                        if (p.code == value.code)
                            p.value = value.value;
                    });
                });
            }); // end foreach scenario
            // is value outside of range (if ther is limit range)
            if (value.limits !== undefined) {
                var limitFlag_1 = false;
                value.limitArray.forEach(function (x) {
                    if (value.value > x.max || value.value < x.min) {
                        limitFlag_1 = true;
                        x.outOfRange = true;
                        value.missingVal = false; // remove the missingVal flag (since there is something in here)
                    }
                    else {
                        // value is within proper range (no warning, has a value)
                        x.outOfRange = false;
                        value.missingVal = false; // field is not empty
                    }
                });
                // need to flag the outter limit OutOfRange outside of the LimitArray loop
                if (limitFlag_1)
                    value.outOfRange = true;
                // flag it so
                else
                    value.outOfRange = false;
            } // end limits are not undefined
            else {
                value.outOfRange = false; // within range
                value.limitArray.forEach(function (l) {
                    l.outOfRange = false;
                });
                value.missingVal = false; // field is not empty
            }
        } // end value.Value (has value)
        else {
            value.limitArray.forEach(function (l) {
                l.outOfRange = false;
            });
            value.outOfRange = false; // no need to check range
            value.missingVal = false; // field is empty, but we don't care until they hit submit on sidebar
        }
    };
    // toggle parameter description
    MainviewComponent.prototype.showDescription = function (p, paramIndex) {
        //set this parameters seeDescription property to true/false
        this.uniqueParameters[paramIndex].seeDescription = !this.uniqueParameters[paramIndex].seeDescription;
    };
    // when chart loads, store an instance of the highchart to access functions
    MainviewComponent.prototype.saveInstance = function (chartInst) {
        this.charts.push(chartInst);
    };
    /////////////////////////////////////// start HYDRO STUFF ///////////////////////////////////////////////////
    // clicked Bottom x & type == update chart HYDRO
    MainviewComponent.prototype.setXaxisType = function (i, newType) {
        // converting to logarithmic gets ugly (line draws partially outside of plot area) due to the minorTickInterval being set to auto
        if (newType == 'logarithmic') {
            // this makes minor ticks and grid lines disappear..turn them off and uncheck boxes
            this.charts[i].xAxis[0].update({ tickInterval: 'auto', minorGridLineWidth: 0, minorTickWidth: 0 });
            this.hydrographs[i].minorGrid_BX = false;
            this.hydrographs[i].minorTic_BX = false;
        }
        else {
            this.charts[i].xAxis[0].update({ tickInterval: null });
        }
        this.charts[i].xAxis[0].update({ type: newType });
    };
    // clicked Left y & type == update chart HYDRO
    MainviewComponent.prototype.setYaxisType = function (i, newType) {
        // converting to logarithmic gets ugly (line draws partially outside of plot area) due to the minorTickInterval being set to auto
        if (newType == 'logarithmic') {
            // this makes minor ticks and grid lines disappear..turn them off and uncheck boxes
            this.charts[i].yAxis[0].update({ minorGridLineWidth: 0, minorTickWidth: 0 }); //tickInterval:'auto'
            this.hydrographs[i].minorGrid_LY = false;
            this.hydrographs[i].minorTic_LY = false;
        }
        else {
            this.charts[i].yAxis[0].update({ tickInterval: null });
        }
        this.charts[i].yAxis[0].update({ type: newType });
    };
    // update title on x axis as they type HYDRO
    MainviewComponent.prototype.updateBXtitle = function (i) {
        this.hydroChartsArray[i].xAxis.title.text = this.hydrographs[i].title_BX.replace(/\n/g, '<br/>'); //bottom title
        this.charts[i].xAxis[0].setTitle({ text: this.hydroChartsArray[i].xAxis.title.text }); //title of xAxis
    };
    // update title on y axis as they type HYDRO
    MainviewComponent.prototype.updateLYtitle = function (i) {
        this.hydroChartsArray[i].yAxis.title.text = this.hydrographs[i].title_LY.replace(/\n/g, '<br/>');
        this.charts[i].yAxis[0].setTitle({ text: this.hydroChartsArray[i].yAxis.title.text }); //title of yAxis
    };
    // update ticks or grids on chart (0/1) HYDRO
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
    // update ticks or grids on chart (0/1) HYDRO
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
    // reverse the data HYDRO
    MainviewComponent.prototype.setReverseData = function (i, which, value) {
        if (which == 'bx') {
            this.charts[i].xAxis[0].update({ reversed: value });
        }
        else {
            this.charts[i].yAxis[0].update({ reversed: value });
        }
    };
    // change line color HYDRO
    MainviewComponent.prototype.changeLineColor = function (i, c) {
        this.charts[i].series[0].update({ color: c });
        this.hydrographs[i].colorPickerColor = c;
    };
    // change line width HYDRO
    MainviewComponent.prototype.setLineWidth = function (i) {
        this.charts[i].series[0].update({ lineWidth: this.hydrographs[i].lineWidth });
    };
    // change line symbol fill color HYDRO
    MainviewComponent.prototype.changeLineSymbolColor = function (i, c) {
        this.charts[i].series[0].update({ marker: { fillColor: c } });
        this.hydrographs[i].lineSymbolFillColor = c;
    };
    // change point symbol HYDRO
    MainviewComponent.prototype.setLineSymbol = function (i, e) {
        this.charts[i].series[0].update({ marker: { symbol: this.hydrographs[i].lineSymbol } });
    };
    // change curve label HYDRO
    MainviewComponent.prototype.updateCurveLabel = function (i) {
        this.charts[0].series[0].update({ name: this.hydrographs[i].curveLabel });
    };
    // show/hide data labels  HYDRO
    MainviewComponent.prototype.updateDataLabels = function (i, value) {
        this.charts[i].series[0].update({
            dataLabels: {
                enabled: value,
                formatter: function () {
                    return '(' + this.x + ', ' + this.y + ')';
                }
            }
        });
    };
    // changed values, refresh the hydrograph with new data HYDRO
    MainviewComponent.prototype.refreshHydrograph = function (i, formValues) {
        var _this = this;
        // top title (updated with which recurrence interval they choose)
        this.hydroChartsArray[i].title.text = 'Hydrograph (Recurrence Interval: ' + this.hydrographs[i].recurrence + ')';
        // update the xAxis title
        this.hydroChartsArray[i].xAxis.title.text =
            'Time (hours)<br/>Hydrograph for ' + this.hydrographs[i].lagTime + '-yr interval<br/>NOTE: May not represent actual hydrograph';
        this.hydrographs[i].title_BX =
            'Time (hours)\nHydrograph for ' + this.hydrographs[i].lagTime + '-yr interval\nNOTE: May not represent actual hydrograph';
        this.charts[i].xAxis[0].setTitle({ text: this.hydroChartsArray[i].xAxis.title.text }); //title of xAxis
        this.charts[i].setTitle({ text: this.hydroChartsArray[i].title.text }); //title of chart
        // get the corresponding results value for the recurrence chosen to update the chart data
        var recValue;
        this.scenarios.forEach(function (s) {
            s.regressionRegions.forEach(function (rr) {
                if (rr.results)
                    recValue = rr.results.filter(function (r) { return r.code == _this.hydrographs[i].recurrence; })[0].value;
            });
        });
        this.charts[i].series[0].setData(this.DIMLESS_ARRAY.map(function (p) {
            return [p[0] * _this.hydrographs[i].lagTime, p[1] * recValue];
        })); // update data
        this.hydrographs[i].showExtraSettings = false; // just close the extra settings part
    };
    // show/hide additional user settings options for the chart (axis, title, etc) HYDRO
    MainviewComponent.prototype.showHideAdditionalChartSettings = function (i) {
        this.hydrographs[i].showExtraSettings = !this.hydrographs[i].showExtraSettings;
    };
    // want to remove a hydrochart HYDRO
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
    // clicked Bottom x & type == update chart FREQUENCY
    MainviewComponent.prototype.setFreqXaxisType = function (newType) {
        var freqDataArray;
        freqDataArray = [];
        // converting 'percent', 'fraction', or 'returnPeriod' (default/onload is returnPeriod)
        if (newType == 'percent') {
            this.scenarios.forEach(function (s) {
                s.regressionRegions.forEach(function (rr) {
                    if (rr.results) {
                        rr.results.forEach(function (R) {
                            var x = +R.name.substring(0, R.name.indexOf(' '));
                            freqDataArray.push([(1 / x) * 100, R.value]);
                        });
                    }
                });
            }); // end foreach scenario
            this.frequencyPlotChart.reverse_BX = true;
            this.freqChart.xAxis[0].update({
                reversed: true,
                labels: {
                    formatter: function () {
                        return highcharts__WEBPACK_IMPORTED_MODULE_6__["numberFormat"](this.value, 0, ',') + '%';
                    }
                }
            });
        }
        else if (newType == 'fraction') {
            // divide 1 into probability (pk500)
            this.scenarios.forEach(function (s) {
                s.regressionRegions.forEach(function (rr) {
                    if (rr.results) {
                        rr.results.forEach(function (R) {
                            var x = +R.name.substring(0, R.name.indexOf(' '));
                            freqDataArray.push([1 / x, R.value]);
                        });
                    }
                });
            }); // end foreach scenario
            this.frequencyPlotChart.reverse_BX = true;
            this.freqChart.xAxis[0].update({
                reversed: true,
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            });
        }
        else {
            // returnPeriod
            this.scenarios.forEach(function (s) {
                s.regressionRegions.forEach(function (rr) {
                    if (rr.results) {
                        rr.results.forEach(function (R) {
                            var x = +R.name.substring(0, R.name.indexOf(' '));
                            freqDataArray.push([x, R.value]);
                        });
                    }
                });
            }); // end foreach scenario
            this.frequencyPlotChart.reverse_BX = false;
            this.freqChart.xAxis[0].update({
                reversed: false,
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            });
            console.log('return period: ' + freqDataArray);
        }
        this.freqChart.series[0].setData(freqDataArray);
    };
    // update title on x axis as they type FREQUENCY
    MainviewComponent.prototype.updateFreqBXtitle = function () {
        this.fChartOptions.xAxis.title.text = this.frequencyPlotChart.title_BX.replace(/\n/g, '<br/>'); //bottom title
        this.freqChart.xAxis[0].setTitle({ text: this.fChartOptions.xAxis.title.text }); //title of xAxis
    };
    // update title on y axis as they type FREQUENCY
    MainviewComponent.prototype.updateFreqLYtitle = function () {
        this.fChartOptions.yAxis.title.text = this.frequencyPlotChart.title_LY.replace(/\n/g, '<br/>');
        this.freqChart.yAxis[0].setTitle({ text: this.fChartOptions.yAxis.title.text }); //title of yAxis
    };
    // update ticks or grids on chart (0/1) FREQUENCY
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
    // update ticks or grids on chart (0/1) FREQUENCY
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
    // reverse the data FREQUENCY
    MainviewComponent.prototype.setFreqReverseData = function (which, value) {
        if (which == 'bx') {
            this.freqChart.xAxis[0].update({ reversed: value });
        }
        else {
            this.freqChart.yAxis[0].update({ reversed: value });
        }
    };
    // change line color FREQUENCY
    MainviewComponent.prototype.changeFreqLineColor = function (c) {
        this.freqChart.series[0].update({ color: c });
        this.frequencyPlotChart.colorPickerColor = c;
    };
    // change line width FREQUENCY
    MainviewComponent.prototype.setFreqLineWidth = function () {
        this.freqChart.series[0].update({ lineWidth: this.frequencyPlotChart.lineWidth });
    };
    // change line symbol fill color FREQUENCY
    MainviewComponent.prototype.changeFreqLineSymbolColor = function (c) {
        this.freqChart.series[0].update({ marker: { fillColor: c } });
        this.frequencyPlotChart.lineSymbolFillColor = c;
    };
    // change point symbol FREQUENCY
    MainviewComponent.prototype.setFreqLineSymbol = function (e) {
        this.freqChart.series[0].update({ marker: { symbol: this.frequencyPlotChart.lineSymbol } });
    };
    // change curve label FREQUENCY
    MainviewComponent.prototype.updateFreqCurveLabel = function () {
        this.freqChart.series[0].update({ name: this.frequencyPlotChart.curveLabel });
    };
    // show/hide data labels  FREQUENCY
    MainviewComponent.prototype.updateFreqDataLabels = function (value) {
        this.freqChart.series[0].update({
            dataLabels: {
                enabled: value,
                formatter: function () {
                    return '(' + this.x + 'yr, ' + this.y + ')';
                }
            }
        });
    };
    // show/hid additional user settings options for the chart Frequency
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
    // toggle charts
    MainviewComponent.prototype.showHideCharts = function () {
        // if showCharts_btn is true == show the charts and showChartBtn_txt says "Hide"
        // if showCharts_btn is false == hide the charts and showChartBtn_txt says "Show"
        this.showCharts_btn = !this.showCharts_btn;
        if (this.showCharts_btn)
            this.showChartBtn_txt = 'Hide';
        else
            this.showChartBtn_txt = 'Show';
    };
    // want to edit the scenario. remove Result
    MainviewComponent.prototype.editScenario = function () {
        var _this = this;
        this.scenarios.forEach(function (s) {
            var areaWeighed = s.regressionRegions.map(function (r) {
                return r.id;
            }).indexOf(0);
            if (areaWeighed > -1)
                s.regressionRegions.splice(areaWeighed, 1); //remove the area weighted regRegion
            s.regressionRegions.forEach(function (r) {
                _this.resultsBack = false;
                delete r.results;
            });
        });
        this._nssService.setScenarios(this.scenarios);
    };
    // number only allowed in Value
    MainviewComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9\+\-\.\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    // need superscript tag in unittype (using <span [innerHTML]="setSuperScript(p.UnitType.Abbr)"> converts tags to actual html)
    MainviewComponent.prototype.setSuperScript = function (unit) {
        var newUnitWithSupTag = '';
        var indexOfSup = unit.indexOf('^');
        if (indexOfSup > -1)
            newUnitWithSupTag = unit.substring(0, indexOfSup) + '<sup>' + unit.substring(indexOfSup + 1) + '</sup>';
        else
            newUnitWithSupTag = unit;
        return newUnitWithSupTag;
    };
    // print pdf
    MainviewComponent.prototype.printPage = function () {
        var printContents, popupWin;
        printContents = document.getElementById('printArea').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title></title>\n          <style>                   \n            .hidden-print {\n                display: none !important;\n            }\n            #print-content * {\n                visibility: visible;\n            }            \n            h3 {\n                text-align: center;\n            }\n            th, td {\n                margin-top:-8px;\n                padding-top:8px;\n                page-break-inside:avoid;\n            }\n          </style>\n          <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" \n            integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('inputsTable', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainviewComponent.prototype, "inputTable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('resultsTable', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainviewComponent.prototype, "resultTable", void 0);
    MainviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wim-mainview',
            template: __webpack_require__(/*! ./mainview.component.html */ "./src/app/mainview/mainview.component.html"),
            styles: [__webpack_require__(/*! ./mainview.component.css */ "./src/app/mainview/mainview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__["NSSService"],
            _shared_components_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], Object, ng2_page_scroll__WEBPACK_IMPORTED_MODULE_5__["PageScrollService"]])
    ], MainviewComponent);
    return MainviewComponent;
}()); // end component



/***/ }),

/***/ "./src/app/mainview/mathjax/mathjax.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/mainview/mathjax/mathjax.directive.ts ***!
  \*******************************************************/
/*! exports provided: MathjaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathjaxDirective", function() { return MathjaxDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MathjaxDirective = /** @class */ (function () {
    function MathjaxDirective(el) {
        this.el = el;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.el.nativeElement]);
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('MathJax'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MathjaxDirective.prototype, "fractionString", void 0);
    MathjaxDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[MathJax]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MathjaxDirective);
    return MathjaxDirective;
}());



/***/ }),

/***/ "./src/app/mainview/unique.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/mainview/unique.pipe.ts ***!
  \*****************************************/
/*! exports provided: UniquePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniquePipe", function() { return UniquePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var UniquePipe = /** @class */ (function () {
    function UniquePipe() {
    }
    UniquePipe.prototype.transform = function (value) {
        if (value !== undefined && value !== null) {
            return lodash__WEBPACK_IMPORTED_MODULE_2__["uniqBy"](value, 'name');
        }
        return value;
    };
    UniquePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'unique',
            pure: false
        })
    ], UniquePipe);
    return UniquePipe;
}());



/***/ }),

/***/ "./src/app/settings/categories/citations/citations.component.html":
/*!************************************************************************!*\
  !*** ./src/app/settings/categories/citations/citations.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <legend style=\"margin-bottom:25px;margin-top:0;\">Citations</legend>\r\n</div>\r\n<button [hidden]=\"loggedInRole !== 'Administrator'\" type=\"button\" class=\"btn-blue\" (click)=\"showNewCitationForm()\"><i class=\"fa fa-plus\"\r\n    aria-hidden=\"tru\"></i> Add New Citation</button>\r\n\r\n<form #CitationForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"citations\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"col-xs-1\"></th>\r\n                    <th class=\"col-xs-4\">Title</th>\r\n                    <th>Author</th>\r\n                    <th class=\"col-xs-1\">Citation URL</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let v of citations; let i = index\">\r\n                    <td>\r\n                        <div class=\"data-controls\">\r\n                            <i *ngIf=\"!v.isEditing\" title=\"Edit Citation\" (click)=\"EditRowClicked(i)\" class=\"fa fa-pencil\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>&nbsp;\r\n                            <i *ngIf=\"v.isEditing\" title=\"Save Citation\" (click)=\"saveCitation(v,i)\" class=\"fa fa-floppy-o\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"v.isEditing\" title=\"Cancel Edit\" (click)=\"CancelEditRowClicked(i)\" class=\"fa fa-history\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!v.isEditing\">{{ v.title }}</span>\r\n                        <span *ngIf=\"v.isEditing\"><textarea rows=\"3\" [(ngModel)]=\"v.title\" name=\"title\"></textarea></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!v.isEditing\">{{ v.author }}</span>\r\n                        <span *ngIf=\"v.isEditing\"><input type=\"text\" name=\"author\" [(ngModel)]=\"v.author\" required></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!v.isEditing\">{{ v.citationURL }}</span>\r\n                        <span *ngIf=\"v.isEditing\"><input type=\"text\" name=\"citationURL\" [(ngModel)]=\"v.citationURL\" required></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>\r\n<br />\r\n\r\n<!-- new citation form -->\r\n<ng-template #add let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">New Citation </h4>\r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <h3 class=\"modal-title\">New Citation</h3>\r\n        <form [formGroup]=\"newCitForm\">\r\n            <!-- Title -->\r\n            <div class=\"form-group required\">\r\n                <label for=\"title\">Title:</label>\r\n                <textarea class=\"form-control\" rows=\"3\" placeholder=\"\" formControlName=\"title\"></textarea>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newCitForm.get('title').valid && newCitForm.get('title').dirty\">Author\r\n                        is required</div>\r\n            </div>\r\n            <!-- Author* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newCitForm.get('author').valid && newCitForm.get('author').dirty}\">\r\n                <label class=\"req\" for=\"name\">author:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"author\" required>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newCitForm.get('author').valid && newCitForm.get('author').dirty\">Author\r\n                    is required</div>\r\n            </div>\r\n\r\n            <!-- Short Name -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newCitForm.get('citationURL').valid && newCitForm.get('citationURL').dirty}\">\r\n                <label class=\"req\" for=\"citationURL\">Citation URL:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"citationURL\">\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newCitForm.get('citationURL').valid && newCitForm.get('citationURL').dirty\">URL\r\n                    is required</div>\r\n            </div>\r\n\r\n            <!-- Region -->\r\n            <div class=\"form-group\" [ngClass]=\"{'form-invalid': !newCitForm.get('region').valid && newCitForm.get('region').dirty}\">\r\n                    <label class=\"req\" for=\"region\">Region (optional):</label>\r\n                    <select class=\"form-control\" formControlName=\"region\">\r\n                        <option *ngFor=\"let r of regions\" [value]=\"r.id\">{{r.name}}</option>\r\n                    </select>\r\n                </div>\r\n\r\n            <!-- Reg Region* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newCitForm.get('regRegion').valid && newCitForm.get('regRegion').dirty}\">\r\n                <label class=\"req\" for=\"regRegion\">Regression Region:</label>\r\n                <select class=\"form-control\" formControlName=\"regRegion\">\r\n                    <option *ngFor=\"let rr of regressionRegions\" [value]=\"rr.id\">{{rr.name}}</option>\r\n                </select>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newCitForm.get('regRegion').valid && newCitForm.get('regRegion').dirty\">Role ID\r\n                    is required</div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"d('closed')\" class=\"btn-black\">Cancel</button>\r\n            <button type=\"button\" (click)=\"createNewCitation()\" [disabled]=\"!newCitForm.valid\" class=\"btn-blue\">Create</button>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/settings/categories/citations/citations.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/settings/categories/citations/citations.component.ts ***!
  \**********************************************************************/
/*! exports provided: CitationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitationsComponent", function() { return CitationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var app_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/settings/settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page








var CitationsComponent = /** @class */ (function () {
    function CitationsComponent(_nssService, _settingsservice, _route, _fb, _modalService, router, _configService, _toasterService) {
        var _this = this;
        this._nssService = _nssService;
        this._settingsservice = _settingsservice;
        this._route = _route;
        this._fb = _fb;
        this._modalService = _modalService;
        this.router = router;
        this._configService = _configService;
        this._toasterService = _toasterService;
        this.newCitForm = _fb.group({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            'author': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            'citationURL': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            'regRegion': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            'region': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null)
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }
    CitationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.citationURL).subscribe(function (res) {
            _this.citations = res;
        });
        this._settingsservice.getEntities(this.configSettings.regionURL).subscribe(function (res) {
            _this.regions = res;
        });
        this._settingsservice.getEntities(this.configSettings.regRegionURL).subscribe(function (res) {
            _this.regressionRegions = res;
        });
        this._settingsservice.regRegions().subscribe(function (res) {
            _this.regressionRegions = res;
        });
        this._settingsservice.citations().subscribe(function (res) {
            _this.citations = res;
        });
        this.newCitForm.valueChanges.subscribe(function (form) {
            if (form.region) {
                _this.onRegSelect(form.region);
            }
            ;
        });
    };
    CitationsComponent.prototype.onRegSelect = function (i) {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.regionURL + i + '/' + this.configSettings.regRegionURL)
            .subscribe(function (res) {
            _this.regressionRegions = res;
        });
    };
    CitationsComponent.prototype.showNewCitationForm = function () {
        var _this = this;
        this.newCitForm.controls['title'].setValue(null);
        this.newCitForm.controls['author'].setValue(null);
        this.newCitForm.controls['citationURL'].setValue(null);
        this.newCitForm.controls['regRegion'].setValue(null);
        this.showNewCitForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.CloseResult = "Closed with: " + result;
            if (_this.CloseResult) {
                _this.cancelCreateCitation();
            }
        }, function (reason) {
            _this.CloseResult = "Dismissed " + _this.getDismissReason(reason);
            if (_this.CloseResult) {
                _this.cancelCreateCitation();
            }
        });
    };
    CitationsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    CitationsComponent.prototype.cancelCreateCitation = function () {
        this.showNewCitForm = false;
        this.newCitForm.reset();
    };
    CitationsComponent.prototype.createNewCitation = function () {
        var _this = this;
        var regRegion = this.newCitForm.value.regRegion;
        var newItem = this.newCitForm.value;
        delete this.newCitForm.value.regRegion;
        delete this.newCitForm.value.region;
        this._settingsservice.postEntity(newItem, this.configSettings.regRegionURL + '/' + regRegion + '/' +
            this.configSettings.citationURL)
            .subscribe(function (response) {
            response.isEditing = false;
            _this.citations.push(response);
            _this._settingsservice.setCitations(_this.citations);
            _this._toasterService.pop('success', 'Success', 'Citation was created');
            _this.cancelCreateCitation();
        }, function (error) {
            _this._toasterService.pop('error', 'Error creating Citation', error._body.message || error.statusText);
        });
    };
    CitationsComponent.prototype.EditRowClicked = function (i) {
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.citations[i]); // make a copy in case they cancel
        this.citations[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    };
    CitationsComponent.prototype.CancelEditRowClicked = function (i) {
        this.citations[i] = Object.assign({}, this.tempData);
        this.citations[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.citationForm.form.dirty) {
            this.citationForm.reset();
        }
    };
    // edits made, save clicked
    CitationsComponent.prototype.saveCitation = function (u, i) {
        var _this = this;
        if (u.title === undefined || u.author === undefined || u.citationURL === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Citation', 'Title, Author and Citation URL are required.');
        }
        else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.citationURL).subscribe(function (resp) {
                _this._toasterService.pop('success', 'Success', 'Citation was updated');
                u.isEditing = false;
                _this.citations[i] = u;
                _this._settingsservice.setCitations(_this.citations);
                _this.rowBeingEdited = -1;
                _this.isEditing = false; // set to true so create new is disabled
                if (_this.citationForm.form.dirty) {
                    _this.citationForm.reset();
                }
            }, function (error) {
                _this._toasterService.pop('error', 'Error updating Citation', error._body.message || error.statusText);
            });
        }
    };
    // delete citation
    CitationsComponent.prototype.deleteCitation = function (deleteID) {
        var _this = this;
        var check = confirm('Are you sure you want to delete this Citation?');
        if (confirm) {
            // delete it
            var index_1 = this.citations.findIndex(function (item) { return item.id === deleteID; });
            this._settingsservice.deleteEntity(deleteID, this.configSettings.citationURL)
                .subscribe(function (result) {
                _this._toasterService.pop('success', 'Success', 'Citation was deleted');
                _this.citations.splice(index_1, 1);
                _this._settingsservice.setCitations(_this.citations); // update service
            }, function (error) {
                _this._toasterService.pop('error', 'Error deleting Citation', error._body.message || error.statusText);
            });
        }
    };
    CitationsComponent.prototype.getLoggedInRole = function () {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    };
    CitationsComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CitationsComponent.prototype, "addRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CitationForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CitationsComponent.prototype, "citationForm", void 0);
    CitationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./citations.component.html */ "./src/app/settings/categories/citations/citations.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["NSSService"], app_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"],
            angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], CitationsComponent);
    return CitationsComponent;
}());



/***/ }),

/***/ "./src/app/settings/categories/errors/errors.component.html":
/*!******************************************************************!*\
  !*** ./src/app/settings/categories/errors/errors.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <legend style=\"margin-bottom:25px;margin-top:0;\">Errors</legend>\r\n</div>\r\n<button [hidden]=\"loggedInRole !== 'Administrator'\" type=\"button\" class=\"btn-blue\" (click)=\"showNewErrorForm()\"><i class=\"fa fa-plus\"\r\n    aria-hidden=\"tru\"></i> Add New Error</button>\r\n\r\n<form #ErrorForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"errors\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"col-xs-1\"></th>\r\n                    <th class=\"col-xs-4\">Name</th>\r\n                    <th>Code</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let v of errors; let i = index\">\r\n                    <td>\r\n                        <div class=\"data-controls\">\r\n                            <i *ngIf=\"!v.isEditing\" title=\"Edit Error\" (click)=\"EditRowClicked(i)\" class=\"fa fa-pencil\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>&nbsp;\r\n                            <i *ngIf=\"!v.isEditing\" title=\"Delete Error\" (click)=\"deleteError(v.id)\" class=\"fa fa-times\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"v.isEditing\" title=\"Save Error\" (click)=\"saveError(v,i)\" class=\"fa fa-floppy-o\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"v.isEditing\" title=\"Cancel Edit\" (click)=\"CancelEditRowClicked(i)\" class=\"fa fa-history\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!v.isEditing\">{{ v.name }}</span>\r\n                        <span *ngIf=\"v.isEditing\"><textarea rows=\"3\" [(ngModel)]=\"v.name\" name=\"name\"></textarea></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!v.isEditing\">{{ v.code }}</span>\r\n                        <span *ngIf=\"v.isEditing\"><input type=\"text\" name=\"code\" [(ngModel)]=\"v.code\" required></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>\r\n<br />\r\n\r\n<!-- new error form -->\r\n<ng-template #add let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">New Error </h4>\r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <h3 class=\"modal-title\">New Error</h3>\r\n        <form [formGroup]=\"newErrForm\">\r\n            <!-- Name -->\r\n            <div class=\"form-group required\">\r\n                <label for=\"name\">Name:</label>\r\n                <textarea class=\"form-control\" rows=\"3\" placeholder=\"\" formControlName=\"name\"></textarea>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newErrForm.get('name').valid && newErrForm.get('name').dirty\">Author\r\n                        is required</div>\r\n            </div>\r\n            <!-- Code* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newErrForm.get('code').valid && newErrForm.get('code').dirty}\">\r\n                <label class=\"req\" for=\"name\">Code:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"code\" required>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newErrForm.get('code').valid && newErrForm.get('code').dirty\">Author\r\n                    is required</div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"d('closed')\" class=\"btn-black\">Cancel</button>\r\n            <button type=\"button\" (click)=\"createNewError()\" [disabled]=\"!newErrForm.valid\" class=\"btn-blue\">Create</button>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/settings/categories/errors/errors.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/settings/categories/errors/errors.component.ts ***!
  \****************************************************************/
/*! exports provided: ErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsComponent", function() { return ErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var app_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/settings/settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page








var ErrorsComponent = /** @class */ (function () {
    function ErrorsComponent(_nssService, _settingsservice, _route, _fb, _modalService, router, _configService, _toasterService) {
        var _this = this;
        this._nssService = _nssService;
        this._settingsservice = _settingsservice;
        this._route = _route;
        this._fb = _fb;
        this._modalService = _modalService;
        this.router = router;
        this._configService = _configService;
        this._toasterService = _toasterService;
        this.newErrForm = _fb.group({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            'code': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }
    ErrorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.errorsURL).subscribe(function (res) {
            _this.errors = res;
        });
        this._settingsservice.errors().subscribe(function (res) {
            _this.errors = res;
        });
    };
    ErrorsComponent.prototype.showNewErrorForm = function () {
        var _this = this;
        this.newErrForm.controls['name'].setValue(null);
        this.newErrForm.controls['code'].setValue(null);
        this.showNewErrForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.CloseResult = "Closed with: " + result;
            if (_this.CloseResult) {
                _this.cancelCreateError();
            }
        }, function (reason) {
            _this.CloseResult = "Dismissed " + _this.getDismissReason(reason);
            if (_this.CloseResult) {
                _this.cancelCreateError();
            }
        });
    };
    ErrorsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ErrorsComponent.prototype.cancelCreateError = function () {
        this.showNewErrForm = false;
        this.newErrForm.reset();
    };
    ErrorsComponent.prototype.createNewError = function () {
        var _this = this;
        var newItem = this.newErrForm.value;
        this._settingsservice.postEntity(newItem, this.configSettings.errorsURL)
            .subscribe(function (response) {
            response.isEditing = false;
            _this.errors.push(response);
            _this._settingsservice.setErrors(_this.errors);
            _this._toasterService.pop('success', 'Success', 'Error was created');
            _this.cancelCreateError();
        }, function (error) {
            _this._toasterService.pop('error', 'Error creating Error', error._body.message || error.statusText);
        });
    };
    ErrorsComponent.prototype.EditRowClicked = function (i) {
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.errors[i]); // make a copy in case they cancel
        this.errors[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    };
    ErrorsComponent.prototype.CancelEditRowClicked = function (i) {
        this.errors[i] = Object.assign({}, this.tempData);
        this.errors[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.errorForm.form.dirty) {
            this.errorForm.reset();
        }
    };
    // edits made, save clicked
    ErrorsComponent.prototype.saveError = function (u, i) {
        var _this = this;
        if (u.name === undefined || u.code === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Error', 'Name and Code are required.');
        }
        else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.errorsURL).subscribe(function (resp) {
                _this._toasterService.pop('success', 'Success', 'Error was updated');
                u.isEditing = false;
                _this.errors[i] = u;
                _this._settingsservice.setErrors(_this.errors);
                _this.rowBeingEdited = -1;
                _this.isEditing = false; // set to true so create new is disabled
                if (_this.errorForm.form.dirty) {
                    _this.errorForm.reset();
                }
            }, function (error) {
                _this._toasterService.pop('error', 'Error updating Error', error._body.message || error.statusText);
            });
        }
    };
    // delete category type
    ErrorsComponent.prototype.deleteError = function (deleteID) {
        var _this = this;
        var check = confirm('Are you sure you want to delete this Error?');
        if (confirm) {
            // delete it
            var index_1 = this.errors.findIndex(function (item) { return item.id === deleteID; });
            this._settingsservice.deleteEntity(deleteID, this.configSettings.errorsURL)
                .subscribe(function (result) {
                _this._toasterService.pop('success', 'Success', 'Error was deleted');
                _this.errors.splice(index_1, 1);
                _this._settingsservice.setErrors(_this.errors); // update service
            }, function (error) {
                _this._toasterService.pop('error', 'Error deleting Error', error._body.message || error.statusText);
            });
        }
    };
    ErrorsComponent.prototype.getLoggedInRole = function () {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    };
    ErrorsComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ErrorsComponent.prototype, "addRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ErrorForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorsComponent.prototype, "errorForm", void 0);
    ErrorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./errors.component.html */ "./src/app/settings/categories/errors/errors.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["NSSService"], app_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"],
            angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ErrorsComponent);
    return ErrorsComponent;
}());



/***/ }),

/***/ "./src/app/settings/categories/managers/managers.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/settings/categories/managers/managers.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <legend style=\"margin-bottom:25px;margin-top:0;\">Managers</legend>\r\n</div>\r\n\r\n<button type=\"button\" class=\"btn-blue\" (click)=\"showNewUserForm()\"><i class=\"fa fa-plus\"\r\n    aria-hidden=\"tru\"></i> Add New Manager</button>\r\n\r\n<form #User TypeForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"managers\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"col-xs-1\"></th>\r\n                    <th class=\"col-xs-2\">Username</th>\r\n                    <th class=\"col-xs-2\">Email</th>\r\n                    <th class=\"col-xs-2\">First name</th>\r\n                    <th class=\"col-xs-2\">Last Name</th>\r\n                    <th class=\"col-xs-1\">Role ID</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let m of managers; let i = index\">\r\n                    <td>\r\n                        <div class=\"data-controls\">\r\n                            <i *ngIf=\"!m.isEditing\" title=\"Edit Manager\" (click)=\"EditRowClicked(i)\" class=\"fa fa-pencil\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>&nbsp;\r\n                            <i *ngIf=\"!m.isEditing\" title=\"Delete Manager\" (click)=\"deleteManager(m.id)\" class=\"fa fa-times\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"m.isEditing\" title=\"Save Manager\" (click)=\"saveManager(m,i)\" class=\"fa fa-floppy-o\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"m.isEditing\" title=\"Cancel Edit\" (click)=\"CancelEditRowClicked(i)\" class=\"fa fa-history\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!m.isEditing\">{{ m.username }}</span>\r\n                        <span *ngIf=\"m.isEditing\"><input type=\"text\" name=\"username\" [(ngModel)]=\"m.username\" required></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!m.isEditing\">{{ m.email }}</span>\r\n                        <span *ngIf=\"m.isEditing\"><input type=\"text\" name=\"email\" [(ngModel)]=\"m.email\" required></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!m.isEditing\">{{ m.firstName }}</span>\r\n                        <span *ngIf=\"m.isEditing\"><input type=\"text\" name=\"firstName\" [(ngModel)]=\"m.firstName\" required></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!m.isEditing\">{{ m.lastName }}</span>\r\n                        <span *ngIf=\"m.isEditing\"><input type=\"text\" name=\"lastName\" [(ngModel)]=\"m.lastName\" required></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!m.isEditing\">{{ m.roleID }}</span>\r\n                        <span *ngIf=\"m.isEditing\">\r\n                            <select [(ngModel)]=\"m.roleID\" name=\"roleID\">\r\n                                <option *ngFor=\"let role of roles\" [value]=\"role.id\">{{role.name}}</option>\r\n                            </select></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>\r\n<br />\r\n\r\n<!-- new user form -->\r\n<ng-template #add let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">New Manager </h4>\r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <h3 class=\"modal-title\">New Manager</h3>\r\n        <form [formGroup]=\"newUserForm\">\r\n            <!-- UserName* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newUserForm.get('username').valid && newUserForm.get('username').dirty}\">\r\n                <label class=\"req\" for=\"username\">Username:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"username\" required>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newUserForm.get('username').valid && newUserForm.get('username').dirty\">Username \r\n                    is required</div>\r\n            </div>\r\n\r\n            <!-- Email* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newUserForm.get('email').valid && newUserForm.get('email').dirty}\">\r\n                    <label class=\"req\" for=\"email\">Email:</label>\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"email\">\r\n                    <div class=\"input-invalid-warning\" *ngIf=\"!newUserForm.get('email').valid && newUserForm.get('email').dirty\">Email\r\n                        is required</div>\r\n                </div>\r\n\r\n            <!-- Password -->\r\n            <div class=\"form-group\" [ngClass]=\"{'form-invalid': !newUserForm.get('password').valid && newUserForm.get('password').dirty}\">\r\n                <label class=\"req\" for=\"password\">Password:</label>\r\n                <input class=\"form-control\" type=\"password\" formControlName=\"password\">\r\n            </div>\r\n\r\n            <!-- First Name* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newUserForm.get('firstName').valid && newUserForm.get('firstName').dirty}\">\r\n                <label class=\"req\" for=\"firstName\">First Name:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"firstName\" required>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newUserForm.get('firstName').valid && newUserForm.get('firstName').dirty\">First\r\n                    Name is required</div>\r\n            </div>\r\n\r\n            <!-- Last Name* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newUserForm.get('lastName').valid && newUserForm.get('lastName').dirty}\">\r\n                <label class=\"req\" for=\"lastName\">Last Name:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"lastName\">\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newUserForm.get('lastName').valid && newUserForm.get('lastName').dirty\">Last Name\r\n                    is required</div>\r\n            </div>\r\n\r\n            <!-- Role ID* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newUserForm.get('roleID').valid && newUserForm.get('roleID').dirty}\">\r\n                <label class=\"req\" for=\"roleID\">Role:</label>\r\n                <select class=\"form-control\" formControlName=\"roleID\">\r\n                    <option *ngFor=\"let role of roles\" [value]=\"role.id\">{{role.name}}</option>\r\n                </select>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newUserForm.get('roleID').valid && newUserForm.get('roleID').dirty\">Role ID\r\n                    is required</div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"d('closed')\" class=\"btn-black\">Cancel</button>\r\n            <button type=\"button\" (click)=\"createNewUser()\" [disabled]=\"!newUserForm.valid\" class=\"btn-blue\">Create</button>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/settings/categories/managers/managers.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/settings/categories/managers/managers.component.ts ***!
  \********************************************************************/
/*! exports provided: ManagersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagersComponent", function() { return ManagersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page








var ManagersComponent = /** @class */ (function () {
    function ManagersComponent(_nssService, _settingsservice, _route, _fb, _modalService, _cdr, _toasterService, _configService) {
        this._nssService = _nssService;
        this._settingsservice = _settingsservice;
        this._route = _route;
        this._fb = _fb;
        this._modalService = _modalService;
        this._cdr = _cdr;
        this._toasterService = _toasterService;
        this._configService = _configService;
        this.newUserForm = _fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            roleID: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
        this.configSettings = this._configService.getConfiguration();
    }
    ManagersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.managersURL).subscribe(function (managers) {
            _this.managers = managers;
        });
        this._settingsservice.getEntities(this.configSettings.rolesURL).subscribe(function (roles) {
            _this.roles = roles;
        });
    };
    ManagersComponent.prototype.showNewUserForm = function () {
        var _this = this;
        this.newUserForm.controls['username'].setValue(null);
        this.newUserForm.controls['password'].setValue(null);
        this.newUserForm.controls['firstName'].setValue(null);
        this.newUserForm.controls['lastName'].setValue(null);
        this.newUserForm.controls['roleID'].setValue(null);
        this.newUserForm.controls['email'].setValue(null);
        this.showUserForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.CloseResult = "Closed with: " + result;
            if (_this.CloseResult) {
                _this.cancelCreateUser();
            }
        }, function (reason) {
            _this.CloseResult = "Dismissed " + _this.getDismissReason(reason);
            if (_this.CloseResult) {
                _this.cancelCreateUser();
            }
        });
    };
    ManagersComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ManagersComponent.prototype.cancelCreateUser = function () {
        this.showUserForm = false;
        this.newUserForm.reset();
    };
    ManagersComponent.prototype.createNewUser = function () {
        var _this = this;
        var newUser = this.newUserForm.value;
        this._settingsservice.postEntity(newUser, this.configSettings.managersURL).subscribe(function (response) {
            response.isEditing = false;
            _this.managers.push(response);
            _this._settingsservice.setManagers(_this.managers);
            _this._toasterService.pop('success', 'Success', 'Manager was created');
            _this.cancelCreateUser();
        }, function (error) { _this._toasterService.pop('error', 'Error creating Manager', error._body.message || error.statusText); });
    };
    ManagersComponent.prototype.EditRowClicked = function (i) {
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.managers[i]); // make a copy in case they cancel
        this.managers[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    };
    ManagersComponent.prototype.CancelEditRowClicked = function (i) {
        this.managers[i] = Object.assign({}, this.tempData);
        this.managers[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.userForm.nativeElement.dirty) {
            this.userForm.reset();
        }
    };
    // edits made, save clicked
    ManagersComponent.prototype.saveManager = function (u, i) {
        var _this = this;
        if (u.username === undefined || u.email === undefined || u.firstName === undefined || u.lastName === undefined || u.roleID === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Error', 'First name, last name, username, email and role ID are required.');
        }
        else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.managersURL).subscribe(function (resp) {
                _this._toasterService.pop('success', 'Success', 'Manager was updated');
                u.isEditing = false;
                _this.managers[i] = u;
                _this._settingsservice.setManagers(_this.managers);
                _this.rowBeingEdited = -1;
                _this.isEditing = false; // set to true so create new is disabled
                if (_this.userForm.form.dirty) {
                    _this.userForm.reset();
                }
            }, function (error) { _this._toasterService.pop('error', 'Error updating Manager', error._body.message || error.statusText); });
        }
    };
    // delete category type
    ManagersComponent.prototype.deleteManager = function (deleteID) {
        var _this = this;
        var check = confirm('Are you sure you want to delete this Manager?');
        if (confirm) {
            // delete it
            var index_1 = this.managers.findIndex(function (item) { return item.id === deleteID; });
            this._settingsservice.deleteEntity(deleteID, this.configSettings.managersURL)
                .subscribe(function (result) {
                _this._toasterService.pop('success', 'Success', 'Manager was deleted');
                _this.managers.splice(index_1, 1);
                _this._settingsservice.setManagers(_this.managers); // update service
            }, function (error) { _this._toasterService.pop('error', 'Error deleting Manager', error._body.message || error.statusText); });
        }
    };
    ManagersComponent.prototype.ngAfterViewChecked = function () {
        this._cdr.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ManagersComponent.prototype, "addRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('User'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ManagersComponent.prototype, "userForm", void 0);
    ManagersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./managers.component.html */ "./src/app/settings/categories/managers/managers.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["NSSService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            app_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]])
    ], ManagersComponent);
    return ManagersComponent;
}());



/***/ }),

/***/ "./src/app/settings/categories/regions/regions.component.html":
/*!********************************************************************!*\
  !*** ./src/app/settings/categories/regions/regions.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <legend style=\"margin-bottom:25px;margin-top:0;\">Regions</legend>\r\n</div>\r\n<button [hidden]=\"loggedInRole !== 'Administrator'\" type=\"button\" class=\"btn-blue\" (click)=\"showNewRegionForm()\"><i class=\"fa fa-plus\"\r\n    aria-hidden=\"tru\"></i> Add New Region</button>\r\n\r\n<form #RegionForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"regions\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"col-xs-1\"></th>\r\n                    <th class=\"col-xs-4\">Name</th>\r\n                    <th class=\"col-xs-1\">Code</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let v of regions; let i = index\">\r\n                    <td>\r\n                        <div class=\"data-controls\">\r\n                            <i *ngIf=\"!v.isEditing\" title=\"Edit Region\" (click)=\"EditRowClicked(i)\" class=\"fa fa-pencil\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>&nbsp;\r\n                            <i *ngIf=\"!v.isEditing\" title=\"Delete Region\" (click)=\"deleteRegion(v.id)\" class=\"fa fa-times\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"v.isEditing\" title=\"Save Region\" (click)=\"saveRegion(v,i)\" class=\"fa fa-floppy-o\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"v.isEditing\" title=\"Cancel Edit\" (click)=\"CancelEditRowClicked(i)\" class=\"fa fa-history\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!v.isEditing\">{{ v.name }}</span>\r\n                        <span *ngIf=\"v.isEditing\"><input type=\"text\" name=\"name\" [(ngModel)]=\"v.name\" required></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!v.isEditing\">{{ v.code }}</span>\r\n                        <span *ngIf=\"v.isEditing\"><input type=\"text\" name=\"code\" [(ngModel)]=\"v.code\" required></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>\r\n<br />\r\n\r\n<!-- new region form -->\r\n<ng-template #add let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">New Region </h4>\r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <h3 class=\"modal-title\">New Region</h3>\r\n        <form [formGroup]=\"newRegForm\">\r\n            <!-- Region Name* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newRegForm.get('name').valid && newRegForm.get('name').dirty}\">\r\n                <label class=\"req\" for=\"name\">Name:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\" required>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newRegForm.get('name').valid && newRegForm.get('name').dirty\">Region\r\n                    Name is required</div>\r\n            </div>\r\n\r\n            <!-- Short Name -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newRegForm.get('code').valid && newRegForm.get('code').dirty}\">\r\n                <label class=\"req\" for=\"code\">Code:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"code\">\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newRegForm.get('code').valid && newRegForm.get('code').dirty\">Code\r\n                    is required</div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"d('closed')\" class=\"btn-black\">Cancel</button>\r\n            <button type=\"button\" (click)=\"createNewRegion()\" [disabled]=\"!newRegForm.valid\" class=\"btn-blue\">Create</button>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/settings/categories/regions/regions.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/settings/categories/regions/regions.component.ts ***!
  \******************************************************************/
/*! exports provided: RegionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsComponent", function() { return RegionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page








var RegionsComponent = /** @class */ (function () {
    function RegionsComponent(_nssService, _settingsservice, _route, _fb, _modalService, router, _toasterService, _configService) {
        var _this = this;
        this._nssService = _nssService;
        this._settingsservice = _settingsservice;
        this._route = _route;
        this._fb = _fb;
        this._modalService = _modalService;
        this.router = router;
        this._toasterService = _toasterService;
        this._configService = _configService;
        this.newRegForm = _fb.group({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            'code': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }
    RegionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.regionURL).subscribe(function (res) {
            _this.regions = res;
        });
        this._settingsservice.regions().subscribe(function (res) {
            _this.regions = res;
        });
    };
    RegionsComponent.prototype.showNewRegionForm = function () {
        var _this = this;
        this.newRegForm.controls['name'].setValue(null);
        this.newRegForm.controls['code'].setValue(null);
        this.showNewRegForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.CloseResult = "Closed with: " + result;
            if (_this.CloseResult) {
                _this.cancelCreateRegion();
            }
        }, function (reason) {
            _this.CloseResult = "Dismissed " + _this.getDismissReason(reason);
            if (_this.CloseResult) {
                _this.cancelCreateRegion();
            }
        });
    };
    RegionsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    RegionsComponent.prototype.cancelCreateRegion = function () {
        this.showNewRegForm = false;
        this.newRegForm.reset();
    };
    RegionsComponent.prototype.createNewRegion = function () {
        var _this = this;
        var newItem = this.newRegForm.value;
        this._settingsservice.postEntity(newItem, this.configSettings.regionURL)
            .subscribe(function (response) {
            response.isEditing = false;
            _this.regions.push(response);
            _this._settingsservice.setRegions(_this.regions);
            _this._toasterService.pop('success', 'Success', 'Region was created');
            _this.cancelCreateRegion();
        }, function (error) { _this._toasterService.pop('error', 'Error creating Region', error._body.message || error.statusText); });
    };
    RegionsComponent.prototype.EditRowClicked = function (i) {
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.regions[i]); // make a copy in case they cancel
        this.regions[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    };
    RegionsComponent.prototype.CancelEditRowClicked = function (i) {
        this.regions[i] = Object.assign({}, this.tempData);
        this.regions[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.regForm.form.dirty) {
            this.regForm.reset();
        }
    };
    // edits made, save clicked
    RegionsComponent.prototype.saveRegion = function (r, i) {
        var _this = this;
        if (r.name === undefined || r.code === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Error', 'Name and Code are required.');
        }
        else {
            delete r.isEditing;
            this._settingsservice.putEntity(r.id, r, this.configSettings.regionURL).subscribe(function (resp) {
                _this._toasterService.pop('success', 'Success', 'Region was updated');
                r.isEditing = false;
                _this.regions[i] = r;
                _this._settingsservice.setRegions(_this.regions);
                _this.rowBeingEdited = -1;
                _this.isEditing = false; // set to true so create new is disabled
                if (_this.regForm.form.dirty) {
                    _this.regForm.reset();
                }
            }, function (error) { _this._toasterService.pop('error', 'Error updating Region', error._body.message || error.statusText); });
        }
    };
    // delete category type
    RegionsComponent.prototype.deleteRegion = function (deleteID) {
        var _this = this;
        var check = confirm('Are you sure you want to delete this Region?');
        if (confirm) {
            // delete it
            var index_1 = this.regions.findIndex(function (item) { return item.id === deleteID; });
            this._settingsservice.deleteEntity(deleteID, this.configSettings.regionURL)
                .subscribe(function (result) {
                _this._toasterService.pop('success', 'Success', 'Region was deleted');
                _this.regions.splice(index_1, 1);
                _this._settingsservice.setRegions(_this.regions); // update service
            }, function (error) { _this._toasterService.pop('error', 'Error deleting Region', error._body.message || error.statusText); });
        }
    };
    RegionsComponent.prototype.getLoggedInRole = function () {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    };
    RegionsComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], RegionsComponent.prototype, "addRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('RegionForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegionsComponent.prototype, "regForm", void 0);
    RegionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./regions.component.html */ "./src/app/settings/categories/regions/regions.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["NSSService"], _settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            app_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]])
    ], RegionsComponent);
    return RegionsComponent;
}());



/***/ }),

/***/ "./src/app/settings/categories/regressionregions/regressionregions.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/settings/categories/regressionregions/regressionregions.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"regSelect\">Choose Region:\r\n    <select [ngModel]=\"selectedRegion\" (ngModelChange)=\"onRegSelect($event)\" name=\"region\">\r\n        <option value=\"none\">None</option>\r\n        <option [ngValue]=\"i\" *ngFor=\"let i of regions\">{{i.name}}</option>\r\n    </select>\r\n</div>\r\n<div>\r\n    <legend style=\"margin-bottom:25px;margin-top:0;\">Regression Regions</legend>\r\n</div>\r\n\r\n<button [hidden]=\"loggedInRole !== 'Administrator'\" type=\"button\" class=\"btn-blue\" (click)=\"showNewRegressionRegionForm()\"><i class=\"fa fa-plus\"\r\n    aria-hidden=\"tru\"></i> Add New Regression Region</button>\r\n\r\n<form #RegressionForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"regressionRegions\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"col-xs-1\"></th>\r\n                    <th class=\"col-xs-4\">Name</th>\r\n                    <th class=\"col-xs-4\">Code</th>\r\n                    <th class=\"col-xs-1\">Citation ID</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let r of regressionRegions; let i = index\">\r\n                    <td>\r\n                        <div class=\"data-controls\">\r\n                            <i *ngIf=\"!r.isEditing\" title=\"Edit Regression Region\" (click)=\"EditRowClicked(i)\" class=\"fa fa-pencil\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>&nbsp;\r\n                            <i *ngIf=\"!r.isEditing\" title=\"Delete Regression Region\" (click)=\"deleteRegression(r.id)\"\r\n                                class=\"fa fa-times\" aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"r.isEditing\" title=\"Save Regression Region\" (click)=\"saveRegression(r,i)\" class=\"fa fa-floppy-o\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"r.isEditing\" title=\"Cancel Edit\" (click)=\"CancelEditRowClicked(i)\" class=\"fa fa-history\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!r.isEditing\">{{ r.name }}</span>\r\n                        <span *ngIf=\"r.isEditing\"><input type=\"text\" name=\"name\" [(ngModel)]=\"r.name\" required></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!r.isEditing\">{{ r.code }}</span>\r\n                        <span *ngIf=\"r.isEditing\"><input type=\"text\" name=\"code\" [(ngModel)]=\"r.code\" required></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!r.isEditing\">{{ r.citationID }}</span>\r\n                        <span *ngIf=\"r.isEditing\"><input type=\"text\" name=\"citationID\" [(ngModel)]=\"r.citationID\"></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>\r\n<br />\r\n\r\n<!-- new regression type form -->\r\n<ng-template #add let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">New Regression Region </h4>\r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <h3 class=\"modal-title\">New Regression Region</h3>\r\n        <form [formGroup]=\"newRegRegForm\">\r\n            <!-- Regression Type Name* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newRegRegForm.get('name').valid && newRegRegForm.get('name').dirty}\">\r\n                <label class=\"req\" for=\"name\">Name:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\" required>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newRegRegForm.get('name').valid && newRegRegForm.get('name').dirty\">Regression\r\n                    Name is required</div>\r\n            </div>\r\n\r\n            <!-- Description -->\r\n            <div class=\"form-group\">\r\n                <label for=\"description\">Description:</label>\r\n                <textarea class=\"form-control\" rows=\"3\" placeholder=\"\" formControlName=\"description\"></textarea>\r\n            </div>\r\n\r\n            <!-- Short Name -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newRegRegForm.get('code').valid && newRegRegForm.get('code').dirty}\">\r\n                <label class=\"req\" for=\"code\">Code:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"code\">\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newRegRegForm.get('code').valid && newRegRegForm.get('code').dirty\">Code\r\n                    is required</div>\r\n            </div>\r\n            <!-- State* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{ 'form-invalid': !newRegRegForm.get('state').valid && newRegRegForm.get('state').dirty }\">\r\n                    <label class=\"req\" for=\"state\">Region:</label>\r\n                    <select class=\"form-control\" formControlName=\"state\">\r\n                        <option *ngFor=\"let reg of regions\" [value]=\"reg.id\">{{ reg.name }}</option>\r\n                    </select>\r\n                    <div class=\"input-invalid-warning\" *ngIf=\"!newRegRegForm.get('state').valid && newRegRegForm.get('state').dirty\">\r\n                        Region is required\r\n                    </div>\r\n                </div>\r\n\r\n        </form>\r\n\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"d('closed')\" class=\"btn-black\">Cancel</button>\r\n            <button type=\"button\" (click)=\"createNewRegression()\" [disabled]=\"!newRegRegForm.valid\" class=\"btn-blue\">Create</button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/settings/categories/regressionregions/regressionregions.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/settings/categories/regressionregions/regressionregions.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RegressionRegionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegressionRegionsComponent", function() { return RegressionRegionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page








var RegressionRegionsComponent = /** @class */ (function () {
    function RegressionRegionsComponent(_nssService, _settingsservice, _route, _fb, _modalService, _cdr, router, _toasterService, _configService) {
        var _this = this;
        this._nssService = _nssService;
        this._settingsservice = _settingsservice;
        this._route = _route;
        this._fb = _fb;
        this._modalService = _modalService;
        this._cdr = _cdr;
        this.router = router;
        this._toasterService = _toasterService;
        this._configService = _configService;
        this.isEditing = false;
        this.newRegRegForm = _fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }
    RegressionRegionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.regionURL).subscribe(function (regions) {
            _this.regions = regions;
        });
        this.selectedRegion = 'none';
        this.getAllRegRegions();
    };
    RegressionRegionsComponent.prototype.onRegSelect = function (r) {
        this.selectedRegion = r;
        if (r === 'none') {
            this.getAllRegRegions();
        }
        else {
            this.getRegRegions(r);
        }
    };
    RegressionRegionsComponent.prototype.getRegRegions = function (r) {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.regionURL + r.id + '/' + this.configSettings.regRegionURL).subscribe(function (regs) {
            _this.regressionRegions = regs;
        });
    };
    RegressionRegionsComponent.prototype.getAllRegRegions = function () {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.regRegionURL).subscribe(function (res) {
            _this.regressionRegions = res;
        });
    };
    RegressionRegionsComponent.prototype.showNewRegressionRegionForm = function () {
        var _this = this;
        this.newRegRegForm.controls['name'].setValue(null);
        this.newRegRegForm.controls['description'].setValue('');
        if (this.selectedRegion) {
            this.newRegRegForm.controls['state'].setValue(this.selectedRegion.id);
        }
        this.showNewRegRegForm = true;
        this.newRegRegForm.controls['code'].setValue(null);
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.CloseResult = "Closed with: " + result;
            if (_this.CloseResult) {
                _this.cancelCreateRegression();
            }
        }, function (reason) {
            _this.CloseResult = "Dismissed " + _this.getDismissReason(reason);
            if (_this.CloseResult) {
                _this.cancelCreateRegression();
            }
        });
    };
    RegressionRegionsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    RegressionRegionsComponent.prototype.cancelCreateRegression = function () {
        this.showNewRegRegForm = false;
        this.newRegRegForm.reset();
    };
    RegressionRegionsComponent.prototype.createNewRegression = function () {
        var _this = this;
        var region = this.newRegRegForm.value.state;
        var newRegReg = this.newRegRegForm.value;
        delete newRegReg.state;
        this._settingsservice
            .postEntity(newRegReg, this.configSettings.regionURL + region + '/' + this.configSettings.regRegionURL)
            .subscribe(function (response) {
            response.isEditing = false;
            _this._toasterService.pop('success', 'Success', 'Regression Region was created');
            _this.getRegRegions(_this.selectedRegion);
            _this.cancelCreateRegression();
        }, function (error) { _this._toasterService.pop('error', 'Error creating Regression Region', error._body.message || error.statusText); });
    };
    RegressionRegionsComponent.prototype.EditRowClicked = function (i) {
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.regressionRegions[i]); // make a copy in case they cancel
        this.regressionRegions[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    };
    RegressionRegionsComponent.prototype.CancelEditRowClicked = function (i) {
        this.regressionRegions[i] = Object.assign({}, this.tempData);
        this.regressionRegions[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.regressionForm.form.dirty) {
            this.regressionForm.reset();
        }
    };
    // edits made, save clicked
    RegressionRegionsComponent.prototype.saveRegression = function (u, i) {
        var _this = this;
        if (u.name === undefined || u.code === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Error', 'Name and Code are required.');
        }
        else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.regRegionURL).subscribe(function (resp) {
                _this._toasterService.pop('success', 'Success', 'Regression Region was updated');
                u.isEditing = false;
                _this.regressionRegions[i] = u;
                _this._settingsservice.setRegRegions(_this.regressionRegions);
                _this.rowBeingEdited = -1;
                _this.isEditing = false; // set to true so create new is disabled
                if (_this.regressionForm.form.dirty) {
                    _this.regressionForm.reset();
                }
            }, function (error) { _this._toasterService.pop('error', 'Error updating Regression Region', error._body.message || error.statusText); });
        }
    };
    // delete category type
    RegressionRegionsComponent.prototype.deleteRegression = function (deleteID) {
        var _this = this;
        var check = confirm('Are you sure you want to delete this Regression Region?');
        if (confirm) {
            // delete it
            var index_1 = this.regressionRegions.findIndex(function (item) { return item.id === deleteID; });
            this._settingsservice.deleteEntity(deleteID, this.configSettings.regRegionURL)
                .subscribe(function (result) {
                _this._toasterService.pop('success', 'Success', 'Regression Region was deleted');
                _this.regressionRegions.splice(index_1, 1);
                _this._settingsservice.setRegRegions(_this.regressionRegions); // update service
            }, function (error) { _this._toasterService.pop('error', 'Error deleting Regression Region', error._body.message || error.statusText); });
        }
    };
    RegressionRegionsComponent.prototype.ngAfterViewChecked = function () {
        this._cdr.detectChanges();
    };
    RegressionRegionsComponent.prototype.getLoggedInRole = function () {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    };
    RegressionRegionsComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], RegressionRegionsComponent.prototype, "addRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('toRegion'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], RegressionRegionsComponent.prototype, "toRegionRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('RegressionForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegressionRegionsComponent.prototype, "regressionForm", void 0);
    RegressionRegionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./regressionregions.component.html */ "./src/app/settings/categories/regressionregions/regressionregions.component.html"),
            styles: [__webpack_require__(/*! ../../settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["NSSService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            app_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]])
    ], RegressionRegionsComponent);
    return RegressionRegionsComponent;
}());



/***/ }),

/***/ "./src/app/settings/categories/regressiontypes/regressiontypes.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/settings/categories/regressiontypes/regressiontypes.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"regSelect\">Choose Region:\r\n    <select [ngModel]=\"selectedRegion\" (ngModelChange)=\"onRegSelect($event)\" name=\"region\">\r\n        <option value=\"none\">None</option>\r\n        <option [ngValue]=\"i\" *ngFor=\"let i of regions\">{{i.name}}</option>\r\n    </select>\r\n</div>\r\n<div>\r\n    <legend style=\"margin-bottom:25px;margin-top:0;\">Regression Types</legend>\r\n</div>\r\n\r\n<button [hidden]=\"loggedInRole !== 'Administrator'\" type=\"button\" class=\"btn-blue\" (click)=\"showNewRegressionForm()\"><i class=\"fa fa-plus\"\r\n    aria-hidden=\"tru\"></i> Add New Regression Type</button>\r\n\r\n<form #RegressionForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"regressionTypes\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"col-xs-1\"></th>\r\n                    <th class=\"col-xs-4\">Name</th>\r\n                    <th>Description</th>\r\n                    <th class=\"col-xs-1\">Code</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let r of regressionTypes; let i = index\">\r\n                    <td>\r\n                        <div class=\"data-controls\">\r\n                            <i *ngIf=\"!r.isEditing\" title=\"Edit Regression Type\" (click)=\"EditRowClicked(i)\" class=\"fa fa-pencil\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>&nbsp;\r\n                            <i *ngIf=\"!r.isEditing\" title=\"Delete Regression Type\" (click)=\"deleteRegression(r.id)\"\r\n                                class=\"fa fa-times\" aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"r.isEditing\" title=\"Save Regression Type\" (click)=\"saveRegression(r,i)\" class=\"fa fa-floppy-o\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"r.isEditing\" title=\"Cancel Edit\" (click)=\"CancelEditRowClicked(i)\" class=\"fa fa-history\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!r.isEditing\">{{ r.name }}</span>\r\n                        <span *ngIf=\"r.isEditing\"><input type=\"text\" name=\"name\" [(ngModel)]=\"r.name\" required></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!r.isEditing\">{{ r.description }}</span>\r\n                        <span *ngIf=\"r.isEditing\"><textarea rows=\"3\" [(ngModel)]=\"r.description\" name=\"description\"></textarea></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!r.isEditing\">{{ r.code }}</span>\r\n                        <span *ngIf=\"r.isEditing\"><input type=\"text\" name=\"code\" [(ngModel)]=\"r.code\" required></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>\r\n<br />\r\n\r\n<!-- new regression type form -->\r\n<ng-template #add let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">New Regression Type </h4>\r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <h3 class=\"modal-title\">New Regression Type</h3>\r\n        <form [formGroup]=\"newRegForm\">\r\n            <!-- Regression Type Name* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newRegForm.get('name').valid && newRegForm.get('name').dirty}\">\r\n                <label class=\"req\" for=\"name\">Name:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\" required>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newRegForm.get('name').valid && newRegForm.get('name').dirty\">Regression\r\n                    Name is required</div>\r\n            </div>\r\n\r\n            <!-- Description -->\r\n            <div class=\"form-group\">\r\n                <label for=\"Description\">Description:</label>\r\n                <textarea class=\"form-control\" rows=\"3\" placeholder=\"\" formControlName=\"description\"></textarea>\r\n            </div>\r\n\r\n            <!-- Short Name -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newRegForm.get('code').valid && newRegForm.get('code').dirty}\">\r\n                <label class=\"req\" for=\"code\">Code:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"code\">\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newRegForm.get('code').valid && newRegForm.get('code').dirty\">Code\r\n                    is required</div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"d('closed')\" class=\"btn-black\">Cancel</button>\r\n            <button type=\"button\" (click)=\"createNewRegression()\" [disabled]=\"!newRegForm.valid\" class=\"btn-blue\">Create</button>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/settings/categories/regressiontypes/regressiontypes.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/settings/categories/regressiontypes/regressiontypes.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegressionTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegressionTypesComponent", function() { return RegressionTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page








var RegressionTypesComponent = /** @class */ (function () {
    function RegressionTypesComponent(_nssService, _settingsservice, _route, _fb, _modalService, router, _toasterService, _configService) {
        var _this = this;
        this._nssService = _nssService;
        this._settingsservice = _settingsservice;
        this._route = _route;
        this._fb = _fb;
        this._modalService = _modalService;
        this.router = router;
        this._toasterService = _toasterService;
        this._configService = _configService;
        this.isEditing = false;
        this.newRegForm = _fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }
    RegressionTypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.regionURL).subscribe(function (reg) {
            _this.regions = reg;
        });
        this.selectedRegion = 'none';
        this.getAllRegTypes();
    };
    RegressionTypesComponent.prototype.onRegSelect = function (r) {
        var _this = this;
        this.selectedRegion = r;
        if (r === 'none') {
            this.getAllRegTypes();
        }
        else {
            this._settingsservice
                .getEntities(this.configSettings.regionURL + r.id + '/' + this.configSettings.regTypeURL)
                .subscribe(function (regs) {
                _this.regressionTypes = regs;
            });
        }
    };
    RegressionTypesComponent.prototype.getAllRegTypes = function () {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.regTypeURL).subscribe(function (res) {
            _this.regressionTypes = res;
        });
    };
    RegressionTypesComponent.prototype.showNewRegressionForm = function () {
        var _this = this;
        this.newRegForm.controls['name'].setValue(null);
        this.newRegForm.controls['description'].setValue(null);
        this.showNewRegForm = true;
        this.newRegForm.controls['code'].setValue(null);
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.CloseResult = "Closed with: " + result;
            if (_this.CloseResult) {
                _this.cancelCreateRegression();
            }
        }, function (reason) {
            _this.CloseResult = "Dismissed " + _this.getDismissReason(reason);
            if (_this.CloseResult) {
                _this.cancelCreateRegression();
            }
        });
    };
    RegressionTypesComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    RegressionTypesComponent.prototype.cancelCreateRegression = function () {
        this.showNewRegForm = false;
        this.newRegForm.reset();
    };
    RegressionTypesComponent.prototype.createNewRegression = function () {
        var _this = this;
        var newReg = this.newRegForm.value;
        this._settingsservice.postEntity(newReg, this.configSettings.regTypeURL).subscribe(function (response) {
            response.isEditing = false;
            _this._toasterService.pop('success', 'Success', 'Regression type was created');
            if (_this.selectedRegion === 'none') {
                _this.getAllRegTypes();
            }
            else {
                _this.onRegSelect(_this.selectedRegion);
            }
            _this.cancelCreateRegression();
        }, function (error) { _this._toasterService.pop('error', 'Error creating Regression Type', error._body.message || error.statusText); });
    };
    RegressionTypesComponent.prototype.EditRowClicked = function (i) {
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.regressionTypes[i]); // make a copy in case they cancel
        this.regressionTypes[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    };
    RegressionTypesComponent.prototype.CancelEditRowClicked = function (i) {
        this.regressionTypes[i] = Object.assign({}, this.tempData);
        this.regressionTypes[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.regressionForm.form.dirty) {
            this.regressionForm.reset();
        }
    };
    // edits made, save clicked
    RegressionTypesComponent.prototype.saveRegression = function (u, i) {
        var _this = this;
        if (u.name === undefined || u.description === undefined || u.code === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Error', 'Name, description and Code are required.');
        }
        else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.regTypeURL).subscribe(function (resp) {
                _this._toasterService.pop('success', 'Success', 'Regression Type was updated');
                u.isEditing = false;
                _this.regressionTypes[i] = u;
                _this._settingsservice.setRegTypes(_this.regressionTypes);
                _this.rowBeingEdited = -1;
                _this.isEditing = false; // set to true so create new is disabled
                if (_this.regressionForm.form.dirty) {
                    _this.regressionForm.reset();
                }
            }, function (error) { _this._toasterService.pop('error', 'Error updating Regression Type', error._body.message || error.statusText); });
        }
    };
    // delete category type
    RegressionTypesComponent.prototype.deleteRegression = function (deleteID) {
        var _this = this;
        var check = confirm('Are you sure you want to delete this Regression Type?');
        if (confirm) {
            // delete it
            var index_1 = this.regressionTypes.findIndex(function (item) { return item.id === deleteID; });
            this._settingsservice.deleteEntity(deleteID, this.configSettings.regTypeURL)
                .subscribe(function (result) {
                _this._toasterService.pop('success', 'Success', 'Regression Type was deleted');
                _this.regressionTypes.splice(index_1, 1);
                _this._settingsservice.setRegTypes(_this.regressionTypes); // update service
            }, function (error) { _this._toasterService.pop('error', 'Error deleting Regression Type', error._body.message || error.statusText); });
        }
    };
    RegressionTypesComponent.prototype.getLoggedInRole = function () {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    };
    RegressionTypesComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], RegressionTypesComponent.prototype, "addRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('RegressionForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegressionTypesComponent.prototype, "regressionForm", void 0);
    RegressionTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./regressiontypes.component.html */ "./src/app/settings/categories/regressiontypes/regressiontypes.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["NSSService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            app_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]])
    ], RegressionTypesComponent);
    return RegressionTypesComponent;
}());



/***/ }),

/***/ "./src/app/settings/categories/roles/roles.component.html":
/*!****************************************************************!*\
  !*** ./src/app/settings/categories/roles/roles.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <legend style=\"margin-bottom:25px;margin-top:0;\">Roles</legend>\r\n</div>\r\n<button [hidden]=\"loggedInRole !== 'Administrator'\" type=\"button\" class=\"btn-blue\" (click)=\"showNewRoleForm()\"><i class=\"fa fa-plus\"\r\n    aria-hidden=\"tru\"></i> Add New Role</button>\r\n\r\n<form #RoleForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"roles\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"col-xs-1\"></th>\r\n                    <th class=\"col-xs-4\">Name</th>\r\n                    <th class=\"col-xs-4\">Description</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let v of roles; let i = index\">\r\n                    <td>\r\n                        <div class=\"data-controls\">\r\n                            <i *ngIf=\"!v.isEditing\" title=\"Edit Role\" (click)=\"EditRowClicked(i)\" class=\"fa fa-pencil\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>&nbsp;\r\n                            <i *ngIf=\"!v.isEditing\" title=\"Delete Role\" (click)=\"deleteRole(v.id)\" class=\"fa fa-times\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"v.isEditing\" title=\"Save Role\" (click)=\"saveRole(v,i)\" class=\"fa fa-floppy-o\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"v.isEditing\" title=\"Cancel Edit\" (click)=\"CancelEditRowClicked(i)\" class=\"fa fa-history\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!v.isEditing\">{{ v.name }}</span>\r\n                        <span *ngIf=\"v.isEditing\"><input type=\"text\" name=\"name\" [(ngModel)]=\"v.name\" required></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!v.isEditing\">{{ v.description }}</span>\r\n                        <span *ngIf=\"v.isEditing\"><input type=\"text\" name=\"description\" [(ngModel)]=\"v.description\" required></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>\r\n<br />\r\n\r\n<!-- new role form -->\r\n<ng-template #add let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">New Role </h4>\r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <h3 class=\"modal-title\">New Role</h3>\r\n        <form [formGroup]=\"newRoleForm\">\r\n            <!-- Role Name* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newRoleForm.get('name').valid && newRoleForm.get('name').dirty}\">\r\n                <label class=\"req\" for=\"name\">Name:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\" required>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newRoleForm.get('name').valid && newRoleForm.get('name').dirty\">Role\r\n                    Name is required</div>\r\n            </div>\r\n\r\n            <!-- Description -->\r\n            <div class=\"form-group\">\r\n                <label for=\"description\">Description:</label>\r\n                <textarea class=\"form-control\" rows=\"3\" placeholder=\"\" formControlName=\"description\"></textarea>\r\n            </div>\r\n\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"d('closed')\" class=\"btn-black\">Cancel</button>\r\n            <button type=\"button\" (click)=\"createNewRole()\" [disabled]=\"!newRoleForm.valid\" class=\"btn-blue\">Create</button>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/settings/categories/roles/roles.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/settings/categories/roles/roles.component.ts ***!
  \**************************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- roles.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: roles crud in admin settings page








var RolesComponent = /** @class */ (function () {
    function RolesComponent(_nssService, _settingsservice, _route, _fb, _modalService, router, _toasterService, _configService) {
        var _this = this;
        this._nssService = _nssService;
        this._settingsservice = _settingsservice;
        this._route = _route;
        this._fb = _fb;
        this._modalService = _modalService;
        this.router = router;
        this._toasterService = _toasterService;
        this._configService = _configService;
        this.newRoleForm = _fb.group({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }
    RolesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.rolesURL).subscribe(function (res) {
            _this.roles = res;
        });
        this._settingsservice.roles().subscribe(function (res) {
            _this.roles = res;
        });
    };
    RolesComponent.prototype.showNewRoleForm = function () {
        var _this = this;
        this.newRoleForm.controls['name'].setValue(null);
        this.newRoleForm.controls['description'].setValue(null);
        this.showNewRolForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.CloseResult = "Closed with: " + result;
            if (_this.CloseResult) {
                _this.cancelCreateRole();
            }
        }, function (reason) {
            _this.CloseResult = "Dismissed " + _this.getDismissReason(reason);
            if (_this.CloseResult) {
                _this.cancelCreateRole();
            }
        });
    };
    RolesComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    RolesComponent.prototype.cancelCreateRole = function () {
        this.showNewRolForm = false;
        this.newRoleForm.reset();
    };
    RolesComponent.prototype.createNewRole = function () {
        var _this = this;
        var newItem = this.newRoleForm.value;
        this._settingsservice.postEntity(newItem, this.configSettings.rolesURL)
            .subscribe(function (response) {
            response.isEditing = false;
            _this.roles.push(response);
            _this._settingsservice.setRoles(_this.roles);
            _this._toasterService.pop('success', 'Success', 'Role was created');
            _this.cancelCreateRole();
        }, function (error) { _this._toasterService.pop('error', 'Error creating Role', error._body.message || error.statusText); });
    };
    RolesComponent.prototype.EditRowClicked = function (i) {
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.roles[i]); // make a copy in case they cancel
        this.roles[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    };
    RolesComponent.prototype.CancelEditRowClicked = function (i) {
        this.roles[i] = Object.assign({}, this.tempData);
        this.roles[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.roleForm.form.dirty) {
            this.roleForm.reset();
        }
    };
    // edits made, save clicked
    RolesComponent.prototype.saveRole = function (r, i) {
        var _this = this;
        if (r.name === undefined || r.description === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Error', 'Name and Description are required.');
        }
        else {
            delete r.isEditing;
            this._settingsservice.putEntity(r.id, r, this.configSettings.rolesURL).subscribe(function (resp) {
                _this._toasterService.pop('success', 'Success', 'Role was updated');
                r.isEditing = false;
                _this.roles[i] = r;
                _this._settingsservice.setRoles(_this.roles);
                _this.rowBeingEdited = -1;
                _this.isEditing = false; // set to true so create new is disabled
                if (_this.roleForm.form.dirty) {
                    _this.roleForm.reset();
                }
            }, function (error) { _this._toasterService.pop('error', 'Error updating Role', error._body.message || error.statusText); });
        }
    };
    // delete category type
    RolesComponent.prototype.deleteRole = function (deleteID) {
        var _this = this;
        var check = confirm('Are you sure you want to delete this Role?');
        if (confirm) {
            // delete it
            var index_1 = this.roles.findIndex(function (item) { return item.id === deleteID; });
            this._settingsservice.deleteEntity(deleteID, this.configSettings.rolesURL)
                .subscribe(function (result) {
                _this._toasterService.pop('success', 'Success', 'Role was deleted');
                _this.roles.splice(index_1, 1);
                _this._settingsservice.setRoles(_this.roles); // update service
            }, function (error) { _this._toasterService.pop('error', 'Error deleting Role', error._body.message || error.statusText); });
        }
    };
    RolesComponent.prototype.getLoggedInRole = function () {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    };
    RolesComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], RolesComponent.prototype, "addRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('RoleForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RolesComponent.prototype, "roleForm", void 0);
    RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./roles.component.html */ "./src/app/settings/categories/roles/roles.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["NSSService"], _settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            app_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/settings/categories/scenarios/scenarios.component.html":
/*!************************************************************************!*\
  !*** ./src/app/settings/categories/scenarios/scenarios.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"regSelect\">Choose Region:\r\n    <select [ngModel]=\"selectedRegion\" (ngModelChange)=\"onRegSelect($event)\" name=\"region\">\r\n        <option [ngValue]=\"i\" *ngFor=\"let i of regions\">{{i.name}}</option>\r\n    </select>\r\n</div>\r\n\r\n<div *ngIf=\"statisticGroups\">Limit by Statistic Group:\r\n        <div class=\"settingsMultSelect\">\r\n            <ss-multiselect-dropdown id=\"statGroupSelect\" [options]=\"statisticGroups\" [texts]=\"myMSTexts\" [settings]=\"myRTSettings\" name=\"selectedStatGroupIDs\"\r\n                [(ngModel)]=\"selectedStatGroupIDs\" (ngModelChange)=\"onStatGroupSelect();\">\r\n            </ss-multiselect-dropdown>\r\n        </div>\r\n    </div>\r\n\r\n<div *ngIf=\"regressionRegions\">Limit by Regression Group:\r\n    <div class=\"settingsMultSelect\">\r\n        <ss-multiselect-dropdown id=\"regRegSelect\" [options]=\"regressionRegions\" [texts]=\"myMSTexts\" [settings]=\"myRTSettings\" name=\"selectedRegRegionIDs\"\r\n            [(ngModel)]=\"selectedRegRegionIDs\" (ngModelChange)=\"onRegRegSelect($event);\">\r\n        </ss-multiselect-dropdown>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"regressionTypes\">Limit by Statistic:\r\n    <div class=\"settingsMultSelect\">\r\n        <ss-multiselect-dropdown [options]=\"regressionTypes\" [texts]=\"myMSTexts\" [settings]=\"myRTSettings\" name=\"selectedRegTypeIDs\"\r\n            [(ngModel)]=\"selectedRegTypeIDs\" (ngModelChange)=\"onRegTypeSelect($event)\">\r\n        </ss-multiselect-dropdown>\r\n    </div>\r\n</div>\r\n\r\n\r\n<form #ScenarioForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"scenarios\">\r\n        <legend style=\"margin-bottom:20px;margin-top:20px;font-size:15px !important;\">Scenarios</legend>\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"col-xs-1\"></th>\r\n                    <th class=\"col-xs-4\">Statistic Group ID</th>\r\n                    <th>Statistic Group Name</th>\r\n                    <th class=\"col-xs-1\">Regression Regions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let s of scenarios; let i = index\">\r\n                    <td>\r\n                        <div class=\"data-controls\">\r\n                            <i *ngIf=\"!s.isEditing\" title=\"Edit Scenario\" (click)=\"EditRowClicked(i)\" class=\"fa fa-pencil\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>&nbsp;\r\n                            <i *ngIf=\"!s.isEditing\" title=\"Delete Scenario\" (click)=\"deleteScenario(s.id)\" class=\"fa fa-times\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"s.isEditing\" title=\"Save Scenario\" (click)=\"saveScenario(s,i)\" class=\"fa fa-floppy-o\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"s.isEditing\" title=\"Cancel Edit\" (click)=\"CancelEditRowClicked(i)\" class=\"fa fa-history\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!s.isEditing\">{{ s.statisticGroupID }}</span>\r\n                        <span *ngIf=\"s.isEditing\"><input type=\"text\" name=\"statisticGroupID\" [(ngModel)]=\"s.statisticGroupID\"\r\n                                required></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!s.isEditing\">{{ s.statisticGroupName }}</span>\r\n                        <span *ngIf=\"s.isEditing\"><textarea rows=\"3\" [(ngModel)]=\"s.statisticGroupName\" name=\"statisticGroupName\"></textarea></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!s.isEditing\">{{ s.regNames }}</span>\r\n                        <span *ngIf=\"s.isEditing\"><input type=\"text\" name=\"regressionRegions\" [(ngModel)]=\"s.regressionRegions\"\r\n                                required></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>\r\n<br />\r\n<button [hidden]=\"loggedInRole !== 'Administrator'\" *ngIf=\"regressionRegions\" type=\"button\" class=\"btn-blue\" (click)=\"showNewScenarioForm()\"><i\r\n        class=\"fa fa-plus\" aria-hidden=\"tru\"></i> Add New Scenario</button>\r\n\r\n<!-- new scenario form -->\r\n<ng-template #add let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">New Scenario </h4>\r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <h3 class=\"modal-title\">New Scenario</h3>\r\n        <form [formGroup]=\"newScenarioForm\">\r\n            <!-- Statistic Group* -->\r\n            <label class=\"req\" for=\"statisticGroup\">StatisticGroup:</label>\r\n            <select formControlName=\"statisticGroup\">\r\n                <option [ngValue]=\"s\" *ngFor=\"let s of statisticGroups\">{{s.name}}</option>\r\n            </select>\r\n\r\n            <!-- Regression Regions* -->\r\n            <label class=\"req\" for=\"regressionRegions\">RegressionRegions:</label>\r\n            <div class=\"settingsMultSelect\">\r\n                <ss-multiselect-dropdown [options]=\"regressionRegions\" [texts]=\"myMSTexts\" [settings]=\"myRTSettings\"\r\n                    formControlName=\"regressionRegions\">\r\n                </ss-multiselect-dropdown>\r\n            </div>\r\n\r\n            <!-- Region* -->\r\n            <label class=\"req\" for=\"region\">Region:</label>\r\n            <select formControlName=\"region\">\r\n                <option [ngValue]=\"r\" *ngFor=\"let r of regions\">{{r.name}}</option>\r\n            </select>\r\n\r\n        </form>\r\n\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"d('closed')\" class=\"btn-black\">Cancel</button>\r\n            <button type=\"button\" (click)=\"createNewScenario()\" [disabled]=\"!newScenarioForm.valid\" class=\"btn-blue\">Create</button>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/settings/categories/scenarios/scenarios.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/settings/categories/scenarios/scenarios.component.ts ***!
  \**********************************************************************/
/*! exports provided: ScenariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScenariosComponent", function() { return ScenariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page








var ScenariosComponent = /** @class */ (function () {
    function ScenariosComponent(_nssService, _settingsservice, _route, _fb, _modalService, _cdr, router, _toasterService, _configService) {
        var _this = this;
        this._nssService = _nssService;
        this._settingsservice = _settingsservice;
        this._route = _route;
        this._fb = _fb;
        this._modalService = _modalService;
        this._cdr = _cdr;
        this.router = router;
        this._toasterService = _toasterService;
        this._configService = _configService;
        this.newScenarioForm = _fb.group({
            statisticGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            regressionRegions: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null),
            region: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required)
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }
    ScenariosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.regionURL).subscribe(function (reg) {
            _this.regions = reg;
        });
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
        this.myMSTexts = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            checked: 'checked',
            checkedPlural: 'checked',
            defaultTitle: 'Select'
        };
        this._nssService.regressionRegions.subscribe(function (res) {
            _this.regressionRegions = res;
        });
        this._nssService.statisticGroups.subscribe(function (res) {
            _this.statisticGroups = res;
        });
        this._nssService.regressionTypes.subscribe(function (res) {
            _this.regressionTypes = res;
        });
        this._nssService.scenarios.subscribe(function (scen) {
            _this.scenarios = scen;
            for (var _i = 0, scen_1 = scen; _i < scen_1.length; _i++) {
                var scenario = scen_1[_i];
                var regNames = [];
                for (var _a = 0, _b = scenario.regressionRegions; _a < _b.length; _a++) {
                    var regReg = _b[_a];
                    regReg.Name = regReg.name;
                    regReg.ID = regReg.id;
                    regNames.push(regReg.name);
                }
                scenario.regNames = regNames.join(',\n');
            }
        });
        // get all stat groups/regression regions when we add new scenarios
    };
    ScenariosComponent.prototype.onRegSelect = function (r) {
        this.regressionRegions = [];
        this.selectedRegRegionIDs = [];
        this.selectedStatGroupIDs = [];
        this.selectedRegTypeIDs = [];
        this.selectedRegion = r;
        this._nssService.setSelectedRegion(r);
    };
    ScenariosComponent.prototype.onRegRegSelect = function (reg) {
        var _this = this;
        var selectedRegRegions = new Array();
        this.selectedRegRegionIDs = reg;
        this.selectedRegRegionIDs.forEach(function (srr) {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedRegRegions.push(_this.regressionRegions.filter(function (rr) {
                return rr.id === srr;
            })[0]);
        });
        this._nssService.setSelectedRegRegions(selectedRegRegions);
    };
    ScenariosComponent.prototype.onStatGroupSelect = function () {
        var _this = this;
        var selectedStatGroups = new Array();
        this.selectedStatGroupIDs.forEach(function (rsg) {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedStatGroups.push(_this.statisticGroups.filter(function (sg) {
                return sg.id === rsg;
            })[0]);
        });
        this._nssService.selectedStatGroups = selectedStatGroups;
    };
    ScenariosComponent.prototype.onRegTypeSelect = function () {
        var _this = this;
        // do we need this? may need to have reg types shown too???
        var selectedRegTypes = new Array();
        this.selectedRegTypeIDs.forEach(function (srt) {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedRegTypes.push(_this.regressionTypes.filter(function (rr) {
                return rr.id === srt;
            })[0]);
        });
        this._nssService.selectedRegressionTypes = selectedRegTypes;
    };
    ScenariosComponent.prototype.showNewScenarioForm = function () {
        var _this = this;
        // still needs changes
        this.newScenarioForm.controls['statisticGroup'].setValue(null);
        this.newScenarioForm.controls['regressionRegions'].setValue(null);
        this.newScenarioForm.controls['region'].setValue(this.selectedRegion);
        this.showNewScenForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.CloseResult = "Closed with: " + result;
            if (_this.CloseResult) {
                _this.cancelCreateScenario();
            }
        }, function (reason) {
            _this.CloseResult = "Dismissed " + _this.getDismissReason(reason);
            if (_this.CloseResult) {
                _this.cancelCreateScenario();
            }
        });
    };
    ScenariosComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ScenariosComponent.prototype.cancelCreateScenario = function () {
        this.showNewScenForm = false;
        this.newScenarioForm.reset();
    };
    ScenariosComponent.prototype.createNewScenario = function () {
        var _this = this;
        var scenario = this.newScenarioForm.value;
        scenario.statisticGroupID = scenario.statisticGroup.id;
        scenario.statisticGroupName = scenario.statisticGroup.name;
        var region = scenario.region;
        delete scenario.region;
        delete scenario.statisticGroup;
        this._settingsservice.postEntity(scenario, this.configSettings.regionURL + region + '/' + this.configSettings.scenariosURL)
            .subscribe(function (response) {
            response.isEditing = false;
            _this.cancelCreateScenario();
            _this._toasterService.pop('success', 'Success', 'Scenario was created');
            _this.onRegSelect(region);
            _this.cancelCreateScenario();
        }, function (error) { _this._toasterService.pop('error', 'Error creating Scenario', error._body.message || error.statusText); });
    };
    ScenariosComponent.prototype.EditRowClicked = function (i) {
        // from wateruse
        /*this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.categoryTypes[i]); // make a copy in case they cancel
        this.categoryTypes[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled*/
    };
    ScenariosComponent.prototype.CancelEditRowClicked = function (i) {
        /*this.categoryTypes[i] = Object.assign({}, this.tempData);
        this.categoryTypes[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.categoryForm.form.dirty) this.categoryForm.reset();*/
    };
    // edits made, save clicked
    ScenariosComponent.prototype.saveScenario = function (c, i) {
        /*if (c.name == undefined || c.name == "" || c.code == undefined || c.code == "") {
            //don't save it
            let infoMessage = "Category Type Name and Code are both required."
            this.infomodal.showInfoModal(infoMessage);
        } else {
            delete c.isEditing;
            this._settingsService.putEntity(c.id, c, 'categoryTypeURL')
                .subscribe((resp: ICategoryType) => {
                    this._toastService.pop('success', 'Success', 'Category Type was updated')
                    c.isEditing = false;
                    this.categoryTypes[i] = c;
                    this._settingsService.setCategories(this.categoryTypes);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.categoryForm.form.dirty) this.categoryForm.reset();
                }, error => this._toastService.pop("error", "Error updating Category Type", error._body.message || error.statusText));
        }*/
    };
    // delete category type
    ScenariosComponent.prototype.deleteScenario = function (catID) {
        // show are you sure modal
        /*
        this.areYouSure.showSureModal('Are you sure you want to delete this Category Type?'); // listener is AreYouSureDialogResponse()
        this.deleteID = catID;*/
    };
    // output emitter function when areYouSure is closed
    ScenariosComponent.prototype.AreYouSureDialogResponse = function (val) {
        // if they clicked Yes
        /*if (val) {
            //delete the category type
            // get the index to be deleted by the id
            let ind: number = this.getCategoryIndex(this.deleteID);
            //delete it
            this._settingsService.deleteEntity(this.deleteID, 'categoryTypeURL')
                .subscribe(result => {
                    this._toastService.pop('success', 'Success', 'Category Type deleted.');
                    this.categoryTypes.splice(ind, 1); //delete from array
                    this._settingsService.setCategories(this.categoryTypes); // update service
                }, error => this._toastService.pop('error', 'Error Deleting Category Type', error._body.message || error.statusText));
        }*/
    };
    // get index in regionList based on region.id value
    ScenariosComponent.prototype.getScenarioIndex = function (cID) {
        return 0;
        /*let ind: number = -1
        this.categoryTypes.some((ct, index, _ary) => {
            if (ct.id === cID) ind = index;
            return ct.id === cID;
        });
        return ind;*/
    };
    ScenariosComponent.prototype.ngAfterViewChecked = function () {
        this._cdr.detectChanges();
    };
    ScenariosComponent.prototype.getLoggedInRole = function () {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    };
    ScenariosComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ScenariosComponent.prototype, "addRef", void 0);
    ScenariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./scenarios.component.html */ "./src/app/settings/categories/scenarios/scenarios.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["NSSService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            app_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]])
    ], ScenariosComponent);
    return ScenariosComponent;
}());



/***/ }),

/***/ "./src/app/settings/categories/statisticgroups/statisticgroups.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/settings/categories/statisticgroups/statisticgroups.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"regSelect\">\r\n    Choose Region:\r\n    <select [ngModel]=\"selectedRegion\" (ngModelChange)=\"onRegSelect($event)\" name=\"region\">\r\n        <option value=\"none\">None</option>\r\n        <option [ngValue]=\"i\" *ngFor=\"let i of regions\">{{ i.name }}</option>\r\n    </select>\r\n</div>\r\n\r\n<div>\r\n    <legend style=\"margin-bottom:25px;margin-top:0;\">Statistic Groups</legend>\r\n</div>\r\n\r\n<button [hidden]=\"loggedInRole !== 'Administrator'\" type=\"button\" class=\"btn-blue\" (click)=\"showNewStatGroupForm()\">\r\n    <i class=\"fa fa-plus\" aria-hidden=\"tru\"></i> Add New Statistic Group\r\n</button>\r\n\r\n<form #StatGroupForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"statisticGroups\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"col-xs-1\"></th>\r\n                    <th class=\"col-xs-4\">Name</th>\r\n                    <th class=\"col-xs-1\">Code</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let r of statisticGroups; let i = index\">\r\n                    <td>\r\n                        <div class=\"data-controls\">\r\n                            <i\r\n                                *ngIf=\"!r.isEditing\"\r\n                                title=\"Edit Statistic Group\"\r\n                                (click)=\"EditRowClicked(i)\"\r\n                                class=\"fa fa-pencil\"\r\n                                aria-hidden=\"true\"\r\n                                style=\"cursor:pointer;padding:5px;\"\r\n                            ></i\r\n                            >&nbsp;\r\n                            <i\r\n                                *ngIf=\"!r.isEditing\"\r\n                                title=\"Delete Statistic Group\"\r\n                                (click)=\"deleteStatGroup(r.id)\"\r\n                                class=\"fa fa-times\"\r\n                                aria-hidden=\"true\"\r\n                                style=\"cursor:pointer;padding:5px;\"\r\n                            ></i>\r\n                            <i\r\n                                *ngIf=\"r.isEditing\"\r\n                                title=\"Save Statistic Group\"\r\n                                (click)=\"saveStatGroup(r, i)\"\r\n                                class=\"fa fa-floppy-o\"\r\n                                aria-hidden=\"true\"\r\n                                style=\"cursor:pointer;padding:5px;\"\r\n                            ></i>\r\n                            <i\r\n                                *ngIf=\"r.isEditing\"\r\n                                title=\"Cancel Edit\"\r\n                                (click)=\"CancelEditRowClicked(i)\"\r\n                                class=\"fa fa-history\"\r\n                                aria-hidden=\"true\"\r\n                                style=\"cursor:pointer;padding:5px;\"\r\n                            ></i>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!r.isEditing\">{{ r.name }}</span>\r\n                        <span *ngIf=\"r.isEditing\"><input type=\"text\" name=\"name\" [(ngModel)]=\"r.name\" required/></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!r.isEditing\">{{ r.code }}</span>\r\n                        <span *ngIf=\"r.isEditing\"><input type=\"text\" name=\"code\" [(ngModel)]=\"r.code\" required/></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>\r\n<br />\r\n\r\n<!-- new statistic group form -->\r\n<ng-template #add let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">New Statistic Group</h4>\r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <h3 class=\"modal-title\">New Statistic Group</h3>\r\n        <form [formGroup]=\"newStatGroupForm\">\r\n            <!-- Statistic Group Name* -->\r\n            <div\r\n                class=\"form-group required\"\r\n                [ngClass]=\"{ 'form-invalid': !newStatGroupForm.get('name').valid && newStatGroupForm.get('name').dirty }\"\r\n            >\r\n                <label class=\"req\" for=\"name\">Name:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\" required />\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newStatGroupForm.get('name').valid && newStatGroupForm.get('name').dirty\">\r\n                    Statistic Group Name is required\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Short Name -->\r\n            <div\r\n                class=\"form-group required\"\r\n                [ngClass]=\"{ 'form-invalid': !newStatGroupForm.get('code').valid && newStatGroupForm.get('code').dirty }\"\r\n            >\r\n                <label class=\"req\" for=\"code\">Code:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"code\" />\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newStatGroupForm.get('code').valid && newStatGroupForm.get('code').dirty\">\r\n                    Code is required\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"d('closed')\" class=\"btn-black\">Cancel</button>\r\n            <button type=\"button\" (click)=\"createNewStatGroup()\" [disabled]=\"!newStatGroupForm.valid\" class=\"btn-blue\">Create</button>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/settings/categories/statisticgroups/statisticgroups.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/settings/categories/statisticgroups/statisticgroups.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StatisticGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticGroupsComponent", function() { return StatisticGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page








var StatisticGroupsComponent = /** @class */ (function () {
    function StatisticGroupsComponent(_nssService, _settingsservice, _route, _fb, _modalService, router, _toasterService, _configService) {
        var _this = this;
        this._nssService = _nssService;
        this._settingsservice = _settingsservice;
        this._route = _route;
        this._fb = _fb;
        this._modalService = _modalService;
        this.router = router;
        this._toasterService = _toasterService;
        this._configService = _configService;
        this.isEditing = false;
        this.newStatGroupForm = _fb.group({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            'code': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }
    StatisticGroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.regionURL).subscribe(function (regions) {
            _this.regions = regions;
        });
        this.selectedRegion = 'none';
        this.getAllStatGroups();
        this._settingsservice.statisticGroups().subscribe(function (sg) {
            _this.statisticGroups = sg;
        });
    };
    StatisticGroupsComponent.prototype.getAllStatGroups = function () {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.statisticGrpURL).subscribe(function (res) {
            _this.allStatGroups = res;
            if (_this.selectedRegion === 'none') {
                _this.statisticGroups = res;
            }
        });
    };
    StatisticGroupsComponent.prototype.onRegSelect = function (r) {
        this.selectedRegRegionIDs = [];
        this.selectedStatGroupIDs = [];
        this.selectedRegTypeIDs = [];
        this.selectedRegion = r;
        this.getStatGroups(r);
    };
    StatisticGroupsComponent.prototype.getStatGroups = function (r) {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.regionURL + r.id + '/' + this.configSettings.statisticGrpURL)
            .subscribe(function (res) {
            _this.statisticGroups = res;
        });
    };
    StatisticGroupsComponent.prototype.showNewStatGroupForm = function () {
        var _this = this;
        this.newStatGroupForm.controls['name'].setValue(null);
        this.newStatGroupForm.controls['code'].setValue(null);
        this.showNewStatForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.CloseResult = "Closed with: " + result;
            if (_this.CloseResult) {
                _this.cancelCreateStatGroup();
            }
        }, function (reason) {
            _this.CloseResult = "Dismissed " + _this.getDismissReason(reason);
            if (_this.CloseResult) {
                _this.cancelCreateStatGroup();
            }
        });
    };
    StatisticGroupsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    StatisticGroupsComponent.prototype.cancelCreateStatGroup = function () {
        this.showNewStatForm = false;
        this.newStatGroupForm.reset();
    };
    StatisticGroupsComponent.prototype.createNewStatGroup = function () {
        var _this = this;
        var newStatGroup = this.newStatGroupForm.value;
        this._settingsservice.postEntity(newStatGroup, this.configSettings.statisticGrpURL)
            .subscribe(function (response) {
            response.isEditing = false;
            _this.cancelCreateStatGroup();
            _this._toasterService.pop('success', 'Success', 'Statistic Group was created');
            _this.getAllStatGroups();
            _this.cancelCreateStatGroup();
        }, function (error) { _this._toasterService.pop('error', 'Error creating Statistic Group', error._body.message || error.statusText); });
    };
    StatisticGroupsComponent.prototype.EditRowClicked = function (i) {
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.statisticGroups[i]); // make a copy in case they cancel
        this.statisticGroups[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    };
    StatisticGroupsComponent.prototype.CancelEditRowClicked = function (i) {
        this.statisticGroups[i] = Object.assign({}, this.tempData);
        this.statisticGroups[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.statGroupForm.form.dirty) {
            this.statGroupForm.reset();
        }
    };
    // edits made, save clicked
    StatisticGroupsComponent.prototype.saveStatGroup = function (u, i) {
        var _this = this;
        if (u.name === undefined || u.code === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Statistic Group', 'Name and Code are required.');
        }
        else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.statisticGrpURL).subscribe(function (resp) {
                _this._toasterService.pop('success', 'Success', 'Statistic Group was updated');
                u.isEditing = false;
                _this.statisticGroups[i] = u;
                _this._settingsservice.setStatGroups(_this.statisticGroups);
                _this.rowBeingEdited = -1;
                _this.isEditing = false; // set to true so create new is disabled
                if (_this.statGroupForm.form.dirty) {
                    _this.statGroupForm.reset();
                }
            }, function (error) { _this._toasterService.pop('error', 'Error updating Statistic Group', error._body.message || error.statusText); });
        }
    };
    // delete category type
    StatisticGroupsComponent.prototype.deleteStatGroup = function (deleteID) {
        var _this = this;
        var check = confirm('Are you sure you want to delete this Statistic Group?');
        if (confirm) {
            // delete it
            var index_1 = this.statisticGroups.findIndex(function (item) { return item.id === deleteID; });
            this._settingsservice.deleteEntity(deleteID, this.configSettings.statisticGrpURL)
                .subscribe(function (result) {
                _this._toasterService.pop('success', 'Success', 'Statistic Group was deleted');
                _this.statisticGroups.splice(index_1, 1);
                _this._settingsservice.setStatGroups(_this.statisticGroups); // update service
            }, function (error) { _this._toasterService.pop('error', 'Error deleting Statistic Group', error._body.message || error.statusText); });
        }
    };
    StatisticGroupsComponent.prototype.getLoggedInRole = function () {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    };
    StatisticGroupsComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], StatisticGroupsComponent.prototype, "addRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('StatGroupForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatisticGroupsComponent.prototype, "statGroupForm", void 0);
    StatisticGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./statisticgroups.component.html */ "./src/app/settings/categories/statisticgroups/statisticgroups.component.html"),
            styles: [__webpack_require__(/*! ../../settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["NSSService"], _settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], app_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]])
    ], StatisticGroupsComponent);
    return StatisticGroupsComponent;
}());



/***/ }),

/***/ "./src/app/settings/categories/unitsystems/unitsystems.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/settings/categories/unitsystems/unitsystems.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <legend style=\"margin-bottom:25px;margin-top:0;\">Unit Systems</legend>\r\n</div>\r\n<button [hidden]=\"loggedInRole !== 'Administrator'\" type=\"button\" class=\"btn-blue\" (click)=\"showNewForm()\"><i class=\"fa fa-plus\"\r\n    aria-hidden=\"tru\"></i> Add New Unit System</button>\r\n\r\n<form #UnitSystemForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"unitSystems\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"col-xs-1\"></th>\r\n                    <th class=\"col-xs-2\">Unit System</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let u of unitSystems; let i = index\">\r\n                    <td>\r\n                        <div class=\"data-controls\">\r\n                            <i *ngIf=\"!u.isEditing\" title=\"Edit Unit Type\" (click)=\"EditRowClicked(i)\" class=\"fa fa-pencil\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>&nbsp;\r\n                            <i *ngIf=\"!u.isEditing\" title=\"Delete Unit Type\" (click)=\"deleteUnit(u.id)\" class=\"fa fa-times\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"u.isEditing\" title=\"Save Unit Type\" (click)=\"saveUnitSystem(u,i)\" class=\"fa fa-floppy-o\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"u.isEditing\" title=\"Cancel Edit\" (click)=\"CancelEditRowClicked(i)\" class=\"fa fa-history\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!u.isEditing\">{{ u.unitSystem }}</span>\r\n                        <span *ngIf=\"u.isEditing\"><input type=\"text\" name=\"id\" [(ngModel)]=\"u.unitSystem\"\r\n                                required></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>\r\n<br />\r\n\r\n<!-- new unit type form -->\r\n<ng-template #add let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">New Unit Type </h4>\r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <h3 class=\"modal-title\">New Unit Type</h3>\r\n        <form [formGroup]=\"newUnitSystemForm\">\r\n            <!-- Unit Type Name* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newUnitSystemForm.get('unitSystem').valid && newUnitSystemForm.get('unitSystem').dirty}\">\r\n                <label class=\"req\" for=\"unitSystem\">Unit System Name:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"unitSystem\" required>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newUnitSystemForm.get('unitSystem').valid && newUnitSystemForm.get('unitSystem').dirty\">Unit\r\n                    Unit System Name is required</div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"d('clicked')\" class=\"btn-black\">Cancel</button>\r\n            <button type=\"button\" (click)=\"createNewUnit()\" [disabled]=\"!newUnitSystemForm.valid\" class=\"btn-blue\">Create</button>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/settings/categories/unitsystems/unitsystems.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/settings/categories/unitsystems/unitsystems.component.ts ***!
  \**************************************************************************/
/*! exports provided: UnitSystemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitSystemsComponent", function() { return UnitSystemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page








var UnitSystemsComponent = /** @class */ (function () {
    function UnitSystemsComponent(_nssService, _settingsservice, _route, _fb, _modalService, router, _toasterService, _configService) {
        var _this = this;
        this._nssService = _nssService;
        this._settingsservice = _settingsservice;
        this._route = _route;
        this._fb = _fb;
        this._modalService = _modalService;
        this.router = router;
        this._toasterService = _toasterService;
        this._configService = _configService;
        this.newUnitSystemForm = _fb.group({
            unitSystem: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }
    UnitSystemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isEditing = false;
        this._settingsservice.getEntities(this.configSettings.unitSystemsURL).subscribe(function (res) {
            _this.unitSystems = res;
        });
        // get new units when new one posted/edited
        this._settingsservice.unitSystems().subscribe(function (res) {
            _this.unitSystems = res;
        });
    };
    UnitSystemsComponent.prototype.showNewForm = function () {
        var _this = this;
        this.newUnitSystemForm.controls['unitSystem'].setValue(null);
        this.showNewUnitSystemForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.CloseResult = "Closed with: " + result;
            if (_this.CloseResult) {
                _this.cancelCreateUnit();
            }
        }, function (reason) {
            _this.CloseResult = "Dismissed " + _this.getDismissReason(reason);
            if (_this.CloseResult) {
                _this.cancelCreateUnit();
            }
        });
    };
    UnitSystemsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    UnitSystemsComponent.prototype.cancelCreateUnit = function () {
        this.showNewUnitSystemForm = false;
        this.newUnitSystemForm.reset();
    };
    UnitSystemsComponent.prototype.createNewUnit = function () {
        var _this = this;
        var newUnit = this.newUnitSystemForm.value;
        this._settingsservice.postEntity(newUnit, this.configSettings.unitSystemsURL).subscribe(function (response) {
            response.isEditing = false;
            _this.unitSystems.push(response);
            _this._settingsservice.setUnitSystems(_this.unitSystems);
            _this._toasterService.pop('success', 'Success', 'Unit System was created');
            _this.cancelCreateUnit();
        }, function (error) { _this._toasterService.pop('error', 'Error creating Unit System', error._body.message || error.statusText); });
    };
    UnitSystemsComponent.prototype.EditRowClicked = function (i) {
        // from wateruse
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.unitSystems[i]); // make a copy in case they cancel
        this.unitSystems[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    };
    UnitSystemsComponent.prototype.CancelEditRowClicked = function (i) {
        this.unitSystems[i] = Object.assign({}, this.tempData);
        this.unitSystems[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.usForm.form.dirty) {
            this.usForm.reset();
        }
    };
    // edits made, save clicked
    UnitSystemsComponent.prototype.saveUnitSystem = function (u, i) {
        var _this = this;
        if (u.unitSystem === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Statistic Group', 'Unit System Name is required.');
        }
        else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.unitSystemsURL).subscribe(function (resp) {
                _this._toasterService.pop('success', 'Success', 'Unit System was updated');
                u.isEditing = false;
                _this.unitSystems[i] = u;
                _this._settingsservice.setUnitSystems(_this.unitSystems);
                _this.rowBeingEdited = -1;
                _this.isEditing = false; // set to true so create new is disabled
                if (_this.usForm.form.dirty) {
                    _this.usForm.reset();
                }
            }, function (error) { _this._toasterService.pop('error', 'Error updating Unit System', error._body.message || error.statusText); });
        }
    };
    // delete category type
    UnitSystemsComponent.prototype.deleteUnit = function (deleteID) {
        var _this = this;
        var check = confirm('Are you sure you want to delete this Unit System?');
        if (confirm) {
            // delete it
            var index_1 = this.unitSystems.findIndex(function (item) { return item.id === deleteID; });
            this._settingsservice.deleteEntity(deleteID, this.configSettings.unitSystemsURL)
                .subscribe(function (result) {
                _this._toasterService.pop('success', 'Success', 'Unit System was deleted');
                _this.unitSystems.splice(index_1, 1);
                _this._settingsservice.setUnitSystems(_this.unitSystems); // update service
            }, function (error) { _this._toasterService.pop('error', 'Error deleting Unit', error._body.message || error.statusText); });
        }
    };
    UnitSystemsComponent.prototype.getLoggedInRole = function () {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    };
    UnitSystemsComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], UnitSystemsComponent.prototype, "addRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('UnitSystemForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UnitSystemsComponent.prototype, "usForm", void 0);
    UnitSystemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./unitsystems.component.html */ "./src/app/settings/categories/unitsystems/unitsystems.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["NSSService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            app_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]])
    ], UnitSystemsComponent);
    return UnitSystemsComponent;
}());



/***/ }),

/***/ "./src/app/settings/categories/unittypes/unittypes.component.html":
/*!************************************************************************!*\
  !*** ./src/app/settings/categories/unittypes/unittypes.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <legend style=\"margin-bottom:25px;margin-top:0;\">Unit Types</legend>\r\n</div>\r\n<button [hidden]=\"loggedInRole !== 'Administrator'\" type=\"button\" class=\"btn-blue\" (click)=\"showNewUnitTypeForm()\"><i class=\"fa fa-plus\"\r\n    aria-hidden=\"tru\"></i> Add New Unit Type</button>\r\n\r\n<form #UnitTypeForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"unitTypes\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"col-xs-1\"></th>\r\n                    <th>Name</th>\r\n                    <th class=\"col-xs-4\">Abbreviation</th>\r\n                    <th class=\"col-xs-4\">Unit System Type ID</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let u of unitTypes; let i = index\">\r\n                    <td>\r\n                        <div class=\"data-controls\">\r\n                            <i *ngIf=\"!u.isEditing\" title=\"Edit Unit Type\" (click)=\"EditRowClicked(i)\" class=\"fa fa-pencil\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>&nbsp;\r\n                            <i *ngIf=\"!u.isEditing\" title=\"Delete Unit Type\" (click)=\"deleteUnit(u.id)\" class=\"fa fa-times\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"u.isEditing\" title=\"Save Unit Type\" (click)=\"saveUnit(u,i)\" class=\"fa fa-floppy-o\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"u.isEditing\" title=\"Cancel Edit\" (click)=\"CancelEditRowClicked(i)\" class=\"fa fa-history\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!u.isEditing\">{{ u.name }}</span>\r\n                        <span *ngIf=\"u.isEditing\"><input type=\"text\" name=\"name\" [(ngModel)]=\"u.name\" required></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!u.isEditing\">{{ u.abbreviation }}</span>\r\n                        <span *ngIf=\"u.isEditing\"><input type=\"text\" rows=\"3\" [(ngModel)]=\"u.abbreviation\" name=\"abbreviation\"></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!u.isEditing\">{{ u.unitSystemTypeID }}</span>\r\n                        <span *ngIf=\"u.isEditing\"><select class=\"form-control\" name=\"unitSystemTypeID\" [(ngModel)]=\"u.unitSystemTypeID\">\r\n                                <option *ngFor=\"let usys of unitSystems\" [value]=\"usys.id\">{{usys.unitSystem}}</option>\r\n                            </select></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>\r\n<br />\r\n\r\n<!-- new unit type form -->\r\n<ng-template #add let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">New Unit Type </h4>\r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <h3 class=\"modal-title\">New Unit Type</h3>\r\n        <form [formGroup]=\"newUnitForm\">\r\n            <!-- Unit Type Name* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newUnitForm.get('name').valid && newUnitForm.get('name').dirty}\">\r\n                <label class=\"req\" for=\"name\">Name:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\" required>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newUnitForm.get('name').valid && newUnitForm.get('name').dirty\">Unit\r\n                    Name is required</div>\r\n            </div>\r\n\r\n            <!-- Abbreviation* -->\r\n            <div class=\"form-group\">\r\n                <label class=\"req\" for=\"abbreviation\">Abbr:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"abbreviation\">\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newUnitForm.get('abbreviation').valid && newUnitForm.get('abbreviation').dirty\">Abbreviation\r\n                    is required</div>\r\n            </div>\r\n\r\n            <!-- Unit System Type ID -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newUnitForm.get('unitSystemTypeID').valid && newUnitForm.get('unitSystemTypeID').dirty}\">\r\n                <label class=\"req\" for=\"unitSystemTypeID\">Unit System Type ID:</label>\r\n                <select class=\"form-control\" formControlName=\"unitSystemTypeID\">\r\n                    <option *ngFor=\"let usys of unitSystems\" [value]=\"usys.id\">{{usys.unitSystem}}</option>\r\n                </select>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newUnitForm.get('unitSystemTypeID').valid && newUnitForm.get('unitSystemTypeID').dirty\">Code\r\n                    is required</div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"d('clicked')\" class=\"btn-black\">Cancel</button>\r\n            <button type=\"button\" (click)=\"createNewUnit()\" [disabled]=\"!newUnitForm.valid\" class=\"btn-blue\">Create</button>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/settings/categories/unittypes/unittypes.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/settings/categories/unittypes/unittypes.component.ts ***!
  \**********************************************************************/
/*! exports provided: UnitTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitTypesComponent", function() { return UnitTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page








var UnitTypesComponent = /** @class */ (function () {
    function UnitTypesComponent(_nssService, _settingsservice, _route, _fb, _modalService, router, _toasterService, _configService) {
        var _this = this;
        this._nssService = _nssService;
        this._settingsservice = _settingsservice;
        this._route = _route;
        this._fb = _fb;
        this._modalService = _modalService;
        this.router = router;
        this._toasterService = _toasterService;
        this._configService = _configService;
        this.newUnitForm = _fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            abbreviation: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
            unitSystemTypeID: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }
    UnitTypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isEditing = false;
        this._settingsservice.getEntities(this.configSettings.unitsURL).subscribe(function (res) {
            _this.unitTypes = res;
        });
        this._settingsservice.getEntities(this.configSettings.unitSystemsURL).subscribe(function (usys) {
            _this.unitSystems = usys;
        });
        // get new units when new one posted/edited
        this._settingsservice.units().subscribe(function (res) {
            _this.unitTypes = res;
        });
    };
    UnitTypesComponent.prototype.showNewUnitTypeForm = function () {
        var _this = this;
        this.newUnitForm.controls['name'].setValue(null);
        this.newUnitForm.controls['abbreviation'].setValue(null);
        this.newUnitForm.controls['unitSystemTypeID'].setValue(null);
        this.showNewUnitForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.CloseResult = "Closed with: " + result;
            if (_this.CloseResult) {
                _this.cancelCreateUnit();
            }
        }, function (reason) {
            _this.CloseResult = "Dismissed " + _this.getDismissReason(reason);
            if (_this.CloseResult) {
                _this.cancelCreateUnit();
            }
        });
    };
    UnitTypesComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    UnitTypesComponent.prototype.cancelCreateUnit = function () {
        this.showNewUnitForm = false;
        this.newUnitForm.reset();
    };
    UnitTypesComponent.prototype.createNewUnit = function () {
        var _this = this;
        var newUnit = this.newUnitForm.value;
        this._settingsservice.postEntity(newUnit, this.configSettings.unitsURL)
            .subscribe(function (response) {
            response.isEditing = false;
            _this.unitTypes.push(response);
            _this._settingsservice.setUnits(_this.unitTypes);
            _this._toasterService.pop('success', 'Success', 'Unit was created');
            _this.cancelCreateUnit();
        }, function (error) { _this._toasterService.pop('error', 'Error creating Unit', error._body.message || error.statusText); });
    };
    UnitTypesComponent.prototype.EditRowClicked = function (i) {
        // from wateruse
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.unitTypes[i]); // make a copy in case they cancel
        this.unitTypes[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    };
    UnitTypesComponent.prototype.CancelEditRowClicked = function (i) {
        this.unitTypes[i] = Object.assign({}, this.tempData);
        this.unitTypes[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.unitForm.form.dirty) {
            this.unitForm.reset();
        }
    };
    // edits made, save clicked
    UnitTypesComponent.prototype.saveUnit = function (u, i) {
        var _this = this;
        if (u.name === undefined || u.abbreviation === undefined || u.unitSystemTypeID === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Statistic Group', 'Name, abbreviation and unit system ID are required.');
        }
        else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.unitsURL).subscribe(function (resp) {
                _this._toasterService.pop('success', 'Success', 'Unit was updated');
                u.isEditing = false;
                _this.unitTypes[i] = u;
                _this._settingsservice.setUnits(_this.unitTypes);
                _this.rowBeingEdited = -1;
                _this.isEditing = false; // set to true so create new is disabled
                if (_this.unitForm.form.dirty) {
                    _this.unitForm.reset();
                }
            }, function (error) { _this._toasterService.pop('error', 'Error updating Unit', error._body.message || error.statusText); });
        }
    };
    // delete category type
    UnitTypesComponent.prototype.deleteUnit = function (deleteID) {
        var _this = this;
        var check = confirm('Are you sure you want to delete this Unit Type?');
        if (confirm) {
            // delete it
            var index_1 = this.unitTypes.findIndex(function (item) { return item.id === deleteID; });
            this._settingsservice.deleteEntity(deleteID, this.configSettings.unitsURL)
                .subscribe(function (result) {
                _this._toasterService.pop('success', 'Success', 'Unit was deleted');
                _this.unitTypes.splice(index_1, 1);
                _this._settingsservice.setUnits(_this.unitTypes); // update service
            }, function (error) { _this._toasterService.pop('error', 'Error deleting Unit', error._body.message || error.statusText); });
        }
    };
    UnitTypesComponent.prototype.getLoggedInRole = function () {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    };
    UnitTypesComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], UnitTypesComponent.prototype, "addRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('UnitTypeForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UnitTypesComponent.prototype, "unitForm", void 0);
    UnitTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./unittypes.component.html */ "./src/app/settings/categories/unittypes/unittypes.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["NSSService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            app_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]])
    ], UnitTypesComponent);
    return UnitTypesComponent;
}());



/***/ }),

/***/ "./src/app/settings/categories/variabletypes/variabletypes.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/settings/categories/variabletypes/variabletypes.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <legend style=\"margin-bottom:25px;margin-top:0;\">Variable Types</legend>\r\n</div>\r\n<button [hidden]=\"loggedInRole !== 'Administrator'\" type=\"button\" class=\"btn-blue\" (click)=\"showNewVariableForm()\"><i class=\"fa fa-plus\"\r\n    aria-hidden=\"tru\"></i> Add New Variable Type</button>\r\n\r\n<form #VariableTypeForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"variableTypes\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"col-xs-1\"></th>\r\n                    <th class=\"col-xs-4\">Name</th>\r\n                    <th>Description</th>\r\n                    <th class=\"col-xs-1\">Code</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let v of variableTypes; let i = index\">\r\n                    <td>\r\n                        <div class=\"data-controls\">\r\n                            <i *ngIf=\"!v.isEditing\" title=\"Edit Variable Type\" (click)=\"EditRowClicked(i)\" class=\"fa fa-pencil\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>&nbsp;\r\n                            <i *ngIf=\"!v.isEditing\" title=\"Delete Variable Type\" (click)=\"deleteVariable(v.id)\" class=\"fa fa-times\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"v.isEditing\" title=\"Save Variable Type\" (click)=\"saveVariable(v,i)\" class=\"fa fa-floppy-o\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                            <i *ngIf=\"v.isEditing\" title=\"Cancel Edit\" (click)=\"CancelEditRowClicked(i)\" class=\"fa fa-history\"\r\n                                aria-hidden=\"true\" style=\"cursor:pointer;padding:5px;\"></i>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!v.isEditing\">{{ v.name }}</span>\r\n                        <span *ngIf=\"v.isEditing\"><input type=\"text\" name=\"name\" [(ngModel)]=\"v.name\" required></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!v.isEditing\">{{ v.description }}</span>\r\n                        <span *ngIf=\"v.isEditing\"><textarea rows=\"3\" [(ngModel)]=\"v.description\" name=\"description\"></textarea></span>\r\n                    </td>\r\n                    <td>\r\n                        <span *ngIf=\"!v.isEditing\">{{ v.code }}</span>\r\n                        <span *ngIf=\"v.isEditing\"><input type=\"text\" name=\"code\" [(ngModel)]=\"v.code\" required></span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</form>\r\n<br />\r\n\r\n<!-- new variable type form -->\r\n<ng-template #add let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">New Variable Type </h4>\r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <h3 class=\"modal-title\">New Variable Type</h3>\r\n        <form [formGroup]=\"newVarForm\">\r\n            <!-- Variable Type Name* -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newVarForm.get('name').valid && newVarForm.get('name').dirty}\">\r\n                <label class=\"req\" for=\"name\">Name:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"name\" required>\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newVarForm.get('name').valid && newVarForm.get('name').dirty\">Variable\r\n                    Name is required</div>\r\n            </div>\r\n\r\n            <!-- Description -->\r\n            <div class=\"form-group\">\r\n                <label for=\"description\">Description:</label>\r\n                <textarea class=\"form-control\" rows=\"3\" placeholder=\"\" formControlName=\"description\"></textarea>\r\n            </div>\r\n\r\n            <!-- Short Name -->\r\n            <div class=\"form-group required\" [ngClass]=\"{'form-invalid': !newVarForm.get('code').valid && newVarForm.get('code').dirty}\">\r\n                <label class=\"req\" for=\"code\">Code:</label>\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"code\">\r\n                <div class=\"input-invalid-warning\" *ngIf=\"!newVarForm.get('code').valid && newVarForm.get('code').dirty\">Code\r\n                    is required</div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"d('closed')\" class=\"btn-black\">Cancel</button>\r\n            <button type=\"button\" (click)=\"createNewVariableType()\" [disabled]=\"!newVarForm.valid\" class=\"btn-blue\">Create</button>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/settings/categories/variabletypes/variabletypes.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/settings/categories/variabletypes/variabletypes.component.ts ***!
  \******************************************************************************/
/*! exports provided: VariableTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableTypesComponent", function() { return VariableTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page








var VariableTypesComponent = /** @class */ (function () {
    function VariableTypesComponent(_nssService, _settingsservice, _route, _fb, _modalService, router, _toasterService, _configService) {
        var _this = this;
        this._nssService = _nssService;
        this._settingsservice = _settingsservice;
        this._route = _route;
        this._fb = _fb;
        this._modalService = _modalService;
        this.router = router;
        this._toasterService = _toasterService;
        this._configService = _configService;
        this.newVarForm = _fb.group({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
            'code': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }
    VariableTypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._settingsservice.getEntities(this.configSettings.variablesURL).subscribe(function (res) {
            _this.variableTypes = res;
        });
        this._settingsservice.variables().subscribe(function (res) {
            _this.variableTypes = res;
        });
    };
    VariableTypesComponent.prototype.showNewVariableForm = function () {
        var _this = this;
        this.newVarForm.controls['name'].setValue(null);
        this.newVarForm.controls['description'].setValue(null);
        this.newVarForm.controls['code'].setValue(null);
        this.showNewVarForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.CloseResult = "Closed with: " + result;
            if (_this.CloseResult) {
                _this.cancelCreateVariableType();
            }
        }, function (reason) {
            _this.CloseResult = "Dismissed " + _this.getDismissReason(reason);
            if (_this.CloseResult) {
                _this.cancelCreateVariableType();
            }
        });
    };
    VariableTypesComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    VariableTypesComponent.prototype.cancelCreateVariableType = function () {
        this.showNewVarForm = false;
        this.newVarForm.reset();
    };
    VariableTypesComponent.prototype.createNewVariableType = function () {
        var _this = this;
        var newItem = this.newVarForm.value;
        this._settingsservice.postEntity(newItem, this.configSettings.variablesURL)
            .subscribe(function (response) {
            response.isEditing = false;
            _this.variableTypes.push(response);
            _this._settingsservice.setVariables(_this.variableTypes);
            _this._toasterService.pop('success', 'Success', 'Variable was created');
            _this.cancelCreateVariableType();
        }, function (error) { _this._toasterService.pop('error', 'Error creating Variable', error._body.message || error.statusText); });
    };
    VariableTypesComponent.prototype.EditRowClicked = function (i) {
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.variableTypes[i]); // make a copy in case they cancel
        this.variableTypes[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    };
    VariableTypesComponent.prototype.CancelEditRowClicked = function (i) {
        this.variableTypes[i] = Object.assign({}, this.tempData);
        this.variableTypes[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.varForm.form.dirty) {
            this.varForm.reset();
        }
    };
    // edits made, save clicked
    VariableTypesComponent.prototype.saveVariable = function (u, i) {
        var _this = this;
        if (u.name === undefined || u.description === undefined || u.code === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Statistic Group', 'Name, description and Code are required.');
        }
        else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.variablesURL).subscribe(function (resp) {
                _this._toasterService.pop('success', 'Success', 'Variable was updated');
                u.isEditing = false;
                _this.variableTypes[i] = u;
                _this._settingsservice.setVariables(_this.variableTypes);
                _this.rowBeingEdited = -1;
                _this.isEditing = false; // set to true so create new is disabled
                if (_this.varForm.form.dirty) {
                    _this.varForm.reset();
                }
            }, function (error) { _this._toasterService.pop('error', 'Error updating Variable', error._body.message || error.statusText); });
        }
    };
    // delete category type
    VariableTypesComponent.prototype.deleteVariable = function (deleteID) {
        var _this = this;
        var check = confirm('Are you sure you want to delete this Variable?');
        if (confirm) {
            // delete it
            var index_1 = this.variableTypes.findIndex(function (item) { return item.id === deleteID; });
            this._settingsservice.deleteEntity(deleteID, this.configSettings.variablesURL)
                .subscribe(function (result) {
                _this._toasterService.pop('success', 'Success', 'Variable was deleted');
                _this.variableTypes.splice(index_1, 1);
                _this._settingsservice.setVariables(_this.variableTypes); // update service
            }, function (error) { _this._toasterService.pop('error', 'Error deleting Variable', error._body.message || error.statusText); });
        }
    };
    VariableTypesComponent.prototype.getLoggedInRole = function () {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    };
    VariableTypesComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('add'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], VariableTypesComponent.prototype, "addRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('VariableTypeForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VariableTypesComponent.prototype, "varForm", void 0);
    VariableTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./variabletypes.component.html */ "./src/app/settings/categories/variabletypes/variabletypes.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["NSSService"], _settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            app_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]])
    ], VariableTypesComponent);
    return VariableTypesComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .page-padding { \r\n    display: block;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 55px;\r\n    padding-top: 75px;\r\n }\r\n\r\n #resource-list #sidebar-wrapper {\r\n    display: inline-block;\r\n    width: 20%;\r\n    width: calc(0px + 200px);\r\n    vertical-align: top;\r\n    left: 0;\r\n    margin: 0 auto;\r\n    background-color: transparent;\r\n    background: none;\r\n    background-image: none;\r\n    position: relative !important;\r\n}\r\n\r\n #resource-list #page-content-wrapper {\r\n    width: 80%;\r\n    width: calc(100% - 200px);\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 20px;\r\n    position: relative;\r\n}\r\n\r\n h1 {\r\n    font-size: 2.5rem !important;\r\n}\r\n\r\n .hidden {\r\n    display: none;\r\n}\r\n\r\n .btn-blue {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztJQUNHLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0NBRUQ7SUFDRyxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsUUFBUTtJQUNSLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7Q0FDakM7O0NBRUQ7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLG1CQUFtQjtDQUN0Qjs7Q0FFRDtJQUNJLDZCQUE2QjtDQUNoQzs7Q0FFRDtJQUNJLGNBQWM7Q0FDakI7O0NBRUQ7SUFDSSxrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5wYWdlLXBhZGRpbmcgeyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogNTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gfVxyXG5cclxuICNyZXNvdXJjZS1saXN0ICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIHdpZHRoOiBjYWxjKDBweCArIDIwMHB4KTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNyZXNvdXJjZS1saXN0ICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tYmx1ZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- toaster directive -->\r\n<toaster-container></toaster-container>\r\n<!-- / toaster directive -->\r\n\r\n<div class=\"page-padding\">\r\n    <div id=\"resource-list\">\r\n        <div id=\"sidebar-wrapper\">\r\n            <h1>Lookups</h1>\r\n            <ul class=\"sidebar-list-links\">\r\n                <li><a [routerLink]=\"['citations']\" routerLinkActive=\"active\">Citations</a></li>\r\n                <li><a [class.hidden]=\"loggedInRole !== 'Administrator'\" [routerLink]=\"['errors']\" routerLinkActive=\"active\">Errors</a></li>\r\n                <li><a [class.hidden]=\"loggedInRole !== 'Administrator'\" [routerLink]=\"['managers']\" routerLinkActive=\"active\">Managers</a></li>\r\n                <li><a [class.hidden]=\"loggedInRole !== 'Administrator'\" [routerLink]=\"['regions']\"  routerLinkActive=\"active\">Regions</a></li>\r\n                <li><a [routerLink]=\"['regressionregions']\" routerLinkActive=\"active\">Regression Regions</a></li>\r\n                <li><a [routerLink]=\"['regressiontypes']\" routerLinkActive=\"active\">Regression Types (Statistics)</a></li>\r\n                <li><a [class.hidden]=\"loggedInRole !== 'Administrator'\" [routerLink]=\"['roles']\"  routerLinkActive=\"active\">Roles</a></li>\r\n                <li><a [routerLink]=\"['scenarios']\" routerLinkActive=\"active\">Scenarios</a></li>\r\n                <li><a [routerLink]=\"['statisticgroups']\" routerLinkActive=\"active\">Statistic Groups</a></li>\r\n                <li><a [routerLink]=\"['unittypes']\" routerLinkActive=\"active\">Unit Types</a></li>\r\n                <li><a [routerLink]=\"['unitsystems']\" routerLinkActive=\"active\">Unit Systems</a></li>\r\n                <li><a [routerLink]=\"['variabletypes']\"  routerLinkActive=\"active\">Variable Types</a></li>\r\n            </ul>\r\n        </div>\r\n    \r\n        <div id=\"page-content-wrapper\" class=\"pull-right\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _shared_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page








var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(_nssService, _http, _configService, _authService, _toasterService, router) {
        var _this = this;
        this._nssService = _nssService;
        this._http = _http;
        this._configService = _configService;
        this._authService = _authService;
        this._toasterService = _toasterService;
        this.router = router;
        this.jsonHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ Accept: 'application/json', 'Content-Type': 'application/json' });
        this.configSettings = this._configService.getConfiguration();
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.getLoggedInRole();
            }
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('credentials') === undefined) {
            this.router.navigate(['/']);
        }
        this.getLoggedInRole();
        // subscribe to getToast
        this._nssService.getToast().subscribe(function (t) {
            _this.toast = t;
            _this._toasterService.pop(_this.toast);
        });
    };
    SettingsComponent.prototype.getServices = function () {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: this.jsonHeader });
        this._http
            .get(this.configSettings.baseURL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (r) {
            console.log(r);
        });
    };
    SettingsComponent.prototype.handleError = function (error) {
        var errMsg = error.message ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errMsg);
    };
    SettingsComponent.prototype.getLoggedInRole = function () {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.navigationSubscription.unsubscribe();
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_app_service__WEBPACK_IMPORTED_MODULE_6__["NSSService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- settings.service..ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: services to get/store/post/put/delete via http and subjects used throughout the application






var SettingsService = /** @class */ (function () {
    function SettingsService(_http, _configService) {
        this._http = _http;
        this._configService = _configService;
        this.authHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('credentials')
        });
        // SUBJECTS //////////////////////////////////////
        this._regionSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._statisticGroupSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._regRegionSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._regTypeSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._scenarioSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._variableTypeSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._unitTypeSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._unitSystemSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._managersSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._citationsSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._errorsSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._rolesSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.configSettings = this._configService.getConfiguration();
    }
    // GETTERS /////////////////////////////////////////////
    SettingsService.prototype.regions = function () {
        return this._regionSubject.asObservable();
    };
    SettingsService.prototype.statisticGroups = function () {
        return this._statisticGroupSubject.asObservable();
    };
    SettingsService.prototype.regRegions = function () {
        return this._regRegionSubject.asObservable();
    };
    SettingsService.prototype.regTypes = function () {
        return this._regTypeSubject.asObservable();
    };
    SettingsService.prototype.scenarios = function () {
        return this._scenarioSubject.asObservable();
    };
    SettingsService.prototype.variables = function () {
        return this._variableTypeSubject.asObservable();
    };
    SettingsService.prototype.units = function () {
        return this._unitTypeSubject.asObservable();
    };
    SettingsService.prototype.unitSystems = function () {
        return this._unitSystemSubject.asObservable();
    };
    SettingsService.prototype.managers = function () {
        return this._managersSubject.asObservable();
    };
    SettingsService.prototype.citations = function () {
        return this._citationsSubject.asObservable();
    };
    SettingsService.prototype.errors = function () {
        return this._errorsSubject.asObservable();
    };
    SettingsService.prototype.roles = function () {
        return this._rolesSubject.asObservable();
    };
    // HTTP REQUESTS ////////////////////////////////////
    // ------------ GETS ---------------------------
    SettingsService.prototype.getEntities = function (url) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.authHeader });
        return this._http
            .get(this.configSettings.baseURL + url, options)
            .map(function (res) { if (res) {
            return res.json();
        } })
            .catch(this.errorHandler);
    };
    // ------------ POSTS ------------------------------
    SettingsService.prototype.postEntity = function (entity, url) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.authHeader });
        return this._http
            .post(this.configSettings.baseURL + url, entity, options)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    // ------------ PUTS --------------------------------
    SettingsService.prototype.putEntity = function (id, entity, url) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.authHeader });
        return this._http
            .put(this.configSettings.baseURL + url + '/' + id, entity, options)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    // ------------ DELETES ------------------------------
    SettingsService.prototype.deleteEntity = function (id, url) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.authHeader });
        return this._http.delete(this.configSettings.baseURL + url + '/' + id, options)
            .catch(this.errorHandler);
    };
    SettingsService.prototype.errorHandler = function (error) {
        if (error._body !== '') {
            error._body = JSON.parse(error._body);
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
    };
    // SETTERS ///////////////////////////////////////////
    SettingsService.prototype.setRegions = function (r) {
        this._regionSubject.next(r);
    };
    SettingsService.prototype.setStatGroups = function (s) {
        this._statisticGroupSubject.next(s);
    };
    SettingsService.prototype.setRegRegions = function (r) {
        this._regRegionSubject.next(r);
    };
    SettingsService.prototype.setRegTypes = function (r) {
        this._regTypeSubject.next(r);
    };
    SettingsService.prototype.setScenarios = function (s) {
        this._scenarioSubject.next(s);
    };
    SettingsService.prototype.setVariables = function (v) {
        this._variableTypeSubject.next(v);
    };
    SettingsService.prototype.setUnits = function (u) {
        this._unitTypeSubject.next(u);
    };
    SettingsService.prototype.setUnitSystems = function (u) {
        this._unitSystemSubject.next(u);
    };
    SettingsService.prototype.setManagers = function (m) {
        this._managersSubject.next(m);
    };
    SettingsService.prototype.setCitations = function (c) {
        this._citationsSubject.next(c);
    };
    SettingsService.prototype.setErrors = function (e) {
        this._errorsSubject.next(e);
    };
    SettingsService.prototype.setRoles = function (r) {
        this._rolesSubject.next(r);
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], app_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/shared/about/about.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/about/about.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body p {\r\n    padding-top: 15px;\r\n}\r\n.modal-title {\r\n    color: #6e7490;\r\n    padding-top: 0;\r\n    font-size: 21px!important;\r\n}\r\n.modal-footer {    \r\n    align-items: center;\r\n    text-align: center;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHAge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuLm1vZGFsLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjNmU3NDkwO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBmb250LXNpemU6IDIxcHghaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1mb290ZXIgeyAgICBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/about/about.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/about/about.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #about let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <div class=\"col-xs-12\">\r\n            <h4 class=\"modal-title pull-left\">About National Streamflow Statistics client application v{{appVersion}}</h4>  \r\n            <button class=\"close pull-right\" (click)=\"d('closed')\">x</button>                \r\n        </div>  \r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <ngb-tabset>\r\n            <ngb-tab>\r\n                <ng-template ngbTabTitle><i class=\"fa fa-question-circle\"></i>&nbsp;&nbsp;About</ng-template>                    \r\n                <ng-template ngbTabContent>\r\n                    <h2 style=\"padding-top:2em\">About National Streamflow Statistics (NSS) client application.</h2>\r\n                    <p>\r\n                        Spicy jalapeno bacon ipsum dolor amet ea short loin non, exercitation kielbasa brisket mollit alcatra rump swine boudin tempor ribeye ipsum. In \r\n                        velit in strip steak pork beef ribs. Pariatur doner spare ribs, anim velit fugiat consectetur ipsum cillum short loin tenderloin adipisicing. Leberkas \r\n                        kielbasa eu tri-tip consequat, ad laboris jowl short loin ea bacon ham hock. Turkey deserunt non tenderloin alcatra jerky pork loin shoulder fatback reprehenderit \r\n                        aute minim shank. Shank burgdoggen magna flank, qui aliqua porchetta laborum ribeye turducken pastrami labore eiusmod.\r\n                    </p>\r\n                    <p>\r\n                        Ham hock proident brisket, quis cow sausage capicola lorem ut flank. Commodo cillum et swine sed anim duis officia ullamco pariatur. Ex beef ribs eiusmod \r\n                        ground round exercitation ham hock duis meatball strip steak pork chop dolor filet mignon short loin. Excepteur sint pastrami duis, sunt hamburger occaecat \r\n                        short ribs prosciutto. Ad meatloaf shoulder aliquip pork chop swine porchetta alcatra.\r\n                    </p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab>\r\n                <ng-template ngbTabTitle><i class=\"fa fa-bell\"></i>&nbsp;&nbsp;Disclaimer</ng-template>      \r\n                <ng-template ngbTabContent>\r\n                    <p>This software is preliminary or provisional and is subject to revision. It is being provided to meet the need for timely best science. \r\n                        The software has not received final approval by the U.S. Geological Survey (USGS). No warranty, expressed or implied, is made by the USGS \r\n                        or the U.S. Government as to the functionality of the software and related material nor shall the fact of release constitute any such warranty. \r\n                        The software is provided on the condition that neither the USGS nor the U.S. Government shall be held liable for any damages resulting from \r\n                        the authorized or unauthorized use of the software.\r\n                    </p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n        </ngb-tabset>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn-black\" (click)=\"d('closed')\">\r\n            <i class=\"fa fa-close\"></i>\r\n            <span>&nbsp;&nbsp;Close</span>\r\n        </button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/shared/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModal", function() { return AboutModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
// ------------------------------------------------------------------------------
// ----- atLeast1Req.modal.ts ---------------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: modal used to show about information



var AboutModal = /** @class */ (function () {
    function AboutModal(_nssService, _modalService) {
        this._nssService = _nssService;
        this._modalService = _modalService;
    }
    AboutModal.prototype.ngOnInit = function () {
        var _this = this;
        //show the filter modal == Change Filters button was clicked in sidebar
        this.modalSubscript = this._nssService.showAboutModal.subscribe(function (show) {
            if (show)
                _this.showAboutModal();
        });
        this._nssService.getVersion.subscribe(function (v) {
            _this.appVersion = v;
        });
        this.modalElement = this.aboutModal;
    };
    AboutModal.prototype.showAboutModal = function () {
        var _this = this;
        this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(function (result) {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            _this.CloseResult = "Closed with: " + result;
        }, function (reason) {
            _this.CloseResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AboutModal.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC)
            return 'by pressing ESC';
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK)
            return 'by clicking on a backdrop';
        else
            return "with: " + reason;
    };
    AboutModal.prototype.ngOnDestroy = function () {
        this.modalSubscript.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('about'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AboutModal.prototype, "aboutModal", void 0);
    AboutModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aboutModal',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/shared/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/shared/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__["NSSService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], AboutModal);
    return AboutModal;
}());



/***/ }),

/***/ "./src/app/shared/components/loader.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/components/loader.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-hidden {\r\n    visibility: hidden;\r\n}\r\n.loader-overlay {\r\n    position: absolute;\r\n    width:100%;\r\n    height: 100%;\r\n    top:0;\r\n    left: 0;\r\n    z-index: 500000;\r\n}\r\n.page-loader {\r\n    position: absolute!important;\r\n    width:100%;\r\n    height: 100%;\r\n    opacity: .6;\r\n    z-index: 5000;\r\n    background-color: rgba(0,0,30,0.6);\r\n    background-image:url('https://wim.usgs.gov/website-assets/branding/usgsanimated.svg');\r\n    display: block !important;\r\n    background-repeat: no-repeat;\r\n    background-size: 120px auto;\r\n    background-position: center center;\r\n}\r\n.page-loader:after{\r\n  content: 'Loading...';\r\n  position: fixed;\r\n  top: 64%;\r\n  font-size: 22px;\r\n  color: white;\r\n  width: 100%;\r\n  text-align: center;\r\n  z-index: 5001;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLE1BQU07SUFDTixRQUFRO0lBQ1IsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLG1DQUFtQztJQUNuQyxzRkFBc0Y7SUFDdEYsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsbUNBQW1DO0NBQ3RDO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLWhpZGRlbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmxvYWRlci1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA1MDAwMDA7XHJcbn1cclxuLnBhZ2UtbG9hZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMzAsMC42KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL3dpbS51c2dzLmdvdi93ZWJzaXRlLWFzc2V0cy9icmFuZGluZy91c2dzYW5pbWF0ZWQuc3ZnJyk7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuLnBhZ2UtbG9hZGVyOmFmdGVye1xyXG4gIGNvbnRlbnQ6ICdMb2FkaW5nLi4uJztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA2NCU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogNTAwMTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/components/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/shared/components/loader.service.ts");
// ------------------------------------------------------------------------------
// ------------ loader.component ------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:     Tonia Roddick USGS Web Informatics and Mapping
//              Erik Myers USGS Web Informatics and Mapping
// purpose:     selector component that sits within the mapview.component.html page. 
//              Is a loading div that covers the whole page until the geojson is displayed on the map.



var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(_loaderService) {
        this._loaderService = _loaderService;
        this.show = true; //start it showing until the geojson comes back
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscription that updates the class on the div to show/hide it
        this.subscription = this._loaderService.loaderState.subscribe(function (state) {
            _this.show = state;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'loader-div',
            template: "<div [class.loader-hidden]=\"!show\">\n                  <div class=\"page-loader\" id=\"page-loader\"></div>\n                </div>",
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/shared/components/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loader.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/components/loader.service.ts ***!
  \*****************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// ------------------------------------------------------------------------------
// ------------ loader.service --------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:     Tonia Roddick USGS Web Informatics and Mapping
//              Erik Myers USGS Web Informatics and Mapping
// purpose:     Service for updating boolean subjects that are subscribed to for show/hiding the loading div



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this._loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.loaderState = this._loaderSubject.asObservable();
    }
    // whole page initial load
    LoaderService.prototype.showLoader = function () {
        this._loaderSubject.next(true);
    };
    LoaderService.prototype.hideLoader = function () {
        this._loaderSubject.next(false);
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/shared/guards/admin.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/guards/admin.guard.ts ***!
  \**********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
// ------------------------------------------------------------------------------
// ----- auth.guard.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: guard to ensure user is logged in before allowing activation of route



var AdminGuard = /** @class */ (function () {
    function AdminGuard(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin();
    };
    AdminGuard.prototype.checkLogin = function () {
        if (localStorage.getItem('credentials') && localStorage.getItem('setupTime') !== null && !this.checkSetupTime() &&
            localStorage.getItem('loggedInRole') === 'Administrator') {
            return true;
        }
        // if it gets here it means they're not an admin
        // navigate to the settings page
        this._router.navigate(['/settings']);
        return false;
    };
    // need to find out if localstorage item 'setupTime' is more than 12 hours ago
    AdminGuard.prototype.checkSetupTime = function () {
        var tooOld = false;
        var twentyFourHours = 12 * 60 * 60 * 1000;
        var now = new Date().getTime();
        var setupTime = Number(localStorage.getItem('setupTime'));
        if (now - setupTime > twentyFourHours) {
            // is it greater than 12 hours
            tooOld = true;
            this._authService.removeUserInfo();
        }
        return tooOld;
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
// ------------------------------------------------------------------------------
// ----- auth.guard.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: guard to ensure user is logged in before allowing activation of route



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin();
    };
    AuthGuard.prototype.canActivateChild = function (_actRoute, _state) {
        return this.canActivate(_actRoute, _state);
    };
    AuthGuard.prototype.checkLogin = function () {
        if (localStorage.getItem('credentials') && localStorage.getItem('setupTime') !== null && !this.checkSetupTime()) {
            return true;
        }
        // if it gets here..they are not logged in
        // store the attempted url for redirecting
        //   this._authService.redirectUrl = url;
        this._authService.removeUserInfo();
        localStorage.clear();
        // navigate to the login page with extras
        this._router.navigate(['/']);
        return false;
    };
    // need to find out if localstorage item 'setupTime' is more than 12 hours ago
    AuthGuard.prototype.checkSetupTime = function () {
        var tooOld = false;
        var twentyFourHours = 12 * 60 * 60 * 1000;
        var now = new Date().getTime();
        var setupTime = Number(localStorage.getItem('setupTime'));
        if (now - setupTime > twentyFourHours) {
            // is it greater than 12 hours
            tooOld = true;
            this._authService.removeUserInfo();
        }
        return tooOld;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/app.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/app.service.ts ***!
  \************************************************/
/*! exports provided: NSSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NSSService", function() { return NSSService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");








var NSSService = /** @class */ (function () {
    function NSSService(_http, _configService) {
        this._http = _http;
        this._configService = _configService;
        this.jsonHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ Accept: 'application/json', 'Content-Type': 'application/json' });
        // -+-+-+-+-+-+-+-+-+ app version (gotten from environment.ts) -+-+-+-+-+-+-+-+
        this.appversion = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        // -+-+-+-+-+-+-+-+-+ about modal -+-+-+-+-+-+-+-+
        this._showHideAboutModal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._showHideCreateModal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._showHideLoginModal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.hydroBind = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.chartBind = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.freqBind = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.toastBind = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // -+-+-+-+-+-+ region section -+-+-+-+-+-+-+
        this._regionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); //array of regions that sidebar and mainview use
        this._selectedRegion = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](''); //selectedregion
        // -+-+-+-+-+-+ end region section -+-+-+-+-+-+-+
        // -+-+-+-+-+-+ regressionregion -+-+-+-+-+-+-+
        this._regressionRegionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._selectedRegRegions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        // -+-+-+-+-+-+ end regressionRegion section -+-+-+-+-+-+-+
        // -+-+-+-+-+-+ statisticgroups section -+-+-+-+-+-+-+-+-+-+
        this._statisticGroupSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // -+-+-+-+-+-+ end statisticgroups section -+-+-+-+-+-+-+-+-+-+
        // -+-+-+-+-+-+ regressionTypes -+-+-+-+-+-+-+-+-+-+-+-+
        this._regressionTypeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // -+-+-+-+-+-+ end regressionTypes section -+-+-+-+-+-+-+-+-+-+
        // -+-+-+-+-+-+ Scenarios section -+-+-+-+-+-+-+-+-+-+
        this._scenarioSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.configSettings = this._configService.getConfiguration();
        this.getRegions();
    }
    NSSService.prototype.setVersion = function (val) {
        this.appversion.next(val);
    };
    Object.defineProperty(NSSService.prototype, "getVersion", {
        get: function () {
            return this.appversion.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NSSService.prototype.setAboutModal = function (val) {
        this._showHideAboutModal.next(val);
    };
    Object.defineProperty(NSSService.prototype, "showAboutModal", {
        // show the filter modal in the mainview
        get: function () {
            return this._showHideAboutModal.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NSSService.prototype.setCreateModal = function (val) {
        this._showHideCreateModal.next(val);
    };
    Object.defineProperty(NSSService.prototype, "showCreateModal", {
        // show the filter modal in the mainview
        get: function () {
            return this._showHideCreateModal.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NSSService.prototype.setLoginModal = function (val) {
        this._showHideLoginModal.next(val);
    };
    Object.defineProperty(NSSService.prototype, "showLoginModal", {
        // show the filter modal in the mainview
        get: function () {
            return this._showHideLoginModal.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NSSService.prototype, "loginType", {
        get: function () {
            // this will return the login type (manager v. admin)
            return '';
        },
        enumerable: true,
        configurable: true
    });
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
        this.frequency = 'newOne';
        this.freqBind.next('newOne');
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
            // getter (regions)
            return this._regionSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // setter (selectedRegion)
    NSSService.prototype.setSelectedRegion = function (v) {
        if (v == this._selectedRegion.getValue())
            return;
        this._selectedRegion.next(v);
        this._selectedRegRegions.next([]);
        this._selectedStatGroups = [];
        this._selectedRegressionTypes = [];
        this.chartBind.next('');
        // go get all the other stuff (regressionregions, regressiontypes,statisticgroups and scenarios
        this.initializeRegion();
    };
    Object.defineProperty(NSSService.prototype, "selectedRegion", {
        // getter (selectedRegion)
        get: function () {
            return this._selectedRegion.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // get all regions
    NSSService.prototype.getRegions = function () {
        var _this = this;
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: this.jsonHeader });
        this._http
            .get(this.configSettings.baseURL + this.configSettings.regionURL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (r) {
            _this._regionSubject.next(r);
        });
    };
    Object.defineProperty(NSSService.prototype, "regressionRegions", {
        get: function () {
            return this._regressionRegionSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // setter (selectedRegion)
    NSSService.prototype.setSelectedRegRegions = function (v) {
        var _this = this;
        this.chartBind.next('');
        if (v.length > 0) {
            var srr_1 = [];
            v.forEach(function (rr) {
                srr_1.push(rr.id);
            });
            this._selectedRegRegions.next(v);
            // now update statisticGroups, regressionTypes if there are selectedRegRegions
            this._regRegionIdParams = srr_1.length >= 0 ? srr_1.join(',') : '';
            // params for regressionTypes and statisticGroups
            var regTypeParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
            regTypeParams.set('regressionregions', this._regRegionIdParams);
            regTypeParams.set('statisticgroups', this._statGrpIdParams);
            this.getRegionRegressionTypes(this._selectedRegion.getValue().id, regTypeParams).subscribe(function (rt) {
                // format all reg type stuff
                _this.formatRegTypeStuff(rt);
                // params for statistic groups
                var statGrpParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                statGrpParams.set('regressionregions', _this._regRegionIdParams);
                statGrpParams.set('regressiontypes', _this._regTypeIdParams);
                _this.getRegionStatisticGrps(_this._selectedRegion.getValue().id, statGrpParams).subscribe(function (sg) {
                    _this.formatStatisticGrpStuff(sg);
                    // params for scenarios
                    var scenarioParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                    scenarioParams.set('regressionregions', _this._regRegionIdParams);
                    scenarioParams.set('regressiontypes', _this._regTypeIdParams);
                    scenarioParams.set('statisticgroups', _this._statGrpIdParams);
                    scenarioParams.set('unitsystems', '2');
                    _this.getRegionScenario(_this._selectedRegion.getValue().id, scenarioParams); //get scenarios
                }, function (error) { return _this.handleError; }); // get StatisticGroups
            }, function (error) { return _this.handleError; }); // get regressionRegions
        }
        else {
            // they cleared it
            this._selectedRegRegions.next([]);
            // now update statisticGroups, regressionTypes if there are selectedRegRegions
            var regTypeParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
            regTypeParams.set('statisticgroups', this._statGrpIdParams);
            this.getRegionRegressionTypes(this._selectedRegion.getValue().id, regTypeParams).subscribe(function (rt) {
                _this.formatRegTypeStuff(rt);
                // params for statistic groups
                var statGrpParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                statGrpParams.set('regressiontypes', _this._regTypeIdParams);
                _this.getRegionStatisticGrps(_this._selectedRegion.getValue().id, statGrpParams).subscribe(function (sg) {
                    _this.formatStatisticGrpStuff(sg);
                    // params for scenarios
                    var scenarioParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                    scenarioParams.set('regressiontypes', _this._regTypeIdParams);
                    scenarioParams.set('statisticgroups', _this._statGrpIdParams);
                    scenarioParams.set('unitsystems', '2');
                    _this.getRegionScenario(_this._selectedRegion.getValue().id, scenarioParams); // get scenarios
                }, function (error) { return _this.handleError; }); // get StatisticGroups
            }, function (error) { return _this.handleError; }); // get RegressionTypes
        }
    };
    Object.defineProperty(NSSService.prototype, "selectedRegRegions", {
        // getter (selectedRegRegion)
        get: function () {
            return this._selectedRegRegions.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // once http.get.map is done.. the .subcribe calls this function to get everything formatted
    NSSService.prototype.formatRegRegionStuff = function (rr) {
        // remove from _selectedRegRegions if not in response.
        if (this._selectedRegRegions.getValue() !== undefined) {
            for (var srr = this._selectedRegRegions.getValue().length; srr--;) {
                var RRSind = rr
                    .map(function (eachrr) {
                    return eachrr.id;
                })
                    .indexOf(this._selectedRegRegions.getValue()[srr].id);
                if (RRSind < 0)
                    this._selectedRegRegions.getValue().splice(srr, 1);
            }
            // repopulate param string comma sep IDs
            var regRegIDarray_1 = new Array();
            this._selectedRegRegions.getValue().forEach(function (rt) {
                regRegIDarray_1.push(rt.id); // pushing each ID into arrayof numbers to then join as comma sep string for parameters
            });
            this._regRegionIdParams = regRegIDarray_1.length >= 0 ? regRegIDarray_1.join(',') : '';
        }
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
        // getter (selectedStatisticgroup)
        get: function () {
            return this._selectedStatGroups;
        },
        // setter (selectedStatisticgroup)
        set: function (v) {
            var _this = this;
            this.chartBind.next('');
            if (v.length > 0) {
                this._selectedStatGroups = v;
                var ssg_1 = [];
                this._selectedStatGroups.forEach(function (ss) {
                    ssg_1.push(ss.id);
                });
                // now update regressionRegions, regressionTypes if there are selectedStatisticGroups
                this._statGrpIdParams = ssg_1.length >= 0 ? ssg_1.join(',') : '';
                // params for regressionTypes
                var regTypeParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                regTypeParams.set('regressionregions', this._regRegionIdParams);
                regTypeParams.set('statisticgroups', this._statGrpIdParams);
                this.getRegionRegressionTypes(this._selectedRegion.getValue().id, regTypeParams).subscribe(function (rt) {
                    // format all reg type stuff
                    _this.formatRegTypeStuff(rt);
                    // params for regressionRegions
                    var regRegionParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                    regRegionParams.set('statisticgroups', _this._statGrpIdParams);
                    regRegionParams.set('regressiontypes', _this._regTypeIdParams);
                    _this.getRegionRegressionRegions(_this._selectedRegion.getValue().id, regRegionParams).subscribe(function (rr) {
                        // format all reg regions stuff
                        _this.formatRegRegionStuff(rr);
                        // params for scenarios
                        var scenarioParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                        scenarioParams.set('regressionregions', _this._regRegionIdParams);
                        scenarioParams.set('regressiontypes', _this._regTypeIdParams);
                        scenarioParams.set('statisticgroups', _this._statGrpIdParams);
                        scenarioParams.set('unitsystems', '2');
                        _this.getRegionScenario(_this._selectedRegion.getValue().id, scenarioParams); //get scenarios
                    }, function (error) { return _this.handleError; }); // getRegionRegressionRegions
                }, function (error) { return _this.handleError; }); // getRegionRegressionTypes
            } // v.lenght > 0
            else {
                // they cleared it
                this._selectedStatGroups = [];
                // now update statisticGroups, regressionTypes if there are selectedRegRegions
                var regTypeParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                regTypeParams.set('regressionregions', this._regRegionIdParams);
                this.getRegionRegressionTypes(this._selectedRegion.getValue().id, regTypeParams).subscribe(function (rt) {
                    // format all reg type stuff
                    _this.formatRegTypeStuff(rt);
                    // params for regressionRegions
                    var regRegionsParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                    regRegionsParams.set('regressiontypes', _this._regTypeIdParams);
                    _this.getRegionRegressionRegions(_this._selectedRegion.getValue().id, regRegionsParams).subscribe(function (rr) {
                        // format all reg regions stuff
                        _this.formatRegRegionStuff(rr);
                        // params for scenarios
                        var scenarioParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                        scenarioParams.set('regressiontypes', _this._regTypeIdParams);
                        scenarioParams.set('regressionregions', _this._regRegionIdParams);
                        scenarioParams.set('unitsystems', '2');
                        _this.getRegionScenario(_this._selectedRegion.getValue().id, scenarioParams); //get scenarios
                    }, function (error) { return _this.handleError; }); // get getRegionRegressionRegions
                }, function (error) { return _this.handleError; }); // get RegressionTypes
            }
        },
        enumerable: true,
        configurable: true
    });
    // once http.get.map is done.. the .subcribe calls this function to get everything formatted
    NSSService.prototype.formatStatisticGrpStuff = function (sg) {
        // remove from _selectedStatGroups if not in response.
        if (this._selectedStatGroups != undefined) {
            for (var si = this._selectedStatGroups.length; si--;) {
                var SSind = sg
                    .map(function (eachsg) {
                    return eachsg.id;
                })
                    .indexOf(this._selectedStatGroups[si].id);
                if (SSind < 0)
                    this._selectedStatGroups.splice(si, 1);
            }
            // repopulate param string comma sep IDs
            var statGrpIDarray_1 = new Array();
            this._selectedStatGroups.forEach(function (rt) {
                statGrpIDarray_1.push(rt.id); // pushing each ID into arrayof numbers to then join as comma sep string for parameters
            });
            this._statGrpIdParams = statGrpIDarray_1.length >= 0 ? statGrpIDarray_1.join(',') : '';
        }
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
        // getter (selectedRegressionType)
        get: function () {
            return this._selectedRegressionTypes;
        },
        // setter (selectedRegressionType)
        set: function (v) {
            var _this = this;
            this.chartBind.next('');
            if (v.length > 0) {
                this._selectedRegressionTypes = v;
                var srt_1 = [];
                this._selectedRegressionTypes.forEach(function (rt) {
                    srt_1.push(rt.ID);
                });
                // now update regressionRegions, regressionTypes if there are selectedStatisticGroups
                this._regTypeIdParams = srt_1.length >= 0 ? srt_1.join(',') : '';
                var statGrpParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                statGrpParams.set('regressionregions', this._regRegionIdParams);
                statGrpParams.set('regressiontypes', this._regTypeIdParams);
                this.getRegionStatisticGrps(this._selectedRegion.getValue().id, statGrpParams).subscribe(function (sg) {
                    _this.formatStatisticGrpStuff(sg);
                    // params for regRegions
                    var regRegionParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                    regRegionParams.set('statisticgroups', _this._statGrpIdParams);
                    regRegionParams.set('regressiontypes', _this._regTypeIdParams);
                    _this.getRegionRegressionRegions(_this._selectedRegion.getValue().id, regRegionParams).subscribe(function (rr) {
                        _this.formatRegRegionStuff(rr);
                        // params for scenarios
                        var scenarioParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                        scenarioParams.set('regressionregions', _this._regRegionIdParams);
                        scenarioParams.set('regressiontypes', _this._regTypeIdParams);
                        scenarioParams.set('statisticgroups', _this._statGrpIdParams);
                        scenarioParams.set('unitsystems', '2');
                        _this.getRegionScenario(_this._selectedRegion.getValue().id, scenarioParams); //get scenarios
                    }, function (error) { return _this.handleError; }); // get regressionRegions
                }, function (error) { return _this.handleError; }); // get RegressionTypes
            } // v.lenght > 0
            else {
                // they cleared it
                this._selectedRegressionTypes = [];
                // now update statisticGroups, regressionTypes if there are selectedRegRegions
                var regTypeParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                regTypeParams.set('regressionregions', this._regRegionIdParams);
                this.getRegionStatisticGrps(this._selectedRegion.getValue().id, regTypeParams).subscribe(function (sg) {
                    _this.formatStatisticGrpStuff(sg);
                    // params for reg regions
                    var regRegionsParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                    regRegionsParams.set('statisticgroups', _this._statGrpIdParams);
                    _this.getRegionRegressionRegions(_this._selectedRegion.getValue().id, regRegionsParams).subscribe(function (rr) {
                        _this.formatRegRegionStuff(rr);
                        // params for scenarios
                        var scenarioParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
                        scenarioParams.set('statisticgroups', _this._statGrpIdParams);
                        scenarioParams.set('regressionregions', _this._regRegionIdParams);
                        scenarioParams.set('unitsystems', '2');
                        _this.getRegionScenario(_this._selectedRegion.getValue().id, scenarioParams); //get scenarios
                    }, function (error) { return _this.handleError; }); // get regressionregions
                }, function (error) { return _this.handleError; }); // get RegressionTypes
            }
        },
        enumerable: true,
        configurable: true
    });
    // once http.get.map is done.. the .subcribe calls this function to get everything formatted
    NSSService.prototype.formatRegTypeStuff = function (rt) {
        rt.forEach(function (r) {
            r.id = r.id;
            r.name = r.name;
        });
        // remove from _selectedStatGroups if not in response.
        if (this._selectedRegressionTypes != undefined) {
            for (var srt = this._selectedRegressionTypes.length; srt--;) {
                var RTSind = rt
                    .map(function (eachrt) {
                    return eachrt.id;
                })
                    .indexOf(this._selectedRegressionTypes[srt].id);
                if (RTSind < 0)
                    this._selectedRegressionTypes.splice(srt, 1);
            }
            // repopulate param string comma sep IDs
            var regTypeIDarray_1 = new Array();
            this._selectedRegressionTypes.forEach(function (rt) {
                regTypeIDarray_1.push(rt.id); // pushing each ID into arrayof numbers to then join as comma sep string for parameters
            });
            this._regTypeIdParams = regTypeIDarray_1.length >= 0 ? regTypeIDarray_1.join(',') : '';
        }
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
        this.chartBind.next('');
    };
    // -+-+-+-+-+-+ end Scenarios section -+-+-+-+-+-+-+-+-+-+
    // region has been selected, populate all other multiselects and get scenarios
    NSSService.prototype.initializeRegion = function () {
        var _this = this;
        this.getRegionRegressionRegions(this._selectedRegion.getValue().id).subscribe(function (rr) {
            _this.formatRegRegionStuff(rr);
        }); // get RegressionRegions
        this.getRegionStatisticGrps(this._selectedRegion.getValue().id).subscribe(function (sg) {
            _this.formatStatisticGrpStuff(sg);
        }); // get StatisticGroups
        this.getRegionRegressionTypes(this._selectedRegion.getValue().id).subscribe(function (rt) {
            _this.formatRegTypeStuff(rt);
        }); // get RegressionTypes
        var scenarioParams = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
        scenarioParams.set('unitsystems', '2');
        this.getRegionScenario(this._selectedRegion.getValue().id, scenarioParams); // get scenarios
    };
    // -+-+-+-+-+-+-+-+-+-+-+-+ http GETs -+-+-+-+-+-+-+-+-+-+-+-+
    // get unit types
    NSSService.prototype.getUnitTypes = function (searchArgs) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: this.jsonHeader, search: searchArgs });
        return this._http.get(this.configSettings.baseURL + this.configSettings.unitsURL, options).map(function (res) { return res.json(); });
    };
    // get variable types
    NSSService.prototype.getVariableTypes = function (searchArgs) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: this.jsonHeader, search: searchArgs });
        return this._http
            .get(this.configSettings.baseURL + this.configSettings.variablesURL, options)
            .map(function (res) { return res.json(); });
    };
    // get regressionRegions by region
    NSSService.prototype.getRegionRegressionRegions = function (id, searchArgs) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: this.jsonHeader, search: searchArgs });
        return this._http
            .get(this.configSettings.baseURL + this.configSettings.regionURL + id + '/' + this.configSettings.regRegionURL, options)
            .map(function (res) { return res.json(); });
    };
    // get regressiontypes by region
    NSSService.prototype.getRegionRegressionTypes = function (id, searchArgs) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: this.jsonHeader, search: searchArgs });
        return this._http
            .get(this.configSettings.baseURL + this.configSettings.regionURL + id + '/' + this.configSettings.regTypeURL, options)
            .map(function (res) { return res.json(); });
    };
    // get statisticgroups by region
    NSSService.prototype.getRegionStatisticGrps = function (id, searchArgs) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: this.jsonHeader, search: searchArgs });
        return this._http
            .get(this.configSettings.baseURL + this.configSettings.regionURL + id + '/' + this.configSettings.statisticGrpURL, options)
            .map(function (res) { return res.json(); });
    };
    // get scenarios by region
    NSSService.prototype.getRegionScenario = function (id, searchArgs) {
        var _this = this;
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: this.jsonHeader, search: searchArgs });
        return this._http
            .get(this.configSettings.baseURL + this.configSettings.regionURL + id + '/' + this.configSettings.scenariosURL, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (s) {
            s.forEach(function (scen) {
                // get citations
                var i = scen.links[0].href.indexOf('?');
                var param = scen.links[0].href.substring(i + 1);
                _this.getCitations(new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"](param)).subscribe(function (c) {
                    scen.citations = c;
                });
                // clear Parameter.'Value'
                scen.regressionRegions.forEach(function (rr) {
                    rr.parameters.forEach(function (p) {
                        p.value = null;
                    });
                });
            });
            _this._scenarioSubject.next(s);
        }, function (error) { return _this.handleError; });
    };
    // calculate Scenarios (POST)
    NSSService.prototype.postScenarios = function (id, s, searchArgs) {
        var _this = this;
        // let body = JSON.stringify(s); 
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: this.jsonHeader, search: searchArgs });
        return this._http
            .post(this.configSettings.baseURL + this.configSettings.regionURL + id + '/scenarios/estimate', s, options)
            .map(function (sResult) { return sResult.json(); })
            .subscribe(function (sResult) {
            sResult.forEach(function (scen) {
                if (scen.regressionRegions.length > 0) {
                    // get citations
                    var i = scen.links[0].href.indexOf('?');
                    var param = scen.links[0].href.substring(i + 1);
                    _this.getCitations(new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"](param)).subscribe(function (c) {
                        scen.citations = c;
                    }, function (error) { return _this.handleError; });
                }
            });
            _this._scenarioSubject.next(sResult);
        }, function (error) { return _this.handleError; });
    };
    NSSService.prototype.getCitations = function (searchArgs) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: this.jsonHeader, search: searchArgs });
        return this._http
            .get(this.configSettings.baseURL + this.configSettings.citationURL, options)
            .map(function (cit) { return cit.json(); })
            .catch(this.handleError);
    };
    NSSService.prototype.handleError = function (error) {
        var errMsg = error.message ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
    };
    NSSService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]])
    ], NSSService);
    return NSSService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// ------------------------------------------------------------------------------
// ----- auth.service -----------------------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: store and retrieve loggedIn properties service (global)






var AuthService = /** @class */ (function () {
    function AuthService(_http, _router) {
        this._http = _http;
        this._router = _router;
        // store loggedIn parts (loggedInRole, loggedInName, loggedInUserName, loggedInID)
        this._loggedInRole = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._loggedInName = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._loggedInUserName = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._loggedInID = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AuthService.prototype.setloggedInRole = function (val) {
        this.role = val;
        this._loggedInRole.next(val);
    };
    AuthService.prototype.loggedInRole = function () {
        // getter (loggedInRole)
        return this._loggedInRole.asObservable();
    };
    AuthService.prototype.setloggedInName = function (val) {
        this._loggedInName.next(val);
    };
    AuthService.prototype.loggedInName = function () {
        // getter (loggedInName)
        return this._loggedInName.asObservable();
    };
    AuthService.prototype.setloggedInUserName = function (val) {
        this._loggedInUserName.next(val);
    };
    AuthService.prototype.loggedInUserName = function () {
        // getter (loggedInName)
        return this._loggedInUserName.asObservable();
    };
    AuthService.prototype.setloggedInID = function (val) {
        this._loggedInID.next(val);
    };
    AuthService.prototype.loggedInID = function () {
        // getter (loggedInName)
        return this._loggedInID.asObservable();
    };
    //store the info to be retrieved in other components
    AuthService.prototype.storeUserInfo = function (manager) {
        //store in localStorage and in .next for subscriptions on change
        localStorage.setItem('loggedInRole', this.getLoggedInRole(manager.roleID));
        localStorage.setItem('loggedInName', manager.firstName + ' ' + manager.lastName);
        localStorage.setItem('loggedInUserName', manager.username);
        localStorage.setItem('loggedInID', manager.id.toString());
        this._loggedInRole.next(this.getLoggedInRole(manager.roleID));
        this._loggedInName.next(manager.firstName + ' ' + manager.lastName);
        this._loggedInUserName.next(manager.username);
        this._loggedInID.next(manager.id);
        this.setStorageExpiration();
    };
    //logged out, clear the data
    AuthService.prototype.removeUserInfo = function () {
        localStorage.clear();
        this._loggedInRole.next();
        this._loggedInName.next();
        this._loggedInUserName.next();
        this._loggedInID.next();
    };
    // make sure to clear localStorage after 12 hrs (use this when setting creds)
    AuthService.prototype.setStorageExpiration = function () {
        var hours = 12; // Reset when storage is more than 12 hours
        var now = new Date().getTime();
        var setupTime = Number(localStorage.getItem('setupTime'));
        localStorage.setItem('setupTime', now.toString());
    };
    // get the loggedIn Role
    AuthService.prototype.getLoggedInRole = function (roleId) {
        switch (roleId) {
            case 1:
                return 'Administrator';
            case 2:
                return 'Manager';
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AuthService);
    return AuthService;
}()); // end AuthService



/***/ }),

/***/ "./src/app/shared/services/login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/login.service.ts ***!
  \**************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/config.service */ "./src/app/config.service.ts");
// ------------------------------------------------------------------------------
// ----- login.service.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: login service that logs user in (http) and stores creds, passes user info on to authservice









var LoginService = /** @class */ (function () {
    function LoginService(http, _authService, _configService) {
        this.http = http;
        this._authService = _authService;
        this._configService = _configService;
        this._loggedInSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.configSettings = this._configService.getConfiguration();
    }
    LoginService.prototype.isLoggedIn = function () {
        return this._loggedInSubject.asObservable();
    };
    // log in
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        var creds = 'Basic ' + btoa(username + ':' + password);
        headers.append('Authorization', creds);
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.configSettings.baseURL + this.configSettings.loginURL, { headers: headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user) {
                _this._loggedInSubject.next(true);
                // store user creds in localStorage and details in service for retrieval
                localStorage.setItem('credentials', creds);
                _this._authService.storeUserInfo(user);
            }
        })
            .catch(this.handleError);
    };
    // log out and clear everything
    LoginService.prototype.logout = function () {
        this._loggedInSubject.next(false);
        localStorage.clear();
        this._authService.removeUserInfo();
    };
    LoginService.prototype.handleError = function (error) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], app_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wim-sidebar {\r\n    background-color: #eceef4;\r\n    width: 300px;\r\n    pointer-events: auto;\r\n    position: fixed;\r\n    top: 70;\r\n    -webkit-transform: translate3d(0px, 0px, 0px);\r\n            transform: translate3d(0px, 0px, 0px);\r\n    z-index: 100;\r\n    margin-top: 70px;\r\n    height: 100%;\r\n    height: calc(100% - 70px);\r\n    overflow: auto;\r\n    box-sizing: border-box;\r\n    padding: 25px 15px;\r\n}\r\n\r\n.sidebar-item{\r\n    display: block;\r\n    box-sizing: border-box;\r\n    padding: 0 0 15px 0;\r\n}\r\n\r\n.wim-sidebar select{\r\n    background-color: white;\r\n}\r\n\r\n.wim-sidebar button{\r\n    width: 100%;\r\n}\r\n\r\n.wim-sidebar label{\r\n    display: block;\r\n}\r\n\r\nselect:focus{\r\n\tbackground-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"14\" viewBox=\"0 0 29 14\" width=\"29\"><path fill=\"#0F8AFF\" d=\"M9.37727 3.625l5.08154 6.93523L19.54036 3.625\"/></svg>');\r\n}\r\n\r\n.footer-links {\r\n    display: block;\r\n    box-sizing: border-box;\r\n    padding: 0 5px;\r\n    text-align: center;\r\n    line-height: 1.5em;\r\n    opacity: .75;\r\n}\r\n\r\n.footer-links a {\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n    padding: 0 4px;\r\n    font-size: 8pt;\r\n    text-decoration: none;\r\n}\r\n\r\n.identification {\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    font-size: 9pt;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-left: 8px;\r\n    opacity: .75;\r\n    text-align: center;\r\n    color: #6e7490;\r\n}\r\n\r\n.identification a {\r\n    font-weight: 700;\r\n    color: #6E7490;\r\n    transition: .15s;    \r\n}\r\n\r\n/*.identification a:hover {\r\n    transition: .15s;\r\n    color: rgba(0,0,0,.9)!important;\r\n}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSx3QkFBd0I7Q0FDM0I7O0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7O0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0NBQ0MsbU5BQW1OO0NBQ25OOztBQUNEO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZUFBZTtJQUNmLHNCQUFzQjtDQUN6Qjs7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCOztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7Q0FDcEI7O0FBQ0Q7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2ltLXNpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWVmNDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA3MDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxufVxyXG5cclxuLnNpZGViYXItaXRlbXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgMCAxNXB4IDA7XHJcbn1cclxuXHJcbi53aW0tc2lkZWJhciBzZWxlY3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ud2ltLXNpZGViYXIgYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLndpbS1zaWRlYmFyIGxhYmVse1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbnNlbGVjdDpmb2N1c3tcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAyOSAxNFwiIHdpZHRoPVwiMjlcIj48cGF0aCBmaWxsPVwiIzBGOEFGRlwiIGQ9XCJNOS4zNzcyNyAzLjYyNWw1LjA4MTU0IDYuOTM1MjNMMTkuNTQwMzYgMy42MjVcIi8+PC9zdmc+Jyk7XHJcbn1cclxuLmZvb3Rlci1saW5rcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIG9wYWNpdHk6IC43NTtcclxufVxyXG4uZm9vdGVyLWxpbmtzIGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgZm9udC1zaXplOiA4cHQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmlkZW50aWZpY2F0aW9uIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOiA5cHQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgb3BhY2l0eTogLjc1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM2ZTc0OTA7XHJcbn1cclxuLmlkZW50aWZpY2F0aW9uIGEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjNkU3NDkwO1xyXG4gICAgdHJhbnNpdGlvbjogLjE1czsgICAgXHJcbn1cclxuLyouaWRlbnRpZmljYXRpb24gYTpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAuMTVzO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjkpIWltcG9ydGFudDtcclxufSovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"wim-sidebar fixed\" id=\"wimSidebar\">\r\n\r\n    <div class=\"sidebar-item\">\r\n        <label>Choose Region:</label>\r\n        <select [ngModel]=\"selectedRegion\" (ngModelChange)=\"onRegSelect($event)\" name=\"region\">\r\n            <option value=\"\" selected disabled hidden></option>\r\n            <option [ngValue]=\"i\" *ngFor=\"let i of regions\">{{i.name}}</option>\r\n        </select>\r\n    </div> <!-- end sidebar-item-->\r\n\r\n\r\n    <div class=\"sidebar-item\" *ngIf=\"statisticGroups\">\r\n        <label>Limit by Statistic Group(s):</label>\r\n        <ss-multiselect-dropdown [options]=\"statisticGroups\" [texts]=\"myMSTexts\" [settings]=\"myRTSettings\" name=\"selectedStatGrpIDs\"\r\n            [(ngModel)]=\"selectedStatGrpIDs\" (ngModelChange)=\"onStatGrpSelect($event)\">\r\n        </ss-multiselect-dropdown>\r\n    </div> <!-- end sidebar-item-->\r\n\r\n\r\n    <div class=\"sidebar-item\" *ngIf=\"regressionRegions\"> \r\n        <label>Limit by Regression Group(s):</label>\r\n        <ss-multiselect-dropdown [options]=\"regressionRegions\" [texts]=\"myMSTexts\" [settings]=\"myRRSettings\" name=\"selectedRegRegionIDs\"\r\n            [(ngModel)]=\"selectedRegRegionIDs\" (ngModelChange)=\"onRegressionRegSelect($event)\"> \r\n        </ss-multiselect-dropdown>\r\n    </div> <!-- end sidebar-item-->\r\n\r\n\r\n    <div class=\"sidebar-item\" *ngIf=\"regressionTypes\">\r\n        <label>Limit by Statistic:</label>\r\n        <ss-multiselect-dropdown [options]=\"regressionTypes\" [texts]=\"myMSTexts\" [settings]=\"mySGSettings\" name=\"selectedRegTypeIDs\"\r\n            [(ngModel)]=\"selectedRegTypeIDs\" (ngModelChange)=\"onRegTypeSelect($event)\">\r\n        </ss-multiselect-dropdown>\r\n    </div> <!-- end sidebar-item-->\r\n\r\n\r\n    <div class=\"sidebar-item\" *ngIf=\"scenarios && scenarios.length > 0 && scenarios[0].regressionRegions.length > 0\">\r\n        <label>Calculate Statistic:</label>\r\n        <button style=\"margin-top: 6px\" [disabled]=\"scenarios[0].regressionRegions[0].Results != undefined\" type=\"button\"\r\n            class=\"btn-black\" (click)=\"CalculateScenario()\">Compute</button>\r\n    </div> <!-- end sidebar-item-->\r\n\r\n    <div class=\"sidebar-item\" *ngIf=\"showChart\">\r\n        <label>Chart:</label>\r\n        <ul style=\"padding: 0px !important;\">\r\n            <div *ngFor=\"let pt of plotTypes\" (click)=\"selectChart(pt)\">\r\n                <li style=\"list-style: none; cursor: pointer\" class=\"simple-btn\">{{pt}}</li>\r\n            </div>\r\n        </ul>\r\n    </div> <!-- end sidebar-item-->\r\n\r\n    <div class=\"sidebar-item\" *ngIf=\"scenarios && scenarios.length > 0 && scenarios[0].regressionRegions.length > 0 && scenarios[0].regressionRegions[0].results != undefined\">\r\n        <label>Go To:</label>\r\n        <ul style=\"padding: 0 !important;\">\r\n            <li style=\"list-style:none\"><a pageScroll href=\"#citations\" class=\"simple-btn-link\">Citations</a></li>\r\n            <li *ngIf=\"showChart\" style=\"list-style:none\"><a pageScroll href=\"#chart\" class=\"simple-btn-link\">Charts</a></li>\r\n            <li style=\"list-style:none\"><a pageScroll href=\"#appendix\" class=\"simple-btn-link\">Appendix</a></li>\r\n        </ul>\r\n    </div> <!-- end sidebar-item-->\r\n\r\n    <div class=\"footer-links\">\r\n        <div class=\"identification\">Powered by <a href=\"https://wim.usgs.gov/\" target=\"_blank\">WiM</a></div>\r\n        <!--     <div class=\"identification pull-right\">powered by <a href=\"https://wim.usgs.gov/\" target=\"_blank\">WiM</a></div>-->\r\n        <a href=\"https://usgs.gov\" target=\"_blank\">USGS Home</a><a href=\"https://answers.usgs.gov\" target=\"_blank\">Contact\r\n            USGS</a>\r\n        <a href=\"https://search.usgs.gov\" target=\"_blank\">Search USGS</a>\r\n        <a href=\"https://www2.usgs.gov/laws/accessibility.html\" target=\"_blank\">Accessibility</a>\r\n        <a href=\"https://www2.usgs.gov/foia/\" target=\"_blank\">FOIA</a>\r\n        <a href=\"https://www2.usgs.gov/laws/privacy.html\" target=\"_blank\">Privacy</a>\r\n        <a href=\"https://www2.usgs.gov/laws/policies_notices.html\" target=\"_blank\">Policies &amp; Notices</a>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/app.service */ "./src/app/shared/services/app.service.ts");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_nssService) {
        this._nssService = _nssService;
        this.plotTypes = ['Frequency Plot', 'Hydrograph']; //Hydrograph, Frequency Plot
    }
    Object.defineProperty(SidebarComponent.prototype, "selectedRegType", {
        get: function () {
            return this._nssService.selectedRegressionTypes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidebarComponent.prototype, "selectedStatGrp", {
        get: function () {
            return this._nssService.selectedStatGroups;
        },
        enumerable: true,
        configurable: true
    });
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doShow = true;
        this.selectedPlot = '';
        this.selectedRegressionRegions = [];
        //subscribe to regions
        this._nssService.getRegions();
        this._nssService.regions.subscribe(function (regions) {
            _this.regions = regions;
        });
        this._nssService.selectedRegion.subscribe(function (r) {
            _this.selectedRegion = r;
        });
        //subscribe to selected regression regions
        this._nssService.selectedRegRegions.subscribe(function (rr) {
            _this.selectedRegressionRegions = rr;
        });
        //subscribe to regressionRegions
        this._nssService.regressionRegions.subscribe(function (rr) {
            _this.regressionRegions = rr;
            //remove from selectedRegRegion if not in response.
            if (_this.selectedRegRegionIDs != undefined) {
                if (rr.length > 0) {
                    for (var rri = _this.selectedRegRegionIDs.length; rri--;) {
                        var RRind = rr
                            .map(function (eachrr) {
                            return eachrr.ID;
                        })
                            .indexOf(_this.selectedRegRegionIDs[rri]);
                        if (RRind < 0)
                            _this.selectedRegRegionIDs.splice(rri, 1);
                    }
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
                        var SSind = sg
                            .map(function (eachsg) {
                            return eachsg.ID;
                        })
                            .indexOf(_this.selectedStatGrpIDs[si]);
                        if (SSind < 0)
                            _this.selectedStatGrpIDs.splice(si, 1);
                    }
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
                        var RTind = rt
                            .map(function (eachrt) {
                            return eachrt.ID;
                        })
                            .indexOf(_this.selectedRegTypeIDs[rti]);
                        if (RTind < 0)
                            _this.selectedRegTypeIDs.splice(rti, 1);
                    }
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
                if (s.regressionRegions.length > 0 && s.regressionRegions[0].results && s.statisticGroupName.indexOf('Peak-Flow') > -1)
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
    // select Region. get regressionRegions, regressionTypes, StatisticGroups
    SidebarComponent.prototype.onRegSelect = function (r) {
        this.selectedRegRegionIDs = [];
        this.selectedStatGrpIDs = [];
        this.selectedRegTypeIDs = [];
        this._nssService.setSelectedRegion(r);
    };
    // select of regression region. set the selectedRegRegions
    SidebarComponent.prototype.onRegressionRegSelect = function () {
        var _this = this;
        var selectedRegRegions = new Array();
        this.selectedRegRegionIDs.forEach(function (srr) {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedRegRegions.push(_this.regressionRegions.filter(function (rr) {
                return rr.id === srr;
            })[0]);
        });
        this._nssService.setSelectedRegRegions(selectedRegRegions);
    };
    // select of statisticgrp. update regressionregions and regressiontypes and scenario for mainView
    SidebarComponent.prototype.onStatGrpSelect = function () {
        var _this = this;
        var selectedStatGroups = new Array();
        this.selectedStatGrpIDs.forEach(function (ssg) {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedStatGroups.push(_this.statisticGroups.filter(function (rr) {
                return rr.id === ssg;
            })[0]);
        });
        this._nssService.selectedStatGroups = selectedStatGroups;
    };
    // select of regression type. update statisticgrps and regressionregions
    SidebarComponent.prototype.onRegTypeSelect = function () {
        var _this = this;
        var selectedRegTypes = new Array();
        this.selectedRegTypeIDs.forEach(function (srt) {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedRegTypes.push(_this.regressionTypes.filter(function (rr) {
                return rr.id == srt;
            })[0]);
        });
        this._nssService.selectedRegressionTypes = selectedRegTypes;
    };
    // submit / Compute button click
    SidebarComponent.prototype.CalculateScenario = function () {
        var ValueRequired = false;
        var totalWeight = Number(0);
        var numOfRegRegions = Number(0); // don't care about weights if only 1 regRegion
        // make sure all values are populated
        this.scenarios.forEach(function (s) {
            numOfRegRegions = s.regressionRegions.length;
            s.regressionRegions.forEach(function (rr) {
                if (numOfRegRegions > 1)
                    totalWeight += Number(rr.percentWeight);
                rr.parameters.forEach(function (p) {
                    if (!p.value) {
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
        } // end invalid
        else {
            // remove Citations, RegressionRegions.Parameters.OutOfRange and .missingVal props
            this.scenarios.forEach(function (s) {
                delete s.citations;
                s.regressionRegions.forEach(function (rr) {
                    rr.parameters.forEach(function (p) {
                        delete p.outOfRange;
                        delete p.missingVal;
                        delete p.seeDescription;
                    });
                });
            });
            // now post the scenario to get the results to pass to mainview
            var regTypesIDstring = this.selectedRegTypeIDs !== undefined ? this.selectedRegTypeIDs.join(',') : '';
            var statGrpIDstring = this.selectedStatGrpIDs !== undefined ? this.selectedStatGrpIDs.join(',') : '';
            var regRegionsIDstring = this.selectedRegRegionIDs !== undefined ? this.selectedRegRegionIDs.join(',') : '';
            var sParams = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["URLSearchParams"]();
            sParams.set('regressionregions', regRegionsIDstring);
            sParams.set('regressiontypes', regTypesIDstring);
            sParams.set('statisticgroups', statGrpIDstring);
            this._nssService.postScenarios(this.selectedRegion.id, this.scenarios, sParams);
        }
    };
    // want to see a chart (which one?) ---- may delete, trying it on (ngModelChange)=" of select
    SidebarComponent.prototype.selectChart = function (p) {
        if (p !== '') {
            // this.selectedPlot = p;
            // this.selectedPlot = undefined;
            this._nssService.addChart(p);
        }
    };
    // number only allowed in Value
    SidebarComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9\+\-\.\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'wim-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__["NSSService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    configFile: 'assets/config.json',
    version: __webpack_require__(/*! ../../package.json */ "./package.json").version
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kjacobsen\Documents\wim_projects\NSS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map