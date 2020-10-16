import React, {useState} from "react";
import { Link } from "@reach/router";
import styles from "./Operator.module.scss";

const Operator = () => {

    const [isShiftStart, setIsShiftStart] = useState(false);
    const changeStart = isShiftStart ? "End shift" : "Start shift";
    return (
    <>
        <section className={styles.fullPageWrapper}>
            <button onClick={() => (setIsShiftStart(!isShiftStart))}>
                {changeStart}
            </button>
            <Link to="/ClassA">
                <button>Accept Vehicle</button>
            </Link>
            <Link to="/ClassA">
                <button>Report a Problem</button>
            </Link>
            <button>Submit Load</button>
        </section>
    </>
    )
}

export default Operator;