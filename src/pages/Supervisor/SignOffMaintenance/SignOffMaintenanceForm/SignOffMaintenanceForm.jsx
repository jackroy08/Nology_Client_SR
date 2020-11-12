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


    // this function is here to update the parent that the check items have changed dynamically set to false
    onFormSubmit(checkItem.issueID);
  } 

  return (
    <>
      <form className={Styles.approveMaintenance} onSubmit={handleSubmit(onSubmit)}>
          <p>{checkItem.operator}</p>
          <p>{`${checkItem.vehicleType}-${checkItem.vehicleID}`}</p>
          <p>{checkItem.issue}</p>
          <p>{checkItem.classType}</p>

        <label className={Styles.radiolbl} htmlFor="">
          Approve
          <input 
            className={`${Styles.inputPrimary} ${Styles.radio}`}
            type="radio"
            ref={register}
            value="true"
            name="approved"
          />
        </label>

        <label className={Styles.radiolbl} htmlFor="">
          Reject
          <input className={`${Styles.inputPrimary} ${Styles.radio}`}
            type="radio"
            ref={register}
            value="false"
            name="approved"
          />
        </label>
          
        <button className={Styles.btnPrimary} type="submit">Submit</button>
    </form>
    </>
  );
};

export default SignOffMaintenanceForm;
