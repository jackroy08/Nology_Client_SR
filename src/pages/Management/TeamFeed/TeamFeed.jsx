import React from "react";
import Styles from "./TeamFeed.module.scss";
import usersArr from "../../../data/users";
import vehicleData from "../../../data/vehicles";
import Modal from "../../../components/Modal";
import useModal from "../../../components/Modal/useModal";
import Report from "../Report";

const TeamFeed = () => {
    const {isShowing, toggle} = useModal();
    const teamArr = ["TeamA", "TeamB", "TeamC", "TeamD"];

    const teamUpdates = [
        ["Team A","Shift Update","User 3001","Shift Start"],
        ["Team B","Load added","User 3123","Load Type"],
        ["Team C","New Team","4 vehicles","8 Team Members"],
        ["Team D","Shift Update","User 0002","Shift End"],
        ["Team A","Load added","User 3123","Load Type"],
        ["Team B","New Team","5 vehicles","10 Team Members"],
        ["Team C","Shift Update","User 0001","Shift End"],
        ["Team D","Load added","User 3123","Load Type"],
        ["Team A","New Team","10 vehicles","15 Team Members"]
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
            <article className={Styles.teamReport}>
                <h3>{team}:</h3>
                <p>There are {teamVehicleCountArr.length} vehicles in the team.</p>
                <p>There are {teamActiveVehicleCountArr.length} active vehicles in the team</p>
                <p>There are {userTeamArr.length} team members</p>
                <p>There are currently {userActiveTeamArr.length} team members on shift</p>
                {/* Loads submitted on current shift */}
                <p>There have been X loads during this shift.</p>
                {/* Number of class A vehicle issues */}
                <p>There have been X class A vehicle issues.</p>
            </article>
        )
    }

    return (
        <article className={Styles.dataFeed}>
            <h1 className={Styles.feedTitle}>Live feed for teams</h1>
            <button className={Styles.btn} onClick={toggle}>Report</button>
            <Modal innerComponent={<Report item={teamUpdates} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
            <h2 className={Styles.subHeading}>There are <span className={Styles.data}>{teamArr.length}</span> teams on this site.</h2>
            <section className={Styles.feedList}>
                {teamArr.map(getTeamJsx)}
            </section>
        </article>
    )
}

export default TeamFeed;