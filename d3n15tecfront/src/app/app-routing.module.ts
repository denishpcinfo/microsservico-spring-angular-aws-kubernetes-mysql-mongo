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
import { OrderSummaryListComponent } from './components/order-summary-list/component/order-summary-list.component';
import { OrderSummaryListUserComponent } from './components/order-summary-list-user/component/order-summary-list-user.component';
import { RoleGuard } from './services/auth/role.guard';

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
      path: 'lista-pedidos',
      component: OrderSummaryListComponent,
      canActivate: [RoleGuard],
      data: {roles: [Role.ADMIN, Role.MANAGER]}
    }, 
    {
      path: 'meus-pedidos',
      component: OrderSummaryListUserComponent,
      canActivate: [RoleGuard],
      data: {roles: [Role.USER]}
    },  
    {
      path: 'pedidos',
      component: OrderSummaryComponent
    },
    {
      path: 'restaurantes',
      component: RestaurantListingComponent
    },   
    {
      path: 'food/:id',
      component: FoodCatalogueComponent
    },   
    {
      path: 'minha-conta',
      component: ProfileComponent,
      canActivate: [RoleGuard],
      data: {roles: [Role.ADMIN, Role.MANAGER, Role.USER]}
    },
    {
      path: 'usuarios',
      component: UsersComponent,
      canActivate: [RoleGuard],
      data: {roles: [Role.ADMIN, Role.MANAGER]}
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [RoleGuard],
      data: {roles: [Role.ADMIN, Role.MANAGER]}
    },]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
