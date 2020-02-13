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
    const mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      // tslint:disable-next-line:max-line-length
      mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW1lZGVuYmxpayIsImEiOiJjanY1bDh0bDMxNWJnM3luNWhzb2RsMW0yIn0.uBxkotb36ZLCTAwIySGYPw';

    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });
    const grayscale = L.tileLayer(mbUrl, { id: 'mapbox.light', attribution: mbAttr });
    const streets = L.tileLayer(mbUrl, { id: 'mapbox.streets', attribution: mbAttr });

    this.map = new L.Map('map', {
      center: new L.LatLng(39.8283, -98.5795),
      zoom: 4,
      layers: [streets]
    });

    const baseMaps = {
      'Open Street Map': osm,
      'Grayscale': grayscale,
      'Streets': streets
    };

    L.control.layers(baseMaps).addTo(this.map);
  }

  private addGeojsonToMap(polygon) {
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
            this.addGeojsonToMap(geojson);
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
