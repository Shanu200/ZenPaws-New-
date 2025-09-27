package com.zenpaws.zenpaws.Service;

import com.zenpaws.zenpaws.Model.Pet;
import com.zenpaws.zenpaws.Repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class PetService {

    @Autowired
    private PetRepository petRepository;

    // Absolute folder for uploaded images
    private final String uploadDir = "C:/Users/Acer/Documents/GitHub/ZenPaws-New-/ZenPaws/uploads/";

    public Pet savePet(String name, String type, String description, double price, int quantity, MultipartFile image) throws IOException {
        // Create upload folder if it doesn't exist
        File dir = new File(uploadDir);
        if (!dir.exists()) {
            boolean created = dir.mkdirs();
            if (!created) {
                throw new IOException("Failed to create upload directory at " + uploadDir);
            }
        }

        // Unique filename
        String fileName = UUID.randomUUID() + "_" + image.getOriginalFilename();
        File destinationFile = new File(dir, fileName);

        // Save file
        image.transferTo(destinationFile);

        // Save Pet entity
        Pet pet = new Pet();
        pet.setName(name);
        pet.setType(type);
        pet.setDescription(description);
        pet.setPrice(price);
        pet.setQuantity(quantity);
        pet.setImageUrl("/uploads/" + fileName);

        return petRepository.save(pet);
    }
}
