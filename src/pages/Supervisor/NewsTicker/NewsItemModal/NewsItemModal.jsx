import React from "react";
import styles from "./NewsItemModal.module.scss";

const NewsItemModal = (props) => {

  const {time, title, message, info, type} = props.item;

  let additionalInfo;


  switch (type) {
    case "supervisorReport":
        additionalInfo = (
          <>
            <p>{time}</p>
            <p>{title}</p>
            <p>{info["date"]}</p>
            <p>{info["workplace"]}</p>
            <p>{info["machine-conditions"]}</p>
            <p>{info["dust-suppression"]}</p>
            <p>{info["conditions-on-the-haul-roads"]}</p>
            <p>{info["dumping/stockpile-position"]}</p>
            <p>{info["loading-conditions"]}</p>
            <p>{info["time-for-first-load"]}</p>
            <p>{info["time-for-last-load"]}</p>
            <p>{info["summary-of-breakdowns"]}</p>
            <p>{info["health-and-safety-instructions"]}</p>
            <p>{info["job-specific-instructions"]}</p>
            <p>{info["instructions-for-the-oncoming-shift"]}</p>
          </>
        )
      break;
  
    default:
      break;
  }

  return (
    <>
      <div>
        <p>{time}</p>
        <p>{title}</p>
        <p>{message}</p>
        <div>{additionalInfo}</div>
      </div>
    </>
  );
};

export default NewsItemModal;