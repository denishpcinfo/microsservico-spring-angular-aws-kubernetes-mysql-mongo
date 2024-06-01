import { Restaurant } from "./restaurant.model";
import { FoodItemPedido } from "./food-item-pedido.model";
import { UserDTO } from "./user-DTO.model";
import { StatusPedido } from "./enums/status-pedido.model";

export interface OrderDTO{
    orderId?: number;
    foodItemsList?: FoodItemPedido[];
    restaurant?: Restaurant;
    user?: UserDTO;
    dataPedido?: Date;
    statusPedido?: StatusPedido;
    valorTotal?: number;
}