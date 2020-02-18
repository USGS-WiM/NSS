import { Component, OnInit, Inject, ViewChildren, ViewContainerRef, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Region } from '../../interfaces/region';
import { Regressionregion } from '../../interfaces/regressionregion';
import { Regressiontype } from '../../interfaces/regressiontype';
import { Statisticgroup } from '../../interfaces/statisticgroup';
import { Scenario } from '../../interfaces/scenario';
import { Parameter } from '../../interfaces/parameter';
import { Unittype } from '../../interfaces/unittype';
import { Equationresults } from '../../interfaces/equationresults';
import { Hydrochart } from '../../interfaces/hydrochart';
import { Freqchart } from '../../interfaces/freqchart';
import { Chart } from '../../interfaces/chart';
import { NSSService } from '../../services/app.service';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { Toast } from 'angular2-toaster/src/toast';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import * as Highcharts from 'highcharts';
import { LoaderService } from '../../components/loader/loader.service';
import { AuthService } from 'app/shared/services/auth.service';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { SettingsService } from 'app/settings/settings.service';
import { ConfigService } from 'app/config.service';
import { Config } from 'app/shared/interfaces/config';
import { Error } from 'app/shared/interfaces/error';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Predictioninterval } from 'app/shared/interfaces/predictioninterval';
import { URLSearchParams } from '@angular/http';
import { Citation } from 'app/shared/interfaces/citation';

@Component({
  selector: 'app-addregressionregion',
  templateUrl: './addregressionregion.component.html',
  styleUrls: ['./addregressionregion.component.css']
})
export class AddregressionregionComponent implements OnInit {
  @ViewChild('addRegressionRegion') public addRegressionRegionModal; // : ModalDirective;  //modal for validator
  @ViewChildren('inputsTable', { read: ViewContainerRef }) inputTable;
  @ViewChildren('resultsTable', { read: ViewContainerRef }) resultTable;
  @ViewChild('editScenarioForm') editScenarioForm;
  @ViewChild('values') public valuesRef: TemplateRef<any>;
  @ViewChild('add') public addRef: TemplateRef<any>;
  @ViewChild('CitationForm') citationForm;
  public newCitForm: FormGroup;
  public title: string;
  public resultsBack: boolean; // flag that swaps content on mainpage from scenarios w/o results to those with results
  public equationResults: Equationresults[]; // used in Appendix
  public showWeights: boolean; // if more than 1 regRegion, then show input for weighted
  public timestamp: Date; // display a time stamp when they first get here.
  public toast: Toast; // notification when values are required
  public selectedRegion;
  private navigationSubscription;
  public selectedRegressionRegion: Array<Regressionregion>;
  public get selectedStatisticGrp(): Array<Statisticgroup> {
    return this._nssService.selectedStatGroups;
  }
  public get selectedRegType(): Array<Regressiontype> {
    return this._nssService.selectedRegressionTypes;
  }
  public scenarios: Scenario[];
  // -+-+-+-+ Chart parts -+-+-+-+-+-+
  public hydrographs: Array<Hydrochart>; // holds all the IHydros so each chart has their own
  public hydroChartsArray: Chart[]; // holds all hydro charts that are desired.
  public hChartOptions: Chart; // hydro chart
  public hChartXAxisValues: string[]; // holds Recurrence Interval dropdown values for chart
  // public hChartYAxisText: string;               // chart y axis
  public fChartOptions: any; // frequency chart
  public fChartValues: Array<number>[]; // frequency data
  public showCharts_btn: boolean; // toggle button boolean
  public showChartBtn_txt: string; // string "show" / "hide"
  public selectedPlot: string; // which plot are they asking for ("Hydrograph" or "Frequency Plot")
  public charts: Array<any>; // chart instance for hydroChartsArray
  public freqChart: any; // chart instance for frequency plot
  public uniqueParameters: Array<Parameter>; // holds unique list of parameters
  public uniqueUnitTypes: Array<Unittype>; // holds unique list of unit types for parameters to show in appendix
  public multipleRegRegions: boolean; // if multiple regRegions, set this to true
  private DIMLESS_ARRAY = [
    [0.25, 0.12], [0.3, 0.16], [0.35, 0.21], [0.4, 0.26], [0.45, 0.33], [0.5, 0.4], [0.55, 0.49], [0.6, 0.58], [0.65, 0.67], [0.7, 0.76],
    [0.75, 0.84], [0.8, 0.9], [0.85, 0.95], [0.9, 0.98], [0.95, 1.00], [1.00, 0.99], [1.05, 0.96], [1.1, 0.92], [1.15, 0.86], [1.2, 0.8],
    [1.25, 0.74], [1.3, 0.68], [1.35, 0.62], [1.4, 0.56], [1.45, 0.51], [1.5, 0.47], [1.55, 0.43], [1.6, 0.39], [1.65, 0.36], [1.7, 0.33],
    [1.75, 0.3], [1.8, 0.28], [1.85, 0.26], [1.9, 0.24], [1.95, 0.22], [2.0, 0.2], [2.05, 0.19], [2.1, 0.17], [2.15, 0.16], [2.2, 0.15],
    [2.25, 0.14], [2.3, 0.13], [2.35, 0.12], [2.4, 0.11]];
  public frequencyPlotChart: Freqchart; // holder of the freq plot properties ()
  public showExtraFREQSettings: boolean; // showhide flag for additional settings on frequency plot
  public resultsErrorLength: number;
  public appendixEquationsforExport: Array<string>;
  private activeLayerID: number;
  public loggedInRole;
  public previousUrl;
  public showRegion: boolean;
  public editRegionScenario: boolean;
  public configSettings: Config;
  public units;
  public errors;
  public regTypes;
  public tempData;
  public itemBeingEdited;
  public uniqueRegRegions;
  public editScen;
  public paramsNeeded;
  public getBounds: boolean;
  private modalSubscript;
  public newRegRegForm: FormGroup;
  public showStateRegForm: boolean;
  public showNewRegRegForm: boolean;
  public CloseResult;
  public regions;
  public addCitation: boolean;
  public uploadPolygon: boolean;
  public editSGIndex; public editRRindex; public editIdx;
  public config: ToasterConfig = new ToasterConfig({ timeout: 0 });
  public regressionRegions;
  public addRegReg: boolean;
  public selectedRegRegion;
  public modalRef;
  // public changeStatGroup = false;
  public citations: Array<Citation>;
  private modalElement: any;

  constructor(
    private _nssService: NSSService,
    private _loaderService: LoaderService,
    private _toasterService: ToasterService,
    @Inject(DOCUMENT) private _document: any,
    private _pageScrollService: PageScrollService,
    private _authService: AuthService,
    private _fb: FormBuilder,
    private router: Router,
    private _settingsService: SettingsService,
    private _configService: ConfigService,
    private _modalService: NgbModal
  ) { }

  ngOnInit() {

    this.modalSubscript = this._nssService.showAddRegRegionModal.subscribe((show: boolean) => {
      if (show) { this.showModal(); }
    });

    this.modalElement = this.addRegressionRegionModal;

  }

  public showModal(): void {
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
}

  public showAddScenarioModal() {
    this._nssService.setAddScenarioModal(true);
  }

  private createNewRegression() {
    const regionID = this.newRegRegForm.value.state;
    this._settingsService
      .postEntity(this.newRegRegForm.value, this.configSettings.regionURL + regionID + '/' + this.configSettings.regRegionURL)
      .subscribe(
        (response) => {
          response.isEditing = false;
          if (!response.headers) {
            this._toasterService.pop('info', 'Info', 'Regression region was added');
          } else { this._settingsService.outputWimMessages(response); }
          if (this.addCitation) { // if user elected to add a citation, send that through
            this.createNewCitation(response);
          } else {
            this.cancelCreateRegression();
            this._nssService.setSelectedRegion(this.selectedRegion);
          }
          if (this.uploadPolygon) { // if user elected to upload a polygon, send that through
            this.uploadNewPolygon(response);
          } else {
            this.cancelCreateRegression();
            this._nssService.setSelectedRegion(this.selectedRegion);
          }
        }, error => {
          if (this._settingsService.outputWimMessages(error)) { return; }
          this._toasterService.pop('error', 'Error creating Regression Region', error._body.message || error.statusText);
        }
      );
  }

  public createNewCitation(rr) {
    // add new citation
    this._settingsService.postEntity(this.newCitForm.value, this.configSettings.regRegionURL + '/' + rr.id + '/' +
      this.configSettings.citationURL)
      .subscribe((res) => {
        this.newCitForm.reset();
        this.addCitation = false;
        rr.citationID = res.id;
        if (!res.headers) {
          this._toasterService.pop('info', 'Info', 'Citation was added');
        } else { this._settingsService.outputWimMessages(res); }
        this.cancelCreateRegression();
        this._nssService.setSelectedRegion(this.selectedRegion);
      }, error => {
        if (this._settingsService.outputWimMessages(error)) { return; }
        this._toasterService.pop('error', 'Error creating Citation', error._body.message || error.statusText);
      }
      );
  }

  private cancelCreateRegression() {
    this.showNewRegRegForm = false;
    this.newRegRegForm.reset();
    this.newCitForm.reset();
    this.modalRef.close();
  }

  public uploadNewPolygon(rr) {
    // Upload new polygon
    // TODO: Send polygon to services
    console.log("Polygon will be sent to services.")
  }

  // show add regression region modal
  public showNewRegressionRegionForm(rr?) {
    // shows form for creating new regression and/or citation
    if (rr) { // rr already exists, only want citation
      this.selectedRegRegion = rr;
      this.addCitation = true;
      //this.uploadPolygon = true?
      this.addRegReg = false;
    } else { // rr doesn't exist
      this.addRegReg = true;
      this.addCitation = false;
      this.uploadPolygon = false;
    }
    if (this.selectedRegion) { this.newRegRegForm.controls['state'].setValue(this.selectedRegion.id); }
    this.showNewRegRegForm = true;
    this.modalRef = this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' });
    this.modalRef.result.then(
      result => {
        // this is the solution for the first modal losing scrollability
        if (document.querySelector('body > .modal')) {
          document.body.classList.add('modal-open');
        }
        if (result) { this.cancelCreateRegression(); }
      },
      reason => { if (reason) { this.cancelCreateRegression(); } }
    );
  }

}
