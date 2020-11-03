import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListingService } from './@services/listing.service';
import { HttpClientModule } from '@angular/common/http';
import { NabvarComponent } from './@components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './@components/info/info.component';
import { ReservationComponent } from './@components/reservation/reservation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    NabvarComponent,
    InfoComponent,
    ReservationComponent
  ],
  // exports:[NabvarComponent],
  providers: [ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
