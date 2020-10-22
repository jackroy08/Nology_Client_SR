import React from "react";
import { Link } from "@reach/router";
import Styles from "../Checklist.module.scss";

const Confirmation = () => {
    return (
        <main className={Styles.pageGrid}>
            <div className={Styles.confirmationDiv}>
                <p className={Styles.responseMessage}>Your responses have been recorded and the relevant teams have been updated. If you have any class A's checked please contact your supervisor for further assistance.</p>
            </div>
            <Link to="/Operator">
                <button className={Styles.btn}>Return to Home</button> 
            </Link>
        </main>
    )
}

export default Confirmation;