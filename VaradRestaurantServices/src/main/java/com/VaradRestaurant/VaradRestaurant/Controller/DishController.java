package com.VaradRestaurant.VaradRestaurant.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.VaradRestaurant.VaradRestaurant.Bean.DishBean;
import com.VaradRestaurant.VaradRestaurant.Repository.DishRepository;

@RestController
@RequestMapping("/api/v1")
public class DishController {

    @Autowired
    private DishRepository dishRepository;

    @GetMapping("/trendingDishes/{limit}")
    public List<DishBean> TopDish(@PathVariable int limit){
        return new ArrayList<>();
    }


    @GetMapping("/dish/test")
    public String test(){
        return "hello";
    }

    @PostMapping("/dish")
    public void addDish(@RequestBody DishBean dishBean){
        dishRepository.save(dishBean);
    }
}
