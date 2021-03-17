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
import { HttpParams } from '@angular/common/http';

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
  public agencies: Array<Agency>;
  public regions: Array<Region>;
  public stationTypes: Array<StationType>;
  public statisticGroupTypes: Array<Statisticgroup>;
  public regressionTypes: Array<Regressiontype>;
  public unitTypes: Array<Unittype>;
  public variableTypes: Array<Variabletype>;
  public stationChars = [ {'id': 'code', 'name': 'Station Code', 'disabled': false, 'type': null, 'required': true},
                          {'id': 'agencyID', 'name': 'Agency', 'disabled': false, 'type': 'this.agencies', 'required': true},                            
                          {'id': 'name', 'name': 'Name', 'disabled': false, 'type': null, 'required': true}, 
                          {'id': 'stationTypeID', 'name': 'Station Type', 'disabled': false, 'type': 'stationTypes', 'required': true},
                          {'id': 'latitude', 'name': 'Latitude', 'disabled': false, 'type': null, 'required': true}, 
                          {'id': 'longitude', 'name': 'Longitude', 'disabled': false, 'type': null, 'required': true}, 
                          {'id': 'isRegulated', 'name': 'Regulated?', 'disabled': false, 'type': null, 'required': true},
                          {'id': 'regionID', 'name': 'Region', 'disabled': false, 'type': 'regions', 'required': true}];

  public statChars = [  {'id': 'code', 'name': 'Station Code', 'disabled': false, 'type': null, 'required': true},
                        {'id': 'regressionTypeID', 'name': 'Regression Type', 'disabled': false, 'type': 'regressionTypes', 'required': true},
                        {'id': 'value', 'name': 'Value', 'disabled': false, 'type': null, 'required': true},
                        {'id': 'unitTypeID', 'name': 'Units', 'disabled': false, 'type': 'unitTypes', 'required': true},
                        {'id': 'statisticGroupTypeID', 'name': 'Stat Group Type', 'disabled': false, 'type': 'statisticGroupTypes', 'required': true},
                        {'id': 'isPreferred', 'name': 'Preferred?', 'disabled': false, 'type': null, 'required': true},
                        {'id': 'yearsofRecord', 'name': 'Years of Record', 'disabled': false, 'type': null, 'required': false},
                        {'id': 'startDate', 'name': 'Start Date', 'disabled': false, 'type': null, 'required': false},
                        {'id': 'endDate', 'name': 'End Date', 'disabled': false, 'type': null, 'required': false},                        
                        {'id': 'remarks', 'name': 'Remarks', 'disabled': false, 'type': null, 'required': false},
                        {'id': 'PC', 'name': 'Percent Correct', 'disabled': false, 'type': null, 'required': false},
                        {'id': 'SE', 'name': 'Standard Error', 'disabled': false, 'type': null, 'required': false},
                        {'id': 'SEp', 'name': 'Standard Error of Prediction', 'disabled': false, 'type': null, 'required': false}, 
                        {'id': 'variance', 'name': 'Variance', 'disabled': false, 'type': null, 'required': false},
                        {'id': 'lowerConfidenceInterval', 'name': 'Lower Confidence Interval', 'disabled': false, 'type': null, 'required': false}, 
                        {'id': 'upperConfidenceInterval', 'name': 'Upper Confidence Interval', 'disabled': false, 'type': null, 'required': false},
                        {'id': 'comments', 'name': 'Comments', 'disabled': false, 'type': null, 'required': false}];

  public charChars = [  {'id': "code", 'name': "Station Code", 'disabled': false, 'type': null, 'required': true},
                        {'id': "variableTypeID", 'name': "Variable Type", 'disabled': false, 'type': 'variableTypes', 'required': true},                        
                        {'id': "value", 'name': "Value", 'disabled': false, 'type': null, 'required': true},
                        {'id': "unitTypeID", 'name': "Units", 'disabled': false, 'type': 'unitTypes', 'required': true},
                        {'id': "comments", 'name': "Comments", 'disabled': false, 'type': null, 'required': false} ];
  public headers;
  public fullHeaders = true;
  public tableData;
  public wb: XLSX.WorkBook
  public sheetNamesButtons: boolean;
  public wsname;
  public dropdownOptions;
  public selectedCitation;
  public records;
  public url;
  public errorList = [];
  public disableSubmit: boolean = true;
  public selectedParams: HttpParams; 

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
    this._nssService.selectedFilterParams.subscribe((selectedParams: HttpParams) => { 
      this.selectedParams = selectedParams;
    });
  }        //******* End OnInit //////////

  public showModal(): void {
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg', windowClass: 'modal-xl batch-upload-modal' });
  }

  /////////////// Import Excel Data section /////////////////

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
    this.setDropdownOptions();
    this.createTable(this.data);
    this.tableDisplay = true;
    this.sheetNamesButtons = false;
    
  }

  //////////////// Create/Edit Table Section ///////////////////

  public setDropdownOptions() {         // Set dropdown menu options
    if (this.uploadStations) {
      this.dropdownOptions = JSON.parse(JSON.stringify(this.stationChars));
    };
    if (this.uploadChars) {
      this.dropdownOptions = JSON.parse(JSON.stringify(this.charChars));
    };
    if (this.uploadStats) {
      this.dropdownOptions = JSON.parse(JSON.stringify(this.statChars));
    };
  }

  public createTable(data) {
    this.headers = JSON.parse(JSON.stringify(data[0]));  // copy the first row of the excel sheet as a list of headers
    this.tableData = JSON.parse(JSON.stringify(data));   // copy the data from the excel sheet to display and change
    for (var i = 0; i < this.tableData[0].length; i++) { // loop thru first row
      var val = this.dropdownOptions.find(d => d.id.toLowerCase() === this.tableData[0][i].toLowerCase());
      if (val != undefined) {                              // If this tableData value is the same as the dropdownOption
        this.tableData[0][i] = val.id;                     // set the dropdown menu to this value
      }
      else {
        this.tableData[0][i] = null;                       // If not, set the value to null
      }
    }
    for (var x = 1; x < this.tableData.length; x++) {      // Iterate thru the tableData and replace yes/no strings w/ boolean values
      for (var i = 0; i < this.tableData[x].length; i++) {
        this.tableData[x][i] = this.getTrueFalse(this.tableData[x][i]);
      }
    }; 
    this.changeDropdownOptions();
  }

  public clearTable() {
    delete(this.data);
    delete(this.tableData);
    delete(this.headers);
    this.tableDisplay = false; 
    this.sheetNamesButtons = false;
    this.uploadChars = false;
    this.uploadStations = false;
    this.uploadStats = false;
    this.tableEdit = false;
    delete(this.selectedCitation);
    this.errorList = [];
    delete(this.records);
    this.disableSubmit = true;
    delete(this.dropdownOptions);
  }

  public changeDropdownOptions() {
    this.setDropdownOptions();
    this.dropdownOptions.forEach((element, index) => {
      if (this.tableData[0].includes(element.id)) {
        this.dropdownOptions[index].disabled = true;
      }
    });
  }

  public deleteRow(index) {
    this.tableData.splice(index, 1);
  }

  public addRow() {
    var newRecord = [];
    for (var i = 0; i < this.tableData[this.tableData.length - 1].length; i++) {
      if (typeof this.tableData[this.tableData.length - 1][i] === "boolean") {
        newRecord.push(false);
      } else {
        newRecord.push('');
      }
    }
    this.tableData.splice(this.tableData.length, 0, newRecord);
  }

  public deleteColumn(index) {
    this.headers.splice(index, 1);
    for (var i = 0; i < this.tableData.length; i++ ) {
      this.tableData[i].splice(index, 1);
    }
  }

  public clearDropdownMenu(rowIndex, valIndex) {
    this.tableData[rowIndex][valIndex] = null;
    this.disableSubmit = true;
    this.changeDropdownOptions();
  }

////////////////// Create and Submit HTTP POST Request ////////////////////////

  public verifyData() {
    this.changeDropdownOptions();
    delete(this.records);
    this.errorList = [];
    var rowID = 0;
    this.tableData.forEach(row => { // Loop through the rows of the table
      if (row == this.tableData[0]) {  // If this is the header row
        var cellID = 0;
        row.forEach(cell => {     // Loop thru the cells in the header row
            if (cell == undefined) {   // If the cell value is null
              this.errorList.push({'name':this.tableData[0][cellID]}, {rowID, cellID}, {'type': null})   // Add this to the errorlist
              this.fullHeaders = false;
              cellID ++;
          } else {
            cellID++;
          }
        })
        rowID += 1;
      } 
      else {    
          var cellID = 0;
          var record;
          row.forEach(cell => {  // Loop thru the cells of each row
              var item = '"' + this.tableData[0][cellID] + '": "' + cell + '"'; // Assign the headers as the keys, the values as values
              if (cellID == 0) {
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
            recordObj.citationID = this.selectedCitation.id;
          }
          if (this.uploadStations) {                        // If stations are being uploaded...  
            this.url = "stations/Batch";
            if (recordObj.code) {
              var cellIndex = Object.keys(recordObj).indexOf('code');
              this.checkStation(recordObj, rowID, cellIndex);
            }
            if (recordObj.agencyID) {
              var cellIndex = Object.keys(recordObj).indexOf('agencyID');
              recordObj.agencyID = this.getVariableID(this.agencies, recordObj.agencyID, rowID, cellIndex);
            }
            if (recordObj.stationTypeID) {
              var cellIndex = Object.keys(recordObj).indexOf('stationTypeID');
              recordObj.stationTypeID = this.getVariableID(this.stationTypes, recordObj.stationTypeID, rowID, cellIndex);
            }
            if (recordObj.regionID) {
              var cellIndex = Object.keys(recordObj).indexOf('regionID');
              recordObj.regionID = this.getVariableID(this.regions, recordObj.regionID, rowID, cellIndex);
            }
            if (recordObj.isRegulated) {
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
            if (recordObj.statisticGroupTypeID) {
              var cellIndex = Object.keys(recordObj).indexOf('statisticGroupTypeID');
              recordObj.statisticGroupTypeID = this.getVariableID(this.statisticGroupTypes, recordObj.statisticGroupTypeID, rowID, cellIndex);
            };
            if (recordObj.regressionTypeID) {
              var cellIndex = Object.keys(recordObj).indexOf('regressionTypeID');
              recordObj.regressionTypeID = this.getVariableID(this.regressionTypes, recordObj.regressionTypeID, rowID, cellIndex);
            };
            if (recordObj.unitTypeID) {
              var cellIndex = Object.keys(recordObj).indexOf('unitTypeID');
              recordObj.unitTypeID = this.getVariableID(this.unitTypes, recordObj.unitTypeID, rowID, cellIndex);
            }
            if (recordObj.isPreferred) {
              var x = this.getTrueFalse(recordObj.isPreferred);
              recordObj.isPreferred = x;
            }
            if (recordObj.code) {
              var cellIndex = Object.keys(recordObj).indexOf('code');
              this.getStationID(recordObj, rowID, cellIndex);
            }
            if (!recordObj.startDate || !recordObj.endDate) {
              if (recordObj.startDate) {
                recordObj.comments = 'Statistic Start Date: ' + recordObj.startDate + '.';
              }
              if (recordObj.endDate) {
                recordObj.comments = 'Statistic End Date: ' + recordObj.endDate + '.' ;
              }
            }
            if (recordObj.startDate && recordObj.endDate) {
              recordObj.comments = 'Statistic Date Range: ' + recordObj.startDate + ' - ' + recordObj.endDate + '.';
            }
            if (recordObj.remarks === 'null') {
              if (!recordObj.startDate && !recordObj.endDate) { }  // If no comments or remarks, do nothing
              else {
                recordObj.comments = recordObj.comments;
              }
            } 
            if (recordObj.remarks !== 'null') {
              if (!recordObj.startDate && !recordObj.endDate) {
                recordObj.comments = recordObj.remarks;
              } else {
                recordObj.comments = recordObj.comments + ' ' + recordObj.remarks; 
              }
            }
            delete(recordObj.remarks), delete(recordObj.startDate), delete(recordObj.endDate);
            if (recordObj.variance || recordObj.lowerConfidenceInterval || recordObj.upperConfidenceInterval) {
              recordObj.predictionInterval = {
                "variance": recordObj.variance,
		            "lowerConfidenceInterval": recordObj.lowerConfidenceInterval,
		            "upperConfidenceInterval" : recordObj.upperConfidenceInterval
              }
              delete(recordObj.variance), delete(recordObj.lowerConfidenceInterval), delete(recordObj.upperConfidenceInterval)
            }
            if (recordObj.PC || recordObj.SE || recordObj.SEp) {
              recordObj.statisticErrors = [];
                if (recordObj.PC != undefined) { recordObj.statisticErrors.push({"PC": recordObj.PC}) };
                if (recordObj.SE != undefined) { recordObj.statisticErrors.push({"SE": recordObj.SE}) };
                if (recordObj.SEp != undefined) { recordObj.statisticErrors.push({"SEp": recordObj.SEp}) };
              delete(recordObj.PC), delete(recordObj.SE), delete(recordObj.SEp);
            }
          }
          if (this.uploadChars) {                             // If chars are being uploaded... 
            this.url = "characteristics/batch";
            if (recordObj.unitTypeID) {
              var cellIndex = Object.keys(recordObj).indexOf('unitTypeID');
              recordObj.unitTypeID = this.getVariableID(this.unitTypes, recordObj.unitTypeID, rowID, cellIndex);
            }
            if (recordObj.variableTypeID) {
              var cellIndex = Object.keys(recordObj).indexOf('variableTypeID');
              recordObj.variableTypeID = this.getVariableID(this.variableTypes, recordObj.variableTypeID, rowID, cellIndex);
            }
            if (recordObj.code) {
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

    if (this.uploadStations) { 
      this.checkForRequiredColumns(this.stationChars);
    } if (this.uploadStats) { 
      this.checkForRequiredColumns(this.statChars);
    } if (this.uploadChars) {  
      this.checkForRequiredColumns(this.charChars);
    }                           
                                    
    if (this.errorList.length == 0) {
      this.disableSubmit = false;
      this._toasterService.pop('info', 'Info', 'Excellent! No errors were detected. Data is ready for submission.');
    }
    if (this.errorList.length > 0) {
      this.disableSubmit = true;
      this._toasterService.pop('info', 'Info', 'Error! ' + (this.errorList.length/3) + ' errors were detected.');
    }
    console.log('errorlist: ', this.errorList);
  }

  public checkForRequiredColumns(charList) {
    var requiredChars = [];
    if (this.fullHeaders == true) {
      charList.forEach(char => {
        if (char.required == true) {
          requiredChars.push(char.id);
        }
      });
      const arr1 = this.tableData[0].concat().sort();
      const arr2 = requiredChars.concat().sort();
      let missingColumns = (arr2.filter(x => !arr1.includes(x)));
      if (missingColumns.length > 0) {
        this.errorList.push({'name':'missing required columns ' + missingColumns}, {'Header': null}, {'type': null});
        this._toasterService.pop('error', 'Error', 'Missing required Columns' )
      }
    }
  }

public submitRecords() {
  this._settingsService.postEntity(this.records, this.configSettings.gageStatsBaseURL +  this.url)
      .subscribe((response:any) =>{
        if(!response.headers){   // If put request is a success...
          this._toasterService.pop('info', 'Info', 'Success! ' + Object.keys(response).length + ' items were added.');
          this.clearTable();
          this.selectUpload = false;
          delete(this.selectedCitation);
          this._nssService.searchStations(this.selectedParams);
          this._nssService.setRequeryGSFilter(true);
        } error => {     // If put request fails...
          this._settingsService.outputWimMessages(error);
        }
      });
  this.clearTable();
  this._nssService.searchStations(this.selectedParams);
}

//////////////// Get NSS Characteristic IDs //////////////////////

  public getVariableID(listName, value, rowID, cellID) {
    if (listName) {
      if (listName === this.unitTypes) {
        var vt = listName.find( v => v.abbreviation === value);
      }
      if (listName === this.regions) {
        var vt = listName.find( v => v.name === value);
      }
      if (listName != this.unitTypes && listName != this.regions) {
        var vt = listName.find( v => v.code === value);
       }
      if (vt) {
        return vt.id;
      } else {
        this.errorList.push({'name':this.tableData[rowID][cellID]}, {rowID, cellID}, {'type': listName});
      }
    }
  }
  
  /////// Check to see if a Station Code exists/////////
  public getStationID(obj, rowID, cellID) {
    var station;
    this._settingsService.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.stationsURL + '/' + obj.code)
    .subscribe((s: Array<Station>) => {
      station = s;
      return obj.stationID = station.id;
    }, error => {
      this.errorList.push({'name':this.tableData[rowID][cellID]}, {rowID, cellID}, {'type': null});
      if (error.headers) {this._nssService.outputWimMessages(error);
      } else { this._nssService.handleError(error); }
    });
  }

  public checkStation(obj, rowID, cellID) {
    var station;
    this._settingsService.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.stationsURL + '/' + obj.code)
    .subscribe((s: Array<Station>) => {
      station = s;
      if(obj.code == station.code) {
        this.errorList.push({'name':this.tableData[rowID][cellID]}, {rowID, cellID}, {'type': null});
        this._toasterService.pop('info', 'Info', 'Station ' + obj.code + '  already exists.')
      };
    }, error => {
      if(error.status == 400) {
        return
      }
    });
  }

  // Convert true/false strings to boolean
  public getTrueFalse(val) { 
    if (typeof val === 'string') {
      switch (val.toLocaleLowerCase().trim()) {
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
    if (this.errorList.find( e => e.name == x )) { 
      return "yellow";
    }
  }

  public isError(x, y){
    if (this.errorList.find( e => e.rowID == x && e.cellID == y)) {
      return true;
    }
  }

  // public getCharType(name) {
  //   if(name == 'agencyID'){
  //     return this.agencies;
  //   }
  //   if(name == 'regionID'){
  //     return this.regions;
  //   }
  //   if(name == 'stationTypeID'){
  //     return this.stationTypes;
  //   }
  //   if(name == 'statisticGroupTypeID'){
  //     return this.statisticGroupTypes;
  //   }
  //   if(name == 'regressionTypeID'){
  //     return this.regressionTypes;
  //   }
  //   if(name == 'unitTypeID'){
  //     return this.unitTypes;
  //   }
  //   if(name == 'variableTypeID'){
  //     return this.variableTypes;
  //   }
    
  // }

  // public getCharType2(name) {
  //   console.log('char2 input: ', name)
  //   if(name == 'agencyID'){
  //     return "'abbreviation'";
  //   }
  //   if(name == 'regionID'){
  //     return "'name'";
  //   }
  //   if(name == 'stationTypeID'){
  //     return "'code'";
  //   }
  //   if(name == 'statisticGroupTypeID'){
  //     return 'code';
  //   }
  //   if(name == 'regressionTypeID'){
  //     return 'code';
  //   }
  //   if(name == 'unitTypeID'){
  //     return 'abbreviation';
  //   }
  //   if(name == 'variableTypeID'){
  //     return 'code';
  //   }
  // }


  ///////////////////////Citation Modal Section/////////////////////

  public showManageCitationsModal() {
    if (this.selectedCitation) {
      var id = this.selectedCitation.id;
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
