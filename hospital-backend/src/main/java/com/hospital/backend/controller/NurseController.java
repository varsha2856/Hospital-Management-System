package com.hospital.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hospital.backend.entity.Nurse;
import com.hospital.backend.service.NurseService;

@RestController
@RequestMapping("/api/nurses")
@CrossOrigin(origins = "http://localhost:5173")
public class NurseController {

    @Autowired
    private NurseService nurseService;

    // Add Nurse
    @PostMapping
    public ResponseEntity<Nurse> saveNurse(@RequestBody Nurse nurse) {

        Nurse savedNurse = nurseService.saveNurse(nurse);

        return new ResponseEntity<>(savedNurse, HttpStatus.CREATED);
    }

    // Get All Nurses
    @GetMapping
    public ResponseEntity<List<Nurse>> getAllNurses() {

        return ResponseEntity.ok(nurseService.getAllNurses());
    }

    // Get Nurse By ID
    @GetMapping("/{id}")
    public ResponseEntity<Nurse> getNurseById(@PathVariable Long id) {

        Nurse nurse = nurseService.getNurseById(id);

        if (nurse == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(nurse);
    }

    // Update Nurse
    @PutMapping("/{id}")
    public ResponseEntity<Nurse> updateNurse(
            @PathVariable Long id,
            @RequestBody Nurse nurse) {

        Nurse updatedNurse = nurseService.updateNurse(id, nurse);

        if (updatedNurse == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updatedNurse);
    }

    // Delete Nurse
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNurse(@PathVariable Long id) {

        nurseService.deleteNurse(id);

        return ResponseEntity.ok("Nurse deleted successfully");
    }

    // Find Nurse By Email
    @GetMapping("/email/{email}")
    public ResponseEntity<Nurse> getNurseByEmail(@PathVariable String email) {

        Nurse nurse = nurseService.getNurseByEmail(email);

        if (nurse == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(nurse);
    }

    // Find Nurses By Department
    @GetMapping("/department/{department}")
    public ResponseEntity<List<Nurse>> getNursesByDepartment(
            @PathVariable String department) {

        return ResponseEntity.ok(
                nurseService.getNursesByDepartment(department));
    }

    // Find Nurses By Shift
    @GetMapping("/shift/{shift}")
    public ResponseEntity<List<Nurse>> getNursesByShift(
            @PathVariable String shift) {

        return ResponseEntity.ok(
                nurseService.getNursesByShift(shift));
    }
}