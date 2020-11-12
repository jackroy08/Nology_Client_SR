import React from "react";
import Styles from "./NewsTicker.module.scss";
import NewsItem from "./NewsItem";

const NewsTicker = (props) => { 
  
  const importantNewsItems = props.newsItems.filter(i => i.isImportant);
  const regularNewsItems = props.newsItems.filter(i => !i.isImportant);
  const {setModalContent, toggle} = props;

  return (
    <>
        <header className={Styles.header}>
          <h3>Team Feed</h3>
          {props.children}
        </header>
        <div className={Styles.columnTitles}>
            <h4>Timestamp</h4>
            {/* <h4>Team</h4>   <---- I've taken this out, Don't think it's needed? Not showing this data in the table??*/}
            <h4>Category</h4>
            <h4>Title</h4>
            <h4>Message</h4>
        </div>
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
