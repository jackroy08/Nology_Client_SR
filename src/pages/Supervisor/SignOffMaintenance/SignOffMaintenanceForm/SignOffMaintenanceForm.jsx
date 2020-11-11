import React from "react";
import Styles from "./SignOffMaintenanceForm.module.scss";
import { useForm } from "react-hook-form";
import { updateVehicleIssue } from "../../../../services/VehiclesService";

const SignOffMaintenanceForm = (props) => {

  const { checkItem } = props;

  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => { 
    updateVehicleIssue({
      ...checkItem,
      supervisorSignoff: formData.approved==="true" ? true : false
      //ToDo What is flow if superviosr rejects a maintenance fix.
    })
  } 

  return (
    <>
      <form className={Styles.addLoad} onSubmit={handleSubmit(onSubmit)}>
        <h5>Driver: {checkItem.operator}</h5>
        <h5>Vehicle: {`${checkItem.vehicleType}-${checkItem.vehicleID}`}</h5>
        <h5>Issue: {checkItem.issue}</h5>
        <h5>{checkItem.classType}</h5>

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
