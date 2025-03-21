package com.zenpaws.test.controller;

import com.zenpaws.test.model.User;
import com.zenpaws.test.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Sign-Up Endpoint
    @PostMapping("/signup")
    public ResponseEntity<User> signUp(@RequestBody User user) {
        return ResponseEntity.ok(userService.signUp(user));
    }

    // Sign-In Endpoint
    @PostMapping("/signin")
    public ResponseEntity<String> signIn(@RequestParam String username, @RequestParam String password) {
        Optional<User> user = userService.signIn(username, password);
        return user.isPresent() ?
                ResponseEntity.ok("Login successful") :
                ResponseEntity.status(401).body("Invalid credentials");
    }

    // Update User Endpoint
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User updatedUser) {
        return userService.updateUser(id, updatedUser)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete User Endpoint
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
