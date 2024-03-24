import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { AuthenticationRequest } from 'src/app/shared/models/authenticationRequest.model';
import { AuthenticationResponse } from 'src/app/shared/models/authenticationResponse.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {};
  authResponse: AuthenticationResponse = {};
  errorMessage: string = "";
  
  constructor(
    private authService: AuthenticationService
  ) { }

  authenticate() {
    this.authService.login(this.authRequest);
  }

}
