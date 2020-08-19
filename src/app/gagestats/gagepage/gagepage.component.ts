import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { GagePage } from 'app/shared/interfaces/gagepage';
import { StationType } from 'app/shared/interfaces/stationtypes';
import { Agency } from 'app/shared/interfaces/agencies';

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
  public loggedInRole;
  public descriptiveInfo;
  public stationTypes;
  public agencies;

  constructor(private _nssService: NSSService, private _modalService: NgbModal) { }

  ngOnInit() {
    this.loggedInRole = localStorage.getItem('loggedInRole');
    this.modalSubscript = this._nssService.showGagePageModal.subscribe((result: GagePage) => {
      if (result.show) { 
          this.descriptiveInfo = result.gageInfo;
          this.showGagePageForm(result.gageInfo);
        }
    });
    // subscribe to all agencies
    this._nssService.agencies.subscribe((agencies: Array<Agency>) => {
      this.agencies = agencies;
    });
    // subscribe to all station types
    this._nssService.stationTypes.subscribe((stationtypes: Array<StationType>) => {
      this.stationTypes = stationtypes;
    });
    this.modalElement = this.gagePageModal;
  }


  public showGagePageForm(g){
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
  }

  public getAgencyName(aID) {
    if (this.agencies) {
      return (this.agencies.find(a => a.id === aID).name);
    }
  }

  public getStationType(sID) {
    if (this.stationTypes) {
      return (this.stationTypes.find(s => s.id === sID).name);
    }
  }

  public editRowClicked(){
  }

  ngOnDestroy() {
    this.modalSubscript.unsubscribe();
  }
}
