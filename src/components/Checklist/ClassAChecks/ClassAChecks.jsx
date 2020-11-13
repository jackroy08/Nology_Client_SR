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
        
            <h4>Class A Checks</h4>
            <article className={Styles.classChecks}>
                <form id="class-a-checks">
                    <div className={Styles.responses}>
                        {checkboxArr.map(getChecklist)}
                    </div>
                    <textarea className={Styles.textareaPrimary} name="class-a-comment" id="additional-details" placeholder="Please enter any additional details here..."></textarea>
                    <section className={Styles.navigation}>
                        <button onClick={backHandler} className={Styles.btnSecondary}>Back</button> 
                        <button type="button" className={Styles.btnPrimary} onClick={() => {nextHandler(); setFailedElements(failObject(vehicleType, "classA"))}}>Next</button>
                    </section>
                </form>
            </article>
        </>
    )
}

export default ClassAChecks;