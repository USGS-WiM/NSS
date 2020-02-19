// ------------------------------------------------------------------------------
// ----- atLeast1Req.modal.ts ---------------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: modal used to show about information

import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NSSService } from 'app/shared/services/app.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { SettingsService } from 'app/settings/settings.service';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { ToasterService } from 'angular2-toaster';
import { AuthService } from 'app/shared/services/auth.service';
import { Region } from '../../interfaces/region';
declare var MathJax: {
  Hub: { Queue, Config }
};

@Component({
  selector: 'addRegressionRegionModal',
  templateUrl: './addregressionregion.component.html',
  styleUrls: ['./addregressionregion.component.css']
})
export class AddRegressionRegionModal implements OnInit, OnDestroy {
  @ViewChild('addRegressionRegion') public addRegressionRegionModal;
  private modalElement: any;
  public CloseResult: any;
  private modalSubscript;
  public appVersion: string;
  public regressionRegions;
  public statisticGroups;
  public regressionTypes;
  public variables;
  public unitTypes;
  public equation;
  public errors;
  public cloneParameters: any;
  public regRegion: any;
  public statisticGroup: any;
  public clone: boolean;
  public selectedRegion;
  private configSettings: Config;
  public addPredInt = false;
  public modalRef;
  public loggedInRole;
  public selectedRegRegion;
  public addCitation: boolean;
  public uploadPolygon: boolean;
  public addRegReg: boolean;
  public showNewRegRegForm: boolean;
  public newRegRegForm: FormGroup;
  public newCitForm: FormGroup;
  public regions;

  constructor(private _nssService: NSSService, private _modalService: NgbModal, private _fb: FormBuilder,
    private _settingsService: SettingsService, private _configService: ConfigService, private _toasterService: ToasterService,
    private _authService: AuthService) {
    this.configSettings = this._configService.getConfiguration();
    this.newRegRegForm = _fb.group({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null),
      code: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required)
    });
    this.newCitForm = _fb.group({
      'title': new FormControl(null, Validators.required),
      'author': new FormControl(null, Validators.required),
      'citationURL': new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    this._nssService.currentItem.subscribe(item => this.cloneParameters = item);

    // subscriber for logged in role
    this.loggedInRole = localStorage.getItem('loggedInRole');
    this._authService.loggedInRole().subscribe(role => {
      if (role === 'Administrator' || role === 'Manager') {
        this.loggedInRole = role;
      }
    });
    this.modalSubscript = this._nssService.showAddRegRegionModal.subscribe((show: boolean) => {
      if (show) { this.showNewRegressionRegionForm(); }
    });
    this._nssService.selectedRegion.subscribe(region => {
      this.selectedRegion = region;
      if (region && region.id) { this.getRegRegions(); }
    });
    this._nssService.getVersion.subscribe((v: string) => {
      this.appVersion = v;
    });
    this._settingsService.getEntities(this.configSettings.statisticGrpURL).subscribe(res => {
      res.sort((a, b) => a.name.localeCompare(b.name));
      this.statisticGroups = res;
    });
    this._settingsService.getEntities(this.configSettings.regTypeURL).subscribe(res => {
      res.sort((a, b) => a.name.localeCompare(b.name));
      this.regressionTypes = res;
    });
    this._settingsService.getEntities(this.configSettings.variablesURL).subscribe(res => {
      res.sort((a, b) => a.name.localeCompare(b.name));
      this.variables = res;
    });
    this._settingsService.getEntities(this.configSettings.unitsURL).subscribe(res => {
      res.sort((a, b) => a.name.localeCompare(b.name));
      for (const unit of res) {
        unit['unit'] = unit['name'];
        unit['abbr'] = unit['abbreviation'];
      }
      this.unitTypes = res;
    });
    this._settingsService.getEntities(this.configSettings.errorsURL).subscribe(res => {
      res.sort((a, b) => a.name.localeCompare(b.name));
      this.errors = res;
    });
    this._nssService.regions.subscribe((regions: Array<Region>) => {
      this.regions = regions;
    });

    this.modalElement = this.addRegressionRegionModal;

  }

  public getRegRegions() {
    // moving to own function for when new regression region is added
    this._settingsService.getEntities(this.configSettings.regionURL + this.selectedRegion.id + '/' + this.configSettings.regRegionURL)
      .subscribe(res => {
        if (res.length > 1) { res.sort((a, b) => a.name.localeCompare(b.name)); }
        this.regressionRegions = res;
      });
  }

  public showModal(): void {
    if (this.selectedRegion) { this.getRegRegions(); }
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
    this.modalRef.result.then(
      result => {
        // this is the solution for the first modal losing scrollability
        if (document.querySelector('body > .modal')) {
          document.body.classList.add('modal-open');
        }
        this.CloseResult = `Closed with: ${result}`;
      },
      reason => {
        this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
        this.cancelCreateRegression();
      }
    );
  }

  outputWimMessages(msg) {
    // output messages from http request to toast
    for (const key of Object.keys(msg)) {
      for (const item of msg[key]) {
        this._toasterService.pop(key, key.charAt(0).toUpperCase() + key.slice(1), item);
      }
    }
  }

  hideDiv(divId) {
    // collapse param/error div
    const div = document.getElementById(divId);
    div.classList.add('hidden');
  }

  showDiv(divId) {
    // uncollapse param/error div
    const div = document.getElementById(divId);
    div.classList.remove('hidden');
  }

  checkDiv(divId) {
    // check if div is collapsed or not
    const div = document.getElementById(divId);
    if (div && div.classList.contains('hidden')) {
      return false;
    } else { return true; }
  }

  public showAddRegRegion() {
    this._nssService.setAddRegressionRegionModal(true);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) return 'by pressing ESC';
    else if (reason === ModalDismissReasons.BACKDROP_CLICK) return 'by clicking on a backdrop';
    else return `with: ${reason}`;
  }

  ngOnDestroy() {
    this.modalSubscript.unsubscribe();
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
    this.modalRef = this._modalService.open(this.addRegressionRegionModal, { backdrop: 'static', keyboard: false, size: 'lg' });
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

  private cancelCreateRegression() {
    this.showNewRegRegForm = false;
    this.newRegRegForm.reset();
    this.newCitForm.reset();
    this.modalRef.close();
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

  public uploadNewPolygon(rr) {
    // Upload new polygon
    // TODO: Send polygon to services
  }


}

