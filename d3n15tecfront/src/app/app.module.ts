import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListingModule } from './components/restaurant-listing/restaurant-listing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FoodCatalogueModule } from './components/food-catalogue/food-catalogue.module';
import { OrderSummaryModule } from './components/order-summary/order-summary.module';
import { FormsModule } from '@angular/forms';
import { BodyModule } from './components/body/body.module';
import { FooterModule } from './components/footer/footer.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthTokenInterceptor } from './auth-token.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from './components/layout/layout.module';
import { TelefoneModule } from './shared/pipes/telefone/telefone.module';
import { CpfModule } from './shared/pipes/cpf/cpf.module';
import { LoginModule } from './components/login/login.module';
import { ProfileModule } from './components/profile/profile.module';
import { WelcomeModule } from './components/welcome/welcome.module';
import { RegisterModule } from './components/register/register.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { UsersModule } from './components/users/users.module';
import { UsersEditModule } from './components/users-edit/users-edit.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import ptBr from "@angular/common/locales/pt";
import { LOCALE_ID } from "@angular/core";
import { registerLocaleData } from '@angular/common';
import { OrderSummaryListModule } from './components/order-summary-list/order-summary-list.module';
import { OrderSummaryListUserModule } from './components/order-summary-list-user/order-summary-list-user.module';
import { OrderEditModule } from './components/order-edit/order-edit.module';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestaurantListingModule,
    HttpClientModule,
    FoodCatalogueModule,
    OrderSummaryModule,
    FormsModule,
    BodyModule,
    FooterModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: false,
      enableHtml: true,
    }),
    BrowserAnimationsModule,
    LayoutModule,
    TelefoneModule,
    CpfModule,
    LoginModule,
    ProfileModule,
    WelcomeModule,
    RegisterModule,
    DashboardModule,
    UsersModule,
    UsersEditModule,
    ModalModule.forRoot(),
    SweetAlert2Module.forRoot(),
    OrderSummaryListModule,
    OrderSummaryListUserModule,
    OrderEditModule
  ],
  providers: [
    AuthTokenInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    },
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ],
  exports: [
    ModalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
