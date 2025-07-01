package com.VaradRestaurant.VaradRestaurant.Bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "RatingDish")
public class RatingDish {

    @Id
    private String id;
    private String userId;
    private String dishId;
    private float rating;
    private String comment;

    public RatingDish(String comment, String dishId, float rating, String userId) {
        this.comment = comment;
        this.dishId = dishId;
        this.rating = rating;
        this.userId = userId;
    }
       

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getDishId() {
        return dishId;
    }

    public void setDishId(String dishId) {
        this.dishId = dishId;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    
}
