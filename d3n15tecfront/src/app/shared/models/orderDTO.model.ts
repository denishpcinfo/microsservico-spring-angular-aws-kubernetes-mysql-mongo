import { Restaurant } from "./restaurant.model";
import { FoodItemPedido } from "./foodItemPedido.model";

export interface OrderDTO{
    foodItemsList?: FoodItemPedido[];
    userId?: number;
    restaurant?: Restaurant;
}