
export class Reservation {
    checkin: string;
    checkout: string;
    adults: number;
    children: number;
    pets:boolean;
}

export class ReservationResponse {
    nights_count: number;
    nights_cost: number;
    discount: number;
    cleaning_fee: number;
    total:number;
}

export class ReservationConfirm extends Reservation {
    message: string;
}