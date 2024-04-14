import { FoodItemPedido } from "./foodItemPedido.model";
import { Restaurant } from "./restaurant.model";

export interface FoodCataloguePage{
    foodItemsList:FoodItemPedido[];
    restaurant: Restaurant;
}