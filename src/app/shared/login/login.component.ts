// ------------------------------------------------------------------------------
// ----- atLeast1Req.modal.ts ---------------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick USGS Wisconsin Internet Mapping
// purpose: modal used to show login information

import { Component, ViewChild, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NSSService } from '../../shared/services/app.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Manager } from 'app/shared/interfaces/manager';
import { LoginService } from '../services/login.service';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
    selector: 'loginModal',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginModal implements OnInit, OnDestroy {
    @ViewChild('login') public loginModal; // : ModalDirective;  //modal for validator
    private modalElement: any;
    public CloseResult: any;
    private modalSubscript;
    public appVersion: string;
    public manager: Manager;
    public LoginForm: FormGroup;
    loading = false;
    returnUrl: string;

    constructor(
        private _nssService: NSSService,
        private _modalService: NgbModal,
        private _route: ActivatedRoute,
        private _router: Router,
        private _loginService: LoginService,
        private _toastService: ToasterService,
        private _fb: FormBuilder
    ) {
        this.LoginForm = _fb.group({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    ngOnInit() {
        this.manager = {username: '', password: ''};
        // show the login modal
        this.modalSubscript = this._nssService.showLoginModal.subscribe((show: boolean) => {
            if (show) {
                this.showLoginModal();
            }
        });

        // reset login status
        this._loginService.logout();
        localStorage.clear();

        // get return url from route parameters or default to '/'
        this.returnUrl = '/';

        this.modalElement = this.loginModal;
    }

    public showLoginModal(): void {
        this.LoginForm.controls['username'].setValue(null);
        this.LoginForm.controls['password'].setValue(null);
        this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' }).result.then(
            result => {
                // this is the solution for the first modal losing scrollability
                if (document.querySelector('body > .modal')) {
                    document.body.classList.add('modal-open');
                }
                this.CloseResult = `Closed with: ${result}`;
                if (this.CloseResult) {
                    this._router.navigate(['']);
                }
            },
            reason => {
                this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
                if (this.CloseResult) {
                    this._router.navigate(['']);
                }
            }
        );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    // log user in, navigate to home
    public loginRun() {
        this.manager.username = this.LoginForm.get('username').value;
        this.manager.password = this.LoginForm.get('password').value;
        this.loading = true; // not using this yet
        this._loginService.login(this.manager.username, this.manager.password).subscribe(
            () => {
                if (this._loginService.isLoggedIn) {
                    this._router.navigate([this.returnUrl]);
                    this._nssService.setLoginModal(false);
                }
                this.loading = false; // not using this yet
            },
            error => {
                this._toastService.pop('error', 'Error', error._body.message || error.statusText);
                this.loading = false;
            }
        );
    }

    ngOnDestroy() {
        this.modalSubscript.unsubscribe();
    }
}
