import { NgModule, ApplicationRef }         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule }                      from '@angular/forms';
import { HttpModule }                       from '@angular/http';
import { RouterModule, PreloadAllModules }  from '@angular/router';

import { AppComponent }                     from './app.component';
import { MainviewComponent }                from './mainview';
import { NavbarComponent}                   from './navbar';
import { SidebarComponent}                  from './sidebar';

import { NSSService }                       from './app.service';
import { ToasterModule }                    from 'angular2-toaster/angular2-toaster';
import { MultiselectDropdownModule }        from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { MathJaxDirective }                 from './mainview/mathjax/mathjax.directive';
import { Ng2PageScrollModule }              from 'ng2-page-scroll'; 
import { ChartModule }                      from 'angular2-highcharts';
//require('highcharts/modules/exporting');
import {ColorPickerModule}                  from 'angular2-color-picker';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent, MainviewComponent,NavbarComponent, SidebarComponent, MathJaxDirective],
  imports: [ BrowserModule, FormsModule, HttpModule, ToasterModule, MultiselectDropdownModule,  
          Ng2PageScrollModule.forRoot(), ChartModule, ColorPickerModule ],
  providers: [ NSSService ]
})

export class AppModule {
  constructor(public appRef: ApplicationRef) {}
}

