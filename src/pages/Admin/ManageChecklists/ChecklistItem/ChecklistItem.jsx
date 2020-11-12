import React from 'react'

const ChecklistItem = () => {
    return (
        <li className="checklistItem">
            <label htmlFor="class">Class of check:</label>
            <select className="class" name="class">
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
            <input className="check" type="text"/>
            <label htmlFor="image">Icon URL address:</label>
            <input className="image" type="text"/>
        </li>
    )
}

export default ChecklistItem
