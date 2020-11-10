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
            <main className={Styles.pageGrid}>
                <h1>Class B Checks</h1>
                <form id="class-b-checks">
                    <div className={Styles.responses}>
                        {checkboxArr.map(getChecklist)}
                    </div>
                    <textarea name="class-b-comment" id="additional-details"></textarea>
                
                    <section className={Styles.navigation}>
                        <button onClick={backHandler} className={Styles.btn}>Back</button> 
                        <button type="button" onClick={() => {nextHandler(); setFailedElements(failObject(vehicleType, "classB"))}} className={Styles.btn}>Next</button>
                    </section>
                </form>
            </main>
        </>
    )
}

export default ClassBChecks;