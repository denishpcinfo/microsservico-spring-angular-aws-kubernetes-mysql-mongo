import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonModule } from 'primeng/button';
import { CpfPipe } from 'src/app/shared/pipes/cpf/cpf.pipe';
import { CpfModule } from 'src/app/shared/pipes/cpf/cpf.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { UsersEditModule } from '../users-edit/users-edit.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CheckboxModule } from 'primeng/checkbox';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgxPaginationModule,
    ButtonModule,
    CpfModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    UsersEditModule,
    SweetAlert2Module.forRoot(),
    CheckboxModule,
    MatButtonModule
  ],
  providers: [CpfPipe]
})
export class UsersModule { }
