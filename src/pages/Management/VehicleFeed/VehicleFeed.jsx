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
        ["Vehicle number", "Time reported", "Urgency level", "Problem"],
        ["Vehicle number", "Time fixed", "Urgency level", "Problem"],
        ["Vehicle number", "Time added", "Vehicle type", "Team assigned to"],
        ["Vehicle number", "Time reported", "Urgency level", "Problem"],
        ["Vehicle number", "Time fixed", "Urgency level", "Problem"],
        ["Vehicle number", "Time added", "Vehicle type", "Team assigned to"],
        ["Vehicle number", "Time reported", "Urgency level", "Problem"],
        ["Vehicle number", "Time fixed", "Urgency level", "Problem"],
        ["Vehicle number", "Time added", "Vehicle type", "Team assigned to"],
        ["Vehicle number", "Time added", "Vehicle type", "Team assigned to"],
    ];

    vehicleData.map(vehicle => {
        if(vehicle.currentUser !== null) vehicleCountArr.push(vehicle);
    });

    return (
        <article className={Styles.dataFeed}>
            <h1 className={Styles.feedTitle}>Live feed for vehicles</h1>
            <button className={Styles.btn} onClick={toggle}>Report</button>
            <Modal innerComponent={<Report item={vehicleUpdates} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
            <section className={Styles.feedList}>
                <h2 className={Styles.subHeading}>There are <span className={Styles.data}>{vehicleData.length}</span> vehicles on this site.</h2>
                <p>{vehicleCountArr.length} of which have been assigned to operators.</p>
                {/* Number of vehicles with class A Hazards */}
                {/* Number of vehicles with class B Hazards */}
                {/* Number of vehicles with class C Hazards */}
                <p>There have been ??? class A, ??? class B and ??? class C hazards on the current shift.</p>
                {/* Number of vehicles needing to be fixed today */}
                <p>??? still need to be fixed during this shift.</p>
                {/* Number of loads submitted today */}
                <p>There have been ??? loads submitted this shift.</p>
            </section>
        </article>
    )
}

export default VehicleFeed;