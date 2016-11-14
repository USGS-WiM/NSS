import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { CommonModule } from '@angular/common';

import {ToasterContainerComponent, ToasterService} from 'angular2-toaster/angular2-toaster';
import {Toast} from 'angular2-toaster/lib/toast';

import { SharedService } from '../services/eventSharing.service';
import {IRegressionRegion } from '../shared/regressionRegion';
import {IStatisticGroup } from '../shared/statisticGroup';
import { IScenario } from '../shared/scenario';
import {IParameter} from '../shared/parameter';

@Component({ //moduleId is used to keep templateurl relative path
    moduleId: module.id,
    selector: 'wim-mainpage',
    styleUrls: ['./mainpage.css'],
    templateUrl: './mainpage.html'
})
export class MainPageComponent  {
    title: string = "NSS Report";
    selectedRegion: string = '';
    regressionRegions: IRegressionRegion[];
    statisticGroups: IStatisticGroup[];
    scenarios: IScenario[];
    toast: Toast;
    resultsBack: boolean;

    constructor( @Inject(SharedService) private _sharedService: SharedService, @Inject(ToasterService) private _toasterService: ToasterService) { }
    ngOnInit(): any {
        this.resultsBack = false;
        // Will fire everytime other component use the setter this.ls.setLogged()
        this._sharedService.getRegionName().subscribe((reg: string) => {
            this.selectedRegion = reg;
            this.resultsBack = false;
        });
        this._sharedService.getRegRegions().subscribe((regReg: IRegressionRegion[]) => {
            this.regressionRegions = regReg;
            this.resultsBack = false;
        });
        this._sharedService.getStatisticGroups().subscribe((statGrp: IStatisticGroup[]) => {
            this.statisticGroups = statGrp; this.resultsBack = false;
        });
        this._sharedService.getScenarios().subscribe((s: IScenario[]) => {
            this.scenarios = s; this.resultsBack = false;
            this.scenarios.forEach((s) => {
                s.RegressionRegions.forEach((rr) => {
                    if (rr.Results) { this.resultsBack = true; }
                });
            });
        });
        this._sharedService.getToast().subscribe((t: Toast) => {
            this.toast = t;
            this._toasterService.pop(this.toast);
        });
    }
    //onBlur of Value, compare to min/max and show warning
    compareValue(value: IParameter) {
        //is there a value or just click in and then out (would be "")
        if (value.Value) {
            //is value outside of range (if ther is limit range)
            if (value.Limits !== undefined) {
                if (value.Value > value.Limits.Max || value.Value < value.Limits.Min) {
                    value.OutOfRange = true; //flag it so
                    value.missingVal = false;//remove the missingVal flag (since there is something in here)
                    this._sharedService.setScenarios(this.scenarios); //update service so sidebar knows
                } else {
                    //value is within proper range (no warning, has a value)
                    value.OutOfRange = false; //within range
                    value.missingVal = false;//field is not empty
                    this._sharedService.setScenarios(this.scenarios);//update service so sidebar knows
                }
            } //end limits are not undefined
            else {
                value.OutOfRange = false; //within range
                value.missingVal = false;//field is not empty
            }
        } else {
            value.OutOfRange = false; //no need to check range
            value.missingVal = false; //field is empty, but we don't care until they hit submit on sidebar
            this._sharedService.setScenarios(this.scenarios);//update service so sidebar knows
        }
    }

     //number only allowed in Value
    _keyPress(event: any) {
        const pattern = /[0-9\+\-\.\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }
}
