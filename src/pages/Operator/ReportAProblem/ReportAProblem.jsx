import { navigate } from "@reach/router";
import React, { useContext } from "react";
import Styles from "../../../components/Modal/Modal.module.scss";
import "./ReportAProblem.module.scss";
import { updateVehicleIssues } from "../../../services/VehiclesService";
import { UserContext } from "../../../context/userContext";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { useState } from "react";

const ReportAProblem = () => {
    const [isPhotoOpen, setIsPhotoOpen] = useState(false)
    const { user, vehicle, supervisor } = useContext(UserContext);
    const supervisorProperty = supervisor ? supervisor.userID : null;
    const [photo, setPhoto] = useState("");

    const submitHandler = (e) => {
        console.log(e);
        e.preventDefault()
        let error =  {
            classType: document.getElementById("class-type").value,
            issue: document.getElementById("issue-type").value,
            operator: user.userID,
            supervisor: supervisorProperty,
            vehicleID: vehicle.vehicleID,
            additionalDetails: document.getElementById("additional-details").value,
            dateCreated: new Date().toUTCString(),
            assignedMaintenance: "",
            maintenanceSignoff: false,
            supervisorSignoff: false,
            photo: photo ? photo : ""
        }
        updateVehicleIssues("001", error)
        navigate("/Operator");
    }
    
    const togglePhoto = (e) =>  {
        e.preventDefault()
        setIsPhotoOpen(!isPhotoOpen);
    }
    const handleTakePhoto = (dataUri) => {
        setPhoto(dataUri);
    }
    const handleTakePhotoAnimationDone = (dataUri) => {
    }
    const handleCameraError = (error) => {
        alert('handleCameraError', error);
    }
    
    const handleCameraStart = (stream) => {
    }
    
    const handleCameraStop = () => {
    }

    return (
        <form>
            <h1>Please give details of your issue below:</h1>
            <fieldset>
                <label htmlFor="Class of issue">Class of issue</label>
                <select id="class-type" name="Class of issue">
                        <option value="classA">Class A</option>
                        <option value="classB">Class B</option>
                        <option value="classC">Class C</option>
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
                <button onClick={togglePhoto}>Take a photo</button>
                
            </div>
            {isPhotoOpen ? 
                <Camera
                    onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
                    onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
                    onCameraError = { (error) => { handleCameraError(error); } }
                    // idealFacingMode = {FACING_MODES.ENVIRONMENT}
                    idealResolution = {{width: 640, height: 480}}
                    // imageType = {IMAGE_TYPES.JPG}
                    imageCompression = {0.97}
                    isMaxResolution = {true}
                    isImageMirror = {false}
                    isSilentMode = {false}
                    isDisplayStartCameraError = {true}
                    isFullscreen = {false}
                    sizeFactor = {1}
                    onCameraStart = { (stream) => { handleCameraStart(stream); } }
                    onCameraStop = { () => { handleCameraStop(); } }/> : 
                null}
        </form>
    )
}

export default ReportAProblem;
