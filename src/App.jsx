import React from 'react';
import { Router,Link } from '@reach/router';
import Login from './pages/Login';
import Maintenance from './pages/Maintenance';
import { Supervisor } from './pages/Supervisor/Supervisor';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Login path="/" />
        <Maintenance path="/maintenance" />
        <Supervisor path="/supervisor"/>
      </Router>
    </div>
  );
}

export default App;


