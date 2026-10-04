package com.hospital.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.backend.entity.Doctor;
import com.hospital.backend.repository.DoctorRepository;
import com.hospital.backend.service.DoctorService;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public Doctor saveDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @Override
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor getDoctorById(Long id) {
        return doctorRepository.findById(id).orElse(null);
    }

    @Override
    public Doctor updateDoctor(Long id, Doctor doctor) {

        Doctor existingDoctor = doctorRepository.findById(id).orElse(null);

        if (existingDoctor == null) {
            return null;
        }

        existingDoctor.setSpecialization(doctor.getSpecialization());
        existingDoctor.setExperience(doctor.getExperience());
        existingDoctor.setQualification(doctor.getQualification());
        existingDoctor.setPhone(doctor.getPhone());
        existingDoctor.setUser(doctor.getUser());

        return doctorRepository.save(existingDoctor);
    }

    @Override
    public void deleteDoctor(Long id) {

        if (doctorRepository.existsById(id)) {
            doctorRepository.deleteById(id);
        }

    }

    @Override
    public Doctor getDoctorByEmail(String email) {
        return doctorRepository.findByUserEmail(email);
    }

    @Override
    public List<Doctor> getDoctorsBySpecialization(String specialization) {
        return doctorRepository.findBySpecialization(specialization);
    }

    @Override
    public List<Doctor> getExperiencedDoctors(int experience) {
        return doctorRepository.findByExperienceGreaterThanEqual(experience);
    }

}