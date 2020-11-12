import React from "react";
import styles from "./NewsItemModal.module.scss";

const NewsItemModal = (props) => {

  const {time, title, message, info, type} = props.item;

  let additionalInfo;


  switch (type) {
    case "supervisorReport" :
      additionalInfo = (
        <>
          <p>Date: {info["date"]}</p>
          <p>Workplace: {info["workplace"]}</p>
          <p>Machine Conditions: {info["machine-conditions"]}</p>
          <p>Dust Suppression: {info["dust-suppression"]}</p>
          <p>Conditions on the Haul Roads: {info["conditions-on-the-haul-roads"]}</p>
          <p>Dumping/Stockpile Position: {info["dumping/stockpile-position"]}</p>
          <p>Loading Conditions: {info["loading-conditions"]}</p>
          <p>Time for First Load: {info["time-for-first-load"]}</p>
          <p>Time for Last Load: {info["time-for-last-load"]}</p>
          <p>Breakdown Summary: {info["summary-of-breakdowns"]}</p>
          <p>Health and Safety Instructions: {info["health-and-safety-instructions"]}</p>
          <p>Job Specific Instructions: {info["job-specific-instructions"]}</p>
          <p>Instructions for Oncoming Shift: {info["instructions-for-the-oncoming-shift"]}</p>
        </>
      )
      break;

    case "maintenanceRaised" :
      additionalInfo = (
        <>
          <p>Vehicle: {info["vehicle"]}</p>
          <p>Driver: {info["driver"]}</p>
          <p>Fault Class: {info["faultClass"]}</p>
          <p>Issue: {info["faultName"]}</p>
          <p>Fault Description: {info["faultDescription"]}</p>
        </>
      )
      break;

    case "maintenanceComplete" :
      additionalInfo = (
        <>
          <p>Vehicle: {info["vehicle"]}</p>
          <p>Fault Class: {info["faultClass"]}</p>
          <p>Issue: {info["faultName"]}</p>
          <p>Completed By: {info["completedBy"]}</p>
          <p>Go to Maintenance SignOff to Approve</p>
        </>
      )
      break;

    case "maintenanceSuperviorSignoff" :
      additionalInfo = (
        <>
          <p>Vehicle: {info["vehicle"]}</p>
          <p>Fault Class: {info["faultClass"]}</p>
          <p>Issue: {info["faultName"]}</p>
          <p>Completed By: {info["completedBy"]}</p>
        </>
      )
      break;
    
    case "vehicleCheckListComplete" : 
      additionalInfo = (
          <>
            <p>Vehicle: {info["vehicle"]}</p>
            <p>Driver: {info["driver"]}</p>
            <p>Status: {info["status"]}</p>
          </>
        )
      break;

    case "vehicleAssigned" : 
      additionalInfo = (
        <>
        </>
      )
    break;

    case "loadReported" :
      additionalInfo = (
        <>
          <p>Driver: {info["driver"]}</p>
          <p>Go to Approve Loads to Approve</p>
        </>
      )
      break;

    case "loadApproved" :
      additionalInfo = (
        <>
          <p>Driver: {info["driver"]}</p>
          <p>Mass: {info["mass"]}</p>
          <p>Material: {info["material"]}</p>
          <p>Approved By: {info["approvedBy"]}</p>
        </>
      )
      break;

    case "loadCreatedBySupervisor" :
      additionalInfo = (
        <>
          <p>Driver: {info["driver"]}</p>
          <p>Mass: {info["mass"]}</p>
          <p>Material: {info["material"]}</p>
          <p>Approved By: {info["approvedBy"]}</p>
        </>
      )
      break;

    case "supervisorIncident":
      additionalInfo = (
        <>
          <p>Reported By: {info["reportedBy"]}</p>
        </>
      )

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