import React from "react";
import { Link } from "@reach/router";
import Styles from "../Checklist.module.scss";
import RenderAdditionalOptions from "../RenderAdditionalOptions"

const ClassBChecks = (props) => {
    
    const {checklistData} = props;
    const checkboxArr = Object.keys(checklistData.ldv.classB);
    const additionalFieldsArr = Object.keys(checklistData.ldv)
        .filter(key => !key.match("class"));

    const getChecklist = item => (
        <React.Fragment key={item}>
            <label htmlFor={item}>{item}
                <input type="checkbox" id={item} name={item} value={item}/>
            </label>
        </React.Fragment>
    );

    return (
        <main className={Styles.pageGrid}>
            <h1>Class B Checks</h1>
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
                                classVal="classB" 
                                checklistData={checklistData} 
                                item={item}
                                key={item} 
                            />)}
                        </section>
                    </>:
                    null}
                <textarea name="class-b-comment" id="class-b-checks"></textarea>
            </form>
            <section className={Styles.navigation}>
                <Link to="/ClassA">
                    <button className={Styles.btn}>Back</button> 
                </Link>
                <Link to="/ClassC">
                    <button className={Styles.btn}>Next</button>
                </Link>
            </section>
        </main>
    )
}

export default ClassBChecks;