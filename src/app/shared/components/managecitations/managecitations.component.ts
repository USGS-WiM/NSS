// ------------------------------------------------------------------------------
// ----- atLeast1Req.modal.ts ---------------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: modal used to show about information

import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NSSService } from 'app/shared/services/app.service';
import { SettingsService } from 'app/settings/settings.service';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { Scenario } from 'app/shared/interfaces/scenario';
import { ToasterService } from 'angular2-toaster';
import { AuthService } from 'app/shared/services/auth.service';
import { ManageCitation } from 'app/shared/interfaces/managecitations';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AddRegressionRegion } from 'app/shared/interfaces/addregressionregion';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Statisticgroup } from 'app/shared/interfaces/statisticgroup';
import { Regressionregion } from 'app/shared/interfaces/regressionregion';
import { Regressiontype } from 'app/shared/interfaces/regressiontype';
import { Region } from 'app/shared/interfaces/region';

@Component({
    selector: 'manageCitationsModal',
    templateUrl: './managecitations.component.html',
    styleUrls: ['./managecitations.component.scss']
})
export class ManageCitationsModal implements OnInit, OnDestroy {
    @ViewChild('manageCitations', {static: true}) public manageCitationsModal; // : ModalDirective;  //modal for validator
    private modalElement: any;
    private modalSubscript;
    public regressionRegions;
    public selectedRegion;
    private configSettings: Config;
    public modalRef;
    public loggedInRole;
    public citations;
    public tempCitations;
    public scenarios: Scenario[];
    public filteredData;
    public filterText;
    public showAddCitations;
    public showNewCitation = false;
    public itemBeingEdited;
    public tempData;
    public editIdx;
    public managerCitations: any[];
    public newCitForm: FormGroup;
    public regions: Array<Region>;
    public managerRegressionRegions: any[] = [];
    public inGagePage: boolean;
    public inGageStats: boolean = false;
    //public selectCitation: {id: 1};
    public selectedRow: number;
    public url;

    public tempSelectedStatisticGrp: Array<Statisticgroup>;
    public get selectedStatisticGrp(): Array<Statisticgroup> {
        return this._nssService.selectedStatGroups;
    }
    public selectedRegressionRegion: Array<Regressionregion>;
    public tempSelectedRegressionRegion: Array<Regressionregion>;
    public tempSelectedRegType: Array<Regressiontype>;
    public get selectedRegType(): Array<Regressiontype> {
        return this._nssService.selectedRegressionTypes;
    }

    constructor(private _http: HttpClient, private _nssService: NSSService, private _modalService: NgbModal,
        private _settingsService: SettingsService, private _configService: ConfigService,  private _fb: FormBuilder, private _toasterService: ToasterService,
        private _authService: AuthService) {
        this.configSettings = this._configService.getConfiguration();
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
        this._nssService.selectedRegion.subscribe(region => {
            this.selectedRegion = region;
        });
        this._nssService.regions.subscribe((regions: Array<Region>) => {
            this.regions = regions;
        });
        this.modalSubscript = this._nssService.showManageCitationsModal.subscribe((result: ManageCitation) => {
            if (result.show) { 
                this.showAddCitations = result.addCitation;
                this.inGagePage = result.inGagePage;
                this.inGageStats = result.inGageStats
                this.getCitations();
                this.selectedRow = result.selectCitation;
                this.showModal(); 
                this.filterText = "";
                this.filter(this.filterText);
            }
        });
        // subscribe to scenarios
        this._nssService.scenarios.subscribe((s: Array<Scenario>) => {
            this.scenarios = s;
            this.getCitations(); // get full list of citations
            this.getRegRegions(); // get list of regression regions for the region
            if (this.loggedInRole == 'Manager') {
                this.getManagerCitations();
                this.getManagerRegressionRegions();
            }
        });
        this.modalElement = this.manageCitationsModal;

        // Subscribe to server with '?bycitation=true'
        // Copy settingservice getEntities on regions.component.ts file
    }  // End OnInit

    public setURL() {
        if (this.inGagePage) {
            this.url = this.configSettings.gageStatsBaseURL + this.configSettings.citationURL
        }
        else {
            this.url = this.configSettings.nssBaseURL + this.configSettings.citationURL
        }    
    }

    public saveFilters(){
        this.tempSelectedStatisticGrp = this.selectedStatisticGrp;
        this.tempSelectedRegressionRegion = this.selectedRegressionRegion;
        this.tempSelectedRegType = this.selectedRegType;
    }
    
    public requeryFilters(){
        this._nssService.selectedStatGroups = this.tempSelectedStatisticGrp;
        this._nssService.selectedRegressionTypes = this.tempSelectedRegType;
    }

    public filter(input:string) {
        this.filterText = input;
        // Citations from NSS (w/ regression regions)
        if (!this.inGagePage) {
        this.filteredData = this.citations.filter(c => 
            c != null &&
            (c.author.toLowerCase().includes(input.toLowerCase()) ||
            c.title.toLowerCase().includes(input.toLowerCase()) ||
            (c.regressionRegions.filter(rr => rr.name.toLowerCase().includes(input.toLowerCase())).length > 0)));
        } 
        //Citations from GSS
        if (this.inGagePage) {
            if (this.citations == null) {
                return
            } else { 
                this.filteredData = this.citations.filter(c => 
                    c != null &&
                    (c.author.toLowerCase().includes(input.toLowerCase()) ||
                    c.title.toLowerCase().includes(input.toLowerCase()) ));
                } 
            }
    }

    public getRegRegions() {
        // moving to own function for when new regression region is added, get RegRegions from NSS
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.regionURL + '/' + this.selectedRegion.id + '/' + this.configSettings.regRegionURL)
            .subscribe(res => {
            if (res.length > 1) { res.sort((a, b) => a.name.localeCompare(b.name)); }
            this.regressionRegions = res;
        });
    }

    public addExistingCitation(citation){
        this._nssService.addExistingCitation(citation);   
    }

    public editRegRegion(id) {
        const addRegRegForm: AddRegressionRegion = {
            show: true,
            regRegionID: id
        }
        this._nssService.setAddRegressionRegionModal(addRegRegForm);
    }
    
    public showModal(): void {
        if (this.selectedRegion) {this.getRegRegions(); }
        this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
    }

    public editRowClicked(item, idx?) {
        if (this.itemBeingEdited && this.itemBeingEdited.isEditing && this.tempData && this.itemBeingEdited.title !== item.title) {
            this.CancelEditRowClicked();
        } // if another item was being edited, cancel that
        this.tempData = JSON.parse(JSON.stringify(item)); // make a copy in case they cancel
        this.tempCitations = JSON.parse(JSON.stringify(this.citations));
        idx >= 0 ? this.editIdx = idx : this.editIdx = null;
        this.itemBeingEdited = item;
        item.isEditing = true;
    }

    public CancelEditRowClicked() {
        this.itemBeingEdited.isEditing = false;
        this.filteredData[this.editIdx] = this.tempData;
        this.citations = this.tempCitations;
    }

    public saveCitation(c) {
        // put edited scenario
        this.setURL();
        this._settingsService.putEntity(c.id, c, this.url)
            .subscribe((response) => {
                c.isEditing = false;
                this._nssService.setSelectedRegion(this.selectedRegion); // update everything
                this._nssService.outputWimMessages(response);
            }, error => {
                if (this._settingsService.outputWimMessages(error)) {return; }
                this._toasterService.pop('error', 'Error editing Citation', error._body.message || error.statusText);
            }
        );
    }
    
    public clearCitation(){
        this.newCitForm.reset();
    }

    public createNewCitation(){
        this.saveFilters();
          // add new citation
        this.setURL();
        this._settingsService.postEntity(this.newCitForm.value, this.url)
        .subscribe((response: any) => {
            this.newCitForm.reset();
            this.showNewCitation = false;
            if (!response.headers) {
                this._toasterService.pop('info', 'Info', 'Citation was added');
            } else { 
                this._settingsService.outputWimMessages(response); 
            }
            this.requeryFilters();
        }, error => {
            if (this._settingsService.outputWimMessages(error)) { return; }
            this._toasterService.pop('error', 'Error creating Citation', error.message || error._body.message || error.statusText);
        });
    }

    public setSelectedCitation(c) {
        if(this.inGagePage) {
            this._nssService.setSelectedCitation(c);
            this.selectedRow = c.id;
        }
    }

    outputWimMessages(msg) {
        // takes messages from http requests and outputs into toast
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

    ngOnDestroy() {
        this.modalSubscript.unsubscribe();
    }

    public getCitations() {
        const header: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        this.setURL();
        this._http.get(this.url, { headers: header, observe: "response"})
            .subscribe(res => {
                this.citations = res.body;
                this.filteredData = this.citations.filter(function (filter) {
                    return filter != null;
                });
                if (this.filterText) {
                    this.filter(this.filterText);
                }
            })
    }

    public checkManagerCitations(c){
        if (this.loggedInRole == "Manager") {
            return this.managerCitations.filter(mc => mc.id == c.id).length > 0;
        } else {
            return true;
        }
    }

    public checkManagerRegressionRegions(r){
        let tempRegressionRegions = [];
        this.managerRegressionRegions.forEach(m => {
            m.forEach(x => {
                tempRegressionRegions.push(x);
            })
        })
        if (this.loggedInRole == "Manager") {
            return tempRegressionRegions.filter(mc => mc.id == r.id).length > 0;
        } else {
            return true;
        }
    }

    public getManagerCitations() {
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.citationURL)
        .subscribe(res => {
           this.managerCitations = res.filter(item => item !== null);
        });
    }

    public getManagerRegressionRegions(){
        this.managerRegressionRegions = [];
        this.regions.forEach(r => {
            this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.regionURL + '/' + r.id + '/' + this.configSettings.regRegionURL)
            .subscribe(res => {
                this.managerRegressionRegions.push(res);
            });
        })
    }

    public deleteCitation(id) {
        const check = confirm('Are you sure you want to delete this citation?');
        this.setURL();
        if (check) {
            this._settingsService.deleteEntity(id, this.url).subscribe(result => {
                this._nssService.setSelectedRegion(this.selectedRegion);
                if (result.headers) { this._nssService.outputWimMessages(result); }
            }, error => {
                if (error.headers) {this._nssService.outputWimMessages(error);
                } else { this._nssService.handleError(error); }
            });
        }
    }
}
