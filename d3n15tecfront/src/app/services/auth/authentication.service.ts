import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { RegisterRequest } from 'src/app/shared/models/register-request.model';
import { AuthenticationResponse } from 'src/app/shared/models/authentication-response.model';
import { AuthenticationRequest } from 'src/app/shared/models/authentication-request.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { API_URL_UD } from 'src/app/constants/url';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authRequest: AuthenticationRequest = {};
  authResponse: AuthenticationResponse = {};

  
  private baseUrl = API_URL_UD + '/autenticacao'

  constructor( private http: HttpClient,
               private toastr: ToastrService, 
               private router: Router  ) { }

  register(registerRequest: RegisterRequest) {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/registrar`, registerRequest)
    .subscribe({
      next: (response) => {
          this.authResponse = response;
          this.toastr.success('Conta criada com sucesso!');
          this.router.navigateByUrl('/login');
      },
      error: (erro) => {
        this.toastr.error(erro.error.titulo, `Erro ${erro.error.status}!`);
      }
    });
  }

  login(authRequest: AuthenticationRequest) {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/login`, authRequest)
    .subscribe({
      next: (data) => {
        this.authResponse = data;
        if (this.authResponse) {
          localStorage.setItem('token', this.authResponse.accessToken);
          localStorage.setItem('refreshToken', this.authResponse.refreshToken);
          localStorage.setItem('ROLE', this.authResponse.user.role);
           this.toastr.success('Login realizado com sucesso!');
          this.router.navigateByUrl('/home');
        }
      },
      error: () => {
        this.toastr.error('Usuário ou senha inválidos!');
      }
    })
  }


  refreshToken() {
    const refreshToken = 'Bearer ' + localStorage.getItem('refreshToken');
    const httpOptions = {
    headers: new HttpHeaders({ 'RefreshToken': refreshToken,
                              'Authorization': refreshToken })};
                              
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/refresh-token`, {}, httpOptions)
  }

}
