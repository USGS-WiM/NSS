import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MainviewComponent } from './mainview/mainview.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageScrollConfig } from 'ng2-page-scroll';
import { environment } from '../environments/environment';
import { NSSService } from './shared/services/app.service';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from './shared/services/login.service';
import { Manager } from './shared/interfaces/manager';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { SettingsService } from './settings/settings.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    public loggedInRole = '';
    @ViewChild('login', {static: true}) public loginModal; // : ModalDirective;  //modal for validator
    private modalElement: any;
    public closeResult: any;
    private modalSubscript;
    public appVersion: string;
    public manager: Manager;
    public LoginForm: FormGroup;
    public modalRef;
    public title;
    public loginBoolean;
    loading = false;
    returnUrl: string;
    isLoggedIn: boolean;
    isloginShow: boolean;
    showGageStats: boolean;
    public loginError = false;
    public showMobileMenu = false;
    constructor(
        private _nssService: NSSService,
        public router: Router,
        private _authService: AuthService,
        private _loginService: LoginService,
        public _settingsservice: SettingsService,
        private _fb: FormBuilder,
        private _toasterService: ToasterService,
        private _modalService: NgbModal
    ) {
        PageScrollConfig.defaultScrollOffset = 85;
        this._nssService.setVersion(environment.version);
        this.LoginForm = _fb.group({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    ngOnInit() {

        this._authService.loggedInRole().subscribe(role => {
            if (role === 'Administrator' || role === 'Manager') {
                this.loggedInRole = role;
            }
        });

        this._loginService.isloginShow().subscribe(loginShow => {
            this.isloginShow = loginShow;
        });

        this._nssService.showGageStats().subscribe(show => {
            this.showGageStats = show;
        });

        this._loginService.isLoggedIn().subscribe(loggedIn => {
            this.isLoggedIn = loggedIn;
        });

        this.loggedInRole = localStorage.getItem('loggedInRole');
        if (this.loggedInRole !== null && !this.checkSetupTime()) {
            this._loginService._loggedInSubject.next(true);
        } else {
            this.logout();
        }

        this._nssService.showLoginModal.subscribe(show => {
            if (show) { this.showLoginModal(); }
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = '';

        this.modalElement = this.loginModal;
        this.loginError = false;

    

    }
    // @ViewChild(NavbarComponent) navbarComponent: NavbarComponent;
    @ViewChild(SidebarComponent, {static: true}) sidebarComponent: SidebarComponent;
    @ViewChild(MainviewComponent, {static: true}) mainviewCommponent: MainviewComponent;
    public showAbout() {
        this._nssService.setAboutModal(true);
    }

    public showLoginModal(): void {
        this.LoginForm.controls['username'].setValue(null);
        this.LoginForm.controls['password'].setValue(null);
        this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
        this.modalRef.result.then(
            result => {
                // this is the solution for the first modal losing scrollability
                if (document.querySelector('body > .modal')) {
                    document.body.classList.add('modal-open');
                }
                this.closeResult = `Closed with: ${result}`;
                if (this.closeResult) {
                    this.router.navigate(['']);
                }
            },
            reason => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                if (this.closeResult) {
                    this.router.navigate(['']);
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
        this.loading = true; // not using this yet
        this._loginService.login(this.LoginForm.value).subscribe(
            () => {
                this.loading = false; // not using this yet
                this._nssService.setLoginModal(false);
                this.loginError = false;
                this.modalRef.close();
                window.location.reload();  
            },
            error => {
                this._toasterService.pop('error', 'Error logging in',  error.statusText|| error._body.message);
                this.loading = false;
            }
        );
    }

    public logout(click?: boolean) {
        this.LoginForm.reset();
        this._loginService.logout();
        this.router.navigate(['']);
        if (click) {
            window.location.reload();
        }
    }

    ngOnDestroy() {
        this.modalSubscript.unsubscribe();
    }

    private checkSetupTime(): boolean {
        let tooOld = false;

        const twelveHours: number = 12 * 60 * 60 * 1000;
        const now: number = new Date().getTime();
        const setupTime: number = Number(localStorage.getItem('setupTime'));
        if (now - setupTime > twelveHours) {
            // is it greater than 12 hours
            tooOld = true;
            localStorage.clear();
        }

        return tooOld;
    }


}
