import { Component, AfterViewInit, Input, OnChanges } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../../_services/marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnChanges {
  @Input() selectedCityId: number;
  private map;

  constructor(private markerService: MarkerService) { }
  private started = false;

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map, null);
    this.started = true;
  }

  ngOnChanges() {
    if (this.started) {
      this.markerService.makeCapitalMarkers(this.map, this.selectedCityId);
    }
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [52.2, 21],
      zoom: 12,
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    this.map.zoomControl.setPosition('bottomright');

    // new L.Control.Zoom({ position: 'bottomright' }).addTo(this.map);

  }
}