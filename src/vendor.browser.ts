// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// TODO(gdi2290): switch to DLLs

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
// AngularClass
import '@angularclass/hmr';
import 'angular2-toaster/angular2-toaster.js';
import 'ng2-page-scroll';
import 'angular2-highcharts';
import 'angular2-color-picker';
import 'jspdf';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

if ('production' === ENV) {
  // Production


} else {
  // Development

}
