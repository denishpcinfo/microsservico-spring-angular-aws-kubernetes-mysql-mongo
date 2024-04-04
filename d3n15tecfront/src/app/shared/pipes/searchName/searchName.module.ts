import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchNamePipe } from './searchName.pipe';

@NgModule({
  declarations: [
    SearchNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchNamePipe
  ]
})
export class SearchNameModule { }
