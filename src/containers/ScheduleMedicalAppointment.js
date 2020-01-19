import React, { Component } from 'react'
import { NotificationContainer, NotificationManager} from 'react-notifications';
import SearchButtonPerPatient  from "../components/searchButtonPerPatient"
import InformationOfThePatient from "../components/InformationOfThePatient"
import DoctorsScheduleTable from "../components/DoctorsScheduleTable"
import BackgroundImage from "./../components/BackgroundImage"
import getPatientByIdService from "../services/getPatientByIdService"
import getDoctorsSchedulePerHourService from "../services/getDoctorsSchedulePerHourService"
import 'react-notifications/lib/notifications.css';

class ScheduleMedicalAppointment extends Component {
    state = {
        patientID: '',
        infoPatient: '',
        showInformation : false,
        doctorSchedulePerHour : []
    }
    
    fetchInfoPatientAndDoctorSchedulePerHour = async (patientID) =>{
        try{
            const infoPatient = await getPatientByIdService(patientID)
            if(typeof infoPatient === "undefined"){
                NotificationManager.info("This patient ID was not found.")
                this.setState({
                    showInformation : false
                })
            }else{
                const doctorSchedulePerHour = await getDoctorsSchedulePerHourService()
                if(doctorSchedulePerHour){
                    const data = this.setAttributesForDataTable(doctorSchedulePerHour)  
                    this.setState({
                        infoPatient : infoPatient,
                        showInformation : true,
                        doctorSchedulePerHour : data
                    })
                }   
            }
        }catch(error){
            console.log(error)
        }
    }

    setAttributesForDataTable = ( data ) => {
        data.forEach(function (element, index) {
            element.specialty = element.doctor.specialty;
            element.lastname = element.doctor.lastname;
            element.name = element.doctor.name;
            element.index = index;
            delete element.doctor
        });
        return data  
    }

    handleSubmitPatientId = () => {
        const { patientID } = this.state
        if( patientID === ''){
            NotificationManager.error("Please enter a valid patient's ID")
            this.setState({
                showInformation: false
            })
        }else{
            this.setState({
                patientID: patientID
            }, () => {
                this.fetchInfoPatientAndDoctorSchedulePerHour(this.state.patientID)
            })
        }   
    }

    handleOnKeyPressEnterPatientId= (evt) => {
        const {patientID} = this.state
        if ( evt.charCode === 13 ){
            if( patientID === ''){
                NotificationManager.error("Please enter a valid patient's ID")
                this.setState({
                    showInformation: false
                })
            }else{
                this.fetchInfoPatientAndDoctorSchedulePerHour(patientID)   
            }     
        }
    }

    onChangeInputPatientId = (evt) => {
        this.setState({
            patientID: evt.target.value
        })
    }

    render() {
        const { patientID, 
            showInformation,
            infoPatient,
            doctorSchedulePerHour} = this.state
        return (
            <div className="container-fluid col-xl-8"  >
                <div className = "container mb-2 mt-4 text-center">
                  <h2>Schedule appointments</h2>
                </div>
                <div className = "container mb-4">
                    <p className="lead mb-0"> Instruction: </p>
                    <small className="text-muted">To create an appointment, first enter an ID of a registered patient.</small>
                </div>
                <SearchButtonPerPatient  
                    patientId = { patientID } 
                    handleSubmitPatientId = { this.handleSubmitPatientId }
                    onChangeInputPatientId = { this.onChangeInputPatientId }
                    handleOnKeyPressEnterPatientId = { this.handleOnKeyPressEnterPatientId } />
                <InformationOfThePatient
                    show = {showInformation}
                    info = {infoPatient}/>
                <NotificationContainer/>
                <hr />
                { showInformation ? 
                  <>
                  <div className = "container mb-4 mt-4 text-center">
                    <h4> Doctors Schedule</h4>
                  </div>
                    <div className = "container mb-4">
                     <p className="lead mb-0"> Instruction: </p>
                     <small className="text-muted">Below is the schedule of available doctors, you can add in the column "add appointment".</small>
                    </div>
                  <DoctorsScheduleTable 
                    doctorSchedule = {doctorSchedulePerHour}
                    patientID = {patientID} 
                    patientInfo={infoPatient}  />
                  </> : <BackgroundImage />}   
            </div>
        )
    }
}
export default ScheduleMedicalAppointment;