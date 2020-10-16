import React from 'react'
import MaintenanceList from "../../Components/MaintenanceList";
import MaintenanceAside from "../../Components/MaintenanceAside";

const Maintenance = () => {
    return (
        <div>
            <article>
                <MaintenanceList />
            </article>
            <MaintenanceAside />   
        </div>
    )
}

export default Maintenance;