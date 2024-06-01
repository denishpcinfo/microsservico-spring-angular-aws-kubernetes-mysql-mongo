import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersEditRoutingModule } from './users-edit-routing.module';
import { UsersEditComponent } from './components/users-edit.component';
import { TelefoneModule } from 'src/app/shared/pipes/telefone/telefone.module';
import { CpfModule } from 'src/app/shared/pipes/cpf/cpf.module';
import { FormsModule } from '@angular/forms';
import { CpfPipe } from 'src/app/shared/pipes/cpf/cpf.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import {CheckboxModule} from 'primeng/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UsersEditComponent
  ],
  imports: [
    CommonModule,
    UsersEditRoutingModule,
    TelefoneModule,
    CpfModule,
    FormsModule,
    ModalModule.forRoot(),
    CheckboxModule,
    MatButtonModule
  ],
  exports:[
    UsersEditComponent,
    ModalModule
  ],
  providers: [CpfPipe]
})
export class UsersEditModule { }
