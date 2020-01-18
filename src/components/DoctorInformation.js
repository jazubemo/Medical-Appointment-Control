import React from "react";

const DoctorInformation = (props) => {

  const { doctorId, specialty, doctorLastname } = props

  return (
    <div >
      <div className="container mt-2" >
        <p> Doctor's Information:</p>
        <div className="container border border-dark rounded ">
        <form>
          <div className="form-group mb-0  row">
            <label htmlFor="staticDoctorID" className="col-sm-5 col-form-label">Doctor's ID</label>
            <div className="col-sm-6">
              <input type="text" readOnly className="form-control-plaintext" id="staticDoctorID" value={doctorId} />
            </div>
          </div>
          <div className="form-group mb-0  row">
            <label htmlFor="staticDoctorName" className="col-sm-5 col-form-label">Doctor's lastname:</label>
              <div className="col-sm-6">
                <input type="text" readOnly className="form-control-plaintext" id="staticDoctorName" value={doctorLastname} />
              </div>
          </div>
          <div className="form-group mb-0  row">
            <label htmlFor="staticDoctorSpecialty" className="col-sm-5 col-form-label">Doctor's specialty:</label>
              <div className="col-sm-6">
                <input type="text" readOnly className="form-control-plaintext" id="staticDoctorSpecialty" value={specialty} />
              </div>
          </div>
        </form>
        </div>
     </div>
    </div>
  );
}

export default DoctorInformation;