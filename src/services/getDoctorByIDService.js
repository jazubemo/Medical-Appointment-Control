import axios from 'axios';

const getDoctorByIDService = ( doctorID ) => 
    axios.get(`http://localhost:3000/doctors?id=${doctorID}`)
    .then(resp => {
        return Promise.resolve( resp.data[0])
    }).catch(error => {
        return Promise.reject("Error while trying to get doctor", error)
    });

export default getDoctorByIDService