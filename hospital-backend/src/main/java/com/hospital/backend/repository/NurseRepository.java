package com.hospital.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.backend.entity.Nurse;

@Repository
public interface NurseRepository extends JpaRepository<Nurse, Long> {

    // Find nurse by email
    Nurse findByUserEmail(String email);

    // Find nurse by user id
    Nurse findByUserId(Long userId);

    // Find nurses by department
    List<Nurse> findByDepartment(String department);

    // Find nurses by shift
    List<Nurse> findByShift(String shift);

}