// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { NSSService } from '../../../shared/services/app.service';
import { SettingsComponent } from '../../settings.component';
import { Region } from '../../../shared/interfaces/region';
import { Statisticgroup } from '../../../shared/interfaces/statisticgroup';
import { SettingsService } from '../../settings.service';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

@Component({
    moduleId: module.id,
    templateUrl: 'statisticgroups.component.html',
    styleUrls: ['../../settings.component.css']
})

export class StatisticGroupsComponent implements OnInit, OnDestroy {
    @ViewChild('add')
    public addRef: TemplateRef<any>;
    @ViewChild('toRegion')
    public toRegionRef: TemplateRef<any>;
    @ViewChild('StatGroupForm') statGroupForm;
    public regressionTypes;
    public selectedRegion: Region;
    public regions;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public statisticGroups: Array<Statisticgroup>;
    public newStatGroupForm: FormGroup;
    public stateStatGroupForm: FormGroup;
    public showNewStatForm: boolean;
    public showStateStatForm: boolean;
    private CloseResult;
    private navigationSubscription;
    private loggedInRole;
    private configSettings: Config;
    private maxStatID: number;
    public allStatGroups: Array<Statisticgroup>;
    public rowBeingEdited: number;
    public tempData;
    public isEditing = false;

    constructor(public _nssService: NSSService, public _settingsservice: SettingsService, public _route: ActivatedRoute,
        private _fb: FormBuilder, private _modalService: NgbModal, private router: Router,
        private _configService: ConfigService) {
            this.newStatGroupForm = _fb.group({
                'id': new FormControl(null),
                'name': new FormControl(null, Validators.required),
                'code': new FormControl(null, Validators.required)
            });
            this.stateStatGroupForm = _fb.group({
                'state': new FormControl(null, Validators.required),
                'statGroup': new FormControl(null, Validators.required)
            });
            this.navigationSubscription = this.router.events.subscribe((e: any) => {
                if (e instanceof NavigationEnd) {
                    this.getLoggedInRole();
                }
            });
            this.configSettings = this._configService.getConfiguration();
        }

    ngOnInit() {
        this._settingsservice.getEntities(this.configSettings.regionURL).subscribe(regions => {
            this.regions = regions;
        });
        this.getAllStatGroups();

        /*this._nssService.statisticGroups.subscribe((st: Array<Statisticgroup>) => {
            this.statisticGroups = st;
            // remove from selectedRegType if not in response
            if (this.selectedRegTypeIDs !== undefined) {
                if (st.length > 0) {
                    for (let rti = this.selectedRegTypeIDs.length; rti--; ) {
                        const RTind = st.map(function (eachrt) { return eachrt.ID; }).indexOf(this.selectedRegTypeIDs[rti]);
                        if (RTind < 0) {this.selectedRegTypeIDs.splice(rti, 1); }
                    };
                } else {this.selectedRegTypeIDs = []; }
            }
        });*/
        this._settingsservice.statisticGroups().subscribe(sg => {
            this.statisticGroups = sg;
        });
    }
    public getAllStatGroups() {
        this._settingsservice.getEntities(this.configSettings.statisticGrpURL).subscribe(res => {
            this.allStatGroups = res;
            if (!this.selectedRegion) {this.statisticGroups = res; }
            const ids = [];
            for (const item of res) { ids.push(item.id); }
            if (ids.length > 1) {
                this.maxStatID = ids.reduce((a, b ) => Math.max(a, b));
            } else if (ids.length === 1) {
                this.maxStatID = ids[0];
            } else {
                this.maxStatID = 0;
            }
        });
    }

    public onRegSelect(r: Region) {
        this.selectedRegRegionIDs = []; this.selectedStatGroupIDs = []; this.selectedRegTypeIDs = [];
        this.selectedRegion = r;
        this.getStatGroups(r);
    }

    private getStatGroups(r) {
        this._settingsservice.getEntities(this.configSettings.regionURL + r.id + '/' + this.configSettings.statisticGrpURL)
            .subscribe(res => {
                this.statisticGroups = res;
        });
    }

    private showNewStatGroupForm() {
        this.newStatGroupForm.controls['id'].setValue(this.maxStatID + 1);
        this.newStatGroupForm.controls['name'].setValue(null);
        this.newStatGroupForm.controls['code'].setValue(null);
        this.showNewStatForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then((result) => {
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

    private showStateStatGroupForm() {
        this.stateStatGroupForm.controls['statGroup'].setValue(null);
        this.stateStatGroupForm.controls['state'].setValue(this.selectedRegion.id);
        this.showNewStatForm = true;
        this._modalService.open(this.toRegionRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then((result) => {
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
        this.showNewStatForm = false;
        this.newStatGroupForm.reset();
    }

    private cancelStateStatGroup() {
        this.showStateStatForm = false;
        this.stateStatGroupForm.reset();
    }

    private createNewStatGroup() {
        const newStatGroup = this.newStatGroupForm.value;
        this._settingsservice.postEntity(newStatGroup, this.configSettings.statisticGrpURL)
            .subscribe((response: Statisticgroup) => { 
                response.isEditing = false;
                this.cancelCreateStatGroup();
                alert('Sucess! \nStatistic Group was created.');
                this.getAllStatGroups();
                this.cancelCreateStatGroup();
        }, error => alert('Error creating Statistic Group \n' + error._body.message));
    }

    private addStatGrouptoState() {
        const statGroup = this.allStatGroups.filter(sg => {
            return sg.id === +this.stateStatGroupForm.value.statGroup;
        });
        this._settingsservice.postEntity(statGroup, this.configSettings.regionURL + this.stateStatGroupForm.value.state + '/' +
            this.configSettings.statisticGrpURL)
            .subscribe((response: Statisticgroup) => {
                response.isEditing = false;
                if (this.newStatGroupForm.value.id === this.selectedRegion.id) {
                    this.statisticGroups.push(response);
                    this._settingsservice.setStatGroups(this.statisticGroups);
                } else {
                    this.getStatGroups(this.selectedRegion);
                }
                alert('Sucess! \nStatistic Group was created.');
                this.cancelCreateStatGroup();
            // }, error => this._toastService.pop('error', 'Error creating Category Type', error._body.message || error.statusText));
        }, error => alert('Error creating Statistic Group \n' + error._body.message));

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
            alert('Name and Code are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.statisticGrpURL).subscribe(
                (resp: Statisticgroup) => {
                    alert('Success! \n Statistic Group was updated');
                    u.isEditing = false;
                    this.statisticGroups[i] = u;
                    this._settingsservice.setStatGroups(this.statisticGroups);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.statGroupForm.form.dirty) { this.statGroupForm.reset(); }
                }, error => alert('Error updating Statistic Group: \n' + error._body.message)
            );
        }
    }

    // delete category type
    public deleteStatGroup(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Statistic Group?');
        if (confirm) {
            // delete it
            const index = this.statisticGroups.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.statisticGrpURL)
                .subscribe(result => {
                    alert('Success~\n Statistic Group deleted.');
                    this.statisticGroups.splice(index, 1);
                    this._settingsservice.setStatGroups(this.statisticGroups); // update service
                }, error => alert('Error Deleting Statistic Group: \n' + error._body.message));
        }
    }

    private getLoggedInRole() {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    }

    ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }

}
