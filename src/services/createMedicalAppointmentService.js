import axios from 'axios';

const createMedicalAppointmentService = ({doctorId, shiftStart}, patientId, appointmentTime) => 
    axios.post(`http://localhost:3000/medicalAppointments`,{
        id : uniqueID(),
        doctorId : doctorId,
        patientId : patientId,
        Date : appointmentTime,
        Time : shiftStart,
        duration : 1 
    })
    .then(resp => {
        return Promise.resolve( resp.data)
    }).catch(error => {
        return Promise.reject("Error while trying to create a patient", error)
    });

    const uniqueID =  () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

export default createMedicalAppointmentService