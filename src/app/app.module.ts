import { MarkerInfoComponent } from './marker-info/marker-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { SimpleMapComponent } from './simple-map/simple-map.component';
import { RouterModule } from '@angular/router';

import { routesConfig } from './routes-config';

@NgModule({
  declarations: [
    AppComponent,
    SimpleMapComponent,
    MarkerInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaIBbX-gTbdOHqpJg9PCpt7YimjuCiNoM'
    }),
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
