import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NSSService } from 'app/shared/services/app.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { SettingsService } from 'app/settings/settings.service';
import { Config } from 'app/shared/interfaces/config';
import { ConfigService } from 'app/config.service';
import { Scenario } from 'app/shared/interfaces/scenario';
import { ToasterService } from 'angular2-toaster';
import { AuthService } from 'app/shared/services/auth.service';
declare var MathJax: {
    Hub: { Queue, Config }
};

@Component({
  selector: 'cloneScenarioModal',
  templateUrl: './clonescenario.component.html',
  styleUrls: ['./clonescenario.component.css']
})

export class CloneScenarioModal implements OnInit, OnDestroy {
  @ViewChild('cloneScenario') public cloneScenarioModal; // : ModalDirective;  //modal for validator
  private modalElement: any;
  public CloseResult: any;
  private modalSubscript;
  public appVersion: string;
  public newCloneScenForm: FormGroup;
  public regressionRegions;
  public statisticGroups;
  public regressionTypes;
  public variables;
  public unitTypes;
  public equation;
  public errors;
  public item: any;
  public regRegion: any;
  public statisticGroup: any;
  public selectedRegion;
  private configSettings: Config;
  public addPredInt = false;
  public modalRef;
  public loggedInRole;

  constructor(private _nssService: NSSService, private _modalService: NgbModal, private _fb: FormBuilder,
      private _settingsService: SettingsService, private _configService: ConfigService, private _toasterService: ToasterService,
      private _authService: AuthService) {
      this.newCloneScenForm = _fb.group({
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
      this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
    this._nssService.currentItem.subscribe(item => this.item = item);
    this._nssService.currentRegRegion.subscribe(regRegion => this.regRegion = regRegion);
    this._nssService.currentStatisticGroup.subscribe(statisticGroup => this.statisticGroup = statisticGroup);

    // subscriber for logged in role
      this.loggedInRole = localStorage.getItem('loggedInRole');
      this._authService.loggedInRole().subscribe(role => {
          if (role === 'Administrator' || role === 'Manager') {
              this.loggedInRole = role;
          }
      });
      // show the filter modal == Change Filters button was clicked in sidebar
      this.modalSubscript = this._nssService.showCloneScenarioModal.subscribe((show: boolean) => {
          if (show) { this.showModal(); }
      });
      this._nssService.selectedRegion.subscribe(region => {
          this.selectedRegion = region;
          if (region && region.id) {this.getRegRegions(); }
      });
      this._nssService.getVersion.subscribe((v: string) => {
          this.appVersion = v;
      });
      this._settingsService.getEntities(this.configSettings.statisticGrpURL).subscribe(res => {
          res.sort((a, b) => a.name.localeCompare(b.name));
          this.statisticGroups = res;
      });
      this._settingsService.getEntities(this.configSettings.regTypeURL).subscribe(res => {
          res.sort((a, b) => a.name.localeCompare(b.name));
          this.regressionTypes = res;
      });
      this._settingsService.getEntities(this.configSettings.variablesURL).subscribe(res => {
          res.sort((a, b) => a.name.localeCompare(b.name));
          this.variables = res;
      });
      this._settingsService.getEntities(this.configSettings.unitsURL).subscribe(res => {
          res.sort((a, b) => a.name.localeCompare(b.name));
          for (const unit of res) {
              unit['unit'] = unit['name'];
              unit['abbr'] = unit['abbreviation'];
          }
          this.unitTypes = res;
      });
      this._settingsService.getEntities(this.configSettings.errorsURL).subscribe(res => {
          res.sort((a, b) => a.name.localeCompare(b.name));
          this.errors = res;
      });

      

      this.modalElement = this.cloneScenarioModal;
  }

  public getRegRegions() {
      // moving to own function for when new regression region is added
      this._settingsService.getEntities(this.configSettings.regionURL + this.selectedRegion.id + '/' + this.configSettings.regRegionURL)
          .subscribe(res => {
          if (res.length > 1) { res.sort((a, b) => a.name.localeCompare(b.name)); }
          this.regressionRegions = res;
      });
  }

  public showModal(): void {
      if (this.selectedRegion) {this.getRegRegions(); }
      this.modalRef = this._modalService.open(this.modalElement, { backdrop: 'static', keyboard: false, size: 'lg' });
      this.modalRef.result.then(
          result => {
              // this is the solution for the first modal losing scrollability
              if (document.querySelector('body > .modal')) {
                  document.body.classList.add('modal-open');
              }
              this.CloseResult = `Closed with: ${result}`;
          },
          reason => {
              this.CloseResult = `Dismissed ${this.getDismissReason(reason)}`;
              this.cancelCreateScenario();
          }
      );

      this.newCloneScenForm.patchValue({
        //statisticGroupID: '4',
        regressionRegions: {
            //ID: '31',
            regressions:{
                //ID:'3',
                equation: this.item.equationMathJax,
                //equivalentYears:'0',
                predictionInterval: {
                   // biasCorrectionFactor: '0',
                   // student_T_Statistic: '0',
                   // variance: '1.20',
                   // xiRowVector: '0.23',
                   // covarianceMatrix: '[["0.045353964","-0.003658533","-0.008200806"],["-0.003658533","0.001511573","-1.74E-05"],["-0.008200806","-1.74E-05","0.001884111"]]',     
                }, 
                expected:{
                   // value: '6',
                    intervalBounds: {
                        //lower: '2',
                        //upper: '14',
                    } 
                }
            } 
        }
      });


      console.log(this.item);
      console.log(this.regRegion);
      console.log(this.statisticGroup);

       
  }

  //add parameter
  addVariable() {
      const control = <FormArray>this.newCloneScenForm.get('regressionRegions.parameters');
      control.push(this._fb.group({
          code: new FormControl(null, Validators.required),
          limits: this._fb.group({
              max: new FormControl(null, Validators.required),
              min: new FormControl(null, Validators.required),
          }),
          unitType: new FormControl(null, Validators.required),
          comments: new FormControl(null),
          value: new FormControl(null, Validators.required)
      }));
  }

  addError() {
    const control = <FormArray>this.newCloneScenForm.get('regressionRegions.regressions.errors');
    control.push(this._fb.group({
        id: new FormControl(null, Validators.required),
        value: new FormControl(null, Validators.required)
    }));
}

    showMathjax() {
        const exp = this.newCloneScenForm.get('regressionRegions.regressions.equation').value;
        const equ = document.getElementById('mathjaxEq');
        equ.style.visibility = 'hidden';
        if (equ.firstChild) {
            equ.removeChild(equ.firstChild); 
        }
        if(exp == null){
            this.equation = " ";
        }else{
        this.equation = '`' + exp + '`';
        }
        equ.insertAdjacentHTML('afterbegin', '<span [MathJax]="equation">' + this.equation + '</span');
        MathJax.Hub.Config({
            'HTML-CSS': {
                linebreaks: { automatic: true}
            },
            CommonHTML: {
                linereaks: { automatic: true }
            }
        });
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'MathJax'],
            function() {
                equ.style.visibility = '';
            });
    }

  removeVariable(i) {
      const control = <FormArray>this.newCloneScenForm.get('regressionRegions.parameters');
      control.removeAt(i);
  }

  removeError(i) {
      const control = <FormArray>this.newCloneScenForm.get('regressionRegions.regressions.errors');
      control.removeAt(i);
  }

  public clearScenario(){
    this.newCloneScenForm.reset();
    const errorControl = <FormArray>this.newCloneScenForm.get('regressionRegions.regressions.errors');
    for(let i = errorControl.length-1; i >= 0; i--) {
        errorControl.removeAt(i);
    }
    const parmControl = <FormArray>this.newCloneScenForm.get('regressionRegions.parameters');
    for(let i = parmControl.length-1; i >= 0; i--) {
        parmControl.removeAt(i);
    }
    this.addPredInt = false
}

  createNewScenario() {
      console.log(this.newCloneScenForm.value);
      console.log(this.newCloneScenForm.get('regressionRegions.regressions.unit').value);
      console.log(this.newCloneScenForm.get('regressionRegions.regressions.equation').value);



      //console.log(this.newCloneScenForm.get('regressionRegions.regressions.expected'));
      // adding all necessary properties, since ngValue won't work with all the nested properties
      const scen = JSON.parse(JSON.stringify(this.newCloneScenForm.value));
      const regRegs = scen['regressionRegions']; const regs = regRegs.regressions;
      const statGroupIndex = this.statisticGroups.findIndex(item => item.id.toString() === scen['statisticGroupID']);
      scen['statisticGroupCode'] = this.statisticGroups[statGroupIndex].code;
      scen['statisticGroupName'] = this.statisticGroups[statGroupIndex].name;
      // add regression region name/code
      const regRegIndex = this.regressionRegions.findIndex(item => item.id.toString() === regRegs.ID);
      regRegs['name'] = this.regressionRegions[regRegIndex].name;
      regRegs['code'] = this.regressionRegions[regRegIndex].code;
      // add regression code/name/description
      const regIndex = this.regressionTypes.findIndex(item => item.id.toString() === regs.ID);
      regs.code = this.regressionTypes[regIndex].code;
      regs.name = this.regressionTypes[regIndex].name;
      regs.description = this.regressionTypes[regIndex].description;
      // add parameter name, description, add values/check if between limits
      regs.expected.parameters = {};
      for (const parameter of regRegs.parameters) {
          regs.expected.parameters[parameter.code] = parameter.value;
          const paramIndex = this.variables.findIndex(item => item.code === parameter.code);
          parameter['name'] = this.variables[paramIndex].name;
          parameter['description'] = this.variables[paramIndex].description;
          if (parameter.value > parameter.limits.max || parameter.value < parameter.limits.min) {
              this._toasterService.pop('error', 'Error', parameter.name + ' value not within the given limits.');
              return;
          } // make sure given values are within the limits
      }
      
      // check prediction interval
      if (!this.addPredInt || (!regs.predictionInterval.biasCorrectionFactor && !regs.predictionInterval.student_T_Statistic &&
          !regs.predictionInterval.variance && !regs.predictionInterval.xiRowVector && !regs.predictionInterval.covarianceMatrix)) {
              regs.predictionInterval = null; regs.expected.intervalBounds = null;
          }
      // change regression region/regression to arrays
      scen['regressionRegions'].regressions = [regs];
      scen['regressionRegions'] = [regRegs];
      // post scenario
      this._settingsService.postEntity(scen, this.configSettings.scenariosURL + '?statisticgroupIDorCode=' + scen.statisticGroupID)
          .subscribe((response) => {
              this._nssService.setSelectedRegion(this.selectedRegion);
              // clear form
              if (!response.headers) {this._toasterService.pop('info', 'Info', 'Scenario was added');
              } else {this._settingsService.outputWimMessages(response); }
              this.cancelCreateScenario();
          }, error => {
              if (!this._settingsService.outputWimMessages(error)) {
                  this._toasterService.pop('error', 'Error creating Scenario', error._body.message || error.statusText);
              }
          }
      );
  }

  outputWimMessages(msg) {
      // output messages from http request to toast
      for (const key of Object.keys(msg)) {
          for (const item of msg[key]) {
              this._toasterService.pop(key, key.charAt(0).toUpperCase() + key.slice(1), item);
          }
      }
  }

  cancelCreateScenario() {
      // reset form if canceled, remove all added params/errors
      const params = <FormArray>this.newCloneScenForm.get('regressionRegions.parameters');
      while (params.length !== 0) { params.removeAt(0); }
      const errors = <FormArray>this.newCloneScenForm.get('regressionRegions.regressions.errors');
      while (errors.length !== 0) {errors.removeAt(0); }
      this.addPredInt = false;
      this.newCloneScenForm.reset();
      this.modalRef.close();
  }

  hideDiv(divId) {
      // collapse param/error div
      const div = document.getElementById(divId);
      div.classList.add('hidden');
  }

  showDiv(divId) {
      // uncollapse param/error div
      const div = document.getElementById(divId);
      div.classList.remove('hidden');
  }

  checkDiv(divId) {
      // check if div is collapsed or not
      const div = document.getElementById(divId);
      if (div && div.classList.contains('hidden')) {return false;
      } else {return true; }
  }

  public showAddRegRegion() {
      this._nssService.setAddRegressionRegionModal(true);
  }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) return 'by pressing ESC';
      else if (reason === ModalDismissReasons.BACKDROP_CLICK) return 'by clicking on a backdrop';
      else return `with: ${reason}`;
  }

  // number only allowed in Value
  public _keyPress(event: any) {
      const pattern = /[0-9\+\-\.\ ]/;
      let inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
          // invalid character, prevent input
          event.preventDefault();
      }
  }

  ngOnDestroy() {
      this.modalSubscript.unsubscribe();
  }
}
