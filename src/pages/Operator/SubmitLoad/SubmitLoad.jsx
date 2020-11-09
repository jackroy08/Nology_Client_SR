import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import Styles from "../../../components/Modal/Modal.module.scss";
import { createLoad } from "../../../services/LoadsService";
import { UserContext } from "../../../context/userContext";

// import { navigate } from "@reach/router";

const SubmitLoad = (props) => {
    const { isShowing, hide } = props;
    const { user, supervisor, teamSiteName } = useContext(UserContext);
    
    const SubmitHandler = () => {
        const load = {
            driver: user.userID,
            driverName: user.fullNameStr,
            currentDate: new Date(),
            supervisor: supervisor.userID,
            supervisorName: supervisor.fullNameStr,
            team: user.currentTeam,
            site: teamSiteName.site,
            isSignedOff: null
        }; 
        createLoad(load);
        hide();
    }

    return (
        user.isOnShift ? (
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
            ) : null ) : (
                
            isShowing ? ReactDOM.createPortal(
            <React.Fragment>
                <div className={Styles.modalOverlay}/>
                    <div className={Styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
                        <div className={Styles.modal}>
                        <div className={Styles.modalHeader}>
                        </div>
                        <h1>Please start your shift to submit a load</h1>
                        <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={hide}>Close</button>
                    </div>
                    </div>
            </React.Fragment>, document.body
            ) : null
        )
    )
}

export default SubmitLoad;