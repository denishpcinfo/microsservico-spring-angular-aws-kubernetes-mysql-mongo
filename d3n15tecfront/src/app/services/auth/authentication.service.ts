import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { RegisterRequest } from 'src/app/shared/models/RegisterRequest';
import { AuthenticationResponse } from 'src/app/shared/models/AuthenticationResponse';
import { AuthenticationRequest } from 'src/app/shared/models/AuthenticationRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:9093/api/autenticacao'

  constructor( private http: HttpClient ) { }

  register(registerRequest: RegisterRequest) {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/registrar`, registerRequest);
  }

  login(authRequest: AuthenticationRequest) {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/login`, authRequest);
  }

}
