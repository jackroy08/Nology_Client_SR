import React, { useState, useEffect } from 'react';
import { firestore } from "../../../firebase";
import { navigate } from "@reach/router";
import ChecklistItem from "./ChecklistItem";
import Styles from "./ManageChecklists.module.scss"

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

    const submitChecklist = async (e) => {
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

        await firestore
            .collection("checklistData")
            .doc(document.getElementById("vehicleName").value)
            .set({...checkObj})
        navigate("/admin");
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
            <form className={Styles.addChecklistForm}>
                <header>
                <h3>Add a new checklist</h3>
                </header>
                <div>
                    <label htmlFor="vehicle-name">Vehicle type name:</label>
                    <input className={Styles.inputPrimary} type="text" id="vehicleName" />
                </div>
                {itemsRender()}
                <div className={Styles.addMore}>
                    <button className={Styles.btnSecondary} onClick={removeChecklistItem}>-</button>
                    <button className={Styles.btnSecondary} onClick={addChecklistItem}>+</button>
                    <button className={Styles.btnPrimary} type="submit" onClick={submitChecklist}>Submit</button>
                </div>
            </form>
            
        </>
    )
}

export default ManageChecklists
