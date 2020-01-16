import React from "react";

const ModalBody= (props) => {
  const { enterDateOfAppoinmentlabel } = props
  return (
    <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="recipient-date" className="col-form-label">{enterDateOfAppoinmentlabel }</label>
            <input className="form-control" type="date" defaultValue="2011-08-19" readOnly id="recipient-date"></input>
          </div>
        </form>
    </div>
  );
}

export default ModalBody ;