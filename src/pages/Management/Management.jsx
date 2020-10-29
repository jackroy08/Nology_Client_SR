import React, { useState, useEffect } from 'react'
import Styles from './Management.module.scss';
import { Link } from "@reach/router";
import VehicleFeed from "./VehicleFeed";
import TeamFeed from "./TeamFeed";

const Management = () => {

    const [redSignal, setRedSignal] = useState();
    const [amberSignal, setAmberSignal] = useState();
    const [greenSignal, setGreenSignal] = useState();

    const safetySignalStatus = (status) => {
        if(status == "go") {
            setGreenSignal(Styles.greenSignal)
            setAmberSignal()
            setRedSignal()

        }  else if(status == "goBut") {
            setRedSignal()
            setAmberSignal(Styles.amberSignal)
            setGreenSignal()

        } else if (status == "noGo") {
            setRedSignal(Styles.redSignal)
            setAmberSignal()
            setGreenSignal()
        }
    }

    useEffect(() => {
        safetySignalStatus("go");
    })

    return (   
        <>
            <main className={Styles.managementMain}>
                <section className={Styles.headingContainer}>
                    <h1 className={Styles.managementTitle}>Management</h1>
                    <Link to="../Admin"><button className={Styles.btn}>Go to admin page</button></Link>
                </section>
                <div className={Styles.trafficLightSignal}>
                    <div className={`${Styles.defaultSignal} ${redSignal}`}></div>
                    <div className={`${Styles.defaultSignal} ${amberSignal}`}></div>
                    <div className={`${Styles.defaultSignal} ${greenSignal}`}></div>
                </div>
                <section className={Styles.liveFeedContainer}>
                    <VehicleFeed />
                    <TeamFeed />
                </section>
            </main>
        </>
    )
}

export default Management;