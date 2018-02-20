import { Injectable } from '@angular/core';
import { Map, geoJSON } from 'leaflet'
import * as L from 'leaflet';
import * as esri from 'esri-leaflet';
import { LoaderService } from '../shared/components/loader.service';
interface Ilayers {
        name: string;
        id: any;
}
@Injectable()
export class MapService {
    public map: Map;
    public baseMaps: any;
    public mapServerDetails: any;
    public mapRegionsLayer: any;
    public mapRegionURL: string;
    public regionsLayersArr: Array<Ilayers>;
    
    constructor(private _loaderService:LoaderService,){
        this.baseMaps = {
            OpenStreetMap: L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
                maxZoom: 20,
                attribution: 'Imagery from <a href="https://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }),
            Topo: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
                attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
            }),
            CartoDB: L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
                attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='https://cartodb.com/attributions'>CartoDB</a>"
            }),
            Satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'//,
                //maxZoom: 10
            }),
            Terrain: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
                maxZoom: 13
            }),
            Gray: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
                maxZoom: 16
            })
        };

        this.mapRegionURL = "https://testgis.streamstats.usgs.gov/arcgis/rest/services/nss/regions/MapServer";
        this.mapServerDetails = {
            url: this.mapRegionURL,
            "visible": true, 
            layers: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],
            opacity : 0.8
        }; 
       /* this.mapServerDetails.on('loading', (event) => {
            this._loaderService.showLoader();
        });
        this.mapServerDetails.on('load', (event) => {
            this._loaderService.hideLoader();
        });
        esri.request(this.mapRegionURL, {}, (error, response)  => {
            this.mapServerDetails = response;
            this.mapRegionsLayer = response.layers;
        });*/
    	this.regionsLayersArr = this.populateRegionsArray();
    } // end constructor()
    
    // when region is chosen, the map will update to only show that region. if "", show full mapservice
    public updateMapLayer(stateAbbrev){
        let id = this.regionsLayersArr.filter(r => {return r.name == stateAbbrev;})[0].id
        //this.mapServerDetails.setLayers([id]);
        return id;
    }
    private populateRegionsArray(): Array<Ilayers>{
        let regionsLayers: Array<Ilayers> = [
            { name: "US", id: '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39' },
            { name: "AK", id: 0},
            { name: "AL", id: 1},
            { name: "AR", id: 2},
            { name: "AZ", id: 3},
            { name: "CA", id: 4},
            { name: "CO", id: 5},
            { name: "CT", id: 6},
            { name: "DE", id: 7},
            { name: "GA", id: 8},
            { name: "HI", id: 9},
            { name: "IA", id: 10},
            { name: "ID", id: 11},
            { name: "IL", id: 12},
            { name: "IN", id: 13},
            { name: "KY", id: 14},
            { name: "KS", id: 15},
            { name: "MA", id: 16},
            { name: "MD", id: 17},
            { name: "ME", id: 18},
            { name: "MN", id: 19},
            { name: "MO", id: 20},
            { name: "MT", id: 21},
            { name: "NC", id: 22},
            { name: "ND", id: 23},
            { name: "NH", id: 24},
            { name: "NJ", id: 25},
            { name: "NM", id: 26},
            { name: "NY", id: 27},
            { name: "OH", id: 28},
            { name: "OK", id: 29},
            { name: "OR", id: 30},
            { name: "PA", id: 31},
            { name: "RI", id: 32},
            { name: "SC", id: 33},
            { name: "SD", id: 34},
            { name: "TN", id: 35},
            { name: "UT", id: 36},
            { name: "VA", id: 37},
            { name: "VT", id: 38},
            { name: "WA", id: 39}
        ];
        return regionsLayers;
    }
}
