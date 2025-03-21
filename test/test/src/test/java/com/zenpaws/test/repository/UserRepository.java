package com.zenpaws.test.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import com.zenpaws.test.model.User;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);  // Find user by email
}
