import axios from 'axios';

const getAppointmentsByDoctorIDService = ( doctorID ) => 
    axios.get(`http://localhost:3000/doctors?id=${doctorID}&_embed=medicalAppointments`)
    .then(resp => {
        return Promise.resolve( resp.data[0].medicalAppointments)
    }).catch(error => {
        return Promise.reject("Error while trying to get Doctor's Appointments", error)
    });

export default getAppointmentsByDoctorIDService