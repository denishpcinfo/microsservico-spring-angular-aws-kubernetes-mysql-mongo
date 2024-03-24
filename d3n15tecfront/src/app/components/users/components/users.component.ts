import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

 // public restaurantList: Restaurant[];

  total$: Observable<number>;
  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [10, 20, 30];

  constructor() {}


  handlePageChange(event: number): void {
    this.page = event;
    this.getAllRestaurantsPage();
  }

  getAllRestaurantsPage(): void {
    const params = this.getRequestParams(this.page, this.pageSize);

    // this.restaurantService.getAll(params)
    //   .subscribe({
    //     next: (data) => {
    //       const { restaurantList, totalItems } = data;
    //       this.restaurantList = restaurantList;
    //       this.count = totalItems;
    //     }
    //   });
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
}
