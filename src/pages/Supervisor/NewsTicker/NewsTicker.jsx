import React from "react";
import Styles from "./NewsTicker.module.scss";
import NewsItem from "./NewsItem";

const NewsTicker = (props) => { 
  
  const importantNewsItems = props.newsItems.filter(i => i.isImportant);
  const regularNewsItems = props.newsItems.filter(i => !i.isImportant);
  const {setModalContent, toggle} = props;

  return (
    <>
        <ul className={Styles.importantNews}>
          {importantNewsItems.map(item => <NewsItem key={Math.random()} item={item} setModalContent={setModalContent} toggle={toggle} />)}
        </ul>

        <ul className={Styles.regularNews}>
          {regularNewsItems.map(item => <NewsItem key={Math.random()} item={item} setModalContent={setModalContent} toggle={toggle} />)}
        </ul>

    </>
  );
};

export default NewsTicker;
