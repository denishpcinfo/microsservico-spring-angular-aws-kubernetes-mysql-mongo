import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { RestaurantListingModule } from './components/restaurant-listing/restaurant-listing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FoodCatalogueModule } from './components/food-catalogue/food-catalogue.module';
import { OrderSummaryModule } from './components/order-summary/order-summary.module';
import { FormsModule } from '@angular/forms';
import { TamplateModule } from './components/tamplate/tamplate.module';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RestaurantListingModule,
    HttpClientModule,
    FoodCatalogueModule,
    OrderSummaryModule,
    FormsModule,
    TamplateModule,
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
    RegisterModule
  ],
  providers: [
    AuthTokenInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
