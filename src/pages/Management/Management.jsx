import React from 'react'
import Styles from './Management.module.scss';
import {Link} from '@reach/router';

const Management = () => {
    return (
    <main className={Styles.managementMain}>
        <button className={Styles.btn}>View Reports</button>
        <button className={Styles.btn}>Add vehicle</button>
        <button className={Styles.btn}>Reassign vehicle</button>
        <button className={Styles.btn}>Reassign supervisors</button>
        <button className={Styles.btn}>Add user</button>
    </main>
    )
}

export default Management;
