import React from "react"

export const DailyReport = () => {
    

    //should be back endddddd
    const toLowerCaseHyphen = (str) => {
        return str.split(" ").map(word => {
            return word.toLowerCase()
        }).join("-")
    };

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

    return (
        <div>
            <h1>Supervisor Daily Shift Report</h1>
            <form>

                {inputs.map(input => {
                    return (
                        <>
                        <div key = {Math.random()}>
                            <label htmlFor={input.id}>{input.label}</label>
                            {input.type==="textarea" ? <textarea id={input.id}></textarea> : <input type={input.type} id={input.id}/>}
                        </div>

                        <div>
                            <p>Signature Section - what is flow for this?</p>
                        </div>
                        </>
                    )
                })}
            </form>
        </div>
    )
}
