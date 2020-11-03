import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'info-component',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  @Input() public reservation;
  @Input() public listin;
  @Input() public isConfirm = false;
  @Output() public continuar = new EventEmitter<any>();

  calculateDiff(reservation){
    let currentDate = new Date(reservation.checkout);
    let dateSent = new Date(reservation.checkin);
 
     return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
   }

   continue(){
    this.continuar.emit();
   }
}
