import React, { useState, useEffect } from 'react'
import Styles from './Management.module.scss';
import { Link } from "@reach/router";
import VehicleFeed from "./VehicleFeed";
import TeamFeed from "./TeamFeed";
import SideNav from "../../components/SideNav";
import { getVehicles } from "../../services/VehiclesService";

const Management = () => {

    const [vehiclesArr, setVehiclesArr] = useState([]);
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

    const promises = [getVehicles()];
    Promise.all(promises).then(response => {

        const classAIssues = [];
        const classBIssues = [];
        const classCIssues = [];
        const [vehicles] = response;

        setVehiclesArr(vehicles);
        vehicles.map((vehicle) => {
            
            if(vehicle.checkItems !== null) {
                for (let i = 0; i < vehicle.checkItems.length; i++) {
                    const checkItem = vehicle.checkItems[i];

                    if(checkItem.classType == "classA") classAIssues.push(checkItem);
                    else if(checkItem.classType == "classB") classBIssues.push(checkItem);
                }                
            }
        })
        if(classAIssues.length > 0) safetySignalStatus("noGo");
        else if(classBIssues.length >= 5) safetySignalStatus("goBut");
        else safetySignalStatus("go");
    }) 
    }, []);

    return (   
        <div className={Styles.pageContainer}> 
            <SideNav>
                <h2>Management</h2>
                <Link to="../admin"><button className={Styles.btnNav}>Admin Portal</button></Link>
                <button className={Styles.btnNav}>Site Status : </button>
                <div className={Styles.trafficLightSignal}>
                    <div className={`${Styles.defaultSignal} ${redSignal}`}></div>
                    <div className={`${Styles.defaultSignal} ${amberSignal}`}></div>
                    <div className={`${Styles.defaultSignal} ${greenSignal}`}></div>
                </div>
            </SideNav>
            <main className={Styles.mainContent}>
                <section className={Styles.liveFeedContainer}>
                    <VehicleFeed />
                    <TeamFeed />
                </section>

            </main>
        </div>
    )
}

export default Management;