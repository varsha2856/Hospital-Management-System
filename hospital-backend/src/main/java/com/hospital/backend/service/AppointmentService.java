package com.hospital.backend.service;

import java.time.LocalDate;
import java.util.List;

import com.hospital.backend.entity.Appointment;

public interface AppointmentService {

    // Create Appointment
    Appointment saveAppointment(Appointment appointment);

    // Get All Appointments
    List<Appointment> getAllAppointments();

    // Get Appointment By ID
    Appointment getAppointmentById(Long id);

    // Update Appointment
    Appointment updateAppointment(Long id, Appointment appointment);

    // Delete Appointment
    void deleteAppointment(Long id);

    // Get Appointments By Patient
    List<Appointment> getAppointmentsByPatient(Long patientId);

    // Get Appointments By Doctor
    List<Appointment> getAppointmentsByDoctor(Long doctorId);

    // Get Appointments By Status
    List<Appointment> getAppointmentsByStatus(String status);

    // Get Appointments By Date
    List<Appointment> getAppointmentsByDate(LocalDate date);

}