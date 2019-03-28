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

import { NSSService } from '../../../shared/services/app.service';
import { Region } from '../../../shared/interfaces/region';
import { Scenario } from '../../../shared/interfaces/scenario';
import { Statisticgroup } from '../../../shared/interfaces/statisticgroup';
import { Regressiontype } from '../../../shared/interfaces/regressiontype';
import { Regressionregion } from '../../../shared/interfaces/regressionregion';
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
    private loggedInRole;
    private configSettings: Config;
    public rowBeingEdited: number;
    public tempData;
    public allRegressionRegions: Array<Regressionregion>;
    private isEditing = false;

    constructor(
        public _nssService: NSSService,
        public _settingsservice: SettingsService,
        public _route: ActivatedRoute,
        private _fb: FormBuilder,
        private _modalService: NgbModal,
        private _cdr: ChangeDetectorRef,
        private router: Router,
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
        this.getAllRegRegions();
    }

    public onRegSelect(r: Region) {
        this.selectedRegRegionIDs = [];
        this.selectedStatGroupIDs = [];
        this.selectedRegTypeIDs = [];
        this.selectedRegion = r;
        this.getRegRegions(r);
    }

    public getRegRegions(r) {
        this._settingsservice.getEntities(this.configSettings.regionURL + r.id + '/' + this.configSettings.regRegionURL).subscribe(regs => {
            this.regressionRegions = regs;
        });
    }

    public getAllRegRegions() {
        this._settingsservice.getEntities(this.configSettings.statisticGrpURL).subscribe(res => {
            this.allRegressionRegions = res;
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

    /*private showStateRegRegForm() {
        this.stateRegRegForm.controls['regReg'].setValue(null);
        this.stateRegRegForm.controls['state'].setValue(this.selectedRegion.id);
        this.showNewRegRegForm = true;
        this._modalService.open(this.toRegionRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then((result) => {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            this.CloseResult = `Closed with: ${result}`;
            if (this.CloseResult) {this.cancelStateRegReg(); }
        }, (reason) => {
            this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
            if (this.CloseResult) {this.cancelStateRegReg(); }
        });
    }*/

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

    private cancelStateRegReg() {
        this.showStateRegForm = false;
        this.stateRegRegForm.reset();
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
                    /*this.regressionRegions.push(response);
                this._settingsservice.setRegRegions(this.regressionRegions);*/
                    alert('Sucess! \nRegression Region was created.');
                    this.getAllRegRegions();
                    this.getRegRegions(this.selectedRegion);
                    this.cancelCreateRegression();
                    // }, error => this._toastService.pop('error', 'Error creating Category Type', error._body.message || error.statusText));
                },
                error => alert('Error creating Regression Region \n' + error._body.message)
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
            alert('Name and Code are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.regRegionURL).subscribe(
                (resp: Regressionregion) => {
                    alert('Success! \n Regression Region was updated');
                    u.isEditing = false;
                    this.regressionRegions[i] = u;
                    this._settingsservice.setRegRegions(this.regressionRegions);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.regressionForm.form.dirty) { this.regressionForm.reset(); }
                }, error => alert('Error updating Regression Region: \n' + error._body.message)
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
                    alert('Success~\n Regression Region deleted.');
                    this.regressionRegions.splice(index, 1);
                    this._settingsservice.setRegRegions(this.regressionRegions); // update service
                }, error => alert('Error Deleting Regression Region: \n' + error._body.message));
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
