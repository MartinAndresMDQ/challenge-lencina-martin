import { Component } from '@angular/core';
import { Listing } from './@models/listing';
import { Reservation, ReservationConfirm, ReservationResponse } from './@models/reservation';
import { ListingService } from './@services/listing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private id = "28eed9aa-c27d-4217-ab21-ad65ead3a2aa";
  public reservation: ReservationConfirm = new ReservationConfirm();
  public reservationR: ReservationResponse;
  public listin: Listing = new Listing();
  public cargo = false
  public message = '';

  constructor(private dataService: ListingService) {
    this.dataService.getListing(this.id).subscribe((data: any) => {
      console.log(data);
      this.listin = data;
      this.dataService.getReservation(this.id).subscribe((data: Reservation) => {
        console.log(data);
        this.reservation = <ReservationConfirm>data;
        this.cargo = true;
      })
    })
  }

  continue() {
    if (this.reservationR == null)
      this.dataService.saveReservation(this.id, this.reservation).subscribe((data: ReservationResponse) => {
        console.log(data);
        this.reservationR = data;
      })
    else {

      this.dataService.confirmReservation(this.id, this.reservation).subscribe((data) => {
        console.log(data);
        this.message = data.message;
      })
    }
  }

  cambiar(event) {
    console.log(event)
    if (event == false) {
      this.reservationR = null;
      this.message = '';
    }
    else {
      this.continue();
    }
    // this.is

  }
}
