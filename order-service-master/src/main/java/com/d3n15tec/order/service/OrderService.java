package com.d3n15tec.order.service;

import com.d3n15tec.order.dto.OrderDTO;
import com.d3n15tec.order.dto.OrderDTOFromFE;
import com.d3n15tec.order.dto.UserDTO;
import com.d3n15tec.order.entity.Order;
import com.d3n15tec.order.mapper.OrderMapper;
import com.d3n15tec.order.repo.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class OrderService {

    @Autowired
    OrderRepo orderRepo;

    @Autowired
    SequenceGenerator sequenceGenerator;

    @Autowired
    RestTemplate restTemplate;

    public Order saveOrderInDb(OrderDTOFromFE orderDetails) {
        Integer newOrderID = sequenceGenerator.generateNextOrderId();
        Order orderToBeSaved = new Order(newOrderID, orderDetails.getFoodItemsList(), orderDetails.getRestaurant(), orderDetails.getUserId());
        return orderRepo.save(orderToBeSaved);
    }

    private UserDTO fetchUserDetailsFromUserId(Integer userId) {
       return restTemplate.getForObject("http://USER-SERVICE/profile/" + userId, UserDTO.class);
    }
}
