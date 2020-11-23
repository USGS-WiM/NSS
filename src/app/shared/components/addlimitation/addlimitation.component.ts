import { Component, OnInit, ViewChild } from '@angular/core';
import { Limitation } from 'app/shared/interfaces/limitation';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { SettingsService } from 'app/settings/settings.service';
import { ToasterService } from 'angular2-toaster';
import { LoaderService } from 'app/shared/services/loader.service';

@Component({
  selector: 'addLimitationsModal',
  templateUrl: './addlimitation.component.html',
  styleUrls: ['./addlimitation.component.scss']
})
export class AddlimitationComponent implements OnInit {
  @ViewChild('addLimitations', {static: true}) public addLimitationsModal;
  private modalElement: any;
  private modalSubscript;
  public modalRef;
  private configSettings: Config;
  public newLimForm: FormGroup;
  public variables;
  public regressionRegionID;
  public unitTypes;
  public limitations = []; 

  constructor(private _nssService: NSSService, 
    private _modalService: NgbModal, 
    private _configService: ConfigService,  
    private _fb: FormBuilder,
    private _settingsService: SettingsService,
    private _toasterService: ToasterService,
    private _loaderService: LoaderService) { 
    this.configSettings = this._configService.getConfiguration();
    this.newLimForm = _fb.group({
      criteria: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      variables: this._fb.array([]),
    });
  }

  ngOnInit() {
    this.modalSubscript = this._nssService.showAddLimitationModal.subscribe((result: Limitation) => {
      if (result.show) { 
        console.log(result)
        this.regressionRegionID = result.regressionRegionID
        this.showModal(); 
      }
    });
    this.modalElement = this.addLimitationsModal;
  }

  public showModal(): void {
    this.getEntities();
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
  }

  public getEntities(){
    this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.variablesURL).subscribe(res => {
      res.sort((a, b) => a.name.localeCompare(b.name));
      this.variables = res;
    });
    this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.unitsURL).subscribe(res => {
      res.sort((a, b) => a.name.localeCompare(b.name));
      for (const unit of res) {
          unit['unit'] = unit['name'];
          unit['abbr'] = unit['abbreviation'];
      }
      this.unitTypes = res;
    });
  }

  public removeVariable(varIndex) {
    const control = <FormArray>this.newLimForm.get('variables');
    control.removeAt(varIndex);
  }

  public addVariable(){
    const control = <FormArray>this.newLimForm.get('variables');
    control.push(this._fb.group({
      variableTypeID: new FormControl(null, Validators.required),
      unitTypeID: new FormControl(null, Validators.required),
    }));
  }
  
  public createNewLimitation(){
    if (this.regressionRegionID!=0) {
    this.limitations = []; 
    this.limitations.push(this.newLimForm.value)
    this._settingsService
      .postEntity(this.limitations, this.configSettings.nssBaseURL + this.configSettings.limitationsURL + '?rr=' + this.regressionRegionID )
      .subscribe((response:any) => {
        if (!response.headers) {
          this._toasterService.pop('info', 'Info', 'Limitations were Added');
        } else { this._settingsService.outputWimMessages(response); }
      }, error => {
        this._loaderService.hideFullPageLoad();
        if (this._settingsService.outputWimMessages(error)) { return; }
        this._toasterService.pop('error', 'Error creating Limitations', error.message || error._body.message || error.statusText);
      }
    );  
    //TODO
    } else {
      this._toasterService.pop('error', 'Error creating Limitations', 'Must Create Regression Region First');
    }
   }
}
