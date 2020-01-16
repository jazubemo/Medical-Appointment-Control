import React from "react";

const ModalFooter= (props) => {
  const { cancelLabel, createNewAppoinmentLabel } = props
  return (
    <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">{ cancelLabel}</button>
        <button type="button" className="btn btn-primary">{ createNewAppoinmentLabel }</button>
      </div>
  );
}

export default ModalFooter ;