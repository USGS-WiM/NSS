import { Component, OnInit, ViewChild } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'app/settings/settings.service';
import { ConfigService } from 'app/config.service';
import { ToasterService } from 'angular2-toaster';
import { Config } from 'app/shared/interfaces/config';
import * as XLSX from 'xlsx';
import { Agency } from 'app/shared/interfaces/agencies';
import { StationType } from 'app/shared/interfaces/stationtypes';
import { Region } from 'app/shared/interfaces/region';
import { Statisticgroup } from 'app/shared/interfaces/statisticgroup';
import { Regressiontype } from 'app/shared/interfaces/regressiontype';
import { Unittype } from 'app/shared/interfaces/unitType';
import { Variabletype } from 'app/shared/interfaces/variableType'
import { ManageCitation } from 'app/shared/interfaces/managecitations';
import { Station } from 'app/shared/interfaces/station';
import { findIndex } from 'rxjs-compat/operator/findIndex';
//import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'batchUploadModal',
  templateUrl: './batch-upload.component.html',
  styleUrls: ['./batch-upload.component.scss']
})
export class BatchUploadModal implements OnInit {
  @ViewChild('batchUpload', {static: true}) public batchUploadModal;
  private configSettings: Config;
  private modalElement: any;
  public modalSubscription: any;
  public modalRef;
  public selectUpload: boolean = false;
  public uploadStations: boolean = false;
  public uploadStats: boolean = false;
  public uploadChars: boolean = false;
  public tableDisplay: boolean = false;
  public tableEdit: boolean = false;
  public data: [][];
  public stationChars = [ {'id': 'agencyID', 'name': 'Agency', 'disabled': false}, 
                          {'id': 'code', 'name': 'Station Code', 'disabled': false}, 
                          {'id': 'name', 'name': 'Name', 'disabled': false}, 
                          {'id': 'isRegulated', 'name': 'Regulated?', 'disabled': false}, 
                          {'id': 'latitude', 'name': 'Latitude', 'disabled': false}, 
                          {'id': 'longitude', 'name': 'Longitude', 'disabled': false}, 
                          {'id': 'regionID', 'name': 'Region', 'disabled': false}, 
                          {'id': 'stationTypeID', 'name': 'Station Type', 'disabled': false}];

  public statChars = [  {'id': 'code', 'name': 'Station Code', 'disabled': false},
                        {'id': 'regressionTypeID', 'name': 'Regression Type', 'disabled': false},
                        {'id': 'value', 'name': 'Value', 'disabled': false},
                        {'id': 'unitTypeID', 'name': 'Units', 'disabled': false},
                        {'id': 'statisticGroupTypeID', 'name': 'Stat Group Type', 'disabled': false},
                        {'id': 'isPreferred', 'name': 'Preferred?', 'disabled': false},
                        {'id': 'yearsofRecord', 'name': 'Years of Record', 'disabled': false},
                        {'id': 'startDate', 'name': 'Start Date', 'disabled': false},
                        {'id': 'endDate', 'name': 'End Date', 'disabled': false},
                        {'id': 'comments', 'name': 'Comments', 'disabled': false},
                        {'id': 'remarks', 'name': 'Remarks', 'disabled': false},
                        {'id': 'variance', 'name': 'Variance', 'disabled': false},
                        {'id': 'lowerConfidenceInterval', 'name': 'Lower Confidence Interval', 'disabled': false}, 
                        {'id': 'upperConfidenceInterval', 'name': 'Upper Confidence Interval', 'disabled': false}];

  public charChars = [  {'id': "code", 'name': "Station Code", 'disabled': false },
                        {'id': "variableTypeID", 'name': "Variable Type", 'disabled': false },
                        {'id': "unitTypeID", 'name': "Units", 'disabled': false },
                        {'id': "value", 'name': "Value", 'disabled': false },
                        {'id': "comments", 'name': "Comments", 'disabled': false } ];
  public headers;
  public tableData;
  public agencies: Array<Agency>;
  public regions: Array<Region>;
  public stationTypes: Array<StationType>;
  public statisticGroupTypes: Array<Statisticgroup>;
  public regressionTypes: Array<Regressiontype>;
  public unitTypes: Array<Unittype>;
  public variableTypes: Array<Variabletype>;
  public wb: XLSX.WorkBook
  public sheetNamesButtons: boolean;
  public wsname;
  public dropdownOptions;
  public selectedCitation;
  public records;
  public url;
  public errorList = [];
  public disableSumbit: boolean = true;


  constructor(private _nssService: NSSService, private _modalService: NgbModal, //private _fb: FormBuilder,
    private _settingsService: SettingsService, private _configService: ConfigService, private _toasterService: ToasterService) {

    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    this.modalSubscription = this._nssService.showBatchUploadModal.subscribe((show: boolean) => {
      if (show) { this.showModal(); }
    });
    this.modalElement = this.batchUploadModal;
    // subscribe to all agencies, station types, regions, stat groups, regression types, variable types, units, selected citation...
    this._settingsService.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.agenciesURL).subscribe((agencies: Array<Agency>) => {
      this.agencies = agencies;
    });
    this._settingsService.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.stationTypeURL).subscribe((stationtypes: Array<StationType>) => {
      this.stationTypes = stationtypes;
    });
    this._settingsService.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.regionURL).subscribe((regions: Array<Region>) => {
      this.regions = regions;
    });
    this._settingsService.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.statisticGrpURL).subscribe((statgroups: Array<Statisticgroup>) => {
      this.statisticGroupTypes = statgroups;
    });
    this._settingsService.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.regTypeURL).subscribe((regtypes: Array<Regressiontype>) => {
      this.regressionTypes = regtypes;
    });
    this._settingsService.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.variablesURL).subscribe((vartypes: Array<Variabletype>) => {
      this.variableTypes = vartypes;
    });
    this._nssService.getUnitTypes().subscribe(res => {
      this.unitTypes = res;
    });
    this._nssService.selectedCitation.subscribe(c => {
      this.selectedCitation = c;
    });
}                 //******* End OnInit  

  public showModal(): void {
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg', windowClass: 'modal-xl' });
  }

/////////////// Import Excel Data section /////////////////

  public selectFile(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) throw new Error('Cannot select multiple files.');
    const reader: FileReader = new FileReader();
    reader.onload = (e:any) => {
        const bstr: string = e.target.result;                          
        this.wb = XLSX.read(bstr, { type: 'binary'});          // Read WorkBook
        this.sheetNamesButtons = true;                         // Show buttons to select worksheet from workbook
        //const wsname: string = wb.SheetNames[2];                     // Select first worksheet, CHANGE NUMBER TO CHANGE SHEET
        //const ws: XLSX.WorkSheet = wb.Sheets[wsname];                // Get worksheet with that name
    };
    reader.readAsBinaryString(target.files[0]); 
  }

  public selectSheet(sheetName) {
    const ws: XLSX.WorkSheet = this.wb.Sheets[sheetName];
    this.data = (XLSX.utils.sheet_to_json(ws, {header : 1}));        // Convert data to json
    console.log(this.data, typeof(this.data))
    
    this.createTable(this.data);
    this.tableDisplay = true;
    this.sheetNamesButtons = false;
    this.setDropdownOptions();
  }

  //////////////// Create/Edit Table Section ///////////////////

  public setDropdownOptions() {         // Set dropdown menu options
    if(this.uploadStations) {
      this.dropdownOptions = JSON.parse(JSON.stringify(this.stationChars));
    };
    if(this.uploadChars) {
      this.dropdownOptions = JSON.parse(JSON.stringify(this.charChars));
    };
    if(this.uploadStats) {
      this.dropdownOptions = JSON.parse(JSON.stringify(this.statChars));
    };
  }

  public createTable(data){
    this.headers = JSON.parse(JSON.stringify(data[0]));  // copy the first row of the excel sheet as a list of headers
    this.tableData = JSON.parse(JSON.stringify(data));   // copy the data from the excel sheet to display and change
    for (var i = 0; i < this.tableData[0].length; i++) {
      this.tableData[0][i] = null                        // Delete header values from first row
    }
    for (var x = 1; x < this.tableData.length; x++){    // Iterate thru the tableData and replace yes/no strings w/ boolean values
      for(var i = 0; i < this.tableData[x].length; i++) {
        this.tableData[x][i] = this.getTrueFalse(this.tableData[x][i]);
      }
    }; 
  }

  public clearTable() {
    delete(this.data);
    delete(this.tableData);
    delete(this.headers);
    this.tableDisplay = false; 
    this.sheetNamesButtons = false
    this.uploadChars = false;
    this.uploadStations = false;
    this.uploadStats = false;
    this.tableEdit = false;
    delete(this.selectedCitation);
    this.errorList = [];
    delete(this.records);
  }

  public changeDropdownOptions() {
    this.setDropdownOptions();
    this.dropdownOptions.forEach((element, index) => {
      if ( this.tableData[0].includes(element.id) ) {
        this.dropdownOptions[index].disabled = true;
      }
    });
}

  public deleteRow(index) {
    this.tableData.splice(index, 1);
  }

  public deleteColumn(index) {
    this.headers.splice(index, 1)
    for(var i = 0; i < this.tableData.length; i++ ) {
      this.tableData[i].splice(index, 1)
    }
  }

////////////////// Create and Submit HTTP POST Request ////////////////////////

  public checkData() {
    console.log('Input data: ', this.tableData)
    delete(this.records);
    this.errorList = [];
    //var records;
    var rowID = 0;
    this.tableData.forEach(row => { // Loop through the rows of the table
    //for (var row of this.tableData) {
      if (row == this.tableData[0]) {
        rowID += 1;
        return;
      } 
      else {    
          var cellID = 0;
          var record;
          row.forEach(cell => {  // Loop thru the cells of each row
              var item = '"' + this.tableData[0][cellID] + '": "' + cell + '"'; // Assign the headers as the keys, the values as values
              if (cellID == 0){
                  record = item;
                  cellID ++;
              } else {
                  record = record + ', ' + item;
                  cellID ++;
              }
          })
          var recordObj = JSON.parse('{' + record + '}');  // Parse strings into JSON objects
          delete recordObj.null;                           // Delete any columns which were not assigned a header
          if (this.selectedCitation) {                     // Add the citation ID, if there is a citation
            //var cit: 'citationID: ';
            recordObj.citationID = this.selectedCitation.id;
          }
          if(this.uploadStations) {                        // If stations are being uploaded...  
            this.url = "stations/Batch";
            if (recordObj.agencyID) {
              var cellIndex = Object.keys(recordObj).indexOf('agencyID');
              var aID = this.getAgencyID(recordObj.agencyID, rowID, cellIndex);
              recordObj.agencyID = aID;
            }
            if (recordObj.stationTypeID) {
              var cellIndex = Object.keys(recordObj).indexOf('stationTypeID');
              var sID = this.getStationTypeID(recordObj.stationTypeID, rowID, cellIndex);
              recordObj.stationTypeID = sID;
            }
            if (recordObj.regionID) {
              var cellIndex = Object.keys(recordObj).indexOf('regionID');
              var rID  = this.getRegionID(recordObj.regionID, rowID, cellIndex);
              recordObj.regionID = rID;
            }
            if(recordObj.isRegulated) {
              var x = this.getTrueFalse(recordObj.isRegulated);
              recordObj.isRegulated = x;
            }
            const location = {type: 'Point', coordinates: [ parseFloat(recordObj.longitude), parseFloat(recordObj.latitude) ]};  // Add location item
            delete recordObj.latitude;  // Delete old location items
            delete recordObj.longitude;
            recordObj = {...recordObj, 'location': location};
          }
          if (this.uploadStats) {                             // If stats are being uploaded...
            this.url = "statistics/batch";
            if(recordObj.statisticGroupTypeID) {
              var cellIndex = Object.keys(recordObj).indexOf('statisticGroupTypeID');
              var sID = this.getStatGroupType(recordObj.statisticGroupTypeID, rowID, cellIndex);
              recordObj.statisticGroupTypeID = sID;
            };
            if(recordObj.regressionTypeID) {
              var cellIndex = Object.keys(recordObj).indexOf('regressionTypeID');
              var rID = this.getRegressionType(recordObj.regressionTypeID, rowID, cellIndex);
              recordObj.regressionTypeID = rID;
            };
            if(recordObj.unitTypeID) {
              var cellIndex = Object.keys(recordObj).indexOf('unitTypeID');
              var uID = this.getUnitType(recordObj.unitTypeID, rowID, cellIndex);
              recordObj.unitTypeID = uID;
            }
            if(recordObj.isPreferred) {
              var x = this.getTrueFalse(recordObj.isPreferred);
              recordObj.isPreferred = x;
            }
            if(recordObj.code) {
              var cellIndex = Object.keys(recordObj).indexOf('code');
              this.getStationID(recordObj, rowID, cellIndex);
            }
            recordObj.comments = 'Statistic Date Range: ' + recordObj.startDate + ' - ' + recordObj.endDate + '.';
            if(recordObj.remarks != 'undefined') {
              recordObj.comments = recordObj.comments + ' ' + recordObj.remarks; 
            }
            delete(recordObj.remarks);
            delete(recordObj.startDate);
            delete(recordObj.endDate);
            if(recordObj.variance || recordObj.lowerConfidenceInterval || recordObj.upperConfidenceInterval) {
              recordObj.predictionInterval = {
                "variance": recordObj.variance,
		            "lowerConfidenceInterval": recordObj.lowerConfidenceInterval,
		            "upperConfidenceInterval" : recordObj.upperConfidenceInterval
              }
            }
          }
          if (this.uploadChars) {                             // If chars are being uploaded... 
            this.url = "characteristics/batch";
            if(recordObj.unitTypeID) {
              var cellIndex = Object.keys(recordObj).indexOf('unitTypeID');
              var uID = this.getUnitType(recordObj.unitTypeID, rowID, cellIndex);
              //var uID = this.getVariable(this.unitTypes, recordObj.unitTypeID, 'vt.id', rowID, cellID);
              recordObj.unitTypeID = uID;
            }
            if(recordObj.variableTypeID) {
              var cellIndex = Object.keys(recordObj).indexOf('variableTypeID');
              var vID = this.getVariableType(recordObj.variableTypeID, rowID, cellIndex);
              recordObj.variableTypeID = vID;
            }
            if(recordObj.code) {
              var cellIndex = Object.keys(recordObj).indexOf('code');
              this.getStationID(recordObj, rowID, cellIndex);
            }
          }
          rowID += 1;
          if (this.records == null) {                              // Group record objects into an array of records
            this.records = [recordObj];
          } 
          else {
              this.records = [...this.records, recordObj ];
          }  
      }  
  });    
    console.log('Output records: ', this.records, 'number of records: ', this.records.length);
    if(this.errorList.length == 0) {
      this.disableSumbit = false;
    }
    if(this.errorList.length > 0) {
      this.disableSumbit = true;
    }
  }

public submitRecords() {
  console.log('SUbmitted records: ', this.records, 'number of records: ', this.records.length);
  // this._settingsService.postEntity(this.records, this.configSettings.gageStatsBaseURL +  this.url)
  //     .subscribe((response:any) =>{
  //       if(!response.headers){
  //         this.clearTable();
  //         this.selectUpload = false;
  //         delete(this.selectedCitation);
  //         this._toasterService.pop('info', 'Info', 'Success! ' + this.records.length + ' items were added.');
  //       } else {
  //         this._settingsService.outputWimMessages(response);
  //       }
  //     });
}

//////////////// Get NSS Characteristic IDs //////////////////////

  public getStationTypeID(code, rowID, cellID) {
    if (this.stationTypes) {;
      var st = this.stationTypes.find(s => s.code === code)
      if (st) {
        return st.id;
      } else {
        this.errorList.push(this.tableData[rowID][cellID]);
      }
    }
  }

  public getAgencyID(code, rowID, cellID) {
    if (this.agencies) {
      var a = this.agencies.find(a => a.code === code);
      if (a) {
        return a.id;
      } else {
        this.errorList.push(this.tableData[rowID][cellID]);
      }
    }
  }

  public getRegionID(name, rowID, cellID) {
    if (this.regions) {
      var r = this.regions.find(r => r.name === name);
      if (r) {
        return r.id;
      } else {
        this.errorList.push(this.tableData[rowID][cellID]);
      }
    }
  }

  public getStatGroupType(code, rowID, cellID) {
    if(this.statisticGroupTypes) {
      var sgt = this.statisticGroupTypes.find(s => s.code === code);
      if (sgt) {
        return sgt.id
      } else {
        this.errorList.push(this.tableData[rowID][cellID]);
      }
    }
  }

  public getRegressionType(code, rowID, cellID) {
    if(this.regressionTypes) {
      var rt = this.regressionTypes.find(r => r.code === code);
      if (rt) {
        return rt.id;
      } else {
        this.errorList.push(this.tableData[rowID][cellID]);
      }
    }
  }

  public getVariableType(code, rowID, cellID) {
    if(this.variableTypes) {
      var vt = this.variableTypes.find(v => v.code === code);
      if(vt) {  
      return vt.id;
      } else {
        this.errorList.push(this.tableData[rowID][cellID]);
      }
    }
  }

  public getUnitType(abbreviation, rowID, cellID) {
    if(this.unitTypes) {
      var ut = this.unitTypes.find( u => u.abbreviation === abbreviation);
      if(ut) {
      return ut.id;
      } else {
        this.errorList.push(this.tableData[rowID][cellID]);
      }
    }
  }
// A project for another day

  // public getVariable(listName, value, returnValue, rowID, cellID) {
  //   var i = cellID - 1;
  //   var code = value.replace(/"/g,"");
  //   var output = returnValue.replace(/"/g,"");
  //   if(listName) {
  //     var vt = listName.find( u => u.code === code)
  //     if(vt) {
  //     return output;
  //     } else {
  //       this.errorList.push(this.tableData[rowID][i]);
  //     }
  //   }
  // }
           // This doesn't work yet....
  public getStationID(obj, rowID, cellID) {
    var station;
    this._settingsService.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.stationsURL + '/' + obj.code)
    .subscribe((s: Array<Station>) => {
      station = s;
      return obj.stationID = station.id;
    }, error => {
      this.errorList.push(this.tableData[rowID][cellID]);
      if (error.headers) {this._nssService.outputWimMessages(error);
      } else { this._nssService.handleError(error); }
    });
    
  }


  public getTrueFalse(val) { 
    if (typeof val === 'string') {
      switch(val.toLocaleLowerCase().trim()){
        case "y": case "yes": case "true": case "t": return true;
        case "n": case "no": case "false": case "f": return false;
        default: return val;
      }
    } else return val;
  }

  public getType(x) {
    return typeof x;
  }

  public setStyle(x) {
    if(this.errorList.find( e => e == x)) { 
      return "yellow"
    }
  }
  ///////////////////////Citation Modal Section/////////////////////

  public showManageCitationsModal() {
    if(this.selectedCitation) {
      var id = this.selectedCitation.id
    }
    const addManageCitationForm: ManageCitation = {
        show: true,
        addCitation: true,
        inGagePage: true,
        selectCitation: id
      } 
    this._nssService.setManageCitationsModal(addManageCitationForm);
  }

}