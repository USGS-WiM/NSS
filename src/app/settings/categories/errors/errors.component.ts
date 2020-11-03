// ------------------------------------------------------------------------------
// ----- errors.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: errors crud in admin settings page

import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { NSSService } from 'app/shared/services/app.service';
import { SettingsService } from 'app/settings/settings.service';
import { Error } from 'app/shared/interfaces/error';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

@Component({
    moduleId: module.id,
    templateUrl: 'errors.component.html'
})

export class ErrorsComponent implements OnInit, OnDestroy {
    @ViewChild('add', {static: true})
    public addRef: TemplateRef<any>;
    @ViewChild('ErrorForm', {static: true}) errorForm;
    public newErrForm: FormGroup;
    public showNewErrForm: boolean;
    public errors: Array<Error>;
    private CloseResult;
    private navigationSubscription;
    public loggedInRole;
    private configSettings: Config;
    public isEditing: boolean;
    public rowBeingEdited: number;
    public tempData;
    public modalRef;
    constructor(public _nssService: NSSService, public _settingsservice: SettingsService, public _route: ActivatedRoute,
        private _fb: FormBuilder, private _modalService: NgbModal, private router: Router, private _configService: ConfigService,
        private _toasterService: ToasterService) {
            this.newErrForm = _fb.group({
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
        });

        this._settingsservice.errors().subscribe(res => {
            this.errors = res;
        });
    }

    showNewErrorForm() {
        this.newErrForm.controls['name'].setValue(null);
        this.newErrForm.controls['code'].setValue(null);
        this.showNewErrForm = true;
        this.modalRef = this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' });
        this.modalRef.result.then((result) => {
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
        this.newErrForm.reset();
        this.modalRef.close();
    }

    private createNewError() {
        const newItem = this.newErrForm.value;
        this._settingsservice.postEntity(newItem, this.configSettings.errorsURL)
            .subscribe((response: Error) => {
                response.isEditing = false;
                this.errors.push(response);
                this._settingsservice.setErrors(this.errors);
                this._toasterService.pop('info', 'Info', 'Error was created');
                this.cancelCreateError();
            }, error => {
                if (this._settingsservice.outputWimMessages(error)) {return; }
                this._toasterService.pop('error', 'Error creating Error', error._body.message || error.statusText);
            }
        );
    }

    private EditRowClicked(i: number) {
        // make a copy in case they cancel
        this.errors[i].isEditing = true;
        //if there is a row already being edited, cancel that edit
        if (this.isEditing == true) {
            this.CancelEditRowClicked(this.rowBeingEdited);
        }
        this.tempData = Object.assign({}, this.errors[i]); 
        this.rowBeingEdited = i;
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
            this._toasterService.pop('error', 'Error updating Error', 'Name and Code are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.errorsURL).subscribe(
                (resp) => {
                    u.isEditing = false;
                    this.errors[i] = u;
                    this._settingsservice.setErrors(this.errors);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.errorForm.form.dirty) { this.errorForm.reset(); }
                    this._settingsservice.outputWimMessages(resp);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error updating Error', error._body.message || error.statusText);
                }
            );
        }
    }

    // delete category type
    public deleteError(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Error?');
        if (check) {
            // delete it
            const index = this.errors.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.errorsURL)
                .subscribe(result => {
                    this.errors.splice(index, 1);
                    this._settingsservice.setErrors(this.errors); // update service
                    this._settingsservice.outputWimMessages(result);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error deleting Error', error._body.message || error.statusText);
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
