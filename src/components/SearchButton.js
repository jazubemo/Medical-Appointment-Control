import React from "react";
import './css/searchButton.css'

const SearchButton = (props) => {
  const { searchFilterEntry, 
    handleSubmitSearchFilterEntry, 
    onChangeSearchFilterEntry,
    handlePressEnterSearchFilterEntry  } = props
  return (
    <div className="container mt-2">
      <div className="input-group mx-auto ">
        <input type="text" 
          className="form-control" 
          placeholder="Search for ..." 
          onChange = {onChangeSearchFilterEntry}
          value = {searchFilterEntry}
          onKeyPress = {handlePressEnterSearchFilterEntry} />
            <span className="input-group-btn">
              <button className="btn btn-search" type="button" onClick={handleSubmitSearchFilterEntry} > Search</button>
            </span>
      </div>
    </div>
  );
}

export default SearchButton  ;