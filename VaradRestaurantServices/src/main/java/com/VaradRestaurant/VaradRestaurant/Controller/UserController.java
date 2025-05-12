package com.VaradRestaurant.VaradRestaurant.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.VaradRestaurant.VaradRestaurant.Auth.AuthRequest;
import com.VaradRestaurant.VaradRestaurant.Auth.Jwtutil;
import com.VaradRestaurant.VaradRestaurant.Bean.UserBean;
import com.VaradRestaurant.VaradRestaurant.Repository.UserRepository;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private Jwtutil jwtUtil;


    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthRequest authRequest){

        if(userRepository.findByUserName(authRequest.getUsername()).isPresent()){
            return ResponseEntity.badRequest().body("UserName Already Exist");
        }

        String encodedPassword = passwordEncoder.encode(authRequest.getPassword());
        UserBean userBean = new UserBean(authRequest.getUsername(),encodedPassword);
        return ResponseEntity.ok("User Register Successfully");
    }

    @PostMapping("/login")
    public String login(@RequestBody AuthRequest authRequest){
        try{
            Optional<UserBean> user = userRepository.findByUserName(authRequest.getUsername());
            if (user.isEmpty()) {
                throw new RuntimeException("Invalid username or password");
            }

            // Check if the password is correct
            if (!passwordEncoder.matches(authRequest.getPassword(), user.get().getPassword())) {
                throw new RuntimeException("Invalid username or password");
            }

            // Generate JWT
            return jwtUtil.generateToken(user.get().getUsername());

        }
        catch(RuntimeException e){
            return e.getMessage();
        }
    }
}
