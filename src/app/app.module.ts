import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GeocodeComponent } from './geocode/geocode.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'geocode', component: GeocodeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GeocodeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWlu9d_33gpEvNB6FdA3G08ZjrQYi4ets'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
