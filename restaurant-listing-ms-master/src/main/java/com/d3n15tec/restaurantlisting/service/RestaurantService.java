package com.d3n15tec.restaurantlisting.service;

import com.d3n15tec.restaurantlisting.entity.Restaurant;
import com.d3n15tec.restaurantlisting.repo.RestaurantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {

    @Autowired
    RestaurantRepo restaurantRepo;

    public List<Restaurant> findAllRestaurants() {
        List<Restaurant> restaurants = restaurantRepo.findAll();
        return restaurants;
    }

    public List<Restaurant> findAllRestaurantsSlaider() {
        List<Restaurant> restaurants = restaurantRepo.buscarRestaurantSlider();
        return restaurants;
    }

    public Page<Restaurant> findAllRestaurantsPage(Pageable pageable) {
        return restaurantRepo.findAll(pageable);
    }

    public Optional<Restaurant> fetchRestaurantById(Integer id) {
        Optional<Restaurant> restaurant =  restaurantRepo.findById(id);
        return restaurant;
    }
}
