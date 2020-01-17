import React, { Component } from "react";
import axios from 'axios'
import { NotificationContainer, NotificationManager} from 'react-notifications';
import Modal from 'react-bootstrap/Modal'
import DoctorAvailability from './../components/DoctorAvailability'
import AppointmentInformation from './../components/AppointmentInformation'
import createMedicalAppointmentService from '../services/createMedicalAppointmentService'
import Swal from 'sweetalert2'
import 'react-notifications/lib/notifications.css';
import './css/modalAndButton.css'

export default class ModalAndButton extends Component {

    state = {
      modalShow: false,
      doctorAvailable : false,
      showLabel : false,
      appointmentDate : '',
      showCreateAppointment : false
    };
    
  

  handleShow = () =>{
    this.setState({ modalShow: true })
  }

  handleClose = () =>{
    this.setState({ modalShow: false })
  }

  handleSubmitCreateAppoinment = async () => {
    try{
      console.log('entro')
      const { appointmentDate } = this.state
      const { doctorScheduleByRow, patientID } = this.props
      const medicalAppointmentCreated = await createMedicalAppointmentService( doctorScheduleByRow, patientID, appointmentDate)
      if(medicalAppointmentCreated){
        this.showMessage()
      }else{
        NotificationManager.error("There was a problem")
      }
      this.handleClose()
    }catch(error){
      console.log(error)
    }
  }

  onChangeDate = (evt) =>{
    console.log('evt.target.value',evt.target.value)
    console.log('doctorScheduleByRow ',this.state.doctorScheduleByRow )

    this.setState({
      appointmentDate: evt.target.value,  
    },() =>{ this.checkDoctorAvailability()})
    
  }

  showMessage = () =>{
    return Swal.fire({
      icon: 'success',
      title: 'Your Medical Appointment was created',
      showConfirmButton: false,
      timer: 1500
    })
  }

  checkDoctorAvailability = async () =>{
    try{
      const { appointmentDate } = this.state
      const { doctorScheduleByRow  } = this.props
      console.log('appointmentDate',appointmentDate)
      console.log('doctorScheduleByRow',doctorScheduleByRow.doctorId)
      console.log('doctorScheduleByRow.shiftStart',doctorScheduleByRow.shiftStart)
      const existAppointment = await axios.get(`https://my-json-server.typicode.com/jazubemo/jazubemo-scheduleMedicalAppoinments/medicalAppoinments?doctorId=${doctorScheduleByRow.doctorId}&Date=${appointmentDate}&appointmentTime=${doctorScheduleByRow.shiftStart}`)
      
      if(existAppointment.data.length === 0){
        console.log('existAppointment',existAppointment.data)
        this.setState({
          doctorAvailable : true,
          showCreateAppointment : true
        })
      }else{
        this.setState({
          doctorAvailable : false,
          showCreateAppointment : false
        })
      }
      this.setState({
        showLabel : true,
      })
    }catch(err){
      console.log(err)
    }
  }

  render() {

  const show = (this.state.modalShow) ? true : false ;
  const { doctorAvailable, 
    showLabel, 
    showCreateAppointment } = this.state

    const { doctorScheduleByRow,
      patientID,
      patientInfo} = this.props

  return (

    <>
    <button type="button" className="btn btn-success" variant="primary" onClick={this.handleShow}>
     +
    </button>
    <NotificationContainer/>
    <Modal   show={show} onHide={this.handleClose}>
      <Modal.Header className={"modal-header"} closeButton>
        <Modal.Title>Medical Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body className={"modal-content"}>
          <div className="form-group">
            <AppointmentInformation 
              patientInfo={patientInfo}
              patientID = {patientID}
              doctorInfo = {doctorScheduleByRow} />
            <label htmlFor="recipient-date" className="col-form-label">Enter Appointment's date:</label>
            <input 
              className="form-control"
              type="date"
              defaultValue="19-08-2011" 
              onChange={this.onChangeDate} 
              id="recipient-date"></input>
          </div>
          <DoctorAvailability showLabel={showLabel} doctorAvailable={doctorAvailable } />
      </Modal.Body>
      <Modal.Footer>
        { showCreateAppointment ? <button variant="primary" className="btn btn-primary" onClick={this.handleSubmitCreateAppoinment}>
          Create Appoinment
        </button> : <button variant="primary" className="btn btn-primary" disabled>
          Create Appoinment
        </button>}
        <button variant="secondary" className="btn btn-danger" onClick={this.handleClose}>
          Close
        </button>

      </Modal.Footer>
    </Modal>
    
  </>

  );
  }
}