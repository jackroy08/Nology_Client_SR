import React from "react";
import {Router} from "@reach/router"
import "./App.css";
import Operator from "./Pages/Operator";
import ClassAChecks from "./Pages/Checklist/ClassAChecks";
import ClassBChecks from "./Pages/Checklist/ClassBChecks";
import ClassCChecks from "./Pages/Checklist/ClassCChecks";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Operator path="/" />
        <ClassAChecks path="/classa" />
        <ClassBChecks path="/classb" />
        <ClassCChecks path="/classc" />
      </Router>
    </div>
  );
}

export default App;
