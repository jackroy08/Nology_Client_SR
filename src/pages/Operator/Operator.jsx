import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import Styles from "./Operator.module.scss";
import usersArr from "../../data/users";
import { getUsers, updateUser } from "../../services/UsersService"


const Operator = () => {
    
    const [isShiftStart, setIsShiftStart] = useState(false);

    const operatorsArr = getUsers().filter(user => user.userType === "operator");
    const [user, setUser] = useState(operatorsArr[0].userID)
    
    const changeStart = isShiftStart ? "End shift" : "Start shift";

    const updateShiftProperty = () => {
        setIsShiftStart(!isShiftStart);
        updateUser()
    }

    const getUserKeys = thisUser => {
        return <option value={thisUser.userID}>{thisUser.userID}</option> 
    };

    const changeHandler = e => {
        setUser(e.target.value);
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
            <Link to="/Checklist" >
                <button className={`${Styles.btn} ${Styles.btnLG}`}>Accept Vehicle</button>
            </Link>
            <Link to="/Checklist" >
                <button className={`${Styles.btn} ${Styles.btnLG}`}>Report a Problem</button>
            </Link>
            <button className={`${Styles.btn} ${Styles.btnLG}`}>Submit Load</button>
        </main>
    )
}

export default Operator;