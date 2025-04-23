package com.VaradRestaurant.VaradRestaurant.Config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
public class CloudinaryConfig {

    @Value("${cloudinary.cloud-name}")
    private String cloudName;

    @Value("${cloudinary.api-key}")
    private String apiKey;

    @Value("${cloudinary.api-secret}")
    private String apiSecret;

    @Value("${CLOUDINARY_URL}")
    private String cloudinaryURL;

    @Bean
    public Cloudinary cloudinary() {
        
        return new Cloudinary(cloudinaryURL);
    }
}