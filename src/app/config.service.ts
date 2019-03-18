// ------------------------------------------------------------------------------
// ----- config.service..ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: service to get configuration file

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Config } from 'app/shared/interfaces/config';

@Injectable()
export class ConfigService {
    private config: Config;
    constructor(private _http: Http) {}

    public load(url: string) {
        return new Promise(resolve => {
            this._http
                .get(url)
                .map(res => res.json())
                .subscribe(config => {
                    this.config = config;
                    resolve();
                });
        });
    }

    public getConfiguration(): Config {
        return this.config;
    }
}
