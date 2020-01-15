import React from 'react';
import './App.css';
import Navbar from "./containers/navbar"
import ScheduleMedicalAppoinment from "./containers/ScheduleMedicalAppoinment"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ScheduleMedicalAppoinment />
    </div>
  );
}

export default App;
