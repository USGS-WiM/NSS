import { Component, OnInit, ViewChild, } from '@angular/core';
//import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  public stationChars = {"Agency": "agencyID", "Code": "code", "IsRegulated": "isRegulated", "Latitude": "latitude", "Longitude": "longitude", "Name": "name", "Region": "regionID", "Station Type": "stationTypeID"};
  public statChars = {"Stat Group Type":"statisticGroupTypeID", "Regression Type":"regressionTypeID", "Station ID":"stationID", "Value":"value", "Units":"unitTypeID", "Comments":"comments", "Preferred?":"isPreferred", "Years of Record":"yearsofRecord", "Start Date":"startDate", "End Date":"endDate", "Remarks": 'remarks'};
  public charChars = ["stationID", "variableTypeID", "unitTypeID", "value", "comments"];
  public headers;
  public selectedChars = [];
  public placeholder = '';
  public tableData;
  public agencies: Array<Agency>;
  public regions: Array<Region>;
  public stationTypes: Array<StationType>;
  public statisticGroupType: Array<Statisticgroup>;
  public regressionType: Array<Regressiontype>;
  public unitType: Array<Unittype>;


  constructor(private _nssService: NSSService, private _modalService: NgbModal, //private _fb: FormBuilder,
    private _settingsService: SettingsService, private _configService: ConfigService, private _toasterService: ToasterService) {

    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    this.modalSubscription = this._nssService.showBatchUploadModal.subscribe((show: boolean) => {
      if (show) { this.showModal(); }
    });
    this.modalElement = this.batchUploadModal;
    // subscribe to all agencies
    this._nssService.agencies.subscribe((agencies: Array<Agency>) => {
      this.agencies = agencies;
    });
    // subscribe to all station types
    this._nssService.stationTypes.subscribe((stationtypes: Array<StationType>) => {
      this.stationTypes = stationtypes;
    });
    this._settingsService.getEntitiesGageStats(this.configSettings.regionURL).subscribe((regions: Array<Region>) => {
      this.regions = regions;
    });
    this._nssService.statisticGroups.subscribe((statgroups: Array<Statisticgroup>) => {
      this.statisticGroupType = statgroups;
    });
    this._nssService.regressionTypes.subscribe((regtypes: Array<Regressiontype>) => {
      this.regressionType = regtypes;
    });
    this._nssService.getUnitTypes((units: Array<Unittype>) => {
      this.unitType = units;
    })
}
//******* End OnInit  

  public showModal(): void {
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg', windowClass: 'modal-xl' });
  }

  public selectFile(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) throw new Error('Cannot select multiple files.');
    const reader: FileReader = new FileReader();
    reader.onload = (e:any) => {
        const bstr: string = e.target.result;                         
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary'}); // Read WorkBook
        const wsname: string = wb.SheetNames[1];                     // Select first worksheet, CHANGE NUMBER TO CHANGE SHEET
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];                // Get worksheet with that name
        //console.log(ws);
        this.data = (XLSX.utils.sheet_to_json(ws, {header : 1}));    // Convert data to json
        //console.log(this.data);
        
        this.createTable(this.data);
    };
    reader.readAsBinaryString(target.files[0]); 
    this.tableDisplay = true;
  }

  public submitStations() {
    var stations;
    this.tableData.forEach(row => { // Loop through the rows of the table
      if (row == this.tableData[0]) {
          return;
      } 
      else {    
          var i = 0;
          var station;
          row.forEach(x => {  // Loop thru the cells of each row
              const item = '"' + this.tableData[0][i] + '": "' + x + '"'; // Assign the headers as the keys, the values as values
              if (i == 0){
                  station = item;
                  i ++;
              } else {
                  station = station + ', ' + item;
                  i ++;
              }
          })
          var stationObj = JSON.parse('{' + station + '}');  // Parse strings into JSON objects
          const location = {type: 'Point', coordinates: [ parseFloat(stationObj.longitude), parseFloat(stationObj.latitude) ]};  // Add location item
          delete stationObj.latitude;  // Delete old location items
          delete stationObj.longitude;
          delete stationObj.isRegulated;
          stationObj = {...stationObj, 'location': location};
          if (stationObj.agencyID) {
            var aID = this.getAgencyID(stationObj.agencyID);
            stationObj.agencyID = aID;
          }
          if (stationObj.stationTypeID) {
            var sID = this.getStationTypeID(stationObj.stationTypeID);
            stationObj.stationTypeID = sID;
          }
          if (stationObj.regionID) {
            var rID  = this.getRegionID(stationObj.regionID);
            stationObj.regionID = rID;
          }
          if (stations == null) {  // Group station objects into an array
              stations = [stationObj];
          } 
          else {
              stations = [...stations, stationObj ];
          }  
      }  
    });    
    console.log(stations)
    this._settingsService.postEntityGageStats(stations, "stations/Batch")
      .subscribe((response:any) =>{
        if(!response.headers){
          this._toasterService.pop('info', 'Info', 'Items Added');
        } else {
          this._settingsService.outputWimMessages(response);
        }
      });
  }

  public submitStats() {
    this.selectedChars;
    var stats;
    this.tableData.forEach(row => { // Loop through the rows of the table
      if (row == this.tableData[0]) {
          return;
      } 
      else {    
          var i = 0;
          var stat;
          row.forEach(x => {  // Loop thru the cells of each row
            if (x == null || undefined) {
              return;
            }  
            else {const item = '"' + this.tableData[0][i] + '": "' + x + '"'; // Assign the headers as the keys, the values as values
                if(this.tableData[0][i] == null) {
                  return
                }
                else { if (i == 0){
                      stat = item;
                      i ++;
                  } else {
                      stat = stat + ', ' + item;
                      i ++;
                  }
                }  
            }   
          })
          console.log(stat);
          if (stat == undefined) {
            return
          } 
          else { 
            var statObj = JSON.parse('{' + stat + '}');  // Parse strings into JSON objects
            statObj.comments = 'Statistic Date Range ' + statObj.startDate + ' - ' + statObj.endDate + '. ' + statObj.remarks;
            delete(statObj.remarks);
            delete(statObj.startDate);
            delete(statObj.endDate);
            if(statObj.statisticGroupTypeID) {
              var sID = this.getStatGroupType(statObj.statisticGroupTypeID);
              statObj.statisticGroupTypeID = sID;
            };
            if(statObj.regressionTypeID) {
              var rID = this.getRegressionType(statObj.regressionTypeID);
              statObj.regressionTypeID = rID;
            };
            if(statObj.unitTypeID) {
              var uID = this.getUnitType(statObj.unitTypeID);
              statObj.unitTypeID = uID;
            }

            // stationObj = {...stationObj, 'location': location};
            // if (stationObj.agencyID) {
            //   var aID = this.getAgencyID(stationObj.agencyID);
            //   stationObj.agencyID = aID;
            // }
            // if (stationObj.stationTypeID) {
            //   var sID = this.getStationTypeID(stationObj.stationTypeID);
            //   stationObj.stationTypeID = sID;
            // }
            // if (stationObj.regionID) {
            //   var rID  = this.getRegionID(stationObj.regionID);
            //   stationObj.regionID = rID;
            // }
            if (stats == null) {  // Group station objects into an array
                stats = [statObj];
            } 
            else {
                stats = [...stats, statObj ];
            } 
          }
      }  
    });    
    console.log(stats)
    // this._settingsService.postEntityGageStats(stations, "stations/Batch")
    //   .subscribe((response:any) =>{
    //     if(!response.headers){
    //       this._toasterService.pop('info', 'Info', 'Items Added');
    //     } else {
    //       this._settingsService.outputWimMessages(response);
    //     }
    //   });
  }

  public createTable(data){
    this.headers = JSON.parse(JSON.stringify(data[0]));  // copy the first row of the excel sheet as a list of headers
    this.tableData = JSON.parse(JSON.stringify(data));   // copy the data from the excel sheet to display and change
    // FIX THIS!!!!!!!!
    //var x = y;
    //var emptyCells = this.tableData[0].length * x;
    //this.tableData[0] = ['','','','','','','','','','','','','','','',];
    //console.log(this.tableData);
  }

  public clearTable() {
    delete(this.data);
    delete(this.tableData);
    delete(this.headers);
  }

  public getKeys(obj) {
    return Object.keys(obj);
  }

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

  public getUnitType(abbreviation) {
    if(this.unitType) {
      return (this.unitType.find( u => u.abbreviation === abbreviation).id)
    }
  }

}