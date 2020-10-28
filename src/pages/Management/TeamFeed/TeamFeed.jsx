import React from "react";
import Styles from "./TeamFeed.module.scss";
import usersArr from "../../../data/users";
import vehicleData from "../../../data/vehicles";
import Modal from "../../../components/Modal";
import useModal from "../../../components/Modal/useModal";
import Report from "../Report";

const TeamFeed = () => {
    const {isShowing, toggle} = useModal();
    const teamArr = ["TeamA", "TeamB", "TeamC, TeamD"];

    const teamUpdates = [
        ["Team Name","Time Reported","User ID","Shift Start/End"],
        ["Team Name","Time Reported","Load Weight","Load Type"],
        ["Team Name","Time created","# of Vehicles Assigned","# of Team Members"],
        ["Team Name","Time Reported","User ID","Shift Start/End"],
        ["Team Name","Time Reported","Load Weight","Load Type"],
        ["Team Name","Time created","# of Vehicles Assigned","# of Team Members"],
        ["Team Name","Time Reported","User ID","Shift Start/End"],
        ["Team Name","Time Reported","Load Weight","Load Type"],
        ["Team Name","Time created","# of Vehicles Assigned","# of Team Members"]
    ];

    const getTeamJsx = (team) => {
        const teamVehicleCountArr = [];
        const teamActiveVehicleCountArr = [];
        const userTeamArr = [];
        const userActiveTeamArr = [];

        vehicleData.map(vehicle => {
            if(vehicle.currentTeam == team) teamVehicleCountArr.push(vehicle) 
        });
        teamVehicleCountArr.map(vehicle => {
            if(vehicle.currentUser !== null) teamActiveVehicleCountArr.push(vehicle);
        });
        usersArr.map(user => {
            if(user.currentTeam == team) userTeamArr.push(user);
        });
        userTeamArr.map(user => {
            if(user.isOnShift == true) userActiveTeamArr.push(user);
        });

        return (
            <>
                <h3>Team {team}:</h3>
                <p>There are {teamVehicleCountArr.length} vehicles in the team.</p>
                <p>There are {teamActiveVehicleCountArr.length} active vehicles in the team</p>
                <p>There are {userTeamArr.length} team members</p>
                <p>There are currently {userActiveTeamArr.length} team members on shift</p>
                {/* Loads submitted on current shift */}
                <p>There have been ??? loads submitted during this shift.</p>
                {/* Number of class A vehicle issues */}
                <p>There have been ??? class A vehicle issues.</p>
            </>
        )
    }

    return (
        <article className={Styles.dataFeed}>
            <h1 className={Styles.feedTitle}>Live feed for teams</h1>
            <button className={Styles.btn} onClick={toggle}>Report</button>
            <Modal innerComponent={<Report item={teamUpdates} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
            <section className={Styles.feedList}>
                <h2 className={Styles.subHeading}>There are <span className={Styles.data}>{teamArr.length}</span> teams on this site.</h2>
                {teamArr.map(getTeamJsx)}
            </section>
        </article>
    )
}

export default TeamFeed;