import React, { Component } from 'react'
import getDoctorsService from './../services/getDoctorsService'
import DoctorInformation from './../components/DoctorInformation'


class MedicalSchedulePerDoctor extends Component {
    state = {
        doctorId: '',
        doctors: []
    }

    componentDidMount(){
        this.fetchDoctors()
    }

    fetchDoctors = async () =>{
        try{
            const doctors = await getDoctorsService()
            if( doctors ){
                this.setState({
                    doctors: doctors
                })
            }

        }catch( err ){
            console.log(err)
        }
    }

    handleOnChangeSelect = (evt) =>{
        console.log('evt.target.value', evt.target.value)
        this.setState({
            doctorId: evt.target.value
        })
    }

    render() {
        const { doctorId,
                doctors} = this.state
        return (
            <div className="container">
                <div className = "container mb-2 mt-4 text-center">
                  <h2>Medical's Schedule Per doctor</h2>
                </div>
                <div className = "container mb-4">
                    <p className="lead mb-0"> Instruction: </p>
                    <small className="text-muted">To view a doctor's schedule, first select a doctor.</small>
                </div>
                <form>
                <div className="form-group mt-4">
                  <select 
                    className="custom-select" 
                    onChange={this.handleOnChangeSelect}
                    value={doctorId} >
                    <option key="placeholder" value="">Please select a doctor</option>
                    { doctors.map( (doctor, index) =>{
                    const fullName = doctor.name + '  ' + doctor.lastname
                    return <option key={index} value={doctor.id} > { fullName }</option>
                    })}
                  </select>
                </div>
               </form>
               <hr />
               <DoctorInformation  />
            </div>
        )
    }
}
export default MedicalSchedulePerDoctor;