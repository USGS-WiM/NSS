// ------------------------------------------------------------------------------
// ------------ loader.service --------------------------------------------------
// ------------------------------------------------------------------------------
// copyright:   2017 WiM - USGS
// authors:     Tonia Roddick USGS Web Informatics and Mapping
//              Erik Myers USGS Web Informatics and Mapping
// purpose:     Service for updating boolean subjects that are subscribed to for show/hiding the loading div

import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
    private _loaderSubject = new BehaviorSubject<boolean>(true);

    public loaderState = this._loaderSubject.asObservable();

    constructor() {}

    // whole page initial load
    public showLoader() {
        this._loaderSubject.next(true);
    }
    public hideLoader() {
        this._loaderSubject.next(false);
    }
}
