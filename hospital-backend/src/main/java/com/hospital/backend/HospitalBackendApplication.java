package com.hospital.backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.hospital.backend.entity.Role;
import com.hospital.backend.entity.User;
import com.hospital.backend.repository.UserRepository;

@SpringBootApplication
public class HospitalBackendApplication {

    private static final Logger logger = LoggerFactory.getLogger(HospitalBackendApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(HospitalBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner createDefaultAdmin(UserRepository userRepository,
                                         PasswordEncoder passwordEncoder,
                                         @Value("${admin.email:admin@hospital.com}") String adminEmail,
                                         @Value("${admin.password:admin123}") String adminPassword) {

        return args -> {

            if (!userRepository.existsByEmail(adminEmail)) {

                User admin = new User();

                admin.setName("Administrator");
                admin.setEmail(adminEmail);
                admin.setPassword(passwordEncoder.encode(adminPassword));
                admin.setRole(Role.ADMIN);

                userRepository.save(admin);

                logger.info("======================================");
                logger.info("DEFAULT ADMIN CREATED - Email: {}", adminEmail);
                logger.info("======================================");

            } else {

                logger.info("ADMIN ALREADY EXISTS - Email: {}", adminEmail);

            }

        };
    }
}