import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { City } from 'src/app/shared/module';

@Component({
  selector: 'app-side-map-menu',
  templateUrl: './side-map-menu.component.html',
  styleUrls: ['./side-map-menu.component.scss']
})
export class SideMapMenuComponent implements OnChanges {
  @Input() cities: City[]
  @Output() selectedCity = new EventEmitter<number>();

  private myControl = new FormControl();
  private filteredOptions: Observable<string[]>;
  private citiesStringArray: string[];

  ngOnChanges() {
    this.citiesStringArray = this.cities.map(c => c.name);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );  
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.citiesStringArray.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  selectCity(city){
    const city_id = this.cities.find(option => option.name == city).id;
    this.selectedCity.emit(city_id);
  }
}
