package com.zenpaws.zenpaws.Repository;

import com.zenpaws.zenpaws.Model.Pet;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface PetRepository extends MongoRepository<Pet, String> {
    List<Pet> findByType(String type);
}
