import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation-map',
  templateUrl: './geolocation-map.component.html',
  styleUrls: ['./geolocation-map.component.css']
})
export class GeolocationMapComponent implements OnInit {
  public lat: number;
  public lng: number;

  constructor() { }

  ngOnInit() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        });
    }
  }

}
