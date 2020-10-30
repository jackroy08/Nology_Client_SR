import React from "react";
import Styles from "./LiveFeedItem.module.scss";

const LiveFeedItem = (props) => {
    const feedItem = props.item;

    return (
        <section className={Styles.listItem}>
            <p>{feedItem[0]}</p>
            <p>{feedItem[1]}</p>
            <p>{feedItem[2]}</p>
            <p>{feedItem[3]}</p>
        </section>
    )
}

export default LiveFeedItem;