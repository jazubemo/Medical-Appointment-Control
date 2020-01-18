import React from "react";
import logo from './../img/medicalAppointmentImage.jpg'; 
import './css/backgroundImage.css'

const BackgroundImage = () => {
  return (
    <div className="container">
      <img className="maxWidth " src={logo} alt="medical appointment logo" />
    </div>
  );
}

export default BackgroundImage  ;