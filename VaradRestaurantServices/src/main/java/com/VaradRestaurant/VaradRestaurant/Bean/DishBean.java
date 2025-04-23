package com.VaradRestaurant.VaradRestaurant.Bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity(name="Dish")
public class DishBean {

    @Id
    @GeneratedValue
    int id;

    String name;

    int categoryId;

    String dishURL;
    

    public DishBean() {
    }

    public DishBean(String name, int categoryId, String dishURL) {
        this.name = name;
        this.categoryId = categoryId;
        this.dishURL = dishURL;
    }

    public String getDishURL() {
        return dishURL;
    }

    public void setDishURL(String dishURL) {
        this.dishURL = dishURL;
    }

    public DishBean(String name, int categoryId) {
        this.name = name;
        this.categoryId = categoryId;
    }

    public DishBean(int id, String name, int categoryId) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }
}
