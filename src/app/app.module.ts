import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { SimpleMapComponent } from './simple-map/simple-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCaIBbX-gTbdOHqpJg9PCpt7YimjuCiNoM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
