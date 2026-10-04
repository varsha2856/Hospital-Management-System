package com.hospital.backend.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hospital.backend.dto.LoginRequest;
import com.hospital.backend.dto.RegisterRequest;
import com.hospital.backend.entity.Role;
import com.hospital.backend.entity.User;
import com.hospital.backend.repository.UserRepository;
import com.hospital.backend.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // =========================================
    // REGISTER USER
    // =========================================
    @Override
    public String register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return "Email already exists";
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole());

        userRepository.save(user);

        return "User Registered Successfully";
    }

    // =========================================
    // LOGIN USER
    // =========================================
    @Override
    public User login(LoginRequest request) {

        User user =
                userRepository.findByEmail(request.getEmail()).orElse(null);

        if (user == null) {
            return null;
        }

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {
            return null;
        }

        return user;
    }

    // =========================================
    // GET USER BY EMAIL
    // =========================================
    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    // =========================================
    // GET ALL USERS
    // =========================================
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // =========================================
    // GET USER BY ID
    // =========================================
    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    // =========================================
    // UPDATE USER
    // =========================================
    @Override
    public User updateUser(Long id, User user) {

        User existingUser =
                userRepository.findById(id).orElse(null);

        if (existingUser == null) {
            return null;
        }

        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());

        if (user.getPassword() != null &&
                !user.getPassword().isBlank()) {

            existingUser.setPassword(
                    passwordEncoder.encode(user.getPassword()));
        }

        existingUser.setRole(user.getRole());

        return userRepository.save(existingUser);
    }

    // =========================================
    // DELETE USER
    // =========================================
    @Override
    public void deleteUser(Long id) {

        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
        }

    }

    // =========================================
    // GET USERS BY ROLE
    // =========================================
    @Override
    public List<User> getUsersByRole(Role role) {
        return userRepository.findByRole(role);
    }

}