import { AfterViewInit, Component, OnInit } from '@angular/core';
import { latLng, Map, tileLayer, icon, divIcon, Marker, Popup, marker } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as L from 'leaflet';

@Component({
  selector: 'map-tab',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})
export class MapPage implements AfterViewInit, OnInit {
  public map: Map;
  options = {
    layers: [
      tileLayer('https://m1.mapserver.mapy.cz/turist-m/{z}-{x}-{y}', { maxZoom: 19, attribution: '&copy; <a href="http://www.seznam.cz">Seznam.cz, a.s.</a>, <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' })
    ],
    zoom: 12,
    center: latLng(50.44176389056172, 14.08721923828125)
  };
  // openedPubs = L.layerGroup([]);
  // closedPubs = L.layerGroup([]);
  // removedPubs = L.layerGroup([]);
  // otherPubs = L.layerGroup([]);
  // layers = [this.openedPubs, this.closedPubs, this.removedPubs, this.otherPubs];
  // isLoading = false;
  // loadedNadrazky: Nadrazka[];
  // overlayMaps = {
  //   Otevřené: this.openedPubs,
  //   Zavřené: this.closedPubs,
  //   Zrušené: this.removedPubs,
  //   Ostatní: this.otherPubs,
  // };

  ngOnInit() {
    // this.nadrazkySub = this.nadrazkyService.nadrazky.subscribe(nadrazky => {
    //   this.loadedNadrazky = nadrazky;
    // });
  }

  constructor(private geolocation: Geolocation) { }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }


  onMapReady(map: Map) {
    this.map = map;
      this.geolocation.getCurrentPosition().then((resp) => {
        console.log('Current position: lat: ' + resp.coords.latitude + ', lng: ' + resp.coords.longitude);
        this.map.panTo([resp.coords.latitude, resp.coords.longitude]);
        // resp.coords.latitude
        // resp.coords.longitude
      }).catch((error) => {
        console.log('Error getting location', error);
      });
  }

}
