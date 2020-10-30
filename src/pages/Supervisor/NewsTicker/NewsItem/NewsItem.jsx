import React from "react";
import styles from "./NewsItem.module.scss";

const NewsItem = (props) => {

  const {time, title, message} = props.item;
  
    // MODAL CODE //
    // NEEDS EDITING WITH NICKS CODE //
    const modal = () => {
      return (
        <section className={styles.nicksstyles}>
          <p>{time}</p>
          <p>{title}</p>
          <p>{message}</p>
        </section>
      );
    }
    // END OF MODAL //

  return (
    <li className={styles.newsItem}>
      <p>{time}</p>
      <p>{title}</p>
      <p>{message}</p>
    </li>
  );
};

export default NewsItem;
