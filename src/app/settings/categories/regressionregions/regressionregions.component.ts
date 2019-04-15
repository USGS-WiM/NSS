// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { NSSService } from 'app/shared/services/app.service';
import { Region } from 'app/shared/interfaces/region';
import { Regressionregion } from 'app/shared/interfaces/regressionregion';
import { SettingsService } from '../../settings.service';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

@Component({
    moduleId: module.id,
    templateUrl: 'regressionregions.component.html',
    styleUrls: ['../../settings.component.css']
})
export class RegressionRegionsComponent implements OnInit, AfterViewChecked, OnDestroy {
    @ViewChild('add')
    public addRef: TemplateRef<any>;
    @ViewChild('toRegion')
    public toRegionRef: TemplateRef<any>;
    @ViewChild('RegressionForm') regressionForm;
    public selectedRegion;
    public regions;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public regressionRegions: Array<Regressionregion>;
    public newRegRegForm: FormGroup;
    public stateRegRegForm: FormGroup;
    public showStateRegForm: boolean;
    public showNewRegRegForm: boolean;
    private modalElement: any;
    public CloseResult: any;
    private modalRef: any;
    private navigationSubscription;
    public loggedInRole;
    private configSettings: Config;
    public rowBeingEdited: number;
    public tempData;
    private isEditing = false;

    constructor(
        public _nssService: NSSService,
        public _settingsservice: SettingsService,
        public _route: ActivatedRoute,
        private _fb: FormBuilder,
        private _modalService: NgbModal,
        private _cdr: ChangeDetectorRef,
        private router: Router,
        private _toasterService: ToasterService,
        private _configService: ConfigService
    ) {
        this.newRegRegForm = _fb.group({
            name: new FormControl(null, Validators.required),
            description: new FormControl(null),
            code: new FormControl(null, Validators.required),
            state: new FormControl(null, Validators.required)
        });
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }

    ngOnInit() {
        this._settingsservice.getEntities(this.configSettings.regionURL).subscribe(regions => {
            this.regions = regions;
        });
        this.selectedRegion = 'none';
        this.getAllRegRegions();
    }

    public onRegSelect(r) {
        this.selectedRegion = r;
        if (r === 'none') {
            this.getAllRegRegions();
        } else {
            this.getRegRegions(r);
        }
    }

    public getRegRegions(r) {
        this._settingsservice.getEntities(this.configSettings.regionURL + r.id + '/' + this.configSettings.regRegionURL).subscribe(regs => {
            this.regressionRegions = regs;
        });
    }

    public getAllRegRegions() {
        this._settingsservice.getEntities(this.configSettings.regRegionURL).subscribe(res => {
            this.regressionRegions = res;
        });
    }

    public showNewRegressionRegionForm() {
        this.newRegRegForm.controls['name'].setValue(null);
        this.newRegRegForm.controls['description'].setValue('');
        if (this.selectedRegion) {this.newRegRegForm.controls['state'].setValue(this.selectedRegion.id); }
        this.showNewRegRegForm = true;
        this.newRegRegForm.controls['code'].setValue(null);
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(
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
        this.showNewRegRegForm = false;
        this.newRegRegForm.reset();
    }

    private createNewRegression() {
        const region = this.newRegRegForm.value.state;
        const newRegReg = this.newRegRegForm.value;
        delete newRegReg.state;
        this._settingsservice
            .postEntity(newRegReg, this.configSettings.regionURL + region + '/' + this.configSettings.regRegionURL)
            .subscribe(
                (response: Regressionregion) => {
                    response.isEditing = false;
                    this._toasterService.pop('success', 'Success', 'Regression Region was created');
                    this.getRegRegions(this.selectedRegion);
                    this.cancelCreateRegression();
                }, error => { this._toasterService.pop('error', 'Error creating Regression Region', error._body.message || error.statusText); }
            );
    }

    private EditRowClicked(i: number) {
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.regressionRegions[i]); // make a copy in case they cancel
        this.regressionRegions[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.regressionRegions[i] = Object.assign({}, this.tempData);
        this.regressionRegions[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.regressionForm.form.dirty) {
            this.regressionForm.reset();
        }
    }

    // edits made, save clicked
    public saveRegression(u: Regressionregion, i: number) {
        if (u.name === undefined || u.code === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Error', 'Name and Code are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.regRegionURL).subscribe(
                (resp: Regressionregion) => {
                    this._toasterService.pop('success', 'Success', 'Regression Region was updated');
                    u.isEditing = false;
                    this.regressionRegions[i] = u;
                    this._settingsservice.setRegRegions(this.regressionRegions);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.regressionForm.form.dirty) { this.regressionForm.reset(); }
                }, error => { this._toasterService.pop('error', 'Error updating Regression Region', error._body.message || error.statusText); }
            );
        }
    }

    // delete category type
    public deleteRegression(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Regression Region?');
        if (confirm) {
            // delete it
            const index = this.regressionRegions.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.regRegionURL)
                .subscribe(result => {
                    this._toasterService.pop('success', 'Success', 'Regression Region was deleted');
                    this.regressionRegions.splice(index, 1);
                    this._settingsservice.setRegRegions(this.regressionRegions); // update service
                }, error => { this._toasterService.pop('error', 'Error deleting Regression Region', error._body.message || error.statusText); }
            );
        }
    }

    ngAfterViewChecked() {
        this._cdr.detectChanges();
    }

    private getLoggedInRole() {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    }

    ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }
}
