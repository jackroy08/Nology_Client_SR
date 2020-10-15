import React, {useState} from "react";
import { Link } from '@reach/router';
import styles from "./Operator.module.scss";
import ClassAChecks from "../Checklist/ClassAChecks";

const Operator = () => {

    const [isShiftStart, setIsShiftStart] = useState(false);
    const changeStart = isShiftStart ? "End shift" : "Start shift";
    return (
    <>
        <section>
            <button onClick={() => (setIsShiftStart(!isShiftStart))}>
                {changeStart}
            </button>
                <Link to="classachecks">
                    <button>Accept Vehicle</button>
                </Link>
            
            <button>Report a Problem</button>
            <button>Submit Load</button>
        </section>
    </>
    )
}

export default Operator;