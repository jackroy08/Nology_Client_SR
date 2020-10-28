import React from "react";
import Styles from "./NewsTicker.module.scss";
import NewsItem from "./NewsItem";

const NewsTicker = (props) => { 
  
  const importantNewsItems = props.newsItems.filter(i => i.important);
  const regularNewsItems = props.newsItems.filter(i => !i.important);

  return (
    <>
        <ul className={Styles.importantNews}>
          {importantNewsItems.map(i => <NewsItem key={Math.random()} item={i} />)}
        </ul>

        <ul className={Styles.regularNews}>
          {regularNewsItems.map(i => <NewsItem key={Math.random()} item={i} />)}
        </ul>

    </>
  );
};

export default NewsTicker;
