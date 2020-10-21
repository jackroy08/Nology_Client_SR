import React, { useState } from "react";
import { Link } from "@reach/router";
import Styles from "../Checklist.module.scss";

const ClassAChecks = (props) => {
    const [additionalOptions, setAdditionalOptions] = useState([]);
    const checkboxArr = Object.keys(props.checklistData.truckMountedCrane.classA);
    const additionalFieldsArr = Object.keys(props.checklistData.truckMountedCrane)
        .filter(key => !key.match("class"));

    const getCheckList = item => (
        <>
            <label key={item} htmlFor={item}>{item}</label>
            <input type="checkbox" id={item} name={item} value={item}/>
        </>
    );

    return (
        <main className={Styles.pageGrid}>
            <h1>Class A Checks</h1>
            <form id="class-a-checks"> 
                {checkboxArr.map(getCheckList)}

                <h2>Additional checks</h2>
                {
                    additionalFieldsArr ? 
                    additionalFieldsArr.map(getCheckList):
                    <></>
                }
                <div>
                    {}
                </div>
            </form>
            
            <textarea name="class-a-comment" id="class-a-checks"></textarea>
            <section className={Styles.navigation}>
                <Link to="/Operator">
                    <button className={Styles.btn}>Back</button> 
                </Link>
                <Link to="/ClassB">
                    <button className={Styles.btn}>Next</button>
                </Link>
            </section>
        </main>
    )
}

export default ClassAChecks;