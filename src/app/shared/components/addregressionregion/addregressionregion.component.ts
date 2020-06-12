// ------------------------------------------------------------------------------
// ----- atLeast1Req.modal.ts ---------------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: modal used to add a new regression region

import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NSSService } from 'app/shared/services/app.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SettingsService } from 'app/settings/settings.service';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { ToasterService } from 'angular2-toaster';
import { AuthService } from 'app/shared/services/auth.service';
import { Region } from '../../interfaces/region';
import * as L from 'leaflet';
import * as shp from 'shpjs';
import { AddRegressionRegion } from 'app/shared/interfaces/addregressionregion';
import { LoaderService } from 'app/shared/services/loader.service';
import { Regressionregion } from 'app/shared/interfaces/regressionregion';
import { Statisticgroup } from 'app/shared/interfaces/statisticgroup';
import { Regressiontype } from 'app/shared/interfaces/regressiontype';

@Component({
  selector: 'addRegressionRegionModal',
  templateUrl: './addregressionregion.component.html',
  styleUrls: ['./addregressionregion.component.css']
})
export class AddRegressionRegionModal implements OnInit, OnDestroy {
  @ViewChild('addRegressionRegion', {static: true}) public addRegressionRegionModal;
  private modalElement: any;
  public CloseResult: any;
  private modalSubscript;
  public regressionRegions;
  public selectedRegion;
  private configSettings: Config;
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
  public map;
  public loadingPolygon: boolean;
  private input;
  private file;
  private polygonLayer;
  private selectedCitation;
  public currentCitation;
  public selectedRegressionRegion: Array<Regressionregion>;
  public tempSelectedRegressionRegion: Array<Regressionregion>;
  public newCitation: boolean;
  public rr;

  public tempSelectedStatisticGrp: Array<Statisticgroup>;
  public get selectedStatisticGrp(): Array<Statisticgroup> {
      return this._nssService.selectedStatGroups;
  }

  public tempSelectedRegType: Array<Regressiontype>;
  public get selectedRegType(): Array<Regressiontype> {
      return this._nssService.selectedRegressionTypes;
  }
  constructor(private _nssService: NSSService,
              private _modalService: NgbModal,
              private _fb: FormBuilder,
              private _settingsService: SettingsService,
              private _configService: ConfigService,
              private _toasterService: ToasterService,
              private _authService: AuthService,
              private _loaderService: LoaderService) {
    this.configSettings = this._configService.getConfiguration();
    this.newRegRegForm = _fb.group({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null),
      code: new FormControl(null, Validators.required),
      region: new FormControl(null, Validators.required),
      location: new FormControl(null),
      citationID: new FormControl(null)
    });
    this.newCitForm = _fb.group({
      'title': new FormControl(null, Validators.required),
      'author': new FormControl(null, Validators.required),
      'citationURL': new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    // subscriber for logged in role
    this.loggedInRole = localStorage.getItem('loggedInRole');
    this._authService.loggedInRole().subscribe(role => {
      if (role === 'Administrator' || role === 'Manager') {
        this.loggedInRole = role;
      }
    });
    this.modalSubscript = this._nssService.showAddRegRegionModal.subscribe((result: AddRegressionRegion) => {
      if (result.show) { 
          this.rr = result.regRegionID;
          this.showNewRegressionRegionForm(result.regRegionID);
          this.loadMap();
        }
    });
    this._nssService.selectedRegion.subscribe(region => {
      this.selectedRegion = region;
    });
    this._nssService.regressionRegions.subscribe(res => {
      if (res.length > 1) { res.sort((a, b) => a.name.localeCompare(b.name)); }
      this.regressionRegions = res;
  });
    this._nssService.regions.subscribe((regions: Array<Region>) => {
      this.regions = regions;
    });
    this._nssService.selectedRegRegions.subscribe((regRegions: Array<Regressionregion>) => {
      this.selectedRegressionRegion = regRegions;
    });
    this._nssService.currentCitation.subscribe(item => {
      this.currentCitation = item;
      if (this.currentCitation != " ") {
        this.addExistingCitation();
      }
    });
    this.modalElement = this.addRegressionRegionModal;
    this.uploadPolygon = true;
    this.loadingPolygon = false;

  }
  public saveFilters(){
    this.tempSelectedStatisticGrp = this.selectedStatisticGrp;
    this.tempSelectedRegressionRegion = this.selectedRegressionRegion;
    this.tempSelectedRegType = this.selectedRegType;
  }

  public requeryFilters(){
    this._nssService.selectedStatGroups = this.tempSelectedStatisticGrp;
    this._nssService.setSelectedRegRegions(this.tempSelectedRegressionRegion);
    this._nssService.selectedRegressionTypes = this.tempSelectedRegType;
  }
  public loadMap() {
    // Initialize basemap layers
    const tileLayer_topography = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    });
    const tileLayer_streets = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
    });
    const tileLayer_grayscale = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
    });
    const tileLayer_satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    // Initialize map 
    this.map = new L.Map('map', {
      center: new L.LatLng(39.8283, -98.5795),
      zoom: 4,
      layers: [tileLayer_streets]
    });

    // Create basemap collection
    const baseMaps = {
      'Streets': tileLayer_streets,
      'Topography': tileLayer_topography,
      'Grayscale': tileLayer_grayscale,
      'Satellite': tileLayer_satellite
    };

    // Add basemap control to the map
    L.control.layers(baseMaps).addTo(this.map);

  }


  public showModal(): void {
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

  public showManageCitationsModal() {
    this._nssService.showAddCitations(false);
    this._nssService.setManageCitationsModal(true);
  }

  public addExistingCitation(){
    this.newRegRegForm.controls['citationID'].setValue(this.currentCitation.id);
    this.newCitForm.controls['title'].setValue(this.currentCitation.title);
    this.newCitForm.controls['author'].setValue(this.currentCitation.author);
    this.newCitForm.controls['citationURL'].setValue(this.currentCitation.citationURL);  
  }
  
  outputWimMessages(msg) {
    // output messages from http request to toast
    const existingMsgs = [];
    for (const key of Object.keys(msg)) {
        for (const item of msg[key]) {
            // skip duplicate messages
            if (existingMsgs.indexOf(item) == -1) {
                existingMsgs.push(item);
                this._toasterService.pop(key, key.charAt(0).toUpperCase() + key.slice(1), item);
            }
        }
    }
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
    // shows form for creating new regression or editing regression 
    if (rr) { // edit existing regression region
      this._loaderService.showFullPageLoad();
      this.addRegReg = false;
      this._settingsService.getEntities(this.configSettings.regRegionURL + '/' + rr + '?includeGeometry=true')
        .subscribe((res) => {
          this.selectedRegRegion = res;
          // set values in add regression region modal
          this.newRegRegForm.controls['name'].setValue(this.selectedRegRegion.name);
          this.newRegRegForm.controls['description'].setValue(this.selectedRegRegion.description);
          this.newRegRegForm.controls['code'].setValue(this.selectedRegRegion.code);
          this.newRegRegForm.controls['location'].setValue(this.selectedRegRegion.location);
          if (this.selectedRegRegion.citationID) { // if there is a citation set values in modal
            this.newRegRegForm.controls['citationID'].setValue(this.selectedRegRegion.citationID);
            this.addCitation = true;
            this._settingsService.getEntities(this.configSettings.citationURL + '/' + this.selectedRegRegion.citationID)
              .subscribe(res => {
                  this.selectedCitation = res;
                  this.newCitForm.controls['title'].setValue(this.selectedCitation.title);
                  this.newCitForm.controls['author'].setValue(this.selectedCitation.author);
                  this.newCitForm.controls['citationURL'].setValue(this.selectedCitation.citationURL);
              }
            );
          } else { // no citation closes citation part of modal
            this.addCitation = false;
          }
          if (this.selectedRegRegion.location) { // if there is a polygon set values in modal
            this.uploadPolygon = true;
            this.addGeojsonToMap(this.selectedRegRegion.location.geometry);
          } else {  // no polygon closes polygon part of modal
            this.uploadPolygon = false;
          }
          this._loaderService.hideFullPageLoad();
        }
      );
    } else { // rr doesn't exist, create new regression
      this.addRegReg = true;
      this.addCitation = false;
      this.uploadPolygon = false;
    }
    if (this.selectedRegion) { //set region in new regression region modal
      this.newRegRegForm.controls['region'].setValue(this.selectedRegion.id); 
    }
    this.showNewRegRegForm = true;
    this.modalRef = this._modalService.open(this.addRegressionRegionModal, { backdrop: 'static', keyboard: false, size: 'lg' });
    this.modalRef.result.then(
      result => {
        // this is the solution for the first modal losing scrollability
        if (document.querySelector('body > .modal')) {
          document.body.classList.add('modal-open');
        }
        if (result) { 
          this.cancelCreateRegression(); 
        }
      },
      reason => { 
        if (reason) { 
          this.cancelCreateRegression();
        } 
      }
    );
  }

  private cancelCreateRegression() {
    this.showNewRegRegForm = false;
    this.newRegRegForm.reset();
    this.newCitForm.reset();
    this.modalRef.close();
  }

  private createNewRegression() {
    this._loaderService.showFullPageLoad();
    const regionID = this.newRegRegForm.value.region;
    this.saveFilters();
    if (!this.uploadPolygon) {
        this.newRegRegForm.get('location').setValue(null);
    }
    this._settingsService
      .postEntity(this.newRegRegForm.value, this.configSettings.regionURL + regionID + '/' + this.configSettings.regRegionURL)
      .subscribe((response:any) => {
        response.isEditing = false;
        if (!response.headers) {
          this._toasterService.pop('info', 'Info', 'Regression region was added');
        } else { this._settingsService.outputWimMessages(response); }
        if (this.addCitation && this.newCitation == true){ // if user elected to add a citation, send that through
            this.createNewCitation(this.selectedRegRegion);
        } else {
          this.cancelCreateRegression();
          this.requeryFilters();
        }
      }, error => {
        this._loaderService.hideFullPageLoad();
        if (this._settingsService.outputWimMessages(error)) { return; }
        this._toasterService.pop('error', 'Error creating Regression Region', error.message || error._body.message || error.statusText);
      }
    );
  }

  private editRegressionRegion() {
    this._loaderService.showFullPageLoad();
    this.saveFilters();
    if (!this.uploadPolygon) { // No polygon
        this.newRegRegForm.get('location').setValue(null);
    }
    this._settingsService.putEntity(this.selectedRegRegion.id, this.newRegRegForm.value, this.configSettings.regRegionURL).subscribe(res => {
            if (!res.headers) {
              this._toasterService.pop('info', 'Info', 'Regression Region was updated');
              this.modalRef.close();
            } else {this._settingsService.outputWimMessages(res); }
            if (this.addCitation && this.selectedRegRegion.citationID) { // Editing citation
                this._settingsService.putEntity(this.selectedRegRegion.citationID, this.newCitForm.value, this.configSettings.citationURL)
                .subscribe((response: any) => {
                  if (!response.headers) { // Citation successfully updated
                    this._toasterService.pop('info', 'Info', 'Citation was updated');
                  } else { 
                    this._settingsService.outputWimMessages(response); 
                    this.cancelCreateRegression(); 
                  }
                  this.requeryFilters();
                  this.cancelCreateRegression();
                }, error => {
                  this._loaderService.hideFullPageLoad();
                  if (this._settingsService.outputWimMessages(error)) { return; }
                  this._toasterService.pop('error', 'Error creating Citation', error.message || error._body.message || error.statusText);
                });
            } else if (this.addCitation && this.newCitation == true) {
                this.createNewCitation(this.selectedRegRegion);
            } else {
                this.requeryFilters();
                this.cancelCreateRegression();
            }
        }, error => {
            this._loaderService.hideFullPageLoad();
            if (this._settingsService.outputWimMessages(error)) {return; }
            this._toasterService.pop('error', 'Error editing Regression Region', error.message || error._body.message || error.statusText); }
        );  
  }

  public removeCitation(){
    this.saveFilters();
    const idx = this.regressionRegions.findIndex(r => r.id === this.rr);
    const regReg = this.regressionRegions[idx];
    regReg.citationID = null;
    this._settingsService.putEntity(this.rr, regReg, this.configSettings.regRegionURL)
        .subscribe((response) => {
            this.requeryFilters();
            this._nssService.outputWimMessages(response);
        }, error => {
            if (this._settingsService.outputWimMessages(error)) {return; }
            this._toasterService.pop('error', 'Error removing Citation', error._body.message || error.statusText);
        }
    );
    this.selectedRegRegion.citationID=null;
    this.addCitation = false; 
    this.newCitForm.reset(); 
    this.newCitation = true;
  }

  public createNewCitation(rr) {
    // add new citation
    this._settingsService.postEntity(this.newCitForm.value, this.configSettings.regRegionURL + '/' + rr.id + '/' +
      this.configSettings.citationURL)
      .subscribe((response: any) => {
        this.newCitForm.reset();
        this.addCitation = false;
        rr.citationID = response.id;
        if (!response.headers) {
          this._toasterService.pop('info', 'Info', 'Citation was added');
        } else { this._settingsService.outputWimMessages(response); }
        this.cancelCreateRegression();
        this.requeryFilters();
      }, error => {
          this._loaderService.hideFullPageLoad();
        if (this._settingsService.outputWimMessages(error)) { return; }
        this._toasterService.pop('error', 'Error creating Citation', error.message || error._body.message || error.statusText);
      }
      );
  }


  public addGeojsonToMap(polygon: any) {
    this.polygonLayer = L.geoJSON(polygon, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#000000',
        fillOpacity: 0.8,
        fillColor: '#fc8d62'
      })
    });
    setInterval(() => {
      this.map.invalidateSize();
    }, 100);
    this.map.addLayer(this.polygonLayer);
    this.map.fitBounds(this.polygonLayer.getBounds());
  }

  async SHPtoGEOJSON(form: any) {
    const self = this;
    await this._nssService.readFileContent(this.file)
      .toPromise().then(
        res => {
          shp(res).then(function (geojson) {
            self.addGeojsonToMap(geojson);
            self.loadingPolygon = false;
            
            const output = { 
              geometry: geojson.features[0].geometry,
              associatedCodes: self.newRegRegForm.get('code').value
            }

            self.newRegRegForm.get('location').setValue(output);
          })
        }
      );
    this._loaderService.hideFullPageLoad();
  }

  public loadFile() {
    this._loaderService.showFullPageLoad();
    this.input = document.getElementById('fileinput');
    if (!this.input.files[0]) {
      this._loaderService.hideFullPageLoad();
      alert("Please select a file.");
    } else {
      this.loadingPolygon = true;
      this.file = this.input.files[0];
      if (this.polygonLayer) this.map.removeLayer(this.polygonLayer);
      this.SHPtoGEOJSON(this.file);
    }
  }

  public showMap() {
    this.uploadPolygon = true;
    if (this.polygonLayer) {
      this.map.removeLayer(this.polygonLayer);
      this.map.setView(new L.LatLng(39.8283, -98.5795), 4);
    }
    setInterval(() => {
      this.map.invalidateSize();
    }, 100);
  }

  
}