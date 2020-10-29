import React from "react";
import Styles from "./VehicleFeed.module.scss";
import vehicleData from "../../../data/vehicles";
import Report from "../Report";
import Modal from "../../../components/Modal";
import useModal from "../../../components/Modal/useModal";

const VehicleFeed = () => {
    const {isShowing, toggle} = useModal();
    const vehicleCountArr = [];
    const vehicleUpdates = [
        ["Truck 001", "Problem reported", "A", "Broken Light"],
        ["Truck 002", "Problem fixed", "B", "Broken Light"],
        ["Truck 003", "Vehicle added", "Truck", "Team A"],
        ["Truck 004", "Problem reported", "C", "Broken Light"],
        ["Truck 005", "Problem fixed", "A", "Broken Light"],
        ["Truck 006", "Vehicle added", "B", "Team A"],
        ["Truck 007", "Problem reported", "C", "Broken Light"],
        ["Truck 008", "Problem fixed", "B", "Broken Light"],
        ["Truck 009", "Vehicle added", "A", "Team A"],
        ["Truck 010", "Vehicle added", "B", "Team A"],
    ];

    vehicleData.map(vehicle => {
        if(vehicle.currentUser !== null) vehicleCountArr.push(vehicle);
    });

    return (
        <article className={Styles.dataFeed}>
            <h1 className={Styles.feedTitle}>Live feed for vehicles</h1>
            <button className={Styles.btn} onClick={toggle}>Report</button>
            <Modal innerComponent={<Report item={vehicleUpdates} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
            <h2 className={Styles.subHeading}>There are <span className={Styles.data}>{vehicleData.length}</span> vehicles on this site.</h2>
            <section className={Styles.feedList}>
                <ul>
                    <li>{vehicleCountArr.length} of which have been assigned to operators.</li>
                    {/* Number of vehicles with class A Hazards */}
                    {/* Number of vehicles with class B Hazards */}
                    {/* Number of vehicles with class C Hazards */}
                    <li>There have been X class A, Y class B and Z class C hazards on the current shift.</li>
                    {/* Number of vehicles needing to be fixed today */}
                    <li>X vehicles still need to be fixed during this shift.</li>
                    {/* Number of loads submitted today */}
                    <li>There have been X loads submitted this shift.</li>
                </ul>
            </section>
        </article>
    )
}

export default VehicleFeed;