package com.zenpaws.zenpaws.Service;

import com.zenpaws.zenpaws.Model.User;
import com.zenpaws.zenpaws.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Register user
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    // Login user
    public User loginUser(String email, String password) {
        User existingUser = userRepository.findByEmail(email);
        if (existingUser != null && existingUser.getPassword().equals(password)) {
            return existingUser;
        } else {
            throw new RuntimeException("Invalid email or password");
        }
    }
}
