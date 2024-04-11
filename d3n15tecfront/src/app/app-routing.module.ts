import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/components/login.component';
import { RegisterComponent } from './components/register/components/register.component';
import { WelcomeComponent } from './components/welcome/components/welcome.component';
import { AuthGuard } from './services/auth/auth.guard';
import { LayoutComponent } from './components/layout/components/layout.component';
import { OrderSummaryComponent } from './components/order-summary/component/order-summary.component';
import { FoodCatalogueComponent } from './components/food-catalogue/components/food-catalogue.component';
import { RestaurantListingComponent } from './components/restaurant-listing/components/restaurant-listing.component';
import { ProfileComponent } from './components/profile/components/profile.component';
import { UsersComponent } from './components/users/components/users.component';
import { DashboardComponent } from './components/dashboard/components/dashboard.component';
import { Role } from './shared/models/role';

const routes: Routes = [
  { 
    path : '' , 
    redirectTo : '/home', 
    pathMatch : 'full'
  },
  {
    path: 'home',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrar',
    component: RegisterComponent
  },
  { 
    path: '', 
    component: LayoutComponent, 
    canActivate: [AuthGuard], 
    children: [  
    {
      path: 'pedidos',
      component: OrderSummaryComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'restaurantes',
      component: RestaurantListingComponent,
      canActivate: [AuthGuard]
    },   
    {
      path: 'food/:id',
      component: FoodCatalogueComponent,
      canActivate: [AuthGuard]
    },   
    {
      path: 'minha-conta',
      component: ProfileComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'usuarios',
      component: UsersComponent,
      canActivate: [AuthGuard],
      data: {roles: [Role.ADMIN]}
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard],
      data: {roles: [Role.ADMIN]}
    },]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
