import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { FoodItemService } from 'src/app/services/fooditem.service';
import { FoodCataloguePage } from 'src/app/shared/models/food-catalogue-page.model';
import { FoodItemPedido } from 'src/app/shared/models/food-item-pedido.model';

@Component({
  selector: 'app-food-catalogue',
  templateUrl: './food-catalogue.component.html',
  styleUrls: ['./food-catalogue.component.css']
})
export class FoodCatalogueComponent implements OnDestroy {

  public restaurantId: number;
  public foodItemResponse: FoodCataloguePage;
  public foodItemCart: FoodItemPedido[] = [];
  public orderSummary: FoodCataloguePage;
  public nomeRestaurante: string;
  public descricaoRestaurante: string;

  public cardapioRestaurante: FoodItemPedido[] = [];
  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, 
              private foodItemService: FoodItemService, 
              private router: Router,
              private toastr: ToastrService) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
    this.route.paramMap
    .pipe(takeUntil(this.destroy$))
    .subscribe(params => {
      this.restaurantId = + params.get('id');
    });
    this.getFoodItemsByRestaurant(this.restaurantId);
  }

  getFoodItemsByRestaurant(restaurant: number) {
    this.foodItemService.getFoodItemsByRestaurant(restaurant)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      data => {
        this.foodItemResponse = data;
        this.nomeRestaurante = data.restaurant.name;
        this.descricaoRestaurante = data.restaurant.restaurantDescription;
        this.cardapioRestaurante = data.foodItemsList;
      }
    )
  }

  increment(index: any) {
    this.cardapioRestaurante[index].quantidadePedido++;
  }

  decrement(index: any) {
    if (this.cardapioRestaurante[index].quantidadePedido > 0){
      this.cardapioRestaurante[index].quantidadePedido--;
    }
  }

  onCheckOut() {
    this.foodItemCart = this.cardapioRestaurante;
    this.orderSummary = { foodItemsList: [] = [], restaurant: null }

    const novoArray = this.foodItemCart.filter((item) => item.quantidadePedido > 0);
    if(novoArray.length == 0){
      this.toastr.warning('Adicione algum item ao pedido!');
      return;
    } 
    this.orderSummary.foodItemsList = novoArray;
    this.orderSummary.restaurant = this.foodItemResponse.restaurant;
    this.router.navigate(['/pedidos'], { queryParams: { data: JSON.stringify(this.orderSummary) } });
  }
}
