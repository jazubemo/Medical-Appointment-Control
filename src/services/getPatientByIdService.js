import axios from 'axios';

const getPatientByIdService = ( patientID ) => 
    axios.get(`http://localhost:3000/patients?patientID=${patientID}`)
    .then(resp => {
        console.log('resp.data'+resp.data)
        console.log('resp'+resp)
        return Promise.resolve( resp.data[0] )
    }).catch(error => {
        console.log('error', error)
        return Promise.reject("Error while trying to get patient's ID", error)
    });


export default getPatientByIdService