package com.VaradRestaurant.VaradRestaurant.Bean;

import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "dishes")
public class DishBean {
    int id;

    String name;

    int categoryId;

    String dishURL;

    int price;

    int rating;
    
    boolean isAvailable;



    public DishBean(int categoryId, String dishURL, boolean isAvailable, String name, int price, int rating) {
        this.categoryId = categoryId;
        this.dishURL = dishURL;
        this.isAvailable = isAvailable;
        this.name = name;
        this.price = price;
        this.rating = rating;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public DishBean() {
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

    public boolean isIsAvailable() {
        return isAvailable;
    }

    public void setIsAvailable(boolean isAvailable) {
        this.isAvailable = isAvailable;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
