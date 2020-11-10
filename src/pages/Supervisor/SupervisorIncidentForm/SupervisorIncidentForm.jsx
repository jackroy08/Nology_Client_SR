import React, { useState } from "react";
import styles from "./SupervisorIncidentForm.module.scss";
import { createNewsItem } from "./../../../services/newsItemsService";

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
    console.log(formData)
    createNewsItem({
      ...formData,
      team: "Managment",
      type:"supervisorIncident",
      seenBy: [],
      dateCreated: new Date().toString(), 
      info: {
        reportedBy: user.fullNameStr
      },
    });
    alert('form submitted');
  }

  //Add dropdown for teams
  //add checkbox for is important

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
