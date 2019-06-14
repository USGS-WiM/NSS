// ------------------------------------------------------------------------------
// ----- auth.guard.ts -----------------------------------------------
// ------------------------------------------------------------------------------

// copyright:   2017 WiM - USGS
// authors:  Tonia Roddick - USGS Wisconsin Internet Mapping
// purpose: guard to ensure user is logged in before allowing activation of route

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private _router: Router, private _authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkLogin();
    }

    private checkLogin(): boolean {
        if (localStorage.getItem('auth') && localStorage.getItem('setupTime') !== null && !this.checkSetupTime() &&
            localStorage.getItem('loggedInRole') === 'Administrator') {
            return true;
        }
        // if it gets here it means they're not an admin
        // navigate to the settings page
        this._router.navigate(['/settings']);
        return false;
    }

    // need to find out if localstorage item 'setupTime' is more than 12 hours ago
    private checkSetupTime(): boolean {
        let tooOld = false;

        const twentyFourHours: number = 12 * 60 * 60 * 1000;
        const now: number = new Date().getTime();
        const setupTime: number = Number(localStorage.getItem('setupTime'));
        if (now - setupTime > twentyFourHours) {
            // is it greater than 12 hours
            tooOld = true;
            this._authService.removeUserInfo();
        }

        return tooOld;
    }
}
