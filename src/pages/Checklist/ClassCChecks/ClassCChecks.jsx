import React from "react";
import { Link } from "@reach/router";
import Styles from "../Checklist.module.scss";

const ClassCChecks = (props) => {
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
            <h1>Class C Checks</h1>
            <form id="class-c-checks"> 
                {checkboxArr.map(getCheckList)}
            </form>
            <textarea name="class-c-comment" id="class-c-checks"></textarea>
            <section className={Styles.navigation}>
                <Link to="/ClassC">
                    <button className={Styles.btn}>Back</button> 
                </Link>
                <Link to="/Confirmation">
                    <button className={Styles.btn}>Next</button>
                </Link>
            </section>
        </main>
    )
}

export default ClassCChecks;