import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './components/register.component';
import { TelefoneModule } from 'src/app/shared/pipes/telefone/telefone.module';
import { CpfModule } from 'src/app/shared/pipes/cpf/cpf.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    MatButtonModule
  ],
  exports:[
    RegisterComponent,
    CpfModule,
    TelefoneModule
  ]
})
export class RegisterModule { }
