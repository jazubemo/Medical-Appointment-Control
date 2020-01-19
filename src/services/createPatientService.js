import axios from 'axios';

const createMedicalAppointmentService = ( ID, name, lastname, age) => 
    axios.post(`http://localhost:3000/patients`,{
        id: uniqueID(),
        patientID: ID,
        name: name,
        lastname: lastname,
        age: Number(age)
    })
    .then(resp => {
        console.log('resp', resp);
        return Promise.resolve( resp.data)
    }).catch(error => {
        console.log('error', error);
        return Promise.reject("Error while trying to create a patient", error)
    });

    const uniqueID =  () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

export default createMedicalAppointmentService