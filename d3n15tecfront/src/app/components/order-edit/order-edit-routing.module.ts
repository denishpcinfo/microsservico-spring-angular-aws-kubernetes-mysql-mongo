import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderEditComponent } from './components/order-edit.component';

const routes: Routes = [
  { path: 'editar-pedido', component: OrderEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderEditRoutingModule { }
