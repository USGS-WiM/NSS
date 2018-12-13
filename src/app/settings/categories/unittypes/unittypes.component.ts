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

@Component({
    moduleId: module.id,
    templateUrl: 'unittypes.component.html'
})

export class UnitTypesComponent implements OnInit {
    public selectedRegion;
    public regions;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public regressionTypes: Array<Regressiontype>;
    public newUnitForm: FormGroup;
    public showNewUnitForm: boolean;
    public unitTypes: Array<Unittype>;
    constructor(public _nssService: NSSService, public _settingscomponent: SettingsComponent, public _route: ActivatedRoute,
        private _fb: FormBuilder) {
            this.newUnitForm = _fb.group({
                'id': new FormControl(null),
                'Unit': new FormControl(null, Validators.required),
                'Abbr': new FormControl(null),
                'UnitSystemTypeID': new FormControl(null, Validators.required)
            });
        }

    ngOnInit(){
        this.regions = this._nssService.getRegions();
        this._nssService.regions.subscribe(reg => {
            this.regions = reg;
        });

        this._nssService.getUnitTypes().subscribe(unitTypes => {
            this.unitTypes = unitTypes;
        });
    }

    showNewUnitTypeForm() {
        this.newUnitForm.controls['Unit'].setValue(null);
        this.newUnitForm.controls['Abbr'].setValue(null);
        this.newUnitForm.controls['UnitSystemTypeID'].setValue(null);
        this.showNewUnitForm = true;
    }

    private cancelCreateUnit() {
        this.showNewUnitForm = false;
        this.newUnitForm.reset();
    }

    private createNewUnit() {
        alert('this will push to nssdb eventually');
    }

}
