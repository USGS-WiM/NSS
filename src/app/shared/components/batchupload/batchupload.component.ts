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
import { Unittype } from 'app/shared/interfaces/unittype';
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
    parameters: explanatoryVariables[];
    regressions: Array<{
      ID: number;    
      code: string;  
      name: string;
      errors: errors[];
      unit: { id: number };
      equation: string;
      equivalentYears: number;
      DA_Exponent: number;
      orderIndex: number;
      predictionInterval: {
        biasCorrectionFactor: string;
        student_T_Statistic: string;
        variance: string;
        xiRowVector: string;
        covarianceMatrix: string;
      },
      expected: {
          parameters: {},
          intervalBounds: null;
      }
    }>
  }>
  success: string;
}

export interface explanatoryVariables {
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
  public submitted = false;

  public regions: Array<Region>;
  public statisticGroupTypes: Array<Statisticgroup>;
  public regressionTypes: Array<Regressiontype>;
  public unitTypes: Array<Unittype>;
  public regressionRegions: Array<Regressionregion>;
  public errors: Array<Error>;

  public tempSelectedStatisticGrp: Array<Statisticgroup>;
  public tempSelectedRegType: Array<Regressiontype>;
  public selectedRegressionRegion: Array<Regressionregion>;
  public tempSelectedRegressionRegion: Array<Regressionregion>;

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

    this._nssService.selectedRegRegions.subscribe((regRegions: Array<Regressionregion>) => {
      this.selectedRegressionRegion = regRegions;
    });
  }

  public showModal(): void {
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg', windowClass: 'modal-xl batch-upload-modal' });
  }

  public saveFilters() {
    this.tempSelectedStatisticGrp = this._nssService.selectedStatGroups;
    this.tempSelectedRegressionRegion = this.selectedRegressionRegion;
    this.tempSelectedRegType = this._nssService.selectedRegressionTypes;
  }

public requeryFilters() {
    this._nssService.selectedStatGroups = this.tempSelectedStatisticGrp;
    this._nssService.setSelectedRegRegions(this.tempSelectedRegressionRegion);
    this._nssService.selectedRegressionTypes = this.tempSelectedRegType;
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
    this.data = (XLSX.utils.sheet_to_json(ws, {header : 1}));        // Convert data to json
    this.createTable(this.data);
    this.tableDisplay = true;
    this.sheetNamesButtons = false;
  }

  async createTable(data) {
    let counter = 0;
    const columnNames = data[1];
    let studyArea;
    let statisticGroup;
    let regressionRegionName;
    let regressionRegionCode;
    let regressionRegionID;
    let regressionVariable;
    let unitType;
    let eYoR;
    let daExponent;
    let orderIndex;
    let biasCF;
    let studentT;
    let variance;
    let xiRowVector;
    let covarianceMatrix: any = [];
    let explanatoryVariablesArray: explanatoryVariables[] = [];
    let tempExplanatoryVariablesArray: explanatoryVariables[] = [];
    let errorsArray:errors[] = [];
    let errorRows = [];
    let explanatoryVariables: explanatoryVariables = {  
      code: null,
      limits: ({
          max: null,
          min: null,
      }),
      unitType: { 
        id: null 
      }
    };
    let errors: errors = {  
      id: null,
      value:  null 
    };
    this.errors.forEach(error => {
      errorRows.push({
        code: error.code,
        row: columnNames.findIndex(x => x === error.code)}
      );
    })

    // Loop through spreadsheet
    for (let i = 2; i < data.length; i++) { 
      if (data[i][0]) { // Study area
        studyArea = (data[i][0]);            
        const regionID = this.regions.find(r => r.name == studyArea).id;
        this.regressionRegions = await this._settingsservice.getEntities(this.configSettings.nssBaseURL + 'regressionregions?regions=' + regionID).toPromise();
      } 
      if (data[i][2]) { // Statistic Group
        statisticGroup = (data[i][2]);
      } 
      if (data[i][5]) { // Regression Region
        regressionRegionName = (data[i][5]);
        regressionRegionCode = this.regressionRegions.find(rr => rr.name == regressionRegionName).code;
        regressionRegionID = this.regressionRegions.find(rr => rr.name == regressionRegionName).id;
      }
      if (data[i][15]) {  // Regression (statistic) variable
        regressionVariable = (data[i][15]);
      }
      if (data[i][16]) {  // Unit type
        unitType = (data[i][16]);
      }
      if (data[i][11]) {  // Explanatory Variables WIP Excel sheet
        explanatoryVariables.code = data[i][11];
        explanatoryVariables.limits.min = data[i][12];
        explanatoryVariables.limits.max = data[i][13];
        explanatoryVariables.unitType.id  = this.unitTypes.find(ut => ut.abbreviation == (data[i][14])).id;
        explanatoryVariablesArray.push(JSON.parse(JSON.stringify(explanatoryVariables)));
        tempExplanatoryVariablesArray = explanatoryVariablesArray;
      }
      // Errors
      errorRows.forEach(error => {
        if (data[i][error.row]) {
          errors.id = this.errors.find(et => et.code == (error.code)).id;
          errors.value = data[i][error.row];
          errorsArray.push(JSON.parse(JSON.stringify(errors)));
        }
      })
      if (data[i][19]) {  // Equivalent Years of Record
        eYoR = data[i][19];
      } else {
        eYoR = null;
      }
      if (data[i][20]) {  // Bias correction factor
        biasCF = data[i][20];
      } else {
        biasCF = null;
      }
      if (data[i][21]) {  // Student T Statistic
        studentT = data[i][21];
      } else {
        studentT = null;
      }
      if (data[i][22]) {  // Variance
        variance = data[i][22];
      } else {
        variance = null;
      }
      if (data[i][23]) {  // DA_Exponent
        daExponent = data[i][23];
      } else {
        daExponent = null;
      }
      if (data[i][25]) {  // xiRowVector  
        xiRowVector = data[i][25];
        xiRowVector = "[\"" + xiRowVector + "\"]";
        xiRowVector = xiRowVector.replace(/ : /gi, "\",\""); 
        xiRowVector = xiRowVector.replace(/\s/g, "");
      } else {
        xiRowVector = null;
      }
      if (data[i][26]) {  // orderIndex
        orderIndex = data[i][26];
      } else {
        orderIndex = null;
      }
      if (data[i][24]) {  
        if (explanatoryVariablesArray = []) { // clear out explanatoryVaraiblesArray
          explanatoryVariablesArray = tempExplanatoryVariablesArray;
        } else {
          tempExplanatoryVariablesArray = [];
        }
        // Get covariance matrix and format 28-34
        if (data[i+1] && data[i+1][28]) {  let col = 1;
          if (data[i+1][29]) {  col = 2;
            if (data[i+1][30]) {  col = 3;
              if (data[i+1][31]) {  col = 4;
                if (data[i+1][32]) {  col = 5;
                  if (data[i+1][33]) {  col = 6;
                    if (data[i+1][34]) {  col = 7;
                    }
                  }
                }
              }
            }
          }
          let matrixRow = [];
          for (let row = 0; row < col; row++) { 
            for (let column = 0; column < col; column++) { 
              matrixRow.push(JSON.parse(JSON.stringify("\"" + data[i+1+row][28+column] + "\"")));
            } 
            covarianceMatrix.push(JSON.parse(JSON.stringify('['+ matrixRow + ']')));
            matrixRow = [];
          } 
          covarianceMatrix = '[' + covarianceMatrix.toString() + ']';
        } else {
          covarianceMatrix = null;
        }

        let equation = data[i][24]; // Equation
        // Fill array will data from spreadsheet
        this.equationData[counter] = {  
          region: {
            name: studyArea
          },
          statisticGroupID: this.statisticGroupTypes.find(sg => sg.code == statisticGroup).id,
          statisticGroupName: this.statisticGroupTypes.find(sg => sg.code == statisticGroup).name,
          regressionRegions: [{
            ID: regressionRegionID,
            code: regressionRegionCode,
            name: regressionRegionName,
            parameters: explanatoryVariablesArray,
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
              DA_Exponent: daExponent,
              orderIndex: orderIndex,
              predictionInterval: {
                biasCorrectionFactor: biasCF,
                student_T_Statistic: studentT,
                variance: variance,
                xiRowVector: xiRowVector,
                covarianceMatrix: covarianceMatrix,
              },
              expected:{
                parameters: {},
                intervalBounds: null
              }
            }]
          }],
          success: null
        }
        counter++;
        explanatoryVariablesArray = [];
        covarianceMatrix = [];
        errorsArray = [];
      }
    }
    console.log(this.equationData);
  }

  public getUnitType(unitTypeID) {
    return this.unitTypes.find(ut => ut.id == unitTypeID).name;
  }

  public getErrorCode(errorID) {
    return this.errors.find(err => err.id == errorID).code;
  }

  public submitRecords() {
    // Can be removed if we allow for editing
    var div = document.getElementById('body');    
    div.setAttribute("style", "opacity: 0.6; filter: alpha(opacity = 60);");    
  
    this.equationData.forEach((scen, index) => {
      for (const parameter of scen.regressionRegions[0].parameters) {
        scen.regressionRegions[0].regressions[0].expected.parameters[parameter.code] = 0;
      }
      this._settingsservice.postEntity(scen, this.configSettings.nssBaseURL + this.configSettings.scenariosURL + '?statisticgroupIDorCode=' + scen.statisticGroupID + '&skipCheck=true')
      .subscribe((response: any) => {
        this.equationData[index].success = "yes"
          if (!response.headers) {
            this._toasterService.pop('info', 'Info', 'Scenario was added');
          } else {
            this._settingsservice.outputWimMessages(response);
          }
      }, error => {
        this.equationData[index].success = "no"
          if (!this._settingsservice.outputWimMessages(error)) {                                       
            this._toasterService.pop('error', 'Error creating Scenario', error.message || error.statusText);
          }
      });
    });
  }

  public closeTable(){
    if (this.submitted == true) {     // reload equations for selected state
      this.saveFilters();
      this.requeryFilters();
    }
    this.submitted = false;
    this.clearTable();
    this.selectUpload = false;
  }

}
