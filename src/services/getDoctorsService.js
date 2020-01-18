import axios from 'axios';

const getDoctorsService = () => 
    axios.get(`http://localhost:3000/doctors`)
    .then(resp => {
        return Promise.resolve( resp.data)
    }).catch(error => {
        return Promise.reject("Error while trying to get Doctors", error)
    });

export default getDoctorsService