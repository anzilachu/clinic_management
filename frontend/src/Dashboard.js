import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/doctors/');
      console.log('Fetched doctors:', response.data);
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/appointments/');
      console.log('Fetched appointments:', response.data);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
    fetchAppointments();
  }, []);

  const handleBookAppointment = async (doctorId) => {
    try {
      const patientName = prompt('Enter patient name:');
      const age = parseInt(prompt('Enter patient age:'));
      const appointmentDate = prompt('Enter appointment date (YYYY-MM-DD):');

      if (!patientName || isNaN(age) || !appointmentDate) {
        return;
      }

      const appointmentData = {
        patient_name: patientName,
        age: age,
        appointment_date: appointmentDate,
        doctor_id: doctorId
      };

      const response = await axios.post('http://127.0.0.1:8000/appointments/', appointmentData);
      console.log('Appointment created successfully:', response.data);
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <div>
      <h2>Doctors List</h2>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id}>
            <strong>Name:</strong> {doctor.name}<br />
            <strong>Specialty:</strong> {doctor.specialty}<br />
            <strong>Department:</strong> {doctor.department}<br />
            <button onClick={() => handleBookAppointment(doctor.id)}>Book Appointment</button>
          </li>
        ))}
      </ul>
      <h2>Booked Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            <strong>Patient Name:</strong> {appointment.patient_name}<br />
            <strong>Doctor:</strong> {appointment.doctor}<br />
            <strong>Appointment Date:</strong> {appointment.appointment_date}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;
