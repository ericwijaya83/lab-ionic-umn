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

    place: Place[];
    loadedPlace: Place;
    selectedPlace: Place;

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

    onBookPlace() {
        this.actionSheetController.create({
            header: 'Choose an Action',
            buttons: [
                {
                    text: 'Select Date',
                    handler: () => {
                        this.openBookingModal('select');
                    }
                },
                {
                    text: 'Random Date',
                    handler: () => {
                        this.openBookingModal('random');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        })
        .then(actionSheetEl => {
            actionSheetEl.present();
        });
    }

    openBookingModal(mode: 'select' | 'random') {
        console.log(mode);
        this.modalController
        .create({
            component: CreateBookingComponent,
            componentProps: { 'loadedPlace': this.loadedPlace }
        })
        .then(modalEl => {
            modalEl.present();
            return modalEl.onDidDismiss();
        })
        .then(resultData => {
            console.log(resultData.data, resultData.role);
            if (resultData.role === 'confirm') {
                console.log('BOOKED');
            }
        })
    }
}
