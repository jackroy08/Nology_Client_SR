import React from "react"
import {Router} from "@reach/router"
import Styles from "./Admin.module.scss";
import {Link} from "@reach/router";
import ManageUsers from './ManageUsers'
import ManageVehicles from "./ManageVehicles";
import ManageTeams from './ManageTeams'
import ManageSites from './ManageSites'
import ManageParts from './ManageParts'

const Admin = () => {
    return (
        <>
        <nav className={Styles.adminNav}>
        <h2>Admin</h2>
            <Link to="ManageUsers"><button className={Styles.btn}>Manage Users</button></Link>
            <Link to="ManageVehicles"><button className={Styles.btn}>Manage Vehicles</button></Link>
            <Link to="ManageTeams"><button className={Styles.btn}>Manage Teams</button></Link>
            <Link to="ManageSites"><button className={Styles.btn}>Manage Sites</button></Link>
            <Link to="ManageParts"><button className={Styles.btn}>Manage Parts</button></Link>
        </nav>
        <Router>
            <ManageUsers path="ManageUsers"/>
            <ManageVehicles path="ManageVehicles" />
            <ManageTeams path="ManageTeams"/>
            <ManageSites path="ManageSites"/>
            <ManageParts path="ManageParts"/>
        </Router>
        </>
    )
}

export default Admin;