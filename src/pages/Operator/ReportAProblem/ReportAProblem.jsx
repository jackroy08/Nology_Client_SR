import { navigate } from "@reach/router";
import React from "react";
import ReactDOM from 'react-dom';
import Styles from "../../../components/Modal/Modal.module.scss";
import { updateVehicleIssues } from "../../../services/VehiclesService";
// import 'react-html5-camera-photo/build/css/index.css'; Camera import line, need function adding 
// Could look at making new modal for Report a problem to fix issue of submit load page being rendered instead
const ReportAProblem = () => {
    const submitHandler = (e) => {
        console.log(e);
        e.preventDefault()
        let error =  {
            "Class type": document.getElementById("class-type").value,
            "Issue": document.getElementById("issue-type").value,
            "Operator": "operator",
            "Supervisor": "supervisor",
            "Vehicle ID": "vehicleId",
            "Additional details": document.getElementById("additional-details").value
        }
        updateVehicleIssues("001", error)
        navigate("/Operator");
    }
    return (
        <form>
            <h1>Please give details of your issue below:</h1>
            <label htmlFor="Class of issue">Class of issue
                <select id="class-type" name="Class of issue">
                    <option value="ClassA">Class A</option>
                    <option value="ClassB">Class B</option>
                    <option value="ClassC">Class C</option>
                </select>
            </label>
            <label htmlFor="Component affected">Component affected
                <input id="issue-type" type="text"/>
            </label>
            <label htmlFor="Additional details">Additional details
                <textarea id="additional-details" placeholder="Please enter any additional details"></textarea>
            </label>
            <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={()=> navigate("/Operator")}>Cancel</button>
            <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit" onClick={submitHandler}>Report</button>
            {/* // Ext- add camera API plugin functionality */}
        </form>
    )
}

export default ReportAProblem;
