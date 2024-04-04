import { FoodItem } from "src/app/shared/models/foodItem.model";
import { Restaurant } from "./restaurant.model";

export interface OrderDTO{
    foodItemsList?: FoodItem[];
    userId?: number;
    restaurant?: Restaurant;
}