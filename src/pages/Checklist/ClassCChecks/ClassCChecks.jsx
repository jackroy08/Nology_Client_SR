import React from "react";
import Styles from "../Checklist.module.scss";
import RenderAdditionalOptions from "../RenderAdditionalOptions";
import Confirmation from "../Confirmation";
import { updateVehicle } from "../../../services/VehiclesService";

const ClassCChecks = (props) => {
  
    const { setFailedElements, failedElements, failObject, checklistData, vehicleType, nextHandler, backHandler} = props.propsMethods;
    // const classType = "Class C";
    const checkboxArr = checklistData[vehicleType].classC ? 
        Object.keys(checklistData[vehicleType].classC):
        [];
    const additionalFieldsArr = Object.keys(checklistData[vehicleType])
        .filter(key => !key.match("lass"));
    const getChecklist = item => (
        <div key={item}>
            <img src={checklistData[vehicleType].classC[item]} alt=""/>
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

                    {additionalFieldsArr ? 
                        <>
                            <h2>Additional checks</h2>
                            <section className={Styles.optionsFlex}>
                                {additionalFieldsArr.map(item => 
                                <RenderAdditionalOptions 
                                    getChecklist={getChecklist} 
                                    classVal={"classC"}
                                    checklistData={checklistData}
                                    vehicleType={vehicleType} 
                                    item={item}
                                    key={item} 
                                />)}
                            </section>
                        </>:
                        null}
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