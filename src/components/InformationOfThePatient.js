import React from "react";

const InformationOfThePatient = (props) => {
  const { info, show  } = props
  return (
    <div >
        { show ?
        <div className="container mt-2" >
         <p>Information of the patient:</p>
        <div className="container border border-dark rounded ">
        <form>
          <div className="form-group row">
            <label htmlFor="staticName" className="col-sm-2 col-form-label">Name:</label>
            <div className="col-sm-6">
              <input type="text" readOnly className="form-control-plaintext" id="staticName" value={info.name} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticLastname" className="col-sm-2 col-form-label">Lastname:</label>
              <div className="col-sm-6">
                <input type="text" readOnly className="form-control-plaintext" id="staticLastname" value={info.lastname} />
              </div>
          </div>
        </form>
        </div>
        </div>: null}
    </div>
  );
}

export default InformationOfThePatient;