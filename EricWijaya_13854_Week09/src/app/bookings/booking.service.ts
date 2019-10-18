import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { Place } from '../places/place.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Place asdasd',
      guestNumber: 2,
      userId: 'abc'
    }
  ];

  private myBookings: Place[] = [];
  constructor() { }

  addToMyBookings(p: Place){
    this.myBookings.push(p);
  }

  removeFromMyBookings(id: string){
    this.myBookings = this.myBookings.filter(p => {
      return p.id !== id;
    })
  }
  
  getMyBookings(){
    return [...this.myBookings];
  }

  get bookings(){
    return [...this._bookings];
  }
}
