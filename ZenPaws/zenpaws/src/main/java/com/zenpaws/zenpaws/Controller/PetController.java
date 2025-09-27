package com.zenpaws.zenpaws.Controller;

import com.zenpaws.zenpaws.Model.Pet;
import com.zenpaws.zenpaws.Repository.PetRepository;
import com.zenpaws.zenpaws.Service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class PetController {

    @Autowired
    private PetRepository petRepository;

    @Autowired
    private PetService petService;

    @PostMapping("/pets")
    public ResponseEntity<?> addPet(
            @RequestParam("name") String name,
            @RequestParam("type") String type,
            @RequestParam("description") String description,
            @RequestParam("price") double price,
            @RequestParam("quantity") int quantity,
            @RequestParam("image") MultipartFile imageFile
    ) {
        try {
            Pet savedPet = petService.savePet(name, type, description, price, quantity, imageFile);
            return ResponseEntity.ok(savedPet);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Image upload failed: " + e.getMessage());
        }
    }

    @GetMapping("/pets")
    public ResponseEntity<List<Pet>> getAllPets() {
        return ResponseEntity.ok(petRepository.findAll());
    }

    @GetMapping("/pets/type/{type}")
    public ResponseEntity<List<Pet>> getPetsByType(@PathVariable String type) {
        return ResponseEntity.ok(petRepository.findByType(type));
    }

    @DeleteMapping("/pets/{id}")
    public ResponseEntity<String> deletePet(@PathVariable String id) {
        petRepository.deleteById(id);
        return ResponseEntity.ok("Pet deleted successfully");
    }
}
