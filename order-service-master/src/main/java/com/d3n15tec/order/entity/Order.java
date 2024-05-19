package com.d3n15tec.order.entity;

import com.d3n15tec.order.dto.FoodItemsDTO;
import com.d3n15tec.order.dto.Restaurant;
import com.d3n15tec.order.dto.UserDTO;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("order")
public class Order implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    private Integer orderId;

    private List<FoodItemsDTO> foodItemsList;

    private Restaurant restaurant;

    private UserDTO user;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime dataPedido;

    private String statusPedido;

    private BigDecimal valorTotal;
}
