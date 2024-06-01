import { FoodItemPedido } from "./food-item-pedido.model";
import { Restaurant } from "./restaurant.model";

export interface FoodCataloguePage{
    foodItemsList:FoodItemPedido[];
    restaurant: Restaurant;
}