import React from 'react';
import { Router,Link } from '@reach/router';
import Login from './pages/Login';
import Maintenance from './pages/Maintenance';
import { Supervisor } from './pages/Supervisor/Supervisor';

//DUMMY DATA
const data = [
  'truck broke down',
  'man down',
  'TMM no T'
]

const App = () => {
  return (
    <div className="App">
      <Router>
        <Login path='/login' />
        <Maintenance path="/maintenance" />
        <Supervisor path="/supervisor" data={data}/>
      </Router>
    </div>
  );
}

export default App;


