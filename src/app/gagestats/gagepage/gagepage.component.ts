import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gagePageModal',
  templateUrl: './gagepage.component.html',
  styleUrls: ['./gagepage.component.scss']
})
export class GagepageComponent implements OnInit, OnDestroy {
  @ViewChild('gagePage', {static: true}) public gagePageModal; // : ModalDirective;  //modal for validator
  private modalSubscript;
  private modalElement: any;
  public modalRef;

  constructor(private _nssService: NSSService, private _modalService: NgbModal) { }

  ngOnInit() {
    this.modalSubscript = this._nssService.showGagePageModal.subscribe((show: boolean) => {
      if (show) { this.showModal(); }
    });
    this.modalElement = this.gagePageModal;
  }

  public showModal(): void {
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
  }

  ngOnDestroy() {
    this.modalSubscript.unsubscribe();
  }
}
