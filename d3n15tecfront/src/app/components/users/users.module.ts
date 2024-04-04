import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonModule } from 'primeng/button';
import { CpfPipe } from 'src/app/shared/pipes/cpf/cpf.pipe';
import { CpfModule } from 'src/app/shared/pipes/cpf/cpf.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SearchNamePipe } from 'src/app/shared/pipes/searchName/searchName.pipe';
import { SearchNameModule } from 'src/app/shared/pipes/searchName/searchName.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgxPaginationModule,
    ButtonModule,
    CpfModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SearchNameModule
  ],
  providers: [CpfPipe, SearchNamePipe]
})
export class UsersModule { }
