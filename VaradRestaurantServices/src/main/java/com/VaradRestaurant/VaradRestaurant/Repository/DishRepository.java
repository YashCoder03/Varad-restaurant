package com.VaradRestaurant.VaradRestaurant.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.VaradRestaurant.VaradRestaurant.Bean.DishBean;

public interface  DishRepository extends MongoRepository<DishBean, String> {

    DishBean findByName(String name);
    DishBean findById(String id);
}