import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./containers/navbar"
import ScheduleMedicalAppoinment from "./containers/ScheduleMedicalAppoinment"
import Doctors from "./containers/Doctors"

function App() {
  return (
    <Router>
        <div>
          <div className="App">
            <Navbar></Navbar>
          </div>
          <Switch>
              <Route exact path='/appointments' component={ScheduleMedicalAppoinment} />
              <Route path='/doctors' component={Doctors} />
          </Switch>
        </div>
      </Router>

  );
}

export default App;
