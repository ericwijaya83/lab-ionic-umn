import { Injectable } from '@angular/core';
import { Place } from "./place.model";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    new Place(
      'p1',
      'Serpong M-Town',
      '2BR apartment near SMS',
      'http://www.summareconbekasi.com/public/images/gallery/article/5607/Serpong-M-Town-Gallery-4.jpg',
      70000000000
    ),
    new Place(
      'p2',
      'Scientia Residence',
      'Near UMN with many choices of foods around',
      'http://www.summareconbekasi.com/public/images/gallery/article/5607/Serpong-M-Town-Gallery-4.jpg',
      10000000000
    )
  ];

  getPlaces() {
    return [...this.places];
  }

  getPlace(placeId: String) {
    return this.places.find(place => place.id === placeId);
  }

  constructor() { }
}
