import React, { useState } from "react";
import styles from "./SupervisorIncidentForm.module.scss";
import { createNewsItem } from "./../../../services/newsItemsService";

const SupervisorIncidentForm = (props) => {

  const {user} = props;

  const [formData, setFormData] = useState({
    title: null,
    message: null,
    team: "Managment",
    type:"Supervisor Report",
    isImportant: true,
    seenBy: [],
    info: {info:"i am info"}
  });

  const updateForm = (e) => {
    const newObject = {...formData};
    newObject[e.target.name] = e.target.value;
    setFormData(newObject);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewsItem(formData);

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
          <input type="checkbox" name="isImportant" onInput={updateForm} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default SupervisorIncidentForm;
