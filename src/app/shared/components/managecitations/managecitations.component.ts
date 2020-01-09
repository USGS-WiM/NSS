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
import { Scenario } from 'app/shared/interfaces/scenario';
import { ToasterService } from 'angular2-toaster';
import { AuthService } from 'app/shared/services/auth.service';
import { Citation } from 'app/shared/interfaces/citation';
declare var MathJax: {
    Hub: { Queue, Config }
};

@Component({
    selector: 'manageCitationsModal',
    templateUrl: './managecitations.component.html',
    styleUrls: ['./managecitations.component.css']
})
export class ManageCitationsModal implements OnInit, OnDestroy {
    @ViewChild('manageCitations') public manageCitationsModal; // : ModalDirective;  //modal for validator
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
    public selectedRegion;
    private configSettings: Config;
    public addPredInt = false;
    public modalRef;
    public loggedInRole;
    public citations: Array<Citation>;
    public scenarios: Scenario[];

    constructor(private _nssService: NSSService, private _modalService: NgbModal, private _fb: FormBuilder,
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
        // show the filter modal == Change Filters button was clicked in sidebar
        this.modalSubscript = this._nssService.showManageCitationsModal.subscribe((show: boolean) => {
            if (show) { this.showModal(); }
        });
        this._nssService.selectedRegion.subscribe(region => {
            this.selectedRegion = region;
            if (region && region.id) {this.getRegRegions(); }
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
        // subscribe to scenarios
        this._nssService.scenarios.subscribe((s: Array<Scenario>) => {
            this.scenarios = s;
            this.getCitations(); // get full list of citations
            this.getRegRegions(); // get list of regression regions for the region
        });

        this.modalElement = this.manageCitationsModal;
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
        if (this.selectedRegion) {this.getRegRegions(); }
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

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) return 'by pressing ESC';
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) return 'by clicking on a backdrop';
        else return `with: ${reason}`;
    }

    ngOnDestroy() {
        this.modalSubscript.unsubscribe();
    }

    public getCitations() {
        this._settingsService.getEntities(this.configSettings.citationURL)
            .subscribe(res => {
                this.citations = res;
            });
    }
}
