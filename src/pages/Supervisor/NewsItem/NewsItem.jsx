import React from "react";
import styles from "./NewsItem.module.scss";

const NewsItem = (props) => {
  const {time,title, message} = props.item;
  return (
    <li className={styles.newsItem}>
      <p>{time}</p>
      <p>{title}</p>
      <p>{message}</p>
    </li>
  );
};

export default NewsItem;
