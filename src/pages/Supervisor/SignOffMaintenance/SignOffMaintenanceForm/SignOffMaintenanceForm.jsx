import React from "react";
import Styles from "./SignOffMaintenanceForm.module.scss";
import { useForm } from "react-hook-form";
import { updateVehicleIssue } from "../../../../services/VehiclesService";
import { cloneDeep } from "lodash";

const SignOffMaintenanceForm = (props) => {

  const { checkItem, onFormSubmit} = props;

  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => { 

    //removing added field before putting into firestore
    const newCheckItem = cloneDeep(checkItem);
    delete newCheckItem.vehicleType;
    
    updateVehicleIssue({
      ...newCheckItem,
      supervisorSignoff: formData.approved==="true" ? true : false
      //ToDo What is flow if superviosr rejects a maintenance fix.
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
            className={Styles.inputPrimary}
            type="radio"
            ref={register}
            value="true"
            name="approved"
          />
        </label>

        <label htmlFor="">
          Reject
          <input className={Styles.inputPrimary}
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
