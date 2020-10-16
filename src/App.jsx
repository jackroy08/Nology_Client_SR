import React from 'react';
import { Router } from '@reach/router';

import Login from "./pages/Login";
// import Operator from "./pages/Operator";
import Supervisor from "./pages/Supervisor";
import Maintenance from "./pages/Maintenance";
import Management from "./pages/Admin";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Login path="/" />
        {/* <Operator path="/Operator" /> */}
        <Supervisor path="/Supervisor" />
        <Maintenance path="/Maintenance" />
        <Management path="/Management" />
        <Admin path="/Admin" />
      </Router>
    </div>
  );
}

export default App;
