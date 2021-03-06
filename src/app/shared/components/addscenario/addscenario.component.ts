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
import { ToasterService } from 'angular2-toaster';
import { AuthService } from 'app/shared/services/auth.service';
import { AddRegressionRegion } from 'app/shared/interfaces/addregressionregion';
import { Regressionregion } from 'app/shared/interfaces/regressionregion';
import { Statisticgroup } from 'app/shared/interfaces/statisticgroup';
import { Regressiontype } from 'app/shared/interfaces/regressiontype';
declare var MathJax: {
    Hub: { Queue, Config }
};

@Component({
    selector: 'addScenarioModal',
    templateUrl: './addscenario.component.html',
    styleUrls: ['./addscenario.component.scss']
})
export class AddScenarioModal implements OnInit, OnDestroy {
    @ViewChild('addScenario', {static: true}) public addScenarioModal; // : ModalDirective;  //modal for validator
    private modalElement: any;
    public CloseResult: any;
    private modalSubscript;
    public appVersion: string;
    public newScenForm: FormGroup;
    public regions;
    public regressionRegions;
    public statisticGroups;
    public regressionTypes;
    public variables;
    public unitTypes;
    public equation;
    public errors;
    public cloneParameters: any;
    public regRegion: any;
    public statisticGroup: any;
    public clone = false;
    public edit = false;
    public selectedRegion;
    public originalRegion;
    private configSettings: Config;
    public addPredInt = false;
    public modalRef;
    public loggedInRole;
    public selectedRegressionRegion: Array<Regressionregion>;
    public tempSelectedRegressionRegion: Array<Regressionregion>;
    public tempSelectedStatisticGrp: Array<Statisticgroup>;
    public filteredRegressionTypes;
    public filtered = true;
    public skipCheck = false;
    public scen;
    public originalScenario = [];
    public editMode: boolean;
    public defaultUnitTypes: any;
    public rowsAndColumns;
    public get selectedStatisticGrp(): Array<Statisticgroup> {
        return this._nssService.selectedStatGroups;
    }
    public tempSelectedRegType: Array<Regressiontype>;
    public get selectedRegType(): Array<Regressiontype> {
        return this._nssService.selectedRegressionTypes;
    }
    
    constructor(private _nssService: NSSService, private _modalService: NgbModal, private _fb: FormBuilder,
        private _settingsService: SettingsService, private _configService: ConfigService, private _toasterService: ToasterService,
        private _authService: AuthService) {
        this.newScenForm = _fb.group({
            'region': new FormControl(null, Validators.required),
            'statisticGroupID': new FormControl(null, Validators.required),
            'regressionRegions': this._fb.group({
                'equationCheck': new FormControl({value: false}),
                'ID': new FormControl(null, Validators.required),
                'parameters': this._fb.array([]),
                'regressions': this._fb.group({
                    'ID': new FormControl(null, Validators.required),
                    'errors': this._fb.array([]),
                    'unit': new FormControl(null, Validators.required),
                    'equation': new FormControl(null, Validators.required),
                    'equivalentYears': new FormControl(0),
                    'predictionInterval': this._fb.group({
                        'biasCorrectionFactor': new FormControl(null),
                        'student_T_Statistic': new FormControl(null),
                        'variance': new FormControl(null),
                        'xiRowVector': new FormControl(null),
                        'covarianceMatrix':  this._fb.array([])
                    }),
                    'expected': this._fb.group({
                        'value': new FormControl(null, Validators.required),
                        'parameters': new FormControl({}),
                        'intervalBounds': this._fb.group({
                            'lower': new FormControl(null),
                            'upper': new FormControl(null)
                        })
                    })
                })
            })
        });
        this.configSettings = this._configService.getConfiguration();
    }

    ngOnInit() {
        this._nssService.currentItem.subscribe(item => this.cloneParameters = item);
        // subscriber for logged in role
        this.loggedInRole = localStorage.getItem('loggedInRole');
        this._authService.loggedInRole().subscribe(role => {
            if (role === 'Administrator' || role === 'Manager') {
                this.loggedInRole = role;
            }
        });
        // show the filter modal == Change Filters button was clicked in sidebar
        this.modalSubscript = this._nssService.showAddScenarioModal.subscribe((show: boolean) => {
            if (show) { this.showModal(); }
        });
        this._nssService.selectedRegRegions.subscribe((regRegions: Array<Regressionregion>) => {
            this.selectedRegressionRegion = regRegions;
        });
        this._nssService.selectedRegion.subscribe(region => {
            this.selectedRegion = region;
            this.originalRegion = region;
        });
        this._nssService.regressionRegions.subscribe(res => {
             if (res.length > 1) { res.sort((a, b) => a.name.localeCompare(b.name)); }
             this.regressionRegions = res;
         });
        this._nssService.getVersion.subscribe((v: string) => {
            this.appVersion = v;
        });
        this.getEntities();
        this.modalElement = this.addScenarioModal;
    }
    
    public getEntities(){   // Moved to own function in order to reload properties in case new property was added in settings
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.regionURL).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.regions = res;
        });
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.statisticGrpURL).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.statisticGroups = res.filter(statGrup => statGrup.defType == "FS");
        });
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.regTypeURL).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.regressionTypes = res;
        });
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.variablesURL).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.variables = res;
        });
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.unitsURL).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            for (const unit of res) {
                unit['unit'] = unit['name'];
                unit['abbr'] = unit['abbreviation'];
            }
            this.unitTypes = res;
        });
        this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.errorsURL).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.errors = res;
        });
    }

    public saveFilters() {
        this.tempSelectedStatisticGrp = this.selectedStatisticGrp;
        this.tempSelectedRegressionRegion = this.selectedRegressionRegion;
        this.tempSelectedRegType = this.selectedRegType;
    }

    public requeryFilters() {
        if (this.originalRegion == this.selectedRegion) {
            this._nssService.selectedStatGroups = this.tempSelectedStatisticGrp;
            this._nssService.setSelectedRegRegions(this.tempSelectedRegressionRegion);
            this._nssService.selectedRegressionTypes = this.tempSelectedRegType;
        } else {
            this._nssService.setSelectedRegion(this.selectedRegion);
            this._nssService.selectedStatGroups = [];
            this._nssService.setSelectedRegRegions([]);
            this._nssService.selectedRegressionTypes = [];
        }
    }

    public equationCheck(check) {
        if (check) { this.skipCheck = check; } 
        else { this.skipCheck = false; }    //check for null
        if (check) {
            this.newScenForm.get('regressionRegions.regressions.expected.value').disable();    
            this.newScenForm.get('regressionRegions.regressions.expected.intervalBounds.upper').disable();            
            this.newScenForm.get('regressionRegions.regressions.expected.intervalBounds.lower').disable();            
            this.newScenForm.patchValue({ regressionRegions: { regressions: { expected: { value: null}}}});
            const parmControl = <FormArray>this.newScenForm.get('regressionRegions.parameters');
            for (let i = parmControl.length-1; i >= 0; i--) {
                this.newScenForm.get('regressionRegions.parameters.'+i+'.value').disable();
                parmControl.controls[i].get('value').setValue(null);
            }
        } else {
            this.newScenForm.get('regressionRegions.regressions.expected.value').enable();
            this.newScenForm.get('regressionRegions.regressions.expected.intervalBounds.upper').enable();            
            this.newScenForm.get('regressionRegions.regressions.expected.intervalBounds.lower').enable();      
            const parmControl = <FormArray>this.newScenForm.get('regressionRegions.parameters');
            for (let i = parmControl.length-1; i >= 0; i--) {
                this.newScenForm.get('regressionRegions.parameters.'+i+'.value').enable();
            }
        }
    }

    public showModal(): void {
        this.getEntities();
        this.onStatGroupSelect('');
        this.equationCheck(false);
        this.saveFilters();
        this.selectedRegion = this.originalRegion;
        this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
        this.modalRef.result.then(
            result => {
                // this is the solution for the first modal losing scrollability
                if (document.querySelector('body > .modal')) {
                    document.body.classList.add('modal-open');
                }
                this.CloseResult = `Closed with: ${result}`;
            },
            reason => {
                this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
                this.cancelCreateScenario();
            }
        );
        if (this.cloneParameters.info) {
            this.clearScenario();
            this.filtered = false;
            //cloned scenario
            if (this.cloneParameters.info == "clone") {
                this.clone = true;
                this.edit = false;
                this.cloneScenario();
            }
            //edit scenario
            else if (this.cloneParameters.info == "edit") {
                this.clone = false;
                this.edit = true;
                this.editMode = true;
                this.originalScenario = [this.cloneParameters.statisticGroupID,this.cloneParameters.rr.id,this.cloneParameters.r.id];
                this.fillModal();
            }
        //new scenario
        } else {
            this.editMode = false;
            this.filtered = true;
            this.clearScenario();
            this.clone = false;
            this.edit = false;
        }
    }

    public clearUnits(index){
        const controlArray = <FormArray> this.newScenForm.get('regressionRegions.parameters');
        controlArray.controls[index].get('unitType').setValue(null);
    }

    public defaultUnits(varIndex) {
        var defaultUnitTypes = [];
        const controlArray = <FormArray> this.newScenForm.get('regressionRegions.parameters');
        const variable = this.variables.find(r => r.code === (controlArray.controls[varIndex].get('code').value));

        if (variable && variable.englishUnitTypeID) defaultUnitTypes.push(variable.englishUnitType);
        if (variable && variable.metricUnitTypeID && (!variable.englishUnitTypeID || variable.metricUnitTypeID != variable.englishUnitTypeID)) 
            defaultUnitTypes.push(variable.metricUnitType);

        if (defaultUnitTypes.length == 0) return this.unitTypes;
        return defaultUnitTypes;
    }

    //fill the modal when cloning and editing 
    public fillModal() {
        this.newScenForm.get('region').valueChanges.subscribe(item => {
            if(item != null){
                this._nssService.setSelectedRegion(item)
                this.newScenForm.patchValue({regressionRegions: { ID: null}});
            }
        }) 
        this.unitTypes.forEach( (element,index) => {  
            if (element.id.toString() == this.cloneParameters.r.unit.id.toString()){
                this.newScenForm.patchValue({ regressionRegions: { regressions: { unit: this.unitTypes[index]}}});
            }
        });
        if(!this.cloneParameters.r.equivalentYears) {
            this.cloneParameters.r.equivalentYears = 0;
        }
        this.newScenForm.patchValue({
            statisticGroupID: this.cloneParameters.statisticGroupID,
            regressionRegions: {
                ID: this.cloneParameters.rr.id,
                regressions: {
                    ID: this.cloneParameters.r.id,
                    equation: this.cloneParameters.r.equation.toString(),
                    equivalentYears: this.cloneParameters.r.equivalentYears.toString(),
                } 
            }
        });
        this.onStatGroupSelect(this.cloneParameters.statisticGroupID);
        //Prediction Interval
        if (this.cloneParameters.r.predictionInterval.biasCorrectionFactor != null) {
            this.addPredInt = true;
            this.newScenForm.patchValue({ regressionRegions: { regressions: { predictionInterval: { biasCorrectionFactor: this.cloneParameters.r.predictionInterval.biasCorrectionFactor.toString()}}}});
        } 
        if (this.cloneParameters.r.predictionInterval.student_T_Statistic != null) {
            this.addPredInt = true;
            this.newScenForm.patchValue({ regressionRegions: { regressions: { predictionInterval: { student_T_Statistic: this.cloneParameters.r.predictionInterval.student_T_Statistic.toString()}}}});
        }
        if (this.cloneParameters.r.predictionInterval.variance != null) {
            this.addPredInt = true;
            this.newScenForm.patchValue({ regressionRegions: { regressions:{ predictionInterval: { variance: this.cloneParameters.r.predictionInterval.variance.toString()}}}});
        }
        if (this.cloneParameters.r.predictionInterval.xiRowVector != null) {
            this.addPredInt = true;
            this.newScenForm.patchValue({ regressionRegions: { regressions : { predictionInterval: { xiRowVector: this.cloneParameters.r.predictionInterval.xiRowVector.toString()}}}});
        }
        if (this.cloneParameters.r.predictionInterval.covarianceMatrix != null && this.cloneParameters.r.predictionInterval.covarianceMatrix != "null") {
            this.addPredInt = true;
            this.rowsAndColumns = ((this.cloneParameters.r.predictionInterval.covarianceMatrix).match(/[[]/g).length) - 1;
            this.addMatrix();
            var numbers = this.cloneParameters.r.predictionInterval.covarianceMatrix.match(/[\d.]+/g);
            // Filling matrix
            const matrixControl = <FormArray>this.newScenForm.get('regressionRegions.regressions.predictionInterval.covarianceMatrix');
            for (let i=0, j=numbers.length, x=0; i<j; i+=this.rowsAndColumns,x++) {
                var temparray = numbers.slice(i,i+this.rowsAndColumns);
                matrixControl.controls[x].setValue(temparray);
            }
        }
        //parameters
        this.cloneParameters.rr.parameters.forEach((element,index) => {
            this.addVariable();
            const controlArray = <FormArray> this.newScenForm.get('regressionRegions.parameters');
            controlArray.controls[index].get('code').setValue(element.code.toString());
            //dimesionless units don't have min and max
            if (element.limits.max != null){
                controlArray.controls[index].get('limits.max').setValue(element.limits.max.toString());
            }
            if (element.limits.min != null){
                controlArray.controls[index].get('limits.min').setValue(element.limits.min.toString());
            }
            this.unitTypes.forEach( (unit,x) => {  
                if (unit.id.toString() == element.unitType.id.toString()){
                    controlArray.controls[index].get('unitType').setValue(this.unitTypes[x]);
               }
            });
        }); 
        this.showMathjax();
        this.cloneParameters.r.errors.forEach((element,index) => {
            this.addError();
            const controlArray = <FormArray> this.newScenForm.get('regressionRegions.regressions.errors');       
            controlArray.controls[index].get('id').setValue(element.id);
            controlArray.controls[index].get('value').setValue(element.value.toString());
        }); 
        this.cloneParameters = " "; 
    }

    public cloneScenario(){  
       this.newScenForm.addControl('region', this._fb.control('', Validators.required));
        this.regions.forEach( (element,index) => {  
            if (element.id.toString() == this.selectedRegion.id.toString()){
                this.newScenForm.patchValue({ region: this.regions[index]});
            }
        });
        this.fillModal();
    }

    public cloneOrEdit(e){
        //make sure in edit mode
        if(e){
            if (this.editMode == true){
                this.scen = JSON.parse(JSON.stringify(this.newScenForm.value));
                //change back to edit if user reselects original core dropdowns
                if ((this.originalScenario[0] == this.scen.statisticGroupID) &&
                (this.originalScenario[1] == this.scen.regressionRegions.ID) && 
                (this.originalScenario[2] == this.scen.regressionRegions.regressions.ID)) {
                    this.clone = false;
                    this.edit = true;
                    this._toasterService.clear();
                    this._toasterService.pop('info', 'Info', 'Scenario Will Be Edited Instead Of Cloned');
                } else { //change to clone
                    this.clone = true;
                    this.edit = false;
                    this._toasterService.clear();
                    this._toasterService.pop('info', 'Info', 'Scenario Will Be Cloned Instead Of Edited');
                }
            }
        }
    }

    public addVariable() {
        const control = <FormArray>this.newScenForm.get('regressionRegions.parameters');
        control.push(this._fb.group({
            code: new FormControl(null, Validators.required),
            limits: this._fb.group({
                max: new FormControl(null, Validators.required),
                min: new FormControl(null, Validators.required),
            }),
            unitType: new FormControl(null, Validators.required),
            //comments: new FormControl(null),
            value: new FormControl(null, Validators.required)
        }));
        this.equationCheck(this.newScenForm.get('regressionRegions.equationCheck').value);
    }

    public removeVariable(i) {
        const control = <FormArray>this.newScenForm.get('regressionRegions.parameters');
        control.removeAt(i);
    }

    public addError() {
        const control = <FormArray>this.newScenForm.get('regressionRegions.regressions.errors');
        control.push(this._fb.group({
            id: new FormControl(null, Validators.required),
            value: new FormControl(null, Validators.required)
        }));
    }  
    
    public removeError(i) {
        const control = <FormArray>this.newScenForm.get('regressionRegions.regressions.errors');
        control.removeAt(i);
    }

    public addMatrix() {
        const matrixControl = <FormArray>this.newScenForm.get('regressionRegions.regressions.predictionInterval.covarianceMatrix');
        for (let i = 0; i < this.rowsAndColumns; i++) {
            matrixControl.push(new FormArray([]));
            for (let j = 0; j < this.rowsAndColumns; j++) {
              (matrixControl.at(i) as FormArray).push(new FormControl());
            }
        }
    }

    public removeMatrix() {
        this.rowsAndColumns = null;
        const matrixControl = <FormArray>this.newScenForm.get('regressionRegions.regressions.predictionInterval.covarianceMatrix');
        for (let i = matrixControl.length-1; i >= 0; i--) {
            matrixControl.removeAt(i);
        }
    }

    public showMathjax() {
        const exp = this.newScenForm.get('regressionRegions.regressions.equation').value;
        const equ = document.getElementById('mathjaxEq');
        equ.style.visibility = 'hidden';
        if (equ.firstChild) {
            equ.removeChild(equ.firstChild); 
        }
        if(exp == null){
            this.equation = " ";
        }else{
        this.equation = '`' + exp.replace(/_/g, ' \\_') + '`';
        }
        equ.insertAdjacentHTML('afterbegin', '<span [MathJax]="equation">' + this.equation + '</span');
        MathJax.Hub.Config({
            'HTML-CSS': {
                linebreaks: { automatic: true}
            },
            CommonHTML: {
                linereaks: { automatic: true }
            }
        });
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'MathJax'],
            function() {
                equ.style.visibility = '';
            });
    }

    public clearScenario(){
        this.newScenForm.reset();
        this.selectedRegion = this.originalRegion;
        this.regions.forEach( (element,index) => {  
            if (element.id.toString() == this.selectedRegion.id.toString()){
                this.newScenForm.patchValue({ region: this.regions[index]});
            }
        });
        this.newScenForm.addControl('region', this._fb.control('', ));
        const errorControl = <FormArray>this.newScenForm.get('regressionRegions.regressions.errors');
        for(let i = errorControl.length-1; i >= 0; i--) {
            errorControl.removeAt(i);
        }
        const parmControl = <FormArray>this.newScenForm.get('regressionRegions.parameters');
        for(let i = parmControl.length-1; i >= 0; i--) {
            parmControl.removeAt(i);
        }
        this.removeMatrix();
        this.addPredInt = false
    }

    public onStatGroupSelect(e){
        this._settingsService.getEntities(this.configSettings.nssBaseURL + '/' + this.configSettings.regTypeURL+"?statisticgroups="+ e).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.filteredRegressionTypes = res;
        });
    }

    //get scen object ready for put and post
    public setUpScenario(){
        // adding all necessary properties, since ngValue won't work with all the nested properties
        this.scen = JSON.parse(JSON.stringify(this.newScenForm.value));
        const regRegs = this.scen['regressionRegions']; const regs = regRegs.regressions;
        const statGroupIndex = this.statisticGroups.findIndex(item => item.id === this.scen['statisticGroupID']);
        this.scen['statisticGroupName'] = this.statisticGroups[statGroupIndex].name;
        this.scen['statisticGroupCode'] = this.statisticGroups[statGroupIndex].code;

        //Add formatted matrix
        if (this.newScenForm.get('regressionRegions.regressions.predictionInterval.covarianceMatrix').value.length > 0 ) {  //Check if matrix was entered 
            const matrixControl = <FormArray>this.newScenForm.get('regressionRegions.regressions.predictionInterval.covarianceMatrix');
            var matrix = [];
            for(let i = 0; i <= matrixControl.length-1; i++) {
                var matrixRow = "[" +  "\"" + matrixControl.controls[i].value.join("\",\"") + "\""  + "]";
                matrix.push(matrixRow)
            }
            [regs.predictionInterval.covarianceMatrix].forEach(e => delete this.scen[e]);  //remove unformatted matrix
            regs.predictionInterval.covarianceMatrix = "[" + matrix.join(",") + "]";   //add formated matrix
        }else{
            regs.predictionInterval.covarianceMatrix = null;
        }

        // add regression region name/code
        const regRegIndex = this.regressionRegions.findIndex(item => item.id === regRegs.ID);
        regRegs['name'] = this.regressionRegions[regRegIndex].name;
        regRegs['code'] = this.regressionRegions[regRegIndex].code;

        // add regression code/name/description
        const regIndex = this.regressionTypes.findIndex(item => item.id === regs.ID);
        regs.code = this.regressionTypes[regIndex].code;
        regs.name = this.regressionTypes[regIndex].name;
        regs.description = this.regressionTypes[regIndex].description;

        // add parameter name, description, add values/check if between limits
        regs.expected.parameters = {};
        for (const parameter of regRegs.parameters) {
            if (this.skipCheck == true) {
                regs.expected.parameters[parameter.code] = 0;
            } else {
            regs.expected.parameters[parameter.code] = parameter.value;
            }
            const paramIndex = this.variables.findIndex(item => item.code === parameter.code);
            parameter['name'] = this.variables[paramIndex].name;
            parameter['description'] = this.variables[paramIndex].description;
            if (parameter.value > parameter.limits.max || parameter.value < parameter.limits.min) {
                this._toasterService.pop('error', 'Error', parameter.name + ' value not within the given limits.');
                return;
            } // make sure given values are within the limits
        }

        // check prediction interval
        if (!this.addPredInt || (!regs.predictionInterval.biasCorrectionFactor && !regs.predictionInterval.student_T_Statistic &&
            !regs.predictionInterval.variance && !regs.predictionInterval.xiRowVector && !regs.predictionInterval.covarianceMatrix)) {
                regs.predictionInterval = null; regs.expected.intervalBounds = null;
        }

        // change regression region/regression to arrays
        this.scen['regressionRegions'].regressions = [regs];
        this.scen['regressionRegions'] = [regRegs];
    }

    public async submitScenario() {
        // put scenario
        this.setUpScenario();
        await this._settingsService.putEntity('', this.scen, this.configSettings.nssBaseURL + this.configSettings.scenariosURL + '?skipCheck=' + this.skipCheck)
            .subscribe((response) => {
                this.requeryFilters();
                // clear form
                if (!response.headers) {
                    this._toasterService.pop('info', 'Info', 'Scenario was Updated');
                } else {
                    this._settingsService.outputWimMessages(response); 
                }
                this.cancelCreateScenario();
            }, error => {
                if (this._settingsService.outputWimMessages(error)) { return; }
                this._toasterService.pop('error', 'Error editing Scenario', error._body.message || error.statusText);
            }
        );
    }

    public createNewScenario() {
        // post scenario
        this.setUpScenario();
        this._settingsService.postEntity(this.scen, this.configSettings.nssBaseURL + this.configSettings.scenariosURL + '?statisticgroupIDorCode=' + this.scen.statisticGroupID + '&skipCheck=' + this.skipCheck)
            .subscribe((response: any) => {
                this.requeryFilters();
                // clear form
                if (!response.headers) {
                    this._toasterService.pop('info', 'Info', 'Scenario was added');
                } else {
                    this._settingsService.outputWimMessages(response); 
                }
                this.cancelCreateScenario();
            }, error => {
                if (!this._settingsService.outputWimMessages(error)) {                                       
                    this._toasterService.pop('error', 'Error creating Scenario', error.message || error.statusText);
                }
            }
        );
    }

    outputWimMessages(msg) {
        // takes messages from http requests and outputs into toast
        const existingMsgs = [];
        for (const key of Object.keys(msg)) {
            for (const item of msg[key]) {
                // skip duplicate messages
                if (existingMsgs.indexOf(item) == -1) {
                    existingMsgs.push(item);
                    this._toasterService.pop(key, key.charAt(0).toUpperCase() + key.slice(1), item);
                }
            }
        }
    }

    cancelCreateScenario() {
        // reset form if canceled, remove all added params/errors
        const params = <FormArray>this.newScenForm.get('regressionRegions.parameters');
        while (params.length !== 0) { params.removeAt(0); }
        const errors = <FormArray>this.newScenForm.get('regressionRegions.regressions.errors');
        while (errors.length !== 0) {errors.removeAt(0); }
        this.addPredInt = false;
        this.selectedRegion = this.originalRegion;
        this.newScenForm.reset();
        this.modalRef.close();
    }

    hideDiv(divId) {
        // collapse param/error div
        const div = document.getElementById(divId);
        div.classList.add('hidden');
    }

    showDiv(divId) {
        // uncollapse param/error div
        const div = document.getElementById(divId);
        div.classList.remove('hidden');
    }

    checkDiv(divId) {
        // check if div is collapsed or not
        const div = document.getElementById(divId);
        if (div && div.classList.contains('hidden')) {return false;
        } else {return true; }
    }

    public showAddRegRegion() {
        const addRegRegForm: AddRegressionRegion = {
            show: true,
            regRegionID: null
        }
        this._nssService.setAddRegressionRegionModal(addRegRegForm);
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) return 'by pressing ESC';
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) return 'by clicking on a backdrop';
        else return `with: ${reason}`;
    }

    // number only allowed in Value
    public _keyPress(event: any) {
        const pattern = /[0-9\+\-\.\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }

    ngOnDestroy() {
        this.modalSubscript.unsubscribe();
    }
}
