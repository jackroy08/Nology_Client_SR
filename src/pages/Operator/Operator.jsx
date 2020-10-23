import React, {useState} from "react";
import { Link } from "@reach/router";
import Styles from "./Operator.module.scss";

const Operator = () => {

    const [isShiftStart, setIsShiftStart] = useState(false);
    const changeStart = isShiftStart ? "End shift" : "Start shift";
    const btnColor = isShiftStart ? Styles.end : Styles.start

    const [isAcceptVehicleAvailable, setIsAcceptVehicleAvailable] = useState(false);
    const [isReportAProblemAvailable, setisReportAProblemAvailable] = useState(false);
    const [isSubmitLoadAvailable, setIsSubmitLoadAvailable] = useState(false);


    //if disable is true, return hidden style, else return shown style
    const disabled = (disable) => disable ? Styles.hidden : Styles.shown

    return (
        <main className={Styles.pageFlex}>
            {/* 1 */}
            <button
                className={`${Styles.btn} ${Styles.btnLG} ${btnColor}`}
                onClick={() => {
                    setIsShiftStart(!isShiftStart); 
                    setIsAcceptVehicleAvailable(!isAcceptVehicleAvailable);
                }}>
                {changeStart}
            </button>

            {/* 2 */}
            <Link to="/ClassA" className={disabled(!isAcceptVehicleAvailable)}>
                <button className={`${Styles.btn} ${Styles.btnLG} ${Styles.btnPrimary}`}>Accept Vehicle</button>
            </Link>
            <button className={`${Styles.btn} ${Styles.btnLG} ${Styles.btnPrimary} ${Styles.btnDisabled} ${disabled(isAcceptVehicleAvailable)}`}>Accept Vehicle</button>

            {/* 3 */}
            <Link to="/ClassA" className={disabled(!isReportAProblemAvailable)}>
                <button className={`${Styles.btn} ${Styles.btnLG} ${Styles.btnPrimary}`}>Report a Problem</button>
            </Link>
            <button className={`${Styles.btn} ${Styles.btnLG} ${Styles.btnPrimary} ${Styles.btnDisabled} ${disabled(isReportAProblemAvailable)}`}>Report a Problem</button>
            
            {/* 4 */}
            <button className={`${Styles.btn} ${Styles.btnLG} ${Styles.btnPrimary} ${disabled(!isSubmitLoadAvailable)}`}>Submit Load</button>
            <button className={`${Styles.btn} ${Styles.btnLG} ${Styles.btnPrimary} ${Styles.btnDisabled} ${disabled(isSubmitLoadAvailable)}`}>Submit Load</button>

        </main>
    )
}

export default Operator;