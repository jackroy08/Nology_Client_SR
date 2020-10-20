import React from "react";
import styles from "./NewsItem.module.scss";

const NewsItem = (props) => {
  const {type,vehicleName, vehicleIssue, issueClass} = props.item;
  return (
    <li className={styles.newsItem}>
      <p>{type}</p>
      <p>{vehicleName}</p>
      <p>{vehicleIssue}</p>
      <p>{issueClass}</p>
    </li>
  );
};

export default NewsItem;
