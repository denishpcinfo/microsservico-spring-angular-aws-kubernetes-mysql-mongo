import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor() { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public decodePayloadJWT(): any {
    try {
      return jwtDecode(this.getToken());
    } catch (Error) {
      return null;
    }
  }
}
