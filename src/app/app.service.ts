import { Injectable }   from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import { Subject }      from 'rxjs/Subject';
import 'rxjs/add/operator/catch';

//interfaces
import { IRegion }              from './shared/region';
import { IRegressionRegion }    from './shared/regressionregion';
import { IStatisticGroup }      from './shared/statisticgroup';
import { IRegressionType }      from './shared/regressiontype';
import { IScenario }            from './shared/scenario';
import { ICitation }            from './shared/citation';
import { IHydro }               from './shared/hydrochart';
import { CONFIG }               from './shared/config';
import { Toast }                from 'angular2-toaster/lib/toast';

@Injectable()
export class NSSService {
   //updated whenever selected values are updated - used for getting other parts 
    private _regRegionIdParams: string;
    private _regTypeIdParams: string;
    private _statGrpIdParams: string;

    constructor(private _http: Http) {
        this.getRegions();    
    }

    // -+-+-+-+-+-+-+-+-+ hydrograph  getter/setter  -+-+-+-+-+-+-+-+-+
    private hydrograph: IHydro;
    private hydroBind: Subject<IHydro> = new Subject<IHydro>();
    setHydrograph(h: IHydro) {
        this.hydrograph = h;
        this.hydroBind.next(h);
    }
    getHydrograph(): Observable<IHydro> {
        return this.hydroBind.asObservable();
    }
    private chartBind: Subject<string> = new Subject<string>();
    addChart(c: string) {
        this.chartBind.next(c);
    }
    getChart():Observable<string> {
        return this.chartBind.asObservable();
    }
    
    // -+-+-+-+-+-+-+-+-+ frequency  getter/setter  -+-+-+-+-+-+-+-+-+
    private frequency: string;
    private freqBind: Subject<string> = new Subject<string>();
    setFrequency() {
        this.frequency = "newOne";
        this.freqBind.next("newOne");
    }
    getFrequency(): Observable<string> {
        return this.freqBind.asObservable();
    }

    // -+-+-+-+-+-+-+-+-+ toaster  getter/setter  -+-+-+-+-+-+-+-+-+
    private toast: Toast;
    private toastBind: Subject<Toast> = new Subject<Toast>();    
    public showToast(t: Toast) {
        this.toast = t;
        this.toastBind.next(t);
    }
    public getToast(): Observable<Toast> {
        return this.toastBind.asObservable();
    }

    // -+-+-+-+-+-+ region section -+-+-+-+-+-+-+
    private _regionSubject: Subject<Array<IRegion>> = new Subject<Array<IRegion>>(); //array of regions that sidebar and mainview use
    private _selectedRegion: IRegion; //selectedregion 

    public get regions(): Observable<Array<IRegion>> {
        //getter (regions)
        return this._regionSubject.asObservable();
    }
    
    //setter (selectedRegion)
    public set selectedRegion(v: IRegion) {
        if (v == this._selectedRegion) return
        this._selectedRegion = v;
        this._selectedRegRegions = [];
        this._selectedStatGroups = [];
        this._selectedRegressionTypes = [];
        this.chartBind.next("");
        //go get all the other stuff (regressionregions, regressiontypes,statisticgroups and scenarios
        this.initializeRegion();
    };
    //getter (selectedRegion)
    public get selectedRegion(): IRegion{
        return this._selectedRegion;
    };
    //get all regions
    private getRegions():void {
    let options = new RequestOptions({headers:CONFIG.MIN_JSON_HEADERS});
    this._http.get(CONFIG.REGION_URL, options)
        .map(res=> <Array<IRegion>>res.json()).subscribe(r=>{
        this._regionSubject.next(r);
        }, error => this.handleError);   
    }
    // -+-+-+-+-+-+ end region section -+-+-+-+-+-+-+

    // -+-+-+-+-+-+ regressionregion -+-+-+-+-+-+-+
    private _regressionRegionSubject: Subject<Array<IRegressionRegion>> = new Subject<Array<IRegressionRegion>>();
    public get regressionRegions(): Observable<Array<IRegressionRegion>> {
        return this._regressionRegionSubject.asObservable();
    }

    private _selectedRegRegions: Array<IRegressionRegion>;   
    //setter (selectedRegion)
    public set selectedRegRegions(v: Array<IRegressionRegion>) {
        this.chartBind.next("");
        if (v.length > 0) {
            this._selectedRegRegions = v;
            let srr: Array<number> = [];
            this._selectedRegRegions.forEach((rr) => {
                srr.push(rr.ID);
            });
            //now update statisticGroups, regressionTypes if there are selectedRegRegions
            this._regRegionIdParams = srr.length >= 0 ? srr.join(",") : '';            

            //params for regressionTypes and statisticGroups
            let regTypeParams: URLSearchParams = new URLSearchParams();
            regTypeParams.set('regressionregions', this._regRegionIdParams);
            regTypeParams.set('statisticgroups', this._statGrpIdParams);
            this.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams).subscribe(rt => {
                //format all reg type stuff
                this.formatRegTypeStuff(rt);

                //params for statistic groups
                let statGrpParams: URLSearchParams = new URLSearchParams();
                statGrpParams.set('regressionregions', this._regRegionIdParams);
                statGrpParams.set('regressiontypes', this._regTypeIdParams);
                this.getRegionStatisticGrps(this.selectedRegion.ID, statGrpParams).subscribe(sg => {
                    this.formatStatisticGrpStuff(sg);
                
                    //params for scenarios
                    let scenarioParams: URLSearchParams = new URLSearchParams();
                    scenarioParams.set('regressionregions', this._regRegionIdParams);
                    scenarioParams.set('regressiontypes', this._regTypeIdParams);   
                    scenarioParams.set('statisticgroups', this._statGrpIdParams);
                    scenarioParams.set('unitsystems', '2');
                    this.getRegionScenario(this.selectedRegion.ID, scenarioParams) //get scenarios 
                }, error => this.handleError);   //get StatisticGroups
            }, error => this.handleError); //get regressionRegions                       
        }//v.lenght > 0
        else {
            //they cleared it
            this._selectedRegRegions = [];
            //now update statisticGroups, regressionTypes if there are selectedRegRegions
            let regTypeParams: URLSearchParams = new URLSearchParams();
            regTypeParams.set('statisticgroups', this._statGrpIdParams);
            this.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams).subscribe(rt=> {
                this.formatRegTypeStuff(rt);

                //params for statistic groups
                let statGrpParams: URLSearchParams = new URLSearchParams();
                statGrpParams.set('regressiontypes', this._regTypeIdParams);
                this.getRegionStatisticGrps(this.selectedRegion.ID, statGrpParams).subscribe(sg => {
                    this.formatStatisticGrpStuff(sg);

                    //params for scenarios
                    let scenarioParams: URLSearchParams = new URLSearchParams();
                    scenarioParams.set('regressiontypes', this._regTypeIdParams);
                    scenarioParams.set('statisticgroups', this._statGrpIdParams);
                    scenarioParams.set('unitsystems', '2');
                    this.getRegionScenario(this.selectedRegion.ID, scenarioParams); //get scenarios
                }, error => this.handleError);   //get StatisticGroups            
            }, error => this.handleError); //get RegressionTypes
        }        
    };
    //getter (selectedRegRegion)
    public get selectedRegRegions(): Array<IRegressionRegion> {
        return this._selectedRegRegions;
    };
    //once http.get.map is done.. the .subcribe calls this function to get everything formatted
    private formatRegRegionStuff(rr:Array<IRegressionRegion>){
        rr.forEach((r) => {
            r.id = r.ID; r.name = r.Name;
        });
        //remove from _selectedRegRegions if not in response.
        if (this._selectedRegRegions != undefined) {
            for (var srr = this._selectedRegRegions.length; srr--;) {
                let RRSind = rr.map(function (eachrr) { return eachrr.ID; }).indexOf(this._selectedRegRegions[srr].ID);
                if (RRSind < 0)
                    this._selectedRegRegions.splice(srr, 1);
            };
            //repopulate param string comma sep IDs
            let regRegIDarray: Array<number> = new Array<number>();
            this._selectedRegRegions.forEach((rt) => {
                regRegIDarray.push(rt.ID); //pushing each ID into arrayof numbers to then join as comma sep string for parameters
            });
            this._regRegionIdParams = regRegIDarray.length >= 0 ? regRegIDarray.join(",") : '';
        };
        this._regressionRegionSubject.next(rr);
    }
    // -+-+-+-+-+-+ end regressionRegion section -+-+-+-+-+-+-+

    // -+-+-+-+-+-+ statisticgroups section -+-+-+-+-+-+-+-+-+-+
    private _statisticGroupSubject: Subject<Array<IStatisticGroup>> = new Subject<Array<IStatisticGroup>>();
    public get statisticGroups(): Observable<Array<IStatisticGroup>> {
        return this._statisticGroupSubject.asObservable();
    }

    private _selectedStatGroups: Array<IStatisticGroup>;
    //setter (selectedStatisticgroup)
    public set selectedStatGroups(v: Array<IStatisticGroup>) {
        this.chartBind.next("");
        if (v.length > 0) {
            this._selectedStatGroups = v;
            let ssg: Array<number> = [];
            this._selectedStatGroups.forEach((ss) => {
                ssg.push(ss.ID);
            });
            //now update regressionRegions, regressionTypes if there are selectedStatisticGroups
            this._statGrpIdParams = ssg.length >= 0 ? ssg.join(",") : '';

            //params for regressionTypes
            let regTypeParams: URLSearchParams = new URLSearchParams();
            regTypeParams.set('regressionregions', this._regRegionIdParams);
            regTypeParams.set('statisticgroups', this._statGrpIdParams);
            this.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams).subscribe(rt => {
                //format all reg type stuff
                this.formatRegTypeStuff(rt);
                
                //params for regressionRegions
                let regRegionParams: URLSearchParams = new URLSearchParams();
                regRegionParams.set('statisticgroups', this._statGrpIdParams);
                regRegionParams.set('regressiontypes', this._regTypeIdParams);
                this.getRegionRegressionRegions(this.selectedRegion.ID, regRegionParams).subscribe(rr => {
                    //format all reg regions stuff
                    this.formatRegRegionStuff(rr);

                    //params for scenarios
                    let scenarioParams: URLSearchParams = new URLSearchParams();            
                    scenarioParams.set('regressionregions', this._regRegionIdParams);
                    scenarioParams.set('regressiontypes', this._regTypeIdParams);
                    scenarioParams.set('statisticgroups', this._statGrpIdParams);
                    scenarioParams.set('unitsystems', '2');
                    this.getRegionScenario(this.selectedRegion.ID, scenarioParams); //get scenarios
                }, error => this.handleError);  //getRegionRegressionRegions                      
            }, error => this.handleError); //getRegionRegressionTypes
        }//v.lenght > 0
        else {
            //they cleared it
            this._selectedStatGroups = [];
            //now update statisticGroups, regressionTypes if there are selectedRegRegions
            let regTypeParams: URLSearchParams = new URLSearchParams();
            regTypeParams.set('regressionregions', this._regRegionIdParams);
            this.getRegionRegressionTypes(this.selectedRegion.ID, regTypeParams).subscribe(rt => {
                //format all reg type stuff
                this.formatRegTypeStuff(rt);
                
                //params for regressionRegions
                let regRegionsParams: URLSearchParams = new URLSearchParams();
                regRegionsParams.set('regressiontypes', this._regTypeIdParams);
                this.getRegionRegressionRegions(this.selectedRegion.ID, regRegionsParams).subscribe(rr=>{
                    //format all reg regions stuff
                    this.formatRegRegionStuff(rr);

                    //params for scenarios
                    let scenarioParams: URLSearchParams = new URLSearchParams();
                    scenarioParams.set('regressiontypes', this._regTypeIdParams);
                    scenarioParams.set('regressionregions', this._regRegionIdParams);
                    scenarioParams.set('unitsystems', '2');
                    this.getRegionScenario(this.selectedRegion.ID, scenarioParams); //get scenarios
                }, error => this.handleError);   //get getRegionRegressionRegions            
            }, error => this.handleError); //get RegressionTypes           
        }
    };
    //getter (selectedStatisticgroup)
    public get selectedStatGroups(): Array<IStatisticGroup> {
        return this._selectedStatGroups;
    };
    //once http.get.map is done.. the .subcribe calls this function to get everything formatted
    private formatStatisticGrpStuff(sg:Array<IStatisticGroup>) {
        sg.forEach((s) => {
            s.id = s.ID; s.name = s.Name;                    
        });
        //remove from _selectedStatGroups if not in response.
        if (this._selectedStatGroups != undefined) {
            for (var si = this._selectedStatGroups.length; si--;) {
                let SSind = sg.map(function (eachsg) { return eachsg.ID; }).indexOf(this._selectedStatGroups[si].ID);
                if (SSind < 0)
                    this._selectedStatGroups.splice(si, 1);
            };
            //repopulate param string comma sep IDs
            let statGrpIDarray: Array<number> = new Array<number>();
            this._selectedStatGroups.forEach((rt) => {
                statGrpIDarray.push(rt.ID); //pushing each ID into arrayof numbers to then join as comma sep string for parameters
            });                    
            this._statGrpIdParams = statGrpIDarray.length >= 0 ? statGrpIDarray.join(",") : '';
        };
        this._statisticGroupSubject.next(sg);
    }
    // -+-+-+-+-+-+ end statisticgroups section -+-+-+-+-+-+-+-+-+-+

    // -+-+-+-+-+-+ regressionTypes -+-+-+-+-+-+-+-+-+-+-+-+ 
    private _regressionTypeSubject: Subject<Array<IRegressionType>> = new Subject<Array<IRegressionType>>();
    private _selectedRegressionTypes: Array<IRegressionType>;

    public get regressionTypes(): Observable<Array<IRegressionType>> {
        return this._regressionTypeSubject.asObservable();
    }
    //setter (selectedRegressionType)
    public set selectedRegressionTypes(v: Array<IRegressionType>) {
        this.chartBind.next("");
        if (v.length > 0) {
            this._selectedRegressionTypes = v;
            let srt: Array<number> = [];
            this._selectedRegressionTypes.forEach((rt) => {
                srt.push(rt.ID);
            });
            //now update regressionRegions, regressionTypes if there are selectedStatisticGroups
            this._regTypeIdParams = srt.length >= 0 ? srt.join(",") : '';

            let statGrpParams: URLSearchParams = new URLSearchParams();
            statGrpParams.set('regressionregions', this._regRegionIdParams);
            statGrpParams.set('regressiontypes', this._regTypeIdParams);
            this.getRegionStatisticGrps(this.selectedRegion.ID, statGrpParams).subscribe(sg =>{
                this.formatStatisticGrpStuff(sg);

                //params for regRegions
                let regRegionParams: URLSearchParams = new URLSearchParams();
                regRegionParams.set('statisticgroups', this._statGrpIdParams);
                regRegionParams.set('regressiontypes', this._regTypeIdParams);
                this.getRegionRegressionRegions(this.selectedRegion.ID, regRegionParams).subscribe(rr=> {
                    this.formatRegRegionStuff(rr);

                    //params for scenarios
                    let scenarioParams: URLSearchParams = new URLSearchParams();
                    scenarioParams.set('regressionregions', this._regRegionIdParams);
                    scenarioParams.set('regressiontypes', this._regTypeIdParams);
                    scenarioParams.set('statisticgroups', this._statGrpIdParams);
                    scenarioParams.set('unitsystems', '2');
                    this.getRegionScenario(this.selectedRegion.ID, scenarioParams); //get scenarios
                }, error => this.handleError);   //get regressionRegions
            }, error => this.handleError); //get RegressionTypes
        }//v.lenght > 0
        else {
            //they cleared it
            this._selectedRegressionTypes = [];
            //now update statisticGroups, regressionTypes if there are selectedRegRegions
            let regTypeParams: URLSearchParams = new URLSearchParams();
            regTypeParams.set('regressionregions', this._regRegionIdParams);
            this.getRegionStatisticGrps(this.selectedRegion.ID, regTypeParams).subscribe(sg => {
                this.formatStatisticGrpStuff(sg);

                //params for reg regions
                let regRegionsParams: URLSearchParams = new URLSearchParams();
                regRegionsParams.set('statisticgroups', this._statGrpIdParams);
                this.getRegionRegressionRegions(this.selectedRegion.ID, regRegionsParams).subscribe(rr => {
                    this.formatRegRegionStuff(rr);

                    //params for scenarios
                    let scenarioParams: URLSearchParams = new URLSearchParams();
                    scenarioParams.set('statisticgroups', this._statGrpIdParams);
                    scenarioParams.set('regressionregions', this._regRegionIdParams);
                    scenarioParams.set('unitsystems', '2');
                    this.getRegionScenario(this.selectedRegion.ID, scenarioParams); //get scenarios
                },error => this.handleError);   //get regressionregions
            }, error => this.handleError); //get RegressionTypes
        }
    };
    //getter (selectedRegressionType)
    public get selectedRegressionTypes(): Array<IRegressionType> {
        return this._selectedRegressionTypes;
    };
    //once http.get.map is done.. the .subcribe calls this function to get everything formatted
    formatRegTypeStuff(rt:Array<IRegressionType>){
        rt.forEach((r) => {
            r.id = r.ID; r.name = r.Name;
        });
        //remove from _selectedStatGroups if not in response.
        if (this._selectedRegressionTypes != undefined) {
            for (var srt = this._selectedRegressionTypes.length; srt--;) {
                let RTSind = rt.map(function (eachrt) { return eachrt.ID; }).indexOf(this._selectedRegressionTypes[srt].ID);
                if (RTSind < 0)
                    this._selectedRegressionTypes.splice(srt, 1);
            };
            //repopulate param string comma sep IDs
            let regTypeIDarray: Array<number> = new Array<number>();
            this._selectedRegressionTypes.forEach((rt) => {
                regTypeIDarray.push(rt.ID); //pushing each ID into arrayof numbers to then join as comma sep string for parameters
            });
            this._regTypeIdParams = regTypeIDarray.length >= 0 ? regTypeIDarray.join(",") : '';
        };
        this._regressionTypeSubject.next(rt);                
    }
    // -+-+-+-+-+-+ end regressionTypes section -+-+-+-+-+-+-+-+-+-+

    // -+-+-+-+-+-+ Scenarios section -+-+-+-+-+-+-+-+-+-+
    private _scenarioSubject: Subject<Array<IScenario>> = new Subject<Array<IScenario>>();    
    public get scenarios(): Observable<Array<IScenario>> {
        return this._scenarioSubject.asObservable();
    } 
    public setScenarios(s:Array<IScenario>){
        this._scenarioSubject.next(s);
        this.chartBind.next("");
    }  
    // -+-+-+-+-+-+ end Scenarios section -+-+-+-+-+-+-+-+-+-+

    //region has been selected, populate all other multiselects and get scenarios
    private initializeRegion(): void {        
        this.getRegionRegressionRegions(this.selectedRegion.ID).subscribe(rr => { this.formatRegRegionStuff(rr);}); //get RegressionRegions
        this.getRegionStatisticGrps(this.selectedRegion.ID).subscribe(sg=> { this.formatStatisticGrpStuff(sg);}); //get StatisticGroups
        this.getRegionRegressionTypes(this.selectedRegion.ID).subscribe(rt => {this.formatRegTypeStuff(rt);}); //get RegressionTypes
        let scenarioParams: URLSearchParams = new URLSearchParams();
        scenarioParams.set('unitsystems', '2');
        this.getRegionScenario(this.selectedRegion.ID, scenarioParams); //get scenarios
    }

    // -+-+-+-+-+-+-+-+-+-+-+-+ http GETs -+-+-+-+-+-+-+-+-+-+-+-+
    //get regressionRegions by region
    private getRegionRegressionRegions(id: number, searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS, search:searchArgs });
         return this._http.get(CONFIG.REGION_URL + '/' + id + '/regressionregions', options)
            .map(res => <Array<IRegressionRegion>>res.json())      
    }

    //get regressiontypes by region
    private getRegionRegressionTypes(id: number, searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.get(CONFIG.REGION_URL + '/' + id + '/regressiontypes', options)
            .map(res => <IRegressionType[]>res.json())          
    }

    //get statisticgroups by region
    private getRegionStatisticGrps(id: number, searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.get(CONFIG.REGION_URL + '/' + id + '/statisticgroups', options)
            .map(res => <IStatisticGroup[]>res.json())           
    }

    //get scenarios by region
    private getRegionScenario(id: number, searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS, search: searchArgs });
        return this._http.get(CONFIG.REGION_URL + '/' + id + '/scenarios', options)
            .map(res => <IScenario[]>res.json())
            .subscribe(s => {
                s.forEach(scen => {
                    //get citations
                    let i = scen.Links[0].Href.indexOf('?');
                    let param = scen.Links[0].Href.substring(i + 1);
                    this.getCitations(new URLSearchParams(param)).subscribe(c => {
                        scen.Citations = c;
                    });
                    //clear Parameter.'Value'
                    scen.RegressionRegions.forEach((rr) => {
                        rr.Parameters.forEach((p) => {
                            p.Value = null;
                        });
                    });
                });
                this._scenarioSubject.next(s);
            }, error => this.handleError);
    }

    //calculate Scenarios (POST)
    postScenarios(id: number, s: IScenario[], searchArgs?: URLSearchParams) {
        //let body = JSON.stringify(s);
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS, search: searchArgs });

        return this._http.post(CONFIG.REGION_URL + '/' + id + '/scenarios/estimate', s, options)
            .map(sResult => <IScenario[]>sResult.json())
            .subscribe(sResult => {
                sResult.forEach(scen => {
                    if (scen.RegressionRegions.length > 0){
                        //get citations
                        let i = scen.Links[0].Href.indexOf('?');
                        let param = scen.Links[0].Href.substring(i + 1);
                        this.getCitations(new URLSearchParams(param)).subscribe(c => {
                            scen.Citations = c;
                        }, error => this.handleError);                    
                    }      
                });
                this._scenarioSubject.next(sResult);
            }, error => this.handleError);
    }

    private getCitations(searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS, search: searchArgs });

        return this._http.get(CONFIG.CITATION_URL, options)
            .map(cit => <ICitation[]>cit.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
  
}
