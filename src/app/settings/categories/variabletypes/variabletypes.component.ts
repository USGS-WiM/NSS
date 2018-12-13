// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { NSSService } from '../../../app.service';
import { SettingsComponent } from '../../settings.component';
import { Region } from '../../../shared/interfaces/region';
import { Scenario } from '../../../shared/interfaces/scenario';
import { Statisticgroup } from '../../../shared/interfaces/statisticgroup';
import { Regressiontype } from '../../../shared/interfaces/regressiontype';
import { Regressionregion } from '../../../shared/interfaces/regressionregion';
import { Unittype } from '../../../shared/interfaces/unittype';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Variabletype } from 'app/shared/interfaces/variabletype';

@Component({
    moduleId: module.id,
    templateUrl: 'variabletypes.component.html'
})

export class VariableTypesComponent implements OnInit {
    public selectedRegion;
    public regions;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public newVarForm: FormGroup;
    public showNewVarForm: boolean;
    public variableTypes: Array<Variabletype>
    constructor(public _nssService: NSSService, public _settingscomponent: SettingsComponent, public _route: ActivatedRoute,
        private _fb: FormBuilder) {
            this.newVarForm = _fb.group({
                'id': new FormControl(null),
                'Name': new FormControl(null, Validators.required),
                'Description': new FormControl(null),
                'Code': new FormControl(null, Validators.required)
            });
        }

    ngOnInit(){
        this.regions = this._nssService.getRegions();
        this._nssService.regions.subscribe(reg => {
            this.regions = reg;
        });

        this._nssService.getVariableTypes().subscribe(varTypes => {
            this.variableTypes = varTypes;
        });
    }

    showNewVariableForm() {
        this.newVarForm.controls['Name'].setValue(null);
        this.newVarForm.controls['Description'].setValue(null);
        this.newVarForm.controls['Code'].setValue(null);
        this.showNewVarForm = true;
    }

    private cancelCreateVariableType() {
        this.showNewVarForm = false;
        this.newVarForm.reset();
    }

    private createNewVariableType() {
        alert('this will push to nssdb eventually');
    }

}
