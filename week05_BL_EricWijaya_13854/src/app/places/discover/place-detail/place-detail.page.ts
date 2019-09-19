import { Component, OnInit } from '@angular/core';
import {Place} from '../../places.model';
import {ActivatedRoute} from '@angular/router';
import {PlacesService} from '../../places.service';
import {ActionSheetController, ModalController} from "@ionic/angular";
import {CreateBookingComponent} from "../../../bookings/create-booking/create-booking.component";

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

    loadedPlace: Place;

    constructor(
        private activatedRoute: ActivatedRoute,
        private placesService: PlacesService,
        private modalController: ModalController,
        private actionSheetController: ActionSheetController,
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(
            paramMap => {
                if (!paramMap.has('placeId')) {
                    return;
                }
                this.loadedPlace = this.placesService.getPlace(paramMap.get('placeId'));
            }
        );
    }

    async bookPlace() {
        const modal = await this.modalController.create({
            component: CreateBookingComponent,
            componentProps: {
                'loadedPlace': this.loadedPlace
            }
        }).then(modalElement => {
            modalElement.present();
            return modalElement.onDidDismiss();
        }).then(resultData => {
            console.log(resultData);
        })
    }
}
