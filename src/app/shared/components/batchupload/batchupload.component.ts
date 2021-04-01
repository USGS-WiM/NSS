import { Component, OnInit, ViewChild } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private _nssService: NSSService, private _modalService: NgbModal) { }

  ngOnInit() {
    this.modalSubscription = this._nssService.showBatchUploadModalNSS.subscribe((show: boolean) => {
      if (show) { this.showModal(); }
    });
    this.modalElement = this.batchUploadModalNSS;

  }

  public showModal(): void {
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg', windowClass: 'modal-xl batch-upload-modal' });
  }

}
