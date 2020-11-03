import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import Styles from "../../../components/Modal/Modal.module.scss";
import { updateLoad } from "../../../services/LoadsService";

// import { navigate } from "@reach/router";

const SubmitLoad = (props) => {
    const { isShowing, hide, user, supervisor, teamSiteName } = props;
    
    const SubmitHandler = () => {
        console.log(teamSiteName);
        const load = {
            driver: user.fullNameStr,
            currentDate: new Date().toUTCString(),
            supervisor: supervisor.fullNameStr,
            team: user.currentTeam,
            site: teamSiteName.site,
            isSignedOff: false 
        }; 
        updateLoad(load);
        hide();
    }

    useEffect(() => {
        
    }, []);


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