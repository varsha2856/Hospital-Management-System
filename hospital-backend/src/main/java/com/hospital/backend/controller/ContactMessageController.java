package com.hospital.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hospital.backend.entity.ContactMessage;
import com.hospital.backend.service.ContactMessageService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ContactMessageController {

    @Autowired
    private ContactMessageService service;

    @PostMapping("/api/contact")
    public ContactMessage saveMessage(@RequestBody ContactMessage message) {
        return service.saveMessage(message);
    }

    @GetMapping("/api/admin/contact")
    public List<ContactMessage> getAllMessages() {
        return service.getAllMessages();
    }

    @DeleteMapping("/api/admin/contact/{id}")
    public String deleteMessage(@PathVariable Long id) {
        service.deleteMessage(id);
        return "Message Deleted";
    }
}