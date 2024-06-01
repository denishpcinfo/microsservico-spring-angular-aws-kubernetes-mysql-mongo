import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListingRoutingModule } from './restaurant-listing-routing.module';
import { RestaurantListingComponent } from './components/restaurant-listing.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RestaurantListingComponent
  ],
  imports: [
    CommonModule,
    RestaurantListingRoutingModule,
    NgxPaginationModule,
    MatButtonModule
  ]
})
export class RestaurantListingModule { }
