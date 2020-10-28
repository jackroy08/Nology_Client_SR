import React from "react";
import Styles from "../Checklist.module.scss";
import RenderAdditionalOptions from "../RenderAdditionalOptions";
import Confirmation from "../Confirmation";
import { updateVehicle } from "../../../services/VehiclesService";

const ClassCChecks = (props) => {
  
    const {getChecklist, setFailedElements, failObject, checklistData, vehicleType, nextHandler, backHandler} = props.propsMethods;
    const classType = "classC";
    const checkboxArr = Object.keys(checklistData[vehicleType][classType]);
    const additionalFieldsArr = Object.keys(checklistData[vehicleType])
        .filter(key => !key.match("class"));

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
                                    classVal={classType}
                                    checklistData={checklistData}
                                    vehicleType={vehicleType} 
                                    item={item}
                                    key={item} 
                                />)}
                            </section>
                        </>:
                        null}
                    <textarea name="class-c-comment" id="class-c-checks"></textarea>
                
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