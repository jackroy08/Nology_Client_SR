import React from 'react';
import { Router,Link } from '@reach/router';
import Login from './pages/Login';
import Maintenance from './pages/Maintenance';
import { Supervisor } from './pages/Supervisor/Supervisor';
import { DailyReport } from './pages/Supervisor/DailyReport/DailyReport';

//DUMMY DATA

const employeeArr  = [
  'Prudence Maluleka',
  'Thomas Mkhwanazi',
  'Sylvia Janse van Rensburg',
  'Sibongile Molepo'
]

const vehicleArr = [
  'digger01',
  'bakkie01',
  'dumptruck01'
]


const App = () => {
  return (
    <div className="App">
      <Router>
        <Login path='/login' />
        <Maintenance path="/maintenance" />
        <Supervisor path="/supervisor" employeeArr={employeeArr} vehicleArr={vehicleArr} />
        <DailyReport path="/report"/>
      </Router>
    </div>
  );
}

export default App;


