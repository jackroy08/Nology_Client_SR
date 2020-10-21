import React from 'react'
import {Router} from "@reach/router"
import Styles from './Admin.module.scss';
import {Link} from '@reach/router';
import ManageUsers from './ManageUsers'

const Admin = () => {
    return (
        <main className={Styles.pageGrid}>
            <Link to="./ManageUsers"><button className={Styles.btn}>Manage Users</button></Link>
                
                <ManageUsers path="Admin/ManageUsers"/>
                
        </main>
    )
}

export default Admin;