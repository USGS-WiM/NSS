// ------------------------------------------------------------------------------
// ----- regressiontypes.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regression types crud in admin settings page

import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NSSService } from 'app/shared/services/app.service';
import { Regressiontype } from 'app/shared/interfaces/regressiontype';
import { SettingsService } from '../../settings.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { Statisticgroup } from 'app/shared/interfaces/statisticgroup';
import { LoaderService } from 'app/shared/services/loader.service';

@Component({
    moduleId: module.id,
    templateUrl: 'regressiontypes.component.html'
})
export class RegressionTypesComponent implements OnInit, OnDestroy {
    @ViewChild('add', {static: true})
    public addRef: TemplateRef<any>;
    @ViewChild('RegressionForm', {static: true})
    regressionForm;
    public selectedRegion;
    public regions;
    public regressionTypes: Array<Regressiontype> = [];
    public nssRegressionTypes: Array<Regressiontype> = [];
    public gsRegressionTypes: Array<Regressiontype> = [];
    public newRegForm: FormGroup;
    public showNewRegForm: boolean;
    private CloseResult;
    private navigationSubscription;
    public loggedInRole;
    private configSettings: Config;
    public rowBeingEdited: number;
    public tempData;
    public isEditing = false;
    public modalRef;
    public statisticGroups: Array<Statisticgroup>;
    public selectedStatistic;
    public selectedRegionID;
    public selectedStatisticID;
    constructor(
        public _nssService: NSSService,
        public _settingsservice: SettingsService,
        public _route: ActivatedRoute,
        private _fb: FormBuilder,
        private _modalService: NgbModal,
        private router: Router,
        private _toasterService: ToasterService,
        private _configService: ConfigService,
        private _loaderService: LoaderService
    ) {
        this.newRegForm = _fb.group({
            name: new FormControl(null, Validators.required),
            description: new FormControl(null),
            code: new FormControl(null, Validators.required)
        });
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }

    ngOnInit() {
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.regionURL).subscribe(reg => {
            this.regions = reg;
        });
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.statisticGrpURL).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.statisticGroups = res;
        });
        this.selectedStatistic = 'none';
        this.selectedRegion = 'none';
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.regTypeURL).subscribe(res => {
            this.regressionTypes = res;
        });
    }

    public onRegSelect(r) {
        this._loaderService.showFullPageLoad();
        this.selectedRegion = r;
        this.selectedRegionID = r.id;
        var nssReturn = false;
        var gsReturn = false;
        if (r === 'none') {
            this.selectedRegionID = "";
        } 
        if(this.selectedStatistic === 'none'){
            this.selectedStatisticID = "";
        }
        this._settingsservice
            .getEntities(this.configSettings.nssBaseURL + this.configSettings.regTypeURL+"?regions="+ this.selectedRegionID +"&statisticgroups="+ this.selectedStatisticID)
            .subscribe(res => {
                this.nssRegressionTypes = res;
                nssReturn = true;
                if (nssReturn == true && gsReturn == true) {
                    this.combineRegressionTypes();
                }
            });
        this._settingsservice
            .getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.regTypeURL+"?regions="+ this.selectedRegionID +"&statisticgroups="+ this.selectedStatisticID)
            .subscribe(res => {
                this.gsRegressionTypes = res;
                gsReturn = true;
                if (nssReturn == true && gsReturn == true) {
                    this.combineRegressionTypes();
                }
            });
    }

    public onStatGroupSelect(e){
        this._loaderService.showFullPageLoad();
        this.selectedStatistic = e;
        this.selectedStatisticID = e.id;
        var nssReturn = false;
        var gsReturn = false;
        if (e === 'none') {
            this.selectedStatisticID = "";
        } 
        if(this.selectedRegion === 'none'){
            this.selectedRegionID = "";
        }
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.regTypeURL+"?regions="+ this.selectedRegionID +"&statisticgroups="+ this.selectedStatisticID)
            .subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.nssRegressionTypes = res;
            nssReturn = true;
                if (nssReturn == true && gsReturn == true) {
                    this.combineRegressionTypes();
                }
        });
        this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.regTypeURL+"?regions="+ this.selectedRegionID +"&statisticgroups="+ this.selectedStatisticID)
            .subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.gsRegressionTypes = res;
            gsReturn = true;
            if (nssReturn == true && gsReturn == true) {
                this.combineRegressionTypes();
            }
        });
    }

    public combineRegressionTypes(){
        this.regressionTypes = this.nssRegressionTypes.concat(this.gsRegressionTypes); //concatenate regressionType arrays
        this.regressionTypes = Array.from(this.regressionTypes.reduce((m, t) => m.set(t.name, t), new Map()).values()); //remove duplicates
        this._loaderService.hideFullPageLoad();
    }

    public getAllRegTypes() {
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.regTypeURL).subscribe(res => {
            this.regressionTypes = res;
        });
    }

    showNewRegressionForm() {
        this.newRegForm.controls['name'].setValue(null);
        this.newRegForm.controls['description'].setValue(null);
        this.showNewRegForm = true;
        this.newRegForm.controls['code'].setValue(null);
        this.modalRef = this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' });
        this.modalRef.result.then(
            result => {
                // this is the solution for the first modal losing scrollability
                if (document.querySelector('body > .modal')) {
                    document.body.classList.add('modal-open');
                }
                this.CloseResult = `Closed with: ${result}`;
                if (this.CloseResult) {
                    this.cancelCreateRegression();
                }
            },
            reason => {
                this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
                if (this.CloseResult) {
                    this.cancelCreateRegression();
                }
            }
        );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    private cancelCreateRegression() {
        this.newRegForm.reset();
        this.modalRef.close();
    }

    private createNewRegression() {
        const newReg = this.newRegForm.value;
        this._settingsservice.postEntity(newReg, this.configSettings.nssBaseURL + this.configSettings.regTypeURL).subscribe(
            (response: Regressiontype) => {
                response.isEditing = false;
                this._toasterService.pop('info', 'Info', 'Regression type was created');
                if (this.selectedRegion === 'none') {
                    this.getAllRegTypes();
                } else {
                    this.onRegSelect(this.selectedRegion);
                }
                this.cancelCreateRegression();
            }, error => {
                if (this._settingsservice.outputWimMessages(error)) {return; }
                this._toasterService.pop('error', 'Error creating Regression Type', error._body.message || error.statusText);
        }
        );
    }

    private EditRowClicked(i: number) {
        // make a copy in case they cancel
        this.regressionTypes[i].isEditing = true;
        //if there is a row already being edited, cancel that edit
        if (this.isEditing == true) {
            this.CancelEditRowClicked(this.rowBeingEdited);
        }
        this.tempData = Object.assign({}, this.regressionTypes[i]); 
        this.rowBeingEdited = i;
        this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.regressionTypes[i] = Object.assign({}, this.tempData);
        this.regressionTypes[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.regressionForm.form.dirty) {
            this.regressionForm.reset();
        }
    }

    // edits made, save clicked
    public saveRegression(u: Regressiontype, i: number) {
        if (u.name === undefined || u.description === undefined || u.code === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Regression Type', 'Name, description and Code are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.nssBaseURL + this.configSettings.regTypeURL).subscribe(
                (resp) => {
                    u.isEditing = false;
                    this.regressionTypes[i] = u;
                    this._settingsservice.setRegTypes(this.regressionTypes);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.regressionForm.form.dirty) { this.regressionForm.reset(); }
                    this._settingsservice.outputWimMessages(resp);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error updating Regression Type', error._body.message || error.statusText);
            }
            );
        }
    }

    // delete category type
    public deleteRegression(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Regression Type?');
        if (check) {
            // delete it
            const index = this.regressionTypes.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.nssBaseURL + this.configSettings.regTypeURL)
                .subscribe(result => {
                    this.regressionTypes.splice(index, 1);
                    this._settingsservice.setRegTypes(this.regressionTypes); // update service
                    this._settingsservice.outputWimMessages(result);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error deleting Regression Type', error._body.message || error.statusText);
            }
            );
        }
    }

    private getLoggedInRole() {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    }

    ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }
}
