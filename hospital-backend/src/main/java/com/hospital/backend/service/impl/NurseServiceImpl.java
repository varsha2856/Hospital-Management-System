package com.hospital.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.backend.entity.Nurse;
import com.hospital.backend.repository.NurseRepository;
import com.hospital.backend.service.NurseService;

@Service
public class NurseServiceImpl implements NurseService {

    @Autowired
    private NurseRepository nurseRepository;

    @Override
    public Nurse saveNurse(Nurse nurse) {
        return nurseRepository.save(nurse);
    }

    @Override
    public List<Nurse> getAllNurses() {
        return nurseRepository.findAll();
    }

    @Override
    public Nurse getNurseById(Long id) {
        return nurseRepository.findById(id).orElse(null);
    }

    @Override
    public Nurse updateNurse(Long id, Nurse nurse) {

        Nurse existingNurse = nurseRepository.findById(id).orElse(null);

        if (existingNurse == null) {
            return null;
        }

        existingNurse.setPhone(nurse.getPhone());
        existingNurse.setDepartment(nurse.getDepartment());
        existingNurse.setExperience(nurse.getExperience());
        existingNurse.setShift(nurse.getShift());
        existingNurse.setStatus(nurse.getStatus());
        existingNurse.setUser(nurse.getUser());

        return nurseRepository.save(existingNurse);
    }

    @Override
    public void deleteNurse(Long id) {

        if (nurseRepository.existsById(id)) {
            nurseRepository.deleteById(id);
        }

    }

    @Override
    public Nurse getNurseByEmail(String email) {
        return nurseRepository.findByUserEmail(email);
    }

    @Override
    public List<Nurse> getNursesByDepartment(String department) {
        return nurseRepository.findByDepartment(department);
    }

    @Override
    public List<Nurse> getNursesByShift(String shift) {
        return nurseRepository.findByShift(shift);
    }
}