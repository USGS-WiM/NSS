import { Component, OnInit, ViewChild } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster';
import * as XLSX from 'xlsx';

@Component({
  selector: 'batchUploadModalNSS',
  templateUrl: './batchupload.component.html',
  styleUrls: ['./batchupload.component.scss']
})
export class BatchuploadComponentNSS implements OnInit {
  @ViewChild('batchUploadNSS', {static: true}) public batchUploadModalNSS;

  public modalSubscription: any;
  public modalRef;
  private modalElement: any;
  public selectUpload: boolean = false;
  public sheetNamesButtons: boolean;
  public wb: XLSX.WorkBook
  public data: [][];

  constructor(private _nssService: NSSService, private _modalService: NgbModal, private _toasterService: ToasterService) { }

  ngOnInit() {
    this.modalSubscription = this._nssService.showBatchUploadModalNSS.subscribe((show: boolean) => {
      if (show) { this.showModal(); }
    });
    this.modalElement = this.batchUploadModalNSS;

  }

  public showModal(): void {
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg', windowClass: 'modal-xl batch-upload-modal' });
  }

  public clearTable() {
    this.sheetNamesButtons = false;
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
    console.log(this.data)
    this.sheetNamesButtons = false;
  }

  
}
