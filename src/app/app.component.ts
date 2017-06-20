import { Component } from '@angular/core';
import { GeocodingService } from './geocoding.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GeocodingService ]
})
export class AppComponent {
  zoom: number = 10;
  lat: number = 43.825588;
  lng: number = -72.0108029;
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;
  result: any;
  inputtedLat: any;
  inputtedLng: any;

  markers: marker[] = [
    {
      name: 'Company One',
      lat: 43.70657814090034,
      lng: -71.85699430624999,
      draggable: false
    }, {
      name: 'Company Two',
      lat: 43.825588,
      lng: -72.0108029,
      draggable: true
    }
  ];

  constructor(private geocodingService: GeocodingService) {

  }

  clickedMarker(marker: marker, index: number) {
    console.log('Clicked Marker: ' + marker.name + ' at index '+ index);
  }

  mapClicked($event: any) {
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
    this.markers.push(newMarker);
  }

  markerDragEnd(marker: any, $event:any) {
    console.log('dragEnd', marker, $event)

    var updatedMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }

  // addMarker() {
  //   if(this.markerDraggable === 'Yes') {
  //     var isDraggable = true;
  //   } else {
  //     var isDraggable = false;
  //   }
  //
  //   var newMarker = {
  //     name: this.markerName,
  //     lat: parseFloat(this.markerLat),
  //     lng: parseFloat(this.markerLng),
  //     draggable: isDraggable
  //   }
  //
  //   this.markers.push(newMarker);
  // }

  getLocation(userInput) {
    this.geocodingService.insertLocation(userInput).subscribe(response => {
      this.result = response;
      this.inputtedLat = response.results[0].geometry.location.lat;
      this.inputtedLng = response.results[0].geometry.location.lng;
      console.log(this.inputtedLat);
      console.log(this.inputtedLng);
      console.log(this.result);

      var newMarker = {
        name: 'test',
        lat: this.inputtedLat,
        lng: this.inputtedLng,
        draggable: false
      }
      this.markers.push(newMarker);
    })
  }

  // addMarker() {
  //   var newMarker = {
  //     name: 'test',
  //     lat: this.inputtedLat,
  //     lng: this.inputtedLng,
  //     draggable: false
  //   }
  //   console.log('addMarker success', this.inputtedLat)
  //   console.log('newMarker: ', newMarker)
  //   this.markers.push(newMarker);
  // }

}

// Marker Type

interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
