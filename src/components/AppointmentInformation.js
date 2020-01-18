import React from "react";

const AppointmentInformation = (props) => {
  const { patientInfo, patientID, doctorInfo } = props
  return (
    <div >
      <div className="container mt-2" >
        <p> Appointment's Information:</p>
        <div className="container border border-dark rounded ">
        <form>
          <div className="form-group mb-0  row">
            <label htmlFor="staticPatientID" className="col-sm-5 col-form-label">Patient's ID</label>
            <div className="col-sm-6">
              <input type="text" readOnly className="form-control-plaintext" id="staticPatientID" value={patientID} />
            </div>
          </div>
          <div className="form-group mb-0  row">
            <label htmlFor="staticPatientName" className="col-sm-5 col-form-label">Patient's name:</label>
              <div className="col-sm-6">
                <input type="text" readOnly className="form-control-plaintext" id="staticPatientName" value={patientInfo.name} />
              </div>
          </div>
          <div className="form-group mb-0  row">
            <label htmlFor="staticPatientLastname" className="col-sm-5 col-form-label">Patient's lastname:</label>
              <div className="col-sm-6">
                <input type="text" readOnly className="form-control-plaintext" id="staticPatientLastname" value={patientInfo.lastname} />
              </div>
          </div>
          <div className="form-group mb-0 row">
            <label htmlFor="staticDrLastname" className="col-sm-5 col-form-label">Dr.</label>
              <div className="col-sm-6">
                <input type="text" readOnly className="form-control-plaintext" id="staticDrLastname" value={doctorInfo.lastname} />
              </div>
          </div>
          <div className="form-group mb-0  row">
            <label htmlFor="appointmentTime" className="col-sm-5 col-form-label">Appointment time:</label>
              <div className="col-sm-6">
                <input type="text" readOnly className="form-control-plaintext" id="appointmentTime" value={doctorInfo.shiftStart} />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default AppointmentInformation;