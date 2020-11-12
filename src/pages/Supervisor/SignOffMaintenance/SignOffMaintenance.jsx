import React, { useState } from 'react';
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
    <section className={Styles.signOffMaintenanceSection}>
      <h3 className={Styles.signOffMaintenanceTitle}>Sign off Maintenance</h3>
      <div className={Styles.columnTitles}>
        <h5>Driver</h5>
        <h5>Vehicle</h5>
        <h5>Issue</h5>
        <h5>Class</h5>
        <h5>Approve</h5>
        <h5>Reject</h5>
        <h5>Submit</h5>
      </div>
      {signOffMaintenanceForms}
    </section>
  )
}

export default SignOffMaintenance;

// below is Nick's styling mods, before pulling updated contact from Master, this now needs going into {signOffMaintenanceForms}

      // <h3 className={Styles.signOffMaintenanceTitle}>Sign off Maintenance</h3>
      // <form className={Styles.signOffMaintenanceForm} onSubmit={handleSubmit(onSubmit)}>
        
      //   <label>Driver: </label>
      //   <h5>Matty Operator</h5>
        
      //   <label>Vehicle: </label>
      //   <h5>Haul Truck</h5>
        
      //   <label>Issue: </label>
      //   <h5>flat tire</h5>

      //   <label htmlFor="goStatusAccept">Approve
      //   <input 
      //       type="radio"
      //       ref={register}
      //       id="goStatusAccept"
      //       name="goStatusAccept"
      //       />
      //   </label>

      //   <label htmlFor="goStatusReject">Reject
      //     <input 
      //       type="radio"
      //       ref={register}
      //       id="gostatusReject"
      //       name="goStatusReject"
      //     />
      //   </label>

      //   <button className={Styles.btnPrimary} type="submit">Submit</button>
      // </form>