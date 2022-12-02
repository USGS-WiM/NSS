// ------------------------------------------------------------------------------
// ----- variables.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: varialbes crud in admin settings page

import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NSSService } from 'app/shared/services/app.service';
import { SettingsService } from '../../settings.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Variabletype } from 'app/shared/interfaces/variabletype';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import * as XLSX from 'xlsx';

@Component({
    moduleId: module.id,
    templateUrl: 'variabletypes.component.html'
})

export class VariableTypesComponent implements OnInit, OnDestroy {
    @ViewChild('add', {static: true})
    public addRef: TemplateRef<any>;
    @ViewChild('batch', {static: true})
    public batchRef: TemplateRef<any>;
    @ViewChild('VariableTypeForm', {static: true}) varForm;
    public newVarForm: FormGroup;
    public showNewVarForm: boolean;
    public variableTypes: Array<Variabletype>;
    private CloseResult;
    private navigationSubscription;
    public loggedInRole;
    private configSettings: Config;
    public isEditing: boolean;
    public rowBeingEdited: number;
    public tempData;
    public modalRef;
    public englishUnitTypes;
    public metricUnitTypes;
    public statisticGroups;
    public selectedStatistic;
    public nssVariableTypes: Array<Variabletype>;
    public gsVariableTypes: Array<Variabletype>;
    // Bulk Upload
    public wb: XLSX.WorkBook;
    public sheetNamesButtons: boolean;
    public tableDisplay: boolean = false;
    public bulkData = [];
    public submitted:boolean = false;
    public selectUpload: boolean = false;

    constructor(public _nssService: NSSService, public _settingsservice: SettingsService, public _route: ActivatedRoute,
        private _fb: FormBuilder, private _modalService: NgbModal, private router: Router, private _toasterService: ToasterService,
        private _configService: ConfigService) {
            this.newVarForm = _fb.group({
                'name': new FormControl(null, Validators.required),
                'description': new FormControl(null),
                'englishUnitTypeID': new FormControl(null),
                'metricUnitTypeID': new FormControl(null),
                'statisticGroupTypeID': new FormControl(null),
                'code': new FormControl(null, Validators.required)
            });
            this.navigationSubscription = this.router.events.subscribe((e: any) => {
                if (e instanceof NavigationEnd) {
                    this.getLoggedInRole();
                }
            });
            this.configSettings = this._configService.getConfiguration();
        }

    ngOnInit() {
        this._settingsservice.variables().subscribe(res => {
            this.variableTypes = res;
        });
        this.selectedStatistic = 'none';
        this.getEntites();
    }

    public getEntites(){
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.variablesURL).subscribe(res => {
            this.variableTypes = res;
        });
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.statisticGrpURL).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            this.statisticGroups = res.filter(statGrup => statGrup.defType == "BC");
        });
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.unitsURL).subscribe(res => {
            res.sort((a, b) => a.name.localeCompare(b.name));
            for (const unit of res) {
                unit['unit'] = unit['name'];
                unit['abbr'] = unit['abbreviation'];
            }
            this.englishUnitTypes = res.filter(unitType => unitType.unitSystemTypeID !== 1);
            this.metricUnitTypes = res.filter(unitType => unitType.unitSystemTypeID !== 2);
        });
    }

    public getAllVariableTypes() {
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.variablesURL).subscribe(res => {
            if (this.selectedStatistic === 'none') {this.variableTypes = res; }
        });
    }

    public onStatSelect(s) {
        this.selectedStatistic = s;
        if (s === 'none') {this.getAllVariableTypes();
        } else { this.getVariableTypes(s); }
    }

    private getVariableTypes(s) {
        var nssReturn = false;
        var gsReturn = false;
        this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.variablesURL + '?statisticGroups=' + s.id)
            .subscribe(res => {
                this.nssVariableTypes = res;
                nssReturn = true;
                if (nssReturn == true && gsReturn == true) {
                    this.combineVaraibleTypes();
                }
        });
        this._settingsservice.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.variablesURL + '?statisticGroups=' + s.id)
            .subscribe(res => {
                this.gsVariableTypes = res;
                gsReturn = true;
                if (nssReturn == true && gsReturn == true) {
                    this.combineVaraibleTypes();
                }
        });
    }

    public combineVaraibleTypes(){
        this.variableTypes = this.nssVariableTypes.concat(this.gsVariableTypes); //concatenate regressionType arrays
        this.variableTypes = Array.from(this.variableTypes.reduce((m, t) => m.set(t.name, t), new Map()).values()); //remove duplicates
    }

    showNewVariableForm() {
        this.newVarForm.controls['name'].setValue(null);
        this.newVarForm.controls['description'].setValue(null);
        this.newVarForm.controls['englishUnitTypeID'].setValue(null);
        this.newVarForm.controls['metricUnitTypeID'].setValue(null);
        this.newVarForm.controls['statisticGroupTypeID'].setValue(null);
        this.newVarForm.controls['code'].setValue(null);
        this.showNewVarForm = true;
        this.modalRef = this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' });
        this.modalRef.result.then((result) => {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            this.CloseResult = `Closed with: ${result}`;
            if (this.CloseResult) {this.cancelCreateVariableType(); }
        }, (reason) => {
            this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
            if (this.CloseResult) {this.cancelCreateVariableType(); }
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else { return `with: ${reason}`; }
    }

    private cancelCreateVariableType() {
        this.newVarForm.reset();
        this.modalRef.close();
    }

    private createNewVariableType() {
        const newItem = this.newVarForm.value;
        this._settingsservice.postEntity(newItem, this.configSettings.nssBaseURL + this.configSettings.variablesURL)
            .subscribe((response: Variabletype) => {
                response.isEditing = false;
                this.variableTypes.push(response);
                this.getEntites();
                this._toasterService.pop('info', 'Info', 'Variable was created');
                this.cancelCreateVariableType();
            }, error => {
                if (this._settingsservice.outputWimMessages(error)) {return; }
                this._toasterService.pop('error', 'Error creating Variable', error._body.message || error.statusText);
            }
        );
    }

    private EditRowClicked(i: number) {
        // make a copy in case they cancel
        this.variableTypes[i].isEditing = true;
        //if there is a row already being edited, cancel that edit
        if (this.isEditing == true) {
            this.CancelEditRowClicked(this.rowBeingEdited);
        }
        this.tempData = Object.assign({}, this.variableTypes[i]); 
        this.rowBeingEdited = i;
        this.isEditing = true; // set to true so create new is disabled
    }

    public CancelEditRowClicked(i: number) {
        this.variableTypes[i] = Object.assign({}, this.tempData);
        this.variableTypes[i].isEditing = false;
        this.rowBeingEdited = -1;
        this.isEditing = false; // set to true so create new is disabled
        if (this.varForm.form.dirty) {
            this.varForm.reset();
        }
    }

    // edits made, save clicked
    public saveVariable(u: Variabletype, i: number) {
        if (u.name === undefined || u.code === undefined) {
            // don't save it
            this._toasterService.pop('error', 'Error updating Variable', 'Name, description and Code are required.');
        } else {
            delete u.isEditing;
            this._settingsservice.putEntity(u.id, u, this.configSettings.nssBaseURL + this.configSettings.variablesURL).subscribe(
                (resp) => {
                    u.isEditing = false;
                    this.variableTypes[i] = u;
                    this._settingsservice.setVariables(this.variableTypes);
                    this.rowBeingEdited = -1;
                    this.isEditing = false; // set to true so create new is disabled
                    if (this.varForm.form.dirty) { this.varForm.reset(); }
                    this._settingsservice.outputWimMessages(resp);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error updating Variable', error._body.message || error.statusText);
                }
            );
        }
    }

    // delete category type
    public deleteVariable(deleteID: number) {
        const check = confirm('Are you sure you want to delete this Variable?');
        if (check) {
            // delete it
            const index = this.variableTypes.findIndex(item => item.id === deleteID);
            this._settingsservice.deleteEntity(deleteID, this.configSettings.nssBaseURL + this.configSettings.variablesURL)
                .subscribe(result => {
                    this.variableTypes.splice(index, 1);
                    this._settingsservice.setVariables(this.variableTypes); // update service
                    this._settingsservice.outputWimMessages(result);
                }, error => {
                    if (this._settingsservice.outputWimMessages(error)) {return; }
                    this._toasterService.pop('error', 'Error deleting Variable', error._body.message || error.statusText);
            }
            );
        }
    }


    // Bulk Upload

    showBatchVariableForm() {
        this.modalRef = this._modalService.open(this.batchRef, { backdrop: 'static', keyboard: false, size: 'lg' });
        this.modalRef.result.then((result) => {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            this.CloseResult = `Closed with: ${result}`;
            if (this.CloseResult) {this.cancelCreateVariableType(); }
        }, (reason) => {
            this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
            if (this.CloseResult) {this.cancelCreateVariableType(); }
        });
    }

    public clearTable() {
        this.sheetNamesButtons = false;
        this.tableDisplay = false; 
        this.bulkData = [];
    }

    public selectFile(event: any) {
        const target: DataTransfer = <DataTransfer>(event.target);
        if (target.files.length !== 1) { //Check for multiple files
          this.clearTable();
          this._toasterService.pop('error', 'Error', 'Cannot select multiple files');
          return;
        } 
        let ext = event.target.files[0].name.match(/\.([^\.]+)$/)[1];
        switch (ext) {  //check for incompatible file type
          case 'xlsx':
          case 'xls':
            break;
          default:
            this.clearTable();
            this._toasterService.pop('error', 'Error', 'File type must be .xlsx');
            return;
        }
        const reader: FileReader = new FileReader();
        reader.onload = (e:any) => {
            const bstr: string = e.target.result;                          
            this.wb = XLSX.read(bstr, { type: 'binary'});          // Read WorkBook
            this.sheetNamesButtons = true;                         // Show buttons to select worksheet from workbook
            };
        reader.readAsBinaryString(target.files[0]); 
    }

    public selectSheet(sheetName) {
        const ws: XLSX.WorkSheet = this.wb.Sheets[sheetName];
        var data = (XLSX.utils.sheet_to_json(ws, {header : 1}));        // Convert data to json
        this.createTable(data);
        this.tableDisplay = true;
        this.sheetNamesButtons = false;
    }

    public createTable(data) {
        let counter = 0;
        var valid = true;
        var message;
        var name;
        var description;
        var code;
        var englishUnitType;
        var metricUnitType;
        var statisticGroup;

        for (let i = 1; i < data.length; i++) { // skip first header row
            valid = true;
            if (data[i][0]) { // Name
                name = (data[i][0]);            
            } 
            if (data[i][1]) { // Description
                description = (data[i][1]);
            } 
            if (data[i][2]) { // code
                code = (data[i][2]);
            }
            if (data[i][3]) { // english unit type
                englishUnitType = (data[i][3]);
            }
            if (data[i][4]) { // metric unit type
                metricUnitType = (data[i][4]);
            }
            if (data[i][5]) { // statistic group
                statisticGroup = (data[i][5]);
            }

            if (!this.englishUnitTypes.find(ut => ut.name == englishUnitType)){
                message = "Variable " + i + " will not be uploaded. " + englishUnitType + " is not a valid english unit type.";
                this._toasterService.pop('warning', 'Warning', message);
                valid = false;
            }
            if (!this.metricUnitTypes.find(ut => ut.name == metricUnitType)){
                message = "Variable "+ i+ " will not be uploaded. "+ metricUnitType + " is not a valid metric unit type.";
                this._toasterService.pop('warning', 'Warning', message);
                valid = false;
            }
            if (!this.statisticGroups.find(sg => sg.name == statisticGroup)){
                message = "Variable "+ i+ " will not be uploaded. "+ statisticGroup + " is not a valid statistic group.";
                this._toasterService.pop('warning', 'Warning', message);
                valid = false;
            }

            if (valid) {
                // Fill array will data from spreadsheet
                this.bulkData[counter] = {  
                    name: name,
                    description: description,
                    code: code,
                    englishUnitTypeID: this.englishUnitTypes.find(ut => ut.name == englishUnitType).id,
                    metricUnitTypeID: this.metricUnitTypes.find(ut => ut.name == metricUnitType).id,
                    statisticGroupTypeID: this.statisticGroups.find(sg => sg.name == statisticGroup).id,
                    success: null
                }
                counter++;
            }
        }
    }

    public batchUploadVariableType() {

        // Can be removed if we allow for editing
        var div = document.getElementById('body');    
        div.setAttribute("style", "opacity: 0.6; filter: alpha(opacity = 60);");    
        
        this.bulkData.forEach((variable, index) => {
            delete variable.success;
            delete variable.englishUnitType;       
            delete variable.metricUnitType;
            delete variable.statisticGroup;

            this._settingsservice.postEntity(variable, this.configSettings.nssBaseURL + this.configSettings.variablesURL)
                .subscribe((response: any) => {
                    this.bulkData[index].success = "yes"
                    if (!response.headers) {
                        this._toasterService.pop('info', 'Info', 'Variable was added');
                    } else {
                        this._settingsservice.outputWimMessages(response);
                    }
                }, error => {
                this.bulkData[index].success = "no"
                    if (!this._settingsservice.outputWimMessages(error)) {                                       
                        this._toasterService.pop('error', 'Error creating Variable', error.message || error.statusText);
                    }
                }
            );
        });          
    }

    public closeTable(){
        if (this.submitted == true) {     // reload variables
            this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.variablesURL).subscribe(res => {
                this.variableTypes = res;
            });
        }
        this.bulkData = [];
        this.submitted = false;
        this.selectUpload = false;
        this.clearTable();
    }

    public getName(id, type){
        if (type == 'english'){
           return(this.englishUnitTypes.find(ut => ut.id == id).name)
        } else if (type == 'metric'){
            return(this.metricUnitTypes.find(ut => ut.id == id).name)
        }else if (type == 'stat'){
            return(this.statisticGroups.find(ut => ut.id == id).name)
        }
    }

    private getLoggedInRole() {
        this.loggedInRole = localStorage.getItem('loggedInRole');
    }

    ngOnDestroy() {
        this.navigationSubscription.unsubscribe();
    }

}
