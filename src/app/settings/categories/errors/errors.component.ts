// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { NSSService } from '../../../shared/services/app.service';
import { SettingsService } from 'app/settings/settings.service';
import { Error } from 'app/shared/interfaces/error';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

@Component({
    moduleId: module.id,
    templateUrl: 'errors.component.html'
})

export class ErrorsComponent implements OnInit, OnDestroy {
    @ViewChild('add')
    public addRef: TemplateRef<any>;
    @ViewChild('ErrorForm') errorForm;
    public newErrForm: FormGroup;
    public showNewErrForm: boolean;
    public errors: Array<Error>;
    private CloseResult;
    private navigationSubscription;
    public loggedInRole;
    private configSettings: Config;
    public isEditing: boolean;
    public maxID: number;
    public rowBeingEdited: number;
    public tempData;
    constructor(public _nssService: NSSService, public _settingsservice: SettingsService, public _route: ActivatedRoute,
        private _fb: FormBuilder, private _modalService: NgbModal, private router: Router, private _configService: ConfigService) {
            this.newErrForm = _fb.group({
                'id': new FormControl(null),
                'name': new FormControl(null, Validators.required),
                'code': new FormControl(null, Validators.required)
            });
            this.navigationSubscription = this.router.events.subscribe((e: any) => {
                if (e instanceof NavigationEnd) {
                    this.getLoggedInRole();
                }
            });
            this.configSettings = this._configService.getConfiguration();
        }

    ngOnInit() {
        this._settingsservice.getEntities(this.configSettings.errorsURL).subscribe(res => {
            this.errors = res;
            const ids = [];
            for (const item of res) {
                ids.push(item.id);
            }
            this.maxID = ids.reduce((a, b ) => Math.max(a, b));
        });

        this._settingsservice.errors().subscribe(res => {
            this.errors = res;
            const ids = [];
            for (const item of res) {
                ids.push(item.id);
            }
            if (ids.length > 0) { this.maxID = ids.reduce((a, b ) => Math.max(a, b)); }
        });
    }

    showNewErrorForm() {
        this.newErrForm.controls['id'].setValue(this.maxID + 1);
        this.newErrForm.controls['name'].setValue(null);
        this.newErrForm.controls['code'].setValue(null);
        this.showNewErrForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then((result) => {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            this.CloseResult = `Closed with: ${result}`;
            if (this.CloseResult) {this.cancelCreateError(); }
        }, (reason) => {
            this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
            if (this.CloseResult) {this.cancelCreateError(); }
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else { return `with: ${reason}`; }
    }

    private cancelCreateError() {
        this.showNewErrForm = false;
        this.newErrForm.reset();
    }

    private createNewError() {
        const newItem = this.newErrForm.value;
        this._settingsservice.postEntity(newItem, this.configSettings.errorsURL)
            .subscribe((response: Error) => {
                response.isEditing = false;
                this.errors.push(response);
                this._settingsservice.setErrors(this.errors);
                alert('Sucess! \nError was created.');
                this.cancelCreateError();
            }, error => {
                if (error._body.message) {alert('Error Creating Error: \n' + error._body.message);
                } else if (error.statusText !== '') {alert('Error Creating Error: \n' + error.statusText);
                } else {alert('Error Creating Error'); }
            }
        );
    }

    private EditRowClicked(i: number) {
       this.rowBeingEdited = i;
       this.tempData = Object.assign({}, this.errors[i]); // make a copy in case they cancel
       this.errors[i].isEditing = true;
       this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.errors[i] = Object.assign({}, this.tempData);
        this.errors[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.errorForm.form.dirty) {
            this.errorForm.reset();
        }
    }

    // edits made, save clicked
    public saveError(u: Error, i: number) {
        if (u.name === undefined || u.code === undefined) {
            // don't save it
            alert('Name and Code are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.errorsURL).subscribe(
                (resp: Error) => {
                    alert('Success! \n Error was updated');
                    u.isEditing = false;
                    this.errors[i] = u;
                    this._settingsservice.setErrors(this.errors);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.errorForm.form.dirty) { this.errorForm.reset(); }
                }, error => {
                    if (error._body && error._body.message) {alert('Error updating Error: \n' + error._body.message);
                    } else if (error.statusText !== '') {alert('Error updating Error: \n' + error.statusText)
                    } else {alert('Error updating Error'); }
                }
            );
        }
    }

    // delete category type
    public deleteError(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Error?');
        if (confirm) {
            // delete it
            const index = this.errors.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.errorsURL)
                .subscribe(result => {
                    alert('Success~\n Error deleted.');
                    this.errors.splice(index, 1);
                    this._settingsservice.setErrors(this.errors); // update service
                }, error => {
                    if (error._body.message) {alert('Error Deleting Error: \n' + error._body.message);
                    } else if (error.statusText !== '') {alert('Error Deleting Error: \n' + error.statusText)
                    } else {alert('Error Deleting Error'); }
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
