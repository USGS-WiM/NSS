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
import { ThrowStmt } from '@angular/compiler';

import { ToasterService } from 'angular2-toaster/angular2-toaster';

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
  //public newChar: GageCharacteristic;

  constructor(
    private _nssService: NSSService, 
    private _toasterService: ToasterService,
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

///////////////////////Characteristic Section////////////////
  /*
  public addPhysicalCharacteristic() {
    //this.editRowClicked(item, id)
    //const newChar = JSON.parse(JSON.stringify(this.gage.characteristics[0]));  // Make copy
    //this.newChar.variableType = null; this.newChar.value = null; this.newChar.citationID  = null; // Set values null
    //this.newChar.id = 323884; //(this.gage.characteristics[(this.gage.characteristics.length - 1)].id + 1); // Create new id number
    //this.gage.characteristics.push(this.newChar); // Add new characteristic to table
    //this.editRowClicked(this.newChar, this.newChar.id); // Set new char as editable
    const newChar = {"id":400000,"stationID":17,"variableTypeID":1,"unitTypeID":35,"citationID":3,"value":2.1,"comments":"null","variableType":{"id":1,"name":"Drainage Area","code":"DRNAREA","description":"Area that drains to a point on a stream"},"unitType":{"id":35,"name":"square miles","abbreviation":"mi^2","unitSystemTypeID":2},"citation":{"id":3,"title":"Imported from NWIS file","author":"Imported from NWIS file","citationURL":"http://waterdata.usgs.gov/nwis/si"}}
    console.log(newChar)
    this._settingsservice.postEntityGageStats(newChar, this.configSettings.characteristicsURL).subscribe(
      (res: GageCharacteristic) => {
        this.gage.characteristics.push(res);
        this.editRowClicked(res, res.id)
        console.log("Pass", res)
      }, error => {
        if (this._settingsservice.outputWimMessages(error)) {return; }
        this._toasterService.pop('error', 'Error creating Characterisic', error._body.message || error.statusText);
      }
    );
  } */

  public deletePhysicalCharacteristic(deleteID: number) {
    const check = confirm('Are you sure you want to delete this Characteristic?');
      if (check) {
        const index = this.gage.characteristics.findIndex(item => item.id === deleteID);
        this._settingsservice.deleteEntityGageStats(deleteID, this.configSettings.characteristicsURL).subscribe(
          (res) => {
            this.gage.characteristics.splice(index, 1)
          }
        )
  }}

  public saveChar(item) {
    this._settingsservice.putEntityGageStats(item.id, item, this.configSettings.characteristicsURL).subscribe(
      (res) => {
        item.isEditing = false;
      }
    ) 
  }

///////////////////////Statistic Section/////////////////////
  /*
  public addStreamflowStatistic() {
    const newStat = JSON.parse(JSON.stringify(this.gage.statistics[0]));
    this._settingsservice.postEntityGageStats(newStat, this.configSettings.statisticsURL).subscribe(
      (res) => {
        console.log('pass', res);
        this.gage.statistics.push(newStat);
      }
    )
  } */

   public deleteStatistic(deleteID: number) {
    const check = confirm('Are you sure you want to delete this Statistic?');
      if (check) {
        const index = this.gage.statistics.findIndex(item => item.id === deleteID);
        this.gage.statistics.splice(index, 1)
  }} 

  public saveStat(item, sIndex) {
    //this.editItem = JSON.parse(JSON.stringify(this.gage));
    this._settingsservice.putEntityGageStats(item.id, item, this.configSettings.statisticsURL).subscribe(
      (res) => {
        item.isEditing = false;
        console.log('pass');
      }
    )
    //this.editItem.statistics = [this.editItem.statistics[sIndex]];
  }


  ngOnDestroy() {
    this.modalSubscript.unsubscribe();
  }
}
