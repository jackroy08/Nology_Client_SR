import React, {useState} from "react";
import { navigate } from "@reach/router";
import Styles from "./Operator.module.scss";
import { getUsers, updateUser } from "../../services/UsersService"


const Operator = () => {
    
    const [isShiftStart, setIsShiftStart] = useState(false);
    const operatorsArr = getUsers().filter(user => user.userType === "operator");
    const [user, setUser] = useState(operatorsArr[0])
    const changeStart = isShiftStart ? "End shift" : "Start shift";

    const updateShiftProperty = () => {
        setIsShiftStart(!isShiftStart);
        updateUser();
    }

    const getUserKeys = thisUser => {
        return <option key={thisUser.userID} value={thisUser.userID}>{thisUser.userID}</option> 
    };

    const changeHandler = e => {
        setUser(operatorsArr.filter(operator => operator.userID == [e.target.value])[0])
    }

    const updateButtonFunctionality = () => {
        if (user.isOnShift) {
            navigate("/Checklist")
        } 
    }

    return (
        <main className={Styles.pageGrid}>
            <select onChange={changeHandler} name="user" id="user"> 
                    {operatorsArr.map(getUserKeys)}
            </select> 
            <button
                className={`${Styles.btn} ${Styles.btnLG}`}
                onClick={() => updateShiftProperty()}>
                {changeStart}
            </button>
            
            <button onClick={() => updateButtonFunctionality()} user={user} className={`${Styles.btn} ${Styles.btnLG}`}>Accept Vehicle</button>
            <button onClick={() => updateButtonFunctionality()} className={`${Styles.btn} ${Styles.btnLG}`}>Report a Problem</button>
            {/* need similar functionality for submit load when screen developed */}
            <button user={user} className={`${Styles.btn} ${Styles.btnLG}`}>Submit Load</button>
        </main>
    )
}

export default Operator;