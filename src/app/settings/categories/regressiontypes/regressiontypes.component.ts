// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { NSSService } from '../../../shared/services/app.service';
import { Regressiontype } from '../../../shared/interfaces/regressiontype';
import { SettingsService } from '../../settings.service';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

@Component({
    moduleId: module.id,
    templateUrl: 'regressiontypes.component.html'
})
export class RegressionTypesComponent implements OnInit, OnDestroy {
    @ViewChild('add')
    public addRef: TemplateRef<any>;
    @ViewChild('RegressionForm')
    regressionForm;
    public selectedRegion;
    public regions;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public regressionTypes: Array<Regressiontype>;
    public newRegForm: FormGroup;
    public showNewRegForm: boolean;
    private CloseResult;
    private navigationSubscription;
    public loggedInRole;
    private configSettings: Config;
    public maxID: number;
    public rowBeingEdited: number;
    public tempData;
    public isEditing = false;
    constructor(
        public _nssService: NSSService,
        public _settingsservice: SettingsService,
        public _route: ActivatedRoute,
        private _fb: FormBuilder,
        private _modalService: NgbModal,
        private router: Router,
        private _configService: ConfigService
    ) {
        this.newRegForm = _fb.group({
            id: new FormControl(null),
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
        this._settingsservice.getEntities(this.configSettings.regionURL).subscribe(reg => {
            this.regions = reg;
        });
        this.selectedRegion = 'none';
        this.getAllRegTypes();
    }

    public onRegSelect(r) {
        this.selectedRegion = r;
        if (r === 'none') {
            this.getAllRegTypes();
        } else {
            this._settingsservice
                .getEntities(this.configSettings.regionURL + r.id + '/' + this.configSettings.regTypeURL)
                .subscribe(regs => {
                    this.regressionTypes = regs;
                });
        }
    }

    public getAllRegTypes() {
        this._settingsservice.getEntities(this.configSettings.regTypeURL).subscribe(res => {
            this.regressionTypes = res;
            const ids = [];
            for (const item of res) {
                ids.push(item.id);
            }
            if (ids.length > 1) {
                this.maxID = ids.reduce((a, b) => Math.max(a, b));
            } else if (ids.length === 1) {
                this.maxID = ids[0];
            } else {
                this.maxID = 0;
            }
        });
    }

    showNewRegressionForm() {
        this.newRegForm.controls['id'].setValue(this.maxID + 1);
        this.newRegForm.controls['name'].setValue(null);
        this.newRegForm.controls['description'].setValue(null);
        this.showNewRegForm = true;
        this.newRegForm.controls['code'].setValue(null);
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
        this.showNewRegForm = false;
        this.newRegForm.reset();
    }

    private createNewRegression() {
        const newReg = this.newRegForm.value;
        this._settingsservice.postEntity(newReg, this.configSettings.regTypeURL).subscribe(
            (response: Regressiontype) => {
                response.isEditing = false;
                alert('Sucess! \nRegression Type was created.');
                if (this.selectedRegion === 'none') {
                    this.getAllRegTypes();
                } else {
                    this.onRegSelect(this.selectedRegion);
                }
                this.cancelCreateRegression();
            },
            error => alert('Error creating Regression Type \n' + error._body.message)
        );
    }

    private EditRowClicked(i: number) {
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.regressionTypes[i]); // make a copy in case they cancel
        this.regressionTypes[i].isEditing = true;
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
            alert('Name, description and Code are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.regTypeURL).subscribe(
                (resp: Regressiontype) => {
                    alert('Success! \n Regression Type was updated');
                    u.isEditing = false;
                    this.regressionTypes[i] = u;
                    this._settingsservice.setRegTypes(this.regressionTypes);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.regressionForm.form.dirty) { this.regressionForm.reset(); }
                }, error => alert('Error updating Regression Type: \n' + error._body.message)
            );
        }
    }

    // delete category type
    public deleteRegression(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Regression Type?');
        if (confirm) {
            // delete it
            const index = this.regressionTypes.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.regTypeURL)
                .subscribe(result => {
                    alert('Success~\n Regression Type deleted.');
                    this.regressionTypes.splice(index, 1);
                    this._settingsservice.setRegTypes(this.regressionTypes); // update service
                }, error => alert('Error Deleting Regression Type: \n' + error._body.message));
        }
    }

    private getLoggedInRole() {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    }

    ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }
}
