import React from "react";
import Styles from "./LiveFeedItem.module.scss";

const LiveFeedItem = () => {
    return (
        <section className={Styles.listItem}>
            <p>Subject</p>
            <p>Time Reported</p>
            <p>Urgency Level</p>
            <p>Description</p>
        </section>
    )
}

export default LiveFeedItem;