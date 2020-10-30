import React from "react";
import ReactDOM from 'react-dom';
import Styles from "../../../components/Modal/Modal.module.scss"
// import { navigate } from "@reach/router";

const SubmitLoad = ({ isShowing, hide }) => {
    const SubmitHandler = () => {
        const load= {
            driver: "operator",
            time: new Date().toUTCString(),
            supervisor: "supervisor",
            team: "teamname",
            site: "siteid",
            isSignedOff: false
        }; 
        console.log(load); // Firebase collections, data to be sent/saved
        hide();
    } 


    return (
        isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            

            <div className={Styles.modalOverlay}/>
                <div className={Styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
                    <div className={Styles.modal}>
                    <div className={Styles.modalHeader}>
                    </div>
                    <h1>Please confirm you would like to submit a load:</h1>
                    <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={hide}>Cancel</button>
                    <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit" onClick={SubmitHandler}>Create</button>
                </div>
                </div>
        </React.Fragment>, document.body
        ) : null
    )
}

export default SubmitLoad;