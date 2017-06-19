import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zoom: number = 10;
  lat: number = 43.825588;
  lng: number = -72.0108029;
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;

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

  constructor() {

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

  addMarker() {
    if(this.markerDraggable === 'Yes') {
      var isDraggable = true;
    } else {
      var isDraggable = false;
    }

    var newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }

    this.markers.push(newMarker);
  }

}

// Marker Type

interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
