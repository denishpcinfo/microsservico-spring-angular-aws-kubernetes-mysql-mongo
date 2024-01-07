import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummaryComponent } from './component/order-summary.component';

const routes: Routes = [
  { path: 'pedidos', component: OrderSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderSummaryRoutingModule { }
