import React from "react";
import {Router} from "@reach/router"
import Operator from "./pages/Operator";
import ClassAChecks from "./pages/Checklist/ClassAChecks";
import ClassBChecks from "./pages/Checklist/ClassBChecks";
import ClassCChecks from "./pages/Checklist/ClassCChecks";
import checklistData from "./data/data.js"
import Login from "./pages/Login";
import Styles from "./App.module.scss";
import Supervisor from "./pages/Supervisor";
import Maintenance from "./pages/Maintenance";
import Management from "./pages/Management";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <div className={Styles.App}>
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
