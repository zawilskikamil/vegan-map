import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgElement, WithProperties } from '@angular/elements';
import { MapPopupComponent } from '../components/map-popup/map-popup.component'
import * as L from 'leaflet';
import { Place } from '../shared/module';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  private placesUrl: string = 'http://192.168.10.10/api/places';
  private markers: Object[];
  constructor(private http: HttpClient) {
  }

  makeCapitalMarkers(map: L.map, selectedCity: number): void {
    // TODO fix this ugly workaround for clearing markers 
    map.eachLayer((layer) => {
      if(!layer._url){
        layer.remove();
      }
    });

    let url = this.placesUrl;
    let params = null;
    if (!!selectedCity) {
      params = new HttpParams().set('city_id', selectedCity.toString());
    }
    this.http.get(url, { params: params }).subscribe((res: Place[]) => {
      for (const c of res) {
        const lat = c.lat;
        const lon = c.lon;
        const icon = this.getIcon(c);
        const marker = L.marker([lon, lat], { icon: icon }).addTo(map);

        marker.bindPopup(fl => this.createPopupComponentWithMessage(c));
        marker.addTo(map);
      }
    });
  }

  public createPopupComponentWithMessage(place: Place) {
    const popupEl: NgElement & WithProperties<MapPopupComponent> = document.createElement('app-map-popup') as any;
    // Listen to the close event
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
    popupEl.place = place;
    // Add to the DOM
    document.body.appendChild(popupEl);
    return popupEl;
  }

  private getIcon(place: Place) {
    let iconUrl = 'assets/icons/marker-icon-2x-grey.png'
    if (place.vegan_level === 0) {
      iconUrl = 'assets/icons/marker-icon-2x-green.png'
    } else if (place.vegan_level === 1) {
      iconUrl = 'assets/icons/marker-icon-2x-blue.png'
    }

    return new L.Icon({
      iconUrl: iconUrl,
      shadowUrl: 'assets/icons/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  }
} 