import React from "react";
import { Link } from "@reach/router";
import Styles from "../Checklist.module.scss";

const Confirmation = () => {
    return (
        <section>
            <div className={Styles.confirmationDiv}>
                <p className={Styles.responseMessage}>Your responses have been recorded and the relevant teams have been updated.</p>
            </div>
            <Link to="/Operator">
                <button className={Styles.navButtons}>Return to Home</button> 
            </Link>
        </section>
    )
}

export default Confirmation;