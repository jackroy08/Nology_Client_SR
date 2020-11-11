import React, { useState, useEffect } from 'react';
import Styles from "./SignOffMaintenance.module.scss"
import { useForm } from "react-hook-form";
import { subscribeToVehicles } from "../../../services/VehiclesService";

export const SignOffMaintenance = () => {

  const [ vehiclesArray, setVehiclesArray ] = useState([])
  const [ filteredVehiclesArray, setFilteredVehiclesArray ] = useState([])

  useEffect(() => {
    const unsubscribe = subscribeToVehicles(setVehiclesArray);
    return () => {
      unsubscribe();
    }
  }, [])

  useEffect(() => {
    setFilteredVehiclesArray(vehiclesArray);
    console.log(vehiclesArray);
    console.log(filteredVehiclesArray);
  }, [vehiclesArray])

  const { register, handleSubmit } = useForm()

  const onSubmit = () => { 
    console.log('form working?');
  } 

  return (
    <section>
      <h2>Sign off Maintenance</h2>
      <form className={Styles.addLoad} onSubmit={handleSubmit(onSubmit)}>
        <h5>Driver: Matty Operator</h5>
        <h5>Vehicle: Haul Truck</h5>
        <h5>Issue: flat tire</h5>

        <label htmlFor="">
          Approve
          <input 
            type="radio"
            ref={register}
            id=""
            name="goStatus"
            />
        </label>

        <label htmlFor="">
          Reject
          <input 
            type="radio"
            ref={register}
            id=""
            name="goStatus"
          />
        </label>
        
        <input type="submit"/>
      </form>
    </section>
  )
}

export default SignOffMaintenance;
