package com.zenpaws.zenpaws.Repository;

import com.zenpaws.zenpaws.Model.Feedback;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeedbackRepository extends MongoRepository<Feedback, String> {
}
