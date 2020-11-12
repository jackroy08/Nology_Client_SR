import React, { useState, useEffect, useContext } from 'react';
import Styles from "./SignOffMaintenance.module.scss"
// import { subscribeToVehicles } from "../../../services/VehiclesService";
// import { UserContext } from "./../../../context/userContext";
import SignOffMaintenanceForm from "./SignOffMaintenanceForm";

export const SignOffMaintenance = (props) => {

  const { checkItemsArr } = props;

  // Making a copy of check items to map over so they can be removed from the list when approved or rejected.
  // This isnt handled by subscribe in supervisor as the modal doesnt update on check items state in supervisor changing as the change is deep and react diffing is shallow.
  // Logic for getting check items is in supervisor so supervisor knows the number of check items to show in the notification bubble
  // Really this should all be in context 🤷‍♀️ 
  const [ checkItemsCopy, setCheckItemsCopy ] = useState([...checkItemsArr])

  const handleSubmit = (issueID) => {
    const filteredItems = checkItemsCopy.filter(checkItemCopy => checkItemCopy.issueID !== issueID);
    setCheckItemsCopy(filteredItems)
  }

  const signOffMaintenanceForms = checkItemsCopy.length ? checkItemsCopy.map(checkItem => (<SignOffMaintenanceForm checkItem={checkItem} key={checkItem.issueID} onFormSubmit={handleSubmit} />)) : <h3>There are currently no maintenance issues to sign off</h3>;

  return (
    <section>
      <h2>Sign off Maintenance</h2>
      {signOffMaintenanceForms}
    </section>
  )
}

export default SignOffMaintenance;
