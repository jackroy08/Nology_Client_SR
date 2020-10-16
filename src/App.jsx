import React from 'react';
import { Router } from '@reach/router';
import Login from "./pages/Login";
import Styles from "./App.module.scss";
import Maintenance from "./pages/Maintenance";

const App = () => {
  return (
    <div className={Styles.App}>
      <Router>
        <Maintenance path="/Maintenance" />
      </Router>
    </div>
  );
}

export default App;
