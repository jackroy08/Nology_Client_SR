import { navigate } from "@reach/router";
import React from "react";
import Styles from "../../../components/Modal/Modal.module.scss";
import "./ReportAProblem.module.scss";
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
            "Additional details": document.getElementById("additional-details").value,
            "Date created": new Date().toUTCString()
        }
        updateVehicleIssues("001", error)
        navigate("/Operator");
    }
    return (
        <form>
            <h1>Please give details of your issue below:</h1>
            <fieldset>
                <label htmlFor="Class of issue">Class of issue</label>
                <select id="class-type" name="Class of issue">
                        <option value="ClassA">Class A</option>
                        <option value="ClassB">Class B</option>
                        <option value="ClassC">Class C</option>
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="Component affected">Component affected</label>
                <input id="issue-type" type="text"/>
            </fieldset>
            <fieldset>
                <label htmlFor="Additional details">Additional details</label>
                <textarea id="additional-details" placeholder="Please enter any additional details"></textarea>
            </fieldset>
            <div>
                <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={()=> navigate("/Operator")}>Cancel</button>
                <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit" onClick={submitHandler}>Report</button>
            </div>
            {/* // Ext- add camera API plugin functionality */}
        </form>
    )
}

export default ReportAProblem;
