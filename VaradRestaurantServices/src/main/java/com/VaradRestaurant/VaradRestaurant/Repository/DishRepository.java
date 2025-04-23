package com.VaradRestaurant.VaradRestaurant.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.VaradRestaurant.VaradRestaurant.Bean.DishBean;

public interface  DishRepository extends JpaRepository<DishBean, Long> {
    
}