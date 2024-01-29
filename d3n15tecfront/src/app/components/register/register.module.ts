import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './components/register.component';
import { CpfPipe } from 'src/app/shared/pipes/cpf.pipe';
import { TelefonePipe } from 'src/app/shared/pipes/telefone.pipe';

@NgModule({
  declarations: [
    RegisterComponent,
    CpfPipe,
    TelefonePipe
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  exports:[
    RegisterComponent,
    CpfPipe,
    TelefonePipe
  ]
})
export class RegisterModule { }
