// ------------------------------------------------------------------------------
// ----- roles.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: roles crud in admin settings page

import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { NSSService } from '../../../shared/services/app.service';
import { Role } from '../../../shared/interfaces/role';
import { SettingsService } from '../../settings.service';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

@Component({
    moduleId: module.id,
    templateUrl: 'roles.component.html'
})

export class RolesComponent implements OnInit, OnDestroy {
    @ViewChild('add')
    public addRef: TemplateRef<any>;
    @ViewChild('RoleForm') roleForm;
    public selectedRole;
    public selectedRoleRoleIDs;
    public selectedStatGroupIDs;
    public selectedRoleTypeIDs;
    public newRoleForm: FormGroup;
    public showNewRolForm: boolean;
    public roles: Array<Role>;
    private CloseResult;
    private navigationSubscription;
    private loggedInRole;
    private configSettings: Config;
    public isEditing: boolean;
    public maxID: number;
    public rowBeingEdited: number;
    public tempData;
    constructor(public _nssService: NSSService, public _settingsservice: SettingsService, public _route: ActivatedRoute,
        private _fb: FormBuilder, private _modalService: NgbModal, private router: Router, private _configService: ConfigService) {
            this.newRoleForm = _fb.group({
                'id': new FormControl(null),
                'name': new FormControl(null, Validators.required),
                'description': new FormControl(null, Validators.required)
            });
            this.navigationSubscription = this.router.events.subscribe((e: any) => {
                if (e instanceof NavigationEnd) {
                    this.getLoggedInRole();
                }
            });
            this.configSettings = this._configService.getConfiguration();
        }

    ngOnInit() {
        this._settingsservice.getEntities(this.configSettings.rolesURL).subscribe(res => {
            this.roles = res;
            const ids = [];
            for (const item of res) {
                ids.push(item.id);
            }
            this.maxID = ids.reduce((a, b ) => Math.max(a, b));
        });

        this._settingsservice.roles().subscribe(res => {
            this.roles = res;
            const ids = [];
            for (const item of res) { ids.push(item.id); }
            if (ids.length > 1) {
                this.maxID = ids.reduce((a, b ) => Math.max(a, b));
            } else if (ids.length === 1) {
                this.maxID = ids[0];
            } else {
                this.maxID = 0;
            }
        });
    }

    showNewRoleForm() {
        this.newRoleForm.controls['id'].setValue(this.maxID + 1);
        this.newRoleForm.controls['name'].setValue(null);
        this.newRoleForm.controls['description'].setValue(null);
        this.showNewRolForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then((result) => {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            this.CloseResult = `Closed with: ${result}`;
            if (this.CloseResult) {this.cancelCreateRole(); }
        }, (reason) => {
            this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
            if (this.CloseResult) {this.cancelCreateRole(); }
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else { return `with: ${reason}`; }
    }

    private cancelCreateRole() {
        this.showNewRolForm = false;
        this.newRoleForm.reset();
    }

    private createNewRole() {
        const newItem = this.newRoleForm.value;
        this._settingsservice.postEntity(newItem, this.configSettings.rolesURL)
            .subscribe((response: Role) => {
                response.isEditing = false;
                this.roles.push(response);
                this._settingsservice.setRoles(this.roles);
                alert('Sucess! \nRole was created.');
                this.cancelCreateRole();
        }, error => alert('Error creating role \n' + error._body.message));
    }

    private EditRowClicked(i: number) {
       this.rowBeingEdited = i;
       this.tempData = Object.assign({}, this.roles[i]); // make a copy in case they cancel
       this.roles[i].isEditing = true;
       this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.roles[i] = Object.assign({}, this.tempData);
        this.roles[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.roleForm.form.dirty) {
            this.roleForm.reset();
        }
    }

    // edits made, save clicked
    public saveRole(r: Role, i: number) {
        if (r.name === undefined || r.description === undefined) {
            // don't save it
            alert('Name and Description are required.');
        } else {
            delete r.isEditing;
            this._settingsservice.putEntity(r.id, r, this.configSettings.rolesURL).subscribe(
                (resp: Role) => {
                    alert('Success! \n Role was updated');
                    r.isEditing = false;
                    this.roles[i] = r;
                    this._settingsservice.setRoles(this.roles);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.roleForm.form.dirty) { this.roleForm.reset(); }
                }, error => alert('Error updating Role: \n' + error._body.message)
            );
        }
    }

    // delete category type
    public deleteRole(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Role?');
        if (confirm) {
            // delete it
            const index = this.roles.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.rolesURL)
                .subscribe(result => {
                    alert('Success~\n Role deleted.');
                    this.roles.splice(index, 1);
                    this._settingsservice.setRoles(this.roles); // update service
                }, error => alert('Error Deleting Role: \n' + error._body.message));
        }
    }

    private getLoggedInRole() {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    }

    ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }

}
