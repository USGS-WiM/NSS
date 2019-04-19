// ------------------------------------------------------------------------------
// ----- atLeast1Req.modal.ts ---------------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: modal used to show about information

import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NSSService } from 'app/shared/services/app.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SettingsService } from 'app/settings/settings.service';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

@Component({
    selector: 'addScenarioModal',
    templateUrl: './addscenario.component.html',
    styleUrls: ['./addscenario.component.css']
})
export class AddScenarioModal implements OnInit, OnDestroy {
    @ViewChild('addScenario') public addScenarioModal; // : ModalDirective;  //modal for validator
    private modalElement: any;
    public CloseResult: any;
    private modalSubscript;
    public appVersion: string;
    public newCitForm: FormGroup;
    public regressionRegions;
    public statisticGroups;
    public regressionTypes;
    public variables;
    public unitTypes;
    private configSettings: Config;

    constructor(private _nssService: NSSService, private _modalService: NgbModal, private _fb: FormBuilder,
        private _settingsService: SettingsService, private _configService: ConfigService) {
        this.newCitForm = _fb.group({
            'regressionTypeID': new FormControl(null, Validators.required),
            'statisticGroupID': new FormControl(null, Validators.required),
            'regressionregionID': new FormControl(null, Validators.required),
            'variables': new FormControl(null, Validators.required),
            'expression': new FormControl(null, Validators.required),
            'unit': new FormControl(null, Validators.required)
        });
        this.configSettings = this._configService.getConfiguration();
    }

    ngOnInit() {
        // show the filter modal == Change Filters button was clicked in sidebar
        this.modalSubscript = this._nssService.showAddScenarioModal.subscribe((show: boolean) => {
            if (show) { this.showModal(); }
        });
        this._nssService.getVersion.subscribe((v: string) => {
            this.appVersion = v;
        });

        this._settingsService.getEntities(this.configSettings.regRegionURL).subscribe(res => {
            this.regressionRegions = res;
        });
        this._settingsService.getEntities(this.configSettings.statisticGrpURL).subscribe(res => {
            this.statisticGroups = res;
        });
        this._settingsService.getEntities(this.configSettings.regTypeURL).subscribe(res => {
            this.regressionTypes = res;
        });
        this._settingsService.getEntities(this.configSettings.variablesURL).subscribe(res => {
            this.variables = res;
        });
        this._settingsService.getEntities(this.configSettings.unitsURL).subscribe(res => {
            this.unitTypes = res;
        });

        this.modalElement = this.addScenarioModal;
    }

    public showModal(): void {
        this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(
            result => {
                // this is the solution for the first modal losing scrollability
                if (document.querySelector('body > .modal')) {
                    document.body.classList.add('modal-open');
                }
                this.CloseResult = `Closed with: ${result}`;
            },
            reason => {
                this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) return 'by pressing ESC';
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) return 'by clicking on a backdrop';
        else return `with: ${reason}`;
    }
    ngOnDestroy() {
        this.modalSubscript.unsubscribe();
    }
}
