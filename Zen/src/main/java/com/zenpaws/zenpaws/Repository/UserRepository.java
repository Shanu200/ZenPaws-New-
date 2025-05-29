package com.zenpaws.zenpaws.Repository;

import com.zenpaws.zenpaws.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
}
