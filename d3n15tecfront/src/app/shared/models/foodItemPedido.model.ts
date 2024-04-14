export interface FoodItemPedido {
    id?: number;
    itemName?: string;
    itemDescription?: string;
    veg?: boolean;
    price?: number;
    restaurantId?: number;
    quantidadeEstoque: number;
    quantidadePedido: number;
}


