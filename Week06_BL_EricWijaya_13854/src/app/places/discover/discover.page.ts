import { Component, OnInit } from '@angular/core';
import {Place} from '../places.model';
import {PlacesService} from '../places.service';
import {ActivatedRoute} from '@angular/router';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
    selector: 'app-discover',
    templateUrl: './discover.page.html',
    styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

    places: Place[];
    listedLoadedPlaces: Place[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private placesService: PlacesService
    ) { }

    ngOnInit() {
        this.places = this.placesService.getAllPlaces();
        this.listedLoadedPlaces = this.places.slice(1);
    }

    onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
        console.log(event.detail);
    }

}
