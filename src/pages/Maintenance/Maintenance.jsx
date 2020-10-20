import React from "react";
import MaintenanceList from "./MaintenanceList";
import MaintenanceAside from "./MaintenanceAside";
import Styles from "./Maintenance.module.scss";


const Maintenance = () => {
    return (

        <main className={Styles.main}>
            <h1 className={Styles.title}>Maintenance</h1>
            <section className={Styles.pageGrid}>
                <MaintenanceAside />   
                <MaintenanceList />
            </section>
        </main>
    )
}
 
export default Maintenance;