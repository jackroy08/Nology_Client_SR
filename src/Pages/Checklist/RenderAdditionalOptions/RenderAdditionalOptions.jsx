import React, { useState } from "react";
import Styles from "../Checklist.module.scss"

const RenderAdditionalOptions = (props) => {
    const {getChecklist, classVal, item, checklistData} = props;
    const [additionalResponses, setAdditionalResponses] = useState([]);

    const clickHandler = e => {
        if (e.target.checked) {
            return checklistData.ldv[item][classVal] ?
            setAdditionalResponses(Object.keys(checklistData.ldv[item][classVal])):
            null;
        } else setAdditionalResponses([]);

    }
    
    return (
        <section className={Styles.additionalOptions}>
            <label key={item} htmlFor={item}>{item}
                <input type="checkbox" id={item} name={item} value={item} onClick={clickHandler} />
            </label>
            {additionalResponses.map(getChecklist)}
        </section>
    )
}

export default RenderAdditionalOptions
