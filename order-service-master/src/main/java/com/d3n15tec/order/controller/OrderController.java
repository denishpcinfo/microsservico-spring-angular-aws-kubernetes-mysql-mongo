package com.d3n15tec.order.controller;

import com.d3n15tec.order.dto.OrderDTOFromFE;
import com.d3n15tec.order.entity.Order;
import com.d3n15tec.order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pedido")
@CrossOrigin
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/salvar-pedido")
    public ResponseEntity<Order> saveOrder(@RequestBody OrderDTOFromFE orderDetails){
        Order orderSavedInDB = orderService.saveOrderInDb(orderDetails);
        return new ResponseEntity<>(orderSavedInDB, HttpStatus.CREATED);
    }



}
