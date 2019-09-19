import { Component, OnInit } from '@angular/core';
import {Booking} from "./booking.model";
import {BookingService} from "./booking.service";
import {ActivatedRoute} from "@angular/router";
import {IonItemSliding} from "@ionic/angular";

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.page.html',
    styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

    bookings: Booking[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private bookingService: BookingService,
    ) { }

    ngOnInit() {
        this.bookings = this.bookingService.getAllBookings();
    }

    deleteBooking(id: string, slidingItem: IonItemSliding) {
        slidingItem.close();
        this.bookingService.deleteBooking(id);
        this.bookings = this.bookingService.getAllBookings();
    }
}
