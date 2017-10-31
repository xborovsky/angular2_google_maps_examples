import { MarkerInfoComponent } from './marker-info/marker-info.component';
import { SimpleMapComponent } from './simple-map/simple-map.component';
import { Routes } from '@angular/router';

export const routesConfig:Routes = [
    { path : '', redirectTo : 'simple', pathMatch : 'full' },
    { path : 'simple', component : SimpleMapComponent },
    { path : 'marker-info', component : MarkerInfoComponent }
];
