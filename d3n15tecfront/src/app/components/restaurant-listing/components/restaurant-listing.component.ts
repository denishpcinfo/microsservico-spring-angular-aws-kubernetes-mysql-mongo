import { Component, OnDestroy } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/restaurant.model';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css']
})
export class RestaurantListingComponent implements OnDestroy {

  public restaurantList: Restaurant[] = [];

  public page = 1;
  public count = 0;
  public pageSize = 12;
  public pageSizes = [12, 24, 36];
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router, 
    private restaurantService: RestaurantService
    ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
    this.getAllRestaurantsPage();
  }

  onButtonClick(id: number) {
    this.router.navigate(['/food', id]);
  }

  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.getAllRestaurantsPage();
  }


  getAllRestaurantsPage(): void {
    const params = this.getRequestParams(this.page, this.pageSize);

    this.restaurantService.getAll(params)
    .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          const { restaurantList, totalItems } = data;
          this.restaurantList = restaurantList;
          this.count = totalItems;
        }
      });
  }

    getAllRestaurants() {
    this.restaurantService.getAllRestaurants()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      data => {
        this.restaurantList = data;
      }
    )
  }

}
