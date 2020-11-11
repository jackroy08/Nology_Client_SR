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
      <h2>Sign off Maintenance</h2>
      {signOffMaintenanceForms}
    </section>
  )
}

export default SignOffMaintenance;
