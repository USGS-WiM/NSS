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
import { FormGroup, FormBuilder } from '@angular/forms';
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
    @ViewChild('about', {static: true}) public aboutModal;
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
    constructor(
        private http: HttpClient,
        public fb: FormBuilder, 
        private _nssService: NSSService, 
        public _settingsservice: SettingsService,
        private _modalService: NgbModal, 
        private _toasterService: ToasterService
        ) {
        this.form = this.fb.group({
            name:"",
            avatar: [null]
        })
        this.freshDeskTicket = new freshDeskTicket();
        this.showSuccessAlert = false;
        this.submittingSupportTicket = false; 
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
        const file = (event.target as HTMLInputElement).files[0];
        this.form.patchValue({
            name:file.name,
            avatar: file
        });
        this.form.get('avatar').updateValueAndValidity()
    }

    removeFile(event){
        this.form.patchValue({
            name: [""],
            avatar: [null]
        });
        this.freshDeskTicket.attachment = null;
    }

    private cancelAbout() {
        this.freshDeskTicket = new freshDeskTicket()
    }

    public submitFreshDeskTicket(): void {
        if (this.freshDeskTicket.email == null||this.freshDeskTicket.subject == null||this.freshDeskTicket.description == null){
             this._toasterService.pop('error', 'Error', 'Form not complete');
             return
        }
        var url = 'https://streamstats.freshdesk.com/helpdesk/tickets.json';
        var formdata = new FormData();
        
        formdata.append('helpdesk_ticket[email]', this.freshDeskTicket.email);
        formdata.append('helpdesk_ticket[subject]', this.freshDeskTicket.subject);
        formdata.append('helpdesk_ticket[description]', this.freshDeskTicket.description);  
        //formdata.append('helpdesk_ticket[custom_field][regionid_' + '303973' + ']', this.RegionID);
        //formdata.append('helpdesk_ticket[custom_field][workspaceid_' + '303973' + ']', this.WorkspaceID);
        //formdata.append('helpdesk_ticket[custom_field][server_' + '303973' + ']', this.Server);
        formdata.append('helpdesk_ticket[custom_field][browser_' + '303973' + ']', this.Browser);
        formdata.append('helpdesk_ticket[custom_field][softwareversion_' + '303973' + ']', this.appVersion);

        if (this.freshDeskTicket.attachment){
            formdata.append('helpdesk_ticket[attachments][][resource]', this.form.get('avatar').value, this.form.get('name').value);
        }

        //console.log(formdata.get('helpdesk_ticket[description]'))
        //console.log(formdata.get('helpdesk_ticket[email]'))
        //console.log(formdata.get('helpdesk_ticket[subject]'))
        //console.log(formdata.get('helpdesk_ticket[attachments][][resource]'))
        //console.log(formdata.get('helpdesk_ticket[custom_field][browser_' + '303973' + ']'))
        //console.log(formdata.get('helpdesk_ticket[custom_field][softwareversion_' + '303973' + ']'))

        const headers: HttpHeaders = new HttpHeaders({
            "Authorization": "Basic " + btoa('yxAClTZwexFeIxpRR6g' + ":" + 'X'),
            "Content-Type": undefined
        });

        //var request: WiM.Services.Helpers.RequestInfo = new WiM.Services.Helpers.RequestInfo(url, true, WiM.Services.Helpers.methodType.POST, 'json', formdata, headers, angular.identity);

        this.http.post<any>(url, formdata,{ headers: headers, observe: "response"}).subscribe(
            (res) => {
                console.log(res),
                this._toasterService.pop('info', 'Info', 'Unit was created'),
                this.cancelAbout();
            },(error) => {
                if (this._settingsservice.outputWimMessages(error)) {return; }
                this._toasterService.pop('error', 'Error creating Unit', error._body.message || error.statusText);
            }
        );

        /*this.Execute(request).then(
            (response: any) => {
                console.log('Successfully submitted help ticket: ', response);
                
                //clear out fields
                this.freshDeskTicket = new freshDeskTicket();

                //show user feedback
                this.showSuccessAlert = true;

            }, (error) => {
                //sm when error
            }).finally(() => {
                this.submittingSupportTicket = false;
            }); */
    }

}
