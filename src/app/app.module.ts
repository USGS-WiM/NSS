//Entry point for the application
import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser'; //needs to run in a browser
import { HttpModule }               from '@angular/http';
import {FormsModule }               from '@angular/forms'; //needed for 2-way binding and ngModel stuff
import {RouterModule}               from '@angular/router';
import {MultiselectDropdownModule}  from 'angular-2-dropdown-multiselect/src/multiselect-dropdown'; 
import { ToasterModule }            from 'angular2-toaster/angular2-toaster'; //toaster notification of required values
import { ChartModule }              from 'angular2-highcharts'; //for chart/graph
import { MathJaxDirective }         from './shared/mathjax.directive'; //for math equation formatting
import {Ng2PageScrollModule}        from 'ng2-page-scroll'; //page scroll with anchor tag 

//components ( need to import all of them here )
import { AppComponent }             from './app.component';
import { NavbarComponent }          from './navbar/navbar.component';
import { MainPageComponent }        from './main/mainpage.component';
import { SidebarComponent }         from './sidebar/sidebar.component';
//services
import { NSSService }             from './services/nss.service';
import {ChartService }             from './services/chart.service';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule, MultiselectDropdownModule, ToasterModule, ChartModule, Ng2PageScrollModule.forRoot()],    
    declarations: [AppComponent, NavbarComponent, MainPageComponent, SidebarComponent, MathJaxDirective],
    bootstrap: [AppComponent],
    providers: [NSSService, ChartService]
})
export class AppModule { }