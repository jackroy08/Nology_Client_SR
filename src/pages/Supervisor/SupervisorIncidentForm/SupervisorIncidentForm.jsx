import React, { useState } from "react";
import styles from "./SupervisorIncidentForm.module.scss";
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input type="text" name="title" placeholder="Title..." onInput={updateForm} />
        </label>
        <label htmlFor="message">
          Message
          <input type="text" name="message" placeholder="Message..." onInput={updateForm} />
        </label>
        <label htmlFor="isImportant">
          Important?
          <input type="checkbox" name="isImportant" value="true" onInput={updateForm} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default SupervisorIncidentForm;
