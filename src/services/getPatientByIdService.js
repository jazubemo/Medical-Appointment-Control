import axios from 'axios';

const getPatientByIdService = ( Identity ) => 
    axios.get(`https://my-json-server.typicode.com/jazubemo/jazubemo-scheduleMedicalAppoinments/patients?identity=${Identity}`)
    .then(resp => {
        console.log('resp.data'+resp.data)
        console.log('resp'+resp)
        return Promise.resolve( resp.data[0] )
    }).catch(error => {
        console.log('error', error)
        return Promise.reject("Error while trying to get patient's ID", error)
    });


export default getPatientByIdService