import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import Styles from "../../../components/Modal/Modal.module.scss";
import { createLoad } from "../../../services/LoadsService";
import { UserContext } from "../../../context/userContext";
import showToast from "../../../services/toastService";

const SubmitLoad = (props) => {
    const { isShowing, hide } = props;
    const { user, supervisor, teamSiteName } = useContext(UserContext);
    
    const SubmitHandler = () => {
        console.log(supervisor);
        const load = {
            driver: user.userID,
            driverName: user.fullNameStr,
            currentDate: new Date(),
            supervisor: supervisor.userID ? supervisor.userID : null,
            supervisorName: supervisor.fullNameStr ? supervisor.fullNameStr : null,
            team: user.currentTeam,
            site: teamSiteName.site ? teamSiteName.site : null,
            isSignedOff: null
        }; 
        createLoad(load);
        hide();
        showToast("Your load has been recorded and passed for approval.", 2000)
    }

    return (
        user.isOnShift ? (
            <>
                <h1>Please confirm you would like to submit a load:</h1>
                <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={hide}>Cancel</button>
                <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit" onClick={SubmitHandler}>Create</button>
            </>
            ) : (
            <h1>Please start your shift to submit a load</h1>
        )
    )
}

export default SubmitLoad;