// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { NSSService } from 'app/shared/services/app.service';
import { Region } from 'app/shared/interfaces/region';
import { SettingsService } from '../../settings.service';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

@Component({
    moduleId: module.id,
    templateUrl: 'regions.component.html'
})

export class RegionsComponent implements OnInit, OnDestroy {
    @ViewChild('add')
    public addRef: TemplateRef<any>;
    @ViewChild('RegionForm') regForm;
    public selectedRegion;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public newRegForm: FormGroup;
    public showNewRegForm: boolean;
    public regions: Array<Region>;
    private CloseResult;
    private navigationSubscription;
    public loggedInRole;
    private configSettings: Config;
    public isEditing: boolean;
    public rowBeingEdited: number;
    public tempData;
    constructor(public _nssService: NSSService, public _settingsservice: SettingsService, public _route: ActivatedRoute,
        private _fb: FormBuilder, private _modalService: NgbModal, private router: Router, private _configService: ConfigService) {
            this.newRegForm = _fb.group({
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
        this._settingsservice.getEntities(this.configSettings.regionURL).subscribe(res => {
            this.regions = res;
        });

        this._settingsservice.regions().subscribe(res => {
            this.regions = res;
        });
    }

    showNewRegionForm() {
        this.newRegForm.controls['name'].setValue(null);
        this.newRegForm.controls['code'].setValue(null);
        this.showNewRegForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then((result) => {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            this.CloseResult = `Closed with: ${result}`;
            if (this.CloseResult) {this.cancelCreateRegion(); }
        }, (reason) => {
            this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
            if (this.CloseResult) {this.cancelCreateRegion(); }
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else { return `with: ${reason}`; }
    }

    private cancelCreateRegion() {
        this.showNewRegForm = false;
        this.newRegForm.reset();
    }

    private createNewRegion() {
        const newItem = this.newRegForm.value;
        this._settingsservice.postEntity(newItem, this.configSettings.regionURL)
            .subscribe((response: Region) => {
                response.isEditing = false;
                this.regions.push(response);
                this._settingsservice.setRegions(this.regions);
                alert('Sucess! \nRegion was created.');
                this.cancelCreateRegion();
        }, error => alert('Error creating region \n' + error._body.message));
    }

    private EditRowClicked(i: number) {
       this.rowBeingEdited = i;
       this.tempData = Object.assign({}, this.regions[i]); // make a copy in case they cancel
       this.regions[i].isEditing = true;
       this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.regions[i] = Object.assign({}, this.tempData);
        this.regions[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.regForm.form.dirty) {
            this.regForm.reset();
        }
    }

    // edits made, save clicked
    public saveRegion(r: Region, i: number) {
        if (r.name === undefined || r.code === undefined) {
            // don't save it
            alert('Name and Code are required.');
        } else {
            delete r.isEditing;
            this._settingsservice.putEntity(r.id, r, this.configSettings.regionURL).subscribe(
                (resp: Region) => {
                    alert('Success! \n Region was updated');
                    r.isEditing = false;
                    this.regions[i] = r;
                    this._settingsservice.setRegions(this.regions);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.regForm.form.dirty) { this.regForm.reset(); }
                }, error => alert('Error updating Region: \n' + error._body.message)
            );
        }
    }

    // delete category type
    public deleteRegion(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Region?');
        if (confirm) {
            // delete it
            const index = this.regions.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.regionURL)
                .subscribe(result => {
                    alert('Success!\n Region deleted.');
                    this.regions.splice(index, 1);
                    this._settingsservice.setRegions(this.regions); // update service
                }, error => alert('Error Deleting Region: \n' + error._body.message));
        }
    }

    private getLoggedInRole() {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    }

    ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }

}
