import React from "react";
import Styles from "../Checklist.module.scss";
import RenderAdditionalOptions from "../RenderAdditionalOptions";

const ClassAChecks = (props) => {

    const { setFailedElements, failObject, checklistData, vehicleType, nextHandler, backHandler} = props.propsMethods;
    const classType = "Class A";
    const checkboxArr = Object.keys(checklistData[vehicleType][classType]);
    const additionalFieldsArr = Object.keys(checklistData[vehicleType])
        .filter(key => !key.match("lass"));

    const getChecklist = item => (
        <div key={item}>
            <img src={checklistData[vehicleType][classType][item]} alt=""/>
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

                    
                    {additionalFieldsArr ? 
                        <>
                            <h2>Additional checks</h2>
                            <section className={Styles.optionsFlex}>
                                {additionalFieldsArr.map(item => 
                                <RenderAdditionalOptions 
                                    getChecklist={getChecklist} 
                                    classVal={classType}
                                    checklistData={checklistData}
                                    vehicleType={vehicleType} 
                                    item={item}
                                    key={item} 
                                />)}
                            </section>
                        </>:
                        null}
                    <textarea name="class-a-comment" id="additional-details"></textarea>

                    <section className={Styles.navigation}>
                        <button onClick={backHandler} className={Styles.btn}>Back</button> 
                        <button type="button" onClick={() => {nextHandler(); setFailedElements(failObject(vehicleType, classType))}} className={Styles.btn}>Next</button>
                    </section>
                </form>
            </main>
        </>
    )
}

export default ClassAChecks;