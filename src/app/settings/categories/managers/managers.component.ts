// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { NSSService } from '../../../shared/services/app.service';
import { Region } from '../../../shared/interfaces/region';
import { Scenario } from '../../../shared/interfaces/scenario';
import { Statisticgroup } from '../../../shared/interfaces/statisticgroup';
import { Regressiontype } from '../../../shared/interfaces/regressiontype';
import { Regressionregion } from '../../../shared/interfaces/regressionregion';
import { Unittype } from '../../../shared/interfaces/unittype';
import { Variabletype } from 'app/shared/interfaces/variabletype';
import { SettingsService } from '../../settings.service';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Manager } from 'app/shared/interfaces/manager';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

@Component({
    moduleId: module.id,
    templateUrl: 'managers.component.html'
})
export class ManagersComponent implements OnInit, AfterViewChecked {
    @ViewChild('add')
    public addRef: TemplateRef<any>;
    public selectedRegion;
    public regions;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public newUserForm: FormGroup;
    public showUserForm: boolean;
    public managers: Array<Manager>;
    private loggedInRole;
    private CloseResult;
    private configSettings: Config;
    constructor(
        public _nssService: NSSService,
        public _settingsservice: SettingsService,
        public _route: ActivatedRoute,
        private _fb: FormBuilder,
        private _modalService: NgbModal,
        private _cdr: ChangeDetectorRef,
        private _configService: ConfigService
    ) {
        this.newUserForm = _fb.group({
            id: new FormControl(null),
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            roleID: new FormControl(null, Validators.required)
        });
        this.configSettings = this._configService.getConfiguration();
    }

    ngOnInit() {
        this._settingsservice.getEntities(this.configSettings.managersURL).subscribe(managers => {
            this.managers = managers;
        });
    }

    showNewUserForm() {
        this.newUserForm.controls['username'].setValue(null);
        this.newUserForm.controls['password'].setValue(null);
        this.newUserForm.controls['firstName'].setValue(null);
        this.newUserForm.controls['lastName'].setValue(null);
        this.newUserForm.controls['roleID'].setValue(null);
        this.showUserForm = true;
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(
            result => {
                // this is the solution for the first modal losing scrollability
                if (document.querySelector('body > .modal')) {
                    document.body.classList.add('modal-open');
                }
                this.CloseResult = `Closed with: ${result}`;
                if (this.CloseResult) {
                    this.cancelCreateUser();
                }
            },
            reason => {
                this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
                if (this.CloseResult) {
                    this.cancelCreateUser();
                }
            }
        );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    private cancelCreateUser() {
        this.showUserForm = false;
        this.newUserForm.reset();
    }

    private createNewUser() {
        alert('this will push to nssdb eventually');
        // from wateruse
        /*let category = this.newCatForm.value;
        this._settingsService.postEntity(category, 'categoryTypeURL')
            .subscribe((response: ICategoryType) => {
                response.isEditing = false;
                this.categoryTypes.push(response);
                this._settingsService.setCategories(this.categoryTypes);
                this._toastService.pop('success', 'Success', 'Category Type was created.'); 
                this.cancelCreateCategory();
            }, error => this._toastService.pop('error', 'Error creating Category Type', error._body.message || error.statusText)); */
    }

    private EditRowClicked(i: number) {
        // from wateruse
        /*this.rowBeingEdited = i;
		this.tempData = Object.assign({}, this.categoryTypes[i]); // make a copy in case they cancel
		this.categoryTypes[i].isEditing = true;
		this.isEditing = true; // set to true so create new is disabled*/
    }

    public CancelEditRowClicked(i: number) {
        /*this.categoryTypes[i] = Object.assign({}, this.tempData);
		this.categoryTypes[i].isEditing = false;
		this.rowBeingEdited = -1;
		this.isEditing = false; // set to true so create new is disabled
		if (this.categoryForm.form.dirty) this.categoryForm.reset();*/
    }

    // edits made, save clicked
    public saveUser(c: Manager, i: number) {
        /*if (c.name == undefined || c.name == "" || c.code == undefined || c.code == "") {
            //don't save it 
            let infoMessage = "Category Type Name and Code are both required."
            this.infomodal.showInfoModal(infoMessage);
		} else {
            delete c.isEditing;
            this._settingsService.putEntity(c.id, c, 'categoryTypeURL')
                .subscribe((resp: ICategoryType) => {
                    this._toastService.pop('success', 'Success', 'Category Type was updated')
                    c.isEditing = false;
                    this.categoryTypes[i] = c;
                    this._settingsService.setCategories(this.categoryTypes);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.categoryForm.form.dirty) this.categoryForm.reset();
                }, error => this._toastService.pop("error", "Error updating Category Type", error._body.message || error.statusText));
		}*/
    }

    // delete category type
    public deleteUser(catID: number) {
        // show are you sure modal
        /*
        this.areYouSure.showSureModal('Are you sure you want to delete this Category Type?'); // listener is AreYouSureDialogResponse()
        this.deleteID = catID;*/
    }
    // output emitter function when areYouSure is closed
    public AreYouSureDialogResponse(val: boolean) {
        // if they clicked Yes
        /*if (val) {
            //delete the category type
            // get the index to be deleted by the id
            let ind: number = this.getCategoryIndex(this.deleteID);
            //delete it
            this._settingsService.deleteEntity(this.deleteID, 'categoryTypeURL')
                .subscribe(result => {         
                    this._toastService.pop('success', 'Success', 'Category Type deleted.');           
                    this.categoryTypes.splice(ind, 1); //delete from array
                    this._settingsService.setCategories(this.categoryTypes); // update service
                }, error => this._toastService.pop('error', 'Error Deleting Category Type', error._body.message || error.statusText));
        }*/
    }

    // get index in regionList based on region.id value
    private getUserIndex(cID: number): number {
        return 0;
        /*let ind: number = -1
        this.categoryTypes.some((ct, index, _ary) => {
            if (ct.id === cID) ind = index;
            return ct.id === cID;
        });
        return ind;*/
    }

    ngAfterViewChecked() {
        this._cdr.detectChanges();
    }
}
