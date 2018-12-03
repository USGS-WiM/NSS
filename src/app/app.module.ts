import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { AboutModal } from './shared/about/about.component';

import { environment } from '../environments/environment';
import { UniquePipe} from './mainview/unique.pipe';

import { NSSService } from './app.service';
import { ConfigService } from "./config.service";
import { LoaderService } from './shared/components/loader.service';
import { LoaderComponent } from './shared/components/loader.component';

declare let require : any;

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
    AppComponent, MainviewComponent, SidebarComponent, NavbarComponent, AboutModal, LoaderComponent, UniquePipe, MathjaxDirective
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, ToasterModule, 
    MultiselectDropdownModule, Ng2PageScrollModule.forRoot(), ChartModule, ColorPickerModule,  NgbModule.forRoot(),
  ],
  providers: [NSSService,
    { provide: HighchartsStatic, useFactory: highchartsFactory }, ConfigService, LoaderService,
        { provide: APP_INITIALIZER, useFactory: ConfigLoader, deps: [ConfigService], multi:true}
  ],
  bootstrap: [AppComponent]
}) 

export class AppModule { }
