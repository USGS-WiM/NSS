import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'app/settings/settings.service';
import { ConfigService } from 'app/config.service';
import { ToasterService } from 'angular2-toaster';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'addStationModal',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationModal implements OnInit {
  @ViewChild('addStation', {static: true}) public addStationModal;
  public addStationForm: FormGroup;

  constructor(private _nssService: NSSService, private _modalService: NgbModal, private _fb: FormBuilder,
    private _settingsService: SettingsService, private _configService: ConfigService, private _toasterService: ToasterService,
    private _authService: AuthService) {

      this.addStationForm = _fb.group({
        'region': new FormControl(null, Validators.required),
        'statisticGroupID': new FormControl(null, Validators.required),
        'regressionRegions': this._fb.group({
            'ID': new FormControl(null, Validators.required),
            'parameters': this._fb.array([]),
            'regressions': this._fb.group({
                'ID': new FormControl(null, Validators.required),
                'errors': this._fb.array([]),
                'unit': new FormControl(null, Validators.required),
                'equation': new FormControl(null, Validators.required),
                'equivalentYears': new FormControl(0),
                'predictionInterval': this._fb.group({
                    'biasCorrectionFactor': new FormControl(null),
                    'student_T_Statistic': new FormControl(null),
                    'variance': new FormControl(null),
                    'xiRowVector': new FormControl(null),
                    'covarianceMatrix': new FormControl(null)
                }),
                'expected': this._fb.group({
                    'value': new FormControl(null, Validators.required),
                    'parameters': new FormControl({}),
                    'intervalBounds': this._fb.group({
                        'lower': new FormControl(null),
                        'upper': new FormControl(null)
                    })
                })
            })
        })
      });
    }

  ngOnInit() {
  }

}
