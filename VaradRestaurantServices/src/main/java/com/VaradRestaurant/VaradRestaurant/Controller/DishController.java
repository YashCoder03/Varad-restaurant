package com.VaradRestaurant.VaradRestaurant.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.VaradRestaurant.VaradRestaurant.Bean.DishBean;
import com.VaradRestaurant.VaradRestaurant.Repository.DishRepository;

@RestController
@RequestMapping("/api/v1")
public class DishController {

    @Autowired
    private DishRepository dishRepository;

    @GetMapping("/trendingDishes")
    public List<DishBean> TopDish(@RequestParam(required=false) int limit){
        return dishRepository.findAll();
        
    }

    @GetMapping("/dish")
    public List<DishBean> getDishes(@RequestParam(required=false) int limit){
        return dishRepository.findAll();
    }



    // @DeleteMapping("/dish/{id}")
    // public void deleteDish(@PathVariable String id){
    //     dishRepository.deleteById(id)
    // }

    @GetMapping("/dish/test")
    public String test(){
        return "hello";
    }

    @PostMapping("/dish")
    public ResponseEntity<?> addDish(@RequestBody DishBean dishBean){

        DishBean dish = dishRepository.findByName(dishBean.getName());
        if(dish != null){
            return ResponseEntity.status(409).body("Already Exist id=>" + dish.getId());
        }
        else{
            dishRepository.save(dishBean);
            return ResponseEntity.status(201).body("Created New Dish");
        }

    }

    @DeleteMapping("/dish/{id}")
    public ResponseEntity<?> deleteDish(@PathVariable String id){
        DishBean dish = dishRepository.findById(id);
        if(dish == null){
            return ResponseEntity.status(404).body("Not Found");
        }
        else{
            dishRepository.delete(dish);
            return ResponseEntity.ok("Deleted");
        }
    }
    
}
