import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummaryListUserRoutingModule } from './order-summary-list-user-routing.module';
import { OrderSummaryListUserComponent } from './component/order-summary-list-user.component';

@NgModule({
  declarations: [
    OrderSummaryListUserComponent
  ],
  imports: [
    CommonModule,
    OrderSummaryListUserRoutingModule
  ]
})
export class OrderSummaryListUserModule { }
