import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { AuthenticationRequest } from 'src/app/shared/models/authentication-request.model';
import { AuthenticationResponse } from 'src/app/shared/models/authentication-response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public authRequest: AuthenticationRequest = {};
  public authResponse: AuthenticationResponse = {};
  public errorMessage: string = "";
  
  constructor(
    private authService: AuthenticationService
  ) { }

  authenticate() {
    this.authService.login(this.authRequest);
  }

}
