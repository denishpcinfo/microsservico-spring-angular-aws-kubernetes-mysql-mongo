import { Restaurant } from "./restaurant.model";
import { FoodItemPedido } from "./food-item-pedido.model";
import { UserDTO } from "./user-DTO.model";

export class PedidoEditar {
    constructor(
        public orderId?: number,
        public foodItemsList?: FoodItemPedido[],
        public restaurant?: Restaurant,
        public user?: UserDTO,
        public dataPedido?: Date,
        public statusPedido?: string,
        public valorTotal?: number
    ){}
}