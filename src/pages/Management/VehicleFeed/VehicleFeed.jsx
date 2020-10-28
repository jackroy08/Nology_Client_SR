import React from "react";
import Styles from "./VehicleFeed.module.scss";
import vehicleData from "../../../data/plantequipment";
import LiveFeedItem from "../LiveFeedItem";

const VehicleFeed = () => {

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
            <button className={Styles.btn}>Report</button>
            <section className={Styles.feedList}>
                {/* {vehicleUpdates.map((feedItem) => {
                    return <LiveFeedItem item={feedItem}/>
                })} */}
                <h2 className={Styles.subHeading}>There are <span className={Styles.data}>{vehicleData.length}</span> vehicles on this site.</h2>
                {/* Number of vehicles with class A Hazards */}
                {/* Number of vehicles with class B Hazards */}
                {/* Number of vehicles with class C Hazards */}
                {/* Number of vehicles needing to be fixed today */}
                <p>{vehicleCountArr.length} of which have been assigned to operators.</p>
                Number of loads submitted today
            </section>
        </article>
    )
}

export default VehicleFeed;