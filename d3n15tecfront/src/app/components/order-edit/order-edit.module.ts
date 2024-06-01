import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelefoneModule } from 'src/app/shared/pipes/telefone/telefone.module';
import { CpfModule } from 'src/app/shared/pipes/cpf/cpf.module';
import { FormsModule } from '@angular/forms';
import { CpfPipe } from 'src/app/shared/pipes/cpf/cpf.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import {CheckboxModule} from 'primeng/checkbox';
import { OrderEditComponent } from './components/order-edit.component';
import { OrderEditRoutingModule } from './order-edit-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    OrderEditComponent
  ],
  imports: [
    CommonModule,
    OrderEditRoutingModule,
    TelefoneModule,
    CpfModule,
    FormsModule,
    ModalModule.forRoot(),
    CheckboxModule,
    DropdownModule,
    MatButtonModule
  ],
  exports:[
    OrderEditComponent,
    ModalModule
  ],
  providers: [CpfPipe]
})
export class OrderEditModule { }
