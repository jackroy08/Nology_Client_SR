import React, {useState, useEffect} from "react";
import { Link, navigate } from "@reach/router";
import Styles from "./Operator.module.scss";
import { getOperators, getUsers, updateUser } from "../../services/UsersService";
import useModal from "../../components/Modal/useModal";
import SubmitLoad from "./SubmitLoad";


const Operator = () => {
    const [operatorsArr, setOperatorsArr] = useState([]);
    const [user, setUser] = useState({});
    const {isShowing, toggle} = useModal();
    const [isShiftStart, setIsShiftStart] = useState(user.isOnShift);
    const changeStart = isShiftStart ? "End shift" : "Start shift";


    const updateShiftProperty = () => {
        setIsShiftStart(!user.isOnShift);
        user.isOnShift = !user.isOnShift;
        updateUser(user);
        getOperators();
    }

    const getUserKeys = thisUser => {
        return <option key={thisUser.userID} value={thisUser.userID}>{thisUser.userID}</option> 
    };

    const changeHandler = e => {
        let target = e.target.value;
        getOperators().then(response => {
            setUser(response.filter(item => item.userID === target)[0])
        })
    }

    const updateButtonFunctionality = () => {
        if (user.isOnShift) {
            navigate("/Checklist")
        } 
    }

    useEffect(() => {
        /// THIS IS THE OWRKING VERSION BELOW :)
        getOperators().then(response => {
            setUser(response[0]);
            setOperatorsArr(response.map(getUserKeys))
            // You might want to also keep track of all the users????
        })
    }, [])

    return (
        <main className={Styles.pageGrid}>
            <select onChange={changeHandler} name="user" id="user"> 
                    {operatorsArr}
            </select> 
            <button
                className={`${Styles.btn} ${Styles.btnLG}`}
                onClick={() => updateShiftProperty()}>
                {changeStart}
            </button>
            
            <button onClick={() => updateButtonFunctionality()} user={user} className={`${Styles.btn} ${Styles.btnLG}`}>Accept Vehicle</button>
            <Link to="/ReportAProblem">
                <button user={user} className={`${Styles.btn} ${Styles.btnLG}`}>Report a problem</button>
            </Link>
            {/* <ReportAProblem problemShowing={problemShowing} problemHide={problemToggle} /> */}
            {/* need similar functionality for submit load when screen developed */}
            
            <button user={user} className={`${Styles.btn} ${Styles.btnLG}`} onClick= {toggle}>Submit Load</button>
            <SubmitLoad isShowing={isShowing} hide={toggle} />
        </main>
    )
}

export default Operator;