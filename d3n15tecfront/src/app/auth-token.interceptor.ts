import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthenticationRequest } from './shared/models/authentication-request.model';
import { AuthenticationService } from './services/auth/authentication.service';
import { AuthenticationResponse } from './shared/models/authentication-response.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  authRequest: AuthenticationRequest = {};
  authResponse: AuthenticationResponse = {};
  booleanErroRefresh = false;
  
  constructor( private authenticationService: AuthenticationService,
               private router: Router ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(req.url.includes('api/autenticacao/login')){
      return next.handle(req).pipe(catchError(this.processaError));
    }
    else if (localStorage.getItem('token') !== null) {
      const token = 'Bearer ' + localStorage.getItem('token');
      const tokenRequest = req.clone({
        headers: req.headers.set('Authorization', token)
      });
      return next.handle(tokenRequest).pipe(
        catchError((error) => {
          if (error.status === 403 && this.booleanErroRefresh === false) {
            this. booleanErroRefresh = true;
            return this.authenticationService.refreshToken().pipe(
              switchMap((respost) => {
                this.authResponse = respost;
                if (this.authResponse) {
                  localStorage.setItem('token', this.authResponse.accessToken);
                  localStorage.setItem('refreshToken', this.authResponse.refreshToken);
                }
                const token = 'Bearer ' + localStorage.getItem('token');
                const tokenRequest2 = req.clone({
                  headers: req.headers.set('Authorization', token)
                });
                return next.handle(tokenRequest2);
              })
            );
          }else{
            localStorage.clear();
            this.router.navigate(["/login"]);
          }
          return throwError(() => this.processaError(error));
        })
    );
    } 
    return next.handle(req).pipe();
  }

  processaError(error: HttpErrorResponse) {
    let errorMessage;
    error.error instanceof ErrorEvent
    if (error.error) {
      errorMessage = 'Error: ' + error.error.error;
      errorMessage = 'Código: ' + error.error.code + '\nMensagem: ' + error.error.error;
    } 
    return throwError(errorMessage); 
  }

}