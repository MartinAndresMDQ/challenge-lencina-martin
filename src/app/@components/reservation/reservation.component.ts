import { Component, Input, OnInit } from '@angular/core';
import { ReservationResponse } from 'src/app/@models/reservation';
import { ListingService } from 'src/app/@services/listing.service';

@Component({
  selector: 'reservation-component',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  @Input() public reservation;
  @Input() public listin;
  @Input() public isConfirm = false;
  public reservationR:ReservationResponse = new ReservationResponse();

  
  constructor(private dataService: ListingService) { }

  ngOnInit(){
    this.calcular();
  }

  isActive(item) {
    return true === item;
  };

  calculateDiff(reservation){
    let currentDate = new Date(reservation.checkout);
    let dateSent = new Date(reservation.checkin);
 
     return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
   }

   calcular(){
    this.dataService.saveReservation(this.listin.id,this.reservation).subscribe((data: ReservationResponse) => {
      console.log(data);
      this.reservationR = data;
      // this.products = data;
    })

   }
}
