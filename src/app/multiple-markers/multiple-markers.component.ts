import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-markers',
  templateUrl: './multiple-markers.component.html',
  styleUrls: ['./multiple-markers.component.css']
})
export class MultipleMarkersComponent {
  public baseLatLon = new LatLon(50.072071, 14.434494);
  public coords:LatLon[] = [
    new LatLon(50.072071, 14.434494),
    new LatLon(50.092071, 14.454494),
    new LatLon(50.112071, 14.475494)
  ];

  constructor() { }

}

class LatLon {
  constructor(private lat:number, private lon:number) {}
}
