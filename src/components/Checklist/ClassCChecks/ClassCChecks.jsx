import React from "react";
import Styles from "../Checklist.module.scss";
import Confirmation from "../Confirmation";

const ClassCChecks = (props) => {
    const { setFailedElements, failedElements, failObject, checklistData, vehicleType, nextHandler, backHandler} = props.propsMethods;
    const checkboxArr = checklistData.classC ? 
        Object.keys(checklistData.classC):
        [];

    const getChecklist = item => (
        <div key={item}>
            <img src={checklistData.classC[item]} alt=""/>
            <label htmlFor={item}>{item}   
            </label>
            <input type="checkbox" id={item} name={item} value={item}/> 
        </div>
    );

    return (
        <>
            {checkboxArr.length > 0 ? 
            <>
                <h4>Class C Checks</h4>
                <article className={Styles.classChecks}>
                    <form id="class-c-checks">
                        <div className={Styles.responses}>
                            {checkboxArr.map(getChecklist)}
                        </div>
                        <textarea className={Styles.textareaPrimary} name="class-c-comment" id="additional-details" placeholder="Please enter any additional details here..."></textarea>
                    
                        <section className={Styles.navigation}>
                            <button onClick={backHandler} className={Styles.btnSecondary}>Back</button> 
                            <button type="button" className={Styles.btnPrimary} onClick={() => {nextHandler(); setFailedElements(failObject(vehicleType, "classC"))}}>Next</button>
                        </section>
                    </form>
                </article>
            </>
            : <Confirmation failedElements={failedElements} />}
        </>
    )
}

export default ClassCChecks;