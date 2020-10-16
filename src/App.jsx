import React from 'react';
import { Router,Link } from '@reach/router';
import Login from './pages/Login';
import Maintenance from './pages/Maintenance';
import { Supervisor } from './pages/Supervisor/Supervisor';

//DUMMY DATA
const dataArr = [
  'truck broke down',
  'man down',
  'TMM no T'
]

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
        <Supervisor path="/supervisor" dataArr={dataArr} employeeArr={employeeArr} vehicleArr={vehicleArr} />
      </Router>
    </div>
  );
}

export default App;


