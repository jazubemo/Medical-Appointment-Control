import React, { Component } from 'react'
import { NotificationContainer, NotificationManager} from 'react-notifications';
import SearchButtonPerPatient  from "../components/searchButtonPerPatient"
import InformationOfThePatiente from "../components/InformationOfThePatiente"
import SearchFiltersForDoctors from "../components/SearchFiltersForDoctors"
import SearchButton from "../components/SearchButton"
import DoctorSchedule from "../components/DoctorScheduleTable"
import getPatientByIdService from "../services/getPatientByIdService"
import getDoctorSchedulePerHourService from "../services/getDoctorSchedulePerHourService"
import 'react-notifications/lib/notifications.css';



class ScheduleMedicalAppoinment extends Component {
    state = {
        patientIdentity: '',
        infoPatient: '',
        showInformation : false,
        searchFilterEntry: '',
        specialityFilter: true,
        lastnameFilter: false,
        doctorSchedulePerHour : []
    }
    
    fetchInfoPatientAndDoctorSchedulePerHour = async (Identity) =>{
        try{
            const infoPatient = await getPatientByIdService(Identity)
            if(typeof infoPatient === "undefined"){
                NotificationManager.info("This patient ID was not found.")
            }else{
                const doctorSchedulePerHour = await getDoctorSchedulePerHourService()
                if(doctorSchedulePerHour){
                    const data = this.setSpecialityAndLastnameAttributesForDataTable(doctorSchedulePerHour)  
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

    setSpecialityAndLastnameAttributesForDataTable = ( data ) => {
        data.forEach(function (element, index) {
            console.log('element', element)
            element.speciality = element.doctor.speciality;
            element.lastname = element.doctor.lastname;
            element.index = index
            delete element.doctor
        });
        return data  
    }

    handleSubmitPatientId = () => {
        const { patientIdentity } = this.state
        if( patientIdentity === ''){
            NotificationManager.error("Please enter a valid patient's ID")
            this.setState({
                showInformation: false
            })
        }else{
            this.setState({
                patientIdentity: patientIdentity
            }, () => {
                this.fetchInfoPatientAndDoctorSchedulePerHour(this.state.patientIdentity)
            })
        }   
    }

    handleSubmitSearchButton = (evt) => {
        const { searchFilterEntry } = this.state
        this.setState({
            searchFilterEntry :  searchFilterEntry 
        })
    }

    handlePressEnterSearchButton = (evt) => {
        if ( evt.charCode===13 &&  evt.target.value){
            console.log('evt.target.value key press filter', evt.target.value)
            this.setState({
                searchFilterEntry: evt.target.value
            })
        }else{
            
        }
    }

    handleOnKeyPressEnterPatientId= (evt) => {
        const {patientIdentity} = this.state
        if ( evt.charCode === 13 ){
            if( patientIdentity === ''){
                NotificationManager.error("Please enter a valid patient's ID")
                this.setState({
                    showInformation: false
                })
            }else{
                this.fetchInfoPatientAndDoctorSchedulePerHour(patientIdentity)   
            }     
        }
    }

    onChangeSearchButton = (evt) => {
        console.log('evt.target.value filter search', evt.target.value)
        this.setState({
            searchFilterEntry: evt.target.value
        })
    }

    onChangeInputPatientId = (evt) => {
        this.setState({
            patientIdentity: evt.target.value
        })
    }

    onChangeSearchSpecialityFilter = (evt) => {
        console.log('evt.target.value ratio speciality', evt.target.value)
        const { specialityFilter, lastnameFilter} = this.state
        this.setState({
            specialityFilter: !specialityFilter,
            lastnameFilter: !lastnameFilter
        },()=>{console.log('this.state.specialityFilter',this.state.specialityFilter)})
    }

    onChangeSearchLastnameFilter = (evt) => {
        console.log('evt.target.value ratio lastname', evt.target.value)
        const { lastnameFilter, specialityFilter} = this.state
        this.setState({
            specialityFilter: !specialityFilter,
            lastnameFilter: !lastnameFilter
        },()=>{console.log('this.state.specialityFilter',this.state.specialityFilter)})
    }

    render() {
        const { patientIdentity, 
            showInformation,
            infoPatient,
            searchFilterEntry,
            specialityFilter,
            lastnameFilter,
            doctorSchedulePerHour} = this.state
        return (
            <div>
                <div className = "container mb-2 mt-4 text-center">
                  <h2>Schedule appointments</h2>
                </div>
                <div className = "container mb-4">
                <p className="lead mb-0"> Instruction: </p>
                <small className="text-muted">To create an appointment, first enter an ID of a registered patient.</small>
                </div>
                <SearchButtonPerPatient  
                patientId = { patientIdentity } 
                handleSubmitPatientId = { this.handleSubmitPatientId }
                onChangeInputPatientId = { this.onChangeInputPatientId }
                handleOnKeyPressEnterPatientId = { this.handleOnKeyPressEnterPatientId } />
                <InformationOfThePatiente 
                show = {showInformation}
                info = {infoPatient}/>
                <hr />
                <NotificationContainer/>
                { showInformation ? 
                  <>
                  <div className = "container mb-4 mt-4 text-center">
                    <h4> Doctor's Schedule</h4>
                  </div>
                  <SearchButton 
                    SearchButton={searchFilterEntry }
                    handleSubmitSearchButtonSearchButton = {this.handlePressEnterSearchFilterEntry}
                    onChangeSearchButtonSearchButton = {this.onChangeInputPatientId}
                    handlePressEnterSearchButtonSearchButton = {this.handlePressEnterSearchFilterEntry} />
                  <SearchFiltersForDoctors
                    onChangeSearchSpecialityFilter={this.onChangeSearchSpecialityFilter}
                    onChangeSearchLastnameFilter={this.onChangeSearchLastnameFilter}
                    specialityFilter={specialityFilter}
                    lastnameFilter={lastnameFilter} />
                  <DoctorSchedule doctorSchedule={doctorSchedulePerHour}  />
                  
                  </> : null}
                
            </div>
        )
    }
}
export default ScheduleMedicalAppoinment;