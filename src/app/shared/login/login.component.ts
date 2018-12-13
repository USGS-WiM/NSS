// ------------------------------------------------------------------------------
// ----- atLeast1Req.modal.ts ---------------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: modal used to show login information

import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NSSService } from '../../app.service';

@Component({
  selector: 'loginModal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginModal {   
    @ViewChild('login') public loginModal; // : ModalDirective;  //modal for validator    
    private modalElement: any;
    public CloseResult: any;
    private modalSubscript;
    public appVersion: string;

    constructor(private _nssService: NSSService, private _modalService: NgbModal){ }
    
    ngOnInit() {
      //show the filter modal == Change Filters button was clicked in sidebar
      this.modalSubscript = this._nssService.showLoginModal.subscribe((show: boolean) => {
          if (show) this.showLoginModal();
      });
      this._nssService.getVersion.subscribe((v: string) => {
        this.appVersion = v;
    });
      
      this.modalElement = this.loginModal;
    }

    public showLoginModal(): void {      
      this._modalService.open(this.modalElement, {backdrop: 'static', keyboard: false, size: 'lg'}).result.then((result) =>{
        // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            this.CloseResult = `Closed with: ${result}`;
        }, (reason) => {
            this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) return 'by pressing ESC';
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) return 'by clicking on a backdrop';
        else return  `with: ${reason}`;
    }
    ngOnDestroy() {
        this.modalSubscript.unsubscribe();
    }
}