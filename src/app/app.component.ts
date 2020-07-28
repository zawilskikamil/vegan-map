import { Component, OnInit } from '@angular/core';
import { CitiesService } from './_services/cities.service'
import { City } from './shared/module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vegan-map';

  private selectedCityId: number;
  private cities: City[] = [];

  constructor(private citiesService: CitiesService) {
  }

  ngOnInit() {
    this.citiesService.getCities().subscribe((res: City[]) => {
      this.cities = res;
    })
  }

  onSelectedCity(selectedCityId: number) {
    this.selectedCityId = selectedCityId;
  }
}
