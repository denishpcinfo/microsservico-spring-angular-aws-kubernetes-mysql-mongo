import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {inject} from "@angular/core";
import { Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot ):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree=> {

  return inject(AuthTokenService).getToken()
    ? true
    : inject(Router).createUrlTree(['/login']);

};