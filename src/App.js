import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./containers/Navbar"
import ScheduleMedicalAppointment from "./containers/ScheduleMedicalAppointment"
import MedicalSchedulePerDoctor from "./containers/MedicalSchedulePerDoctor"
import './App.css';

function App() {
  return (
    <Router>
        <div>
          <div className="App">
            <Navbar></Navbar>
          </div>
          <Switch>
            <Route exact path='/' component={ScheduleMedicalAppointment} />
            <Route path='/doctors' component={MedicalSchedulePerDoctor} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
