package com.d3n15tec.order.repo;

import com.d3n15tec.order.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepo extends MongoRepository<Order, Integer>{

 Page<Order> findBydataPedido(Pageable pageable, String dataPedido);

 Page<Order> findByOrderId(Pageable pageable, Integer findByorderId);

 @Query("{ 'restaurant.name' : { $regex: ?0, $options: 'i' } }")
 Page<Order> findByRestaurantName(String name, Pageable pageable);

 @Query("{ 'user.nome' : { $regex: ?0, $options: 'i' } }")
 Page<Order> findByUserDTONome(String name, Pageable pageable);
 }

