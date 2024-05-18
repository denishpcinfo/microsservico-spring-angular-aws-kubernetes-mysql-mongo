import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummaryListUserComponent } from './component/order-summary-list-user.component';

const routes: Routes = [
  { path: 'meus-pedidos', component: OrderSummaryListUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderSummaryListUserRoutingModule { }
