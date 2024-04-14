package com.d3n15tec.order.entity;


import com.d3n15tec.order.dto.FoodItemsDTO;
import com.d3n15tec.order.dto.Restaurant;
import com.d3n15tec.order.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("order")
public class Order {
    private Integer orderId;
    private List<FoodItemsDTO> foodItemsList;
    private Restaurant restaurant;
    private Integer userId;

}
