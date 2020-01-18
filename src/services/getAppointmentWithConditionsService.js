import axios from 'axios';

const getAppointmentWithConditionsService = ( doctorID, AppointmentDate, AppointmentTime ) => 
    axios.get(`http://localhost:3000/medicalAppointments?doctorId=${doctorID}&Date=${AppointmentDate}&Time=${AppointmentTime}`)
    .then(resp => {
        return Promise.resolve( resp.data)
    }).catch(error => {
        return Promise.reject("Error while trying to get appointment", error)
    });

export default getAppointmentWithConditionsService