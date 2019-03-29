// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IMultiSelectSettings, IMultiSelectTexts } from '../../../../../node_modules/angular-2-dropdown-multiselect';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { NSSService } from '../../../shared/services/app.service';
import { Region } from '../../../shared/interfaces/region';
import { Scenario } from '../../../shared/interfaces/scenario';
import { Statisticgroup } from '../../../shared/interfaces/statisticgroup';
import { Regressiontype } from '../../../shared/interfaces/regressiontype';
import { Regressionregion } from '../../../shared/interfaces/regressionregion';
import { SettingsService } from '../../settings.service';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'scenarios.component.html'
})
export class ScenariosComponent implements OnInit, AfterViewChecked, OnDestroy {
    @ViewChild('add')
    public addRef: TemplateRef<any>;
    public selectedRegion;
    public regions;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;

    public regressionRegions: Array<Regressionregion>;
    public statisticGroups: Array<Statisticgroup>;
    public regressionTypes: Array<Regressiontype>;

    public allRegRegions: Array<Regressionregion>;
    public allStatGroups: Array<Statisticgroup>;

    public newScenarioForm: FormGroup;
    public showNewScenForm: boolean;
    public CloseResult: any;
    public scenarios: Array<Scenario>;
    public regRegionsText: string;
    public myRTSettings: IMultiSelectSettings;
    public myMSTexts: IMultiSelectTexts;
    private selectedRegRegionIDs: Array<number>;
    private navigationSubscription;
    public loggedInRole;
    private configSettings: Config;

    constructor(
        public _nssService: NSSService,
        public _settingsservice: SettingsService,
        public _route: ActivatedRoute,
        private _fb: FormBuilder,
        private _modalService: NgbModal,
        private _cdr: ChangeDetectorRef,
        private router: Router,
        private _configService: ConfigService
    ) {
        this.newScenarioForm = _fb.group({
            statisticGroupId: new FormControl(null, Validators.required),
            statisticGroupName: new FormControl(null, Validators.required),
            regressionRegions: new FormControl(null),
            state: new FormControl(null, Validators.required)
        });
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.getLoggedInRole();
            }
        });
        this.configSettings = this._configService.getConfiguration();
    }

    ngOnInit() {
        this._settingsservice.getEntities(this.configSettings.regionURL).subscribe(reg => {
            this.regions = reg;
        });
        this.myRTSettings = {
            pullRight: false,
            enableSearch: false,
            checkedStyle: 'glyphicon',
            buttonClasses: 'btn btn-default',
            selectionLimit: 0,
            closeOnSelect: false,
            showCheckAll: true,
            showUncheckAll: true,
            dynamicTitleMaxItems: 2,
            maxHeight: '300px'
        };
        this.myMSTexts = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            checked: 'checked',
            checkedPlural: 'checked',
            defaultTitle: 'Select'
        };
        this._nssService.regressionRegions.subscribe(res => {
            this.regressionRegions = res;
        });
        this._nssService.statisticGroups.subscribe(res => {
            this.statisticGroups = res;
        });
        this._nssService.regressionTypes.subscribe(res => {
            this.regressionTypes = res;
        });
        this._nssService.scenarios.subscribe(scen => {
            this.scenarios = scen;
            for (const scenario of scen) {
                const regNames = [];
                for (const regReg of scenario.regressionRegions) {
                    regReg.Name = regReg.name; regReg.ID = regReg.id;
                    regNames.push(regReg.name);
                }
                scenario.regNames = regNames.join(',\n');
            }
        });
        // get all stat groups/regression regions when we add new scenarios
    }

    public onRegSelect(r: Region) {
        this.regressionRegions = []; this.selectedRegRegionIDs = [];
        this.selectedStatGroupIDs = []; this.selectedRegTypeIDs = [];
        this._nssService.setSelectedRegion(r);
    }


    public onRegRegSelect(reg) {
        const selectedRegRegions: Array<Regressionregion> = new Array<Regressionregion>();
        this.selectedRegRegionIDs = reg;
        this.selectedRegRegionIDs.forEach(srr => {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedRegRegions.push(
                this.regressionRegions.filter(function(rr) {
                    return rr.id === srr;
                })[0]
            );
        });
        this._nssService.setSelectedRegRegions(selectedRegRegions);
    }

    public onStatGroupSelect() {
        const selectedStatGroups: Array<Statisticgroup> = new Array<Statisticgroup>();
        this.selectedStatGroupIDs.forEach(rsg => {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedStatGroups.push(
                this.statisticGroups.filter(function(sg) {
                    return sg.id === rsg;
                })[0]
            );
        });
        this._nssService.selectedStatGroups = selectedStatGroups;
    }

    public onRegTypeSelect(): void {
        // do we need this? may need to have reg types shown too???
        const selectedRegTypes: Array<Regressiontype> = new Array<Regressiontype>();
        this.selectedRegTypeIDs.forEach(srt => {
            // for each selected (number only) get the IRegressionRegion to send as array to the _service for updating on main
            selectedRegTypes.push(
                this.regressionTypes.filter(function(rr) {
                    return rr.id == srt;
                })[0]
            );
        });
        this._nssService.selectedRegressionTypes = selectedRegTypes;
    }

    public showNewScenarioForm() {
        // still needs changes
        this.newScenarioForm.controls['StatisticGroupName'].setValue(null);
        this.newScenarioForm.controls['RegressionRegions'].setValue(null);
        this.showNewScenForm = true;
        this.newScenarioForm.controls['Code'].setValue(null);
        this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(
            result => {
                // this is the solution for the first modal losing scrollability
                if (document.querySelector('body > .modal')) {
                    document.body.classList.add('modal-open');
                }
                this.CloseResult = `Closed with: ${result}`;
                if (this.CloseResult) {
                    this.cancelCreateScenario();
                }
            },
            reason => {
                this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
                if (this.CloseResult) {
                    this.cancelCreateScenario();
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

    private cancelCreateScenario() {
        this.showNewScenForm = false;
        this.newScenarioForm.reset();
    }

    private createNewScenario() {
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
    public saveScenario(c: Scenario, i: number) {
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
    public deleteScenario(catID: number) {
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
    private getScenarioIndex(cID: number): number {
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

    private getLoggedInRole() {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    }

    ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }
}
