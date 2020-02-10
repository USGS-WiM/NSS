import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ShapeService } from '../../shared/services/shape.service';
import * as shp from 'shpjs';
import { GeojsonService } from '../../shared/services/geojson.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public map;
  private polygon;
  private input;
  private file;

  constructor(private shapeService: ShapeService,
    private geojsonService: GeojsonService) { }

  ngOnInit() {
    this.initMap();
    this.shapeService.getStateShapes().subscribe(polygon => {
      this.polygon = polygon;
      this.initPolygonLayer();
    });
  }

  private initMap(): void {
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

  private initPolygonLayer() {
    const polygonLayer = L.geoJSON(this.polygon, {
      style: (feature) => ({
        weight: 3,
        opacity: 0.5,
        color: '#000000',
        fillOpacity: 0.8,
        fillColor: '#fc8d62'
      })
    });

    // this.map.addLayer(polygonLayer);
    // this.map.fitBounds(polygonLayer.getBounds());
  }

  // async SHPtoGEOJSON(form: any) {
  //   await this.GeojsonService.readFileContent(file)
  //     .toPromise().then(
  //       res => {
  //         shp(res).then(function (geojson) {
  //           console.log(geojson);
  //         })
  //       }
  //     );
  // }

  public loadFile() {
    console.log("hey")

    this.input = document.getElementById('fileinput');
    if (!this.input.files[0]) {
      alert("Please select a file.");
    }
    else {

      console.log("here")
      this.file = this.input.files[0];
      console.log(this.file);
      shp(this.file).then(function (geojson) {
        //L.geoJSON(geojson).addTo(this.map);
        //this.map.fitBounds()

        const newLayer = L.geoJSON(geojson, {
          style: (feature) => ({
            weight: 3,
            opacity: 0.5,
            color: '#000000',
            fillOpacity: 0.8,
            fillColor: '#fc8d62'
          })
        });

        this.map.addLayer(newLayer);
        this.map.fitBounds(newLayer.getBounds());
      });
    }
  }



}
