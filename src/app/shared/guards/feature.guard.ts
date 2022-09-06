import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeatureGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const {
      data: { feature },
    } = route;

    try {
      const featureIsActive = environment.features.find(
        (x) => x.name == feature
      )?.isActive;

      if (featureIsActive) {
        return true;
      } else {
        this._router.navigateByUrl('/');
        return false;
      }
    } catch (error) {
      this._router.navigateByUrl('/');
      return false;
    }
  }
}
