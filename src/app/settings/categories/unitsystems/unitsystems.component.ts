// ------------------------------------------------------------------------------
// ----- unitsystems.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: unit systems crud in admin settings page

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
import { UnitSystem } from 'app/shared/interfaces/unitsystems';

@Component({
    moduleId: module.id,
    templateUrl: 'unitsystems.component.html'
})
export class UnitSystemsComponent implements OnInit, OnDestroy {
    @ViewChild('add', {static: true})
    public addRef: TemplateRef<any>;
    @ViewChild('UnitSystemForm', {static: true}) usForm;
    public selectedRegion;
    public regions;
    public regressionTypes: Array<Regressiontype>;
    public newUnitSystemForm: FormGroup;
    public showNewUnitSystemForm: boolean;
    public CloseResult;
    private navigationSubscription;
    public loggedInRole;
    private configSettings: Config;
    public unitSystems: Array<UnitSystem>;
    public isEditing: boolean;
    public rowBeingEdited: number;
    public tempData;
    public modalRef;
    constructor(
        public _nssService: NSSService,
        public _settingsservice: SettingsService,
        public _route: ActivatedRoute,
        private _fb: FormBuilder,
        private _modalService: NgbModal,
        private router: Router,
        private _toasterService: ToasterService,
        private _configService: ConfigService
    ) {
        this.newUnitSystemForm = _fb.group({
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
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.unitSystemsURL).subscribe(res => {
            this.unitSystems = res;
        });

        // get new units when new one posted/edited
        this._settingsservice.unitSystems().subscribe(res => {
            this.unitSystems = res;
        });
    }

    showNewForm() {
        this.newUnitSystemForm.controls['unitSystem'].setValue(null);
        this.showNewUnitSystemForm = true;
        this.modalRef = this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' });
        this.modalRef.result.then(
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
        this.newUnitSystemForm.reset();
        this.modalRef.close();
    }

    private createNewUnit() {
        const newUnit = this.newUnitSystemForm.value;
        this._settingsservice.postEntity(newUnit, this.configSettings.nssBaseURL + this.configSettings.unitSystemsURL).subscribe(
            (response: UnitSystem) => {
                response.isEditing = false;
                this.unitSystems.push(response);
                this._settingsservice.setUnitSystems(this.unitSystems);
                this._toasterService.pop('info', 'Info', 'Unit System was created');
                this.cancelCreateUnit();
            }, error => {
                if (this._settingsservice.outputWimMessages(error)) {return; }
                this._toasterService.pop('error', 'Error creating Unit System', error._body.message || error.statusText);
        }
        );
    }

    private EditRowClicked(i: number) {
        // make a copy in case they cancel
        this.unitSystems[i].isEditing = true;
        //if there is a row already being edited, cancel that edit
        if (this.isEditing == true) {
            this.CancelEditRowClicked(this.rowBeingEdited);
        }
        this.tempData = Object.assign({}, this.unitSystems[i]); 
        this.rowBeingEdited = i;
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
            this._toasterService.pop('error', 'Error updating Unit System', 'Unit System Name is required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.nssBaseURL + this.configSettings.unitSystemsURL).subscribe(
                (resp) => {
                    u.isEditing = false;
                    this.unitSystems[i] = u;
                    this._settingsservice.setUnitSystems(this.unitSystems);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.usForm.form.dirty) { this.usForm.reset(); }
                    this._settingsservice.outputWimMessages(resp);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error updating Unit System', error._body.message || error.statusText);
            }
            );
        }
    }

    // delete category type
    public deleteUnit(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Unit System?');
        if (check) {
            // delete it
            const index = this.unitSystems.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.nssBaseURL + this.configSettings.unitSystemsURL)
                .subscribe(result => {
                    this.unitSystems.splice(index, 1);
                    this._settingsservice.setUnitSystems(this.unitSystems); // update service
                    this._settingsservice.outputWimMessages(result);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error deleting Unit System', error._body.message || error.statusText);
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
