import React from 'react';
import { Router } from '@reach/router';
import Login from './pages/Login';
import Maintenance from './pages/Maintenance';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Login path="/" />
        <Maintenance path="/maintenance" />
      </Router>
    </div>
  );
}

export default App;


