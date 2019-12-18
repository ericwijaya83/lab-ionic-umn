import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  currAddress = new BehaviorSubject<string>('');
  constructor() { }

  getAddress() {
    return this.currAddress.asObservable();
  }
  
  setAddress(address: string) {
    this.currAddress.next(address);
  }
}
