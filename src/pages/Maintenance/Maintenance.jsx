import React from "react";
import MaintenanceList from "./MaintenanceList";
import MaintenanceAside from "./MaintenanceAside";

const Maintenance = () => {
    return (
        <div>
            <section>
                <MaintenanceList />
            </section>
            <MaintenanceAside />   
        </div>
    )
}

export default Maintenance;