import React from "react";
import './css/doctorAvailable.css'//<p className="notAvailable">NOT AVAILABLE</p>

const DoctorAvailability = (props) => {
  const { doctorAvailable, showLabel  } = props
  return (
    <div className="container mt-2">
      { showLabel ? 
      doctorAvailable ? <p className="available">AVAILABLE</p>: <p className="notAvailable">NOT AVAILABLE</p>
      : null
    }
    </div>
  );
}

export default DoctorAvailability  ;