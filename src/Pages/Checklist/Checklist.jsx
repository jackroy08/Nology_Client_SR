import React from 'react';
import { Router } from "@reach/router";

const Checklist = (props) => {
    const {checklistData} = props;
    const getChecklist = item => (
        <React.Fragment key={item}>
            <label htmlFor={item}>{item}
                <input type="checkbox" id={item} name={item} value={item}/>
            </label>
        </React.Fragment>
    );
    return (
        <>
            <ClassAChecks getChecklist={getChecklist} checklistData={checklistData} path="ClassA" />
            <ClassBChecks checklistData={checklistData} />
            <ClassCChecks checklistData={checklistData} />
        </>
    )
}

export default Checklist
