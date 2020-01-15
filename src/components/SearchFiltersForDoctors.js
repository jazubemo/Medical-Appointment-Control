import React from "react";


const SearchFiltersForDoctors = (props) => {
  const { onChangeSearchSpecialityFilter,
          onChangeSearchLastnameFilter,
          specialityFilter,
          lastnameFilter } = props
  return (
    <div className="container mt-2" >
        <div className="form-check form-check-inline">
            <input 
            className="form-check-input" 
            type="radio" name="inlineRadioOptions" 
            id="inlineRadio1" 
            value="speciality" 
            onChange={onChangeSearchSpecialityFilter}
            checked={specialityFilter} />
            <label className="form-check-label" htmlFor="inlineRadio1">Speciality</label>
        </div>
        <div className="form-check form-check-inline">
            <input 
            className="form-check-input" 
            type="radio" 
            name="inlineRadioOptions" 
            id="inlineRadio2" 
            value="lastname"
            onChange={onChangeSearchLastnameFilter}
            checked={lastnameFilter} />
            <label className="form-check-label" htmlFor="inlineRadio2">Lastname</label>
        </div>
    </div>
  );
}

export default SearchFiltersForDoctors;