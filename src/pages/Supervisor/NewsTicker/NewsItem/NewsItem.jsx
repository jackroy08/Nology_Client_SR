import React from "react";
import styles from "./NewsItem.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NewsItemModal from "./../NewsItemModal";

const NewsItem = (props) => {

  const {time, title, message} = props.item;
  const {setModalContent, toggle} = props;

  const toggleModal = () => {
    toggle();
    setModalContent(<NewsItemModal item={props.item} />)
  }

  return (
    <li className={styles.newsItem}>
      <p>{time}</p>
      <p>{title}</p>
      <p>{message}</p>
      <p onClick={toggleModal}><FontAwesomeIcon icon="arrow-down"/></p>
    </li>
  );
};

export default NewsItem;
