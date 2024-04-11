import { Component, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserList } from 'src/app/shared/models/user-list.model';
import { UsersEditComponent } from '../../users-edit/components/users-edit.component';
import { User } from 'src/app/shared/models/user.model';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  @ViewChild("editarPerfil", { static: true })
  editarPerfil: UsersEditComponent;

  @ViewChild('sweetAlert', { static: true }) 
  sweetAlert: SwalComponent;

  public tableItem: UserList[] = [];
  public buscaNomeString = null;
  public page = 1;
  public count = 0;
  public pageSize = 10;
  public cpfasc: boolean;
  public cpfdesc: boolean;
  public emailasc: boolean;
  public emaildesc: boolean;
  public nomeasc: boolean;
  public nomedesc: boolean;
  public iconasc1 = true;
  public iconasc2 =  true;
  public iconasc3 = true;
  public iconasc4 = true;
  public iconasc5 = true;
  public iconasc6 = true;
  public params: any = {};
  public modalOpen: boolean = false;
  public closeResult: string;
  public idUserExcluir: number;
  public checkedBuscaNome = true;
  public checkedBuscaCPF = false;
  public checkedBuscaEmail = false;
  public newPlaceHolder = "Busque por nome";

  constructor( 
    private userService: UserService,
    private profileService: ProfileService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.ordenacaoNomeasc();
  }

  getAllUSersPage(): void {
    const params = this.getRequestParams(this.page, this.pageSize);

    this.userService.getAll(params)
      .subscribe({
        next: (data) => {
          const { allUsuarios, totalItems } = data;
          this.tableItem = allUsuarios;
          this.count = totalItems;
        }
      });
  }

  editarUsuario(item: User) {
    this.editarPerfil.showModal(item);
  }

  excluirUser(usuarioExcluir: User){
    this.idUserExcluir = usuarioExcluir.id;
    this.sweetAlert.fire();
  }

  delete(){
    this.profileService.deletar(this.idUserExcluir).subscribe({
      next: (data) => {
        this.toastr.success('Usuário deletado com sucesso!');
        const { allUsuarios, totalItems } = data;
        this.tableItem = allUsuarios;
        this.count = totalItems;
        this.checkedBuscaNome = true;
      },
      error: (erro) => {
        this.toastr.error(erro.error.titulo, `Erro ${erro.error.status}!`);
      }
    });
  }

  getRequestParams(page: number, pageSize: number): any {

    this.params[`page`] = 0;
    if (page) {
      this.params[`page`] = page - 1;
    }

    if (pageSize) {
      this.params[`size`] = pageSize;
    }

    if (this.checkedBuscaNome === true) {
      this.params[`global`] = "nome";
    }

    if (this.checkedBuscaCPF === true ) {
      this.params[`global`] = "cpf";
    }

    if (this.checkedBuscaEmail === true) {
      this.params[`global`] = "email";
    }

    if(this.nomeasc === true){
      this.params[`sort`] = "nome asc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.nomedesc === true){
      this.params[`sort`] = "nome desc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.cpfasc === true){
      this.params[`sort`] = "cpf asc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.cpfdesc === true){
      this.params[`sort`] = "cpf desc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.emailasc === true){
      this.params[`sort`] = "email asc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.emaildesc === true){
      this.params[`sort`] = "email desc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.buscaNomeString){
      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }
    }
    else{
      this.params[`busca`] = "";
      this.params[`sort`] = "nome asc";
      return this.params;
    }

  }

  handlePageChange(event: number): void {
    this.page = event;
    this.getAllUSersPage();
  }

  ordenacaoNomeasc(){
    this.iconasc6 = true;
    this.iconasc5 = false;
    this.iconasc2 = true;
    this.iconasc1 = true;
    this.iconasc4 = true;
    this.iconasc3 = true;
    this.nomeasc = true;
    this.nomedesc = false;
    this.cpfasc = false;
    this.cpfdesc = false;
    this.emailasc = false;
    this.emaildesc = false;
    this.getAllUSersPage();
  }

  ordenacaoNomedesc(){
    this.iconasc6 = false;
    this.iconasc5 = true;
    this.iconasc2 = true;
    this.iconasc1 = true;
    this.iconasc4 = true;
    this.iconasc3 = true;
    this.nomeasc = false;
    this.nomedesc = true;
    this.cpfasc = false;
    this.cpfdesc = false;
    this.emailasc = false;
    this.emaildesc = false;
    this.getAllUSersPage();
  }

  ordenacaoCPFasc(){
    this.iconasc2 = true;
    this.iconasc1 = false;
    this.iconasc4 = true;
    this.iconasc3 = true;
    this.iconasc6 = true;
    this.iconasc5 = true;
    this.cpfasc = true;
    this.cpfdesc = false;
    this.nomeasc = false;
    this.nomedesc = false;
    this.emailasc = false;
    this.emaildesc = false;
    this.getAllUSersPage();
  }

  ordenacaoCPFdesc(){
    this.iconasc2 = false;
    this.iconasc1 = true;
    this.iconasc4 = true;
    this.iconasc3 = true;
    this.iconasc6 = true;
    this.iconasc5 = true;
    this.cpfasc = false;
    this.cpfdesc = true;
    this.nomeasc = false;
    this.nomedesc = false;
    this.emailasc = false;
    this.emaildesc = false;
    this.getAllUSersPage();
  }

  ordenacaoEMAILasc(){
    this.iconasc4 = true;
    this.iconasc3 = false;
    this.iconasc6 = true;
    this.iconasc5 = true;
    this.iconasc2 = true;
    this.iconasc1 = true;
    this.emailasc = true;
    this.emaildesc = false;
    this.nomeasc = false;
    this.nomedesc = false;
    this.cpfasc = false;
    this.cpfdesc = false;
    this.getAllUSersPage();
  }

  ordenacaoEMAILdesc(){
    this.iconasc4 = false;
    this.iconasc3 = true;
    this.iconasc2 = true;
    this.iconasc1 = true;
    this.iconasc6 = true;
    this.iconasc5 = true;
    this.emailasc = false;
    this.emaildesc = true;
    this.nomeasc = false;
    this.nomedesc = false;
    this.cpfasc = false;
    this.cpfdesc = false;
    this.getAllUSersPage();
  }

  buscaNome(buscaNomeString : String){
    buscaNomeString = this.buscaNomeString;
    this.getAllUSersPage();
  }

  buscaEmailCheck(checkedBuscaEmail){
    if(checkedBuscaEmail === true){
      this.newPlaceHolder = "Busque por email";
      this.checkedBuscaCPF = false;
      this.checkedBuscaNome = false;
    }
  }

  buscaNomeCheck(checkedBuscaNome){
    if(checkedBuscaNome === true){
      this.newPlaceHolder = "Busque por nome";
      this.checkedBuscaEmail = false;
      this.checkedBuscaCPF = false;
    }
  }


  buscaCPFCheck(checkedBuscaCPF){
    if(checkedBuscaCPF === true){
      this.newPlaceHolder = "Busque por CPF";
      this.checkedBuscaEmail = false;
      this.checkedBuscaNome = false;
    }
  }
}
