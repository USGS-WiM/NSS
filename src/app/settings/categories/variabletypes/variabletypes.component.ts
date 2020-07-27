// ------------------------------------------------------------------------------
// ----- variables.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: varialbes crud in admin settings page

import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { NSSService } from 'app/shared/services/app.service';
import { SettingsService } from '../../settings.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Variabletype } from 'app/shared/interfaces/variabletype';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

@Component({
    moduleId: module.id,
    templateUrl: 'variabletypes.component.html'
})

export class VariableTypesComponent implements OnInit, OnDestroy {
    @ViewChild('add', {static: true})
    public addRef: TemplateRef<any>;
    @ViewChild('VariableTypeForm', {static: true}) varForm;
    public selectedRegion;
    public regions;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public newVarForm: FormGroup;
    public showNewVarForm: boolean;
    public variableTypes: Array<Variabletype>;
    private CloseResult;
    private navigationSubscription;
    public loggedInRole;
    private configSettings: Config;
    public isEditing: boolean;
    public rowBeingEdited: number;
    public tempData;
    public modalRef;
    constructor(public _nssService: NSSService, public _settingsservice: SettingsService, public _route: ActivatedRoute,
        private _fb: FormBuilder, private _modalService: NgbModal, private router: Router, private _toasterService: ToasterService,
        private _configService: ConfigService) {
            this.newVarForm = _fb.group({
                'name': new FormControl(null, Validators.required),
                'description': new FormControl(null),
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
        this._settingsservice.getEntities(this.configSettings.variablesURL).subscribe(res => {
            this.variableTypes = res;
        });

        this._settingsservice.variables().subscribe(res => {
            this.variableTypes = res;
        });
    }

    showNewVariableForm() {
        this.newVarForm.controls['name'].setValue(null);
        this.newVarForm.controls['description'].setValue(null);
        this.newVarForm.controls['code'].setValue(null);
        this.showNewVarForm = true;
        this.modalRef = this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' });
        this.modalRef.result.then((result) => {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            this.CloseResult = `Closed with: ${result}`;
            if (this.CloseResult) {this.cancelCreateVariableType(); }
        }, (reason) => {
            this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
            if (this.CloseResult) {this.cancelCreateVariableType(); }
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else { return `with: ${reason}`; }
    }

    private cancelCreateVariableType() {
        this.newVarForm.reset();
        this.modalRef.close();
    }

    private createNewVariableType() {
        const newItem = this.newVarForm.value;
        this._settingsservice.postEntity(newItem, this.configSettings.variablesURL)
            .subscribe((response: Variabletype) => {
                response.isEditing = false;
                this.variableTypes.push(response);
                this._settingsservice.setVariables(this.variableTypes);
                this._toasterService.pop('info', 'Info', 'Variable was created');
                this.cancelCreateVariableType();
            }, error => {
                if (this._settingsservice.outputWimMessages(error)) {return; }
                this._toasterService.pop('error', 'Error creating Variable', error._body.message || error.statusText);
            }
        );
    }

    private EditRowClicked(i: number) {
       this.rowBeingEdited = i;
       this.tempData = Object.assign({}, this.variableTypes[i]); // make a copy in case they cancel
       this.variableTypes[i].isEditing = true;
       this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.variableTypes[i] = Object.assign({}, this.tempData);
        this.variableTypes[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.varForm.form.dirty) {
            this.varForm.reset();
        }
    }

    // edits made, save clicked
    public saveVariable(u: Variabletype, i: number) {
        if (u.name === undefined || u.code === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Variable', 'Name, description and Code are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.variablesURL).subscribe(
                (resp) => {
                    u.isEditing = false;
                    this.variableTypes[i] = u;
                    this._settingsservice.setVariables(this.variableTypes);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.varForm.form.dirty) { this.varForm.reset(); }
                    this._settingsservice.outputWimMessages(resp);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error updating Variable', error._body.message || error.statusText);
                }
            );
        }
    }

    // delete category type
    public deleteVariable(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Variable?');
        if (check) {
            // delete it
            const index = this.variableTypes.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.variablesURL)
                .subscribe(result => {
                    this.variableTypes.splice(index, 1);
                    this._settingsservice.setVariables(this.variableTypes); // update service
                    this._settingsservice.outputWimMessages(result);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error deleting Variable', error._body.message || error.statusText);
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
