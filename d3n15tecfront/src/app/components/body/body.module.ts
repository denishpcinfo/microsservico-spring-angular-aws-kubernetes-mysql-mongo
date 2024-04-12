import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from './body-routing.module';
import { BodyComponent } from './components/body.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  exports:[
    BodyComponent
  ]
})
export class BodyModule { }
