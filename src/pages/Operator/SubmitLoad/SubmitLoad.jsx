import React from "react";
// import { navigate } from "@reach/router";

const SubmitLoad = () => {
    const SubmitHandler = () => {
        const load= {
            "driver": "operator" ,
            "time": new Date().toUTCString(),
            "supervisor": "supervisor" ,
            "team": "teamname" ,
            "site": "siteid" ,
            "is signed off": false
        }; 
        console.log(load);
    } 
// Firebase collections, data to be sent/saved

    return (
        <div>
            <h1>Please confirm you would like to submit a load:</h1>
            <button onClick={SubmitHandler}>Confirm</button>
            <button>Cancel</button>
        </div>
    )
}









export default SubmitLoad;