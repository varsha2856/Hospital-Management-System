package com.hospital.backend.service;

import java.util.List;

import com.hospital.backend.entity.Doctor;

public interface DoctorService {

    // Add Doctor
    Doctor saveDoctor(Doctor doctor);

    // Get All Doctors
    List<Doctor> getAllDoctors();

    // Get Doctor By ID
    Doctor getDoctorById(Long id);

    // Update Doctor
    Doctor updateDoctor(Long id, Doctor doctor);

    // Delete Doctor
    void deleteDoctor(Long id);

    // Get Doctor By Email
    Doctor getDoctorByEmail(String email);

    // Get Doctors By Specialization
    List<Doctor> getDoctorsBySpecialization(String specialization);

    // Get Experienced Doctors
    List<Doctor> getExperiencedDoctors(int experience);

}