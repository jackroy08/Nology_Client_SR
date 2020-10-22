import React from "react";
import {Router} from "@reach/router"
import styles from "./App.module.scss";
// Pages for Router
import Login from "./pages/Login";
import Operator from "./pages/Operator";
import Supervisor from "./pages/Supervisor";
import Maintenance from "./pages/Maintenance";
import Management from "./pages/Management";
import Admin from "./pages/Admin";
import ClassAChecks from "./pages/Checklist/ClassAChecks";
import ClassBChecks from "./pages/Checklist/ClassBChecks";
import ClassCChecks from "./pages/Checklist/ClassCChecks";
import Confirmation from "./pages/Checklist/Confirmation";
import ChecklistModal from "./pages/Checklist/ChecklistModal";
// Components
import Header from './components/header';
// Data
import checklistData from "./data/checklistdata.js";
import library from "./data/fa-library";


const App = () => {
  return (
    <>
      <Header />
      <Router className={styles.fullWidth}>
        <Login path="/" />
        <Operator path="/Operator" />
        <Supervisor path="/Supervisor" />
        <Maintenance path="/Maintenance" />
        <Management path="/Management" />
        <Admin path="/Admin" />
        <ClassAChecks path="/ClassA" />
        <ClassBChecks path="/ClassB" />
        <ClassCChecks path="/ClassC" />
        <ChecklistModal path="/ChecklistModal" checklistData={checklistData} />
        <Confirmation path="/Confirmation" />
      </Router>
    </>
  );
}

export default App;
