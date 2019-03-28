// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { NSSService } from '../../../shared/services/app.service';
import { Region } from '../../../shared/interfaces/region';
import { Scenario } from '../../../shared/interfaces/scenario';
import { Statisticgroup } from '../../../shared/interfaces/statisticgroup';
import { Regressiontype } from '../../../shared/interfaces/regressiontype';
import { Regressionregion } from '../../../shared/interfaces/regressionregion';
import { Unittype } from '../../../shared/interfaces/unittype';
import { Variabletype } from 'app/shared/interfaces/variabletype';
import { SettingsService } from '../../settings.service';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Manager } from 'app/shared/interfaces/manager';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { Role } from 'app/shared/interfaces/role';

@Component({
    moduleId: module.id,
    templateUrl: 'managers.component.html'
})
export class ManagersComponent implements OnInit, AfterViewChecked {
    @ViewChild('add')
    public addRef: TemplateRef<any>;
    @ViewChild('User') userForm;
    public selectedRegion;
    public regions;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public newUserForm: FormGroup;
    public showUserForm: boolean;
    public managers: Array<Manager>;
    private loggedInRole;
    private CloseResult;
    private configSettings: Config;
    private roles: Array<Role>;
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
        private _cdr: ChangeDetectorRef,
        private _configService: ConfigService
    ) {
        this.newUserForm = _fb.group({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null),
            email: new FormControl(null, Validators.required),
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            roleID: new FormControl(null, Validators.required)
        });
        this.configSettings = this._configService.getConfiguration();
    }

    ngOnInit() {
        this._settingsservice.getEntities(this.configSettings.managersURL).subscribe(managers => {
            this.managers = managers;
        });
        this._settingsservice.getEntities(this.configSettings.rolesURL).subscribe(roles => {
            this.roles = roles;
        });
    }

    showNewUserForm() {
        this.newUserForm.controls['username'].setValue(null);
        this.newUserForm.controls['password'].setValue(null);
        this.newUserForm.controls['firstName'].setValue(null);
        this.newUserForm.controls['lastName'].setValue(null);
        this.newUserForm.controls['roleID'].setValue(null);
        this.newUserForm.controls['email'].setValue(null);
        this.showUserForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(
            result => {
                // this is the solution for the first modal losing scrollability
                if (document.querySelector('body > .modal')) {
                    document.body.classList.add('modal-open');
                }
                this.CloseResult = `Closed with: ${result}`;
                if (this.CloseResult) {
                    this.cancelCreateUser();
                }
            },
            reason => {
                this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
                if (this.CloseResult) {
                    this.cancelCreateUser();
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

    private cancelCreateUser() {
        this.showUserForm = false;
        this.newUserForm.reset();
    }

    private createNewUser() {
        const newUser = this.newUserForm.value;
        this._settingsservice.postEntity(newUser, this.configSettings.managersURL).subscribe(
            (response: Manager) => {
                response.isEditing = false;
                this.managers.push(response);
                this._settingsservice.setManagers(this.managers);
                alert('Sucess! \nManager was created.');
                this.cancelCreateUser();
                // }, error => this._toastService.pop('error', 'Error creating Category Type', error._body.message || error.statusText));
            },
            error => alert('Error creating Manager \n' + error._body.message)
        );
    }

    private EditRowClicked(i: number) {
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.managers[i]); // make a copy in case they cancel
        this.managers[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.managers[i] = Object.assign({}, this.tempData);
        this.managers[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.userForm.form.dirty) {
            this.userForm.reset();
        }
    }

    // edits made, save clicked
    public saveManager(u: Manager, i: number) {
        if (u.username === undefined || u.email === undefined || u.firstName === undefined || u.lastName === undefined || u.roleID === undefined) {
            // don't save it
            alert('First name, last name, username, email and role ID are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.managersURL).subscribe(
                (resp: Manager) => {
                    alert('Success! \n Manager was updated');
                    u.isEditing = false;
                    this.managers[i] = u;
                    this._settingsservice.setManagers(this.managers);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.userForm.form.dirty) { this.userForm.reset(); }
                }, error => alert('Error updating Manager: \n' + error._body.message)
            );
        }
    }

    // delete category type
    public deleteManager(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Manager?');
        if (confirm) {
            // delete it
            const index = this.managers.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.managersURL)
                .subscribe(result => {
                    alert('Success~\n Manager deleted.');
                    this.managers.splice(index, 1);
                    this._settingsservice.setManagers(this.managers); // update service
                }, error => alert('Error Deleting Manager: \n' + error._body.message));
        }
    }

    ngAfterViewChecked() {
        this._cdr.detectChanges();
    }
}
