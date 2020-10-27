import React from 'react'
import Styles from './Management.module.scss';
import { Link } from "@reach/router";
import LiveFeed from "./LiveFeed";

const Management = () => {

    return (
        <>
            <main className={Styles.managementMain}>
                <h1 className={Styles.managementTitle}>Management</h1>
                <section className={Styles.buttonContainer}>
                    <Link to="../Admin"><button className={Styles.btn}>Go to admin page</button></Link>
                </section>
                <section className={Styles.liveFeedContainer}>
                    <LiveFeed feedType={"Vehicles"}/>
                    <LiveFeed feedType={"Teams"}/>
                </section>
            </main>
        </>
    )
}

export default Management;