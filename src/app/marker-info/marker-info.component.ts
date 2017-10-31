import { Component } from '@angular/core';

@Component({
  selector: 'app-marker-info',
  templateUrl: './marker-info.component.html',
  styleUrls: ['./marker-info.component.css']
})
export class MarkerInfoComponent {
  public lat: number = 50.072071;
  public lng: number = 14.434494;
  public info:string = "This is some test info message!";

  constructor() { }

}
