import React from 'react'
import Styles from './ChecklistItem.module.scss';

const ChecklistItem = () => {
    return (
        <li className={Styles.checklistItem}>
            <label htmlFor="class">Class of check:</label>
            <select className={Styles.selectPrimary} name="class">
                <option value="classA">
                    classA
                </option>
                <option value= "classB">
                    classB
                </option>
                <option value="classC">
                    classC
                </option>
            </select>
            <label htmlFor="check">Check:</label>
            <input className={Styles.inputPrimary} type="text"/>
            <label htmlFor="image">Icon URL address:</label>
            <input className={Styles.inputPrimary} type="text"/>
        </li>
    )
}

export default ChecklistItem
