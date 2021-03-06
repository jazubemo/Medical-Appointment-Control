import React, { Component } from "react";
import MedicineIcon from './../img/appointment.svg'
import './css/navbar.css'

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  render() {

  const show = (this.state.menu) ? "show" : "" ;

  return (

    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <img className="imgCustomize" src={MedicineIcon} alt="Medicine Icon" />
      <a className="navbar-brand" href="/">Appointments</a>
      <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse navbarCustomize " + show}>
        <div className="navbar-nav">
          <a className="nav-item nav-link " href="/doctors" >Doctors</a>
        </div>
      </div>
      <div className={"collapse navbar-collapse navbarCustomize " + show}>
        <div className="navbar-nav">
          <a className="nav-item nav-link " href="/patients" >Patients</a>
        </div>
      </div>

    </nav>
  );
  }
}