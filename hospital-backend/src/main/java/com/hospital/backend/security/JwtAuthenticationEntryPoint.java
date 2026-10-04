package com.hospital.backend.security;

import java.io.IOException;
import java.time.LocalDateTime;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException authException)
            throws IOException, ServletException {

        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType("application/json");

        String json = """
                {
                  "timestamp":"%s",
                  "status":401,
                  "error":"Unauthorized",
                  "message":"Access Denied. Please login first.",
                  "path":"%s"
                }
                """.formatted(
                        LocalDateTime.now(),
                        request.getRequestURI()
                );

        response.getWriter().write(json);
    }
}