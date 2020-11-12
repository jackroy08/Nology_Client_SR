import React from "react";
import Styles from "../Checklist.module.scss";

const ClassAChecks = (props) => {
    const { setFailedElements, failObject, checklistData, vehicleType, nextHandler, backHandler} = props.propsMethods;
    const checkboxArr = Object.keys(checklistData.classA);

    const getChecklist = item => (
        <div key={item}>
            <img src={checklistData.classA[item]} alt={item} />
            <label htmlFor={item}>{item}   
            </label>
            <input type="checkbox" id={item} name={item} value={item}/> 
        </div>
    );

    return (
        <>
        
            <main className={Styles.pageGrid}>
                <h1>Class A Checks</h1>
                <form id="class-a-checks">
                    <div className={Styles.responses}>
                        {checkboxArr.map(getChecklist)}
                    </div>
                    <textarea name="class-a-comment" id="additional-details"></textarea>
                    <section className={Styles.navigation}>
                        <button onClick={backHandler} className={Styles.btn}>Back</button> 
                        <button type="button" onClick={() => {nextHandler(); setFailedElements(failObject(vehicleType, "classA"))}} className={Styles.btn}>Next</button>
                    </section>
                </form>
            </main>
        </>
    )
}

export default ClassAChecks;