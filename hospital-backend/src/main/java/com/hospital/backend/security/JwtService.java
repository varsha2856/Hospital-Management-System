package com.hospital.backend.security;

import java.security.Key;
import java.util.Base64;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

    @Value("${jwt.secret:4MkRBHR5CZKivdaSi2NZH80wZLH92UquPLB8Hthe3iis+KKgOi6Sp5ZcmqXqLOw0E6V4007FX60PiU313fxYng==}")
    private String secretKeyString;

    @Value("${jwt.expiration.ms:86400000}")
    private long jwtExpirationMs;

    private Key getSigningKey() {
        try {
            byte[] keyBytes = Base64.getDecoder().decode(secretKeyString);
            if (keyBytes.length < 32) {
                // fallback if not proper Base64 or too short
                return Keys.hmacShaKeyFor(secretKeyString.getBytes());
            }
            return Keys.hmacShaKeyFor(keyBytes);
        } catch (IllegalArgumentException e) {
            return Keys.hmacShaKeyFor(secretKeyString.getBytes());
        }
    }

    // Generate JWT Token with email and role
    public String generateToken(String email, String role) {
        return Jwts.builder()
                .setSubject(email)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .signWith(getSigningKey(), SignatureAlgorithm.HS512)
                .compact();
    }

    // Generate JWT Token (backward compatibility)
    public String generateToken(String email) {
        return generateToken(email, "PATIENT");
    }

    public String generateToken(UserDetails userDetails) {
        String role = userDetails.getAuthorities().stream()
                .findFirst().map(a -> a.getAuthority().replace("ROLE_", ""))
                .orElse("PATIENT");
        return generateToken(userDetails.getUsername(), role);
    }

    // Extract Email
    public String extractEmail(String token) {
        return extractClaims(token).getSubject();
    }

    public String extractRole(String token) {
        Claims claims = extractClaims(token);
        return claims.get("role", String.class);
    }

    // Extract Claims
    public Claims extractClaims(String token) {

        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // Check Token Expiry
    public boolean isTokenExpired(String token) {

        return extractClaims(token)
                .getExpiration()
                .before(new Date());
    }

    // Validate Token with UserDetails
    public boolean validateToken(String token, UserDetails userDetails) {

        String email = extractEmail(token);

        return email.equals(userDetails.getUsername())
                && !isTokenExpired(token);
    }

    // Keep old method for compatibility
    public boolean validateToken(String token) {

        try {

            return !isTokenExpired(token);

        } catch (Exception e) {

            return false;
        }
    }

}