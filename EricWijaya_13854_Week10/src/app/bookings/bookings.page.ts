import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../places/place.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];
  myBookings: Place[];
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
    this.myBookings = this.bookingService.getMyBookings();
    console.log(this.myBookings);
  }

  ionViewWillEnter(){
    this.myBookings = this.bookingService.getMyBookings();
    console.log(this.myBookings);
  }
  onCancelMyBooking(id: string){
    this.bookingService.removeFromMyBookings(id);
    this.myBookings = this.bookingService.getMyBookings();
  }
  onCancelBooking(offerId: string, slidingEl: IonItemSliding){
    slidingEl.close();
  }

}
