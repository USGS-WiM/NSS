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
import { Statisticgroup } from '../../../shared/interfaces/statisticgroup';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'statisticgroups.component.html'
})

export class StatisticGroupsComponent implements OnInit {
    public regressionTypes;
    public selectedRegion;
    public regions;
    public selectedRegRegionIDs;
    public selectedStatGroupIDs;
    public selectedRegTypeIDs;
    public statisticGroups: Array<Statisticgroup>;
    public newStatGroupForm: FormGroup;
    public showNewStatForm: boolean;
    constructor(public _nssService: NSSService, public _settingscomponent: SettingsComponent, public _route: ActivatedRoute,
        private _fb: FormBuilder) {
            this.newStatGroupForm = _fb.group({
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

        this._nssService.statisticGroups.subscribe((st: Array<Statisticgroup>) => {
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
        });
    }

    public onRegSelect(r: Region) {
        this.selectedRegRegionIDs = []; this.selectedStatGroupIDs = []; this.selectedRegTypeIDs = [];
        this._nssService.setSelectedRegion(r);
    }

    private showNewStatGroupForm() {
        this.newStatGroupForm.controls['name'].setValue(null);
        this.newStatGroupForm.controls['Description'].setValue(null);
        this.newStatGroupForm.controls['Code'].setValue(null);
        this.showNewStatForm = true;
    }

    private cancelCreateStatGroup() {
        this.showNewStatForm = false;
        this.newStatGroupForm.reset();
    }

    private createNewStatGroup() {
        alert('this will push to nssdb eventually');
    }

}
