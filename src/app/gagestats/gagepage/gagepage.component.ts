import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { GagePage } from 'app/shared/interfaces/gagepage';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { Station } from 'app/shared/interfaces/station';

@Component({
  selector: 'gagePageModal',
  templateUrl: './gagepage.component.html',
  styleUrls: ['./gagepage.component.scss']
})
export class GagepageComponent implements OnInit, OnDestroy {
  @ViewChild('gagePage', {static: true}) public gagePageModal; // : ModalDirective;  //modal for validator
  private modalSubscript;
  private configSettings: Config;
  private modalElement: any;
  public modalRef;
  public loggedInRole;
  public code;
  public gage: Station;

  constructor(private _nssService: NSSService, private _configService: ConfigService, private _modalService: NgbModal) { 
    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    this.loggedInRole = localStorage.getItem('loggedInRole');
    this.modalSubscript = this._nssService.showGagePageModal.subscribe((result: GagePage) => {
      if (result.show) { 
          this.code = result.gageCode;
          this._nssService.getGagePageInfo(this.code).subscribe(res => {
            this.gage = res;
            this.getCitations();
            this.showGagePageForm();
          });
        }
    });
    this.modalElement = this.gagePageModal;
  }
  
  public getCitations(){
    this.gage.citations = [];
    this.gage.characteristics.forEach(c => {
      if (c.citationID && !this.gage.citations.some(cit => cit.id === c.citationID)) {
        this.gage.citations.push(c.citation);
      }
    });

    this.gage.statistics.forEach(s => {
      if (s.citationID && !this.gage.citations.some(cit => cit.id === s.citationID)) {
        this.gage.citations.push(s.citation);
      }
    });
  }

  public showGagePageForm(){
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
  }

  ngOnDestroy() {
    this.modalSubscript.unsubscribe();
  }
}
