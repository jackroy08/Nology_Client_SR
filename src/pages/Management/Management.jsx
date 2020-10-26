import React from 'react'
import Styles from './Management.module.scss';
import {Router} from "@reach/router";
import { Link } from "@reach/router";
import ManagementReports from "./ManagementReports";
import LiveFeed from "./LiveFeed";

const Management = () => {

    return (
        <>
            <main className={Styles.managementMain}>
                <Link to="./ManagementReports"><button className={Styles.btn}>View Reports</button></Link>
                <Link to="../Admin"><button className={Styles.btn}>Go to admin page</button></Link>
            </main>
            <Router>
                <LiveFeed path="/"/>
                <ManagementReports path="ManagementReports"/>
            </Router>
        </>
    )
}

export default Management;