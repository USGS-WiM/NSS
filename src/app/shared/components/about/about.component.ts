// ------------------------------------------------------------------------------
// ----- atLeast1Req.modal.ts ---------------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: modal used to show about information

import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NSSService } from 'app/shared/services/app.service';
import { freshDeskTicket } from 'app/shared/interfaces/freshdeskticket'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { SettingsService } from 'app/settings/settings.service';

declare var opr: any;
declare var InstallTrigger: any;

@Component({
    selector: 'aboutModal',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutModal implements OnInit, OnDestroy {
    @ViewChild('about', {static: true}) public aboutModal; // : ModalDirective;  //modal for validator
    @ViewChild('f', {static: true}) ticketForm;
    private modalElement: any;
    public CloseResult: any;
    private modalSubscript;
    public appVersion: string;
    public Browser: string;
    public freshDeskTicket : freshDeskTicket;
    public user: string
    public token: string
    public WorkspaceID: string;
    public RegionID: string;
    public Server: string;
    public showSuccessAlert: boolean;
    public submittingSupportTicket: boolean;
    public newTicketForm: FormGroup;
    constructor(
        private http: HttpClient,
        public fb: FormBuilder, 
        private _nssService: NSSService, 
        public _settingsservice: SettingsService,
        private _modalService: NgbModal, 
        private _toasterService: ToasterService,
        ) {
        this.newTicketForm = fb.group({
            'email': new FormControl(null, Validators.required),
            'subject': new FormControl(null, Validators.required),
            'description': new FormControl(null, Validators.required),
            'attachment': new FormControl(null)
        });
        this.freshDeskTicket = new freshDeskTicket();
    }

    ngOnInit() {
        this.getBrowser();
        // show the filter modal == Change Filters button was clicked in sidebar
        this.modalSubscript = this._nssService.showAboutModal.subscribe((show: boolean) => {
            if (show) { this.showAboutModal(); }
        });
        this._nssService.getVersion.subscribe((v: string) => {
            this.appVersion = v;
        });
        this.modalElement = this.aboutModal;
    }

    public showAboutModal(): void {
        this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(
            result => {
                // this is the solution for the first modal losing scrollability
                if (document.querySelector('body > .modal')) {
                    document.body.classList.add('modal-open');
                }
                this.CloseResult = `Closed with: ${result}`;
            },
            reason => {
                this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) return 'by pressing ESC';
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) return 'by clicking on a backdrop';
        else return `with: ${reason}`;
    }

    ngOnDestroy() {
        this.modalSubscript.unsubscribe();
    }

    private getBrowser() {
        //modified from https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
        // Opera 8.0+
        if ((!!(<any>window).opr && !!opr.addons) || !!(<any>window).opera || navigator.userAgent.indexOf(' OPR/') >= 0) this.Browser = "Opera";
        // Firefox 1.0+
        if (typeof InstallTrigger !== 'undefined') this.Browser = "Firefox";
        // At least Safari 3+: "[object HTMLElementConstructor]"
        if (Object.prototype.toString.call((<any>window).HTMLElement).indexOf('Constructor') > 0) this.Browser = "Safari";
        // Chrome 1+
        if (!!(<any>window).chrome && (!!(<any>window).chrome.webstore||!!(<any>window).chrome.runtime)) this.Browser = "Chrome";
        // Edge 20+
        if (!(/*@cc_on!@*/false || !!(<any>document).documentMode) && !!(<any>window).StyleMedia) this.Browser = "Edge";
        // Internet Explorer 6-11
        if (/*@cc_on!@*/false || !!(<any>document).documentMode) this.Browser = "IE";
    }

    uploadFile(event) {
        const temp = (event.target as HTMLInputElement).files[0];
        this.freshDeskTicket.attachment = temp;
    }

    removeFile(){
        this.newTicketForm.controls['attachment'].setValue(null);
        this.freshDeskTicket.attachment = null;
    }

    private cancelAbout() {
        this.newTicketForm.reset();
        this.removeFile();
    }

    public submitFreshDeskTicket(): void {
        var url = "https://streamstats.freshdesk.com/api/v2/tickets"
        var token = 'yxAClTZwexFeIxpRR6g'

        // need formdata object to send file correctly
        var formdata = new FormData();
        formdata.append('status', "2"); 
        formdata.append('tags[]', 'NSS');  
        formdata.append('[custom_fields][browser]', this.Browser);
        formdata.append('[custom_fields][softwareversion]', this.appVersion);

        if (this.freshDeskTicket.attachment){
            // if file was uploaded, add to form data
            formdata.append('attachments[]', this.freshDeskTicket.attachment, this.freshDeskTicket.attachment.name);
        }
        
        // read form values from html
        const formVal = this.newTicketForm.value;

        formdata.append('subject', formVal.subject);
        formdata.append('email', formVal.email);
        formdata.append('description', formVal.description);

        const headers: HttpHeaders = new HttpHeaders({
            "Authorization": "Basic " + btoa(token + ":" + 'X')
        });
        // delete content type so webkit boundaries don't get added
        headers.delete('Content-Type');

        this.http.post<any>(url, formdata, { headers: headers, observe: "response"}).subscribe(
            (res) => {
                this._toasterService.pop('info', 'Info', 'Ticket was created'),
                this.cancelAbout();
            },(error) => {
                this._toasterService.pop('error', 'Error', 'Error creating ticket')
            }
        );  
    }

}
