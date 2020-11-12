import React from "react";
import Styles from "../Checklist.module.scss";

const ClassBChecks = (props) => {
    
    const { setFailedElements, failObject, checklistData, vehicleType, nextHandler, backHandler} = props.propsMethods;
    const checkboxArr = Object.keys(checklistData.classB);

    const getChecklist = item => (
        <div key={item}>
            <img src={checklistData.classB[item]} alt=""/>
            <label htmlFor={item}>{item}   
            </label>
            <input type="checkbox" id={item} name={item} value={item}/> 
        </div>
    );

    return (
        <>
            <h4>Class B Checks</h4>
            <article className={Styles.classChecks}>
                <form id="class-b-checks">
                    <div className={Styles.responses}>
                        {checkboxArr.map(getChecklist)}
                    </div>
                    <textarea className={Styles.textareaPrimary} name="class-b-comment" id="additional-details" placeholder="Please enter any additional details here..."></textarea>
                    <section className={Styles.navigation}>
                        <button onClick={backHandler} className={Styles.btnSecondary}>Back</button> 
                        <button type="button" className={Styles.btnPrimary} onClick={() => {nextHandler(); setFailedElements(failObject(vehicleType, "classB"))}}>Next</button>
                    </section>
                </form>
            </article>
    </>
    )
}

export default ClassBChecks;