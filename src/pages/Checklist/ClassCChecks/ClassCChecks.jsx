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
            <main className={Styles.pageGrid}>
                <h1>Class C Checks</h1>
                <form id="class-c-checks">
                    <div className={Styles.responses}>
                        {checkboxArr.map(getChecklist)}
                    </div>
                    <textarea name="class-c-comment" id="additional-details"></textarea>
                
                    <section className={Styles.navigation}>
                        <button onClick={backHandler} className={Styles.btn}>Back</button> 
                        <button type="button" onClick={() => {nextHandler(); setFailedElements(failObject(vehicleType, "classC"))}} className={Styles.btn}>Next</button>
                    </section>
                </form>
            </main>
            : <Confirmation failedElements={failedElements} />}
        </>
    )
}

export default ClassCChecks;