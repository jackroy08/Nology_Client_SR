import React from "react"
import {Router} from "@reach/router"
import Styles from "./Admin.module.scss";
import {Link} from "@reach/router";
import ManageUsers from './ManageUsers'
import ManageVehicles from "./ManageVehicles";
import ManageTeams from './ManageTeams'
import ManageSites from './ManageSites'
import ManageParts from './ManageParts'
import SideNav from '../../components/SideNav'

const Admin = () => {
    return (
        <div className={Styles.pageContainer}> 
            <SideNav>
                <h2>Admin</h2>
                <Link to="ManageUsers"><button className={Styles.btnNav}> - Manage Users</button></Link>
                <Link to="ManageVehicles"><button className={Styles.btnNav}> -  Manage Vehicles</button></Link>
                <Link to="ManageTeams"><button className={Styles.btnNav}> -  Manage Teams</button></Link>
                <Link to="ManageSites"><button className={Styles.btnNav}> - Manage Sites</button></Link>
                <Link to="ManageParts"><button className={Styles.btnNav}> - Manage Parts</button></Link>
            </SideNav>
            <main className={Styles.pageContainer}>
                <Router style={{width: "100%"}}>
                    <ManageUsers default path="ManagerUsers"/>
                    <ManageVehicles path="ManageVehicles" />
                    <ManageTeams path="ManageTeams"/>
                    <ManageSites path="ManageSites"/>
                    <ManageParts path="ManageParts"/>
                </Router>
            </main>
        </div>
    )
}

export default Admin;