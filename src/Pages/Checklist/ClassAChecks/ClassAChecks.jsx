import React from "react";
import { Link } from "@reach/router";
import Styles from "../Checklist.module.scss";

const ClassAChecks = (props) => {
    const checkboxArr = props.checklistData;
    const getCheckList = item => (
        <label key={item} htmlFor={item}>{item}
            <input type="checkbox" id={item} name={item} value={item}/>
        </label>
    );
    return (
        <section className={Styles.checklistSection}>
            <h1>Class A Checks</h1>
            <form id="class-a-checks"> 
                {checkboxArr.map(getCheckList)}
            </form>
            <textarea name="class-a-comment" id="class-a-checks"></textarea>
            <section className={Styles.navigation}>
                <Link to="/Operator">
                    <button className={Styles.navButtons}>Back</button> 
                </Link>
                <Link to="/ClassB">
                    <button className={Styles.navButtons}>Next</button>
                </Link>
            </section>
        </section>
    )
}

export default ClassAChecks;