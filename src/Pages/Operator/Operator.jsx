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
            <Link to="/classa">
                <button>Accept Vehicle</button>
            </Link>
            <Link to="/classa">
                <button>Report a Problem</button>
            </Link>
            <button>Submit Load</button>
        </section>
    </>
    )
}

export default Operator;