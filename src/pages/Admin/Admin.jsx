import React from "react"
import {Router} from "@reach/router"
import Styles from "./Admin.module.scss";
import {Link} from "@reach/router";
import ManageUsers from './ManageUsers'
import AddVehicle from "./AddVehicle";
import ManageTeams from './ManageTeams'
import ManageSites from './ManageSites'

const Admin = () => {
    return (
        <>
        <nav className={Styles.adminNav}>
        <h2>Admin</h2>
            <Link to="ManageUsers"><button className={Styles.btn}>Manage Users</button></Link>
            <Link to="AddVehicle"><button className={Styles.btn}>Add Vehicle</button></Link>
            <Link to="ManageTeams"><button className={Styles.btn}>Manage Teams</button></Link>
            <Link to="ManageSites"><button className={Styles.btn}>Manage Sites</button></Link>
        </nav>
        <Router>
            <ManageUsers path="ManageUsers"/>
            <AddVehicle path="AddVehicle" />
            <ManageTeams path="ManageTeams"/>
            <ManageSites path="ManageSites"/>
        </Router>
        </>
    )
}

export default Admin;