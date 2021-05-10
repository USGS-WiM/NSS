import { Component, OnInit, ViewChild } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster';
import * as XLSX from 'xlsx';
import { SettingsService } from 'app/settings/settings.service';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { Region } from 'app/shared/interfaces/region';

export interface equation {
  region: {
    name: string
  };
  statisticGroupID: string;
  statisticGroupName: string;
  regressionRegions: Array<{
    ID: string;
    code: string;
    parameters: explanatoryVaraibles[];
    regressions: Array<{
      ID: string;    
      code: string;  
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
  public tableData;
  public states = [];
  public tableDisplay: boolean = false;
  public equationData: equation[] = [];
  public oldParamters = [];
  public statisticGroups;
  public regressionRegions;
  public regions;
  
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
    // Get all statistic groups 
    this._settingsservice.getEntities(this.configSettings.nssBaseURL + this.configSettings.statisticGrpURL).subscribe(res => {
      this.statisticGroups = res;
    });
    // Get all regions
    this._nssService.regions.subscribe((regions: Array<Region>) => {
      this.regions = regions;
      console.log(regions)
    });
  }

  public showModal(): void {
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg', windowClass: 'modal-xl batch-upload-modal' });
  }

  public clearTable() {
    this.sheetNamesButtons = false;
    this.tableDisplay = false; 
    delete(this.data);
    delete(this.tableData);
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

  public createTable(data) {
    var studyArea;
    var statisticGroup;
    var regressionRegion 
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
      unitType: null
    };

    var numOfEquationsTotal = 0;
    for (var i = 2; i < data.length; i++) { 
      if (data[i][25]) {
        numOfEquationsTotal++;
      }
    }
 

    var counter = 0;
    for (var i = 2; i < data.length; i++) { 
      if (data[i][0]) {
        studyArea = (data[i][0])
      } if (data[i][2]) {
        statisticGroup= (data[i][2])
      } if (data[i][5]) {
        regressionRegion=(data[i][5])
      }
      if (data[i][15]) {
        regressionVariable=(data[i][15])
      }
      if (data[i][16]) {
        unitType=(data[i][16])
      }

      if (data[i][11]) {
        explanatoryVaraibles.code = (data[i][11]);
        explanatoryVaraibles.limits.min = (data[i][12]);
        explanatoryVaraibles.limits.max = (data[i][13]);
        explanatoryVaraibles.unitType  = (data[i][14]);
        explanatoryVaraiblesArray.push(JSON.parse(JSON.stringify(explanatoryVaraibles)));
        tempExplanatoryVaraiblesArray = explanatoryVaraiblesArray;
      }

      if (data[i][25]) {
        equation = data[i][25];

        if(explanatoryVaraiblesArray=[]){
          explanatoryVaraiblesArray = tempExplanatoryVaraiblesArray
        }else{
          tempExplanatoryVaraiblesArray = [];
        }

        this.getRegressionRegions(studyArea);

        this.equationData[counter] = {
          region: {
            name: studyArea
          },
          statisticGroupID: this.getStatGroupID(statisticGroup),
          statisticGroupName:this.getStatGroupName(statisticGroup),
          regressionRegions: [{
            ID: this.getRegRegionID(regressionRegion),
            code: this.getRegRegionCode(regressionRegion),
            parameters: explanatoryVaraiblesArray,
            regressions: [{
              ID: regressionVariable,
              code: null,
              errors: [],
              unit: {
                id:unitType
              },
              equation: equation,
              equivalentYears: null,
              predictionInterval: null,
              expected:null
            }]
          }]
         }
        counter++;
        explanatoryVaraiblesArray=[];
      }
    }
    console.log(this.equationData)
  }

  public getStatGroupID(statisticGroup) {
    return this.statisticGroups.find(sg => sg.code == statisticGroup).id;
  }
  public getStatGroupName(statisticGroup) {
    return this.statisticGroups.find(sg => sg.code == statisticGroup).name;
  }
  public getRegressionRegions(region){
    const regionID = this.regions.find(r => r.name == region).id;
    this._settingsservice.getEntities(this.configSettings.nssBaseURL + 'regressionregions?regions='+regionID).subscribe(res => {
      this.regressionRegions = res;
      console.log(this.regressionRegions)
    });
  }
  public getRegRegionID(regressionRegion) {
    console.log(this.regressionRegions)
    console.log(regressionRegion)
    return this.regressionRegions.find(rr => rr.name == regressionRegion).id;
  }
  public getRegRegionCode(regressionRegion) {
    console.log(this.regressionRegions)
    return this.regressionRegions.find(rr => rr.name == regressionRegion).code;
  }
  public submitRecords(){
    console.log('Submit')
  }
}
