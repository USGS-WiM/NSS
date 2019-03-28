// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { NSSService } from '../../../shared/services/app.service';
import { SettingsComponent } from '../../settings.component';
import { Region } from '../../../shared/interfaces/region';
import { Scenario } from '../../../shared/interfaces/scenario';
import { Statisticgroup } from '../../../shared/interfaces/statisticgroup';
import { Regressiontype } from '../../../shared/interfaces/regressiontype';
import { Regressionregion } from '../../../shared/interfaces/regressionregion';
import { Unittype } from '../../../shared/interfaces/unittype';
import { SettingsService } from '../../settings.service';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { UnitSystem } from 'app/shared/interfaces/unitsystems';

@Component({
    moduleId: module.id,
    templateUrl: 'unitsystems.component.html'
})
export class UnitSystemsComponent implements OnInit, OnDestroy {
    @ViewChild('add')
    public addRef: TemplateRef<any>;
    @ViewChild('UnitSystemForm') usForm;
    public selectedRegion;
    public regions;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public regressionTypes: Array<Regressiontype>;
    public newUnitSystemForm: FormGroup;
    public showNewUnitSystemForm: boolean;
    public CloseResult;
    private navigationSubscription;
    private loggedInRole;
    private configSettings: Config;
    public unitSystems: Array<UnitSystem>;
    public isEditing: boolean;
    public maxID: number;
    public rowBeingEdited: number;
    public tempData;
    constructor(
        public _nssService: NSSService,
        public _settingsservice: SettingsService,
        public _route: ActivatedRoute,
        private _fb: FormBuilder,
        private _modalService: NgbModal,
        private router: Router,
        private _configService: ConfigService
    ) {
        this.newUnitSystemForm = _fb.group({
            id: new FormControl(null),
            unitSystem: new FormControl(null, Validators.required)
        });
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }

    ngOnInit() {
        this.isEditing = false;
        this._settingsservice.getEntities(this.configSettings.unitSystemsURL).subscribe(res => {
            this.unitSystems = res;
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

        // get new units when new one posted/edited
        this._settingsservice.unitSystems().subscribe(res => {
            this.unitSystems = res;
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

    showNewForm() {
        this.newUnitSystemForm.controls['unitSystem'].setValue(null);
        this.newUnitSystemForm.controls['id'].setValue(this.maxID + 1);
        this.showNewUnitSystemForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(
            result => {
                // this is the solution for the first modal losing scrollability
                if (document.querySelector('body > .modal')) {
                    document.body.classList.add('modal-open');
                }
                this.CloseResult = `Closed with: ${result}`;
                if (this.CloseResult) {
                    this.cancelCreateUnit();
                }
            },
            reason => {
                this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
                if (this.CloseResult) {
                    this.cancelCreateUnit();
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

    private cancelCreateUnit() {
        this.showNewUnitSystemForm = false;
        this.newUnitSystemForm.reset();
    }

    private createNewUnit() {
        const newUnit = this.newUnitSystemForm.value;
        this._settingsservice.postEntity(newUnit, this.configSettings.unitSystemsURL).subscribe(
            (response: UnitSystem) => {
                response.isEditing = false;
                this.unitSystems.push(response);
                this._settingsservice.setUnitSystems(this.unitSystems);
                alert('Sucess! \n Unit System was created.');
                this.cancelCreateUnit();
                // }, error => this._toastService.pop('error', 'Error creating Category Type', error._body.message || error.statusText));
            },
            error => alert('Error creating Unit System \n' + error._body.message)
        );
    }

    private EditRowClicked(i: number) {
        // from wateruse
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.unitSystems[i]); // make a copy in case they cancel
        this.unitSystems[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.unitSystems[i] = Object.assign({}, this.tempData);
        this.unitSystems[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.usForm.form.dirty) {
            this.usForm.reset();
        }
    }

    // edits made, save clicked
    public saveUnitSystem(u: UnitSystem, i: number) {
        if (u.unitSystem === undefined) {
            // don't save it
            alert('Unit System Name is required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.unitSystemsURL).subscribe(
                (resp: UnitSystem) => {
                    alert('Success! \n Unit System was updated');
                    u.isEditing = false;
                    this.unitSystems[i] = u;
                    this._settingsservice.setUnitSystems(this.unitSystems);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.usForm.form.dirty) { this.usForm.reset(); }
                }, error => alert('Error updating Unit System: \n' + error._body.message)
            );
        }
    }

    // delete category type
    public deleteUnit(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Unit System?');
        if (confirm) {
            // delete it
            const index = this.unitSystems.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.unitSystemsURL)
                .subscribe(result => {
                    alert('Success~\n Unit System deleted.');
                    this.unitSystems.splice(index, 1);
                    this._settingsservice.setUnitSystems(this.unitSystems); // update service
                }, error => alert('Error Deleting Unit System: \n' + error._body.message));
        }
    }

    private getLoggedInRole() {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    }

    ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }
}
