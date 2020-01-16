import React from "react";
import ModalHeader from "./ModalHeader"
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

const Modal= (props) => {
  const { idModal } = props
  return (
    <div className="modal fade" fade="false" id={idModal} tabIndex="-1" role="dialog" aria-labelledby={`${idModal}_Label`} aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <ModalHeader 
            idModal={`${idModal}_Label`}
            modalTitle="Medical Appointment"/>
        <ModalBody enterDateOfAppoinmentlabel="Enter Date of Appoinment"/>
        <ModalFooter 
            cancelLabel ="Cancel" 
            createNewAppoinmentLabel ="Create New Appointment"/>
      </div>
    </div>
    </div>
  );
}

export default Modal ;