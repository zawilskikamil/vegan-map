import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../shared/module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private citiesUrl: string = 'http://192.168.10.10/api/cities';

  constructor(private http: HttpClient) {
  }

  public getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.citiesUrl) ;
  }

}
