package com.hospital.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.backend.entity.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    // Find doctors by specialization
    List<Doctor> findBySpecialization(String specialization);

    // Find experienced doctors
    List<Doctor> findByExperienceGreaterThanEqual(int experience);

    // Find doctor by user email
    Doctor findByUserEmail(String email);

    // Find doctor by user id
    Doctor findByUserId(Long userId);

}