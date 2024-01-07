import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { BodyComponent } from './components/body.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    CarouselModule
  ],
  exports:[
    BodyComponent,
    CarouselModule
  ]
})
export class BodyModule { }
