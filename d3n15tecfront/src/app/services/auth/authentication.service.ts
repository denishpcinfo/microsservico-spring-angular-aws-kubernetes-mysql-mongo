import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { RegisterRequest } from 'src/app/shared/models/RegisterRequest';
import { AuthenticationResponse } from 'src/app/shared/models/AuthenticationResponse';
import { AuthenticationRequest } from 'src/app/shared/models/AuthenticationRequest';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authRequest: AuthenticationRequest = {};
  authResponse: AuthenticationResponse = {};

  private baseUrl = 'http://localhost:9093/api/autenticacao'

  constructor( private http: HttpClient,
               private toastr: ToastrService, 
               private router: Router  ) { }

  register(registerRequest: RegisterRequest) {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/registrar`, registerRequest)
    .subscribe({
      next: (response) => {
        if (this.authResponse) {
          this.authResponse = response;
          this.toastr.success('Conta criada com sucesso!');
          this.router.navigateByUrl('/login', {skipLocationChange: true});
        }
      },
      error: (erro) => {
        if (erro.error)
        this.toastr.error(erro.error.titulo, `Erro ${erro.error.status}!`);
      else
        this.toastr.error("Ocorreu um erro no servidor!", "Erro!");
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
           this.toastr.success('Login realizado com sucesso!');
          this.router.navigateByUrl('/home', {skipLocationChange: true});
        }
      },
      error: (erro) => {
        if (erro.error)
        this.toastr.error(erro.error.titulo, `Erro ${erro.error.status}!`);
      else
        this.toastr.error("Ocorreu um erro no servidor!", "Erro!");
      }
    }
    )
  }

}
