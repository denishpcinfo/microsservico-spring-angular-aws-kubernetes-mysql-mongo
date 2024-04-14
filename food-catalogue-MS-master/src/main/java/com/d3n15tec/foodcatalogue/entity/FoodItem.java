package com.d3n15tec.foodcatalogue.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FoodItem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String itemName;

    private String itemDescription;

    private boolean isVeg;

    private BigDecimal price;

    private Integer restaurantId;

    @Column(nullable = false, columnDefinition = "INT DEFAULT 0")
    private Integer quantidadeEstoque;

    @Column(nullable = false, columnDefinition = "INT DEFAULT 0")
    private Integer quantidadePedido;

}
