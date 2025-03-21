package com.zenpaws.test.service;

import com.zenpaws.test.model.User;
import com.zenpaws.test.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Sign-Up Method
    public User signUp(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Hash password
        return userRepository.save(user);
    }

    // Sign-In Method
    public Optional<User> signIn(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            return user;
        }
        return Optional.empty();
    }

    // Update User Method
    public Optional<User> updateUser(String id, User updatedUser) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(updatedUser.getUsername());
            user.setEmail(updatedUser.getEmail());

            if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
                user.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
            }

            return userRepository.save(user);
        });
    }

    // Delete User Method
    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }
}

