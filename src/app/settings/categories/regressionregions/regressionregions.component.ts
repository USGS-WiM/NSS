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

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'regressionregions.component.html'
})

export class RegressionRegionsComponent implements OnInit {
    public selectedRegion;
    public regions;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public regressionRegions: Array<Regressionregion>;
    public newRegRegForm: FormGroup;
    public showNewRegRegForm: boolean;
    constructor(public _nssService: NSSService, public _settingscomponent: SettingsComponent, public _route: ActivatedRoute,
        private _fb: FormBuilder) {
            this.newRegRegForm = _fb.group({
                'id': new FormControl(null),
                'name': new FormControl(null, Validators.required),
                'Description': new FormControl(null),
                'Code': new FormControl(null, Validators.required)
            });
        }

    ngOnInit() {
        this.regions = this._nssService.getRegions();
        this._nssService.regions.subscribe(reg => {
            this.regions = reg;
        });

        this._nssService.regressionRegions.subscribe((rr: Array<Regressionregion>) => {
            this.regressionRegions = rr;
            // remove from selectedRegType if not in response
            if (this.selectedRegTypeIDs !== undefined) {
                if (rr.length > 0) {
                    for (let rti = this.selectedRegTypeIDs.length; rti--;) {
                        const RTind = rr.map(function (eachrt) { return eachrt.ID; }).indexOf(this.selectedRegTypeIDs[rti]);
                        if (RTind < 0) {
                            this.selectedRegTypeIDs.splice(rti, 1);
                        }
                    };
                } else {this.selectedRegTypeIDs = [];}
            }
        });
    }

    public onRegSelect(r: Region) {
        this.selectedRegRegionIDs = []; this.selectedStatGroupIDs = []; this.selectedRegTypeIDs = [];
        this._nssService.setSelectedRegion(r);
    }

    showNewRegressionRegionForm() {
        this.newRegRegForm.controls['name'].setValue(null);
        this.newRegRegForm.controls['Description'].setValue(null);
        this.newRegRegForm.controls['Code'].setValue(null);
        this.showNewRegRegForm = true;
    }

    private cancelCreateRegression() {
        this.showNewRegRegForm = false;
        this.newRegRegForm.reset();
    }

    private createNewRegression() {
        alert('this will push to nssdb eventually');
    }

}
