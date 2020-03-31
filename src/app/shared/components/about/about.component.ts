// ------------------------------------------------------------------------------
// ----- atLeast1Req.modal.ts ---------------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: modal used to show about information

import { Component, ViewChild, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NSSService } from 'app/shared/services/app.service';
import {freshDeskTicket} from 'app/shared/interfaces/freshdeskticket'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
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
    public form: FormGroup;
    public newTicketForm: FormGroup;
    constructor(
        private http: HttpClient,
        public fb: FormBuilder, 
        private _nssService: NSSService, 
        public _settingsservice: SettingsService,
        private _modalService: NgbModal, 
        private _toasterService: ToasterService,
        ) {
        this.form = this.fb.group({
            name:"",
            file: [null]
        })
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
        console.log('get browser')
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
        this.form.patchValue({
            name: temp.name,
            file: temp
        });
        this.form.get('file').updateValueAndValidity()
    }

    removeFile(){
        this.form.patchValue({
            name: [""],
            file: [null]
        });
        this.freshDeskTicket.attachment = null;
    }

    private cancelAbout() {
        this.freshDeskTicket = new freshDeskTicket()
    }

    public submitFreshDeskTicket(): void {
        var url = "https://streamstats.freshdesk.com/api/v2/tickets"
        var token = 'yxAClTZwexFeIxpRR6g'
        var accountID = '303973'
        var tags=["NSS"];
        var formdata = new FormData();
        formdata.append('email', this.freshDeskTicket.email);
        formdata.append('subject', this.freshDeskTicket.subject);
        formdata.append('description', this.freshDeskTicket.description); 
        formdata.append('status', "2"); 
        //formdata.append('tags', JSON.stringify(tags));  
        formdata.append('[custom_field][browser_' + accountID + ']', this.Browser);
        formdata.append('[custom_field][softwareversion_' + accountID + ']', this.appVersion);

        if (this.freshDeskTicket.attachment){
            formdata.append('attachments', this.form.get('file').value);
        }

        console.log(formdata.get('email'))
        console.log(formdata.get('subject'))
        console.log(formdata.get('description'))
        console.log(formdata.get('status'))
        console.log(formdata.get('attachments'))
        
         var data = {
            "attachments": [this.form.get('file').value], 
            "email": formdata.get('email'),
            "subject": formdata.get('subject'),
            "description": formdata.get('description'),
            "status": 2,
            "tags" : ["NSS"],
            "custom_fields":{"browser": formdata.get('[custom_field][browser_' +  accountID + ']'),
                              "softwareversion": formdata.get('[custom_field][softwareversion_' + accountID + ']')}
        }; 

        console.log(JSON.stringify(data))
        console.log((data.attachments))

        const headers: HttpHeaders = new HttpHeaders({
            "Authorization": "Basic " + btoa(token + ":" + 'X'),
            "Content-Type": "multipart/form-data"
        });

         this.http.post<any>(url, data, { headers: headers, observe: "response"}).subscribe(
            (res) => {
                console.log(res),
                this._toasterService.pop('info', 'Info', 'Ticket was created'),
                this.cancelAbout();
            },(error) => {
                this._toasterService.pop('error', 'Error', 'Error creating ticket'),
                console.log(error)
            }
        );  
    }

}
