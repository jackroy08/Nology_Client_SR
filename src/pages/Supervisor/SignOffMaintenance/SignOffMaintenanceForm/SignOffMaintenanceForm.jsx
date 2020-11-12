import React from "react";
import Styles from "./SignOffMaintenanceForm.module.scss";
import { useForm } from "react-hook-form";
import { updateVehicleIssue } from "../../../../services/VehiclesService";
import { cloneDeep } from "lodash";
import { createNewsItem } from "../../../../services/newsItemsService";

const SignOffMaintenanceForm = (props) => {

  const { checkItem, onFormSubmit} = props;

  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => { 

    //removing added field before putting into firestore
    const newCheckItem = cloneDeep(checkItem);
    delete newCheckItem.vehicleType;
    delete newCheckItem.team;
    
    updateVehicleIssue({
      ...newCheckItem,
      supervisorSignoff: formData.approved==="true" ? true : false
      //ToDo What is flow if superviosr rejects a maintenance fix.
    })

    //raise a news item
    const status = formData.approved==="true" ? "Approved" : "Rejected"
    createNewsItem({
        title: `Maintenance ${status}`,
        message: `Maintenance for ${checkItem.issue} on ${checkItem.vehicleID} was ${status}`,
        team: checkItem.team,
        type: "maintenanceSuperviorSignoff",
        isImportant: false,
        seenBy: [],
        info: { 
          vehicleID: checkItem.vehicleID,
          faultClass: checkItem.classType,
          faultName: checkItem.issue,
          completedBy: checkItem.assignedMaintenance
        },
        dateCreated: new Date()
    })


    // this function is here to update the parent that the check items have changed dynamically 
    onFormSubmit(checkItem.issueID);
  } 

  return (
    <>
      <form className={Styles.approveMaintenance} onSubmit={handleSubmit(onSubmit)}>
        <h5>Driver: 
          <p>{checkItem.operator}</p>
        </h5>
        <h5>Vehicle: 
          <p>{`${checkItem.vehicleType}-${checkItem.vehicleID}`}</p>
        </h5>
        <h5>Issue:
          <p>{checkItem.issue}</p>
        </h5>
        <h5>Class:
          <p>{checkItem.classType}</p>
        </h5>

        <label htmlFor="">
          Approve
          <input 
            type="radio"
            ref={register}
            value="true"
            name="approved"
          />
        </label>

        <label htmlFor="">
          Reject
          <input 
            type="radio"
            ref={register}
            value="false"
            name="approved"
          />
        </label>
          
        <input type="submit"/>
    </form>
    </>
  );
};

export default SignOffMaintenanceForm;
