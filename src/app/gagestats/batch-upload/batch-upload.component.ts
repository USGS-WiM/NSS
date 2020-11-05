import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'app/settings/settings.service';
import { ConfigService } from 'app/config.service';
import { ToasterService } from 'angular2-toaster';
import { Config } from 'app/shared/interfaces/config';
import * as XLSX from 'xlsx'
import { skip } from 'rxjs/operators';

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
  public stationChars;
  public statChars;
  public charChars;
  public headers;
  public selectedChars;
  public tableData;

  constructor(private _nssService: NSSService, private _modalService: NgbModal, private _fb: FormBuilder,
    private _settingsService: SettingsService, private _configService: ConfigService, private _toasterService: ToasterService) {

    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    this.modalSubscription = this._nssService.showBatchUploadModal.subscribe((show: boolean) => {
      if (show) { this.showModal(); }
    });
    this.modalElement = this.batchUploadModal;
    this.stationChars = ["Code", "Agency", "Name", "Station Type", "Latitude", "Longitude", "IsRegulated"];
    this.statChars = ["statisticGroupTypeID", "regressionTypeID", "stationID", "value", "unitTypeID", "comments", "isPreferred", "yearsofRecord"];
    this.charChars = ["stationID", "variableTypeID", "unitTypeID", "value", "comments"];
}

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
        const wsname: string = wb.SheetNames[0];                     // Select first worksheet
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
    //console.log(this.tableData);
    this.selectedChars;
    var stations;
    this.tableData.forEach(row => { // Loop through the rows of the table
        if (row == this.tableData[0]) {
            return;
        } else {    
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
            const location = {type: 'Point', coordinates: [ stationObj.Latitude, stationObj.Longitude]};  // Add location item
            delete stationObj.Latitude;  // Delete old location items
            delete stationObj.Longitude;
            stationObj = {...stationObj, 'Location': location};
            //console.log(stationObj);
            if (stations == null) {  // Group station objects into an array
                stations = [stationObj];
            } else {
                stations = [...stations, stationObj ];
            }  
        }  
    });    
    console.log(stations)
  }

  public createTable = function(data){
    this.headers = data[0]
    //delete data[0]
    this.tableData = data 
    console.log(this.tableData)

    
  }

}