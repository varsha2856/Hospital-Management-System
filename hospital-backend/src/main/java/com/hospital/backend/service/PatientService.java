package com.hospital.backend.service;

import java.util.List;

import com.hospital.backend.entity.Patient;

public interface PatientService {

    // Add Patient
    Patient savePatient(Patient patient);

    // Get All Patients
    List<Patient> getAllPatients();

    // Get Patient By ID
    Patient getPatientById(Long id);

    // Update Patient
    Patient updatePatient(Long id, Patient patient);

    // Delete Patient
    void deletePatient(Long id);

    // Get Patient By Email
    Patient getPatientByEmail(String email);

    // Get Patients By Blood Group
    List<Patient> getPatientsByBloodGroup(String bloodGroup);

    // Get Patients By Gender
    List<Patient> getPatientsByGender(String gender);

}
