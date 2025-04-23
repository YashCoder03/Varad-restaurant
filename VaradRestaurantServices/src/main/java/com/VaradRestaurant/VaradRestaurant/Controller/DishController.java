package com.VaradRestaurant.VaradRestaurant.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.VaradRestaurant.VaradRestaurant.Bean.DishBean;
import com.VaradRestaurant.VaradRestaurant.Repository.DishRepository;

@RestController
@RequestMapping("/api/v1")
public class DishController {

    @Autowired
    private DishRepository dishRepository;

    @GetMapping("/dish/{limit}")
    public List<DishBean> TopDish(@PathVariable int limit){

        List<DishBean> ls =  dishRepository.findAll();
        return ls;

    }

    @GetMapping("/dish/test")
    public String test(){
        return "hello";
    }
}
