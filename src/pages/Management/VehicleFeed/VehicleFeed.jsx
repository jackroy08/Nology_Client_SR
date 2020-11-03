import React, { useState, useEffect } from "react";
import useModal from "../../../components/Modal/useModal";
import Styles from "./VehicleFeed.module.scss";

import Report from "../Report";
import Modal from "../../../components/Modal";

import { getVehicles } from "../../../services/VehiclesService";
import { getLoads } from "../../../services/LoadsService";

const VehicleFeed = () => {
    const [loadsArr, setLoadsArr] = useState([]);
    const [vehiclesArr, setVehiclesArr] = useState([]);
    const [vehicleIssues, setVehicleIssues] = useState([]);
    const [classAIssues, setClassAIssues] = useState([]);
    const [classBIssues, setClassBIssues] = useState([]);
    const [classCIssues, setClassCIssues] = useState([]);
    const {isShowing, toggle} = useModal();
    const vehicleCountArr = [];

    vehiclesArr.map(vehicle => {
        if(vehicle.currentUser !== null) vehicleCountArr.push(vehicle);
    });

    useEffect(() => {
        getVehicles().then((response) => {
            setVehiclesArr(response);
        });
        getLoads().then((response) => {
            setLoadsArr(response);
        });
        if(vehiclesArr.checkItems !== undefined) {
            setClassAIssues(vehiclesArr.checkItems.classA);
            setClassBIssues(vehiclesArr.checkItems.classB);
            setClassCIssues(vehiclesArr.checkItems.classC);
            setVehicleIssues(vehiclesArr.checkItems);
        }
    }, []);

    return (
        <article className={Styles.dataFeed}>
            <h1 className={Styles.feedTitle}>Live feed for vehicles</h1>
            <button className={Styles.btn} onClick={toggle}>Report</button>
            <Modal innerComponent={<Report item={vehicleIssues} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
            <h2 className={Styles.subHeading}>There are <span className={Styles.data}>{vehiclesArr.length}</span> vehicles on this site.</h2>
            <section className={Styles.feedList}>
                <ul>
                    <li>{vehicleCountArr.length} of which have been assigned to operators.</li>
                    <li>There have been {classAIssues.length} class A, {classBIssues.length} class B and {classCIssues.length} class C hazards on the current shift.</li>
                    <li>There have been {loadsArr.length} loads submitted this shift.</li>
                </ul>
            </section>
        </article>
    )
}

export default VehicleFeed;