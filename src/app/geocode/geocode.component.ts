import { Component, OnInit } from '@angular/core';
import { GeocodingService } from '../geocoding.service';

@Component({
  selector: 'app-geocode',
  templateUrl: './geocode.component.html',
  styleUrls: ['./geocode.component.css'],
  providers: [ GeocodingService ]
})
export class GeocodeComponent implements OnInit {
  result: any;
  lat: any;
  lng: any;

  constructor(private geocodingService: GeocodingService) { }

  ngOnInit() { }

  // getLocation(userInput) {
  //   this.geocodingService.insertLocation(userInput).subscribe(response => {
  //     this.result = response;
  //     this.lat = response.results[0].geometry.location.lat;
  //     console.log(this.lat);
  //     console.log(this.result);
  //   })
  // }

}
