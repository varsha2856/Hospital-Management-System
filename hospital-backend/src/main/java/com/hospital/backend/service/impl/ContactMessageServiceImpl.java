package com.hospital.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.backend.entity.ContactMessage;
import com.hospital.backend.repository.ContactMessageRepository;
import com.hospital.backend.service.ContactMessageService;

@Service
public class ContactMessageServiceImpl implements ContactMessageService {

    @Autowired
    private ContactMessageRepository repository;

    @Override
    public ContactMessage saveMessage(ContactMessage message) {
        return repository.save(message);
    }

    @Override
    public List<ContactMessage> getAllMessages() {
        return repository.findAll();
    }

    @Override
    public void deleteMessage(Long id) {
        repository.deleteById(id);
    }
}