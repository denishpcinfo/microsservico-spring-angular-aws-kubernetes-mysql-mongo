package com.d3n15tec.order.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FoodItemsDTO {

    private int id;
    private String itemName;
    private String itemDescription;
    private boolean isVeg;
    private BigDecimal price;
    private Integer restaurantId;
    private Integer quantidadeEstoque;
    private Integer quantidadePedido;

}
