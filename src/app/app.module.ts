import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UniquePipe} from './mainview/unique.pipe';
import { NSSService } from './app.service';
import { MathjaxDirective } from './mainview/mathjax/mathjax.directive';
import { Ng2PageScrollModule } from 'ng2-page-scroll'; 
import { ChartModule} from "angular2-highcharts";
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { ColorPickerModule} from 'ngx-color-picker';
declare let require : any;

export function highchartsFactory() {
  // need this to be able to do exporting of charts
  let hc = require('highcharts');
  let exp = require('highcharts/modules/exporting');
  exp(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent, MainviewComponent, SidebarComponent, NavbarComponent, UniquePipe, MathjaxDirective
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, ToasterModule, 
    MultiselectDropdownModule, Ng2PageScrollModule.forRoot(), ChartModule, ColorPickerModule
  ],
  providers: [NSSService,
    { provide: HighchartsStatic, useFactory: highchartsFactory }
  ],
  bootstrap: [AppComponent]
}) 

export class AppModule { }
