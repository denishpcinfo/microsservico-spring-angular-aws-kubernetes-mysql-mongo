import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { AuthenticationRequest } from './shared/models/AuthenticationRequest';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  authRequest: AuthenticationRequest = {};
  
  constructor( ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!localStorage.getItem('token') !== null) {
      return next.handle(req).pipe(
        catchError(error => {
          return throwError(error);
        })
      )
    }else{
      const token = 'Bearer ' + localStorage.getItem('token');
      const tokenRequest = req.clone({
        headers: req.headers.set('Authorization', token)
      });
      return next.handle(tokenRequest);
    }
  }
}