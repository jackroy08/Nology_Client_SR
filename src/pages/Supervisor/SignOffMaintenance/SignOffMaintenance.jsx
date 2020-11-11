import React from 'react';
import Styles from "./SignOffMaintenance.module.scss"
import { useForm } from "react-hook-form";

export const SignOffMaintenance = () => {

  const { register, handleSubmit } = useForm()

  const onSubmit = () => { 
    console.log('form working?');
  }

  return (
    <section>
      <h3 className={Styles.signOffMaintenanceTitle}>Sign off Maintenance</h3>
      <form className={Styles.signOffMaintenanceForm} onSubmit={handleSubmit(onSubmit)}>
        
        <label>Driver: </label>
        <h5>Matty Operator</h5>
        
        <label>Vehicle: </label>
        <h5>Haul Truck</h5>
        
        <label>Issue: </label>
        <h5>flat tire</h5>

        <label htmlFor="goStatusAccept">Approve
        <input 
            type="radio"
            ref={register}
            id="goStatusAccept"
            name="goStatusAccept"
            />
        </label>

        <label htmlFor="goStatusReject">Reject
          <input 
            type="radio"
            ref={register}
            id="gostatusReject"
            name="goStatusReject"
          />
        </label>

        <button className={Styles.btnPrimary} type="submit">Submit</button>
      </form>
    </section>
  )
}

export default SignOffMaintenance;
