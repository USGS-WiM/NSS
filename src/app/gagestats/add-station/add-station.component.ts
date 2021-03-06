import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'app/settings/settings.service';
import { ConfigService } from 'app/config.service';
import { ToasterService } from 'angular2-toaster';
import { Config } from 'app/shared/interfaces/config';
import { Agency } from 'app/shared/interfaces/agency';
import { Region } from  'app/shared/interfaces/region';
import { StationType } from 'app/shared/interfaces/stationtypes';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'addStationModal',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.scss']
})
export class AddStationModal implements OnInit {
  @ViewChild('addStation', {static: true}) public addStationModal;
  private configSettings: Config;
  private modalElement: any;
  public agencies: Array<Agency>;
  public stationTypes: Array<StationType>;
  public regions: Array<Region>;
  public modalSubscription: any;
  public modalRef;
  public addStationForm: FormGroup;
  public selectedParams: HttpParams;


  constructor(private _nssService: NSSService, private _modalService: NgbModal, private _fb: FormBuilder,
    private _settingsService: SettingsService, private _configService: ConfigService, private _toasterService: ToasterService) {
    this.addStationForm = _fb.group({
      code : new FormControl(null, Validators.required),
      agencyID : new FormControl(null, Validators.required),
      name : new FormControl(null),
      stationTypeID : new FormControl( null, Validators.required),
      isRegulated : new FormControl(false),
      regionID : new FormControl(null, Validators.required),
      latitude : new FormControl(null, [Validators.min(-90), Validators.max(90), Validators.required] ),
      longitude : new FormControl(null, [Validators.min(-180), Validators.max(180), Validators.required]),
      locationSource : new FormControl( null, Validators.required)
    });

    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    this.modalSubscription = this._nssService.showAddStationModal.subscribe((show: boolean) => {
      if (show) { this.showModal(); }
    });
    this.modalElement = this.addStationModal;

    this._nssService.agencies.subscribe((agencyList: Array<Agency>) => {
      this.agencies = agencyList;
    });
    this._nssService.stationTypes.subscribe((stationTypeList: Array<StationType>) => {
      this.stationTypes = stationTypeList;
    })
    this._nssService.regions.subscribe((regionList: Array<Region>) => {
      this.regions = regionList;
    });
    //subscribe to selected Filters
    this._nssService.selectedFilterParams.subscribe((selectedParams: HttpParams) => { 
      this.selectedParams = selectedParams;
    });
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

  public cancelSubmitStation() {
    this.addStationForm.reset();
    this.modalRef.close();
  }

  public submitStation() {
    const location = {type: 'Point', coordinates: [ this.addStationForm.get('latitude').value, this.addStationForm.get('longitude').value]}
    //modify form values to fit endpoint format
    let station = JSON.parse(JSON.stringify(this.addStationForm.value));
    delete station.latitude;
    delete station.longitude;
    station = {...station, 'location': location};

    this._settingsService.postEntity(station,this.configSettings.gageStatsBaseURL + this.configSettings.stationsURL)
      .subscribe((response:any) =>{
        if(!response.headers){
          this._toasterService.pop('info', 'Info', 'Station Added');
        } else {
          this._settingsService.outputWimMessages(response);
        }
        this.cancelSubmitStation();
        this._nssService.searchStations(this.selectedParams);
        this._nssService.setRequeryGSFilter(true);
      }, error => {
        if (!this._settingsService.outputWimMessages(error)) {
          this._toasterService.pop('error', 'Error adding Station', error.message || error.statusText);
        }
    });
  }

}
