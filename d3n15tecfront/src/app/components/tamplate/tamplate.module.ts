import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/components/sidebar.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  exports:[
    SidebarComponent
  ]
})
export class TamplateModule { }
