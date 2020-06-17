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
import { Citation } from 'app/shared/interfaces/citation';
import { ManageCitation } from 'app/shared/interfaces/managecitations';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
    public scenarios: Scenario[];
    public filteredData;
    public filterText;
    public showAddCitations;

    constructor(private _http: HttpClient, private _nssService: NSSService, private _modalService: NgbModal,
        private _settingsService: SettingsService, private _configService: ConfigService, private _toasterService: ToasterService,
        private _authService: AuthService) {
        this.configSettings = this._configService.getConfiguration();
    }

    ngOnInit() {
        // subscriber for logged in role
        this.loggedInRole = localStorage.getItem('loggedInRole');
        this._authService.loggedInRole().subscribe(role => {
            if (role === 'Administrator' || role === 'Manager') {
                this.loggedInRole = role;
            }
        });
        this.modalSubscript = this._nssService.showManageCitationsModal.subscribe((show: boolean) => {
            if (show) { 
                this.showModal(); 
                this.filterText = "";
                this.filter(this.filterText);
            }
        });
        this._nssService.selectedRegion.subscribe(region => {
            this.selectedRegion = region;
            if (region && region.id) {this.getRegRegions(); }
        });
        // subscribe to scenarios
        this._nssService.scenarios.subscribe((s: Array<Scenario>) => {
            this.scenarios = s;
            this.getCitations(); // get full list of citations
            this.getRegRegions(); // get list of regression regions for the region
        });
        this.modalSubscript = this._nssService.showManageCitationsModal.subscribe((result: ManageCitation) => {
            if (result.show) { 
                this.showAddCitations = result.addCitation;
              }
          });
        this.modalElement = this.manageCitationsModal;

        // Subscribe to server with '?bycitation=true'
        // Copy settingservice getEntities on regions.component.ts file
    }

    public filter(input:string) {
        this.filterText = input;
        this.filteredData = this.citations.filter(c => 
            c != null &&
            (c.author.toLowerCase().includes(input.toLowerCase()) ||
            c.title.toLowerCase().includes(input.toLowerCase()) ||
            (c.regressionRegions.filter(rr => rr.name.toLowerCase().includes(input.toLowerCase())).length > 0)));
    }

    public getRegRegions() {
        // moving to own function for when new regression region is added
        this._settingsService.getEntities(this.configSettings.regionURL + this.selectedRegion.id + '/' + this.configSettings.regRegionURL)
            .subscribe(res => {
            if (res.length > 1) { res.sort((a, b) => a.name.localeCompare(b.name)); }
            this.regressionRegions = res;
        });
    }

    public addExistingCitation(citation){
        this._nssService.addExistingCitation(citation);   
    }

    public showModal(): void {
        if (this.selectedRegion) {this.getRegRegions(); }
        this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
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

        this._http.get(this.configSettings.baseURL+this.configSettings.citationURL, { headers: header, observe: "response"})
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

    public deleteCitation(id) {
        const check = confirm('Are you sure you want to delete this citation?');
        if (check) {
            this._settingsService.deleteEntity(id, this.configSettings.citationURL).subscribe(result => {
                this._nssService.setSelectedRegion(this.selectedRegion);
                if (result.headers) { this._nssService.outputWimMessages(result); }
            }, error => {
                if (error.headers) {this._nssService.outputWimMessages(error);
                } else { this._nssService.handleError(error); }
            });
        }
    }
}
