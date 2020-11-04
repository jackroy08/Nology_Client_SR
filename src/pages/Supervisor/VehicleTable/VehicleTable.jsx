import React, {useState} from "react";
import Styles from "./VehicleTable.module.scss";
import vehicleData from "../../../data/vehicles";

//adding made up go status and Team - remove once data is from backend
vehicleData.forEach(v => {
  v.goStatus = Math.random() > 0.5 ? true : false;
  v.currentTeam = Math.random() < 0.3 ? "Team 1" : Math.random() < 0.4 ? "Team 2" : Math.random() > 0.5 ? "Team 3" : "No Team";
});

//where do we get current user??
let supervisorTeam = "Team 1";
//// End of bullshit data


const VehicleTable = () => {

  const getVehicleJsx = (vehicle) => {
    return (
      <li key={vehicle.vehicleID} className={`${Styles.vehicleItem} ${vehicle.goStatus ? "" : Styles.unavailable}`}>
        <p>{vehicle.vehicleID}</p>
        <p>{vehicle.vehicleType}</p>
        <p>{vehicle.goStatus ? "Available" : "Not Available"}</p>
        <p>{vehicle.currentTeam ? vehicle.currentTeam : "No team"}</p>
        <p>{vehicle.currentUser}</p>
        <p>{vehicle.checkItems}</p>
        <p>{vehicle.lastChecked}</p>
        <p>{vehicle.checkedLog}</p>
      </li>
    )
  }

  const supervisorVehicles = vehicleData.filter(v => (v.currentTeam === supervisorTeam))
  .sort((a,b) => a.vehicleID - b.vehicleID);

  const [listHeight, setListHeight] = useState(0)

  let list;

  const headerOnClick = () => {
    listHeight ? setListHeight(0) : setListHeight(list.scrollHeight)
  }

  return (
    <section className={Styles.vehicleListSection}>
      <header onClick={headerOnClick}>
        <h3>Team Vehicle Stats</h3>
        <div className={Styles.vehicleSummary}>
          <p>Total Vehicles: {supervisorVehicles.length}</p>
          <p>Working Vehicles: {supervisorVehicles.filter(v => v.goStatus).length}</p>
          <p>Broken Vehicles: {supervisorVehicles.filter(v => !v.goStatus).length}</p>
        </div>
      </header>

      <ul className={Styles.vehicleList} ref={el => {list=el}} style={{height : listHeight}}>
        <li className={Styles.columnTitles}>
          <h4>Vehicle ID</h4>
          <h4>Vehicle Type</h4>
          <h4>Go Status</h4>
          <h4>Current Team</h4>
          <h4>Current User</h4>
          <h4>Check Items</h4>
          <h4>Last Checked</h4>
          <h4>Checked Log</h4>
        </li>
        {supervisorVehicles.map(getVehicleJsx)}
      </ul>
    </section>
  );
};

export default VehicleTable;
