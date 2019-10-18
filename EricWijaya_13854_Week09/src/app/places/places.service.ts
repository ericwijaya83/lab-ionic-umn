import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'http://all-jakarta-apartments.com/wp-content/uploads/2018/06/Gading-Mediterania-Residences.jpg',
      100000000,
      new Date('2019-01-01'),
      new Date('2020-12-31')
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartemen Romantis',
      'https://pix6.agoda.net/hotelImages/412/412295/412295_17011016040050229882.jpg?s=1024x768',
      125000000,
      new Date('2019-01-01'),
      new Date('2020-12-31')
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartment Murah',
      'http://3.bp.blogspot.com/-od1RLqCegqc/Uea0dEnl3TI/AAAAAAAAAG0/oNyH2TjzyGg/s640/apartemen-casa-de-parco-bsd-city.jpg',
      50000000,
      new Date('2019-01-01'),
      new Date('2020-12-31')
    ),
  ];
  get places(){
    return [...this._places];
  }
  constructor() { }

  getPlace(id: string){
  return {...this._places.find(p => p.id === id)};
  }
}
