import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummaryListRoutingModule } from './order-summary-list-routing.module';
import { OrderSummaryListComponent } from './component/order-summary-list.component';
import { CheckboxModule } from 'primeng/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CpfModule } from 'src/app/shared/pipes/cpf/cpf.module';
import { ButtonModule } from 'primeng/button';
import { NgxPaginationModule } from 'ngx-pagination';
import { CpfPipe } from 'src/app/shared/pipes/cpf/cpf.pipe';
import { SidebarModule } from '../sidebar/sidebar.module';
import { OrderEditModule } from '../order-edit/order-edit.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    OrderSummaryListComponent
  ],
  imports: [
    CommonModule,
    OrderSummaryListRoutingModule,
    NgxPaginationModule,
    ButtonModule,
    CpfModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    OrderEditModule,
    CheckboxModule,
    SidebarModule,
    MatButtonModule
  ],
  providers: [CpfPipe]
})
export class OrderSummaryListModule { }
