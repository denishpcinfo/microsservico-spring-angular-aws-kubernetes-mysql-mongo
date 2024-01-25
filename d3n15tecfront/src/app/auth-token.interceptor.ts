import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, catchError, switchMap, tap, throwError } from 'rxjs';
import { AuthenticationRequest } from './shared/models/AuthenticationRequest';
import { AuthenticationService } from './services/auth/authentication.service';
import { AuthTokenService } from './services/auth/auth-token.service';
import { AuthenticationResponse } from './shared/models/AuthenticationResponse';
import { Router } from '@angular/router';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  authRequest: AuthenticationRequest = {};
  authResponse: AuthenticationResponse = {};

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
          if (error.status === 403) {
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
              }),
              catchError((error) => {
                localStorage.clear();
                this.router.navigate(["/login"]);
                return throwError(() => error);
              })
            );
          }
          return throwError(() => error);
        })
    );
    } 
    return next.handle(req).pipe(catchError(this.processaError));
  }

  processaError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = 'Error: ' + error.error.error;
    } if(error.status === 500 ) {
      errorMessage = "Você esta Offline!";
      
    } else {
      errorMessage = 'Código: ' + error.error.code + '\nMensagem: ' + error.error.error;
    }
    return throwError(errorMessage); 
  }

}