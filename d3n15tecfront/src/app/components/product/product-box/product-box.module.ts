import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBoxRoutingModule } from './product-box-routing.module';
import { ProductBoxComponent } from './components/product-box.component';

@NgModule({
  declarations: [
    ProductBoxComponent
  ],
  imports: [
    CommonModule,
    ProductBoxRoutingModule
  ],
  exports:[
    ProductBoxComponent
  ]
})
export class ProductBoxModule { }
