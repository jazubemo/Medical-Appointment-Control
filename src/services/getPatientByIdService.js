import axios from 'axios';

const getPatientByIdService = ( patientID ) => 
    axios.get(`http://localhost:3000/patients?patientID=${patientID}`)
    .then(resp => {
        return Promise.resolve( resp.data[0] )
    }).catch(error => {
        return Promise.reject("Error while trying to get patient's ID", error)
    });


export default getPatientByIdService