import React from "react";


const DoctorsDropdown = (props) => {
  const { doctors  } = props

  return (
    <div className="container">
       <form>
        <div className="form-group">
            <select className="custom-select" >
                <option value="">Open this select menu</option>
                { doctors.map( doctor =>{
                    const fullName = doctor.name + '  ' + doctor.lastname
                    return <option value={doctor.Id} > { fullName }</option>
                })}
            </select>
        </div>
        </form>
    </div>
  );
}

export default DoctorsDropdown  ;