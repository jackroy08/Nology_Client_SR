import { navigate } from "@reach/router";
import React from "react";
import Styles from "../../../components/Modal/Modal.module.scss";
import "./ReportAProblem.module.scss";
import { updateVehicleIssues } from "../../../services/VehiclesService";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
const ReportAProblem = () => {
    const submitHandler = (e) => {
        console.log(e);
        e.preventDefault()
        let error =  {
            classType: document.getElementById("class-type").value,
            issue: document.getElementById("issue-type").value,
            operator: "operator",
            supervisor: "supervisor",
            vehicleID: "vehicleId",
            additionalDetails: document.getElementById("additional-details").value,
            dateCreated: new Date().toUTCString(),
            maintenanceSignoff: false,
            supervisorSignoff: false
        }
        updateVehicleIssues("001", error)
        navigate("/Operator");
    }
    const togglePhoto = () =>  {
        return <Camera onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); }} />
    }
    const handleTakePhoto = (dataUri) => {
            console.log("takePhoto");
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
                <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={()=> navigate("/operator")}>Cancel</button>
                <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit" onClick={submitHandler}>Report</button>
                <button onClick={() => togglePhoto}>Take a photo</button>
            </div>
            {/* // Ext- add camera API plugin functionality */}
        </form>
    )
}

export default ReportAProblem;
