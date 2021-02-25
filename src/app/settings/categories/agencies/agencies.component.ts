// ------------------------------------------------------------------------------
// ----- agencies.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: agencies crud in admin settings page

import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NSSService } from 'app/shared/services/app.service';
import { SettingsService } from 'app/settings/settings.service';
import { Agency } from 'app/shared/interfaces/agencies';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

@Component({
    moduleId: module.id,
    templateUrl: 'agencies.component.html'
})

export class AgenciesComponent implements OnInit, OnDestroy {
    @ViewChild('add', { static: true })
    public addRef: TemplateRef<any>;
    @ViewChild('AgencyForm', { static: true })
    agencyForm;
    public selectedRegion;
    public regions;
    public newAgencyForm: FormGroup;
    public showAgencyForm: boolean;
    public agencies: Array<Agency>;
    private CloseResult;
    private navigationSubscription;
    public loggedInRole;
    private configSettings: Config;
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
        private _configService: ConfigService,
        private _toasterService: ToasterService
    ) {
        this.newAgencyForm = _fb.group({
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
        this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.agenciesURL).subscribe(res => {
            this.agencies = <Array<any>>res;
        });

        // get new agencies when new one posted/edited
        this._settingsservice.agencies().subscribe(res => {
            this.agencies = res;
        });
    }

    showNewAgencyForm() {
        this.newAgencyForm.controls['name'].setValue(null);
        this.newAgencyForm.controls['description'].setValue(null);
        this.newAgencyForm.controls['code'].setValue(null);
        this.showAgencyForm = true;
        this.modalRef = this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' });
        this.modalRef.result.then(
            result => {
                // this is the solution for the first modal losing scrollability
                if (document.querySelector('body > .modal')) {
                    document.body.classList.add('modal-open');
                }
                this.CloseResult = `Closed with: ${result}`;
                if (this.CloseResult) {
                    this.cancelCreateAgency();
                }
            },
            reason => {
                this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
                if (this.CloseResult) {
                    this.cancelCreateAgency();
                }
            }
        );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else { return `with: ${reason}`; }
    }

    private cancelCreateAgency() {
        this.newAgencyForm.reset();
        this.modalRef.close();
    }

    private createNewAgency() {
        const newItem = this.newAgencyForm.value;
        this._settingsservice.postEntity(newItem, this.configSettings.gageStatsBaseURL + this.configSettings.agenciesURL)
            .subscribe((response: Agency) => {
                response.isEditing = false;
                this.agencies.push(response);
                this._settingsservice.setAgencies(this.agencies);
                this._toasterService.pop('info', 'Info', 'Agency was created');
                this.cancelCreateAgency();
            }, error => {
                if (this._settingsservice.outputWimMessages(error)) { return; }
                this._toasterService.pop('error', 'Error creating Agency', error._body.message || error.statusText);
            }
            );
    }

    private EditRowClicked(i: number) {
        // make a copy in case they cancel
        this.agencies[i].isEditing = true;
        //if there is a row already being edited, cancel that edit
        if (this.isEditing == true) {
            this.CancelEditRowClicked(this.rowBeingEdited);
        }
        this.tempData = Object.assign({}, this.agencies[i]); 
        this.rowBeingEdited = i;
        this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.agencies[i] = Object.assign({}, this.tempData);
        this.agencies[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.agencyForm.form.dirty) {
            this.agencyForm.reset();
        }
    }

    // edits made, save clicked
    public saveAgency(u: Agency, i: number) {
        if (u.name === undefined || u.code === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Agency', 'Name and Code are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.gageStatsBaseURL + this.configSettings.agenciesURL).subscribe(
                (resp) => {
                    u.isEditing = false;
                    this.agencies[i] = u;
                    this._settingsservice.setAgencies(this.agencies);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.agencyForm.form.dirty) { this.agencyForm.reset(); }
                    this._settingsservice.outputWimMessages(resp);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) { return; }
                    this._toasterService.pop('error', 'Error updating Agency', error._body.message || error.statusText);
                }
            );
        }
    }

    // delete category type
    public deleteAgency(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Agency?');
        if (check) {
            // delete it
            const index = this.agencies.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.gageStatsBaseURL + this.configSettings.agenciesURL)
                .subscribe(result => {
                    this.agencies.splice(index, 1);
                    this._settingsservice.setAgencies(this.agencies); // update service
                    this._settingsservice.outputWimMessages(result);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) { return; }
                    this._toasterService.pop('error', 'Error deleting Agency', error._body.message || error.statusText);
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
