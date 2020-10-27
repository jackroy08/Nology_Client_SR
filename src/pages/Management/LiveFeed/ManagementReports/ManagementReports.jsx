import React from "react";
import Styles from "./ManagementReports.module.scss";

const ManagementReports = () => {

    const reportList = [{
        reportNumber: "001",
        reportSubject: "Operator Absenteeism",
        reportPriority: "High"
    },
    {
        reportNumber: "002",
        reportSubject: "Vehicle maintenance",
        reportPriority: "High"
    },
    {
        reportNumber: "003",
        reportSubject: "Weather threats",
        reportPriority: "Medium"
    },
    {
        reportNumber: "004",
        reportSubject: "Disciplinary hearing",
        reportPriority: "Low"
    },
    {
        reportNumber: "005",
        reportSubject: "Shareholder meeting",
        reportPriority: "Low" 
    }];

    return (
        <section className={Styles.managementReports}>
            <p>I am the Management Reports page</p>
            <p>More info here</p>
            <div>
                {reportList.map((reportItem) => {
                    return (
                        <>
                            <p>{reportItem.reportNumber}</p>
                            <p>{reportItem.reportSubject}</p>
                            <p>{reportItem.reportPriority}</p>
                        </>
                    )
                })}``
            </div>
        </section>
    )
}


export default ManagementReports;