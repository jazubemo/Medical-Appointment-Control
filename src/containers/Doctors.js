import React, { Component } from 'react'


class Doctors extends Component {
    state = {
        patientID: '',
        infoPatient: '',
        showInformation : false,
        searchFilterEntry: '',
        specialityFilter: true,
        lastnameFilter: false,
        doctorSchedulePerHour : []
    }
    

    render() {
        const { patientID, 
            showInformation,
            infoPatient,
            doctorSchedulePerHour} = this.state
        return (
            <div>
                
            </div>
        )
    }
}
export default Doctors;