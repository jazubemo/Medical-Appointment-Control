import axios from 'axios';

const getDoctorsSchedulePerHourService = ( ) => 
    axios.get(`http://localhost:3000/doctorSchedulePerHour?_expand=doctor`)
    .then(resp => {
        return Promise.resolve( resp.data)
    }).catch(error => {
        return Promise.reject("Error while trying to get Doctor's schedule", error)
    });

export default getDoctorsSchedulePerHourService