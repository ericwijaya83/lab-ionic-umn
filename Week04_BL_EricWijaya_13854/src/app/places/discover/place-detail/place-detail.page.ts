import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})

export class PlaceDetailPage implements OnInit {
  loadedPlace: Place;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private placeSvc: PlacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('placeId')) {
          return;
        }
        this.loadedPlace = this.placeSvc.getPlace(paramMap.get('placeId'));
      }
    )
  }

}