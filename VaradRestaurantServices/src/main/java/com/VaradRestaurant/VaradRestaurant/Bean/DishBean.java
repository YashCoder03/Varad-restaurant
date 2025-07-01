package com.VaradRestaurant.VaradRestaurant.Bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.annotation.Generated;



@Document(collection = "dishes")
public class DishBean {
    @Id
    private String id;
    private String name;
    private String description;
    private int price;
    private String dishImageURL;
    private int categoryId;
    private boolean isAvailable;

    public DishBean(String name, String description, int price, String dishImageURL, int categoryId,
            boolean isAvailable) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.dishImageURL = dishImageURL;
        this.categoryId = categoryId;
        this.isAvailable = isAvailable;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getDishImageURL() {
        return dishImageURL;
    }

    public void setDishImageURL(String dishImageURL) {
        this.dishImageURL = dishImageURL;
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
    
}
