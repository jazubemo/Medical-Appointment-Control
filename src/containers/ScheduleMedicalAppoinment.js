import React, { Component } from 'react'
import axios from "axios"
import SearchButtonPerPatient  from "../components/searchButtonPerPatient"
import InformationOfThePatiente from "../components/InformationOfThePatiente"
import SearchFiltersForDoctors from "../components/SearchFiltersForDoctors"
import SearchButton from "../components/SearchButton"
import DoctorSchedule from "../components/DoctorScheduleTable"


class ScheduleMedicalAppoinment extends Component {
    state = {
        patientIdentity: '',
        infoPatient: '',
        showInformationOfThePatiente : false,
        searchFilterEntry: '',
        specialityFilter: true,
        lastnameFilter: false,
        doctorSchedulePerHour : []
    }
    
    componentDidMount(){
        this.fetchDoctorSchedulePerHour()  
    }

    fetchPatientByIdentity = (Identity) =>{
        axios.get(`https://my-json-server.typicode.com/jazubemo/jazubemo-scheduleMedicalAppoinments/patients?identity=${Identity}`)
            .then(resp => {
                console.log(resp.data[0])
                this.setState({
                    infoPatient : resp.data[0],
                    showInformationOfThePatiente : true
                })
            }).catch(error => {
                console.log(error);
            });
    }

    fetchDoctorSchedulePerHour = (Identity) =>{
        axios.get(`https://my-json-server.typicode.com/jazubemo/jazubemo-scheduleMedicalAppoinments/doctorSchedulePerHour?_expand=doctor`)
            .then( async resp => {
                console.log(resp.data)
                this.setSpecialityAndLastnameAttributes(resp.data)   
            }).catch(error => {
                console.log(error);
            });
    }

    setSpecialityAndLastnameAttributes = ( data ) => {
        data.forEach(function (element, index) {
            console.log('element', element)
            element.speciality = element.doctor.speciality;
            element.lastname = element.doctor.lastname;
            element.index = index
            delete element.doctor
        });
        this.setState({
            doctorSchedulePerHour: data
        })
        
    }

    handleSubmitPatientId = (evt) => {
        const { patientIdentity } = this.state
        this.setState({
            patientIdentity: patientIdentity
        }, () => {
            this.fetchPatientByIdentity(this.state.patientIdentity)
        })
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
        }
    }

    handlePressEnterPatientId = (evt) => {
        if ( evt.charCode===13 &&  evt.target.value){
            console.log('evt.target.value key press', evt.target.value)
            this.setState({
                patientIdentity: evt.target.value,
                showInformationOfThePatiente : true
            })
        }
    }

    onChangeSearchButton = (evt) => {
        console.log('evt.target.value filter search', evt.target.value)
        this.setState({
            searchFilterEntry: evt.target.value
        })
    }

    onChangeInputPatientId = (evt) => {
        console.log('evt.target.value', evt.target.value)
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
            showInformationOfThePatiente,
            infoPatient,
            searchFilterEntry,
            specialityFilter,
            lastnameFilter,
            doctorSchedulePerHour } = this.state
        return (
            <div>
                <div className = "container mb-2 mt-4 text-center">
                  <h2>Schedule appointments</h2>
                </div>
                
                <SearchButtonPerPatient  
                patientId = { patientIdentity } 
                handleSubmitPatientId = { this.handleSubmitPatientId }
                onChangeInputPatientId = { this.onChangeInputPatientId }
                handlePressEnterPatientId = { this.handlePressEnterPatientId} />
                <InformationOfThePatiente 
                show = {showInformationOfThePatiente}
                info = {infoPatient}/>
                <hr />
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
                
            </div>
        )
    }
}
export default ScheduleMedicalAppoinment;