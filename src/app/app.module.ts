import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MultiselectDropdownModule } from '../../node_modules/angular-2-dropdown-multiselect';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

import { MathjaxDirective } from './mainview/mathjax/mathjax.directive';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { AboutModal } from './shared/components/about/about.component';

import { StatisticGroupsComponent } from './settings/categories/statisticgroups/statisticgroups.component';
import { RegressionTypesComponent } from './settings/categories/regressiontypes/regressiontypes.component';
import { UnitTypesComponent } from './settings/categories/unittypes/unittypes.component';
import { UnitSystemsComponent } from './settings/categories/unitsystems/unitsystems.component';
import { VariableTypesComponent } from './settings/categories/variabletypes/variabletypes.component';
import { ManagersComponent } from './settings/categories/managers/managers.component';
import { ErrorsComponent } from './settings/categories/errors/errors.component';
import { AgenciesComponent } from './settings/categories/agencies/agencies.component';
import { StationTypesComponent } from './settings/categories/stationtypes/stationtypes.component';

import { environment } from '../environments/environment';
import { UniquePipe } from './mainview/unique.pipe';
import { CitationFilterPipe } from './mainview/citation-filter.pipe';

import { NSSService } from './shared/services/app.service';
import { ConfigService } from './config.service';
import { LoginService } from './shared/services/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './shared/services/auth.service';
import { SettingsService } from './settings/settings.service';
import { LoaderService } from './shared/services/loader.service';
import { RegionsComponent } from './settings/categories/regions/regions.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminGuard } from './shared/guards/admin.guard';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { AddScenarioModal } from './shared/components/addscenario/addscenario.component';
import { ManageCitationsModal } from './shared/components/managecitations/managecitations.component';
import { ToasterService} from 'angular2-toaster';
import { AddRegressionRegionModal } from './shared/components/addregressionregion/addregressionregion.component';
import { GagestatsComponent } from './gagestats/gagestats.component';
import { GsSidebarComponent } from './gagestats/gs-sidebar/gs-sidebar.component';
import { GagestatsService } from './gagestats/gagestats.service';
import { AddStationModal } from './gagestats/add-station/add-station.component';
import { GagepageComponent } from './gagestats/gagepage/gagepage.component';
import { MethodsComponent } from './settings/categories/methods/methods.component';
import { BatchUploadModal } from './gagestats/batch-upload/batch-upload.component';


declare const require: any;

const appRoutes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'statisticgroups', component: StatisticGroupsComponent },
      { path: 'regions', component: RegionsComponent},
      { path: 'regressiontypes', component: RegressionTypesComponent },
      { path: 'unittypes', component: UnitTypesComponent },
      { path: 'unitsystems', component: UnitSystemsComponent },
      { path: 'variabletypes', component: VariableTypesComponent },
      { path: 'managers', component: ManagersComponent },
      { path: 'errors', component: ErrorsComponent},
      { path: 'agencies', component: AgenciesComponent},
      { path: 'stationtypes', component: StationTypesComponent},
      { path: 'methods', component: MethodsComponent}
    ],
    runGuardsAndResolvers: 'always'
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: '', component: MainviewComponent, pathMatch: 'full' },
  { path: 'gagestats', component: GagestatsComponent}
];

export function ConfigLoader(configService: ConfigService) {
  // Note: this factory needs to return a function (that returns a promise)
  return () => configService.load(environment.configFile);
}

export function highchartsFactory() {
  // need this to be able to do exporting of charts
  const hc = require('highcharts');
  const exp = require('highcharts/modules/exporting');
  exp(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent, MainviewComponent, SidebarComponent, SettingsComponent, AboutModal, UniquePipe, StatisticGroupsComponent,
    MathjaxDirective, RegressionTypesComponent, UnitTypesComponent, UnitSystemsComponent, VariableTypesComponent, ManagersComponent,
    ProfileComponent, ErrorsComponent, RegionsComponent, AddScenarioModal, ManageCitationsModal, CitationFilterPipe, AddRegressionRegionModal, 
    LoaderComponent, GagestatsComponent, GsSidebarComponent, AgenciesComponent, StationTypesComponent, AddStationModal, GagepageComponent, 
    MethodsComponent, BatchUploadModal
  ],
  imports: [
    NgSelectModule, BrowserModule, FormsModule, HttpClientModule, ToasterModule, BrowserAnimationsModule, ReactiveFormsModule, MultiselectDropdownModule,
    Ng2PageScrollModule.forRoot(), ChartModule, ColorPickerModule, NgbModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [
    NSSService, { provide: HighchartsStatic, useFactory: highchartsFactory }, ConfigService,
    { provide: APP_INITIALIZER, useFactory: ConfigLoader, deps: [ConfigService], multi: true },
    LoginService, AuthService, SettingsService, AuthGuard, AdminGuard, ToasterService, LoaderService, GagestatsService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
