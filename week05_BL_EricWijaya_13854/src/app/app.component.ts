import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AuthService} from "./auth/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private menuController: MenuController,
        private router: Router,
        private authService: AuthService,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    goToDiscover() {
        this.router.navigateByUrl('/places/tabs/discover');
        this.menuController.close('main');
    }

    goToBookings() {
        this.router.navigateByUrl('/bookings');
        this.menuController.close('main');
    }

    onLogout() {
        this.authService.logout();
        this.router.navigateByUrl('/auth');
        this.menuController.close('main');
    }
}
