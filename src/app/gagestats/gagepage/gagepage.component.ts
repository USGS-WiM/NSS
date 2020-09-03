import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NSSService } from 'app/shared/services/app.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { GagePage } from 'app/shared/interfaces/gagepage';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { Station } from 'app/shared/interfaces/station';
import { Unittype } from 'app/shared/interfaces/unittype';
import { SettingsService } from '../../settings/settings.service';
import { GageCharacteristic } from 'app/shared/interfaces/gagecharacteristic';

@Component({
  selector: 'gagePageModal',
  templateUrl: './gagepage.component.html',
  styleUrls: ['./gagepage.component.scss']
})
export class GagepageComponent implements OnInit, OnDestroy {
  @ViewChild('gagePage', {static: true}) public gagePageModal; // : ModalDirective;  //modal for validator
  private modalSubscript;
  private configSettings: Config;
  private modalElement: any;
  public modalRef;
  public loggedInRole;
  public code;
  public gage: Station;
  public editGage: boolean;
  public units;
  public tempItem;
  public itemBeingEdited;
  public editItem;
  public editId;
  public newChar: GageCharacteristic;

  constructor(
    private _nssService: NSSService, 
    private _configService: ConfigService, 
    private _modalService: NgbModal, 
    public _settingsservice: SettingsService) { 
    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    this.editGage = false;
    this.loggedInRole = localStorage.getItem('loggedInRole');
    this.modalSubscript = this._nssService.showGagePageModal.subscribe((result: GagePage) => {
      if (result.show) { 
          this.code = result.gageCode;
          this._nssService.getGagePageInfo(this.code).subscribe(res => {
            this.gage = res;
            this.getCitations();
            this.showGagePageForm();
          });
        }
    });
    this.modalElement = this.gagePageModal;
    // get all unit types 
    this._nssService.getUnitTypes().subscribe(res => {
      this.units = res;
        for (const unit of this.units) {
          unit.unit = unit.name;
          unit.abbr = unit.abbreviation;
        }
    });
  }  // end OnInit
  
  public getCitations(){
    this.gage.citations = [];
    this.gage.characteristics.forEach(c => {
      if (c.citationID && !this.gage.citations.some(cit => cit.id === c.citationID)) {
        this.gage.citations.push(c.citation);
      }
    });

    this.gage.statistics.forEach(s => {
      if (s.citationID && !this.gage.citations.some(cit => cit.id === s.citationID)) {
        this.gage.citations.push(s.citation);
      }
    });
  }

  public showGagePageForm(){
    this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
  }

///////////////////Edit Gage Info Section//////////////////////////////
  
  public editGageStats() {
    this.editGage = true;
  }

  public endEditGageStats() {
    this.editGage = false;

  } 

  public editRowClicked(item, id) {
    this.tempItem = JSON.parse(JSON.stringify(item));
    this.itemBeingEdited = item;
    this.editId = id
    item.isEditing = true;
  }

  public saveChar(item) {
    item.isEditing = false;
  }

  public saveStat(item, gIndex, stIndex, ) {
    item.isEditing = false;
    this.editItem = JSON.parse(JSON.stringify(this.gage[gIndex]));
    this.editItem.statistics = [this.editItem.statistics[stIndex]];
  }

  public cancelEditRowClicked(item) {
    if (this.itemBeingEdited.variableTypeID) {  // is a characteristic
      this.gage.characteristics[this.editId] = this.tempItem;
    }
    else if (this.itemBeingEdited.isPreferred) {  // is a statistic
      this.gage.statistics[this.editId] = this.tempItem;
    }
    
    item.isEditing = false;
  }

  public submitGage() {
    const url = ''
    this._settingsservice.putEntityGageStats('', this.configSettings.stationsURL, url).subscribe()
  }

///////////////////////Add Characteristic Section////////////////

  public addPhysicalCharacteristic(id) {
    //this.editRowClicked(item, id)
    //this.newChar = item;
    //this.gage.characteristics.push(this.newChar)
  }

///////////////////////Add Statistic Section/////////////////////

  public addStreamflowStatistic() {
    //const newStat = this.gage.statistics;
    //this.gage.statistics.push(this.gage.statistics);
  }



  ngOnDestroy() {
    this.modalSubscript.unsubscribe();
  }
}
