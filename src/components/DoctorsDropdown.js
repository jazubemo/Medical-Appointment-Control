import React from "react";

const DoctorsDropdown = (props) => {
  const { doctorId, doctors ,handleOnChangeSelect  } = props

  return (
    <div className="container">
       <form>
        <div className = "form-group mt-4">
          <select 
            className = "custom-select" 
            onChange = {handleOnChangeSelect}
            value = {doctorId} >
            <option key="placeholder" value="">Please select a doctor</option>
              { doctors.map( (doctor, index) =>{
                const fullName = doctor.name + '  ' + doctor.lastname
                return <option key={index} value={doctor.id} > { fullName }</option>
              })}
          </select>
        </div>
      </form>
    </div>
  );
}

export default DoctorsDropdown  ;