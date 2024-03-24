import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent
  ]
})
export class SidebarModule { }
