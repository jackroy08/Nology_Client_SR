import React from "react";
import Styles from "./Report.module.scss";
import LiveFeedItem from "../LiveFeedItem";

const Report = (props) => {

    const arr = props.item;

    return (
        <section className={Styles.reportMain}>
            {arr.map((feedItem) => {
                return <LiveFeedItem item={feedItem}/>
            })}
        </section>
    )
}

export default Report;