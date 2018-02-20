// ------------------------------------------------------------------------------
// ------------ loader.component ------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:     Tonia Roddick USGS Web Informatics and Mapping
//              Erik Myers USGS Web Informatics and Mapping
// purpose:     selector component that sits within the mapview.component.html page. 
//              Is a loading div that covers the whole page until the geojson is displayed on the map.

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from './loader.service';

@Component({
    selector: 'loader-div',
    template: `<div [class.loader-hidden]="!show">
                  <div class="page-loader" id="page-loader"></div>
                </div>`,
    styleUrls: ['loader.component.css']
})

export class LoaderComponent implements OnInit {
    public show = true; //start it showing until the geojson comes back
    private subscription: Subscription;

    constructor(private _loaderService: LoaderService) { }

    ngOnInit() {
        // subscription that updates the class on the div to show/hide it
        this.subscription = this._loaderService.loaderState.subscribe((state: boolean) => {
            this.show = state;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}