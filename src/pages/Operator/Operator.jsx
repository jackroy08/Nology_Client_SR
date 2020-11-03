import React, {useState, useEffect} from "react";
import { Link, navigate } from "@reach/router";
import Styles from "./Operator.module.scss";
import { getOperators, updateUser, getTeamSupervisor } from "../../services/UsersService";
import useModal from "../../components/Modal/useModal";
import SubmitLoad from "./SubmitLoad";
import { getTeamSiteName } from "../../services/TeamsService";

const Operator = () => {
    const [operatorsArr, setOperatorsArr] = useState([]);
    const [user, setUser] = useState({});
    const [supervisor, setSupervisor] = useState({})
    const [isShiftStart, setIsShiftStart] = useState(user.isOnShift);
    const {isShowing, toggle} = useModal(); 
    const [teamSiteName, setTeamSiteName] = useState({});
    
    const changeStart = user.isOnShift ? "End shift" : "Start shift";

    const updateShiftProperty = () => {
        setIsShiftStart(() => !isShiftStart);
        user.isOnShift = !user.isOnShift;
        updateUser(user);
        getOperators();
    }

    const getUserKeys = thisUser => {
        return (
            <option 
                key={thisUser.userID} 
                value={thisUser.userID}>
                    {thisUser.userID}
            </option>
        )
    };

    const changeHandler = e => {
        let target = e.target.value;
        getOperators().then(response => {
            setUser(response.filter(item => item.userID === target)[0])
        });
    }

    const checklistBarrier = () => {
        if (user.isOnShift) {
            navigate("/Checklist")
        } else {
            alert("Please begin your shift to accept a vehicle")
        }
    }

    const reportBarrier = () => {
        if (user.isOnShift) {
            navigate("/ReportAProblem")
        } else {
            alert("Please begin your shift to report a problem")
        }
    }

    useEffect(() => {
        getOperators()
            .then(response => {
                setUser(response[0]);
                setOperatorsArr(response.map(getUserKeys));
                getTeamSupervisor(response[0].currentTeam, response[0].currentSubTeam)
                    .then(response => {
                        setSupervisor(response[0])
                    });
                getTeamSiteName(response[0].currentTeam, response[0].currentSubTeam)
                    .then(response => {
                        setTeamSiteName(response[0])
                    });
            });
    }, []);  

    return (
        <main className={Styles.pageGrid}>
            <select 
                onChange={changeHandler} 
                name="user" 
                id="user"> 
                    {operatorsArr}
            </select> 
            <button
                className={`${Styles.btn} ${Styles.btnLG}`}
                onClick={() => updateShiftProperty()}>
                    {changeStart}
            </button>
            <button 
                onClick={() => checklistBarrier()} 
                user={user} 
                className={`${Styles.btn} ${Styles.btnLG}`}>
                    Accept Vehicle
            </button>
            <button 
                onClick={() => reportBarrier()}
                user={user} 
                className={`${Styles.btn} ${Styles.btnLG}`}>
                    Report a problem
            </button>

            {/* <ReportAProblem problemShowing={problemShowing} problemHide={problemToggle} /> */}
            {/* need similar functionality for submit load when screen developed */}
            
            <button 
                user={user} 
                className={`${Styles.btn} ${Styles.btnLG}`} 
                onClick= {toggle}>
                    Submit Load
            </button>
            <SubmitLoad 
                isShowing={isShowing} 
                hide={toggle}
                user={user}
                supervisor={supervisor}
                teamSiteName={teamSiteName}
            />
        </main>
    )
}

export default Operator;