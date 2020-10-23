import React, {useState} from "react";
import { Link } from "@reach/router";
import Styles from "./Operator.module.scss";

const Operator = () => {

    const [isShiftStart, setIsShiftStart] = useState(false);
    const changeStart = isShiftStart ? "End shift" : "Start shift";
    return (
        <main className={Styles.pageGrid}>
            <button
                className={`${Styles.btn} ${Styles.btnLG}`}
                onClick={() => (setIsShiftStart(!isShiftStart))}>
                {changeStart}
            </button>
            <Link to="/ChecklistModal">
                <button className={`${Styles.btn} ${Styles.btnLG}`}>Accept Vehicle</button>
            </Link>
            <Link to="/ChecklistModal">
                <button className={`${Styles.btn} ${Styles.btnLG}`}>Report a Problem</button>
            </Link>
            <button className={`${Styles.btn} ${Styles.btnLG}`}>Submit Load</button>
        </main>
    )
}

export default Operator;