import axios from 'axios';

const getDoctorSchedulePerHourService = ( ) => 
    axios.get(`http://localhost:3000/doctorSchedulePerHour?_expand=doctor`)
    .then(resp => {
        console.log(resp.data)
        return Promise.resolve( resp.data)
    }).catch(error => {
        console.log('error', error)
        return Promise.reject("Error while trying to get Doctor's schedule", error)
    });

export default getDoctorSchedulePerHourService