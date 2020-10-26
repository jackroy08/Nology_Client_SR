import React from "react";
import Styles from "../Checklist.module.scss";
import RenderAdditionalOptions from "../RenderAdditionalOptions";
import Confirmation from "../Confirmation";

const ClassCChecks = (props) => {
    const {setFailedElements, failObject, checklistData, vehicleType, nextHandler, backHandler} = props;
    const classType = "classC";
    const checkboxArr = checklistData[vehicleType].hasOwnProperty("classC") ?
        Object.keys(checklistData[vehicleType].classC):
        [];
    const additionalFieldsArr = Object.keys(checklistData[vehicleType])
        .filter(key => !key.match("class"));

    const getChecklist = item => (
        <React.Fragment key={item}>
            <label htmlFor={item}>
                {item}
                <input type="checkbox" id={item} name={item} value={item}/>
            </label>
        </React.Fragment>
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

                        
                        {additionalFieldsArr ? 
                            <>
                                <h2>Additional checks</h2>
                                <section className={Styles.optionsFlex}>
                                    {additionalFieldsArr.map(item => 
                                    <RenderAdditionalOptions 
                                        getChecklist={getChecklist} 
                                        classVal="classC" 
                                        checklistData={checklistData} 
                                        vehicleType={vehicleType}
                                        item={item}
                                        key={item} 
                                    />)}
                                </section>
                            </>:
                            null}
                        <textarea name="class-b-comment" id="class-b-checks"></textarea>
                    
                        <section className={Styles.navigation}>
                            <button onClick={backHandler} className={Styles.btn}>Back</button> 
                            <button type="button" onClick={() => {nextHandler(); setFailedElements(failObject(vehicleType, classType))}} className={Styles.btn}>Next</button>
                        </section>
                    </form>
                </main>
            : <Confirmation />}
        </>
    )
}

export default ClassCChecks;