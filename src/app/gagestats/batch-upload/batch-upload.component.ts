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

  public statChars = [  {'id': 'statisticGroupTypeID', 'name': 'Stat Group Type', 'disabled': false},
                        {'id': 'regressionTypeID', 'name': 'Regression Type', 'disabled': false},
                        {'id': 'code', 'name': 'Station Code', 'disabled': false},
                        {'id': 'value', 'name': 'Value', 'disabled': false},
                        {'id': 'unitTypeID', 'name': 'Units', 'disabled': false},
                        {'id': 'comments', 'name': 'Comments', 'disabled': false},
                        {'id': 'isPreferred', 'name': 'Preferred?', 'disabled': false},
                        {'id': 'yearsofRecord', 'name': 'Years of Record', 'disabled': false},
                        {'id': 'startDate', 'name': 'Start Date', 'disabled': false},
                        {'id': 'endDate', 'name': 'End Date', 'disabled': false},
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
  public statisticGroupType: Array<Statisticgroup>;
  public regressionType: Array<Regressiontype>;
  public unitType: Array<Unittype>;
  public variableType: Array<Variabletype>;
  public wb: XLSX.WorkBook
  public sheetNamesButtons: boolean;
  public wsname;
  public dropdownOptions;
  public selectedCitation;
  public station: Array<Station>;


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
      this.statisticGroupType = statgroups;
    });
    this._settingsService.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.regTypeURL).subscribe((regtypes: Array<Regressiontype>) => {
      this.regressionType = regtypes;
    });
    this._settingsService.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.variablesURL).subscribe((vartypes: Array<Variabletype>) => {
      this.variableType = vartypes;
    });
    this._nssService.getUnitTypes().subscribe(res => {
      this.unitType = res;
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

  public submitRecords() {
    console.log('Input data: ', this.tableData)
    var records;
    var url;
    this.tableData.forEach(row => { // Loop through the rows of the table
      if (row == this.tableData[0]) {
          return;
      } 
      else {    
          var i = 0;
          var record;
          row.forEach(cell => {  // Loop thru the cells of each row
              var item = '"' + this.tableData[0][i] + '": "' + cell + '"'; // Assign the headers as the keys, the values as values
              if (i == 0){
                  record = item;
                  i ++;
              } else {
                  record = record + ', ' + item;
                  i ++;
              }
          })
          var recordObj = JSON.parse('{' + record + '}');  // Parse strings into JSON objects
          delete recordObj.null;                           // Delete any columns which were not assigned a header
          if (this.selectedCitation) {                     // Add the citation ID, if there is a citation
            //var cit: 'citationID: ';
            recordObj.citationID = this.selectedCitation.id;
          }
          if(this.uploadStations) {                        // If stations are being uploaded...  
            url = "stations/Batch";
            const location = {type: 'Point', coordinates: [ parseFloat(recordObj.longitude), parseFloat(recordObj.latitude) ]};  // Add location item
            delete recordObj.latitude;  // Delete old location items
            delete recordObj.longitude;
            recordObj = {...recordObj, 'location': location};
            if (recordObj.agencyID) {
              var aID = this.getAgencyID(recordObj.agencyID);
              recordObj.agencyID = aID;
            }
            if (recordObj.stationTypeID) {
              var sID = this.getStationTypeID(recordObj.stationTypeID);
              recordObj.stationTypeID = sID;
            }
            if (recordObj.regionID) {
              var rID  = this.getRegionID(recordObj.regionID);
              recordObj.regionID = rID;
            }
            if(recordObj.isRegulated) {
              var x = this.getTrueFalse(recordObj.isRegulated);
              recordObj.isRegulated = x;
            }
          }
          if (this.uploadStats) {                             // If stats are being uploaded...
            url = "statistics/batch";
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
            if(recordObj.statisticGroupTypeID) {
              var sID = this.getStatGroupType(recordObj.statisticGroupTypeID);
              recordObj.statisticGroupTypeID = sID;
            };
            if(recordObj.regressionTypeID) {
              var rID = this.getRegressionType(recordObj.regressionTypeID);
              recordObj.regressionTypeID = rID;
            };
            if(recordObj.unitTypeID) {
              var uID = this.getUnitType(recordObj.unitTypeID);
              recordObj.unitTypeID = uID;
            }
            if(recordObj.isPreferred) {
              var x = this.getTrueFalse(recordObj.isPreferred);
              recordObj.isPreferred = x;
            }
            if(recordObj.code) {
              var cID = this.getStationID(recordObj);
              recordObj.stationID = cID;
            }
          }
          if (this.uploadChars) {                             // If chars are being uploaded... 
            url = "characteristics/batch";
            if(recordObj.unitTypeID) {
              var uID = this.getUnitType(recordObj.unitTypeID);
              recordObj.unitTypeID = uID;
            }
            if(recordObj.variableTypeID) {
              var vID = this.getVariableType(recordObj.variableTypeID);
              recordObj.variableTypeID = vID;
            }
            if(recordObj.code) {
              this.getStationID(recordObj);
            }
          }
          if (records == null) {                              // Group record objects into an array of records
            records = [recordObj];
          } 
          else {
              records = [...records, recordObj ];
          }  
      }  
    });    
    console.log('Output records: ', records);
    delete(this.selectedCitation);
    this._settingsService.postEntity(records, this.configSettings.gageStatsBaseURL +  url)
      .subscribe((response:any) =>{
        if(!response.headers){
          this.clearTable();
          this._toasterService.pop('info', 'Info', 'Success! Items Added');
        } else {
          this._settingsService.outputWimMessages(response);
        }
      });
  }

//////////////// Get NSS Characteristic IDs //////////////////////

  public getStationTypeID(code) {
    if (this.stationTypes) {
      return (this.stationTypes.find(s => s.code === code).id);
    }
  }

  public getAgencyID(code) {
    if (this.agencies) {
      return (this.agencies.find(a => a.code === code).id);
    }
  }

  public getRegionID(name) {
    if (this.regions) {
      return (this.regions.find(r => r.name === name).id);
    }
  }

  public getStatGroupType(code) {
    if(this.statisticGroupType) {
      return (this.statisticGroupType.find(s => s.code === code).id);
    }
  }

  public getRegressionType(code) {
    if(this.regressionType) {
      return (this.regressionType.find(r => r.code === code).id);
    }
  }

  public getVariableType(code) {
    if(this.variableType) {
      return (this.variableType.find(v => v.code === code).id)
    }
  }

  public getUnitType(abbreviation) {
    if(this.unitType) {
      return (this.unitType.find( u => u.abbreviation === abbreviation).id)
    }
  }

  public getStationID(obj): any {
    this._settingsService.getEntities(this.configSettings.gageStatsBaseURL + this.configSettings.stationsURL + '/' + obj.code).subscribe((s: Array<Station>) => {
      this.station = s;
      return obj.stationID = this.station.id;
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