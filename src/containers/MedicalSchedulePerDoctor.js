import React, { Component } from 'react'
import getDoctorsService from './../services/getDoctorsService'
import DoctorInformation from './../components/DoctorInformation'
import DoctorsDropdown from './../components/DoctorsDropdown'
import DoctorAppointmentsTable from './../components/DoctorAppointmentsTable'
import BackgroundImage from "./../components/BackgroundImage"
import getDoctorByIDService from './../services/getDoctorByIDService'
import getAppointmentsByDoctorIDService from './../services/getAppointmentsByDoctorIDService'

class MedicalSchedulePerDoctor extends Component {
    state = {
        doctorId: '',
        doctorInfo:'',
        doctors: [],
        doctorAppointments: [],
        showDoctorInformation : false
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

    fetchDoctorData = async () =>{
        try{
            const { doctorId } = this.state
            if( doctorId !== ''){
                const doctorInfo = await getDoctorByIDService(doctorId)
                const doctorAppointments = await getAppointmentsByDoctorIDService(doctorId)
                const doctorAppointmentsUpdate = this.setAttributesForDataTable(doctorAppointments )
                if( doctorInfo && doctorAppointmentsUpdate ){
                    this.setState({
                        doctorInfo: doctorInfo,
                        showDoctorInformation: true,
                        doctorAppointments: doctorAppointmentsUpdate
                    })
                }
            }
        }catch( error ){
            console.log(error)
        }
    }

    setAttributesForDataTable = ( data ) => {
        data.forEach( (element, index) => {
            element.index = index; 
            element.duration = element.duration + ' hour' 
        });
        return data  
    }

    handleOnChangeSelect = (evt) =>{
        if( evt.target.value === ''){
            this.setState({
                showDoctorInformation:false
            })
        }
        this.setState({
            doctorId: evt.target.value
        }, () =>{ this.fetchDoctorData()})
    }

    render() {
        const { doctorId,
                doctorInfo,
                doctors,
                showDoctorInformation,
                doctorAppointments} = this.state
        return (
            <div className="container-fluid col-xl-8">
                <div className = "container mb-2 mt-4 text-center">
                  <h2>Medical's Schedule Per doctor</h2>
                </div>
                <div className = "container mb-4">
                    <p className="lead mb-0"> Instruction: </p>
                    <small className="text-muted">To view a doctor's schedule, first select a doctor.</small>
                </div>
                <DoctorsDropdown 
                    doctorId={doctorId}
                    doctors={doctors} 
                    handleOnChangeSelect={this.handleOnChangeSelect } />
               <hr />
               { showDoctorInformation ? 
                <>
                <DoctorInformation 
                    doctorId={doctorInfo.id} 
                    specialty={doctorInfo.specialty} 
                    doctorLastname={doctorInfo.lastname}/>
                <hr />
                <div className = "container mb-4 mt-4 text-center">
                    <h4> Pending Medical Appointments </h4>
                </div>
                <DoctorAppointmentsTable
                 doctorAppointments={doctorAppointments} />
                </>: <BackgroundImage /> }
            </div>
        )
    }
}
export default MedicalSchedulePerDoctor;