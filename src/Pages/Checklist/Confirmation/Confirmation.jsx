import React from "react";
import { Link } from "@reach/router";
import styles from "../Checklist.module.scss";

const Confirmation = () => {
    return (
        <section>
            <div className={styles.confirmationDiv}>
                <p className={styles.responseMessage}>Your responses have been recorded and the relevant teams have been updated.</p>
            </div>
            <Link to="/operator">
                <button className={styles.navButtons}>Return to Home</button> 
            </Link>
        </section>
    )
}

export default Confirmation;