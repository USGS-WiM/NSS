import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedService } from '../services/eventSharing.service';
import {IRegressionRegion } from '../shared/regressionRegion';
import {IStatisticGroup } from '../shared/statisticGroup';
import { IScenario } from '../shared/scenario';

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
    form: FormGroup;

    constructor(@Inject(SharedService) private _sharedService: SharedService) { }
    ngOnInit(): any {
        // Will fire everytime other component use the setter this.ls.setLogged()
        this._sharedService.getRegionName().subscribe((reg: string) => {
            this.selectedRegion = reg;
        });
        this._sharedService.getRegRegions().subscribe((regReg: IRegressionRegion[]) => {
            this.regressionRegions = regReg;
        });
        this._sharedService.getStatisticGroups().subscribe((statGrp: IStatisticGroup[]) => {
            this.statisticGroups = statGrp;
        });
        this._sharedService.getScenarios().subscribe((s: IScenario[]) => {
            this.scenarios = s;
        });
    }

    onSubmit(value: any) {
        let what = value;
        //if (sessionStorage.getItem('username')) { this.auth.logout(); }
        //this.auth.login(value.username, value.password)
        //    .subscribe(
        //    (user: any) => this.router.navigateByUrl('workbench'),
        //    () => { this.error = true; }
        //    );
    }

    showDescription(desc: string) {
        alert(desc);
    }
}
