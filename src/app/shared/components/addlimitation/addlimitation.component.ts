import { Component, OnInit, ViewChild } from '@angular/core';
import { Limitation } from 'app/shared/interfaces/limitation';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';

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

  constructor(private _nssService: NSSService, private _modalService: NgbModal, private _configService: ConfigService,  private _fb: FormBuilder) { 
    this.configSettings = this._configService.getConfiguration();
    this.newLimForm = _fb.group({
        limitations: this._fb.array([])
    });
  }

  ngOnInit() {
    this.modalSubscript = this._nssService.showAddLimitationModal.subscribe((result: Limitation) => {
      if (result.show) { 
        this.showModal(); 
      }
  });
    this.modalElement = this.addLimitationsModal;
  }

  public showModal(): void {
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
  }

  public addLimitation() {
    const control = <FormArray>this.newLimForm.get('limitations');
    control.push(this._fb.group({
      limitationID: new FormControl(null),
      isEditing: new FormControl(null),
      criteria: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      variables: this._fb.array([]),
    }));
  }

  public removeVariable(limIndex, varIndex) {
    const control = <FormArray>this.newLimForm.get('limitations.' + limIndex + '.variables');
    control.removeAt(varIndex);
  }

  public removeLimitation(limIndex) {
    const control = <FormArray>this.newLimForm.get('limitations');
    control.removeAt(limIndex);
  }

  public addVariable(limIndex){
    const control = <FormArray>this.newLimForm.get('limitations.'+limIndex+'.variables');
    control.push(this._fb.group({
      isEditing: new FormControl(null),
      variableTypeID: new FormControl(null, Validators.required),
      unitTypeID: new FormControl(null, Validators.required),
    }));
  }

}
