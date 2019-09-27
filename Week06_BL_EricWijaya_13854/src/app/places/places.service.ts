import { Injectable } from '@angular/core';
import {Place} from './places.model';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {

    private places: Place[] = [
        new Place(
            'p1',
            'Serpong M-Town',
            '2BR apartment near Summarecon Mal Serpong.',
            'http://www.summareconbekasi.com/public/images/gallery/article/7082/IMG_3293-25.jpg',
            700000000
        ),

        new Place(
            'p2',
            'Scientia Residence',
            'Near UMN with many choices of foods around.',
            'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100123853_wh_3',
            1000000000
        ),

        new Place(
            'p3',
            'Scientia Residence 1',
            'Near UMN with many choices of foods around.',
            'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100123853_wh_3',
            1000000000
        ),

        new Place(
            'p4',
            'Scientia Residence 2',
            'Near UMN with many choices of foods around.',
            'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100123853_wh_3',
            1000000000
        )
    ];

    constructor() { }

    getAllPlaces() {
        return [...this.places];
    }

    getPlace(id: string) {
        return {
            ...this.places.find(place => {
                return place.id === id;
            })
        };
    }
}
