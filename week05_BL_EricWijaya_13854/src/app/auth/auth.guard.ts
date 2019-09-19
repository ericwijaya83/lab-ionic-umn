import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanLoad, Route, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    canLoad(
        route: Route,
        segments: UriSegment[]
    ): boolean | Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.userIsAuthenticated) {
            this.router.navigateByUrl('/auth');
        }

        return this.authService.userIsAuthenticated;
    }
}
