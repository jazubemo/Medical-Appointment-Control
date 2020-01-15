import React from "react";
import './css/searchButton.css'

const SearchButtonPerPatient = (props) => {
  const { patientId, 
    handleSubmitPatientId, 
    onChangeInputPatientId,
    handlePressEnterPatientId  } = props
  return (
    <div className="container mt-2">
      <label>Enter patient identity:</label>
      <div className="input-group mx-auto ">
        <input type="text" 
          className="form-control" 
          placeholder="Search for..." 
          onChange = {onChangeInputPatientId}
          value = {patientId}
          onKeyPress = {handlePressEnterPatientId} />
            <span className="input-group-btn">
              <button className="btn btn-search" type="button" onClick={handleSubmitPatientId} > Search</button>
            </span>
      </div>
    </div>
  );
}

export default SearchButtonPerPatient ;