import React, { useState, useEffect } from 'react';
import { firestore } from "../../../firebase";
import ChecklistItem from "./ChecklistItem";

const ManageChecklists = () => {
    const [items, setItems] = useState(1)

    const addChecklistItem = (e) => {
        e.preventDefault();
        setItems(items+1);
    }

    const removeChecklistItem = (e) => {
        e.preventDefault();
        setItems(items-1);
    }

    const submitChecklist = (e) => {
        e.preventDefault();
        let checkObj = {classA: {}, classB: {}, classC: {}}
        let checkItems = document.querySelectorAll(".checklistItem > .check");
        let imageURLs = document.querySelectorAll(".checklistItem > .image");
        let classIndex = document.querySelectorAll(".checklistItem > .class");
        
        checkItems.forEach((item, index) => {
            if (classIndex[index].value === "classA") {
                checkObj.classA[item.value] = imageURLs[index].value;
            } else if (classIndex[index].value === "classB") {
                checkObj.classB[item.value] = imageURLs[index].value;
            } else if (classIndex[index].value === "classC") {
                checkObj.classC[item.value] = imageURLs[index].value;
            }            
        })

        firestore
            .collection("checklistData")
            .doc(document.getElementById("vehicleName").value)
            .set({checkObj})
        console.log(checkObj);
    }

    const itemsRender = () => {
        let totalItems = [];
        for (let i=0; i<items; i++) {
            totalItems.push(<ChecklistItem key={i} />)
        }
        return totalItems;
    }

    useEffect(() => {
        itemsRender()
    }, [items])

    return (
        <>
            <h3>Add a new checklist</h3>
            <form>
                <label htmlFor="vehicle-name">
                    <input type="text" id="vehicleName" />
                </label>
                {itemsRender()}
                <button onClick={addChecklistItem}>+</button>
                <button type="submit" onClick={submitChecklist}>Submit</button>
                <button onClick={removeChecklistItem}>-</button>
            </form>
            
        </>
    )
}

export default ManageChecklists
