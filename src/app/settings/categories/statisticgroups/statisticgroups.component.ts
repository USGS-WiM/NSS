// ------------------------------------------------------------------------------
// ----- statisticgroups.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: statistica groups crud in admin settings page

import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { NSSService } from 'app/shared/services/app.service';
import { Region } from 'app/shared/interfaces/region';
import { Statisticgroup } from 'app/shared/interfaces/statisticgroup';
import { SettingsService } from '../../settings.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

@Component({
    moduleId: module.id,
    templateUrl: 'statisticgroups.component.html',
    styleUrls: ['../../settings.component.scss']
})

export class StatisticGroupsComponent implements OnInit, OnDestroy {
    @ViewChild('add', {static: true})
    public addRef: TemplateRef<any>;
    @ViewChild('StatGroupForm', {static: true}) statGroupForm;
    public regressionTypes;
    public selectedRegion;
    public regions;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public statisticGroups: Array<Statisticgroup>;
    public newStatGroupForm: FormGroup;
    public showNewStatForm: boolean;
    private CloseResult;
    private navigationSubscription;
    public loggedInRole;
    private configSettings: Config;
    public allStatGroups: Array<Statisticgroup>;
    public rowBeingEdited: number;
    public tempData;
    public isEditing = false;
    public modalRef;

    constructor(public _nssService: NSSService, public _settingsservice: SettingsService, public _route: ActivatedRoute,
        private _fb: FormBuilder, private _modalService: NgbModal, private router: Router,
        private _toasterService: ToasterService, private _configService: ConfigService) {
            this.newStatGroupForm = _fb.group({
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
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.regionURL).subscribe(regions => {
            this.regions = regions;
        });
        this.selectedRegion = 'none';
        this.getAllStatGroups();

        this._settingsservice.statisticGroups().subscribe(sg => {
            this.statisticGroups = sg;
        });
    }
    public getAllStatGroups() {
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.statisticGrpURL).subscribe(res => {
            this.allStatGroups = res;
            if (this.selectedRegion === 'none') {this.statisticGroups = res; }
        });
    }

    public onRegSelect(r) {
        this.selectedRegRegionIDs = []; this.selectedStatGroupIDs = []; this.selectedRegTypeIDs = [];
        this.selectedRegion = r;
        if (r === 'none') {this.getAllStatGroups();
        } else { this.getStatGroups(r); }
    }

    private getStatGroups(r) {
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.regionURL + '/' + r.id + '/' + this.configSettings.statisticGrpURL)
            .subscribe(res => {
                this.statisticGroups = res;
        });
    }

    public showNewStatGroupForm() {
        this.newStatGroupForm.controls['name'].setValue(null);
        this.newStatGroupForm.controls['code'].setValue(null);
        this.showNewStatForm = true;
        this.modalRef = this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' });
        this.modalRef.result.then((result) => {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            this.CloseResult = `Closed with: ${result}`;
            if (this.CloseResult) {this.cancelCreateStatGroup(); }
        }, (reason) => {
            this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
            if (this.CloseResult) {this.cancelCreateStatGroup(); }
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else { return `with: ${reason}`; }
    }

    private cancelCreateStatGroup() {
        this.newStatGroupForm.reset();
        this.modalRef.close();
    }

    private createNewStatGroup() {
        const newStatGroup = this.newStatGroupForm.value;
        this._settingsservice.postEntity(newStatGroup, this.configSettings.nssBaseURL + this.configSettings.statisticGrpURL)
            .subscribe((response: Statisticgroup) => {
                response.isEditing = false;
                this.cancelCreateStatGroup();
                this._toasterService.pop('info', 'Info', 'Statistic Group was created');
                this.getAllStatGroups();
                this.cancelCreateStatGroup();
            }, error => {
                if (this._settingsservice.outputWimMessages(error)) {return; }
                this._toasterService.pop('error', 'Error creating Statistic Group', error._body.message || error.statusText);
        }
        );
    }

    private EditRowClicked(i: number) {
        this.rowBeingEdited = i;
        this.tempData = Object.assign({}, this.statisticGroups[i]); // make a copy in case they cancel
        this.statisticGroups[i].isEditing = true;
        this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.statisticGroups[i] = Object.assign({}, this.tempData);
        this.statisticGroups[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.statGroupForm.form.dirty) {
            this.statGroupForm.reset();
        }
    }

    // edits made, save clicked
    public saveStatGroup(u: Statisticgroup, i: number) {
        if (u.name === undefined || u.code === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Statistic Group', 'Name and Code are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.nssBaseURL + this.configSettings.statisticGrpURL).subscribe(
                (resp) => {
                    u.isEditing = false;
                    this.statisticGroups[i] = u;
                    this._settingsservice.setStatGroups(this.statisticGroups);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.statGroupForm.form.dirty) { this.statGroupForm.reset(); }
                    this._settingsservice.outputWimMessages(resp);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error updating Statistic Group', error._body.message || error.statusText);
            }
            );
        }
    }

    // delete category type
    public deleteStatGroup(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Statistic Group?');
        if (check) {
            // delete it
            const index = this.statisticGroups.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.nssBaseURL + this.configSettings.statisticGrpURL)
                .subscribe(result => {
                    this.statisticGroups.splice(index, 1);
                    this._settingsservice.setStatGroups(this.statisticGroups); // update service
                    this._settingsservice.outputWimMessages(result);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error deleting Statistic Group', error._body.message || error.statusText);
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
