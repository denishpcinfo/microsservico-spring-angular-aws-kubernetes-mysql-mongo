import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { AuthenticationResponse } from 'src/app/shared/models/authenticationResponse.model';
import { RegisterRequest } from 'src/app/shared/models/registerRequest.model';
import { TelefonePipe } from 'src/app/shared/pipes/telefone/telefone.pipe';
import { CpfPipe } from 'src/app/shared/pipes/cpf/cpf.pipe';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  public confirmPassword: any;

  constructor(
    private authService: AuthenticationService,
    private toastr: ToastrService 
  ) {}

  registerUser() {

    if (this.confirmPassword !== this.registerRequest.password){
      this.toastr.warning('Confirme a senha correta!');
      return
    }

    this.authService.register(this.registerRequest);
  }

  onCpfChange(cpf) {
    this.registerRequest.cpf = new CpfPipe().transform(cpf);
  }

  onTelefoneChange(telefone) {
    this.registerRequest.telefoneCelular = new TelefonePipe().transform(telefone);
  }
}
