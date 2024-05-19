package com.d3n15tec.restaurantlisting.service;

import com.d3n15tec.restaurantlisting.dto.RestaurantDTO;
import com.d3n15tec.restaurantlisting.entity.Restaurant;
import com.d3n15tec.restaurantlisting.mapper.RestaurantMapper;
import com.d3n15tec.restaurantlisting.repo.RestaurantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RestaurantService {

    @Autowired
    RestaurantRepo restaurantRepo;

    public List<RestaurantDTO> findAllRestaurants() {
        List<Restaurant> restaurants = restaurantRepo.findAll();
        List<RestaurantDTO> restaurantDTOList = restaurants.stream().map(RestaurantMapper.INSTANCE::mapRestaurantToRestaurantDTO).collect(Collectors.toList());
        return restaurantDTOList;
    }

    public List<Restaurant> findAllRestaurantsSlaider() {
        List<Restaurant> restaurants = restaurantRepo.buscarRestaurantSlider();
        return restaurants;
    }

    public Page<Restaurant> findAllRestaurantsPage(Pageable pageable) {
        return restaurantRepo.findAll(pageable);
    }

    public RestaurantDTO addRestaurantInDB(RestaurantDTO restaurantDTO) {
        Restaurant savedRestaurant =  restaurantRepo.save(RestaurantMapper.INSTANCE.mapRestaurantDTOToRestaurant(restaurantDTO));
        return RestaurantMapper.INSTANCE.mapRestaurantToRestaurantDTO(savedRestaurant);
    }

    public ResponseEntity<RestaurantDTO> fetchRestaurantById(Integer id) {
        Optional<Restaurant> restaurant =  restaurantRepo.findById(id);
        return restaurant.map(value -> new ResponseEntity<>(RestaurantMapper.INSTANCE.mapRestaurantToRestaurantDTO(value), HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(null, HttpStatus.NOT_FOUND));
    }
}
