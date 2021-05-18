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
      errors: [];
      unit: { id: number };
      equation: string;
      equivalentYears: number;
      predictionInterval: Array<{
        biasCorrectionFactor: string;
        student_T_Statistic: string;
        variance: string;
        xiRowVector: string;
        covarianceMatrix: number;
      }>,
      expected: {
          parameters: {},
          intervalBounds: null;
      }
    }>
  }>
}

export interface explanatoryVaraibles{
  code: string;
  limits: ({
      max: number,
      min: number,
  }),
  unitType: { id: number };  
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
  public regressionRegions: Array<Regressionregion> = [];

  
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

    // Get all statistic groups, regions, unit types, regression (variable) types
    this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.statisticGrpURL).subscribe((statgroups: Array<Statisticgroup>) => {
      this.statisticGroupTypes = statgroups;
    });
     this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.regionURL).subscribe((regions: Array<Region>) => {
      this.regions = regions;
    });
    this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.unitsURL).subscribe((unitTypes: Array<Unittype>) => {
      this.unitTypes = unitTypes;
    });
    this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.regTypeURL).subscribe((regtypes: Array<Regressiontype>)  => {
      this.regressionTypes = regtypes;
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
    var studyArea;
    var statisticGroup;
    var regressionRegionName; 
    var regressionRegionCode=''; 
    var regressionRegionID; 
    var regressionVariable;
    var equation;
    var unitType;
    var explanatoryVaraiblesArray: explanatoryVaraibles[] = [];
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

    // Loop through spreadsheet
    for (var i = 2; i < data.length; i++) { 
      if (data[i][0]) {
        studyArea = (data[i][0]);
      } if (data[i][2]) {
        statisticGroup = (data[i][2]);
      } if (data[i][5]) {
        regressionRegionName = (data[i][5]);
        const regionID = this.regions.find(r => r.name == studyArea).id;
        this.regressionRegions = await this._settingsservice.getEntities(this.configSettings.nssBaseURL + 'regressionregions?regions=' + regionID).toPromise();
        regressionRegionCode = this.regressionRegions.find(rr => rr.name == regressionRegionName).code;
        regressionRegionID = this.regressionRegions.find(rr => rr.name == regressionRegionName).id;
      }
      if (data[i][15]) {
        regressionVariable = (data[i][15]);
      }
      if (data[i][16]) {
        unitType = (data[i][16]);
      }
      if (data[i][11]) {
        explanatoryVaraibles.code = data[i][11];
        explanatoryVaraibles.limits.min = data[i][12];
        explanatoryVaraibles.limits.max = data[i][13];
        explanatoryVaraibles.unitType.id  = this.unitTypes.find(ut => ut.abbreviation == (data[i][14])).id;
        explanatoryVaraiblesArray.push(JSON.parse(JSON.stringify(explanatoryVaraibles)));
        tempExplanatoryVaraiblesArray = explanatoryVaraiblesArray;
      }
      // equations
      if (data[i][25]) {
        equation = data[i][25];
        //clear out explanatoryVaraiblesArray
        if (explanatoryVaraiblesArray = []) {
          explanatoryVaraiblesArray = tempExplanatoryVaraiblesArray
        }else{
          tempExplanatoryVaraiblesArray = [];
        }
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
            parameters: explanatoryVaraiblesArray,
            regressions: [{
              ID: this.regressionTypes.find(vt => vt.code == regressionVariable).id,
              code: regressionVariable,
              name: this.regressionTypes.find(vt => vt.code == regressionVariable).name,
              errors: [],
              unit: {
                id: this.unitTypes.find(ut => ut.abbreviation == unitType).id
              },
              equation: equation,
              equivalentYears: null,
              predictionInterval: null,
              expected:{
                parameters: {},
                intervalBounds: null
              }
            }]
          }]
         }
        counter++;
        explanatoryVaraiblesArray = [];
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
