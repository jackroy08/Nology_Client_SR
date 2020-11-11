import React, { useState } from "react";
import Styles from "./SupervisorIncidentForm.module.scss";
import { createNewsItem } from "./../../../services/newsItemsService";
import toastService from "../../../services/toastService";

const SupervisorIncidentForm = (props) => {

  const {user} = props;

  const [formData, setFormData] = useState({
    title: null,
    message: null,
    isImportant: null
  });

  const updateForm = (e) => {
    const newObject = {...formData};
    newObject[e.target.name] = e.target.type==="checkbox" ? e.target.checked ? true : false : e.target.value;
    setFormData(newObject);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewsItem({
      ...formData,
      team: "Managment",
      type:"supervisorIncident",
      seenBy: [],
      dateCreated: new Date(), 
      info: {
        reportedBy: user.fullNameStr
      },
    });
    toastService("Form Submitted", 2000);
  }

  return (
    <>
      <h3 className={Styles.incidentTitle}>Report An Incident</h3>
      <form className={Styles.incidentForm} onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input className={Styles.inputPrimary} type="text" name="title" placeholder="Title..." onInput={updateForm} />
        
        <label htmlFor="message">Message</label>
        <input className={Styles.inputPrimary} type="text" name="message" placeholder="Message..." onInput={updateForm} />
        
        <label htmlFor="isImportant">Important?</label>
        <input className={Styles.inputPrimary} type="checkbox" name="isImportant" value="true" onInput={updateForm} />
        
        <button className={Styles.btnPrimary} type="submit">Submit</button>
      </form>
    </>
  );
};

export default SupervisorIncidentForm;
