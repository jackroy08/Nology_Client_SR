import React from "react";
import { Link } from "@reach/router";
import Styles from "../Checklist.module.scss";

const ClassAChecks = (props) => {
    const checkboxArr = props.checklistData;
    const getCheckList = item => (
        <>
            <img src="" alt="IMG"/>
            <label key={item} htmlFor={item}>{item}</label>
            <input type="checkbox" id={item} name={item} value={item}/>
        </>
    );
    return (
        <main className={Styles.pageGrid}>
            <h1>Class A Checks</h1>
            <form id="class-a-checks"> 
                {checkboxArr.map(getCheckList)}
            </form>
            <textarea name="class-a-comment" id="class-a-checks"></textarea>
            <section className={Styles.navigation}>
                <Link to="/operator">
                    <button className={Styles.btn}>Back</button> 
                </Link>
                <Link to="/classb">
                    <button className={Styles.btn}>Next</button>
                </Link>
            </section>
        </main>
    )
}

export default ClassAChecks;