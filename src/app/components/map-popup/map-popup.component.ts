import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../shared/module';

@Component({
  selector: 'app-map-popup',
  templateUrl: './map-popup.component.html',
  styleUrls: ['./map-popup.component.scss']
})
export class MapPopupComponent implements OnInit {

  @Input() place: Place;

  constructor() { }
  ngOnInit(): void {
    console.log(this.place);
  }

}
