package com.d3n15tec.foodcatalogue.service;

import com.d3n15tec.foodcatalogue.dto.FoodCataloguePage;
import com.d3n15tec.foodcatalogue.dto.FoodItemDTO;
import com.d3n15tec.foodcatalogue.dto.Restaurant;
import com.d3n15tec.foodcatalogue.entity.FoodItem;
import com.d3n15tec.foodcatalogue.mapper.FoodItemMapper;
import com.d3n15tec.foodcatalogue.repo.FoodItemRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class FoodCatalogueServiceTest {

    @Mock
    private FoodItemRepo foodItemRepo;

    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private FoodCatalogueService foodCatalogueService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void addFoodItem_ShouldSaveFoodItemAndReturnMappedDTO() {
        // Arrange
        FoodItemDTO foodItemDTO = new FoodItemDTO();
        FoodItem foodItem = new FoodItem();
        when(foodItemRepo.save(any(FoodItem.class))).thenReturn(foodItem);

        // Act
        FoodItemDTO result = foodCatalogueService.addFoodItem(foodItemDTO);

        // Assert
        verify(foodItemRepo, times(1)).save(any(FoodItem.class));
        Assertions.assertEquals(FoodItemMapper.INSTANCE.mapFoodItemToFoodItemDto(foodItem), result);
    }

    @Test
    void fetchFoodCataloguePageDetails_ShouldReturnFoodCataloguePage() {
        // Arrange
        int restaurantId = 123;
        List<FoodItem> foodItemList = Arrays.asList(new FoodItem());
        Restaurant restaurant = new Restaurant();
        when(foodItemRepo.findByRestaurantId(restaurantId)).thenReturn(foodItemList);
        when(restTemplate.getForObject(anyString(), eq(Restaurant.class))).thenReturn(restaurant);

        // Act
        FoodCataloguePage result = foodCatalogueService.fetchFoodCataloguePageDetails(restaurantId);

        // Assert
        verify(foodItemRepo, times(1)).findByRestaurantId(restaurantId);
        verify(restTemplate, times(1)).getForObject(anyString(), eq(Restaurant.class));
        Assertions.assertEquals(foodItemList, result.getFoodItemsList());
        Assertions.assertEquals(restaurant, result.getRestaurant());
    }
}
