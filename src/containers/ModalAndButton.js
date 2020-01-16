import React, { Component } from "react";
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import DoctorAvailability from './../components/DoctorAvailability'
import './css/modalAndButton.css'

export default class ModalAndButton extends Component {

    state = {
      modalShow: false,
      doctorScheduleByRow : this.props.doctorScheduleByRow,
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

  onChangeDate = (evt) =>{
    console.log('evt.target.value',evt.target.value)
    console.log('doctorScheduleByRow ',this.state.doctorScheduleByRow )

    this.setState({
      appointmentDate: evt.target.value,  
    },() =>{ this.checkDoctorAvailability()})
    
  }

  checkDoctorAvailability = async () =>{
    try{
      const { appointmentDate, doctorScheduleByRow } = this.state
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
  const { doctorAvailable, showLabel, showCreateAppointment } = this.state
  return (

    <>
    <button type="button" className="btn btn-success" variant="primary" onClick={this.handleShow}>
     +
    </button>

    <Modal show={show} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Medical Appoinment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="recipient-date" className="col-form-label">Enter Date</label>
            <input 
              className="form-control"
              type="date"
              defaultValue="19-08-2011" 
              onChange={this.onChangeDate} 
              id="recipient-date"></input>
          </div>
          <DoctorAvailability showLabel={showLabel} doctorAvailable={doctorAvailable } />
        </form>
      </Modal.Body>
      <Modal.Footer>
        { showCreateAppointment ? <button variant="primary" className="btn btn-primary" onClick={this.handleClose}>
          Create Appoinment
        </button> : <button variant="primary" className="btn btn-primary" onClick={this.handleClose} disabled>
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