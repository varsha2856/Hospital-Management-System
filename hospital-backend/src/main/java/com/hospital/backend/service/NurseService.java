package com.hospital.backend.service;

import java.util.List;

import com.hospital.backend.entity.Nurse;

public interface NurseService {

    // Add Nurse
    Nurse saveNurse(Nurse nurse);

    // Get All Nurses
    List<Nurse> getAllNurses();

    // Get Nurse By ID
    Nurse getNurseById(Long id);

    // Update Nurse
    Nurse updateNurse(Long id, Nurse nurse);

    // Delete Nurse
    void deleteNurse(Long id);

    // Get Nurse By Email
    Nurse getNurseByEmail(String email);

    // Get Nurses By Department
    List<Nurse> getNursesByDepartment(String department);

    // Get Nurses By Shift
    List<Nurse> getNursesByShift(String shift);

}