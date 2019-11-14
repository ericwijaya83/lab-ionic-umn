import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'http://all-jakarta-apartments.com/wp-content/uploads/2018/06/Gading-Mediterania-Residences.jpg',
      100000000,
      new Date('2019-01-01'),
      new Date('2020-12-31'),
      'abc'
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartemen Romantis',
      'https://pix6.agoda.net/hotelImages/412/412295/412295_17011016040050229882.jpg?s=1024x768',
      125000000,
      new Date('2019-01-01'),
      new Date('2020-12-31'),
      'abc'
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartment Murah',
      'http://3.bp.blogspot.com/-od1RLqCegqc/Uea0dEnl3TI/AAAAAAAAAG0/oNyH2TjzyGg/s640/apartemen-casa-de-parco-bsd-city.jpg',
      50000000,
      new Date('2019-01-01'),
      new Date('2020-12-31'),
      'abc'
    ),
  ]);

  get places(){
    return this._places.asObservable();
  }

  constructor(private authService: AuthService) { }

  getPlace(id: string){
    return this.places.pipe(
      take(1),
      map(places => {
        return {...places.find(p => p.id === id)};
      })
    );
  }

  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date){
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'http://housingestate.id/wp-content/uploads/2013/10/lexington-building-sky.jpg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    this._places.pipe(take(1)).subscribe(places => {
      setTimeout(() =>{
        this._places.next(places.concat(newPlace));
      },1000); 
    });
  }
}
