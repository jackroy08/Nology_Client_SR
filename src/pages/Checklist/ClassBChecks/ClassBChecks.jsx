import React, { useState } from "react";
import { Link } from "@reach/router";
import Styles from "../Checklist.module.scss";
import RenderAdditionalOptions from "../RenderAdditionalOptions"
import ClassCChecks from "../ClassCChecks";

const ClassBChecks = (props) => {
    
    const {checklistData, vehicleType} = props;
    const [isSubmitted, setIsSubmitted] = useState(false);
    const clickHandler = () => {
        setIsSubmitted(true);
    }

    const checkboxArr = Object.keys(checklistData[vehicleType].classB);
    const additionalFieldsArr = Object.keys(checklistData[vehicleType])
        .filter(key => !key.match("class"));

    const getChecklist = item => (
        <React.Fragment key={item}>
            <label htmlFor={item}>{item}
                <input type="checkbox" id={item} name={item} value={item}/>
            </label>
        </React.Fragment>
    );

    return (
        <>
            {isSubmitted ? <ClassCChecks checklistData={checklistData} vehicleType={vehicleType} /> :
            <main className={Styles.pageGrid}>
                <h1>Class B Checks</h1>
                <form id="class-b-checks">
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
                                    classVal="classB" 
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
                        <Link to="/ClassA">
                            <button className={Styles.btn}>Back</button> 
                        </Link>
                        <button type="button" onClick={clickHandler} className={Styles.btn}>Next</button>
                    </section>
                </form>
            </main>}
        </>
    )
}

export default ClassBChecks;