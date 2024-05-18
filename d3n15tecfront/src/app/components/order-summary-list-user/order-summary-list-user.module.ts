import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummaryListUserRoutingModule } from './order-summary-list-user-routing.module';
import { OrderSummaryListUserComponent } from './component/order-summary-list-user.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { CheckboxModule } from 'primeng/checkbox';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UsersEditModule } from '../users-edit/users-edit.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CpfModule } from 'src/app/shared/pipes/cpf/cpf.module';
import { ButtonModule } from 'primeng/button';
import { NgxPaginationModule } from 'ngx-pagination';
import { CpfPipe } from 'src/app/shared/pipes/cpf/cpf.pipe';

@NgModule({
  declarations: [
    OrderSummaryListUserComponent
  ],
  imports: [
    CommonModule,
    OrderSummaryListUserRoutingModule,
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
    SidebarModule
  ],
  providers: [CpfPipe]
})
export class OrderSummaryListUserModule { }
