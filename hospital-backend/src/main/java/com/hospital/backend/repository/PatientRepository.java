package com.hospital.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.backend.entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

    // Find patient by email
    Patient findByUserEmail(String email);

    // Find patient by user ID
    Patient findByUserId(Long userId);

    // Find patients by blood group
    List<Patient> findByBloodGroup(String bloodGroup);

    // Find patients by gender
    List<Patient> findByGender(String gender);

}