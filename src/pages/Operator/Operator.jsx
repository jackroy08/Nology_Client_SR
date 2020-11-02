import React, {useState, useEffect} from "react";
import { Link, navigate } from "@reach/router";
import Styles from "./Operator.module.scss";
import { getOperators, getUsers, updateUser } from "../../services/UsersService";
import useModal from "../../components/Modal/useModal";
import SubmitLoad from "./SubmitLoad";


const Operator = () => {
    const {isShowing, toggle} = useModal();
    const [isShiftStart, setIsShiftStart] = useState(false);
    const operatorsArr = getUsers().then(response => {
            setUser(response[0]);
    });
    console.log(operatorsArr);
    // const operatorsArr = await getUsers();
    // console.log(operatorsArr);
    const [user, setUser] = useState({});
    const changeStart = isShiftStart ? "End shift" : "Start shift";


    const updateShiftProperty = () => {
        setIsShiftStart(!isShiftStart);
        updateUser()
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

    useEffect(() => {
        getUsers().then(response => {
            setUser(response[0]);
            // You might want to also keep track of all the users????
        })
    }, [])

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