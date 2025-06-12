package com.zenpaws.zenpaws.Repository;

import com.zenpaws.zenpaws.Model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends MongoRepository<Contact, String> {
}
