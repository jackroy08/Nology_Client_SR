import React from "react";
import Styles from "./LiveFeed.module.scss";
import LiveFeedItem from "./LiveFeedItem";

const LiveFeed = (props) => {

    const feedType = props.feedType.feedType;
    const feedInfo = props.feedType.feedArr;

    return (
            <article className={Styles.dataFeed}>
                <h1 className={Styles.feedTitle}>Live feed for {feedType}</h1>
                <button>Report</button>
                <section className={Styles.feedList}>
                    {feedInfo.map((feedItem) => {
                        return <LiveFeedItem item={feedItem}/>
                    })}
                </section>
            </article>
    )
}

export default LiveFeed;