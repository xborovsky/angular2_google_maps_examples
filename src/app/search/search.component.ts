import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

declare var google: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  public lat:number = 50.072071;
  public lng:number = 14.434494;
  public searchText = new Subject<string>();

  private geocoder = new google.maps.Geocoder();

  constructor() {}

  ngOnInit(): void {
    this.searchText.debounceTime(400).distinctUntilChanged().subscribe(searchTextData => {
      this.geocoder.geocode({ 'address': searchTextData}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0] != null) {
            this.lat = results[0].geometry.location.lat();
            this.lng = results[0].geometry.location.lng();
          } else {
            alert("No address available");
          }
        }
      });
    });
  }

}
