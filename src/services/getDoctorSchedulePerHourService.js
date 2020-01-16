import axios from 'axios';

const getDoctorSchedulePerHourService = ( Identity ) => 
    axios.get(`https://my-json-server.typicode.com/jazubemo/jazubemo-scheduleMedicalAppoinments/doctorSchedulePerHour?_expand=doctor`)
    .then(resp => {
        console.log(resp.data)
        return Promise.resolve( resp.data)
    }).catch(error => {
        console.log('error', error)
        return Promise.reject("Error while trying to get Doctor's schedule", error)
    });

export default getDoctorSchedulePerHourService