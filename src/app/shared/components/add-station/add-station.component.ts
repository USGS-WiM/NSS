import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'app/settings/settings.service';
import { ConfigService } from 'app/config.service';
import { ToasterService } from 'angular2-toaster';
import { AuthService } from 'app/shared/services/auth.service';
import { Config } from 'app/shared/interfaces/config';
import { Agency } from 'app/shared/interfaces/agency';

@Component({
  selector: 'addStationModal',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationModal implements OnInit {
  @ViewChild('addStation', {static: true}) public addStationModal;
  private configSettings: Config;
  private modalElement: any;
  public agencies: Array<Agency>;
  public modalSubscription: any;
  public modalRef;
  public addStationForm: FormGroup;


  constructor(private _nssService: NSSService, private _modalService: NgbModal, private _fb: FormBuilder,
    private _settingsService: SettingsService, private _configService: ConfigService, private _toasterService: ToasterService,
    private _authService: AuthService) {
    this.addStationForm = _fb.group({
      code : new FormControl(null, Validators.required),
      agencyID : new FormControl(null, Validators.required),
      name : new FormControl(null),
      stationTypeID : new FormControl( null, Validators.required),
      latitude : new FormControl(null, [Validators.min(-90), Validators.max(90), Validators.required] ),
      longitude : new FormControl(null, [Validators.min(-180), Validators.max(180), Validators.required]),

    });

    this.configSettings = this._configService.getConfiguration();
      
      /*
      STATION OBJECT EXAMPLE
      {
        "code":"11111111",
        "agencyID": 1,
        "name":"example station 1 at example location, ex. river",
        "stationTypeID":"1",
        "location": {
            "type": "Point",
            "coordinates": [
                "0": -99.999,
                "1": 44.444
            ]
        }
    }*/

      /* this.addStationForm = _fb.group({
        
      }); */
  }

  ngOnInit() {
    this.modalSubscription = this._nssService.showAddStationModal.subscribe((show: boolean) => {
      if (show) { this.showModal(); }
    });
    this.modalElement = this.addStationModal;

    this._nssService.agencies.subscribe((agencyList: Array<Agency>) => {
      this.agencies = agencyList;
    })
  }

  public showModal(): void {
    
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
    this.modalRef.result.then(
        result => {
            // this is the solution for the first modal losing scrollability
            if (document.querySelector('body > .modal')) {
                document.body.classList.add('modal-open');
            }
            
        
        }
    );
  }
  
  public clearStation() {
    this.addStationForm.reset();

  }

  public addNewStation() {
    
  }

}
