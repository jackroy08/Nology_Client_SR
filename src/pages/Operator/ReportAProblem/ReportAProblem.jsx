import React, { useContext } from "react";
import Styles from "./ReportAProblem.module.scss";
import { updateVehicleIssues } from "../../../services/VehiclesService";
import { UserContext } from "../../../context/userContext";
import Camera from 'react-html5-camera-photo';
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import firebase from "firebase";
import showToast from "../../../services/toastService";

const ReportAProblem = (props) => {
    const { hide } = props;
    const [isPhotoOpen, setIsPhotoOpen] = useState(false)
    const { user, vehicle, supervisor } = useContext(UserContext);
    const supervisorProperty = supervisor ? supervisor.userID ? supervisor.userID : null : null;
    const [photo, setPhoto] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        // const storageRef = firebase.storage().ref();
        // const imageCode = uuidv4();
        // const issueImageRef = storageRef.child(`issueimages/${imageCode}.jpg`);
        // const file = new File(photo.getPath())

        // issueImageRef.put(file).then(snapshot => {
        //     console.log('Uploaded a blob or file!');
        // });

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
            photo: "", //Will need to amend for photo functionality
            issueID: uuidv4()
        }
        updateVehicleIssues(vehicle.vehicleID, error);
        hide();
        showToast("Your issue has been recorded and passed to maintenance.", 2000);
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
        // <form>
        //     <h1>Please give details of your issue below:</h1>
        //     <fieldset>
        //         <label htmlFor="Class of issue">Class of issue</label>
        //         <select id="class-type" name="Class of issue">
        //                 <option value="classA">Class A</option>
        //                 <option value="classB">Class B</option>
        //                 <option value="classC">Class C</option>
        //         </select>
        //     </fieldset>
        //     <fieldset>
        //         <label htmlFor="Component affected">Component affected</label>
        //         <input id="issue-type" type="text"/>
        //     </fieldset>
        //     <fieldset>
        //         <label htmlFor="Additional details">Additional details</label>
        //         <textarea id="additional-details" placeholder="Please enter any additional details"></textarea>
        //     </fieldset>
        //     <div>
        //         <button type="button" className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={() => hide()}>Cancel</button>
        //         <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit" onClick={submitHandler}>Report</button>
        //         <button onClick={togglePhoto}>Take a photo</button>
                
        //     </div>
        //     {isPhotoOpen ? 
        //         <Camera
        //             onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        //             onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
        //             onCameraError = { (error) => { handleCameraError(error); } }
        //             idealResolution = {{width: 400, height: 300}}
        //             imageCompression = {0.1}
        //             isMaxResolution = {true}
        //             isImageMirror = {false}
        //             isSilentMode = {false}
        //             isDisplayStartCameraError = {true}
        //             isFullscreen = {false}
        //             sizeFactor = {1}
        //             onCameraStart = { (stream) => { handleCameraStart(stream); } }
        //             onCameraStop = { () => { handleCameraStop(); } }/> : 
        //         null}
        // </form>
        <>
        <h3 className={Styles.reportProblemTitle}>Please give details of your issue below:</h3>
            <form className={Styles.reportProblemForm} >
                    <label htmlFor="Class of issue">Class of issue</label>
                    <select className={Styles.selectPrimary} id="class-type" name="Class of issue">
                            <option value="classA">Class A</option>
                            <option value="classB">Class B</option>
                            <option value="classC">Class C</option>
                    </select>
                    <label htmlFor="Component affected">Component affected</label>
                    <input className={Styles.inputPrimary} id="issue-type" type="text"/>
                    <label htmlFor="Additional details">Additional details</label>
                    <textarea className={Styles.textareaPrimary} id="additional-details" placeholder="Please enter any additional details"></textarea>
                <div>
                    <button className={Styles.btnSecondary} data-dismiss="modal" aria-label="Close" onClick={() => hide()}>Cancel</button>
                    <button className={Styles.btnPrimary} onClick={togglePhoto}>Take a photo</button>
                    <button className={Styles.btnPrimary} type="submit" onClick={submitHandler}>Report</button>
                </div>
                {isPhotoOpen ? 
                    <Camera
                        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
                        onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
                        onCameraError = { (error) => { handleCameraError(error); } }
                        idealResolution = {{width: 640, height: 480}}
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
        </>
    )
}

export default ReportAProblem;
