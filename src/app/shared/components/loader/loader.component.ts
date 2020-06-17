// ------------------------------------------------------------------------------
// ------------ loader.component ------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:     Tonia Roddick USGS Web Informatics and Mapping
//              Erik Myers USGS Web Informatics and Mapping
// purpose:     selector component that sits within the mapview.component.html page. 
//              Is a loading div that covers the whole page until the geojson is displayed on the map.

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
    selector: 'app-loading-screen',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
    public show = true; // start
    private subscription: Subscription;

    constructor(private _loaderService: LoaderService) {}

    ngOnInit() {
        this.subscription = this._loaderService.loaderState.subscribe((state: boolean) => {
            this.show = state;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}