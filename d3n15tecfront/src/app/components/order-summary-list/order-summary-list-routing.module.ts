import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummaryListComponent } from './component/order-summary-list.component';

const routes: Routes = [
  { path: 'lista-pedidos', component: OrderSummaryListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderSummaryListRoutingModule { }
