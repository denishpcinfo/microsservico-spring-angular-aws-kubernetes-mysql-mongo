package com.d3n15tec.restaurantlisting.repo;

import com.d3n15tec.restaurantlisting.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Repository
public interface RestaurantRepo extends JpaRepository<Restaurant, Integer> {
    Page<Restaurant> findAll(Pageable pageable);

    @Query(value = "SELECT * FROM restaurantdb.restaurant limit 0, 5 ", nativeQuery = true)
    List<Restaurant> buscarRestaurantSlider();

}
