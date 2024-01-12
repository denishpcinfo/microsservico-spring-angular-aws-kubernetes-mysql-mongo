import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

              if(localStorage.getItem("token")){
                const token = localStorage.getItem("token");
                let clone: HttpRequest<any>;

                clone = request.clone({
                  setHeaders: {
                    Accept: `application/json`,
                    "Content-Type": `application/json`,
                    Authorization: `Bearer ${token}`
                  }
                });
              }

    return next.handle(request);
  }
}
