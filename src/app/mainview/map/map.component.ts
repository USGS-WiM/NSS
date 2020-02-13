import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ShapeService } from '../../shared/services/shape.service';
import * as shp from 'shpjs';
import { GeojsonService } from '../../shared/services/geojson.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public map;
  private input;
  private file;

  constructor(private geojsonService: GeojsonService) { }

  ngOnInit() {
    
    // Initialize basemap layers
    const tileLayer_topography = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    });
    const tileLayer_streets = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
    });
    const tileLayer_grayscale = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
    });
    const tileLayer_satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    // Initialize map 
    this.map = new L.Map('map', {
      center: new L.LatLng(39.8283, -98.5795),
      zoom: 4,
      layers: [tileLayer_streets]
    });

    // Create basemap collection
    const baseMaps = {
      'Streets': tileLayer_streets,
      'Topography': tileLayer_topography,
      'Grayscale': tileLayer_grayscale,
      'Satellite': tileLayer_satellite
    };

    // Add basemap control to the map
    L.control.layers(baseMaps).addTo(this.map);
  }

  public addGeojsonToMap(polygon: any) {
    console.log("hello");
    const polygonLayer = L.geoJSON(polygon, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#000000',
        fillOpacity: 0.8,
        fillColor: '#fc8d62'
      })
    });

    this.map.addLayer(polygonLayer);
    this.map.fitBounds(polygonLayer.getBounds());
  }

  async SHPtoGEOJSON(form: any) {
    const self = this;
    await this.geojsonService.readFileContent(this.file)
      .toPromise().then(
        res => {
          shp(res).then(function (geojson) {
            console.log(geojson);
            self.addGeojsonToMap(geojson);
          })
        }
      );
  }

  public loadFile() {
    this.input = document.getElementById('fileinput');
    if (!this.input.files[0]) {
      alert("Please select a file.");
    }
    else {
      this.file = this.input.files[0];
      console.log(this.file);
      this.SHPtoGEOJSON(this.file);
    }
  }

}
