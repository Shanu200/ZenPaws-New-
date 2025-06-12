package com.zenpaws.zenpaws.Service;

import com.zenpaws.zenpaws.Model.Contact;
import com.zenpaws.zenpaws.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }
}
