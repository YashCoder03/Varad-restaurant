package com.VaradRestaurant.VaradRestaurant.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.VaradRestaurant.VaradRestaurant.Bean.DishBean;

public interface  DishRepository extends MongoRepository<DishBean, Long> {
    
}