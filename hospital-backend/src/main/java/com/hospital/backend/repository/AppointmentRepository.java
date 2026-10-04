package com.hospital.backend.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.backend.entity.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    // Patient Appointments
    List<Appointment> findByPatientId(Long patientId);

    // Doctor Appointments
    List<Appointment> findByDoctorId(Long doctorId);

    // Appointment Status
    List<Appointment> findByStatus(String status);

    // Appointment Date
    List<Appointment> findByAppointmentDate(LocalDate appointmentDate);

    // Doctor Appointments on a Particular Date
    List<Appointment> findByDoctorIdAndAppointmentDate(
            Long doctorId,
            LocalDate appointmentDate
    );

}