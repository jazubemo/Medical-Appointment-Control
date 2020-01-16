import React from "react";

const ModalHeader= (props) => {
  const { idModal, modalTitle } = props
  return (
    <div className="modal-header">
        <h5 className="modal-title" id={`${idModal}`}>{modalTitle}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
  );
}

export default ModalHeader ;