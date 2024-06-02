import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthTokenService } from 'src/app/services/auth/auth-token.service';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/shared/models/user.model';
import { CpfPipe } from 'src/app/shared/pipes/cpf/cpf.pipe';
import { TelefonePipe } from 'src/app/shared/pipes/telefone/telefone.pipe';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  @ViewChild("editarPerfilModal", { static: false })
  editarPerfilModal: any;

  public item: any;
  public user = new User();
  public confirmPassword: any;
  public checked: any;

  constructor( private authTokenService: AuthTokenService,
    private profileService: ProfileService) {

    if(authTokenService.getToken != null){
      this.item = authTokenService.decodePayloadJWT();
    }
  }

  ngOnInit() {
  }

  enviar(){
    this.profileService.atualizar(this.user);
    this.editarPerfilModal.hide();
  }

  onCpfChange(cpf) {
    this.user.cpf = new CpfPipe().transform(cpf);
  }

  onTelefoneChange(telefone) {
    this.user.telefoneCelular = new TelefonePipe().transform(telefone);
  }

  showModal(item: User) {
   this.user = item;
   this.user.password = null;
   this.checked = false;
   this.user.telefoneCelular = new TelefonePipe().transform(this.user.telefoneCelular);
   this.user.cpf = new CpfPipe().transform(this.user.cpf);
   this.editarPerfilModal.show(); 
  }

  fecharModalEditUser(){
    this.editarPerfilModal.hide(); 
  }

}
