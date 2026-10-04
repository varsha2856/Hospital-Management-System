package com.hospital.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hospital.backend.dto.LoginRequest;
import com.hospital.backend.dto.LoginResponse;
import com.hospital.backend.dto.RegisterRequest;
import com.hospital.backend.entity.User;
import com.hospital.backend.security.JwtService;
import com.hospital.backend.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    // ==========================
    // PATIENT REGISTRATION
    // ==========================
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {

        try {

            String message = userService.register(request);

            return ResponseEntity.ok(message);

        } catch (Exception e) {

            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(e.getMessage());
        }
    }

    // ==========================
    // LOGIN
    // ==========================
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {

        LoginResponse response = new LoginResponse();

        try {

            User user = userService.login(request);

            if (user == null) {

                response.setMessage("Invalid Email or Password");

                return ResponseEntity
                        .status(HttpStatus.UNAUTHORIZED)
                        .body(response);
            }

            // Verify selected role
            if (!user.getRole().name().equalsIgnoreCase(request.getRole())) {

                response.setMessage(
                        "Access Denied. Please login using the correct role."
                );

                return ResponseEntity
                        .status(HttpStatus.FORBIDDEN)
                        .body(response);
            }

            String token = jwtService.generateToken(user.getEmail());

            response.setToken(token);
            response.setRole(user.getRole().name());
            response.setMessage("Login Successful");

            return ResponseEntity.ok(response);

        } catch (Exception e) {

            response.setMessage("Login Failed");

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(response);
        }
    }

}