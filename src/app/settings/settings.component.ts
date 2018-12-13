// ------------------------------------------------------------------------------
// ----- regions.component.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: regions crud in admin settings page

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { ToasterService } from "angular2-toaster/angular2-toaster";

import { NSSService } from '../app.service';
import { Region } from '../shared/interfaces/region';

@Component({
    moduleId: module.id,
    templateUrl: 'settings.component.html',
    styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
    constructor(public _nssService: NSSService){}

    public regions: Array<Region>;

    ngOnInit(){
        
    }

}
