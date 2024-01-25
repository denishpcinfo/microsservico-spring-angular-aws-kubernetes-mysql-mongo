import { Component } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/Restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css']
})
export class RestaurantListingComponent {

  public restaurantList: Restaurant[];

  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [10, 20, 30];

  
  constructor(private router: Router, private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getAllRestaurantsPage();
  }
  
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  getRandomImage(): string {
    const imageCount = 8; // Ajuste este número com base no número de imagens na sua pasta de ativos
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`; // Substitua pelo padrão de nome de arquivo da sua imagem
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
      .subscribe({
        next: (data) => {
          const { restaurantList, totalItems } = data;
          this.restaurantList = restaurantList;
          this.count = totalItems;
        }
      });
  }

    getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurantList = data;
      }
    )
  }

}
