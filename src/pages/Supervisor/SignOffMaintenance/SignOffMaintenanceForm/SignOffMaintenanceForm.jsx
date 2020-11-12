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
          <p>{checkItem.operator}</p>
          <p>{`${checkItem.vehicleType}-${checkItem.vehicleID}`}</p>
          <p>{checkItem.issue}</p>
          <p>{checkItem.classType}</p>

        <label className={Styles.radiolbl} htmlFor="">
          Approve
          <input 
            className={Styles.inputPrimary, Styles.radio}
            type="radio"
            ref={register}
            value="true"
            name="approved"
          />
        </label>

        <label className={Styles.radiolbl} htmlFor="">
          Reject
          <input className={Styles.inputPrimary, Styles.radio}
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
