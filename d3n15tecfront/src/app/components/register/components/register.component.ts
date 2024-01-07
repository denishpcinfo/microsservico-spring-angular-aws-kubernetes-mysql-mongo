import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { AuthenticationResponse } from 'src/app/shared/models/AuthenticationResponse';
import { RegisterRequest } from 'src/app/shared/models/RegisterRequest';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  registerUser() {
    this.message = '';
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.authResponse = response;
          } else {
            // inform the user
            this.message = 'Conta criada com sucesso\nVocê será redirecionado para a página de login em 3 segundos';
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 3000)
          }
        }
      });

  }
}
