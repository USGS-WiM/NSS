//Entry point for the application
import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser'; //needs to run in a browser
import { HttpModule }               from '@angular/http';
import {FormsModule }               from '@angular/forms'; //needed for 2-way binding and ngModel stuff
import {RouterModule}               from '@angular/router';
import {MultiselectDropdownModule}  from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { ToasterModule }            from 'angular2-toaster/angular2-toaster';
import { ChartModule }              from 'angular2-highcharts';

//components ( need to import all of them here )
import { AppComponent }             from './app.component';
import { NavbarComponent }          from './navbar/navbar.component';
import { MainPageComponent }        from './main/mainpage.component';
import { SidebarComponent }         from './sidebar/sidebar.component';
//services
import {RegionService }             from './services/regions.service';
import {CitationService }           from './services/citations.service';
import {ScenarioService}            from './services/scenario.service';
import {SharedService }             from './services/eventSharing.service';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule, MultiselectDropdownModule, ToasterModule, ChartModule],    
    declarations: [AppComponent, NavbarComponent, MainPageComponent, SidebarComponent],
    bootstrap: [AppComponent],
    providers: [RegionService, CitationService, ScenarioService, SharedService]
})
export class AppModule { }