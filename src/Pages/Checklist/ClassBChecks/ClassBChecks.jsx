import React from "react";
import { Link } from "@reach/router";
import styles from "../Checklist.module.scss";

const ClassBChecks = () => {
    const checkboxArr = ["STOP BLOCKS", "FIRE EXTINGUISHER", "OPERATOR LICENCE", "SEAT BELTS (IN USE)", "HEAD LIGHTS"];
    const getCheckList = item => (
        <label key={item} htmlFor={item}>{item}
            <input type="checkbox" id={item} name={item} value={item}/>
        </label>
    );
    return (
        <section>
            <h1>Class B Checks</h1>
            <form id="class-b-checks"> 
                {checkboxArr.map(getCheckList)}
            </form>
            <textarea name="class-b-comment" id="class-b-checks"></textarea>
            <section className={styles.navigation}>
                <Link to="/classa">
                    <button className={styles.navButtons}>Back</button> 
                </Link>
                <Link to="/classc">
                    <button className={styles.navButtons}>Next</button>
                </Link>
            </section>
        </section>
    )
}

export default ClassBChecks;