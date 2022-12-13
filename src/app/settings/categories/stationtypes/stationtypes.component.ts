// ------------------------------------------------------------------------------
// ----- stationtypes.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: station types crud in admin settings page

import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NSSService } from 'app/shared/services/app.service';
import { SettingsService } from 'app/settings/settings.service';
import { StationType } from 'app/shared/interfaces/stationtypes';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
declare let gtag: Function;

@Component({
    moduleId: module.id,
    templateUrl: 'stationtypes.component.html'
})

export class StationTypesComponent implements OnInit, OnDestroy {
    @ViewChild('add', {static: true})
    public addRef: TemplateRef<any>;
    @ViewChild('StationTypeForm', {static: true}) 
    stationTypeForm;
    public selectedRegion;
    public regions;
    public newStationTypeForm: FormGroup;
    public showStationTypeForm: boolean;
    public stationTypes: Array<StationType>;
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
            this.newStationTypeForm = _fb.group({
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
        this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.stationTypeURL).subscribe(res => {
            this.stationTypes = <Array<any>>res;
        });

        // get new station types when new one posted/edited
        this._settingsservice.stationTypes().subscribe(res => {
            this.stationTypes = res;
        });
    }

    showNewStationTypeForm() {
        this.newStationTypeForm.controls['name'].setValue(null);
        this.newStationTypeForm.controls['description'].setValue(null);
        this.newStationTypeForm.controls['code'].setValue(null);
        this.showStationTypeForm = true;
        this.modalRef = this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' });
        this.modalRef.result.then(
            result => {
            // this is the solution for the first modal losing scrollability
                if (document.querySelector('body > .modal')) {
                    document.body.classList.add('modal-open');
                }
                this.CloseResult = `Closed with: ${result}`;
                if (this.CloseResult) {this.cancelCreateStationType(); 
                }
            }, 
            reason => {
                this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
                if (this.CloseResult) {this.cancelCreateStationType(); 
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

    private cancelCreateStationType() {
        this.newStationTypeForm.reset();
        this.modalRef.close();
    }

    private createNewStationType() {
        const newItem = this.newStationTypeForm.value;
        this._settingsservice.postEntity(newItem, this.configSettings.gageStatsBaseURL + this.configSettings.stationTypeURL)
            .subscribe((response: StationType) => {
                response.isEditing = false;
                this.stationTypes.push(response);
                this._settingsservice.setStationTypes(this.stationTypes);
                this._toasterService.pop('info', 'Info', 'Station Type was created');
                this.cancelCreateStationType();
                gtag('event', 'Add', { 'Type': 'StationType' });
            }, error => {
                if (this._settingsservice.outputWimMessages(error)) {return; }
                this._toasterService.pop('error', 'Error creating Station Type', error._body.message || error.statusText);
            }
        );
    }

    private EditRowClicked(i: number) {
        // make a copy in case they cancel
        this.stationTypes[i].isEditing = true;
        //if there is a row already being edited, cancel that edit
        if (this.isEditing == true) {
            this.CancelEditRowClicked(this.rowBeingEdited);
        }
        this.tempData = Object.assign({}, this.stationTypes[i]); 
        this.rowBeingEdited = i;
        this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.stationTypes[i] = Object.assign({}, this.tempData);
        this.stationTypes[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.stationTypeForm.form.dirty) {
            this.stationTypeForm.reset();
        }
    }

    // edits made, save clicked
    public saveStationType(u: StationType, i: number) {
        if (u.name === undefined || u.code === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Station Type', 'Name and Code are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.gageStatsBaseURL + this.configSettings.stationTypeURL).subscribe(
                (resp) => {
                    u.isEditing = false;
                    this.stationTypes[i] = u;
                    this._settingsservice.setStationTypes(this.stationTypes);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.stationTypeForm.form.dirty) { this.stationTypeForm.reset(); }
                    this._settingsservice.outputWimMessages(resp);
                    gtag('event', 'Edit', { 'Type': 'StationType' });
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error updating Station Type', error._body.message || error.statusText);
                }
            );
        }
    }

    // delete category type
    public deleteStationType(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Station Type?');
        if (check) {
            // delete it
            const index = this.stationTypes.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.gageStatsBaseURL + this.configSettings.stationTypeURL)
                .subscribe(result => {
                    this.stationTypes.splice(index, 1);
                    this._settingsservice.setStationTypes(this.stationTypes); // update service
                    this._settingsservice.outputWimMessages(result);
                    gtag('event', 'Delete', { 'Type': 'StationType' });
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error deleting Station Type', error._body.message || error.statusText);
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
