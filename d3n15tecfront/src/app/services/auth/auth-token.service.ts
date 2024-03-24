import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor( private router: Router,
               private authenticationService: AuthenticationService ) { }

  public getToken(): string {
    try {
      return localStorage.getItem('token');
    } catch (Error) {
      this.router.navigate(["/login"]);
      return null;
    }
  }

  public decodePayloadJWT(): any {
    try {
      return jwtDecode(this.getToken());
    } catch (Error) {
      return null;
    }
  }
}
