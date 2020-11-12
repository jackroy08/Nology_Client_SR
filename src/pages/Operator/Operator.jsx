import React, { useState, useContext } from "react";
import { navigate } from "@reach/router";
import { UserContext } from "../../context/userContext";
import { getOperators, updateUser } from "../../services/UsersService";
import Styles from "./Operator.module.scss";
import Modal from "../../components/Modal";
import useModal from "../../components/Modal/useModal";
import SideNav from "../../components/SideNav"
import SubmitLoad from "./SubmitLoad";
import ReportAProblem from "./ReportAProblem";
import Error from "../../components/Error";

const Operator = () => {
    const { user } = useContext(UserContext);
    const { isShowing, toggle } = useModal();
    const [isShiftStart, setIsShiftStart] = useState(user.isOnShift);
    const [modalContent, setModalContent] = useState(null);
    const changeStart = user.isOnShift ? "End shift" : "Start shift";

    const updateShiftProperty = () => {
        user.isOnShift = !user.isOnShift;
        setIsShiftStart(user.isOnShift);
        updateUser(user).then(response => localStorage.setItem("user", JSON.stringify(user)));
        getOperators();
    }

    const checklistBarrier = () => {
        if (user.isOnShift && user.assignedVehicle) {
            navigate("/Checklist")
        } else if (!user.isOnShift) {
            let message = "Please begin your shift to accept a vehicle";
            setModalContent(<Error message={message} hide={toggle} />);
            toggle()
        } else {
            let message = "Please confirm with your supervisor that a vehicle is assigned";
            setModalContent(<Error message={message} hide={toggle} />);
            toggle()
        }
    }

    const reportBarrier = () => {
        if (user.isOnShift && user.assignedVehicle) {
            toggle();
            setModalContent(<ReportAProblem hide={toggle} />);
            
        } else if (!user.isOnShift) {
            let message = "Please begin your shift to accept a vehicle";
            setModalContent(<Error message={message} hide={toggle} />);
            toggle()
        }
        else {
            let message = "Please confirm with your supervisor that a vehicle is assigned";
            toggle()
            setModalContent(<Error message={message} hide={toggle} />);            
        }
    }

    return (
        
        <div className={Styles.pageContainer}> 
            <SideNav>
                <h2>Operator</h2>
                <button
                    className={Styles.btnNav}
                    onClick={() => updateShiftProperty()}>
                    {changeStart}
                </button>
                <button 
                    className={Styles.btnNav}
                    onClick={() => checklistBarrier()} 
                    user={user} >
                    Accept Vehicle
                </button>
                
                <button 
                    className={Styles.btnNav}
                    onClick={() => reportBarrier()}
                    user={user} >
                    Report a problem
                </button>
                
                <button 
                    className={Styles.btnNav}
                    user={user} 
                    onClick= {() => {toggle(); setModalContent(<SubmitLoad hide={toggle} />)}}>
                    Submit Load
                </button>
                <Modal innerComponent={modalContent} isShowing={isShowing} hide={toggle}/>
                
            </SideNav>
            <main className={Styles.mainContent}>
                
            </main>
            
        </div>
    )
}

export default Operator;