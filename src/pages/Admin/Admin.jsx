import React from "react"
import {Router} from "@reach/router"
import Styles from "./Admin.module.scss";
import {Link} from "@reach/router";
import ManageUsers from "./ManageUsers"
import AddVehicle from "./AddVehicle";

const Admin = () => {
    return (
        <main className={Styles.pageGrid}>
            <Link to="./ManageUsers"><button className={Styles.btn}>Manage Users</button></Link>
            <Link to="./AddVehicle"><button className={Styles.btn}>Add Vehicle</button></Link>

                <ManageUsers path="Admin/ManageUsers" />
                <AddVehicle path="Admin/AddVehicle" />
        </main>
    )
}

export default Admin;