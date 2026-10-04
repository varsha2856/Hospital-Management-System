package com.hospital.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.backend.entity.Patient;
import com.hospital.backend.repository.PatientRepository;
import com.hospital.backend.service.PatientService;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Patient getPatientById(Long id) {
        return patientRepository.findById(id).orElse(null);
    }

    @Override
    public Patient updatePatient(Long id, Patient patient) {

        Patient existingPatient = patientRepository.findById(id).orElse(null);

        if (existingPatient == null) {
            return null;
        }

        existingPatient.setAge(patient.getAge());
        existingPatient.setGender(patient.getGender());
        existingPatient.setPhone(patient.getPhone());
        existingPatient.setAddress(patient.getAddress());
        existingPatient.setBloodGroup(patient.getBloodGroup());
        existingPatient.setUser(patient.getUser());

        return patientRepository.save(existingPatient);
    }

    @Override
    public void deletePatient(Long id) {

        if (patientRepository.existsById(id)) {
            patientRepository.deleteById(id);
        }

    }

    @Override
    public Patient getPatientByEmail(String email) {
        return patientRepository.findByUserEmail(email);
    }

    @Override
    public List<Patient> getPatientsByBloodGroup(String bloodGroup) {
        return patientRepository.findByBloodGroup(bloodGroup);
    }

    @Override
    public List<Patient> getPatientsByGender(String gender) {
        return patientRepository.findByGender(gender);
    }
}