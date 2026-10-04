package com.hospital.backend.service;

import java.util.List;

import com.hospital.backend.entity.ContactMessage;

public interface ContactMessageService {

    ContactMessage saveMessage(ContactMessage message);

    List<ContactMessage> getAllMessages();

    void deleteMessage(Long id);

}