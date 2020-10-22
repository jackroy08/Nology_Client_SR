import React from "react";
import { Link } from "@reach/router";
import Styles from "../Checklist.module.scss";
import RenderAdditionalOptions from "../RenderAdditionalOptions";

const ClassAChecks = (props) => {

    const {checklistData} = props;
    const checkboxArr = Object.keys(checklistData.ldv.classA);
    const additionalFieldsArr = Object.keys(checklistData.ldv)
        .filter(key => !key.match("class"));

    console.log(props);
    

    const getChecklist = item => (
        <React.Fragment key={item}>
            <label htmlFor={item}>{item} 
                <input type="checkbox" id={item} name={item} value={item}/>
            </label>
        </React.Fragment>
    );

    return (
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
                                classVal="classA" 
                                checklistData={checklistData} 
                                item={item}
                                key={item} 
                            />)}
                        </section>
                    </>:
                    null}
                <textarea name="class-a-comment" id="class-a-checks" placeholder="Enter any additional info here..."></textarea>
            </form>
            
            <section className={Styles.navigation}>
                <Link to="/Operator">
                    <button className={`${Styles.btn} ${Styles.btnPrimary}`}>Back</button> 
                </Link>
                <Link to="/ClassB">
                    <button className={`${Styles.btn} ${Styles.btnPrimary}`}>Next</button>
                </Link>
            </section>
        </main>
    )
}

export default ClassAChecks;