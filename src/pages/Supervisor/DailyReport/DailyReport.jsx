import React, { useContext } from "react";
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
            <h1>Supervisor Handover Notes</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                {inputs.map(input => (
                    <>
                        <label htmlFor={input.label}>
                        {input.label}
                        <input 
                            type={input.type} 
                            name={input.id} 
                            ref={register}
                            id={input.label}
                        />
                        </label>
                    </>
                ))}
                <input type="submit"/>
            </form>
        </div>
    )
}
