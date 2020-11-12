import React, { useState, useEffect, useContext } from 'react';
import Styles from "./SignOffMaintenance.module.scss"
import { subscribeToVehicles } from "../../../services/VehiclesService";
import { UserContext } from "./../../../context/userContext";
import SignOffMaintenanceForm from "./SignOffMaintenanceForm";

export const SignOffMaintenance = () => {

  const [ vehiclesArray, setVehiclesArray ] = useState([])
  const [ filteredVehiclesArray, setFilteredVehiclesArray ] = useState([])
  const [ checkItemsArr, setCheckItemsArr ] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = subscribeToVehicles(setVehiclesArray);
    return () => {
      unsubscribe();
    }
  }, [])

  useEffect(() => {
    setFilteredVehiclesArray(vehiclesArray.filter(vehicle => vehicle.currentTeam === user.currentTeam));
  }, [vehiclesArray])

  useEffect(() => {
    let newCheckItemsArr=[];
    filteredVehiclesArray.forEach(vehicle =>{
      if(vehicle.checkItems){
        vehicle.checkItems.forEach(checkItem => {
          if(checkItem.maintenanceSignoff && !checkItem.supervisorSignoff){
            newCheckItemsArr.push({...checkItem, vehicleType: vehicle.vehicleType})
          }
        })
      }
    })
    setCheckItemsArr(newCheckItemsArr)  
  }, [filteredVehiclesArray])

  const signOffMaintenanceForms = checkItemsArr.length ? checkItemsArr.map(checkItem => (<SignOffMaintenanceForm checkItem={checkItem} key={checkItem.issueID} />)) : <h3>There are currently no maintenance issues to sign off</h3>;

  return (
    <section>
      <h3>Sign off Maintenance</h3>
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