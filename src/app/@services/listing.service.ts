import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Listing, } from '../@models/listing';

import { Reservation, ReservationResponse, ReservationConfirm } from '../@models/reservation';

// import { LISTINGS } from './mock-listing';
// import { RESERVATIONRESPONSE } from './mock-reservation';

@Injectable({
    providedIn: 'root',
})
export class ListingService {
    private REST_API_SERVER = "http://localhost:3000";

    constructor(private httpClient: HttpClient) { }

    // GET 
    // /api/listings/:uuid
    getListing(uuid: string): Observable<Listing> {
        return this.httpClient.get<Listing>(this.REST_API_SERVER + '/listings/' + uuid).pipe(catchError(this.handleError));
    }

    // POST 
    // /api/listings/:uuid/reservation-cost
    saveReservation(uuid: string, reservation: Reservation): Observable<ReservationResponse> {
        // return this.httpClient.post<ReservationResponse>(this.REST_API_SERVER + '/listings/' + uuid + '/reservation-cost', {}).pipe(catchError(this.handleError));
    
        return this.httpClient.get<ReservationResponse>(this.REST_API_SERVER + '/reservation-cost').pipe(catchError(this.handleError));
    }

    // POST 
    // /api/listings/:uuid/confirm-reservation
    confirmReservation(uuid: string, reservation: ReservationConfirm): Observable<{message:string}> {
        // return this.httpClient.post<string>(this.REST_API_SERVER + '/listings/' + uuid + '/reservation-cost', reservation).pipe(catchError(this.handleError));
        return this.httpClient.get<{message:string}>(this.REST_API_SERVER + '/confirm-reservation').pipe(catchError(this.handleError));
    }

    // GET 
    // /api/listings/:uuid/reservation-cost
    getReservation(uuid:string): Observable<Reservation> {
        return this.httpClient.get<Reservation>(this.REST_API_SERVER + '/reservation').pipe(catchError(this.handleError));
    }
    
    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

}