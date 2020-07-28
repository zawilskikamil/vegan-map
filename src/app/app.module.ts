import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MapPopupComponent } from './components/map-popup/map-popup.component';
import { MarkerService } from './_services/marker.service';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkListElementComponent } from './components/map-popup/link-list-element/link-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapPopupComponent,
    LinkListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [
    MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const MapPopupElement = createCustomElement(MapPopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('app-map-popup', MapPopupElement);
  }
}
