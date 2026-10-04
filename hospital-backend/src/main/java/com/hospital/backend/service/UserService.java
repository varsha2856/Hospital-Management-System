package com.hospital.backend.service;

import java.util.List;

import com.hospital.backend.dto.LoginRequest;
import com.hospital.backend.dto.RegisterRequest;
import com.hospital.backend.entity.Role;
import com.hospital.backend.entity.User;

public interface UserService {

    // Register User
    String register(RegisterRequest request);

    // Login User
    User login(LoginRequest request);

    // Get User By Email
    User getUserByEmail(String email);

    // Get All Users
    List<User> getAllUsers();

    // Get User By ID
    User getUserById(Long id);

    // Update User
    User updateUser(Long id, User user);

    // Delete User
    void deleteUser(Long id);

    // Get Users By Role
    List<User> getUsersByRole(Role role);

}