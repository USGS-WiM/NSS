import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'app/config.service';
import { SettingsService } from 'app/settings/settings.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
})
export class MethodsComponent implements OnInit {
  public methods;
  private configSettings: Config;

  constructor(public _settingsService: SettingsService, private _configService: ConfigService
    ) { 
    this.configSettings = this._configService.getConfiguration();
  }

  ngOnInit() {
      // get all method types
      this._settingsService.getEntities(this.configSettings.nssBaseURL + this.configSettings.methodURL).subscribe(res => {
        this.methods = res;
    });
  }

}
