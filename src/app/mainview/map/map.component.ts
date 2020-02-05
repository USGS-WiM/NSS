import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map;

  constructor() { }

  ngOnInit() {

    const mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      // tslint:disable-next-line:max-line-length
      mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

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

}
