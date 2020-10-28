import React from "react";
import Styles from "./Report.module.scss";
import LiveFeedItem from "../LiveFeedItem";

const Report = (props) => {

    const arr = props.item;

    return (
        <>
            {arr.map((feedItem) => {
                return <LiveFeedItem item={feedItem}/>
            })}
        </>
    )
}

export default Report;