import { Component, OnDestroy, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'app/config.service';
import { SettingsService } from 'app/settings/settings.service';
import { Config } from 'protractor';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Method } from 'app/shared/interfaces/method';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
})
export class MethodsComponent implements OnInit, OnDestroy  {
  @ViewChild('add', {static: true})
  public addRef: TemplateRef<any>;
  @ViewChild('MethodForm', {static: true}) methodForm;
  public methods;
  private configSettings: Config;
  private navigationSubscription;
  public newMethodForm: FormGroup;
  public loggedInRole;
  public showMethodForm: boolean;
  public modalRef;
  private CloseResult;
  public isEditing: boolean;
  public rowBeingEdited: number;
  public tempData;

  constructor(public _settingsService: SettingsService, private _configService: ConfigService, private _fb: FormBuilder, 
    private router: Router, private _modalService: NgbModal, public _settingsservice: SettingsService, private _toasterService: ToasterService) { 
    this.newMethodForm = _fb.group({
      'name': new FormControl(null, Validators.required),
      'code': new FormControl(null, Validators.required)
    });
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.getLoggedInRole();
      }
    });
    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    // get all method types
    this._settingsService.getEntities(this.configSettings.methodURL).subscribe(res => {
      this.methods = res;
    });
  }

  showNewMethodsForm() {
    this.newMethodForm.controls['name'].setValue(null);
    this.newMethodForm.controls['code'].setValue(null);
    this.showMethodForm = true;
    this.modalRef = this._modalService.open(this.addRef, { backdrop: 'static', keyboard: false, size: 'lg' });
    this.modalRef.result.then((result) => {
      // this is the solution for the first modal losing scrollability
      if (document.querySelector('body > .modal')) {
        document.body.classList.add('modal-open');
      }
      this.CloseResult = `Closed with: ${result}`;
      if (this.CloseResult) {this.cancelCreateMethod(); }
    }, (reason) => {
      this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
      if (this.CloseResult) {this.cancelCreateMethod(); }
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else { return `with: ${reason}`; }
  }

  private cancelCreateMethod() {
    this.newMethodForm.reset();
    this.modalRef.close();
  }

  private createNewMethod() {
    const newItem = this.newMethodForm.value;
    this._settingsservice.postEntity(newItem, this.configSettings.methodURL)
      .subscribe((response: Method) => {
        response.isEditing = false;
        this.methods.push(response);
        this._settingsservice.setMethods(this.methods);
        this._toasterService.pop('info', 'Info', 'Method was created');
        this.cancelCreateMethod();
      }, error => {
        if (this._settingsservice.outputWimMessages(error)) {return; }
        this._toasterService.pop('error', 'Error creating Method', error._body.message || error.statusText);
      }
    );
  }

  private EditRowClicked(i: number) {
    // make a copy in case they cancel
    this.methods[i].isEditing = true;
    //if there is a row already being edited, cancel that edit
    if (this.isEditing == true) {
      this.CancelEditRowClicked(this.rowBeingEdited);
    }
    this.tempData = Object.assign({}, this.methods[i]); 
    this.rowBeingEdited = i;
    this.isEditing = true; // set to true so create new is disabled
  }

  public CancelEditRowClicked(i: number) {
    this.methods[i] = Object.assign({}, this.tempData);
    this.methods[i].isEditing = false;
    this.rowBeingEdited = -1;
    this.isEditing = false; // set to true so create new is disabled
    if (this.methodForm.form.dirty) {
      this.methodForm.reset();
    }
  }

  // edits made, save clicked
  public saveMethod(m: Method, i: number) {
    if (m.name === undefined || m.code === undefined) {
      // don't save it
      this._toasterService.pop('error', 'Error updating Method', 'Name and Code are required.');
    } else {
      delete m.isEditing;
      this._settingsservice.putEntity(m.id, m, this.configSettings.methodURL).subscribe(
        (resp) => {
          m.isEditing = false;
          this.methods[i] = m;
          this._settingsservice.setMethods(this.methods);
          this.rowBeingEdited = -1;
          this.isEditing = false; // set to true so create new is disabled
          if (this.methodForm.form.dirty) { this.methodForm.reset(); }
          this._settingsservice.outputWimMessages(resp);
        }, error => {
          if (this._settingsservice.outputWimMessages(error)) {return; }
          this._toasterService.pop('error', 'Error updating Method', error._body.message || error.statusText);
        }
      );
    }
  }

  // delete category type
  public deleteMethod(deleteID: number) {
    const check = confirm('Are you sure you want to delete this Method?');
    if (check) {
      // delete it
      const index = this.methods.findIndex(item => item.id === deleteID);
      this._settingsservice.deleteEntity(deleteID, this.configSettings.methodURL)
        .subscribe(result => {
          this.methods.splice(index, 1);
          this._settingsservice.setMethods(this.methods); // update service
          this._settingsservice.outputWimMessages(result);
        }, error => {
          if (this._settingsservice.outputWimMessages(error)) {return; }
          this._toasterService.pop('error', 'Error deleting Method', error._body.message || error.statusText);
        }
      );
    }
  }

  private getLoggedInRole() {
    this.loggedInRole = localStorage.getItem('loggedInRole');
  }

  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();
  }
}
