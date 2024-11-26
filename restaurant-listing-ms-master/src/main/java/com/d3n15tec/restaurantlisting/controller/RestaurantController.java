package com.d3n15tec.restaurantlisting.controller;

import com.d3n15tec.restaurantlisting.entity.Restaurant;
import com.d3n15tec.restaurantlisting.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;

@RestController
@RequestMapping("/api/restaurante")
@CrossOrigin
public class RestaurantController {

    @Autowired
    RestaurantService restaurantService;

    @GetMapping("/buscar-restaurantes")
    public ResponseEntity<List<Restaurant>> fetchAllRestaurants(){
        List<Restaurant> allRestaurants = restaurantService.findAllRestaurants();
        return new ResponseEntity<>(allRestaurants, HttpStatus.OK);
    }


    @GetMapping("/buscar-por-id/{id}")
    public Optional<Restaurant> findRestaurantById(@PathVariable Integer id) {
       return restaurantService.fetchRestaurantById(id);
    }


    @GetMapping("/buscar-todos-restaurantes")
    public ResponseEntity<Map<String, Object>> findPageAllRestaurants(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

            List<Restaurant> restaurantList = new ArrayList<Restaurant>();
            Pageable paging = PageRequest.of(page, size);

            Page<Restaurant> pageRestalrants = restaurantService.findAllRestaurantsPage(paging);
            restaurantList = pageRestalrants.getContent();

            Map<String, Object> response = new HashMap<>();
            response.put("restaurantList", restaurantList);
            response.put("currentPage", pageRestalrants.getNumber());
            response.put("totalItems", pageRestalrants.getTotalElements());
            response.put("totalPages", pageRestalrants.getTotalPages());

            return new ResponseEntity<>(response, HttpStatus.OK);

    }


    @GetMapping("/slaider")
    public ResponseEntity<List<Restaurant>> fetchAllRestaurantsSlider(){
        List<Restaurant> allRestaurants = restaurantService.findAllRestaurantsSlaider();
        return new ResponseEntity<>(allRestaurants, HttpStatus.OK);
    }

}
