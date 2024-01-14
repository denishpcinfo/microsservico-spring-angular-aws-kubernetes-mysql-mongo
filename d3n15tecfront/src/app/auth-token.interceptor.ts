import { Injectable, NgModule } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { AuthenticationRequest } from './shared/models/AuthenticationRequest';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  authRequest: AuthenticationRequest = {};
  
  constructor( ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('token') !== null) {
      const token = 'Bearer ' + localStorage.getItem('token');

      const tokenRequest = req.clone({
        headers: req.headers.set('Authorization', token)
      });

      return next.handle(tokenRequest).pipe(catchError(this.processaError));
  
    } else {
      return next.handle(req).pipe(catchError(this.processaError));
    }
    
  }

  processaError(error: HttpErrorResponse) {
    
    let errorMessage = 'Erro desconhecido';

    console.log(error);
    
    if (error.error instanceof ErrorEvent) {
    
      errorMessage = 'Error: ' + error.error.error;
    
    } if (error.status === 403) {

        localStorage.clear();
        window.location.href = "/login";

      }else {
      
        if(error.status === 500 ) {
      
          errorMessage = "Você esta Offline!";
          
        } else {
          
            errorMessage = 'Código: ' + error.error.code + '\nMensagem: ' + error.error.error;
        }
        window.alert(errorMessage)   
      }
      
      
    return throwError(errorMessage); 
  }

}
