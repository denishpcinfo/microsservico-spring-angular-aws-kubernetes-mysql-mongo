import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout.component';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SidebarModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
