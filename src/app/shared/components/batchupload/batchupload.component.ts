import { Component, OnInit, ViewChild } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster';
import * as XLSX from 'xlsx';
import { SettingsService } from 'app/settings/settings.service';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { Region } from 'app/shared/interfaces/region';
import { Statisticgroup } from 'app/shared/interfaces/statisticgroup';
import { Unittype } from 'app/shared/interfaces/unitType';
import { Regressiontype } from 'app/shared/interfaces/regressiontype';
import { Regressionregion } from 'app/shared/interfaces/regressionregion';
import { Error } from 'app/shared/interfaces/error';

export interface equation {
  region: {
    name: string
  };
  statisticGroupID: number;
  statisticGroupName: string;
  regressionRegions: Array<{
    ID: number;
    code: string;
    name: string;
    parameters: explanatoryVaraibles[];
    regressions: Array<{
      ID: number;    
      code: string;  
      name: string;
      errors: errors[];
      unit: { id: number };
      equation: string;
      equivalentYears: number;
      predictionInterval: {
        biasCorrectionFactor: string;
        student_T_Statistic: string;
        variance: string;
        xiRowVector: string;
        covarianceMatrix: number;
      },
      expected: {
          parameters: {},
          intervalBounds: null;
      }
    }>
  }>
}

export interface explanatoryVaraibles {
  code: string;
  limits: ({
      max: number,
      min: number,
  }),
  unitType: { id: number };  
}

export interface errors {
  id: number;
  value: number;  
}

@Component({
  selector: 'batchUploadModalNSS',
  templateUrl: './batchupload.component.html',
  styleUrls: ['./batchupload.component.scss']
})

export class BatchuploadComponentNSS implements OnInit {
  @ViewChild('batchUploadNSS', {static: true}) public batchUploadModalNSS;

  private configSettings: Config;
  public modalSubscription: any;
  public modalRef;
  private modalElement: any;
  public selectUpload: boolean = false;
  public sheetNamesButtons: boolean;
  public wb: XLSX.WorkBook
  public data: [][];
  public tableDisplay: boolean = false;
  public equationData: equation[] = [];

  public regions: Array<Region>;
  public statisticGroupTypes: Array<Statisticgroup>;
  public regressionTypes: Array<Regressiontype>;
  public unitTypes: Array<Unittype>;
  public regressionRegions: Array<Regressionregion>;
  public errors: Array<Error>;
  
  constructor(private _nssService: NSSService, 
    private _modalService: NgbModal, 
    private _toasterService: ToasterService, 
    private _configService: ConfigService,
    public _settingsservice: SettingsService
    ) {     this.configSettings = this._configService.getConfiguration();
    }

  ngOnInit() {
    this.modalSubscription = this._nssService.showBatchUploadModalNSS.subscribe((show: boolean) => {
      if (show) { this.showModal(); }
    });
    this.modalElement = this.batchUploadModalNSS;

    // Get all statistic groups, regions, unit types, regression (variable) types, errors
    this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.statisticGrpURL).subscribe((statGroups: Array<Statisticgroup>) => {
      this.statisticGroupTypes = statGroups;
    });
     this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.regionURL).subscribe((regions: Array<Region>) => {
      this.regions = regions;
    });
    this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.unitsURL).subscribe((unitTypes: Array<Unittype>) => {
      this.unitTypes = unitTypes;
    });
    this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.regTypeURL).subscribe((regTypes: Array<Regressiontype>)  => {
      this.regressionTypes = regTypes;
    });
    this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.errorsURL).subscribe((errorTypes: Array<Error>) => {
      this.errors = errorTypes;
  });
  }

  public showModal(): void {
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg', windowClass: 'modal-xl batch-upload-modal' });
  }

  public clearTable() {
    this.sheetNamesButtons = false;
    this.tableDisplay = false; 
    delete(this.data);
  }

  public selectFile(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) { //Check for multiple files
      this.clearTable();
      this._toasterService.pop('error', 'Error', 'Cannot select multiple files');
      return;
    } 
    var ext = event.target.files[0].name.match(/\.([^\.]+)$/)[1];
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
    this.data = (XLSX.utils.sheet_to_json(ws, {header : 1}));        // Convert data to json
    this.createTable(this.data);
    this.tableDisplay = true;
    this.sheetNamesButtons = false;
  }

  async createTable(data) {
    var counter = 0;
    var explanatoryVaraiblesArray: explanatoryVaraibles[] = [];
    var errorsArray:errors[] = [];
    var tempExplanatoryVaraiblesArray: explanatoryVaraibles[] = [];
    var explanatoryVaraibles: explanatoryVaraibles = {  
      code: null,
      limits: ({
          max: null,
          min: null,
      }),
      unitType: { 
        id: null 
      }
    };
    var errors: errors = {  
      id: null,
      value:  null 
    };

    // Loop through spreadsheet
    for (var i = 2; i < data.length; i++) { 
      if (data[i][0]) { // Study area
        var studyArea = (data[i][0]);
      } if (data[i][2]) { // Statistic Group
        var statisticGroup = (data[i][2]);
      } if (data[i][5]) { // Regression Region
        var regressionRegionName = (data[i][5]);
        const regionID = this.regions.find(r => r.name == studyArea).id;
        this.regressionRegions = await this._settingsservice.getEntities(this.configSettings.nssBaseURL + 'regressionregions?regions=' + regionID).toPromise();
        var regressionRegionCode = this.regressionRegions.find(rr => rr.name == regressionRegionName).code;
        var regressionRegionID = this.regressionRegions.find(rr => rr.name == regressionRegionName).id;
      }
      if (data[i][15]) {  // Regression (statistic) variable
        var regressionVariable = (data[i][15]);
      }
      if (data[i][16]) {  // Unit type
        var unitType = (data[i][16]);
      }
      if (data[i][11]) {  // Explanatory Varaibles
        explanatoryVaraibles.code = data[i][11];
        explanatoryVaraibles.limits.min = data[i][12];
        explanatoryVaraibles.limits.max = data[i][13];
        explanatoryVaraibles.unitType.id  = this.unitTypes.find(ut => ut.abbreviation == (data[i][14])).id;
        explanatoryVaraiblesArray.push(JSON.parse(JSON.stringify(explanatoryVaraibles)));
        tempExplanatoryVaraiblesArray = explanatoryVaraiblesArray;
      }
      // Errors
      if (data[i][17]) { // 	Average standard error (of either estimate or prediction)
        errors.id = this.errors.find(et => et.code == ("SE")).id;
        errors.value = data[i][17];
        errorsArray.push(JSON.parse(JSON.stringify(errors)));
      }
      if (data[i][19]) { // Average standard error of prediction
        errors.id = this.errors.find(et => et.code == ("SEp")).id;
        errors.value = data[i][19];
        errorsArray.push(JSON.parse(JSON.stringify(errors)));
      }
      if (data[i][28]) { // Percent Correct
        errors.id = this.errors.find(et => et.code == ("PC")).id;
        errors.value = data[i][28];
        errorsArray.push(JSON.parse(JSON.stringify(errors)));
      }
      if (data[i][20]) {  // Equivalent Years of Record
        var eYoR = data[i][20];
      } else {
        eYoR = null;
      }
      if (data[i][21]) {  // Bias correction factor
        var biasCF = data[i][21];
      } else {
        biasCF = null;
      }
      if (data[i][22]) {  // Student T Statistic
        var studentT = data[i][22];
      } else {
        studentT = null;
      }
      if (data[i][23]) {  // Variance
        var variance = data[i][23];
      } else {
        variance = null;
      }
      if (data[i][26]) {  // xiRowVector  [\"logN(DRNAREA,10)\",\"AL_SVI2020\",\"PRECPRIS10\",\"L3_PIEDMNT\",\"L3_SE_PLNS\"]
        var xiRowVector = data[i][26];
        xiRowVector = "[\"" + xiRowVector + "\"]";
        xiRowVector = xiRowVector.replace(/ : /gi, "\",\""); 
        xiRowVector = xiRowVector.replace(/\s/g, "");
      } else {
        xiRowVector = null;
      }
      // if (data[i][21]) {  // Covariance Matrix 29-33
      //   var covarianceMatrix = data[i][21];
      // } else {
      //   covarianceMatrix = null;
      // }
      if (data[i][25]) {  //Equation
        var equation = data[i][25];
        if (explanatoryVaraiblesArray = []) { // clear out explanatoryVaraiblesArray
          explanatoryVaraiblesArray = tempExplanatoryVaraiblesArray
        }else{
          tempExplanatoryVaraiblesArray = [];
        }
        this.equationData[counter] = {  // Fill array will data from spreadsheet
          region: {
            name: studyArea
          },
          statisticGroupID: this.statisticGroupTypes.find(sg => sg.code == statisticGroup).id,
          statisticGroupName: this.statisticGroupTypes.find(sg => sg.code == statisticGroup).name,
          regressionRegions: [{
            ID: regressionRegionID,
            code: regressionRegionCode,
            name: regressionRegionName,
            parameters: explanatoryVaraiblesArray,
            regressions: [{
              ID: this.regressionTypes.find(vt => vt.code == regressionVariable).id,
              code: regressionVariable,
              name: this.regressionTypes.find(vt => vt.code == regressionVariable).name,
              errors: errorsArray,
              unit: {
                id: this.unitTypes.find(ut => ut.abbreviation == unitType).id
              },
              equation: equation,
              equivalentYears: eYoR,
              predictionInterval: {
                biasCorrectionFactor: biasCF,
                student_T_Statistic: studentT,
                variance: variance,
                xiRowVector: xiRowVector,
                covarianceMatrix: null,
              },
              expected:{
                parameters: {},
                intervalBounds: null
              }
            }]
          }]
        }
        counter++;
        explanatoryVaraiblesArray = [];
        errorsArray = [];
      }
    }
    console.log(this.equationData)
  }

  public getUnitType(unitTypeID) {
    return this.unitTypes.find(ut => ut.id == unitTypeID).name
  }

  public submitRecords() {
    this.equationData.forEach(scen => {
      for (const parameter of scen.regressionRegions[0].parameters) {
        scen.regressionRegions[0].regressions[0].expected.parameters[parameter.code] = 0;
      }
      console.log(scen)
      this._settingsservice.postEntity(scen, this.configSettings.nssBaseURL + this.configSettings.scenariosURL + '?statisticgroupIDorCode=' + scen.statisticGroupID + '&skipCheck=true')
      .subscribe((response: any) => {
          if (!response.headers) {
            this._toasterService.pop('info', 'Info', 'Scenario was added');
          } else {
            this._settingsservice.outputWimMessages(response);
          }
      }, error => {
          if (!this._settingsservice.outputWimMessages(error)) {                                       
            this._toasterService.pop('error', 'Error creating Scenario', error.message || error.statusText);
          }
      });
    
    });
  }
}