import React from "react";
import {Router} from "@reach/router"
import styles from "./App.module.scss";
import Operator from "./pages/Operator";
import ClassAChecks from "./pages/Checklist/ClassAChecks";
import ClassBChecks from "./pages/Checklist/ClassBChecks";
import ClassCChecks from "./pages/Checklist/ClassCChecks";
import checklistData from "./data/data.js"
import Login from "./pages/Login";
import Maintenance from "./pages/Maintenance";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Operator path="/Operator" />
        <ClassAChecks checklistData={checklistData} path="/ClassA" />
        <ClassBChecks checklistData={checklistData} path="/ClassB" />
        <ClassCChecks checklistData={checklistData} path="/ClassC" />
        <Maintenance path="/Maintenance" />
      </Router>
    </div>
  );
}

export default App;
