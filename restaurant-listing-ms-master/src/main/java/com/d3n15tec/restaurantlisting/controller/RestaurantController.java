package com.d3n15tec.restaurantlisting.controller;


import com.d3n15tec.restaurantlisting.dto.RestaurantDTO;
import com.d3n15tec.restaurantlisting.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;
import java.util.List;
import java.util.HashMap;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;

@RestController
@RequestMapping("/restaurant")
@CrossOrigin
public class RestaurantController {

    @Autowired
    RestaurantService restaurantService;


    @GetMapping("/fetchAllRestaurants")
    public ResponseEntity<List<RestaurantDTO>> fetchAllRestaurants(){
        List<RestaurantDTO> allRestaurants = restaurantService.findAllRestaurants();
        return new ResponseEntity<>(allRestaurants, HttpStatus.OK);
    }

    @PostMapping("/addRestaurant")
    public ResponseEntity<RestaurantDTO> saveRestaurant(@RequestBody RestaurantDTO restaurantDTO) {
        RestaurantDTO restaurantAdded = restaurantService.addRestaurantInDB(restaurantDTO);
        return new ResponseEntity<>(restaurantAdded, HttpStatus.CREATED);
    }

    @GetMapping("fetchById/{id}")
    public ResponseEntity<RestaurantDTO> findRestaurantById(@PathVariable Integer id) {
       return restaurantService.fetchRestaurantById(id);
    }


    @GetMapping("/pageAllRestaurants")
    public ResponseEntity<Map<String, Object>> findPageAllRestaurants(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

            List<RestaurantDTO> restaurantList = new ArrayList<RestaurantDTO>();
            Pageable paging = PageRequest.of(page, size);

            Page<RestaurantDTO> pageRestalrants = restaurantService.findAllRestaurantsPage(paging);
            restaurantList = pageRestalrants.getContent();

            Map<String, Object> response = new HashMap<>();
            response.put("restaurantList", restaurantList);
            response.put("currentPage", pageRestalrants.getNumber());
            response.put("totalItems", pageRestalrants.getTotalElements());
            response.put("totalPages", pageRestalrants.getTotalPages());

            return new ResponseEntity<>(response, HttpStatus.OK);

    }

}
