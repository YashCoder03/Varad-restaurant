package com.VaradRestaurant.VaradRestaurant.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.VaradRestaurant.VaradRestaurant.Bean.UserBean;

public interface UserRepository extends MongoRepository<UserBean,String>{

    Optional<UserBean> findByUserName(String username);
    
}
