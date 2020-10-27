import React from "react";
import Styles from "./LiveFeed.module.scss";
import LiveFeedItem from "./LiveFeedItem";

const LiveFeed = (props) => {

    const testArr = [1,2,3,4,5,6,7,8,9,10];

    return (
            <article className={Styles.dataFeed}>
                <h1 className={Styles.feedTitle}>Live feed for {props.feedType}</h1>
                <button>Report</button>
                <section className={Styles.feedList}>
                    {testArr.map((feedItem) => {
                        return <LiveFeedItem item={feedItem}/>
                    })}
                </section>
            </article>
    )
}

export default LiveFeed;