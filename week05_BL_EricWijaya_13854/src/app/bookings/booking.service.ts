import { Injectable } from '@angular/core';
import {Booking} from "./booking.model";
import {IonItemSliding} from "@ionic/angular";

@Injectable({
    providedIn: 'root'
})
export class BookingService {

    private bookings: Booking[] = [
        new Booking(
            'b1',
            'p1',
            'u1',
            'Serpong M-Town',
            24
        ),

        new Booking(
            'b2',
            'p2',
            'u2',
            'Scientia Residence',
            8
        )
    ];

    constructor() { }

    getAllBookings() {
        return [...this.bookings]
    }

    getBooking(id: string) {
        return {
            ...this.bookings.find(booking => {
                return booking.id === id;
            })
        };
    }

    deleteBooking(id: string) {
        this.bookings = this.bookings.filter(booking => booking.id !== id)
    }
}
