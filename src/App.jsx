import React from "react";
import {Router} from "@reach/router"
import "./App.css";
import Operator from "./Pages/Operator";
import ClassAChecks from "./Pages/Checklist/ClassAChecks";
import ClassBChecks from "./Pages/Checklist/ClassBChecks";
import ClassCChecks from "./Pages/Checklist/ClassCChecks";
import checklistData from "./data/data.js"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Operator path="/operator" />
        <ClassAChecks checklistData={checklistData} path="/classa" />
        <ClassBChecks checklistData={checklistData} path="/classb" />
        <ClassCChecks checklistData={checklistData} path="/classc" />
      </Router>
    </div>
  );
}

export default App;
