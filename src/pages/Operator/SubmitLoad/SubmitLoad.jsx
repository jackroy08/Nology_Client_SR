import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import Styles from "./SubmitLoad.module.scss";
import { createLoad } from "../../../services/LoadsService";
import { UserContext } from "../../../context/userContext";
import { navigate } from "@reach/router";

const SubmitLoad = (props) => {
    const { isShowing, hide } = props;
    const { user, supervisor, teamSiteName } = useContext(UserContext);
    
    const SubmitHandler = () => {
        console.log(supervisor)
        console.log(supervisor.length ? "null" : supervisor.userID)
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
    }

    return (
        user.isOnShift ? (
            <>
                <h3 className={Styles.submitLoadTitle}>Please confirm you would like to submit a load:</h3>
                <form className={Styles.submitLoadForm}>
                    <button className={Styles.btnPrimary} type="submit" onClick={SubmitHandler}>Create</button>
                </form> 
            </>
            ) : (
            <h3>Please start your shift to submit a load</h3>
        )
    )
}

export default SubmitLoad;