import { Restaurant } from "./restaurant.model";
import { FoodItemPedido } from "./foodItemPedido.model";
import { UserDTO } from "./userDTO.model";
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