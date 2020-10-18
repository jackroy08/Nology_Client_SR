import React from "react";
import { Link } from "@reach/router";
import Styles from "../Checklist.module.scss";

const ClassBChecks = (props) => {
    const checkboxArr = props.checklistData
    const getCheckList = item => (
        <label key={item} htmlFor={item}>{item}
            <input type="checkbox" id={item} name={item} value={item}/>
        </label>
    );
    return (
        <section className={Styles.checklistSection}>
            <h1>Class B Checks</h1>
            <form id="class-b-checks"> 
                {checkboxArr.map(getCheckList)}
            </form>
            <textarea name="class-b-comment" id="class-b-checks"></textarea>
            <section className={Styles.navigation}>
                <Link to="/classa">
                    <button className={Styles.navButtons}>Back</button> 
                </Link>
                <Link to="/classc">
                    <button className={Styles.navButtons}>Next</button>
                </Link>
            </section>
        </section>
    )
}

export default ClassBChecks;