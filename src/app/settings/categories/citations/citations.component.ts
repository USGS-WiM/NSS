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
import { Citation } from 'app/shared/interfaces/citation';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { Region } from 'app/shared/interfaces/region';
import { Regressionregion } from 'app/shared/interfaces/regressionregion';

@Component({
    moduleId: module.id,
    templateUrl: 'citations.component.html'
})

export class CitationsComponent implements OnInit, OnDestroy {
    @ViewChild('add')
    public addRef: TemplateRef<any>;
    @ViewChild('CitationForm') citationForm;
    public newCitForm: FormGroup;
    public showNewCitForm: boolean;
    public citations: Array<Citation>;
    public regions: Array<Region>;
    public regressionRegions: Array<Regressionregion>;
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
            this.newCitForm = _fb.group({
                'title': new FormControl(null, Validators.required),
                'author': new FormControl(null, Validators.required),
                'citationURL': new FormControl(null, Validators.required),
                'regRegion': new FormControl(null, Validators.required),
                'region': new FormControl(null)
            });
            this.navigationSubscription = this.router.events.subscribe((e: any) => {
                if (e instanceof NavigationEnd) {
                    this.getLoggedInRole();
                }
            });
            this.configSettings = this._configService.getConfiguration();
        }

    ngOnInit() {
        this._settingsservice.getEntities(this.configSettings.citationURL).subscribe(res => {
            this.citations = res;
        });

        this._settingsservice.getEntities(this.configSettings.regionURL).subscribe(res => {
            this.regions = res;
        });
        this._settingsservice.getEntities(this.configSettings.regRegionURL).subscribe(res => {
            this.regressionRegions = res;
        });
        this._settingsservice.regRegions().subscribe(res => {
            this.regressionRegions = res;
        });

        this._settingsservice.citations().subscribe(res => {
            this.citations = res;
        });

        this.newCitForm.valueChanges.subscribe(form => {
            if (form.region) {this.onRegSelect(form.region)};
        });
    }

    public onRegSelect(i) {
        this._settingsservice.getEntities(this.configSettings.regionURL + i + '/' + this.configSettings.regRegionURL)
            .subscribe(res => {
                this.regressionRegions = res;
        });
    }

    showNewCitationForm() {
        // this.newVarForm.controls['id'].setValue(this.maxID + 1);
        this.newCitForm.controls['title'].setValue(null);
        this.newCitForm.controls['author'].setValue(null);
        this.newCitForm.controls['citationURL'].setValue(null);
        this.newCitForm.controls['regRegion'].setValue(null);
        this.showNewCitForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then((result) => {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            this.CloseResult = `Closed with: ${result}`;
            if (this.CloseResult) {this.cancelCreateCitation(); }
        }, (reason) => {
            this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
            if (this.CloseResult) {this.cancelCreateCitation(); }
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else { return `with: ${reason}`; }
    }

    private cancelCreateCitation() {
        this.showNewCitForm = false;
        this.newCitForm.reset();
    }

    private createNewCitation() {
        const regRegion = this.newCitForm.value.regRegion;
        const newItem = this.newCitForm.value;
        delete this.newCitForm.value.regRegion;
        delete this.newCitForm.value.region;
        this._settingsservice.postEntity(newItem, this.configSettings.regRegionURL + '/' + regRegion + '/' +
            this.configSettings.citationURL)
            .subscribe((response: Citation) => {
                response.isEditing = false;
                this.citations.push(response);
                this._settingsservice.setCitations(this.citations);
                alert('Sucess! \nCitations was created.');
                this.cancelCreateCitation();
        }, error => alert('Error creating Citations \n' + error._body.message));
    }

    private EditRowClicked(i: number) {
       this.rowBeingEdited = i;
       this.tempData = Object.assign({}, this.citations[i]); // make a copy in case they cancel
       this.citations[i].isEditing = true;
       this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.citations[i] = Object.assign({}, this.tempData);
        this.citations[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.citationForm.form.dirty) {
            this.citationForm.reset();
        }
    }

    // edits made, save clicked
    public saveCitation(u: Citation, i: number) {
        if (u.title === undefined || u.author === undefined || u.citationURL === undefined) {
            // don't save it
            alert('Title, Author and Citation URL are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.citationURL).subscribe(
                (resp: Citation) => {
                    alert('Success! \n Citation was updated');
                    u.isEditing = false;
                    this.citations[i] = u;
                    this._settingsservice.setCitations(this.citations);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.citationForm.form.dirty) { this.citationForm.reset(); }
                }, error => alert('Error updating Citation: \n' + error._body.message)
            );
        }
    }

    // delete category type
    public deleteCitation(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Citation?');
        if (confirm) {
            // delete it
            const index = this.citations.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.citationURL)
                .subscribe(result => {
                    alert('Success~\n Citation deleted.');
                    this.citations.splice(index, 1);
                    this._settingsservice.setCitations(this.citations); // update service
                }, error => alert('Error Deleting Citation: \n' + error._body.message));
        }
    }

    private getLoggedInRole() {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    }

    ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }

}
