import React from "react";
import { Link } from "@reach/router";
import Styles from "../Checklist.module.scss";

const ClassBChecks = (props) => {
    const checkboxArr = props.checklistData
    const getCheckList = item => (
        <>
            <img src="" alt="IMG"/>
            <label key={item} htmlFor={item}>{item}</label>
            <input type="checkbox" id={item} name={item} value={item}/>
        </>
    );
    return (
        <main className={Styles.pageGrid}>
            <h1>Class B Checks</h1>
            <form id="class-b-checks"> 
                {checkboxArr.map(getCheckList)}
            </form>
            <textarea name="class-b-comment" id="class-b-checks"></textarea>
            <section className={Styles.navigation}>
                <Link to="/ClassA">
                    <button className={Styles.btn}>Back</button> 
                </Link>
                <Link to="/ClassC">
                    <button className={Styles.btn}>Next</button>
                </Link>
            </section>
        </main>
    )
}

export default ClassBChecks;