import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GeocodingService {

  constructor(private http: Http) { }

  insertLocation(userInput) {
    var result =  this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+userInput+'&key=AIzaSyCWlu9d_33gpEvNB6FdA3G08ZjrQYi4ets').map(res => res.json());
    return result;
  }

}
