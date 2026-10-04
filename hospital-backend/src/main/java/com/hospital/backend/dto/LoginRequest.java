package com.hospital.backend.dto;

public class LoginRequest {

    private String email;
    private String password;
    private String role;

    // Default Constructor
    public LoginRequest() {
    }

    // Parameterized Constructor
    public LoginRequest(String email, String password, String role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }

    // Get Email
    public String getEmail() {
        return email;
    }

    // Set Email
    public void setEmail(String email) {
        this.email = email;
    }

    // Get Password
    public String getPassword() {
        return password;
    }

    // Set Password
    public void setPassword(String password) {
        this.password = password;
    }

    // Get Role
    public String getRole() {
        return role;
    }

    // Set Role
    public void setRole(String role) {
        this.role = role;
    }

}