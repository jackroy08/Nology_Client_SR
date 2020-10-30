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
import ChecklistContainer from "./pages/Checklist/ChecklistContainer";
import SubmitLoad from "./pages/Operator/SubmitLoad";
import ReportAProblem from "./pages/Operator/ReportAProblem/ReportAProblem";
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
        <Management path="/Management/*" />
        <Admin path="/Admin/*" />
        <ChecklistContainer path="/Checklist" checklistData={checklistData} />
        <SubmitLoad path="/SubmitLoad" />
        <ReportAProblem path="/ReportAProblem" />
      </Router>
    </>
  );
}

export default App;
