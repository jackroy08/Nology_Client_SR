import React from "react";
import {Router} from "@reach/router"
import styles from "./App.module.scss";
// Pages for Router
import Login from "./pages/Login";
import Operator from "./pages/Operator";
import Login from "./pages/Login";
import Supervisor from "./pages/Supervisor";
import Maintenance from "./pages/Maintenance";
import Management from "./pages/Management";
import Admin from "./pages/Admin";
import ClassAChecks from "./pages/Checklist/ClassAChecks";
import ClassBChecks from "./pages/Checklist/ClassBChecks";
import ClassCChecks from "./pages/Checklist/ClassCChecks";
// Components
import Header from './components/header';
// Data
import checklistData from "./data/data.js"

const App = () => {
  return (
    <div className={Styles.App}>
      <Header />
      <Router>
        <Login path="/" />
        <Operator path="/operator" />
        <Supervisor path="/Supervisor" />
        <Maintenance path="/Maintenance" />
        <Management path="/Management" />
        <Admin path="/Admin" />
        <ClassAChecks checklistData={checklistData} path="/classa" />
        <ClassBChecks checklistData={checklistData} path="/classb" />
        <ClassCChecks checklistData={checklistData} path="/classc" />
      </Router>
    </div>
  );
}

export default App;
