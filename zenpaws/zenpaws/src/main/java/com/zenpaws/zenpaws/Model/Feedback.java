package com.zenpaws.zenpaws.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "feedback")
public class Feedback {

    @Id
    private String id;

    private int rating;

    private String message;

    public Feedback() {}

    public Feedback(int rating, String message) {
        this.rating = rating;
        this.message = message;
    }

    // ✅ Corrected Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public int getRating() { return rating; }
    public void setRating(int rating) { this.rating = rating; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
