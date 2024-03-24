import { FoodItem } from "./foodItem.model";
import { Restaurant } from "./restaurant.model";

export interface FoodCataloguePage{
    foodItemsList:FoodItem[];
    restaurant:Restaurant;
}