import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MultiselectDropdownModule } from '../../node_modules/angular-2-dropdown-multiselect';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

import { MathjaxDirective } from './mainview/mathjax/mathjax.directive';
import { Ng2PageScrollModule } from 'ng2-page-scroll'; 
import { ChartModule} from "angular2-highcharts";
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { ColorPickerModule} from 'ngx-color-picker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutModal } from './shared/about/about.component';

import { StatisticGroupsComponent } from './settings/categories/statisticgroups/statisticgroups.component';
import { RegressionTypesComponent } from './settings/categories/regressiontypes/regressiontypes.component';
import { UnitTypesComponent } from './settings/categories/unittypes/unittypes.component';
import { VariableTypesComponent } from './settings/categories/variabletypes/variabletypes.component';
import { RegressionRegionsComponent } from './settings/categories/regressionregions/regressionregions.component';

import { environment } from '../environments/environment';
import { UniquePipe} from './mainview/unique.pipe';

import { NSSService } from './app.service';
import { ConfigService } from "./config.service";
import { LoaderService } from './shared/components/loader.service';
import { LoaderComponent } from './shared/components/loader.component';
import { LoginModal } from './shared/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { variable } from '@angular/compiler/src/output/output_ast';

declare let require : any;

const appRoutes: Routes = [
  { path: 'settings', component: SettingsComponent,
    children:  [
      { path: 'statisticgroups', component: StatisticGroupsComponent},
      { path: 'regressionregions', component: RegressionRegionsComponent},
      { path: 'regressiontypes', component: RegressionTypesComponent},
      { path: 'unittypes', component: UnitTypesComponent},
      { path: 'variabletypes', component: VariableTypesComponent}
    ]
  },
  { path: '', component: MainviewComponent, pathMatch: 'full'}
];

export function ConfigLoader(configService: ConfigService) {
  //Note: this factory needs to return a function (that returns a promise)  
	return () => configService.load(environment.configFile);
}

export function highchartsFactory() {
  // need this to be able to do exporting of charts
  let hc = require('highcharts');
  let exp = require('highcharts/modules/exporting');
  exp(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent, MainviewComponent, SidebarComponent, NavbarComponent, SettingsComponent, AboutModal, LoaderComponent, 
    UniquePipe, MathjaxDirective, LoginModal, StatisticGroupsComponent, RegressionTypesComponent, UnitTypesComponent, VariableTypesComponent, RegressionRegionsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, ToasterModule, BrowserAnimationsModule, ReactiveFormsModule,
    MultiselectDropdownModule, Ng2PageScrollModule.forRoot(), ChartModule, ColorPickerModule,  NgbModule.forRoot(), RouterModule.forRoot(appRoutes)
  ],
  providers: [NSSService,
    { provide: HighchartsStatic, useFactory: highchartsFactory }, ConfigService, LoaderService,
        { provide: APP_INITIALIZER, useFactory: ConfigLoader, deps: [ConfigService], multi:true},
        {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
}) 

export class AppModule { }
