// ------------------------------------------------------------------------------
// ----- atLeast1Req.modal.ts ---------------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: modal used to show about information

import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NSSService } from 'app/shared/services/app.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { SettingsService } from 'app/settings/settings.service';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
declare var MathJax: {
    Hub: { Queue: (param: Object[]) => void };
};

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
    public newScenForm: FormGroup;
    public regressionRegions;
    public statisticGroups;
    public regressionTypes;
    public variables;
    public unitTypes;
    public equation;
    private configSettings: Config;

    constructor(private _nssService: NSSService, private _modalService: NgbModal, private _fb: FormBuilder,
        private _settingsService: SettingsService, private _configService: ConfigService) {
        this.newScenForm = _fb.group({
            'regressionType': new FormControl(null, Validators.required),
            'statisticGroupID': new FormControl(null, Validators.required),
            'regressionregionID': new FormControl(null, Validators.required),
            'variables': this._fb.array([]),
            'expression': new FormControl(null, Validators.required),
            'unit': new FormControl(null, Validators.required),
            'equivalentYears': new FormControl(null),
            'errors': new FormControl(null),
            'predictionInterval': new FormControl(null)
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
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.regressionRegions = res;
        });
        this._settingsService.getEntities(this.configSettings.statisticGrpURL).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.statisticGroups = res;
        });
        this._settingsService.getEntities(this.configSettings.regTypeURL).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.regressionTypes = res;
        });
        this._settingsService.getEntities(this.configSettings.variablesURL).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.variables = res;
        });
        this._settingsService.getEntities(this.configSettings.unitsURL).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
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

    addVariable() {
        const control = <FormArray>this.newScenForm.get('variables');
        control.push(this._fb.group({
            variableTypeID: new FormControl(null, Validators.required),
            max: new FormControl(null, Validators.required),
            min: new FormControl(null, Validators.required),
            unitTypeID: new FormControl(null, Validators.required),
            comments: new FormControl(null)
        }));
    }

    showMathjax() {
        const exp = this.newScenForm.get('expression').value;
        const equ = document.getElementById('mathjaxEq');
        if (equ.firstChild) {equ.removeChild(equ.firstChild); }
        this.equation = '`' + exp + '`';
        equ.insertAdjacentHTML('afterbegin', '<span [MathJax]="equation">' + this.equation + '</span');
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'MathJax']);
    }

    getVariables(form) {
        return form.controls.variables.controls;
    }

    removeVariable(i) {
        const control = <FormArray>this.newScenForm.get('variables');
        control.removeAt(i);
    }

    createNewScenario() {
        // combine max/min of variable to create Limits
        // get code, id from regression type then delete reg type
        alert('eventually will create scenario');
    }

    hideVar(varIndex) {
        const varDiv = document.getElementById('variable' + varIndex);
        varDiv.classList.add('hidden');
    }

    showVar(varIndex) {
        const varDiv = document.getElementById('variable' + varIndex);
        varDiv.classList.remove('hidden');
    }

    checkDiv(varIndex) {
        const varDiv = document.getElementById('variable' + varIndex);
        if (varDiv && varDiv.classList.contains('hidden')) {return false;
        } else {return true; }
    }

    // add function to check numeric fields, prevent default (we do it in mainview)

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) return 'by pressing ESC';
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) return 'by clicking on a backdrop';
        else return `with: ${reason}`;
    }
    ngOnDestroy() {
        this.modalSubscript.unsubscribe();
    }
}
