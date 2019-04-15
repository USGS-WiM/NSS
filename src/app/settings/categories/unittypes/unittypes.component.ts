// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { NSSService } from 'app/shared/services/app.service';
import { Regressiontype } from 'app/shared/interfaces/regressiontype';
import { Unittype } from 'app/shared/interfaces/unittype';
import { SettingsService } from '../../settings.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { UnitSystem } from 'app/shared/interfaces/unitsystems';

@Component({
    moduleId: module.id,
    templateUrl: 'unittypes.component.html'
})
export class UnitTypesComponent implements OnInit, OnDestroy {
    @ViewChild('add')
    public addRef: TemplateRef<any>;
    @ViewChild('UnitTypeForm') unitForm;
    public selectedRegion;
    public regions;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public regressionTypes: Array<Regressiontype>;
    public newUnitForm: FormGroup;
    public showNewUnitForm: boolean;
    public unitTypes: Array<Unittype>;
    public CloseResult;
    private navigationSubscription;
    public loggedInRole;
    private configSettings: Config;
    public unitSystems: Array<UnitSystem>;
    public isEditing: boolean;
    public rowBeingEdited: number;
    public tempData;
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
        this.newUnitForm = _fb.group({
            id: new FormControl(null),
            name: new FormControl(null, Validators.required),
            abbreviation: new FormControl(null),
            unitSystemTypeID: new FormControl(null, Validators.required)
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
        this._settingsservice.getEntities(this.configSettings.unitsURL).subscribe(res => {
            this.unitTypes = res;
        });
        this._settingsservice.getEntities(this.configSettings.unitSystemsURL).subscribe(usys => {
            this.unitSystems = usys;
        });

        // get new units when new one posted/edited
        this._settingsservice.units().subscribe(res => {
            this.unitTypes = res;
        });
    }

    showNewUnitTypeForm() {
        this.newUnitForm.controls['name'].setValue(null);
        this.newUnitForm.controls['abbreviation'].setValue(null);
        this.newUnitForm.controls['unitSystemTypeID'].setValue(null);
        this.showNewUnitForm = true;
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
        this.showNewUnitForm = false;
        this.newUnitForm.reset();
    }

    private createNewUnit() {
        const newUnit = this.newUnitForm.value;
        this._settingsservice.postEntity(newUnit, this.configSettings.unitsURL)
            .subscribe((response: Unittype) => {
                response.isEditing = false;
                this.unitTypes.push(response);
                this._settingsservice.setUnits(this.unitTypes);
                this._toasterService.pop('success', 'Success', 'Unit was created');
                this.cancelCreateUnit();
            }, error => { this._toasterService.pop('error', 'Error creating Unit', error._body.message || error.statusText); }
        );
    }

    private EditRowClicked(i: number) {
       // from wateruse
       this.rowBeingEdited = i;
       this.tempData = Object.assign({}, this.unitTypes[i]); // make a copy in case they cancel
       this.unitTypes[i].isEditing = true;
       this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.unitTypes[i] = Object.assign({}, this.tempData);
        this.unitTypes[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.unitForm.form.dirty) {
            this.unitForm.reset();
        }
    }

    // edits made, save clicked
    public saveUnit(u: Unittype, i: number) {
        if (u.name === undefined || u.abbreviation === undefined || u.unitSystemTypeID === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Statistic Group', 'Name, abbreviation and unit system ID are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.unitsURL).subscribe(
                (resp: UnitSystem) => {
                    this._toasterService.pop('success', 'Success', 'Unit was updated');
                    u.isEditing = false;
                    this.unitTypes[i] = u;
                    this._settingsservice.setUnits(this.unitTypes);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.unitForm.form.dirty) { this.unitForm.reset(); }
                }, error => { this._toasterService.pop('error', 'Error updating Unit', error._body.message || error.statusText); }
            );
        }
    }

    // delete category type
    public deleteUnit(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Unit Type?');
        if (confirm) {
            // delete it
            const index = this.unitTypes.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.unitsURL)
                .subscribe(result => {
                    this._toasterService.pop('success', 'Success', 'Unit was deleted');
                    this.unitTypes.splice(index, 1);
                    this._settingsservice.setUnits(this.unitTypes); // update service
                }, error => { this._toasterService.pop('error', 'Error deleting Unit', error._body.message || error.statusText); }
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
