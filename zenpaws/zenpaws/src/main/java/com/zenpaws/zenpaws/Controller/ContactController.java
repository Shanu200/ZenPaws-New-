package com.zenpaws.zenpaws.Controller;

import com.zenpaws.zenpaws.Model.Contact;
import com.zenpaws.zenpaws.Service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*") // Allows requests from frontend (e.g., React app)
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public Contact submitContact(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }
}
