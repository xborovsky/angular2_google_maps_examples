import { MultipleMarkersComponent } from './multiple-markers/multiple-markers.component';
import { GeolocationMapComponent } from './geolocation-map/geolocation-map.component';
import { MarkerInfoComponent } from './marker-info/marker-info.component';
import { SimpleMapComponent } from './simple-map/simple-map.component';
import { Routes } from '@angular/router';

export const routesConfig:Routes = [
    { path : '', redirectTo : 'simple', pathMatch : 'full' },
    { path : 'simple', component : SimpleMapComponent },
    { path : 'marker-info', component : MarkerInfoComponent },
    { path : 'geolocation', component : GeolocationMapComponent },
    { path : 'multiple-markers', component : MultipleMarkersComponent }
];
