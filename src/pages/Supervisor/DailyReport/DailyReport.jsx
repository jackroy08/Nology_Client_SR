import React, { useContext } from "react";
import Styles from "./DailyReport.module.scss";
import { useForm } from "react-hook-form";
import { createNewsItem } from "../../../services/newsItemsService";
import { UserContext } from "../../../context/userContext";
import toastService from "../../../services/toastService";


export const DailyReport = () => { 

const { user } = useContext(UserContext)
    
    const { register, handleSubmit } = useForm();

    const toLowerCaseHyphen = (str) => {
        return str.split(" ").map(word => {
            return word.toLowerCase()
        }).join("-")
    };

    /////////////
    class Input {
        constructor(type,label){
            this.type = type;
            this.label = label;
            this.id  = toLowerCaseHyphen(this.label);
        }
    }

    const inputs = [
        new Input("date","Date"),
        new Input("text","Workplace"),
        new Input("text","Machine Conditions"),
        new Input("text","Dust Suppression"),
        new Input("text","Conditions on the Haul Roads"),
        new Input("text", "Dumping/Stockpile position"),
        new Input("text", "Loading Conditions"),
        new Input("time", "Time for First Load"),
        new Input("time", "Time for Last Load"),
        new Input("textarea", "Summary of Breakdowns"),
        new Input("textarea", "Health and Safety Instructions"),
        new Input("textarea", "Job Specific Instructions"),
        new Input("textarea", "Instructions for the oncoming shift"),
    ]
    /////////////////

    const submitForm = (data) => {
        let newsItemToSubmit = {
            title: "Supervisor Report",
            message: "new supervisor report",
            team: user.currentTeam,
            type: "supervisorReport",
            isImportant: true,
            seenBy: [],
            info: data,
            dateCreated: new Date()
        }
        createNewsItem(newsItemToSubmit);
        toastService("Form Submitted", 2000);
    }

    return (
        <div>
            <h3>Supervisor Handover Notes</h3>
            <form className={Styles.handoverForm} onSubmit={handleSubmit(submitForm)}>
                {inputs.map(input => (
                    <>
                        <label htmlFor={input.label}>{input.label}</label>
                        <input 
                            className={Styles.inputPrimary}
                            type={input.type} 
                            name={input.id} 
                            ref={register}
                            id={input.label}
                        />
                    </>
                ))}
                <button className={Styles.btnPrimary} type="submit">Submit</button>
            </form>
        </div>
    )
}
