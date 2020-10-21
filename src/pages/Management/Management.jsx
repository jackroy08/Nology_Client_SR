import React from 'react'
import Styles from './Management.module.scss';
import {Link} from '@reach/router';

const Management = () => {
    return (
    <main className={Styles.managementMain}>
        <button className={Styles.btn}>View Reports</button>
        <button className={Styles.btn}>Add vehicle</button>
        <button className={Styles.btn}>Reassign vehicle</button>
        <button className={Styles.btn}>Reassign user</button>
        <button className={Styles.btn}>Add user</button>
        <section className={Styles.dataFeed}>
        <p>Insert live feed / data </p>
        </section>
    </main>
    )
}

export default Management;
